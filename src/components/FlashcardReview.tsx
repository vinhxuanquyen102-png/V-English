import React, { useState, useMemo, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Flashcard, RecallMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, Volume2, Zap, Eye, X, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VocabMindMap } from './VocabMindMap';

interface FlashcardReviewProps {
  cards: Flashcard[];
  allCards?: Flashcard[];
  onReview: (id: string, quality: number) => void;
  onClose: () => void;
  onStartExtraPractice?: () => void;
}

type ExerciseType = 'cloze' | 'spelling' | 'multiple_choice' | 'flashcard';

export function FlashcardReview({ cards, allCards, onReview, onClose, onStartExtraPractice }: FlashcardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [spellingInput, setSpellingInput] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [exerciseType, setExerciseType] = useState<ExerciseType>('cloze');
  const [recallMode, setRecallMode] = useState<RecallMode>('production');

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex) / cards.length) * 100;
  const currentProgress = ((currentIndex + 1) / cards.length) * 100;

  useEffect(() => {
    if (currentCard) {
      const productionTypes: ExerciseType[] = ['cloze', 'spelling'];
      const recognitionTypes: ExerciseType[] = ['multiple_choice', 'flashcard'];
      
      const availableTypes = recallMode === 'production' ? productionTypes : recognitionTypes;
      setExerciseType(availableTypes[Math.floor(Math.random() * availableTypes.length)]);
      
      setSpellingInput('');
      setSelectedOption(null);
      setShowAnswer(false);
    }
  }, [currentIndex, currentCard, recallMode]);

  const options = useMemo(() => {
    if (!currentCard || !allCards || allCards.length < 4) return [];
    const wrongOptions = allCards
      .filter(c => c.id !== currentCard.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(c => c.vietnamese);
    return [currentCard.vietnamese, ...wrongOptions].sort(() => 0.5 - Math.random());
  }, [currentCard, allCards]);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleReview = (quality: number) => {
    onReview(currentCard.id, quality);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      onClose();
    }
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  if (cards.length === 0) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-4">
        {/* Success Blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-12 text-center space-y-10 glass-card rounded-[3rem] shadow-2xl border-white/20 relative z-10"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="w-32 h-32 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.4)] relative"
          >
            <CheckCircle2 className="w-16 h-16" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-emerald-500 blur-xl -z-10"
            />
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-black font-heading text-foreground tracking-tighter">XUẤT SẮC!</h2>
            <p className="text-muted-foreground text-lg leading-relaxed px-4 font-medium italic">"Mọi kiến thức lớn lao đều bắt đầu từ những bước chân nhỏ bé."</p>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <Button className="w-full h-16 font-black text-xl rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 active:scale-95 transition-all group" onClick={onClose}>
              TIẾP TỤC HỌC TẬP
            </Button>
            {allCards && allCards.length > 0 && onStartExtraPractice && (
              <Button variant="ghost" className="w-full h-14 font-bold text-muted-foreground hover:text-foreground" onClick={onStartExtraPractice}>
                Luyện tập thêm một chút?
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentCard) return null;

  const clozeParts = currentCard?.example ? currentCard.example.split(new RegExp(`(${currentCard.word})`, 'gi')) : ['_____'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-4 overflow-y-auto">
      {/* Dynamic Learning Environment Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="w-full max-w-4xl space-y-8 py-8 relative z-10">
        {/* Header & Progress */}
        <div className="space-y-6">
          <div className="flex justify-between items-end px-2">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-2xl text-primary shadow-sm border border-primary/10">
                  <Brain className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-foreground tracking-tight">Ôn tập</h2>
              </div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                Card {currentIndex + 1} <span className="opacity-30">/</span> {cards.length}
              </p>
            </div>
            
            <div className="flex bg-muted/50 p-1 rounded-xl border border-border">
              <button 
                onClick={() => setRecallMode('recognition')}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${recallMode === 'recognition' ? 'bg-card text-amber-600 shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Eye className="w-3.5 h-3.5" /> Recognition
              </button>
              <button 
                onClick={() => setRecallMode('production')}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 ${recallMode === 'production' ? 'bg-card text-emerald-600 shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Zap className="w-3.5 h-3.5" /> Production
              </button>
            </div>
            
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted ml-2">
              <X className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="h-3 w-full bg-muted rounded-full overflow-hidden border border-border shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-blue-500" 
              initial={{ width: `${progress}%` }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            />
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Deck Stacking Effect */}
          <div className="absolute top-4 left-4 right-4 h-full bg-primary/5 rounded-[2.5rem] border border-primary/10 -z-10 translate-y-4 scale-[0.98]" />
          <div className="absolute top-8 left-8 right-8 h-full bg-primary/5 rounded-[2.5rem] border border-primary/10 -z-20 translate-y-8 scale-[0.96]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, x: 100, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: -2 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="w-full relative z-10"
            >
              <div className={`min-h-[520px] flex flex-col bg-card rounded-[2.5rem] shadow-2xl border border-border overflow-hidden relative ${showAnswer ? 'max-w-4xl' : ''}`}>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 opacity-80" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showAnswer ? 'answer' : 'question'}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 md:p-12 flex-1 flex flex-col"
                  >
                    {!showAnswer ? (
                  <div className="space-y-10 w-full flex-1 flex flex-col">
                    {exerciseType === 'cloze' && (
                      <>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="px-4 py-1 rounded-lg border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest bg-primary/5">
                            Fill in the blank
                          </Badge>
                          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-muted/50 text-primary hover:bg-primary/10" onClick={() => speak(currentCard.word)}>
                            <Volume2 className="w-5 h-5" />
                          </Button>
                        </div>
                        
                        <div className="p-8 md:p-12 bg-muted/30 rounded-[2rem] border-2 border-dashed border-border/50 flex-1 flex items-center justify-center text-center">
                          <p className="text-2xl md:text-3xl font-medium leading-[1.6] text-foreground">
                            {clozeParts.map((part, i) => 
                              part.toLowerCase() === currentCard.word.toLowerCase() ? (
                                <span key={i} className="px-4 py-1 mx-1 border-b-4 border-primary bg-primary/5 text-primary/0 rounded-md">_____</span>
                              ) : <span key={i}>{part}</span>
                            )}
                          </p>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="text-center space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Vietnamese Meaning</p>
                            <p className="text-2xl font-bold text-primary">{currentCard.vietnamese}</p>
                          </div>
                          <Input 
                            className="text-center text-3xl font-bold h-20 rounded-2xl border-2 border-border focus:border-primary focus:ring-8 focus:ring-primary/5 bg-background shadow-inner transition-all" 
                            placeholder="Type here..." 
                            value={spellingInput}
                            onChange={(e) => setSpellingInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                            autoFocus
                          />
                        </div>
                        <div className="flex gap-4 mt-4 pt-4 border-t border-border/50">
                          <Button 
                            variant="outline" 
                            className="h-16 px-8 rounded-2xl font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-95 flex items-center gap-2" 
                            onClick={() => setShowAnswer(true)}
                          >
                            <Eye className="w-4 h-4" />
                            Hiện đáp án
                          </Button>
                          <Button className="flex-1 h-16 font-black text-xl rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 active:scale-[0.98] transition-all" onClick={checkAnswer}>KIỂM TRA</Button>
                        </div>
                      </>
                    )}

                    {exerciseType === 'spelling' && (
                      <>
                        <Badge variant="outline" className="self-start px-4 py-1 rounded-lg border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest bg-primary/5">
                          Spelling Practice
                        </Badge>
                        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="icon" className="h-28 w-28 rounded-full border-[6px] border-primary/10 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/20 shadow-xl transition-all" onClick={() => speak(currentCard.word)}>
                              <Volume2 className="w-12 h-12" />
                            </Button>
                          </motion.div>
                          
                          <div className="text-center space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Vietnamese Meaning</p>
                            <p className="text-3xl font-bold text-foreground">{currentCard.vietnamese}</p>
                          </div>

                          <Input 
                            className="text-center text-3xl font-bold h-20 rounded-2xl border-2 border-border focus:border-primary focus:ring-8 focus:ring-primary/5 bg-background shadow-inner transition-all w-full" 
                            placeholder="Spell out the word..." 
                            value={spellingInput}
                            onChange={(e) => setSpellingInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                            autoFocus
                          />
                        </div>
                        <div className="flex gap-4 mt-4 pt-4 border-t border-border/50">
                          <Button 
                            variant="outline" 
                            className="h-16 px-8 rounded-2xl font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-95 flex items-center gap-2" 
                            onClick={() => setShowAnswer(true)}
                          >
                            <Eye className="w-4 h-4" />
                            Hiện đáp án
                          </Button>
                          <Button className="flex-1 h-16 font-black text-xl rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 active:scale-[0.98] transition-all" onClick={checkAnswer} disabled={!spellingInput.trim()}>KIỂM TRA</Button>
                        </div>
                      </>
                    )}

                    {exerciseType === 'multiple_choice' && (
                      <>
                        <Badge variant="outline" className="self-start px-4 py-1 rounded-lg border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest bg-primary/5">
                          Choose correct meaning
                        </Badge>
                        <div className="flex-1 flex flex-col items-center justify-center space-y-12 w-full">
                          <div className="flex flex-col items-center gap-4 bg-muted/30 px-12 py-8 rounded-[3rem] border border-border/50 shadow-inner w-full">
                            <h3 className="text-5xl font-bold font-heading text-primary tracking-tight">{currentCard.word}</h3>
                            <Button variant="ghost" size="icon" className="rounded-full bg-card shadow-sm text-primary hover:bg-primary/10" onClick={() => speak(currentCard.word)}>
                              <Volume2 className="w-5 h-5" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {options.map((opt, i) => {
                              const isSelected = selectedOption === opt;
                              return (
                                <Button 
                                  key={i} 
                                  variant="outline"
                                  className={`h-20 text-lg font-bold justify-center px-8 rounded-2xl border-2 transition-all active:scale-[0.97] ${
                                    isSelected 
                                      ? 'border-primary bg-primary/10 text-primary shadow-md' 
                                      : 'border-border hover:border-primary/30 hover:bg-primary/5'
                                  }`}
                                  onClick={() => setSelectedOption(opt)}
                                >
                                  {opt}
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4 pt-4 border-t border-border/50">
                          <Button 
                            variant="outline" 
                            className="h-16 px-8 rounded-2xl font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-95 flex items-center gap-2" 
                            onClick={() => setShowAnswer(true)}
                          >
                            <Eye className="w-4 h-4" />
                            Hiện đáp án
                          </Button>
                          <Button className="flex-1 h-16 font-black text-xl rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 active:scale-[0.98] transition-all" onClick={checkAnswer} disabled={!selectedOption}>XÁC NHẬN</Button>
                        </div>
                      </>
                    )}

                    {exerciseType === 'flashcard' && (
                      <>
                        <Badge variant="outline" className="self-start px-4 py-1 rounded-lg border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest bg-primary/5">
                          Direct Review
                        </Badge>
                        <div className="flex-1 flex flex-col items-center justify-center space-y-12 w-full">
                          <motion.div 
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="flex flex-col items-center gap-6 bg-muted/40 p-16 rounded-[4rem] border-2 border-dashed border-primary/20 shadow-inner w-full relative group"
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-card rounded-2xl border border-border shadow-lg animate-bounce">
                               <Brain className="w-8 h-8 text-primary" />
                            </div>
                            
                            <h3 className="text-7xl font-black font-heading text-foreground tracking-tighter group-hover:scale-105 transition-transform duration-500">{currentCard.word}</h3>
                            <Button 
                              variant="outline" 
                              size="lg" 
                              className="rounded-2xl h-16 w-16 border-2 border-primary/20 bg-background text-primary hover:bg-primary hover:text-white transition-all shadow-lg active:scale-90"
                              onClick={() => speak(currentCard.word)}
                            >
                              <Volume2 className="w-8 h-8" />
                            </Button>
                          </motion.div>
                          
                          <div className="space-y-2 text-center">
                            <p className="text-muted-foreground font-medium italic text-lg transition-opacity hover:opacity-100 opacity-70">"Thử nhớ lại ý nghĩa của từ này trong đầu..."</p>
                          </div>
                        </div>
                        
                        <div className="relative pt-6">
                           <motion.div
                              animate={{ 
                                scale: [1, 1.02, 1],
                                opacity: [1, 0.8, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-black text-primary uppercase tracking-[0.3em] bg-primary/5 px-4 py-1 rounded-full whitespace-nowrap"
                           >
                              Sẵn sàng chưa?
                           </motion.div>
                           <Button 
                            className="w-full h-20 font-black text-2xl rounded-3xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 active:scale-[0.97] transition-all group overflow-hidden relative"
                            onClick={() => setShowAnswer(true)}
                          >
                            <span className="relative z-10 flex items-center gap-3">
                              XEM ĐÁP ÁN
                              <Eye className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            </span>
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 opacity-20"
                              animate={{ x: ['100%', '-100%'] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/20" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  /* Carousel Answer View */
                  <div className="space-y-8 w-full h-full flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                      {/* Left Side: Definition & Examples */}
                      <div className="flex-1 space-y-6 flex flex-col justify-center">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-lg font-black text-[10px] tracking-widest uppercase">
                              Answer
                            </Badge>
                            <span className="text-xs font-bold text-muted-foreground uppercase opacity-40">{currentCard.partOfSpeech}</span>
                          </div>
                          <div className="space-y-1">
                            <h2 className="text-5xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">{currentCard.word}</h2>
                            <p className="text-xl font-bold text-primary italic opacity-70">/ {currentCard.ipa} /</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="p-6 bg-muted/40 rounded-[2rem] border border-border/50 relative group shadow-inner">
                            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-card rounded-full border border-border shadow-sm text-[8px] font-black uppercase tracking-widest text-muted-foreground">Meaning</div>
                            <p className="text-2xl font-black text-foreground mb-1 leading-tight">{currentCard.definition}</p>
                            <p className="text-lg font-bold text-muted-foreground/60 border-t border-border/40 pt-2 mt-2">{currentCard.vietnamese}</p>
                            <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-xl bg-card shadow-sm hover:text-primary" onClick={() => speak(currentCard.word)}>
                              <Volume2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 relative">
                            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-card rounded-full border border-border shadow-sm text-[8px] font-black uppercase tracking-widest text-primary">Example</div>
                            <p className="text-xl font-bold text-foreground italic leading-relaxed">"{currentCard.example}"</p>
                            {currentCard.notes && (
                              <p className="text-sm font-medium text-primary/50 mt-3 leading-relaxed italic line-clamp-2">({currentCard.notes})</p>
                            )}
                          </div>

                          {(exerciseType === 'spelling' || exerciseType === 'cloze') && (
                            <div className={`p-4 rounded-2xl w-full text-center border-2 flex flex-col gap-1 shadow-inner ${spellingInput.toLowerCase().trim() === currentCard.word.toLowerCase().trim() ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950/10 dark:border-emerald-800' : 'bg-destructive/5 border-destructive/10'}`}>
                              <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Your Answer</p>
                              <p className={`text-xl font-black ${spellingInput.toLowerCase().trim() === currentCard.word.toLowerCase().trim() ? 'text-emerald-600' : 'text-destructive'}`}>
                                {spellingInput || '(Empty)'}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Side: Mindmap Context */}
                      <div className="flex-1 flex flex-col lg:max-w-md h-full min-h-[350px]">
                         <div className="flex items-center justify-between mb-3 px-2">
                           <div className="flex items-center gap-2">
                             <div className="p-1.5 bg-primary/10 rounded-lg">
                                <Brain className="w-3.5 h-3.5 text-primary" />
                             </div>
                             <p className="text-[9px] font-black text-muted-foreground/50 uppercase tracking-widest">Mind Map Context</p>
                           </div>
                         </div>
                         <div className="flex-1 bg-muted/20 rounded-[2.5rem] border border-border/50 overflow-hidden shadow-inner relative">
                           { (currentCard.synonyms && currentCard.synonyms.length > 0) || (currentCard.antonyms && currentCard.antonyms.length > 0) ? (
                             <VocabMindMap 
                                word={currentCard.word}
                                synonyms={currentCard.synonyms || []}
                                antonyms={currentCard.antonyms || []}
                                definition={currentCard.definition}
                                ipa={currentCard.ipa}
                                partOfSpeech={currentCard.partOfSpeech}
                             />
                           ) : (
                             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-3">
                                <Zap className="w-8 h-8 text-amber-500/30" />
                                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-tighter">No Map Data</p>
                             </div>
                           )}
                         </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

        {showAnswer && (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em]">How well did you recall this word?</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Quên', sub: 'Lặp lại ngay', color: 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive hover:text-white shadow-destructive/5', q: 0 },
                { label: 'Khó', sub: 'Ôn sớm', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500 hover:text-white shadow-orange-500/5', q: 3 },
                { label: 'Trung bình', sub: 'Nhớ ổn', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500 hover:text-white shadow-blue-500/5', q: 4 },
                { label: 'Dễ', sub: 'Ghi nhớ sâu', color: 'bg-teal-500/10 text-teal-600 border-teal-500/20 hover:bg-teal-500 hover:text-white shadow-teal-500/5', q: 5 },
              ].map((btn) => (
                <Button 
                  key={btn.q} 
                  variant="outline"
                  className={`${btn.color} border-2 font-black h-28 rounded-3xl flex flex-col gap-1.5 shadow-xl transition-all hover:-translate-y-2 active:scale-95 group overflow-hidden relative border-transparent`}
                  onClick={() => handleReview(btn.q)}
                >
                  <span className="text-xl font-black tracking-tight leading-none">{btn.label}</span>
                  <span className="text-[9px] opacity-70 font-black uppercase tracking-[0.1em]">{btn.sub}</span>
                  
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Stats indication (simulated interval increase) */}
                  <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-40 transition-opacity">
                    {btn.q === 0 ? <Zap className="w-3 h-3" /> : btn.q === 3 ? <Calendar className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                  </div>
                </Button>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

