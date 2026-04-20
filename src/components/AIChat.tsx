import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Send, Loader2, Sparkles, AlertTriangle, MessageSquare, BookOpen, HelpCircle, Languages, Zap } from 'lucide-react';
import { AISettings, AppState, ErrorRecord, Flashcard } from '../types';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { VocabModal } from './VocabModal';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM } from '../data/curriculum';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  aiSettings: AISettings;
  state: AppState;
  onUpdateState: (updates: Partial<AppState>) => void;
  onSaveFlashcard?: (card: any) => void;
}

type LearningStep = 'input' | 'output' | 'feedback' | 'repeat' | 'challenge' | 'mini_exercise' | 'reflex';

export function AIChat({ isOpen, onClose, aiSettings, state, onUpdateState, onSaveFlashcard }: AIChatProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Learning System State
  const [currentStep, setCurrentStep] = useState<LearningStep>('output');
  const [activeErrorPattern, setActiveErrorPattern] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isVocabModalOpen, setIsVocabModalOpen] = useState(false);

  const wordsToReview = state.flashcards.filter(c => new Date(c.nextReview) <= new Date()).length;

  useEffect(() => {
    if (messages.length === 0) {
      let initialMessage = `**1. Input:** Welcome to your daily training! Today we will talk about your daily routine at work. A daily routine helps you stay organized and productive. For example, I usually start my day by checking emails and planning my tasks.

**2. Question:** What is the first thing you usually do when you arrive at work? Please answer in English.`;
      if (wordsToReview > 0) {
        initialMessage = `Chào bạn! Hôm nay bạn có **${wordsToReview} từ vựng** cần ôn tập. Hãy hoàn thành phần "Ôn tập SRS" trước nhé. Sau đó, chúng ta sẽ bắt đầu bài học mới. Bạn đã sẵn sàng chưa?`;
      }
      setMessages([{ role: 'ai', content: initialMessage }]);
      setCurrentStep('output');
    }
  }, [wordsToReview, messages.length]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    };

    // Scroll immediately
    scrollToBottom();
    
    // Scroll again after a short delay to account for markdown rendering
    const timer = setTimeout(scrollToBottom, 100);
    const timer2 = setTimeout(scrollToBottom, 300);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [messages, loading]);

  const handleQuickAction = (action: string) => {
    let prompt = '';
    switch (action) {
      case 'explain':
        prompt = "Bạn có thể giải thích kỹ hơn về cấu trúc ngữ pháp trong câu vừa rồi không?";
        break;
      case 'example':
        prompt = "Cho mình thêm 2 ví dụ khác sử dụng cấu trúc này nhé.";
        break;
      case 'translate':
        prompt = "Dịch giúp mình câu trả lời vừa rồi sang tiếng Việt.";
        break;
      case 'vocab':
        prompt = "Trong câu này có từ vựng nào hay ở trình độ B1/B2 không?";
        break;
    }
    if (prompt) {
      setInput(prompt);
      setTimeout(() => sendMessage(prompt), 10);
    }
  };

  const handleWordClick = (word: string) => {
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    if (cleanWord && cleanWord.length > 1) {
      setSelectedWord(cleanWord);
      setIsVocabModalOpen(true);
    }
  };

  const currentLesson = CURRICULUM.find(l => l.week === state.currentWeek && l.day === state.currentDay);

  const startReflexMode = () => {
    setCurrentStep('reflex');
    const introMessage = `🚀 **Bắt đầu luyện phản xạ Speaking!**
    
    **Chủ đề:** ${currentLesson?.topic || 'Daily Communication'}
    **Grammar:** ${currentLesson?.title.split(': ')[1] || 'General'}
    
    **Luật chơi:**
    1. Mình sẽ đưa ra tình huống.
    2. Mình nói 1 câu, bạn phải trả lời **NGAY LẬP TỨC** (trong 3-5s).
    3. Nếu sai, bạn phải nói lại cho đúng.
    
    Bạn sẵn sàng chưa? Hãy gõ "Sẵn sàng" để bắt đầu!`;
    setMessages(prev => [...prev, { role: 'ai', content: introMessage }]);
  };

  const sendMessage = async (overrideInput?: string) => {
    const messageContent = overrideInput || input;
    if (!messageContent.trim()) return;

    const userMessage = { role: 'user' as const, content: messageContent };
    setMessages(prev => [...prev, userMessage]);
    if (!overrideInput) setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const errorLogStr = state.errorLog && state.errorLog.length > 0 
        ? state.errorLog.map(e => `${e.pattern} (Count: ${e.count})`).join(', ') 
        : 'Chưa có';

      const isReflex = currentStep === 'reflex';
      
      const contextPrompt = isReflex ? `
        BẠN LÀ AI CONVERSATION COACH - CHUYÊN LUYỆN PHẢN XẠ SPEAKING.
        BẠN KHÔNG PHẢI CHATBOT. BẠN LÀ HUẤN LUYỆN VIÊN ÉP NGƯỜI HỌC NÓI VÀ PHẢN XẠ NHANH.

        INPUT:
        - Grammar hôm nay: ${currentLesson?.explanation || 'General English'}
        - Từ vựng chính: ${state.flashcards.slice(-5).map(c => c.word).join(', ')}
        - Lỗi thường gặp: ${errorLogStr}
        - Chủ đề bài học: ${currentLesson?.topic || 'Daily Life'}

        NGUYÊN TẮC BẮT BUỘC:
        1. Không nói dài dòng. Không giảng lý thuyết. Không chat tự do.
        2. Luôn ép người học trả lời. Giữ hội thoại ngắn, nhanh, có nhịp.
        3. Đóng vai người đối thoại trong tình huống thực tế. Mỗi lần chỉ nói 1-2 câu.
        4. ÉP PHẢN XẠ: Yêu cầu user trả lời trong 3-5 giây. Nếu họ trả lời chậm hoặc ngắn quá, hãy nhắc nhẹ.
        5. FEEDBACK NGẮN: Sau khi user trả lời, sửa lỗi chính (ngắn), highlight grammar sai hoặc từ chưa tự nhiên.
        6. REPEAT: Nếu user sai, BẮT BUỘC yêu cầu họ viết lại câu đúng.
        7. ÉP DÙNG KIẾN THỨC: Phải ép user dùng Grammar và Từ vựng của bài học hôm nay.
        8. TĂNG ĐỘ KHÓ: Câu sau khó hơn câu trước.

        FLOW HỘI THOẠI:
        - Nếu user nói "Sẵn sàng", hãy bắt đầu bằng 1 Scenario và câu nói đầu tiên của bạn.
        - Nếu user trả lời, hãy Feedback -> (Repeat nếu cần) -> Tiếp tục lượt tiếp theo.

        Lịch sử:
        ${messages.slice(-5).map(m => `${m.role === 'user' ? 'User' : 'Coach'}: ${m.content}`).join('\n')}
        
        User message: ${messageContent}
      ` : `
        Bạn là AI Language Coach + Learning Engine. Bạn KHÔNG phải chatbot. Bạn là hệ thống đào tạo.
        Mục tiêu: Đưa người học từ A2 → B2 trong 90 ngày.

        User Context:
        - Trình độ hiện tại: ${state.userLevel || 'A2'}
        - Current Week: ${state.currentWeek}, Day: ${state.currentDay}
        - Lỗi theo danh mục: Tense (${state.errorStats?.tense || 0}), Preposition (${state.errorStats?.preposition || 0}), Article (${state.errorStats?.article || 0}), Word Choice (${state.errorStats?.wordChoice || 0})
        - Lỗi cụ thể (Error Log): ${errorLogStr}
        - Từ vựng cần ôn tập: ${state.flashcards.filter(c => new Date(c.nextReview) <= new Date()).map(c => c.word).join(', ')}
        
        System State:
        - CURRENT_STEP: ${currentStep.toUpperCase()}

        ⚠️ NGUYÊN TẮC BẮT BUỘC:
        1. Nếu user hỏi bằng tiếng Việt về hệ thống, về từ vựng cần ôn tập, hoặc các câu hỏi meta (không phải đang làm bài tập), hãy TRẢ LỜI TRỰC TIẾP bằng tiếng Việt một cách thân thiện. Đừng cố sửa lỗi tiếng Anh nếu họ đang hỏi bằng tiếng Việt để tìm hiểu thông tin.
        2. Mỗi phiên học chính phải tuân thủ flow: INPUT → OUTPUT → FEEDBACK → REPEAT → CHALLENGE.
        3. Nếu user đang thực hiện bài tập (viết tiếng Anh), bạn PHẢI phân loại lỗi đó vào một "Error Pattern" ngắn gọn và gán vào 1 trong 4 category: tense, preposition, article, wordChoice.
           Định dạng: "[ERROR_PATTERN: tên_lỗi | category]"
           VD: "[ERROR_PATTERN: Subject-Verb Agreement | tense]"

        🧠 HƯỚNG DẪN XỬ LÝ:

        A. NẾU USER HỎI THÔNG TIN (META QUESTION):
        - Trả lời bằng tiếng Việt.
        - Giải đáp thắc mắc của họ (VD: liệt kê các từ cần ôn tập nếu họ hỏi).
        - Sau đó nhắc họ quay lại bài học hoặc hoàn thành SRS.

        B. NẾU USER ĐANG LÀM BÀI TẬP (THEO STEP):
        
        ${currentStep === 'output' ? `
        User vừa trả lời câu hỏi (OUTPUT). Nhiệm vụ của bạn:
        1. Đưa ra FEEDBACK (Coaching Box - Tiếng Việt):
           - Correction: sửa lỗi
           - WHY: giải thích vì sao sai (ngắn gọn)
           - Upgrade: nâng cấp câu lên mức B2
           - Pattern: Chỉ ra lỗi lặp nếu có. NẾU CÓ LỖI, BẮT BUỘC PHẢI CÓ DÒNG NÀY: "[ERROR_PATTERN: tên_lỗi_ngắn_gọn | category]"
        2. Yêu cầu user REPEAT (viết lại câu đã sửa).
        
        Định dạng trả lời:
        **4. Feedback:**
        - Correction: ...
        - WHY: ...
        - Upgrade: ...
        [ERROR_PATTERN: Subject-Verb Agreement | tense] (Chỉ ghi nếu có lỗi)
        **5. Repeat:** Hãy viết lại câu hoàn chỉnh sau khi đã sửa nhé!
        ` : ''}

        ${currentStep === 'repeat' ? `
        User vừa viết lại câu (REPEAT). Nhiệm vụ của bạn:
        1. Kiểm tra xem user viết lại đã đúng chưa.
        2. Nếu ĐÚNG: Khen ngợi ngắn gọn và đưa ra CHALLENGE (Câu hỏi khó hơn, ép dùng từ mới/cấu trúc vừa học).
        3. Nếu SAI: Yêu cầu REPEAT lại. Cung cấp lại [ERROR_PATTERN: tên_lỗi] nếu vẫn sai.
        
        Định dạng trả lời (Nếu đúng):
        **Tuyệt vời!**
        **6. Challenge:** [Câu hỏi thử thách mới]
        ` : ''}

        ${currentStep === 'challenge' ? `
        User vừa trả lời câu hỏi thử thách (CHALLENGE). Nhiệm vụ của bạn:
        1. Đưa ra FEEDBACK giống như bước Output.
        2. Yêu cầu user REPEAT câu đã sửa.
        ` : ''}

        ${currentStep === 'mini_exercise' ? `
        User đang làm Mini-Exercise do mắc lỗi "${activeErrorPattern}" quá nhiều lần.
        Nhiệm vụ của bạn:
        1. Đánh giá câu trả lời của user cho bài tập khắc phục lỗi này.
        2. Nếu đúng, khen ngợi và cho phép quay lại bài học chính (chuyển sang CHALLENGE).
        3. Nếu sai, giải thích lại và cho một câu bài tập tương tự.
        ` : ''}

        Lịch sử trò chuyện:
        ${messages.map(m => `${m.role === 'user' ? 'User' : 'Coach'}: ${m.content}`).join('\n')}
        
        User message: ${input}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contextPrompt,
      });
      
      let aiResponse = response.text || 'Xin lỗi, mình không hiểu.';
      
      const errorMatch = aiResponse.match(/\[ERROR_PATTERN:\s*(.+?)\s*\|\s*(.+?)\]/);
      let detectedError = null;
      let detectedCategory = null;
      if (errorMatch && errorMatch[1] && errorMatch[2]) {
        detectedError = errorMatch[1].trim();
        detectedCategory = errorMatch[2].trim().toLowerCase();
        aiResponse = aiResponse.replace(/\[ERROR_PATTERN:\s*(.+?)\s*\|\s*(.+?)\]/g, '').trim();
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);

      let nextStep = currentStep;

      if (detectedError && onUpdateState) {
        const currentErrors = state.errorLog || [];
        const existingErrorIndex = currentErrors.findIndex(e => e.pattern.toLowerCase() === detectedError?.toLowerCase());
        
        let newErrors = [...currentErrors];
        let errorCount = 1;

        if (existingErrorIndex >= 0) {
          newErrors[existingErrorIndex].count += 1;
          newErrors[existingErrorIndex].lastSeen = new Date().toISOString();
          newErrors[existingErrorIndex].examples.push(input);
          errorCount = newErrors[existingErrorIndex].count;
        } else {
          newErrors.push({
            id: Date.now().toString(),
            pattern: detectedError,
            count: 1,
            examples: [input],
            lastSeen: new Date().toISOString()
          });
        }

        const newErrorStats = { ...state.errorStats };
        if (detectedCategory === 'tense') newErrorStats.tense += 1;
        else if (detectedCategory === 'preposition') newErrorStats.preposition += 1;
        else if (detectedCategory === 'article') newErrorStats.article += 1;
        else if (detectedCategory === 'wordchoice') newErrorStats.wordChoice += 1;

        onUpdateState({ errorLog: newErrors, errorStats: newErrorStats });

        if (errorCount >= 3 && currentStep !== 'mini_exercise') {
          nextStep = 'mini_exercise';
          setActiveErrorPattern(detectedError);
          setTimeout(() => {
            setMessages(prev => [...prev, { 
              role: 'ai', 
              content: `⚠️ **Hệ thống phát hiện lỗi lặp lại!**\nBạn đã mắc lỗi **"${detectedError}"** ${errorCount} lần. Chúng ta hãy tạm dừng để làm một bài tập nhỏ khắc phục lỗi này nhé.\n\n**Mini-Exercise:** Hãy dịch câu sau sang tiếng Anh, chú ý tránh lỗi ${detectedError}:\n"Cô ấy đi làm mỗi ngày."` 
            }]);
          }, 1000);
        }
      }

      if (nextStep !== 'mini_exercise') {
        if (currentStep === 'output') {
          nextStep = 'repeat';
        } else if (currentStep === 'repeat') {
          if (aiResponse.includes('Challenge:')) {
            nextStep = 'challenge';
          } else {
            nextStep = 'repeat';
          }
        } else if (currentStep === 'challenge') {
          nextStep = 'repeat';
        }
      } else if (currentStep === 'mini_exercise' && aiResponse.includes('Tuyệt vời') || aiResponse.includes('Challenge:')) {
         nextStep = 'challenge';
         setActiveErrorPattern(null);
      }

      setCurrentStep(nextStep);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[650px] flex flex-col shadow-xl border-t sm:border border-border sm:rounded-3xl bg-card overflow-hidden transition-all duration-300 ease-in-out">
      <CardHeader className="bg-primary text-primary-foreground p-5 flex flex-row justify-between items-center border-b border-border/10 shadow-sm relative z-10 rounded-t-3xl">
        <div className="flex flex-col">
          <CardTitle className="text-lg font-bold font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-foreground/70" /> AI Language Coach
          </CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse opacity-80"></div>
            <span className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-widest">Online Training</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {currentStep !== 'reflex' && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={startReflexMode}
              className="h-7 px-2 text-[10px] font-bold bg-orange-500 hover:bg-orange-600 text-white border-transparent animate-pulse"
            >
              <Zap className="w-3 h-3 mr-1" /> Luyện phản xạ
            </Button>
          )}
          {currentStep === 'mini_exercise' && (
            <Badge className="bg-destructive text-destructive-foreground border-none animate-bounce">
              <AlertTriangle className="w-3 h-3 mr-1" /> Fix
            </Badge>
          )}
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-none uppercase text-[9px] tracking-tighter hover:bg-primary-foreground/30">
            {currentStep}
          </Badge>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="text-primary-foreground hover:bg-primary-foreground/20 h-10 w-10 rounded-full ml-1 flex items-center justify-center"
            title="Đóng"
          >
            <span className="text-xl font-bold">✕</span>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0 min-h-0 bg-background/50 relative">
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth hide-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`p-4 rounded-2xl max-w-[90%] shadow-sm ${
                m.role === 'user' 
                  ? 'bg-primary text-primary-foreground rounded-br-sm' 
                  : 'bg-card border border-border rounded-bl-sm text-card-foreground'
              }`}>
                {m.role === 'ai' ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-strong:text-primary prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-4 prose-headings:mb-2">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => {
                          if (typeof children === 'string') {
                            return (
                              <p>
                                {children.split(' ').map((word, idx) => (
                                  <span 
                                    key={idx} 
                                    className="hover:text-primary hover:underline cursor-pointer transition-colors"
                                    onClick={() => handleWordClick(word)}
                                  >
                                    {word}{' '}
                                  </span>
                                ))}
                              </p>
                            );
                          }
                          return <p>{children}</p>;
                        }
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="font-medium text-sm leading-relaxed">{m.content}</p>
                )}
              </div>
              <span className="text-[9px] font-bold text-muted-foreground mt-1 uppercase tracking-wider px-1">
                {m.role === 'user' ? 'Bạn' : 'Coach'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
          {loading && (
            <div className="flex items-start gap-2">
              <div className="p-4 rounded-2xl bg-card border border-border rounded-bl-sm shadow-sm">
                <div className="flex gap-1">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary/70 rounded-full" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-background/50 backdrop-blur-sm border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-bold border-primary/20 text-primary hover:bg-primary/5 whitespace-nowrap"
            onClick={() => handleQuickAction('explain')}
          >
            <HelpCircle className="w-3 h-3 mr-1" /> Giải thích ngữ pháp
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-bold border-primary/20 text-primary hover:bg-primary/5 whitespace-nowrap"
            onClick={() => handleQuickAction('example')}
          >
            <BookOpen className="w-3 h-3 mr-1" /> Cho ví dụ khác
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-bold border-primary/20 text-primary hover:bg-primary/5 whitespace-nowrap"
            onClick={() => handleQuickAction('translate')}
          >
            <Languages className="w-3 h-3 mr-1" /> Dịch câu này
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 rounded-full text-[10px] font-bold border-primary/20 text-primary hover:bg-primary/5 whitespace-nowrap"
            onClick={() => handleQuickAction('vocab')}
          >
            <Brain className="w-3 h-3 mr-1" /> Từ vựng hay
          </Button>
        </div>

        <div className="p-4 bg-card border-t border-border flex gap-2">
          <div className="flex-1 relative">
            <input 
              className="w-full p-3 pr-10 bg-background border-2 border-transparent focus:border-primary/30 rounded-2xl outline-none transition-all text-sm font-medium text-foreground"
              placeholder={currentStep === 'repeat' ? "Viết lại câu đã sửa..." : "Trả lời bằng tiếng Anh..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              disabled={loading}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <Button 
            onClick={() => sendMessage()} 
            disabled={loading || !input.trim()} 
            className="h-12 w-12 rounded-2xl bg-primary hover:bg-primary/90 shadow-sm p-0 flex items-center justify-center transition-transform active:scale-95"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </Button>
        </div>
      </CardContent>


      {isVocabModalOpen && selectedWord && (
        <VocabModal 
          word={selectedWord}
          isOpen={isVocabModalOpen}
          onClose={() => {
            setIsVocabModalOpen(false);
            setSelectedWord(null);
          }}
          onSave={(card) => {
            if (onSaveFlashcard) {
              onSaveFlashcard(card);
            }
          }}
          aiSettings={aiSettings}
        />
      )}
    </div>
  );
}
