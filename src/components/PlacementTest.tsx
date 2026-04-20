import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { PLACEMENT_QUESTIONS } from '../data/curriculum';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PlacementTestProps {
  onComplete: (score: number, level: string) => void;
}

export function PlacementTest({ onComplete }: PlacementTestProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [PLACEMENT_QUESTIONS[currentStep].id]: value });
  };

  const nextStep = () => {
    if (currentStep < PLACEMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const finishTest = () => {
    let score = 0;
    PLACEMENT_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score += 1;
    });
    
    const percentage = (score / PLACEMENT_QUESTIONS.length) * 100;
    let level = 'A2';
    if (percentage > 80) level = 'B1';
    else if (percentage > 40) level = 'A2+';
    
    onComplete(score, level);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="test"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-sm border border-border">
              <div className="mb-8">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-sm">Bài kiểm tra đầu vào</span>
                </div>
                <h2 className="text-3xl font-bold font-heading text-foreground mb-2">Xác định trình độ của bạn</h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / PLACEMENT_QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-muted-foreground">
                    {currentStep + 1} / {PLACEMENT_QUESTIONS.length}
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-xl font-medium p-6 bg-muted rounded-2xl text-foreground leading-relaxed">
                  {PLACEMENT_QUESTIONS[currentStep].text}
                </div>
                <RadioGroup 
                  value={answers[PLACEMENT_QUESTIONS[currentStep].id]} 
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {PLACEMENT_QUESTIONS[currentStep].options.map((option) => {
                    const isSelected = answers[PLACEMENT_QUESTIONS[currentStep].id] === option;
                    return (
                      <div 
                        key={option} 
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleAnswer(option)}
                      >
                        <RadioGroupItem value={option} id={option} className={isSelected ? 'text-primary border-primary' : ''} />
                        <Label htmlFor={option} className={`flex-1 cursor-pointer text-lg ${isSelected ? 'font-bold text-primary' : 'text-foreground'}`}>
                          {option}
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>

              <div className="mt-10">
                <Button 
                  className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all" 
                  disabled={!answers[PLACEMENT_QUESTIONS[currentStep].id]}
                  onClick={nextStep}
                >
                  {currentStep === PLACEMENT_QUESTIONS.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 bg-card rounded-3xl p-12 shadow-sm border border-border"
          >
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Chúc mừng bạn đã hoàn thành!</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                Chúng tôi đang phân tích kết quả để xây dựng lộ trình 12 tuần tối ưu nhất dành riêng cho bạn.
              </p>
            </div>
            <Button size="lg" className="px-12 h-16 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all hover:scale-105" onClick={finishTest}>
              Xem lộ trình của tôi
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
