import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AISettings, AppState } from '../types';
import { generateIPAExercises, IPAExercise } from '../services/ai';
import { 
  Volume2, 
  Mic2, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  Brain,
  History,
  Info,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface IPALabProps {
  state: AppState;
  onUpdateXP: (amount: number) => void;
}

export function IPALab({ state, onUpdateXP }: IPALabProps) {
  const [exercises, setExercises] = useState<IPAExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentExercise = exercises[currentIndex];

  const fetchExercises = async () => {
    setIsLoading(true);
    try {
      const data = await generateIPAExercises(state.userLevel || 'A2', state.aiSettings);
      setExercises(data);
      setCurrentIndex(0);
      setIsComplete(false);
      setSessionXP(0);
    } catch (error) {
      console.error("Failed to load IPA lab:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentExercise.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setSessionXP(prev => prev + 20);
      onUpdateXP(20);
      if (currentIndex === exercises.length - 1) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#10b981', '#f59e0b']
        });
      }
    }
  };

  const nextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setIsComplete(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="text-muted-foreground font-bold animate-pulse">Hệ thống AI đang thiết kế bài tập IPA riêng cho bạn...</p>
      </div>
    );
  }

  if (isComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 space-y-8 bg-card border border-border rounded-[3rem] shadow-xl"
      >
        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-foreground tracking-tight">Hoàn thành buổi luyện IPA!</h2>
          <p className="text-muted-foreground text-lg">Bạn đã nắm vững thêm các quy tắc phát âm quan trọng.</p>
        </div>
        
        <div className="flex justify-center gap-8">
           <div className="text-center">
              <p className="text-3xl font-black text-primary">+{sessionXP}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">XP Nhận được</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-black text-primary">{exercises.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Câu hoàn thành</p>
           </div>
        </div>

        <Button size="lg" onClick={fetchExercises} className="rounded-2xl h-14 px-8 font-bold text-lg shadow-lg hover:scale-105 transition-all">
          Luyện tập tiếp
        </Button>
      </motion.div>
    );
  }

  if (!currentExercise) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Lab Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
             <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-foreground">Phòng Luyện IPA</h2>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Cấp độ: {state.userLevel || 'A2'}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-right">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Tiến độ</p>
              <p className="text-sm font-black text-primary">{currentIndex + 1} / {exercises.length}</p>
           </div>
           <Progress value={((currentIndex + 1) / exercises.length) * 100} className="w-32 h-2" />
        </div>
      </div>

      {/* Exercise Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExercise.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="border-2 border-border shadow-2xl rounded-[2.5rem] overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-indigo-600" />
            
            <CardContent className="p-8 md:p-12 space-y-10">
              <div className="space-y-4 text-center">
                <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/5 text-primary border-primary/20 text-xs font-black uppercase tracking-widest">
                  {currentExercise.title}
                </Badge>
                <h3 className="text-3xl font-black text-foreground leading-tight tracking-tight">
                  {currentExercise.question}
                </h3>
              </div>

              {/* Interaction Context */}
              <div className="flex justify-center gap-4">
                {currentExercise.targetWord && (
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-16 px-8 rounded-2xl border-2 text-2xl font-black hover:bg-primary/5 group"
                    onClick={() => speak(currentExercise.targetWord!)}
                  >
                    {currentExercise.targetWord}
                    <Volume2 className="ml-3 w-6 h-6 text-primary animate-pulse-soft" />
                  </Button>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentExercise.options.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === currentExercise.correctAnswer;
                  
                  let buttonStyle = "border-2 bg-card hover:border-primary/50 transition-all";
                  if (isSelected) {
                    buttonStyle = isCorrectAnswer 
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 shadow-lg shadow-emerald-500/10" 
                      : "border-rose-500 bg-rose-50 dark:bg-rose-950/20 shadow-lg shadow-rose-500/10";
                  } else if (selectedAnswer && isCorrectAnswer) {
                    buttonStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 opacity-80";
                  }

                  return (
                    <Button
                      key={idx}
                      variant="ghost"
                      className={`h-20 text-xl font-bold rounded-2xl p-6 justify-start relative overflow-hidden ${buttonStyle}`}
                      onClick={() => handleAnswer(option)}
                    >
                      <div className="flex items-center gap-4 w-full">
                         <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-black text-muted-foreground shrink-0">
                            {String.fromCharCode(65 + idx)}
                         </span>
                         <span className="font-mono text-xl">{option}</span>
                         
                         {isSelected && (
                           <div className="ml-auto">
                              {isCorrectAnswer ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <XCircle className="w-6 h-6 text-rose-500" />}
                           </div>
                         )}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Feedback Section */}
              <AnimatePresence>
                {selectedAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-3xl border-2 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-900 dark:text-emerald-100' : 'bg-rose-500/5 border-rose-500/20 text-rose-900 dark:text-rose-100'}`}
                  >
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-2xl shrink-0 h-fit ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                        {isCorrect ? <Sparkles className="w-6 h-6" /> : <Info className="w-6 h-6" />}
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <p className="font-black text-lg">{isCorrect ? 'Tuyệt vời!' : 'Hơi tiếc một chút...'}</p>
                          <p className="font-medium text-base leading-relaxed opacity-90">{currentExercise.explanation}</p>
                        </div>
                        <Button 
                          onClick={nextExercise}
                          className="w-full h-12 rounded-xl font-bold text-base shadow-md group"
                        >
                          {currentIndex < exercises.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành bài tập'}
                          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Lab History/Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-blue-600 dark:text-blue-400">
               <Brain className="w-5 h-5" /> Mẹo ghi nhớ IPA
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
               IPA giúp bạn phát âm chuẩn mà không cần nghe người bản ngữ. Hãy chú ý đến các âm 'voiced' (rung thanh quản) và 'unvoiced' (không rung).
            </p>
         </div>
         <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400">
               <History className="w-5 h-5" /> Thành tích cá nhân
            </h4>
            <div className="flex justify-between items-center">
               <span className="text-sm text-muted-foreground">Bài luyện hôm nay:</span>
               <span className="text-sm font-black text-foreground">1/1</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-sm text-muted-foreground">Độ chính xác:</span>
               <span className="text-sm font-black text-emerald-500">100%</span>
            </div>
         </div>
      </div>
    </div>
  );
}
