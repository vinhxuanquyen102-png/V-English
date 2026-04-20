import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Lesson, AISettings, MemoryHack, Exercise, Flashcard } from '../types';
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
  Flag,
  Loader2,
  Languages,
  PencilLine,
  Zap,
  Target
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { gradeWriting, gradeSpeaking, UnifiedAIResult } from '../services/ai';
import { toast } from 'sonner';
import { VocabModal } from './VocabModal';
import { ShadowingLab } from './ShadowingLab';
import { ListeningExercise } from './ListeningExercise';
import { WordTooltip } from './WordTooltip';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: (lessonId: string, aiResult?: any) => void;
  onSaveTip: (tip: any) => void;
  onSaveFlashcard: (card: any) => void;
  allFlashcards: Flashcard[];
  aiSettings: AISettings;
}

export function LessonView({ lesson, onBack, onComplete, onSaveTip, onSaveFlashcard, allFlashcards, aiSettings }: LessonViewProps) {
  const [activeStage, setActiveStage] = useState('grammar');
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
      
      // If score is high enough, mark as completed, otherwise just update result for rewrite
      const isCompleted = result.score >= 80;
      setExerciseStates(prev => ({ 
        ...prev, 
        [exerciseId]: { 
          ...prev[exerciseId], 
          completed: isCompleted, 
          result 
        } 
      }));
      
      if (isCompleted) {
        toast.success('Tuyệt vời! Bạn đã hoàn thành bài viết.');
      } else {
        toast.warning('Hãy xem phản hồi của AI và viết lại nhé!');
      }
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
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <Button variant="ghost" onClick={onBack} className="gap-2 mb-2 text-slate-500 hover:text-slate-800">
        <ArrowLeft className="w-4 h-4" /> Quay lại Dashboard
      </Button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-card p-6 rounded-xl shadow-sm border border-border">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">{lesson.skill}</Badge>
            <Badge variant="outline" className="text-muted-foreground border-border">Tuần {lesson.week} • Ngày {lesson.day}</Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{lesson.title}</h1>
        </div>
        <Button onClick={handleComplete} className="font-semibold px-8 h-12 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
          Hoàn thành bài học
        </Button>
      </div>

      <Tabs value={activeStage} onValueChange={setActiveStage} className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-16 bg-muted/50 p-1.5 rounded-2xl border border-border/50">
          <TabsTrigger value="grammar" className="font-bold gap-2 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary transition-all">
            <BookOpen className="w-4 h-4" /> Ngữ pháp
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="font-bold gap-2 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary transition-all">
            <Languages className="w-4 h-4" /> Từ vựng
          </TabsTrigger>
          <TabsTrigger value="memory_hacks" className="font-bold gap-2 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary transition-all">
            <Zap className="w-4 h-4" /> Mẹo học
          </TabsTrigger>
          <TabsTrigger value="exercises" className="font-bold gap-2 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary transition-all">
            <PencilLine className="w-4 h-4" /> Bài tập
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grammar" className="mt-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/20" />
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-inner">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black font-heading tracking-tight text-foreground">Lý thuyết chính</h2>
                <p className="text-muted-foreground font-medium italic">Nắm vững kiến thức nền tảng...</p>
              </div>
            </div>

            <div className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-primary prose-strong:font-black bg-muted/20 p-8 rounded-[2rem] border border-border/50 shadow-inner">
              <ReactMarkdown>{lesson.explanation}</ReactMarkdown>
            </div>

            <div className="mt-8 p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2rem] space-y-4 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 <AlertTriangle className="w-24 h-24 text-amber-500" />
              </div>
              <h3 className="text-xl font-black text-amber-600 flex items-center gap-3">
                <div className="p-1.5 bg-amber-500/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                Lưu ý quan trọng cho người Việt
              </h3>
              <p className="text-amber-900/80 font-bold text-xl leading-relaxed relative z-10">{lesson.commonMistake}</p>
            </div>
            
            <div className="flex justify-end pt-8">
              <Button onClick={() => setActiveStage('vocabulary')} variant="outline" className="h-14 px-8 rounded-2xl font-black border-primary/20 hover:bg-primary/5 transition-all text-primary group">
                Học từ vựng
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="vocabulary" className="mt-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border/40"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-inner">
                <Languages className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black font-heading tracking-tight text-foreground">Từ vựng bài học</h2>
                <p className="text-muted-foreground font-medium italic">Lưu lại những từ quan trọng để ôn tập SRS...</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allFlashcards.filter(f => f.sourceLesson === lesson.id).length > 0 ? (
                allFlashcards.filter(f => f.sourceLesson === lesson.id).map((card) => (
                  <div key={card.id} className="p-6 bg-muted/30 rounded-2xl border border-border/50 flex flex-col gap-3 group hover:bg-card hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                       <h3 className="text-2xl font-black text-primary">{card.word}</h3>
                       <Badge variant="outline" className="text-[10px] uppercase font-black opacity-50">{card.partOfSpeech}</Badge>
                    </div>
                    <p className="text-lg font-bold text-foreground">/ {card.ipa} /</p>
                    <p className="text-muted-foreground font-medium leading-relaxed italic border-l-2 border-primary/30 pl-3">"{card.example}"</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center space-y-6 bg-muted/20 border-2 border-dashed border-border/50 rounded-[3rem]">
                  <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Target className="w-10 h-10 text-primary opacity-30" />
                  </div>
                  <div className="max-w-md mx-auto">
                    <p className="text-xl font-black text-foreground mb-2">Chưa có từ vựng nào được lưu</p>
                    <p className="text-muted-foreground font-medium">Hãy click vào các từ trong phần <strong className="text-primary hover:underline cursor-pointer" onClick={() => setActiveStage('grammar')}>Lý thuyết</strong> hoặc <strong className="text-primary hover:underline cursor-pointer" onClick={() => setActiveStage('exercises')}>Bài tập</strong> để lưu vào Flashcards nhé!</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={() => setActiveStage('memory_hacks')} variant="outline" className="h-14 px-8 rounded-2xl font-black border-primary/20 hover:bg-primary/5 transition-all text-primary group">
                Xem mẹo ghi nhớ
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="memory_hacks" className="mt-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border/40"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-inner">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-black font-heading tracking-tight text-foreground">Mẹo ghi nhớ siêu tốc</h2>
                <p className="text-muted-foreground font-medium italic">Memory Hacks giúp bạn nhớ lâu hơn...</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lesson.memoryHacks.map((hack, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-muted/40 border border-border/50 rounded-3xl relative group hover:bg-card hover:shadow-xl transition-all"
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 text-primary rounded-2xl h-10 px-4 font-bold border border-primary/10"
                    onClick={() => saveMemoryHack(hack)}
                  >
                    <Save className="w-4 h-4 mr-2" /> Lưu mẹo
                  </Button>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none px-3 py-1 font-black text-[10px] uppercase tracking-widest">{hack.type}</Badge>
                  </div>
                  <p className="font-extrabold text-foreground text-2xl mb-3 leading-tight tracking-tight">{hack.content}</p>
                  {hack.vietnameseNote && (
                    <p className="text-base text-amber-800/80 font-bold bg-amber-500/5 p-3 rounded-xl border border-amber-500/10 italic">→ {hack.vietnameseNote}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-end pt-8">
              <Button onClick={() => setActiveStage('exercises')} variant="outline" className="h-14 px-8 rounded-2xl font-black border-primary/20 hover:bg-primary/5 transition-all text-primary group">
                Làm bài tập
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="exercises" className="mt-8 space-y-8 pb-20">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 bg-primary/10 text-primary rounded-2xl shadow-inner">
               <PencilLine className="w-8 h-8" />
             </div>
             <div>
               <h2 className="text-3xl font-black font-heading tracking-tight text-foreground">Thực hành & Sửa lỗi</h2>
               <p className="text-muted-foreground font-medium italic">Vận hành kiến thức đã học...</p>
             </div>
          </div>

          <AnimatePresence>
            {aiFeedback && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-8 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 border-b border-primary/10 pb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg ring-8 ring-primary/5">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-primary tracking-tight">AI Đánh giá chi tiết</h3>
                      <p className="text-primary/60 font-medium">Phân tích chuyên sâu từ "Gia sư ảo"</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-background flex flex-col items-center justify-center shadow-xl border-4 border-primary ring-8 ring-primary/5">
                      <span className="text-3xl font-black text-primary leading-none">{aiFeedback.score}</span>
                      <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest mt-1">Score</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card/50 p-8 rounded-[2rem] border border-border shadow-inner relative group">
                  <p className="font-bold text-xl text-foreground leading-relaxed italic">"{aiFeedback.feedback}"</p>
                </div>
                
                {aiFeedback.corrections && aiFeedback.corrections.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/70 ml-2">Tips & Corrections</p>
                    <div className="grid grid-cols-1 gap-4">
                      {aiFeedback.corrections.map((c: string, i: number) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 bg-background p-6 rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-all"
                        >
                          <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 group-hover:text-white" /> 
                          </div>
                          <span className="text-foreground font-bold text-lg">{c}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <Button onClick={handleComplete} className="w-full h-20 text-2xl font-black rounded-3xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 group overflow-hidden relative">
                   <span className="relative z-10 flex items-center gap-3">
                      HOÀN THÀNH BÀI HỌC
                      <Flag className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {lesson.exercises.map((exercise, index) => (
            <div key={exercise.id} className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border space-y-8">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h2 className="text-xl font-semibold text-foreground">Bài {index + 1}: {exercise.title}</h2>
                <Badge variant="secondary" className="bg-muted text-muted-foreground">{exercise.duration}</Badge>
              </div>
              
              <div className="space-y-6">
                
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

                {/* Listening Exercise */}
                {exercise.type === 'listening' && exercise.audioText && (
                  <ListeningExercise 
                    text={exercise.audioText}
                    onComplete={(correct) => {
                      if (correct) {
                        setExerciseStates(prev => ({ ...prev, [exercise.id]: { completed: true } }));
                      }
                    }}
                  />
                )}

                {/* Reading Exercise */}
                {exercise.type === 'reading' && exercise.content && (
                  <div className="text-xl leading-relaxed font-medium text-foreground p-8 bg-muted rounded-xl flex flex-wrap gap-x-2 gap-y-2">
                    {exercise.content.split(/\s+/).map((word, i) => (
                      <WordTooltip key={i} word={word} settings={aiSettings}>
                        <span 
                          className="cursor-pointer hover:text-primary hover:bg-primary/10 px-1 rounded transition-colors"
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
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="font-medium text-primary text-lg">{exercise.prompt}</p>
                    </div>
                    <textarea 
                      className="w-full h-48 p-5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-lg bg-card"
                      placeholder="Bắt đầu viết tại đây..."
                      value={exerciseStates[exercise.id]?.text || ''}
                      onChange={(e) => setExerciseStates(prev => ({ ...prev, [exercise.id]: { ...prev[exercise.id], text: e.target.value } }))}
                      disabled={exerciseStates[exercise.id]?.completed}
                    />
                    
                    {exerciseStates[exercise.id]?.result && (
                      <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl space-y-2">
                        <p className="font-semibold text-amber-800">Feedback từ AI:</p>
                        <p className="text-amber-900">{exerciseStates[exercise.id].result.feedback}</p>
                        <p className="font-semibold text-amber-800 mt-2">Gợi ý sửa lỗi:</p>
                        <ul className="list-disc list-inside text-amber-900">
                          {exerciseStates[exercise.id].result.corrections.map((c: string, i: number) => <li key={i}>{c}</li>)}
                        </ul>
                        <p className="font-semibold text-amber-800 mt-2">Vui lòng viết lại dựa trên phản hồi của AI:</p>
                      </div>
                    )}

                    <Button 
                      className="w-full h-14 font-semibold text-lg rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" 
                      onClick={() => handleGradeWriting(exercise.id, exerciseStates[exercise.id]?.text || '', exercise.prompt || '')}
                      disabled={isGrading || (exerciseStates[exercise.id]?.text?.length || 0) < 10 || exerciseStates[exercise.id]?.completed}
                    >
                      {isGrading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> AI đang chấm điểm...</> : (exerciseStates[exercise.id]?.result ? 'Gửi bài viết lại' : 'Gửi bài chấm điểm')}
                    </Button>
                  </div>
                )}

                {/* Quiz Exercise */}
                {(exercise.type === 'quiz' || (exercise.type === 'reading' && exercise.questions)) && exercise.questions && (
                  <div className="space-y-10">
                    {exercise.questions.map((q, qIdx) => {
                      const userAnswer = exerciseStates[exercise.id]?.answers?.[q.id];
                      const isAnswered = !!userAnswer;
                      const isCorrect = userAnswer === q.correctAnswer;

                      return (
                        <div key={q.id} className="space-y-5">
                          <p className="text-lg font-bold text-foreground">
                            <span className="text-primary mr-2">{qIdx + 1}.</span>
                            {q.text}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {q.options.map((opt) => {
                              const isSelected = userAnswer === opt;
                              const isOptCorrect = opt === q.correctAnswer;
                              
                              let btnClass = "justify-start h-14 px-5 rounded-xl border-2 text-left font-medium transition-all ";
                              
                              if (!isAnswered) {
                                btnClass += "bg-card border-border hover:border-primary/40 hover:bg-primary/5 text-card-foreground";
                              } else {
                                if (isOptCorrect) {
                                  btnClass += "bg-primary/10 border-primary text-primary dark:bg-primary/20 dark:border-primary/50 dark:text-primary-foreground";
                                } else if (isSelected && !isOptCorrect) {
                                  btnClass += "bg-destructive/10 border-destructive text-destructive dark:bg-destructive/20 dark:border-destructive/50 dark:text-destructive-foreground";
                                } else {
                                  btnClass += "bg-muted border-border text-muted-foreground opacity-50";
                                }
                              }

                              return (
                                <button 
                                  key={opt}
                                  className={btnClass}
                                  onClick={() => {
                                    if (!isAnswered) {
                                      handleQuizAnswer(exercise.id, q.id, opt);
                                    }
                                  }}
                                  disabled={isAnswered}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                          {isAnswered && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                              <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30 dark:text-primary-foreground' : 'bg-destructive/5 border-destructive/20 text-destructive dark:bg-destructive/10 dark:border-destructive/30 dark:text-destructive-foreground'}`}>
                                <p className="font-bold mb-1 flex items-center gap-2">
                                  {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                                  {isCorrect ? 'Chính xác!' : 'Chưa chính xác'}
                                </p>
                                <p className="text-sm opacity-90">{q.explanation}</p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>
          ))}
          <div className="flex justify-end pb-12">
             {!aiFeedback && (
               <Button onClick={handleComplete} size="lg" className="h-16 px-12 rounded-2xl font-black text-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 group">
                 KẾT THÚC BÀI HỌC
                 <Flag className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
               </Button>
             )}
          </div>
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
