import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { lookupWord, WordLookupResult } from '../services/ai';
import { AISettings } from '../types';
import { Loader2, Volume2 } from 'lucide-react';

interface WordTooltipProps {
  word: string;
  settings: AISettings;
  children: React.ReactNode;
}

export function WordTooltip({ word, settings, children }: WordTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<WordLookupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

  const playPronunciation = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(cleanWord);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
    
    if (!data && !loading) {
      setLoading(true);
      lookupWord(cleanWord, settings).then(result => {
        setData(result);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-[100] bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 p-4 bg-card rounded-xl shadow-sm border border-border pointer-events-none"
          >
            {loading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : data ? (
              <div className="space-y-3">
                <div className="border-b border-border pb-2 flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-primary tracking-widest mb-1">Nghĩa tiếng Việt</p>
                    <p className="text-lg font-semibold text-foreground">{data.vietnamese}</p>
                  </div>
                  <button 
                    onClick={playPronunciation}
                    className="p-2 hover:bg-muted rounded-full text-primary transition-colors pointer-events-auto"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div>
                  <p className="text-[10px] font-semibold uppercase text-muted-foreground tracking-widest mb-1">Giải thích</p>
                  <p className="text-sm font-medium text-muted-foreground leading-snug">
                    {data.explanation}
                  </p>
                </div>

                {data.contexts.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase text-muted-foreground tracking-widest mb-1">Ngữ cảnh sử dụng</p>
                    <ul className="space-y-1">
                      {data.contexts.map((ctx, i) => (
                        <li key={i} className="text-[11px] italic text-muted-foreground leading-tight">
                          • {ctx}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">Không có dữ liệu</p>
            )}
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-border" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
