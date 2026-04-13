import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flashcard } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, XCircle, Trophy, ArrowRight, Heart, Timer } from 'lucide-react';
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
    const incorrectAnswers = shuffledOthers.slice(0, 3).map(c => c.vietnamese);
    
    // Combine with correct answer and shuffle
    return [...incorrectAnswers, currentCard.vietnamese].sort(() => Math.random() - 0.5);
  }, [currentIndex, filteredCards]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer || isFinished || filteredCards.length === 0) return;
    
    setSelectedAnswer(answer);
    const currentCard = filteredCards[currentIndex];
    const correct = answer === currentCard.vietnamese;
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-6 shadow-2xl border-4 border-primary/20">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Brain className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold font-heading">Không có từ vựng phù hợp</h2>
          <p className="text-muted-foreground">Hãy lưu thêm các từ đơn lẻ từ bài học để bắt đầu Quiz nhé!</p>
          <Button className="w-full h-14 text-lg font-bold" onClick={onClose}>
            Quay lại Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-6 shadow-2xl border-4 border-primary/20">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner ${lives > 0 ? 'bg-yellow-100 text-yellow-600' : 'bg-rose-100 text-rose-600'}`}>
            {lives > 0 ? <Trophy className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-heading">{lives > 0 ? 'Hoàn thành Quiz!' : 'Kết thúc lượt chơi!'}</h2>
            <p className="text-xl font-bold text-primary">Điểm số: {score}/{filteredCards.length}</p>
            <p className="text-muted-foreground font-medium">
              {lives <= 0 ? 'Bạn đã hết lượt trái tim. Hãy cố gắng hơn lần sau!' : 
               score === filteredCards.length ? 'Tuyệt vời! Bạn đã nhớ hết từ vựng.' : 'Khá lắm! Hãy tiếp tục ôn tập nhé.'}
            </p>
          </div>
          <Button className="w-full h-14 text-lg font-bold shadow-lg" onClick={() => onComplete(score)}>
            Quay lại Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const currentCard = filteredCards[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background p-4 overflow-y-auto">
      <div className="w-full max-w-lg space-y-8 py-8">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-heading flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Từ vựng Quiz
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold text-muted-foreground">Câu hỏi {currentIndex + 1} / {filteredCards.length}</p>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={`w-5 h-5 ${i < lives ? 'text-rose-500 fill-rose-500' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-bold ${timeLeft < 5 ? 'border-rose-500 text-rose-500 animate-pulse' : 'border-primary text-primary'}`}>
            <Timer className="w-4 h-4" />
            {timeLeft}s
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden border">
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
            <Card className={`p-10 text-center border-4 shadow-xl bg-white dark:bg-slate-900 transition-colors ${selectedAnswer && !isCorrect ? 'border-rose-500' : 'border-primary'}`}>
              <p className="text-xs font-bold uppercase text-primary tracking-widest mb-4">Từ vựng này có nghĩa là gì?</p>
              <h3 className="text-5xl font-bold font-heading text-slate-800 dark:text-white tracking-tight mb-6">
                {currentCard.word}
              </h3>
              <div className="p-4 bg-muted/30 rounded-xl italic text-sm text-muted-foreground">
                "{currentCard.example.replace(new RegExp(currentCard.word, 'gi'), '_____')}"
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-3">
              {options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isAnswerCorrect = option === currentCard.vietnamese;
                
                let variant: "outline" | "default" | "destructive" = "outline";
                let className = "h-16 text-lg font-bold justify-start px-6 border-2 transition-all";
                
                if (selectedAnswer) {
                  if (isAnswerCorrect) {
                    variant = "default";
                    className += " bg-emerald-500 border-emerald-600 hover:bg-emerald-500 text-white scale-[1.02]";
                  } else if (isSelected) {
                    variant = "destructive";
                    className += " bg-rose-500 border-rose-600 hover:bg-rose-500 text-white animate-shake";
                  } else {
                    className += " opacity-50";
                  }
                } else {
                  className += " hover:border-primary hover:bg-primary/5";
                }

                return (
                  <Button
                    key={idx}
                    variant={variant}
                    className={className}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedAnswer}
                  >
                    <span className="mr-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                    {selectedAnswer && isAnswerCorrect && <CheckCircle2 className="ml-auto w-6 h-6" />}
                    {selectedAnswer && isSelected && !isAnswerCorrect && <XCircle className="ml-auto w-6 h-6" />}
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
              {isCorrect ? 'Chính xác! 🎉' : `Rất tiếc! Đáp án đúng là: ${currentCard.vietnamese}`}
            </div>
            <Button 
              size="lg" 
              className="px-8 font-bold text-lg h-14 shadow-lg group"
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
