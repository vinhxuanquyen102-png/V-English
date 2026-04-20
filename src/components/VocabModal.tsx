import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Flashcard } from '../types';
import { VocabMindMap } from './VocabMindMap';

import { lookupWord } from '../services/ai';
import { AISettings } from '../types';
import { Loader2, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

interface VocabModalProps {
  word: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (card: Omit<Flashcard, 'id' | 'nextReview' | 'interval' | 'easeFactor' | 'repetition' | 'createdAt'>) => void;
  initialExample?: string;
  initialVietnamese?: string;
  sourceLesson?: string;
  sourceSentence?: string;
  aiSettings: AISettings;
}

export function VocabModal({ word, isOpen, onClose, onSave, initialExample, initialVietnamese, sourceLesson, sourceSentence, aiSettings }: VocabModalProps) {
  const [definition, setDefinition] = useState('Loading...');
  const [vietnamese, setVietnamese] = useState('');
  const [example, setExample] = useState('');
  const [ipa, setIpa] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [synonyms, setSynonyms] = useState<any[]>([]);
  const [antonyms, setAntonyms] = useState<any[]>([]);
  const [examples, setExamples] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setDefinition('Đang tải định nghĩa...');
      
      lookupWord(word, aiSettings).then(result => {
        if (result.vietnamese === "Không thể tra cứu") {
          toast.error("Không thể tra cứu từ vựng. Vui lòng kiểm tra API Key hoặc thử lại sau.");
        }
        setDefinition(result.explanation);
        setVietnamese(initialVietnamese || result.vietnamese);
        setExample(initialExample || (result.contexts.length > 0 ? result.contexts[0] : `Example with ${word}`));
        setIpa(result.ipa || '');
        setPartOfSpeech(result.partOfSpeech || '');
        setSynonyms(result.synonyms || []);
        setAntonyms(result.antonyms || []);
        setExamples(result.contexts || []);
        setLoading(false);
      }).catch(() => {
        toast.error("Lỗi kết nối khi tra cứu từ vựng.");
        setDefinition(`A common English word: ${word}`);
        setVietnamese(initialVietnamese || '');
        setExample(initialExample || '');
        setLoading(false);
      });
    }
  }, [word, isOpen, initialExample, initialVietnamese, aiSettings]);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-card rounded-xl p-6 md:p-8 w-full max-w-md shadow-sm border border-border scale-in-center max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-lg h-14 w-14 border border-border bg-muted text-primary hover:bg-muted/80"
              onClick={() => speak(word)}
            >
              <Volume2 className="w-6 h-6" />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-semibold text-foreground leading-none">{word}</h2>
              </div>
              <div className="flex items-center gap-2 mt-2">
                {partOfSpeech && <Badge variant="secondary" className="bg-muted text-muted-foreground">{partOfSpeech}</Badge>}
                {ipa && (
                  <button 
                    className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono font-medium hover:text-primary transition-colors group/ipa"
                    onClick={() => speak(word)}
                    title="Nghe phát âm"
                  >
                    /{ipa}/
                    <Volume2 className="w-3.5 h-3.5 opacity-0 group-hover/ipa:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full bg-muted hover:bg-muted/80 text-muted-foreground">✕</Button>
        </div>
        
        <div className="space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
              <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider animate-pulse">Đang tra cứu từ vựng...</p>
            </div>
          ) : (
            <>
              <div className="p-4 bg-muted rounded-xl border border-border">
                <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 block">Định nghĩa (EN)</Label>
                <p className="font-medium text-foreground leading-relaxed">{definition}</p>
              </div>

              <div>
                <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Loại từ (Part of Speech)</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Noun', 'Verb', 'Adj', 'Adv', 'Prep'].map((pos) => (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => setPartOfSpeech(pos)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        partOfSpeech === pos 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
                <Input 
                  value={partOfSpeech} 
                  onChange={(e) => setPartOfSpeech(e.target.value)} 
                  placeholder="Ví dụ: Noun, Verb, Phrasal Verb..."
                  className="h-10 rounded-lg border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 font-medium bg-card" 
                />
              </div>

              <div>
                <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Nghĩa tiếng Việt</Label>
                <Input 
                  value={vietnamese} 
                  onChange={(e) => setVietnamese(e.target.value)} 
                  className="h-12 rounded-lg border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 font-medium text-lg bg-card" 
                />
              </div>
              
              {(synonyms.length > 0 || antonyms.length > 0) && (
                <div className="space-y-4">
                  <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Mindmap từ vựng</Label>
                  <VocabMindMap word={word} synonyms={synonyms} antonyms={antonyms} definition={definition} />
                  
                  <div className="grid grid-cols-1 gap-4">
                    {synonyms.length > 0 && (
                      <div>
                        <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Từ đồng nghĩa</Label>
                        <div className="flex flex-wrap gap-1.5">
                          {synonyms.slice(0, 5).map((s, i) => (
                            <div key={`syn-${i}`} className="group relative">
                              <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:border-primary/50 text-xs font-medium cursor-help block">
                                {typeof s === 'object' ? s.word : s}
                              </span>
                              {typeof s === 'object' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-popover text-popover-foreground text-xs rounded-xl shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                  <p className="font-bold text-sm text-primary mb-1">{s.word} <span className="font-mono text-muted-foreground font-normal text-xs ml-1">/{s.ipa}/</span></p>
                                  <p className="font-medium mb-1.5">{s.vietnamese}</p>
                                  {s.example && <p className="italic text-muted-foreground border-l-2 border-primary/30 pl-2">"{s.example}"</p>}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {antonyms.length > 0 && (
                      <div>
                        <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Từ trái nghĩa</Label>
                        <div className="flex flex-wrap gap-1.5">
                          {antonyms.slice(0, 5).map((a, i) => (
                            <div key={`ant-${i}`} className="group relative">
                              <span className="px-2.5 py-1 rounded-lg bg-destructive/10 text-destructive border border-destructive/20 dark:bg-destructive/20 dark:border-destructive/50 text-xs font-medium cursor-help block">
                                {typeof a === 'object' ? a.word : a}
                              </span>
                              {typeof a === 'object' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-popover text-popover-foreground text-xs rounded-xl shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                  <p className="font-bold text-sm text-destructive mb-1">{a.word} <span className="font-mono text-muted-foreground font-normal text-xs ml-1">/{a.ipa}/</span></p>
                                  <p className="font-medium mb-1.5">{a.vietnamese}</p>
                                  {a.example && <p className="italic text-muted-foreground border-l-2 border-destructive/30 pl-2">"{a.example}"</p>}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <Label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block ml-1">Ví dụ minh họa</Label>
                <div className="space-y-2">
                  {examples.length > 0 ? examples.slice(0, 2).map((ex, i) => (
                    <div key={i} className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-full bg-card shadow-sm text-primary hover:text-primary/90" onClick={() => speak(ex)}>
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <p className="text-sm font-medium italic text-foreground pt-1 leading-relaxed">"{ex}"</p>
                    </div>
                  )) : (
                    <div className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-full bg-card shadow-sm text-primary hover:text-primary/90" onClick={() => speak(example)}>
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <p className="text-sm font-medium italic text-foreground pt-1 leading-relaxed">"{example}"</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          <Button variant="outline" className="flex-1 h-12 rounded-lg font-semibold border" onClick={onClose}>Hủy</Button>
          <Button 
            className="flex-1 h-12 rounded-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" 
            disabled={!vietnamese.trim() || !example.trim() || loading}
            onClick={() => {
              onSave({ 
                word, 
                definition, 
                vietnamese, 
                example, 
                cefr: 'A2',
                ipa,
                partOfSpeech,
                synonyms,
                antonyms,
                examples,
                sourceLesson,
                sourceSentence
              });
              onClose();
            }}
          >
            Lưu vào Kho từ
          </Button>
        </div>
      </div>
    </div>
  );
}
