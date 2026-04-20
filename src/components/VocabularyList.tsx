import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Flashcard, AISettings } from '../types';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Volume2, 
  Brain, 
  Calendar,
  BookOpen,
  ArrowUpDown,
  RefreshCw
} from 'lucide-react';
import { VocabModal } from './VocabModal';
import { WordDetailView } from './WordDetailView';
import { motion, AnimatePresence } from 'motion/react';

interface VocabularyListProps {
  flashcards: Flashcard[];
  onRemove: (id: string) => void;
  onSave: (card: any) => void;
  onUpdate: (id: string, updates: Partial<Flashcard>) => void;
  aiSettings: AISettings;
}

export function VocabularyList({ flashcards, onRemove, onSave, onUpdate, aiSettings }: VocabularyListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPos, setSelectedPos] = useState<string | null>(null);
  const [isAddingWord, setIsAddingWord] = useState(false);
  const [manualWord, setManualWord] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'alphabetical'>('newest');

  const filteredCards = useMemo(() => {
    return flashcards
      .filter(card => {
        const matchesSearch = card.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             card.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPos = !selectedPos || card.partOfSpeech === selectedPos;
        return matchesSearch && matchesPos;
      })
      .sort((a, b) => {
        if (sortBy === 'alphabetical') {
          return a.word.localeCompare(b.word);
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [flashcards, searchQuery, selectedPos, sortBy]);

  const posOptions = useMemo(() => {
    const posSet = new Set<string>();
    flashcards.forEach(card => {
      if (card.partOfSpeech) posSet.add(card.partOfSpeech);
    });
    return Array.from(posSet);
  }, [flashcards]);

  const speak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };
  
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [selectedDetailCard, setSelectedDetailCard] = useState<Flashcard | null>(null);
  
  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Tìm kiếm từ vựng hoặc nghĩa..." 
            className="pl-10 h-12 rounded-2xl border-border focus:border-primary focus:ring-4 focus:ring-primary/10 bg-card"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Input 
              placeholder="Thêm từ mới..." 
              className="h-12 rounded-2xl border-border pr-12 w-full md:w-64 bg-card"
              value={manualWord}
              onChange={(e) => setManualWord(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && manualWord && setIsAddingWord(true)}
            />
            <Button 
              size="sm" 
              className="absolute right-1.5 top-1.5 h-9 w-9 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={!manualWord}
              onClick={() => setIsAddingWord(true)}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-2 mr-4">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Lọc:</span>
        </div>
        <Button 
          variant={selectedPos === null ? "default" : "outline"} 
          size="sm" 
          className="rounded-full px-4 h-8 text-xs font-bold"
          onClick={() => setSelectedPos(null)}
        >
          Tất cả
        </Button>
        {posOptions.map(pos => (
          <Button 
            key={pos}
            variant={selectedPos === pos ? "default" : "outline"} 
            size="sm" 
            className="rounded-full px-4 h-8 text-xs font-bold"
            onClick={() => setSelectedPos(pos)}
          >
            {pos}
          </Button>
        ))}
        
        <div className="ml-auto flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
          <select 
            className="bg-transparent text-xs font-bold text-muted-foreground uppercase tracking-wider outline-none cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="newest">Mới nhất</option>
            <option value="alphabetical">A-Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="perspective-1000"
            >
              <motion.div
                className="relative w-full preserve-3d cursor-pointer"
                style={{ 
                  height: '320px'
                }}
                animate={{ rotateY: flippedCards[card.id] ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => toggleFlip(card.id)}
              >
                {/* Front of the card */}
                <Card className="absolute inset-0 backface-hidden border border-border group-hover:border-primary/50 group hover:border-primary/50 rounded-3xl overflow-hidden bg-card flex flex-col items-center justify-center p-6 space-y-4 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 opacity-60" />
                  
                  <div className="absolute top-4 right-4 z-10 flex gap-1 bg-muted/40 p-1 rounded-xl border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-lg text-muted-foreground hover:text-primary hover:bg-card hover:shadow-sm"
                      onClick={(e) => speak(e, card.word)}
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive hover:bg-card hover:shadow-sm transition-colors"
                      onClick={(e) => { e.stopPropagation(); onRemove(card.id); }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                      <h4 className="text-3xl font-black font-heading text-foreground tracking-tight">{card.word}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      {card.partOfSpeech && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase px-2.5 py-0.5 tracking-widest rounded-md">
                          {card.partOfSpeech}
                        </Badge>
                      )}
                      {card.ipa && (
                        <button 
                          className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-md hover:bg-primary/10 hover:text-primary transition-colors group/ipa"
                          onClick={(e) => speak(e, card.word)}
                          title="Nghe phát ngôn"
                        >
                          /{card.ipa}/
                          <Volume2 className="w-3 h-3 opacity-0 group-hover/ipa:opacity-100 transition-opacity" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] mt-4 flex items-center gap-2">
                    <RefreshCw className="w-3 h-3 animate-spin-slow" />
                    Chạm để lật thẻ
                  </p>
                </Card>

                {/* Back of the card */}
                <Card className="absolute inset-0 backface-hidden border border-primary/20 shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden bg-card flex flex-col p-6" 
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-60" />
                  
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="p-4 bg-primary/5 rounded-[2rem] border border-primary/10 text-center shadow-inner group-hover:bg-primary/10 transition-colors">
                      <p className="text-2xl font-black text-primary tracking-tight">{card.vietnamese}</p>
                    </div>
                    
                    <div className="space-y-3 bg-muted/30 p-4 rounded-2xl border border-border/40">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">Ví dụ câu</p>
                      <p className="text-sm font-medium italic text-foreground leading-relaxed">
                        "{card.example}"
                      </p>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-2xl h-11 border-primary/20 text-primary font-black uppercase tracking-widest text-[10px] bg-background hover:bg-primary/5 transition-all mt-2 active:scale-95"
                      onClick={(e) => { e.stopPropagation(); setSelectedDetailCard(card); }}
                    >
                      <Brain className="w-4 h-4 mr-2" /> Sơ đồ & Chi tiết
                    </Button>
                  </div>

                  <div className="pt-4 mt-4 flex items-center justify-between border-t border-border/50">
                    <div className="flex items-center gap-2 text-[9px] font-black text-muted-foreground/50 uppercase tracking-[0.15em]">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(card.nextReview).toLocaleDateString('vi-VN')}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-black border-primary/20 text-primary bg-primary/5 rounded-lg">
                      LEVEL {card.repetition}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Không tìm thấy từ vựng</h3>
          <p className="text-muted-foreground">Hãy thử tìm kiếm từ khác hoặc thêm từ mới vào kho nhé!</p>
        </div>
      )}

      {isAddingWord && (
        <VocabModal 
          word={manualWord}
          isOpen={isAddingWord}
          onClose={() => {
            setIsAddingWord(false);
            setManualWord('');
          }}
          onSave={onSave}
          aiSettings={aiSettings}
        />
      )}

      {selectedDetailCard && (
        <WordDetailView 
          card={selectedDetailCard}
          allCards={flashcards}
          isOpen={!!selectedDetailCard}
          onClose={() => setSelectedDetailCard(null)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}
