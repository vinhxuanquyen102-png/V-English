import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CURRICULUM } from '../data/curriculum';
import { AppState, Lesson } from '../types';
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
  PenTool
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer
} from 'recharts';
import { VocabModal } from './VocabModal';

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
}

export function Dashboard({ state, onSelectLesson, onRemoveTip, onExport, onImport, onStartReview, onStartQuiz, onRemoveFlashcard, onSaveFlashcard }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [showVocabBank, setShowVocabBank] = useState(false);
  const [manualWord, setManualWord] = useState('');
  const [isAddingManual, setIsAddingManual] = useState(false);

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

  const dailyMissions = [
    { id: 'warmup', title: 'Khởi động (Warm-up)', icon: <Coffee className="w-4 h-4" />, time: '10 phút' },
    { id: 'input', title: 'Khám phá (Input)', icon: <BookOpen className="w-4 h-4" />, time: '15 phút' },
    { id: 'practice', title: 'Thực hành (Practice)', icon: <PenTool className="w-4 h-4" />, time: '25 phút' },
    { id: 'review', title: 'Tổng kết (Review)', icon: <Target className="w-4 h-4" />, time: '10 phút' },
  ];

  const cardsDue = state.flashcards.filter(c => new Date(c.nextReview) <= new Date()).length;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-white tracking-tight">
            Xin chào, Người học! 👋
          </h1>
          <p className="text-muted-foreground font-medium mt-1">Lộ trình từ A2 lên B1 của bạn đang tiến triển rất tốt.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onExport} className="gap-2 bg-white/50 backdrop-blur-sm">
            <Download className="w-4 h-4" /> Export
          </Button>
          <div className="relative">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={(e) => e.target.files?.[0] && onImport(e.target.files[0])}
            />
            <Button variant="outline" size="sm" className="gap-2 bg-white/50 backdrop-blur-sm">
              <Upload className="w-4 h-4" /> Import
            </Button>
          </div>
        </div>
      </div>

      {/* 12-Week Interactive Timeline */}
      <Card className="shadow-sm border-border">
        <CardContent className="p-6">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            Lộ trình 12 Tuần
          </h2>
          <div className="relative w-full overflow-x-auto pb-4 hide-scrollbar">
            <div className="min-w-[800px] relative px-4">
              {/* Background Line */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-1.5 bg-muted rounded-full z-0"></div>
              {/* Progress Line */}
              <div 
                className="absolute left-4 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full z-0 transition-all duration-1000" 
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
                      whileHover={!isLocked ? { scale: 1.1 } : {}}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          isCompleted ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 
                          isCurrent ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.6)] ring-4 ring-indigo-500/30' : 
                          'bg-muted text-muted-foreground border-2 border-transparent'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : week}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isCurrent ? 'text-indigo-600 dark:text-indigo-400' : 'text-muted-foreground'}`}>
                        Tuần {week}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Motivation & Daily Mission */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Motivation Stats */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div whileHover={{ y: -5 }}>
              <Card className="shadow-sm border-border relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center shadow-inner">
                    <Flame className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-slate-800 dark:text-white">{state.streak}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Ngày Streak</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <Card className="shadow-sm border-border relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center shadow-inner">
                    <Gem className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-slate-800 dark:text-white">{state.xp}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Điểm XP</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }}>
              <Card className="shadow-sm border-border relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shadow-inner">
                    <Medal className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-heading text-slate-800 dark:text-white">{state.badges.length}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Huy hiệu</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Daily Mission */}
          <Card className="shadow-sm border-border">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
                  Nhiệm vụ Hôm nay
                </CardTitle>
                <Badge variant="outline" className="font-bold bg-background/50 backdrop-blur-sm">
                  Tuần {state.currentWeek} • Ngày {state.currentDay}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentLesson ? (
                <>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50 mb-6">
                    <h3 className="font-bold font-heading text-lg text-indigo-900 dark:text-indigo-300">{currentLesson.title}</h3>
                    <p className="text-sm text-indigo-700/80 dark:text-indigo-400/80 mt-1 font-medium">{currentLesson.topic}</p>
                  </div>

                  <div className="space-y-3">
                    {dailyMissions.map((mission, idx) => (
                      <motion.div 
                        key={mission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                          isCurrentLessonCompleted 
                            ? 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30' 
                            : 'bg-background hover:border-indigo-200 dark:hover:border-indigo-800'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isCurrentLessonCompleted ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
                          }`}>
                            {isCurrentLessonCompleted ? <CheckCircle2 className="w-5 h-5" /> : mission.icon}
                          </div>
                          <span className={`font-bold ${isCurrentLessonCompleted ? 'line-through text-muted-foreground' : 'text-slate-700 dark:text-slate-200'}`}>
                            {mission.title}
                          </span>
                        </div>
                        <Badge variant="secondary" className={`${isCurrentLessonCompleted ? 'opacity-50' : ''}`}>
                          {mission.time}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg font-bold shadow-lg shadow-indigo-500/25 mt-4"
                    onClick={() => onSelectLesson(currentLesson)}
                    disabled={isCurrentLessonCompleted}
                  >
                    {isCurrentLessonCompleted ? 'Đã hoàn thành xuất sắc! 🎉' : 'Bắt đầu học ngay'}
                  </Button>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground font-medium">Bạn đã hoàn thành toàn bộ lộ trình!</p>
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* Right Column: Radar Chart & Vocab */}
        <div className="space-y-8">
          
          {/* Radar Chart */}
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-500" />
                Phân tích 4 Kỹ năng
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] p-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" className="dark:stroke-slate-700" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fontWeight: 800, fill: '#64748b' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Kỹ năng"
                    dataKey="A"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    fill="#4f46e5"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vocabulary Quick Access */}
          <Card 
            className="shadow-sm border-border overflow-hidden relative group cursor-pointer hover:border-blue-500/50 transition-all"
            onClick={() => setShowVocabBank(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Từ vựng đã lưu</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold font-heading text-slate-800 dark:text-white">{state.flashcards.length}</p>
                    {cardsDue > 0 && (
                      <Badge className="bg-rose-500 text-white animate-pulse">
                        {cardsDue} cần ôn
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-md" 
                    onClick={onStartReview}
                  >
                    Ôn tập SRS →
                  </Button>
                  <Button 
                    className="flex-1 font-bold bg-indigo-500 hover:bg-indigo-600 text-white shadow-md" 
                    onClick={onStartQuiz}
                    disabled={state.flashcards.length < 4}
                  >
                    Làm Quiz
                  </Button>
                </div>
                <Button 
                  variant="outline"
                  className="w-full font-bold border-2"
                  onClick={() => setShowVocabBank(true)}
                >
                  Mở kho từ vựng
                </Button>
              </div>
              {state.flashcards.length === 0 && (
                <p className="text-[10px] text-muted-foreground mt-4 italic text-center">
                  Nhấn vào từ vựng trong bài học để lưu vào đây!
                </p>
              )}
            </CardContent>
          </Card>

          {/* Mock Leaderboard */}
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Bảng xếp hạng (Tuần này)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { name: 'Alex', xp: state.xp + 450, isUser: false },
                  { name: 'Bạn', xp: state.xp, isUser: true },
                  { name: 'Sarah', xp: Math.max(0, state.xp - 120), isUser: false },
                  { name: 'Minh', xp: Math.max(0, state.xp - 300), isUser: false },
                ].sort((a, b) => b.xp - a.xp).map((user, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-4 ${user.isUser ? 'bg-primary/5' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0 ? 'bg-yellow-100 text-yellow-700' :
                        idx === 1 ? 'bg-slate-200 text-slate-700' :
                        idx === 2 ? 'bg-orange-100 text-orange-700' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {idx + 1}
                      </div>
                      <span className={`font-bold ${user.isUser ? 'text-primary' : ''}`}>{user.name}</span>
                    </div>
                    <span className="font-mono font-bold text-muted-foreground">{user.xp} XP</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* Vocabulary Bank Modal */}
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
                <div className="flex items-center gap-3">
                  {state.flashcards.length >= 4 && (
                    <Button 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg"
                      onClick={() => {
                        setShowVocabBank(false);
                        onStartQuiz();
                      }}
                    >
                      <Zap className="w-4 h-4 mr-2 fill-current" />
                      Bắt đầu Quiz
                    </Button>
                  )}
                  <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
                    <input 
                      type="text" 
                      placeholder="Thêm từ mới..." 
                      className="bg-transparent border-none outline-none px-3 py-1 text-sm font-bold w-40"
                      value={manualWord}
                      onChange={(e) => setManualWord(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && manualWord) {
                          setIsAddingManual(true);
                        }
                      }}
                    />
                    <Button 
                      size="sm" 
                      className="h-8 w-8 p-0 rounded-md" 
                      disabled={!manualWord}
                      onClick={() => setIsAddingManual(true)}
                    >
                      +
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setShowVocabBank(false)}>✕</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 p-0">
              <ScrollArea className="h-[60vh] p-6">
                {state.flashcards.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Bạn chưa lưu từ vựng nào.</p>
                    <p className="text-sm text-muted-foreground">Hãy nhấn vào các từ trong bài học để lưu nhé!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {state.flashcards.map((card) => (
                      <div key={card.id} className="p-4 rounded-xl border-2 bg-muted/30 group relative hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-xl font-bold font-heading text-primary">{card.word}</h4>
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{card.vietnamese}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => onRemoveFlashcard(card.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 italic">"{card.example}"</p>
                        <div className="mt-3 flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-bold">
                            Review: {new Date(card.nextReview).toLocaleDateString('vi-VN')}
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] font-bold">
                            EF: {card.easeFactor?.toFixed(1)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
            <div className="p-4 border-t bg-muted/20 flex justify-end">
              <Button onClick={() => setShowVocabBank(false)} className="font-bold">Đóng</Button>
            </div>
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
