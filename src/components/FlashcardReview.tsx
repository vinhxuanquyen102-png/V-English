import React, { useState, useMemo, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Flashcard } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlashcardReviewProps {
  cards: Flashcard[];
  allCards?: Flashcard[];
  onReview: (id: string, quality: number) => void;
  onClose: () => void;
  onStartExtraPractice?: () => void;
}

type ExerciseType = 'cloze' | 'spelling' | 'multiple_choice';

export function FlashcardReview({ cards, allCards, onReview, onClose, onStartExtraPractice }: FlashcardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [spellingInput, setSpellingInput] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [exerciseType, setExerciseType] = useState<ExerciseType>('cloze');

  const currentCard = cards[currentIndex];

  useEffect(() => {
    if (currentCard) {
      const types: ExerciseType[] = ['cloze', 'spelling', 'multiple_choice'];
      setExerciseType(types[Math.floor(Math.random() * types.length)]);
      setSpellingInput('');
      setSelectedOption(null);
      setShowAnswer(false);
    }
  }, [currentIndex, currentCard]);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-6 shadow-2xl border-2">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-heading">Tuyệt vời!</h2>
            <p className="text-muted-foreground font-medium">Bạn đã hoàn thành tất cả các thẻ cần ôn tập cho hôm nay.</p>
          </div>
          <div className="flex flex-col gap-2">
            {allCards && allCards.length > 0 && onStartExtraPractice && (
              <Button variant="outline" className="w-full h-12 font-bold border-2" onClick={onStartExtraPractice}>
                Ôn tập thêm (Extra Practice)
              </Button>
            )}
            <Button className="w-full h-12 font-bold" onClick={onClose}>Quay lại Dashboard</Button>
          </div>
        </Card>
      </div>
    );
  }

  const clozeSentence = currentCard.example.replace(new RegExp(currentCard.word, 'gi'), '_____');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background p-4 overflow-y-auto">
      <div className="w-full max-w-lg space-y-6 py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-heading flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            Ôn tập SRS ({currentIndex + 1}/{cards.length})
          </h2>
          <Button variant="ghost" onClick={onClose} className="font-bold">Thoát</Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id + (showAnswer ? '-back' : '-front')}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="min-h-[400px] flex flex-col p-8 border-4 shadow-2xl transition-all duration-500 border-primary shadow-primary/10">
              
              {!showAnswer ? (
                <div className="space-y-8 w-full flex-1 flex flex-col">
                  {exerciseType === 'cloze' && (
                    <>
                      <Badge variant="outline" className="self-start font-bold uppercase tracking-widest text-[10px]">Điền vào chỗ trống</Badge>
                      <div className="p-6 bg-muted rounded-2xl border-2 border-dashed border-primary/30 flex-1 flex items-center justify-center text-center">
                        <p className="text-2xl font-bold leading-relaxed">"{clozeSentence}"</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-muted-foreground mb-2">Nghĩa tiếng Việt:</p>
                        <p className="text-xl font-medium text-primary">{currentCard.vietnamese}</p>
                      </div>
                      <Button className="w-full h-14 font-bold text-lg" onClick={checkAnswer}>Xem đáp án</Button>
                    </>
                  )}

                  {exerciseType === 'spelling' && (
                    <>
                      <Badge variant="outline" className="self-start font-bold uppercase tracking-widest text-[10px]">Gõ từ vựng</Badge>
                      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                        <Button variant="outline" size="icon" className="h-16 w-16 rounded-full border-4 border-primary text-primary" onClick={() => speak(currentCard.word)}>
                          <Volume2 className="w-8 h-8" />
                        </Button>
                        <p className="text-xl font-medium text-center">{currentCard.vietnamese}</p>
                        <Input 
                          className="text-center text-2xl font-bold h-14" 
                          placeholder="Gõ từ tiếng Anh..." 
                          value={spellingInput}
                          onChange={(e) => setSpellingInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                          autoFocus
                        />
                      </div>
                      <Button className="w-full h-14 font-bold text-lg" onClick={checkAnswer} disabled={!spellingInput.trim()}>Kiểm tra</Button>
                    </>
                  )}

                  {exerciseType === 'multiple_choice' && (
                    <>
                      <Badge variant="outline" className="self-start font-bold uppercase tracking-widest text-[10px]">Chọn nghĩa đúng</Badge>
                      <div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full">
                        <div className="flex items-center gap-4">
                          <h3 className="text-4xl font-bold font-heading text-primary">{currentCard.word}</h3>
                          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => speak(currentCard.word)}>
                            <Volume2 className="w-6 h-6" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-3 w-full">
                          {options.map((opt, i) => (
                            <Button 
                              key={i} 
                              variant={selectedOption === opt ? "default" : "outline"} 
                              className="h-14 text-lg justify-start px-6"
                              onClick={() => setSelectedOption(opt)}
                            >
                              {opt}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full h-14 font-bold text-lg" onClick={checkAnswer} disabled={!selectedOption}>Kiểm tra</Button>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-8 w-full flex-1 flex flex-col items-center justify-center text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <h3 className="text-5xl font-bold font-heading text-primary">{currentCard.word}</h3>
                      <Button variant="ghost" size="icon" className="rounded-full" onClick={() => speak(currentCard.word)}>
                        <Volume2 className="w-8 h-8" />
                      </Button>
                    </div>
                    {currentCard.ipa && <p className="text-lg font-mono text-muted-foreground">/{currentCard.ipa}/</p>}
                    <p className="text-2xl font-medium">{currentCard.vietnamese}</p>
                  </div>

                  <div className="p-4 bg-muted rounded-xl w-full">
                    <p className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-wider">Ví dụ</p>
                    <div className="flex items-start gap-2 text-left">
                      <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 mt-0.5" onClick={() => speak(currentCard.example)}>
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <p className="text-lg italic">"{currentCard.example}"</p>
                    </div>
                  </div>

                  {exerciseType === 'spelling' && (
                    <div className={`p-4 rounded-xl w-full font-bold text-lg ${spellingInput.toLowerCase() === currentCard.word.toLowerCase() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      Bạn gõ: {spellingInput || '(trống)'}
                    </div>
                  )}

                  {exerciseType === 'multiple_choice' && (
                    <div className={`p-4 rounded-xl w-full font-bold text-lg ${selectedOption === currentCard.vietnamese ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      Bạn chọn: {selectedOption}
                    </div>
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>

        {showAnswer && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-4 gap-3"
          >
            {[
              { label: 'Quên', sub: '0%', color: 'bg-rose-500 hover:bg-rose-600', q: 0 },
              { label: 'Khó', sub: 'Lặp lại', color: 'bg-orange-500 hover:bg-orange-600', q: 3 },
              { label: 'Tốt', sub: 'Nhớ', color: 'bg-blue-500 hover:bg-blue-600', q: 4 },
              { label: 'Dễ', sub: 'Rất nhớ', color: 'bg-emerald-500 hover:bg-emerald-600', q: 5 },
            ].map((btn) => (
              <Button 
                key={btn.q} 
                className={`${btn.color} text-white font-bold h-20 flex flex-col gap-0 shadow-lg transition-transform active:scale-95`}
                onClick={() => handleReview(btn.q)}
              >
                <span className="text-lg">{btn.label}</span>
                <span className="text-[10px] opacity-80 font-bold uppercase">{btn.sub}</span>
              </Button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
