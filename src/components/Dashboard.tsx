import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CURRICULUM } from '../data/curriculum';
import { AppState, Lesson } from '../types';
import { generateDailyLesson } from '../services/ai';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  PlayCircle, 
  Star, 
  Bookmark, 
  Trash2,
  Brain,
  Zap,
  History,
  TrendingUp,
  Flame,
  Award,
  Calendar,
  Download,
  Upload,
  Gem,
  Medal,
  Target,
  Coffee,
  BookOpen,
  PenTool,
  Loader2,
  AlertCircle,
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui/tabs';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { VocabModal } from './VocabModal';
import { VocabularyList } from './VocabularyList';
import { IPALab } from './IPALab';

interface DashboardProps {
  state: AppState;
  onSelectLesson: (lesson: Lesson) => void;
  onRemoveTip: (id: string) => void;
  onExport: () => void;
  onImport: (file: File) => void;
  onStartReview: () => void;
  onStartQuiz: () => void;
  onRemoveFlashcard: (id: string) => void;
  onSaveFlashcard: (card: any) => void;
  onUpdateFlashcard: (id: string, updates: any) => void;
  onUpdateXP: (amount: number) => void;
}

export function Dashboard({ state, onSelectLesson, onRemoveTip, onExport, onImport, onStartReview, onStartQuiz, onRemoveFlashcard, onSaveFlashcard, onUpdateFlashcard, onUpdateXP }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [showVocabBank, setShowVocabBank] = useState(false);
  const [manualWord, setManualWord] = useState('');
  const [isAddingManual, setIsAddingManual] = useState(false);
  const [isGeneratingLesson, setIsGeneratingLesson] = useState(false);

  const totalLessons = 84; // 12 weeks * 7 days
  const completedCount = state.completedLessons.length;
  const progress = (completedCount / totalLessons) * 100;

  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);

  // Level calculation
  const userLevel = Math.floor(state.xp / 500) + 1;
  const xpInCurrentLevel = state.xp % 500;
  const levelProgress = (xpInCurrentLevel / 500) * 100;

  // Current Lesson
  const currentLesson = CURRICULUM.find(l => l.week === state.currentWeek && l.day === state.currentDay);
  const isCurrentLessonCompleted = currentLesson ? state.completedLessons.includes(currentLesson.id) : false;

  const handleStartLesson = async () => {
    if (!currentLesson) return;
    
    setIsGeneratingLesson(true);
    try {
      const generatedData = await generateDailyLesson(state, state.aiSettings);
      
      // Map generated JSON to Lesson interface
      const dynamicLesson: Lesson = {
        id: `dynamic-${state.currentWeek}-${state.currentDay}`,
        week: state.currentWeek,
        day: state.currentDay,
        title: generatedData.title || currentLesson.title,
        topic: generatedData.communication_goal || currentLesson.topic,
        skill: 'General',
        explanation: generatedData.explanation || currentLesson.explanation,
        commonMistake: generatedData.common_mistake || currentLesson.commonMistake,
        memoryHacks: currentLesson.memoryHacks, // Keep original hacks or generate new ones
        exercises: generatedData.exercises || currentLesson.exercises
      };
      
      onSelectLesson(dynamicLesson);
    } catch (error) {
      console.error("Failed to generate dynamic lesson, falling back to static", error);
      onSelectLesson(currentLesson);
    } finally {
      setIsGeneratingLesson(false);
    }
  };

  // Radar Chart Data (4 Skills)
  const skillScores: Record<string, number[]> = {
    'Nghe': [],
    'Nói': [],
    'Đọc': [],
    'Viết': []
  };

  // Map old skills to new 4 skills for the chart
  state.feedbackLog.forEach(log => {
    let mappedSkill = '';
    if (log.skill === 'Listening') mappedSkill = 'Nghe';
    else if (log.skill === 'Speaking') mappedSkill = 'Nói';
    else if (log.skill === 'Reading') mappedSkill = 'Đọc';
    else if (log.skill === 'Writing') mappedSkill = 'Viết';
    
    if (mappedSkill && skillScores[mappedSkill]) {
      skillScores[mappedSkill].push(log.score);
    }
  });

  const radarData = Object.keys(skillScores).map(skill => ({
    subject: skill,
    A: skillScores[skill].length > 0 
      ? Math.round(skillScores[skill].reduce((a, b) => a + b, 0) / skillScores[skill].length)
      : 0, // Default baseline
    fullMark: 100,
  }));

  const errorData = [
    { name: 'Thì', count: state.errorStats?.tense || 0, color: '#6366f1' },
    { name: 'Giới từ', count: state.errorStats?.preposition || 0, color: '#8b5cf6' },
    { name: 'Mạo từ', count: state.errorStats?.article || 0, color: '#ec4899' },
    { name: 'Từ vựng', count: state.errorStats?.wordChoice || 0, color: '#f43f5e' },
  ];

  const dailyMissions = [
    { id: 'warmup', title: 'Khởi động (Warm-up)', icon: <Coffee className="w-4 h-4" />, time: '10 phút' },
    { id: 'input', title: 'Khám phá (Input)', icon: <BookOpen className="w-4 h-4" />, time: '15 phút' },
    { id: 'practice', title: 'Thực hành (Practice)', icon: <PenTool className="w-4 h-4" />, time: '25 phút' },
    { id: 'review', title: 'Tổng kết (Review)', icon: <Target className="w-4 h-4" />, time: '10 phút' },
  ];

  const cardsDue = state.flashcards.filter(c => new Date(c.nextReview) <= new Date()).length;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Tiếp tục chuỗi học tuyệt vời nhé! 👋
          </h1>
          <p className="text-muted-foreground font-medium mt-2 text-lg">Mỗi ngày một chút, bạn đang tiến rất gần đến mục tiêu B1.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onExport} className="gap-2 rounded-full bg-background/50 backdrop-blur-sm border-border shadow-sm hover:bg-muted">
            <Download className="w-4 h-4" /> Sao lưu
          </Button>
          <div className="relative">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={(e) => e.target.files?.[0] && onImport(e.target.files[0])}
            />
            <Button variant="outline" size="sm" className="gap-2 rounded-full bg-background/50 backdrop-blur-sm border-border shadow-sm hover:bg-muted">
              <Upload className="w-4 h-4" /> Khôi phục
            </Button>
          </div>
        </div>
      </div>

      {/* 12-Week Interactive Timeline */}
      <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
            <Target className="w-6 h-6 text-primary" />
            Hành trình 12 Tuần
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-muted p-1 rounded-2xl h-12">
              <TabsTrigger value="roadmap" className="rounded-xl px-6 font-bold data-active:bg-card data-active:text-primary shadow-none border-none">
                Lộ trình
              </TabsTrigger>
              <TabsTrigger value="vocabulary" className="rounded-xl px-6 font-bold data-active:bg-card data-active:text-primary shadow-none border-none">
                Từ vựng
              </TabsTrigger>
              <TabsTrigger value="ipa_lab" className="rounded-xl px-6 font-bold data-active:bg-card data-active:text-primary shadow-none border-none">
                IPA Lab
                <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary text-[10px] scale-75">AI</Badge>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl px-6 font-bold data-active:bg-card data-active:text-primary shadow-none border-none">
                Phân tích
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {activeTab === 'roadmap' && (
          <div className="relative w-full overflow-x-auto pb-6 hide-scrollbar">
            <div className="min-w-[800px] relative px-4">
              {/* Background Line */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-2 bg-muted rounded-full z-0"></div>
              {/* Progress Line */}
              <div 
                className="absolute left-4 top-1/2 -translate-y-1/2 h-2 bg-primary rounded-full z-0 transition-all duration-1000" 
                style={{ width: `calc(${((state.currentWeek - 1) / 11) * 100}% - 2rem)` }}
              ></div>
              
              <div className="relative z-10 flex justify-between items-center">
                {weeks.map(week => {
                  const isCompleted = week < state.currentWeek;
                  const isCurrent = week === state.currentWeek;
                  const isLocked = week > state.currentWeek;
                  
                  return (
                    <motion.div 
                      key={week} 
                      className="flex flex-col items-center gap-3"
                      whileHover={!isLocked ? { scale: 1.1, y: -5 } : {}}
                    >
                      <div 
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                          isCompleted ? 'bg-primary text-primary-foreground shadow-sm' : 
                          isCurrent ? 'bg-card text-primary shadow-[0_0_0_4px_var(--primary-20)] border-4 border-primary' : 
                          'bg-muted text-muted-foreground border-2 border-border'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-7 h-7" /> : week}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
                        Tuần {week}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'roadmap' && (
          <motion.div 
            key="roadmap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Column: Motivation & Daily Mission */}
            <div className="lg:col-span-2 space-y-8">
              {/* Motivation Stats - Bento Box Style */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <motion.div whileHover={{ y: -5 }} className="bg-orange-50 dark:bg-orange-950/30 rounded-3xl p-6 flex flex-col items-center text-center gap-3 border border-orange-100 dark:border-orange-900/50">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-orange-900/50 text-orange-500 flex items-center justify-center shadow-sm">
                    <Flame className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-orange-600 dark:text-orange-400">{state.streak}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-600/70 dark:text-orange-400/70 mt-1">Ngày Streak</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} className="bg-primary/5 rounded-3xl p-6 flex flex-col items-center text-center gap-3 border border-primary/20">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-primary/20 text-primary flex items-center justify-center shadow-sm">
                    <Gem className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-primary">{state.xp}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary/70 mt-1">Điểm XP</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} className="bg-accent rounded-3xl p-6 flex flex-col items-center text-center gap-3 border border-border">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-card text-foreground flex items-center justify-center shadow-sm border border-border">
                    <Medal className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-foreground">{state.badges.length}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Huy hiệu</p>
                  </div>
                </motion.div>
              </div>

              {/* Daily Mission */}
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    Nhiệm vụ Hôm nay
                  </h2>
                  <Badge variant="secondary" className="font-bold text-sm px-4 py-1.5 rounded-full bg-muted text-muted-foreground border-border">
                    Tuần {state.currentWeek} • Ngày {state.currentDay}
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  {currentLesson ? (
                    <>
                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 mb-8">
                        <h3 className="font-bold font-heading text-xl text-primary">{currentLesson.title}</h3>
                        <p className="text-primary/70 mt-2 font-medium text-lg">{currentLesson.topic}</p>
                      </div>

                      <div className="space-y-4">
                        {dailyMissions.map((mission, idx) => (
                          <motion.div 
                            key={mission.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex items-center justify-between p-5 rounded-2xl transition-all ${
                              isCurrentLessonCompleted 
                                ? 'bg-muted opacity-60' 
                                : 'bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                isCurrentLessonCompleted ? 'bg-emerald-500 text-white' : 'bg-primary/10 text-primary'
                              }`}>
                                {isCurrentLessonCompleted ? <CheckCircle2 className="w-6 h-6" /> : mission.icon}
                              </div>
                              <span className={`font-bold text-lg ${isCurrentLessonCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                {mission.title}
                              </span>
                            </div>
                            <Badge variant="secondary" className={`rounded-full px-3 py-1 ${isCurrentLessonCompleted ? 'opacity-50' : 'bg-muted text-muted-foreground border-border'}`}>
                              {mission.time}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <Button 
                        size="lg" 
                        className="w-full h-16 text-xl font-bold rounded-2xl mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all hover:scale-[1.01]"
                        onClick={handleStartLesson}
                        disabled={isCurrentLessonCompleted || isGeneratingLesson}
                      >
                        {isCurrentLessonCompleted ? 'Đã hoàn thành xuất sắc! 🎉' : 
                         isGeneratingLesson ? <><Loader2 className="w-6 h-6 mr-3 animate-spin" /> AI đang chuẩn bị bài học...</> : 
                         'Bắt đầu học ngay'}
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-16 bg-muted rounded-3xl">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Chúc mừng!</h3>
                      <p className="text-muted-foreground font-medium text-lg">Bạn đã hoàn thành toàn bộ lộ trình 90 ngày.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Stats Quick Access */}
            <div className="space-y-8">
              {/* Vocabulary Quick Access - Vault Style */}
              <div 
                className="bg-card rounded-3xl p-6 shadow-sm border border-border relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all"
                onClick={() => setActiveTab('vocabulary')}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Brain className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Kho Từ Vựng</h3>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-5xl font-bold font-heading mb-2 text-foreground">{state.flashcards.length}</p>
                    <p className="text-muted-foreground font-medium">từ đã lưu trong bộ nhớ</p>
                  </div>

                  {cardsDue > 0 && (
                    <div className="mb-6 p-3 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 rounded-xl flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                      <p className="text-orange-700 dark:text-orange-400 font-medium text-sm">Có {cardsDue} từ cần ôn tập ngay!</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
                    <Button 
                      className="w-full h-12 font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl" 
                      onClick={onStartReview}
                    >
                      Ôn tập Spaced Repetition
                    </Button>
                    <div className="flex gap-3">
                      <Button 
                        variant="secondary"
                        className="flex-1 h-12 font-bold rounded-xl" 
                        onClick={onStartQuiz}
                        disabled={state.flashcards.length < 4}
                      >
                        Làm Quiz
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 h-12 font-bold rounded-xl"
                        onClick={() => setActiveTab('vocabulary')}
                      >
                        Mở kho
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Analytics Preview */}
              <div 
                className="bg-card rounded-3xl p-6 shadow-sm border border-border cursor-pointer hover:border-primary/30 transition-all"
                onClick={() => setActiveTab('analytics')}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Kỹ năng
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="h-[150px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radarData}>
                      <PolarGrid stroke="#e2e8f0" className="dark:stroke-slate-700" />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 600, fill: '#64748b' }} />
                      <Radar
                        name="Kỹ năng"
                        dataKey="A"
                        stroke="#6366f1"
                        strokeWidth={2}
                        fill="#6366f1"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'vocabulary' && (
          <motion.div 
            key="vocabulary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <VocabularyList 
              flashcards={state.flashcards}
              onRemove={onRemoveFlashcard}
              onSave={onSaveFlashcard}
              onUpdate={onUpdateFlashcard}
              aiSettings={state.aiSettings}
            />
          </motion.div>
        )}

        {activeTab === 'ipa_lab' && (
          <motion.div 
            key="ipa_lab"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <IPALab state={state} onUpdateXP={onUpdateXP} />
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div 
            key="analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Radar Chart */}
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                Cân bằng Kỹ năng
              </h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#e2e8f0" className="dark:stroke-slate-700" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 14, fontWeight: 600, fill: '#64748b' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Kỹ năng"
                      dataKey="A"
                      stroke="#6366f1"
                      strokeWidth={3}
                      fill="#6366f1"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Error Intelligence */}
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-foreground">
                <div className="p-2 bg-destructive/10 rounded-xl">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                Phân tích Lỗi (Error Intelligence)
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={errorData} layout="vertical" margin={{ left: 0, right: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fontSize: 14, fontWeight: 600, fill: '#64748b' }}
                      axisLine={false}
                      tickLine={false}
                      width={100}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', background: 'var(--card)', color: 'var(--foreground)' }}
                    />
                    <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={32}>
                      {errorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-8 p-6 bg-muted rounded-2xl border border-border">
                <p className="text-sm text-foreground leading-relaxed italic">
                  "Hệ thống AI đang phân tích các bài viết và bài nói của bạn. Chúng tôi nhận thấy bạn đang tiến bộ tốt ở phần <b>{radarData.sort((a,b) => b.A - a.A)[0].subject}</b>, nhưng cần chú ý hơn về <b>{errorData.sort((a,b) => b.count - a.count)[0].name}</b>."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vocabulary Bank Modal - Keep for backward compatibility or remove if not needed */}
      {showVocabBank && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] flex flex-col shadow-2xl border-2">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl font-bold font-heading flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    Kho từ vựng của bạn
                  </CardTitle>
                  <CardDescription>Bạn đã lưu {state.flashcards.length} từ vựng</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowVocabBank(false)}>✕</Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 p-0">
              <VocabularyList 
                flashcards={state.flashcards}
                onRemove={onRemoveFlashcard}
                onSave={onSaveFlashcard}
                onUpdate={onUpdateFlashcard}
                aiSettings={state.aiSettings}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {isAddingManual && (
        <VocabModal 
          word={manualWord}
          isOpen={isAddingManual}
          onClose={() => {
            setIsAddingManual(false);
            setManualWord('');
          }}
          onSave={onSaveFlashcard}
          aiSettings={state.aiSettings}
        />
      )}
    </div>
  );
}
