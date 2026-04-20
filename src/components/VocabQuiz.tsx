import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flashcard, RecallMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, XCircle, Trophy, ArrowRight, Heart, Timer, Zap, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VocabQuizProps {
  cards: Flashcard[];
  onClose: () => void;
  onComplete: (score: number) => void;
  onReview?: (id: string, quality: number) => void;
}

export function VocabQuiz({ cards, onClose, onComplete, onReview }: VocabQuizProps) {
  // Filter out any non-word items (like quiz questions saved as flashcards)
  const filteredCards = useMemo(() => {
    return cards.filter(c => !c.word.startsWith('Quiz:'));
  }, [cards]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isFinished, setIsFinished] = useState(false);
  const [recallMode, setRecallMode] = useState<RecallMode>('recognition');

  // Timer logic
  useEffect(() => {
    if (isFinished || selectedAnswer || filteredCards.length === 0) return;

    if (timeLeft <= 0) {
      handleAnswer(''); // Time out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, selectedAnswer, filteredCards.length]);

  // Reset timer on next question
  useEffect(() => {
    setTimeLeft(15);
  }, [currentIndex]);

  // Generate options for the current card
  const options = useMemo(() => {
    if (currentIndex >= filteredCards.length) return [];
    const currentCard = filteredCards[currentIndex];
    const otherCards = filteredCards.filter(c => c.id !== currentCard.id);
    
    // Pick 3 random incorrect answers
    const shuffledOthers = [...otherCards].sort(() => Math.random() - 0.5);
    const incorrectAnswers = shuffledOthers.slice(0, 3).map(c => 
      recallMode === 'recognition' ? c.vietnamese : c.word
    );
    
    // Combine with correct answer and shuffle
    const correctAnswer = recallMode === 'recognition' ? currentCard.vietnamese : currentCard.word;
    return [...incorrectAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  }, [currentIndex, filteredCards, recallMode]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer || isFinished || filteredCards.length === 0) return;
    
    setSelectedAnswer(answer);
    const currentCard = filteredCards[currentIndex];
    const correctAnswer = recallMode === 'recognition' ? currentCard.vietnamese : currentCard.word;
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
      if (onReview) onReview(currentCard.id, 4); // 4 = correct, good
    } else {
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => setIsFinished(true), 1000);
        }
        return newLives;
      });
      if (onReview) onReview(currentCard.id, 1); // 1 = incorrect/forgotten
    }
  };

  const nextQuestion = () => {
    if (currentIndex < filteredCards.length - 1 && lives > 0) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setIsFinished(true);
      if (score === filteredCards.length && lives > 0 && filteredCards.length > 0) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  if (filteredCards.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4">
        <div className="w-full max-w-md p-10 text-center space-y-8 bg-card rounded-3xl shadow-2xl border border-border">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Brain className="w-12 h-12 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold font-heading text-foreground">Không có từ vựng phù hợp</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Hãy lưu thêm các từ đơn lẻ từ bài học để bắt đầu Quiz nhé!</p>
          </div>
          <Button className="w-full h-14 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" onClick={onClose}>
            Quay lại Dashboard
          </Button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4">
        <div className="w-full max-w-md p-10 text-center space-y-8 bg-card rounded-3xl shadow-2xl border border-border">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner ${lives > 0 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-500' : 'bg-destructive/10 text-destructive'}`}>
            {lives > 0 ? <Trophy className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-heading text-foreground">{lives > 0 ? 'Hoàn thành Quiz!' : 'Kết thúc lượt chơi!'}</h2>
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-2xl font-bold text-primary">Điểm số: {score}/{filteredCards.length}</p>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {lives <= 0 ? 'Bạn đã hết lượt trái tim. Hãy cố gắng hơn lần sau!' : 
               score === filteredCards.length ? 'Tuyệt vời! Bạn đã nhớ hết từ vựng.' : 'Khá lắm! Hãy tiếp tục ôn tập nhé.'}
            </p>
          </div>
          <Button className="w-full h-14 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" onClick={() => onComplete(score)}>
            Quay lại Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const currentCard = filteredCards[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-lg space-y-8 py-8">
        <div className="flex justify-between items-center px-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-heading flex items-center gap-3 text-foreground">
              <div className="p-2 bg-primary/10 rounded-xl text-primary">
                <Brain className="w-6 h-6" />
              </div>
              Từ vựng Quiz
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={() => !selectedAnswer && setRecallMode('recognition')}
                className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all flex items-center gap-1 ${recallMode === 'recognition' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
              >
                <Eye className="w-3 h-3" /> RECOGNITION
              </button>
              <button 
                onClick={() => !selectedAnswer && setRecallMode('production')}
                className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all flex items-center gap-1 ${recallMode === 'production' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
              >
                <Zap className="w-3 h-3" /> PRODUCTION
              </button>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold text-muted-foreground">Câu hỏi {currentIndex + 1} / {filteredCards.length}</p>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={`w-5 h-5 ${i < lives ? 'text-destructive fill-destructive' : 'text-muted dark:text-muted-foreground'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 font-bold ${timeLeft < 5 ? 'border-destructive text-destructive bg-destructive/10 animate-pulse' : 'border-primary/20 text-primary bg-primary/10'}`}>
            <Timer className="w-4 h-4" />
            {timeLeft}s
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex) / filteredCards.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className={`p-10 text-center rounded-3xl border shadow-sm bg-card transition-colors ${selectedAnswer && !isCorrect ? 'border-destructive shadow-destructive/10' : 'border-border'}`}>
              <p className="text-[10px] font-bold uppercase text-primary tracking-widest mb-4">
                {recallMode === 'recognition' ? 'Từ vựng này có nghĩa là gì?' : 'Từ tiếng Anh nào có nghĩa là:'}
              </p>
              <h3 className="text-5xl font-bold font-heading text-foreground tracking-tight mb-6">
                {recallMode === 'recognition' ? currentCard.word : currentCard.vietnamese}
              </h3>
              <div className="p-4 bg-muted/50 rounded-2xl italic text-sm text-muted-foreground border border-border">
                "{currentCard.example.replace(new RegExp(currentCard.word, 'gi'), '_____')}"
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const correctAnswer = recallMode === 'recognition' ? currentCard.vietnamese : currentCard.word;
                const isAnswerCorrect = option === correctAnswer;
                
                let variant: "outline" | "default" | "destructive" = "outline";
                let className = "h-16 text-lg font-bold justify-start px-6 rounded-2xl border-2 transition-all";
                
                if (selectedAnswer) {
                  if (isAnswerCorrect) {
                    variant = "default";
                    className += " bg-primary/20 border-primary/50 text-foreground scale-[1.02] shadow-sm";
                  } else if (isSelected) {
                    variant = "destructive";
                    className += " bg-destructive/20 border-destructive/50 text-foreground animate-shake shadow-sm";
                  } else {
                    className += " opacity-50 border-border";
                  }
                } else {
                  className += " border-border hover:border-primary/50 bg-card hover:bg-accent";
                }

                return (
                  <Button
                    key={idx}
                    variant={variant}
                    className={className}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedAnswer}
                  >
                    <span className={`mr-4 w-8 h-8 rounded-full flex items-center justify-center text-sm ${selectedAnswer && (isAnswerCorrect || isSelected) ? 'bg-background text-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                    {selectedAnswer && isAnswerCorrect && <CheckCircle2 className="ml-auto w-6 h-6 text-primary" />}
                    {selectedAnswer && isSelected && !isAnswerCorrect && <XCircle className="ml-auto w-6 h-6 text-destructive" />}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {selectedAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center"
          >
            <div className="text-sm font-bold text-muted-foreground">
              {isCorrect ? 'Chính xác! 🎉' : `Rất tiếc! Đáp án đúng là: ${recallMode === 'recognition' ? currentCard.vietnamese : currentCard.word}`}
            </div>
            <Button 
              size="lg" 
              className="px-8 font-bold text-lg h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm group"
              onClick={nextQuestion}
            >
              {currentIndex < filteredCards.length - 1 && lives > 0 ? 'Tiếp theo' : 'Hoàn thành'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
