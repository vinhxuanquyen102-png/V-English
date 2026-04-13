import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Flashcard } from '../types';

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
  const [synonyms, setSynonyms] = useState<string[]>([]);
  const [antonyms, setAntonyms] = useState<string[]>([]);
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 w-full max-w-md shadow-2xl scale-in-center max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold font-heading text-primary">{word}</h2>
                {partOfSpeech && <Badge variant="outline" className="text-xs">{partOfSpeech}</Badge>}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">A2 Level</Badge>
                {ipa && <span className="text-sm text-muted-foreground font-mono">/{ipa}/</span>}
              </div>
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 border-2"
              onClick={() => speak(word)}
            >
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>✕</Button>
        </div>
        
        <div className="space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <p className="text-sm font-medium text-muted-foreground animate-pulse">Đang tra cứu từ vựng...</p>
            </div>
          ) : (
            <>
              <div>
                <Label className="text-[10px] font-bold uppercase text-muted-foreground">Definition</Label>
                <p className="font-medium">{definition}</p>
              </div>
              <div>
                <Label className="text-[10px] font-bold uppercase text-muted-foreground">Vietnamese</Label>
                <Input value={vietnamese} onChange={(e) => setVietnamese(e.target.value)} className="mt-1" />
              </div>
              
              {synonyms.length > 0 && (
                <div>
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground">Synonyms</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {synonyms.map((s, i) => <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">{s}</Badge>)}
                  </div>
                </div>
              )}

              {antonyms.length > 0 && (
                <div>
                  <Label className="text-[10px] font-bold uppercase text-muted-foreground">Antonyms</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {antonyms.map((a, i) => <Badge key={i} variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">{a}</Badge>)}
                  </div>
                </div>
              )}

              <div>
                <Label className="text-[10px] font-bold uppercase text-muted-foreground">Examples</Label>
                <div className="space-y-2 mt-1">
                  {examples.length > 0 ? examples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 bg-muted p-2 rounded-lg">
                      <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0" onClick={() => speak(ex)}>
                        <Volume2 className="w-3 h-3" />
                      </Button>
                      <p className="text-sm italic text-slate-700 dark:text-slate-300">"{ex}"</p>
                    </div>
                  )) : (
                    <div className="flex items-start gap-2 bg-muted p-2 rounded-lg">
                      <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0" onClick={() => speak(example)}>
                        <Volume2 className="w-3 h-3" />
                      </Button>
                      <p className="text-sm italic text-slate-700 dark:text-slate-300">"{example}"</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>Hủy</Button>
          <Button 
            className="flex-1 font-bold" 
            disabled={!vietnamese.trim() || !example.trim()}
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
            Lưu vào Flashcard
          </Button>
        </div>
      </div>
    </div>
  );
}
