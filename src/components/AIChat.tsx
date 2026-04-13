import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Brain, Send, Loader2, Sparkles } from 'lucide-react';
import { AISettings, AppState } from '../types';
import { GoogleGenAI } from "@google/genai";

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
      let initialMessage = 'Chào bạn! Mình là trợ lý học tập AI. Bạn có thắc mắc gì về ngữ pháp, từ vựng hay muốn luyện tập gì không?';
      if (wordsToReview > 0) {
        initialMessage = `Chào bạn! Hôm nay bạn có **${wordsToReview} từ vựng** cần ôn tập đấy. Hãy vào phần "Ôn tập SRS" để học nhé! Bạn cần mình giúp gì thêm không?`;
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
        You are an expert English learning assistant. Help the user with their English learning journey. Keep responses concise, encouraging, and helpful.
        User Context:
        - Level: ${state.userLevel || 'Unknown'}
        - Current Week: ${state.currentWeek}, Day: ${state.currentDay}
        - XP: ${state.xp}
        - Streak: ${state.streak} days
        - Words to review today: ${wordsToReview}
        
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
                {m.content}
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
