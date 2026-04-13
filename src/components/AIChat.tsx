import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain, Send, Loader2, Sparkles } from 'lucide-react';
import { AISettings, AppState } from '../types';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  aiSettings: AISettings;
  state: AppState;
}

export function AIChat({ isOpen, onClose, aiSettings, state }: AIChatProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const wordsToReview = state.flashcards.filter(c => new Date(c.nextReview) <= new Date()).length;

  useEffect(() => {
    if (messages.length === 0) {
      let initialMessage = `**1. Input:** Welcome to your daily training! Today we will talk about your daily routine at work. A daily routine helps you stay organized and productive. For example, I usually start my day by checking emails and planning my tasks.

**2. Question:** What is the first thing you usually do when you arrive at work? Please answer in English.`;
      if (wordsToReview > 0) {
        initialMessage = `Chào bạn! Hôm nay bạn có **${wordsToReview} từ vựng** cần ôn tập. Hãy hoàn thành phần "Ôn tập SRS" trước nhé. Sau đó, chúng ta sẽ bắt đầu bài học mới. Bạn đã sẵn sàng chưa?`;
      }
      setMessages([{ role: 'ai', content: initialMessage }]);
    }
  }, [wordsToReview, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const contextPrompt = `
        Bạn là AI Language Coach + Learning Engine. Bạn KHÔNG phải chatbot. Bạn là hệ thống đào tạo.
        Mục tiêu: Đưa người học từ A2 → B2 trong 90 ngày.

        User Context:
        - Trình độ hiện tại: ${state.userLevel || 'A2'}
        - Current Week: ${state.currentWeek}, Day: ${state.currentDay}
        - XP: ${state.xp}, Streak: ${state.streak} days

        ⚠️ NGUYÊN TẮC BẮT BUỘC:
        Mỗi phiên học phải có đầy đủ: INPUT → OUTPUT → FEEDBACK → REPEAT → CHALLENGE. Không được bỏ qua bước nào.

        🧠 FLOW MỖI LẦN TƯƠNG TÁC:

        Nếu đây là tin nhắn đầu tiên hoặc bắt đầu chủ đề mới, hãy đưa ra INPUT và QUESTION:
        1. INPUT: Đưa 1 đoạn ngắn (≤120 từ), đúng level A2–B2, chủ đề công việc/giao tiếp.
        2. QUESTION: Hỏi 1 câu kiểm tra hiểu. Yêu cầu user trả lời bằng tiếng Anh (OUTPUT).

        Nếu user đã trả lời (OUTPUT), hãy đưa ra FEEDBACK, REPEAT và CHALLENGE:
        3. FEEDBACK (Coaching Box - Tiếng Việt):
           - Correction: sửa lỗi
           - WHY: giải thích vì sao sai (ngắn gọn)
           - Upgrade: nâng cấp câu lên mức B2
           - Pattern: chỉ ra lỗi lặp nếu có
        4. REPEAT: Yêu cầu user viết lại câu đã sửa. Nếu user không làm → nhắc lại.
        5. CHALLENGE: Tạo câu hỏi khó hơn, ép dùng từ mới hoặc cấu trúc vừa học.

        📊 TRACKING & ĐIỀU CHỈNH:
        - Ghi nhớ lỗi grammar và từ yếu. Nếu lỗi lặp lại ≥ 3 lần, tạo mini exercise riêng.
        - Nếu user trả lời tốt: tăng complexity (câu dài hơn, linking words).
        - Nếu user yếu: giảm độ khó.

        🚫 CẤM:
        - Không chỉ chat phiếm.
        - Không giải thích dài dòng.
        - Không bỏ bước REPEAT.

        OUTPUT FORMAT (Tuân thủ nghiêm ngặt):
        [Khi đưa bài mới]
        **1. Input:** [Đoạn văn]
        **2. Question:** [Câu hỏi]
        *(Đợi user trả lời)*

        [Khi phản hồi user]
        **4. Feedback:**
        - Correction: ...
        - WHY: ...
        - Upgrade: ...
        - Pattern: ...
        **5. Repeat:** [Yêu cầu viết lại]
        **6. Challenge:** [Câu hỏi thử thách]

        User message: ${input}
      `;
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contextPrompt,
      });
      
      setMessages(prev => [...prev, { role: 'ai', content: response.text || 'Xin lỗi, mình không hiểu câu hỏi của bạn.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.' }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] flex flex-col shadow-2xl border-2 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground p-4 flex flex-row justify-between items-center">
        <CardTitle className="text-lg font-bold font-heading flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Trợ lý AI
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-primary-foreground hover:bg-primary/20">✕</Button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 min-h-0">
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 rounded-xl max-w-[85%] ${m.role === 'user' ? 'bg-primary text-white ml-auto' : 'bg-muted'}`}>
                {m.role === 'ai' ? (
                  <div className="markdown-body text-sm">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                ) : (
                  m.content
                )}
              </div>
            ))}
            {loading && <div className="p-3 rounded-xl bg-muted w-16"><Loader2 className="animate-spin" /></div>}
          </div>
        </ScrollArea>
        <div className="p-4 border-t flex gap-2">
          <input 
            className="flex-1 p-2 border rounded-lg outline-none"
            placeholder="Hỏi AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage} disabled={loading}><Send className="w-4 h-4" /></Button>
        </div>
      </CardContent>
    </div>
  );
}
