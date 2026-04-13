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
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <GraduationCap className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-sm">Placement Test</span>
                </div>
                <CardTitle className="text-2xl">Xác định trình độ của bạn</CardTitle>
                <CardDescription>
                  Câu hỏi {currentStep + 1} / {PLACEMENT_QUESTIONS.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg font-medium p-4 bg-muted rounded-lg">
                  {PLACEMENT_QUESTIONS[currentStep].text}
                </div>
                <RadioGroup 
                  value={answers[PLACEMENT_QUESTIONS[currentStep].id]} 
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {PLACEMENT_QUESTIONS[currentStep].options.map((option) => (
                    <div key={option} className="flex items-center space-x-2 p-3 rounded-md border hover:bg-accent transition-colors">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full h-12 text-lg font-bold" 
                  disabled={!answers[PLACEMENT_QUESTIONS[currentStep].id]}
                  onClick={nextStep}
                >
                  {currentStep === PLACEMENT_QUESTIONS.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold font-heading">Chúc mừng bạn đã hoàn thành!</h2>
            <p className="text-muted-foreground text-lg">
              Chúng tôi đang phân tích kết quả để xây dựng lộ trình 12 tuần tối ưu cho bạn.
            </p>
            <Button size="lg" className="px-12 h-14 text-xl font-bold shadow-lg" onClick={finishTest}>
              Xem lộ trình của tôi
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
