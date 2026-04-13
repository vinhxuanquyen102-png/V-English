import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Lesson, AISettings, MemoryHack, Exercise } from '../types';
import { 
  ArrowLeft, 
  Brain, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Mic, 
  Save, 
  Info,
  AlertTriangle,
  BookOpen,
  Coffee,
  Flag
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { gradeWriting, gradeSpeaking, UnifiedAIResult } from '../services/ai';
import { toast } from 'sonner';
import { VocabModal } from './VocabModal';
import { ShadowingLab } from './ShadowingLab';
import { WordTooltip } from './WordTooltip';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: (lessonId: string, aiResult?: any) => void;
  onSaveTip: (tip: any) => void;
  onSaveFlashcard: (card: any) => void;
  aiSettings: AISettings;
}

export function LessonView({ lesson, onBack, onComplete, onSaveTip, onSaveFlashcard, aiSettings }: LessonViewProps) {
  const [activeStage, setActiveStage] = useState('warmup');
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedWordContext, setSelectedWordContext] = useState<string | null>(null);

  const handleWordClick = (word: string, fullText: string) => {
    const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    setSelectedWord(cleanedWord);
    
    // Find the sentence containing the word
    const sentences = fullText.split(/[.!?]/);
    const contextSentence = sentences.find(s => s.includes(word))?.trim();
    if (contextSentence) {
      setSelectedWordContext(contextSentence + ".");
    } else {
      setSelectedWordContext(null);
    }
  };
  
  // Exercise states
  const [exerciseStates, setExerciseStates] = useState<Record<string, any>>({});
  const [isGrading, setIsGrading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<any>(null);

  // Audio Engine
  const [isPlaying, setIsPlaying] = useState(false);
  const synth = window.speechSynthesis;

  const toggleAudio = (text: string) => {
    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for A2 learners
      utterance.onend = () => setIsPlaying(false);
      synth.speak(utterance);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      synth.cancel(); // Cleanup on unmount
    };
  }, []);

  const handleGradeWriting = async (exerciseId: string, text: string, prompt: string) => {
    setIsGrading(true);
    try {
      const result = await gradeWriting(text, prompt, aiSettings);
      setAiFeedback(result);
      setExerciseStates(prev => ({ ...prev, [exerciseId]: { ...prev[exerciseId], completed: true, result } }));
      toast.success('AI đã chấm điểm xong!');
      setActiveStage('summary');
    } catch (e) {
      toast.error('Có lỗi khi kết nối với AI.');
    } finally {
      setIsGrading(false);
    }
  };

  const handleGradeSpeaking = async (exerciseId: string, transcript: string, targetText: string) => {
    setIsGrading(true);
    try {
      const result = await gradeSpeaking(transcript, targetText, aiSettings);
      setAiFeedback(result);
      setExerciseStates(prev => ({ ...prev, [exerciseId]: { ...prev[exerciseId], completed: true, result } }));
      toast.success('AI đã chấm điểm xong!');
    } catch (e) {
      toast.error('Có lỗi khi kết nối với AI.');
    } finally {
      setIsGrading(false);
    }
  };

  const handleComplete = () => {
    onComplete(lesson.id, aiFeedback);
  };

  const saveMemoryHack = (hack: MemoryHack) => {
    onSaveTip({
      ...hack,
      lessonId: lesson.id,
      lessonTitle: lesson.title
    });
    toast.success('Đã lưu mẹo vào Dashboard!');
  };

  const handleQuizAnswer = (exerciseId: string, questionId: string, answer: string) => {
    setExerciseStates(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        answers: { ...(prev[exerciseId]?.answers || {}), [questionId]: answer }
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
      <Button variant="ghost" onClick={onBack} className="gap-2 mb-4">
        <ArrowLeft className="w-4 h-4" /> Quay lại Dashboard
      </Button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{lesson.skill}</Badge>
            <Badge variant="secondary">Tuần {lesson.week} • Ngày {lesson.day}</Badge>
          </div>
          <h1 className="text-3xl font-bold font-heading tracking-tight">{lesson.title}</h1>
        </div>
        <Button onClick={handleComplete} className="font-bold px-8">
          Hoàn thành bài học
        </Button>
      </div>

      <Tabs value={activeStage} onValueChange={setActiveStage} className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-12">
          <TabsTrigger value="warmup" className="font-bold gap-2">
            <Coffee className="w-4 h-4" /> Khởi động
          </TabsTrigger>
          <TabsTrigger value="explore" className="font-bold gap-2">
            <Brain className="w-4 h-4" /> Khám phá
          </TabsTrigger>
          <TabsTrigger value="practice" className="font-bold gap-2">
            <Sparkles className="w-4 h-4" /> Thực hành
          </TabsTrigger>
          <TabsTrigger value="summary" className="font-bold gap-2">
            <Flag className="w-4 h-4" /> Tổng kết
          </TabsTrigger>
        </TabsList>

        <TabsContent value="warmup" className="mt-6">
          <Card className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle>Khởi động (10 phút)</CardTitle>
              <CardDescription>Ôn tập nhanh trước khi bắt đầu bài học mới.</CardDescription>
            </CardHeader>
            <CardContent className="py-12 text-center space-y-6">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-10 h-10" />
              </div>
              <p className="text-lg font-medium text-slate-700">
                Hãy quay lại Dashboard và hoàn thành các từ vựng cần ôn tập (Spaced Repetition) trước khi bắt đầu bài học mới để đạt hiệu quả tốt nhất nhé!
              </p>
              <Button onClick={() => setActiveStage('explore')} size="lg" className="font-bold">
                Bỏ qua & Bắt đầu Khám phá
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="explore" className="mt-6 space-y-6">
          <Card className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Explain & Memory Hacks (15 phút)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <section className="space-y-3">
                <h3 className="text-lg font-bold border-b pb-2">Ngữ pháp / Từ vựng</h3>
                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown>{lesson.explanation}</ReactMarkdown>
                </div>
              </section>

              <section className="space-y-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-xl">
                <h3 className="text-lg font-bold text-orange-700 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Vietnamese Common Mistakes
                </h3>
                <p className="text-orange-800 font-medium">{lesson.commonMistake}</p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">Memory Hacks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.memoryHacks.map((hack, idx) => (
                    <div key={idx} className="p-4 bg-primary/5 border-2 border-primary/10 rounded-xl relative group">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => saveMemoryHack(hack)}
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                      <Badge className="mb-2">{hack.type}</Badge>
                      <p className="font-bold text-slate-800 mb-1">{hack.content}</p>
                      {hack.vietnameseNote && (
                        <p className="text-sm text-muted-foreground italic">({hack.vietnameseNote})</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={() => setActiveStage('practice')}>Chuyển sang Thực hành <ArrowLeft className="w-4 h-4 ml-2 rotate-180" /></Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-6 space-y-8">
          {lesson.exercises.map((exercise, index) => (
            <Card key={exercise.id} className="border-2 shadow-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Bài {index + 1}: {exercise.title}</CardTitle>
                  <Badge variant="outline">{exercise.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Shadowing Exercise */}
                {exercise.type === 'shadowing' && exercise.audioText && (
                  <ShadowingLab 
                    text={exercise.audioText} 
                    onWordClick={(word) => handleWordClick(word, exercise.audioText!)} 
                    onGrade={(transcript) => handleGradeSpeaking(exercise.id, transcript, exercise.audioText!)}
                    isGrading={isGrading}
                    feedback={exerciseStates[exercise.id]?.result}
                    aiSettings={aiSettings}
                  />
                )}

                {/* Reading Exercise */}
                {exercise.type === 'reading' && exercise.content && (
                  <div className="text-xl leading-relaxed font-medium text-slate-800 p-6 bg-muted/30 rounded-xl flex flex-wrap gap-x-2 gap-y-1">
                    {exercise.content.split(/\s+/).map((word, i) => (
                      <WordTooltip key={i} word={word} settings={aiSettings}>
                        <span 
                          className="cursor-pointer hover:text-primary hover:bg-primary/5 px-0.5 rounded transition-colors"
                          onClick={() => handleWordClick(word, exercise.content!)}
                        >
                          {word}
                        </span>
                      </WordTooltip>
                    ))}
                  </div>
                )}

                {/* Writing Exercise */}
                {exercise.type === 'writing' && (
                  <div className="space-y-4">
                    <p className="font-medium text-muted-foreground">{exercise.prompt}</p>
                    <textarea 
                      className="w-full h-48 p-4 rounded-xl border-2 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Bắt đầu viết tại đây..."
                      value={exerciseStates[exercise.id]?.text || ''}
                      onChange={(e) => setExerciseStates(prev => ({ ...prev, [exercise.id]: { ...prev[exercise.id], text: e.target.value } }))}
                    />
                    <Button 
                      className="w-full h-12 font-bold" 
                      onClick={() => handleGradeWriting(exercise.id, exerciseStates[exercise.id]?.text || '', exercise.prompt || '')}
                      disabled={isGrading || (exerciseStates[exercise.id]?.text?.length || 0) < 10}
                    >
                      {isGrading ? 'AI đang chấm điểm...' : 'Gửi bài chấm điểm'}
                    </Button>
                  </div>
                )}

                {/* Quiz Exercise */}
                {(exercise.type === 'quiz' || (exercise.type === 'reading' && exercise.questions)) && exercise.questions && (
                  <div className="space-y-8">
                    {exercise.questions.map((q) => {
                      const userAnswer = exerciseStates[exercise.id]?.answers?.[q.id];
                      const isAnswered = !!userAnswer;
                      const isCorrect = userAnswer === q.correctAnswer;

                      return (
                        <div key={q.id} className="space-y-4">
                          <p className="text-lg font-bold">{q.text}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {q.options.map((opt) => {
                              const isSelected = userAnswer === opt;
                              const isOptCorrect = opt === q.correctAnswer;
                              
                              let btnVariant = 'outline' as any;
                              if (isAnswered) {
                                if (isOptCorrect) btnVariant = 'default'; // Green in real app
                                else if (isSelected && !isOptCorrect) btnVariant = 'destructive';
                              }

                              return (
                                <Button 
                                  key={opt}
                                  variant={btnVariant}
                                  className={`justify-start h-12 px-4 ${isAnswered && isOptCorrect ? 'bg-green-500 hover:bg-green-600 text-white' : ''}`}
                                  onClick={() => {
                                    if (!isAnswered) {
                                      handleQuizAnswer(exercise.id, q.id, opt);
                                    }
                                  }}
                                  disabled={isAnswered}
                                >
                                  {opt}
                                </Button>
                              );
                            })}
                          </div>
                          {isAnswered && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                              <p className={`text-sm italic p-3 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                <span className="font-bold">{isCorrect ? 'Chính xác! ' : 'Chưa chính xác. '}</span>
                                Giải thích: {q.explanation}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
          <div className="flex justify-end">
             <Button onClick={() => setActiveStage('summary')} size="lg">Hoàn thành Thực hành</Button>
          </div>
        </TabsContent>

        <TabsContent value="summary" className="mt-6 space-y-6">
          <Card className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle>Tổng kết (10 phút)</CardTitle>
              <CardDescription>Đánh giá mức độ hiểu bài và phân tích lỗi sai.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {aiFeedback ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-xl space-y-4">
                    <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                      <h3 className="text-xl font-bold font-heading text-primary">Đánh giá từ AI</h3>
                      <Badge className="text-lg px-3 py-1 bg-primary">{aiFeedback.score}/100</Badge>
                    </div>
                    <p className="font-medium text-slate-800 leading-relaxed">{aiFeedback.feedback}</p>
                    {aiFeedback.corrections && aiFeedback.corrections.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <p className="text-sm font-bold uppercase text-muted-foreground">Gợi ý sửa lỗi & Cải thiện:</p>
                        <ul className="space-y-2">
                          {aiFeedback.corrections.map((c: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm bg-white p-3 rounded-lg border shadow-sm">
                              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-8 text-muted-foreground italic">
                  Hoàn thành bài tập Writing/Speaking để nhận đánh giá từ AI.
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleComplete} className="w-full h-14 text-lg font-bold" size="lg">
                Hoàn thành bài học hôm nay
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedWord && (
        <VocabModal 
          word={selectedWord} 
          isOpen={!!selectedWord} 
          onClose={() => {
            setSelectedWord(null);
            setSelectedWordContext(null);
          }}
          onSave={onSaveFlashcard}
          initialExample={selectedWordContext || undefined}
          aiSettings={aiSettings}
        />
      )}
    </div>
  );
}
