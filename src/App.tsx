import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AppState, Lesson } from './types';
import { CURRICULUM } from './data/curriculum';
import { storage } from './lib/storage';
import { PlacementTest } from './components/PlacementTest';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { FlashcardReview } from './components/FlashcardReview';
import { VocabQuiz } from './components/VocabQuiz';
import { AIChat } from './components/AIChat';
import { XPShop } from './components/XPShop';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Settings, User, MessageCircle, Moon, Sun, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider, useTheme } from './components/ThemeProvider';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </Button>
  );
}

const BADGE_DEFINITIONS = [
  { id: 'first_step', name: 'First Step', description: 'Hoàn thành bài học đầu tiên', icon: '🌱' },
  { id: 'streak_3', name: '3-Day Streak', description: 'Duy trì streak 3 ngày', icon: '🔥' },
  { id: 'streak_7', name: 'Streak King', description: 'Duy trì streak 7 ngày', icon: '👑' },
  { id: 'streak_14', name: 'Unstoppable', description: 'Duy trì streak 14 ngày', icon: '🚀' },
  { id: 'streak_30', name: 'Legendary', description: 'Duy trì streak 30 ngày', icon: '🌟' },
  { id: 'word_10', name: 'Word Master', description: 'Lưu 10 từ vựng vào SRS', icon: '📚' },
  { id: 'word_50', name: 'Vocab Collector', description: 'Lưu 50 từ vựng vào SRS', icon: '📖' },
  { id: 'word_100', name: 'Walking Dictionary', description: 'Lưu 100 từ vựng vào SRS', icon: '🧠' },
  { id: 'quiz_perfect', name: 'Flawless Victory', description: 'Đạt điểm tuyệt đối trong Quiz', icon: '🎯' },
  { id: 'quiz_10', name: 'Quiz Addict', description: 'Hoàn thành 10 bài Quiz', icon: '🎮' },
  { id: 'xp_1000', name: 'XP Hunter', description: 'Đạt 1000 XP', icon: '💰' },
  { id: 'xp_5000', name: 'XP Millionaire', description: 'Đạt 5000 XP', icon: '💎' },
  { id: 'night_owl', name: 'Night Owl', description: 'Học sau 10 giờ tối', icon: '🦉' },
  { id: 'early_bird', name: 'Early Bird', description: 'Học trước 6 giờ sáng', icon: '🌅' },
  { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Học vào cả Thứ 7 và Chủ Nhật', icon: '⚔️' },
  { id: 'grammar_guru', name: 'Grammar Guru', description: 'Hoàn thành 5 bài học Ngữ pháp', icon: '✍️' },
  { id: 'listening_pro', name: 'Listening Pro', description: 'Hoàn thành 5 bài học Nghe', icon: '🎧' },
  { id: 'speaking_star', name: 'Speaking Star', description: 'Hoàn thành 5 bài học Nói', icon: '🗣️' },
  { id: 'reading_champ', name: 'Reading Champ', description: 'Hoàn thành 5 bài học Đọc', icon: '👁️' },
  { id: 'shop_spender', name: 'Big Spender', description: 'Mua vật phẩm đầu tiên trong XP Shop', icon: '🛍️' },
];

export default function App() {
  const [state, setState] = useState<AppState>(storage.load());
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isExtraPractice, setIsExtraPractice] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isXPShopOpen, setIsXPShopOpen] = useState(false);

  const handleBuyItem = (item: 'shield' | 'badge' | 'lesson', cost: number) => {
    setState(prev => {
      const newState = { ...prev, xp: prev.xp - cost };
      if (!newState.purchasedItems) newState.purchasedItems = [];
      
      if (item === 'shield') {
        newState.streakShields = (newState.streakShields || 0) + 1;
      } else {
        newState.purchasedItems.push(item);
      }
      return newState;
    });
  };

  useEffect(() => {
    storage.save(state);
  }, [state]);

  const handlePlacementComplete = (score: number, level: string) => {
    setState(prev => ({
      ...prev,
      userLevel: level as any,
      placementTestScore: score,
      roadmapGenerated: true,
      xp: prev.xp + 100 // Bonus for completing test
    }));
    toast.success(`Trình độ của bạn là: ${level}! Lộ trình đã sẵn sàng.`);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleLessonComplete = (lessonId: string, aiResult?: any) => {
    setState(prev => {
      const isNewCompletion = !prev.completedLessons.includes(lessonId);
      const newCompleted = isNewCompletion 
        ? [...prev.completedLessons, lessonId] 
        : prev.completedLessons;
      
      // Calculate streak
      const today = new Date().toISOString().split('T')[0];
      const lastDate = prev.lastCompletedDate;
      let newStreak = prev.streak;
      let newStreakShields = prev.streakShields;
      
      if (lastDate !== today) {
        if (lastDate) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          
          if (lastDate === yesterdayStr) {
            newStreak += 1;
          } else if (newStreakShields > 0) {
            newStreakShields -= 1;
            newStreak += 1; 
            toast.info("Streak Shield đã được sử dụng! 🛡️");
          } else {
            newStreak = 1;
          }
        } else {
          newStreak = 1;
        }
      }

      // XP Gain
      let xpGain = isNewCompletion ? (50 + (aiResult?.score || 0)) : 10;
      
      // Adaptive Logic
      let nextDay = prev.currentDay;
      let nextWeek = prev.currentWeek;
      let newDifficulty = prev.difficultyMultiplier;
      let newReviewDays = prev.reviewDaysRemaining;
      let newBonusChallenges = [...prev.bonusChallengesUnlocked];

      if (aiResult && isNewCompletion) {
        if (aiResult.score < 50) {
          newReviewDays = 2;
          newDifficulty = Math.max(0.6, prev.difficultyMultiplier - 0.1);
        } else if (aiResult.score > 85) {
          xpGain += 20;
          newDifficulty = Math.min(1.5, prev.difficultyMultiplier + 0.1);
          newBonusChallenges.push(`bonus_${lessonId}`);
          if (nextDay < 7) nextDay += 1;
          else { nextDay = 1; nextWeek += 1; }
        }
      }

      if (isNewCompletion && newReviewDays === 0) {
        if (nextDay < 7) nextDay += 1;
        else { nextDay = 1; nextWeek += 1; }
      } else if (isNewCompletion && newReviewDays > 0) {
        newReviewDays -= 1;
      }

      // Badge Logic
      const newBadges = [...prev.badges];
      const checkAndUnlock = (id: string) => {
        if (!newBadges.some(b => b.id === id)) {
          const def = BADGE_DEFINITIONS.find(d => d.id === id);
          if (def) {
            newBadges.push({ ...def, unlockedAt: new Date().toISOString() });
            toast.success(`Huy hiệu mới: ${def.name}! ${def.icon}`);
            confetti({ particleCount: 100, spread: 50 });
          }
        }
      };

      if (isNewCompletion) checkAndUnlock('first_step');
      if (newStreak >= 3) checkAndUnlock('streak_3');
      if (newStreak >= 7) checkAndUnlock('streak_king');
      if (prev.flashcards.length >= 10) checkAndUnlock('word_master');

      // Feedback Log Logic
      const newFeedbackLog = [...prev.feedbackLog];
      if (aiResult) {
        const lesson = CURRICULUM.find(l => l.id === lessonId);
        if (lesson) {
          newFeedbackLog.push({
            id: Date.now().toString(),
            lessonId,
            lessonTitle: lesson.title,
            skill: lesson.skill,
            score: aiResult.score,
            feedback: aiResult.feedback,
            date: new Date().toISOString()
          });
        }
      }

      return {
        ...prev,
        completedLessons: newCompleted,
        currentDay: nextDay,
        currentWeek: nextWeek,
        xp: prev.xp + xpGain,
        streak: newStreak,
        streakShields: newStreakShields,
        lastCompletedDate: today,
        difficultyMultiplier: newDifficulty,
        reviewDaysRemaining: newReviewDays,
        bonusChallengesUnlocked: newBonusChallenges,
        badges: newBadges,
        feedbackLog: newFeedbackLog
      };
    });
    setActiveLesson(null);
    toast.success("Bài học đã hoàn thành! +XP");
  };

  const handleSaveTip = (tip: any) => {
    setState(prev => ({
      ...prev,
      savedTips: [...prev.savedTips, { ...tip, id: Date.now().toString() }]
    }));
  };

  const handleRemoveTip = (id: string) => {
    setState(prev => ({
      ...prev,
      savedTips: prev.savedTips.filter(t => t.id !== id)
    }));
  };

  const handleSaveFlashcard = (card: any) => {
    let isDuplicate = false;
    setState(prev => {
      if (prev.flashcards.some(f => f.word.toLowerCase() === card.word.toLowerCase())) {
        isDuplicate = true;
        return prev;
      }
      return {
        ...prev,
        flashcards: [...prev.flashcards, {
          ...card,
          id: Date.now().toString(),
          nextReview: new Date().toISOString(),
          interval: 0,
          easeFactor: 2.5,
          repetition: 0,
          createdAt: new Date().toISOString()
        }]
      };
    });
    
    if (isDuplicate) {
      toast.error('Từ vựng này đã tồn tại trong kho của bạn!');
    } else {
      toast.success('Đã lưu từ vựng vào Flashcard!');
    }
  };

  const handleReviewFlashcard = (id: string, quality: number) => {
    setState(prev => {
      const newFlashcards = prev.flashcards.map(card => {
        if (card.id === id) {
          // SuperMemo-2 (SM-2) Algorithm
          let interval = card.interval || 0;
          let easeFactor = card.easeFactor || 2.5;
          let repetition = card.repetition || 0;
          
          if (quality >= 3) {
            if (repetition === 0) {
              interval = 1;
            } else if (repetition === 1) {
              interval = 6;
            } else {
              interval = Math.round(interval * easeFactor);
            }
            repetition += 1;
          } else {
            repetition = 0;
            interval = 1;
          }
          
          easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
          if (easeFactor < 1.3) easeFactor = 1.3;
          
          const nextReview = new Date();
          nextReview.setDate(nextReview.getDate() + interval);
          
          return { ...card, interval, easeFactor, repetition, nextReview: nextReview.toISOString() };
        }
        return card;
      });
      return { ...prev, flashcards: newFlashcards, xp: prev.xp + 5 };
    });
  };

  const handleRemoveFlashcard = (id: string) => {
    setState(prev => ({
      ...prev,
      flashcards: prev.flashcards.filter(c => c.id !== id)
    }));
    toast.success('Đã xóa từ vựng khỏi kho lưu trữ');
  };

  const handleExport = () => {
    storage.export(state);
    toast.success('Đã xuất dữ liệu thành công!');
  };

  const handleImport = async (file: File) => {
    try {
      const newState = await storage.import(file);
      setState(newState);
      toast.success('Đã nhập dữ liệu thành công!');
    } catch (e) {
      toast.error('Lỗi khi nhập dữ liệu.');
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { 
              setActiveLesson(null); 
              setIsReviewing(false); 
              setIsQuizMode(false);
              setIsExtraPractice(false);
            }}>
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tighter">V-ENGLISH</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Tuần {state.currentWeek} • Ngày {state.currentDay}
              </div>
              <Button variant="outline" className="rounded-full font-bold text-yellow-600 border-yellow-200 bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-900/50 dark:text-yellow-500" onClick={() => setIsXPShopOpen(true)}>
                <Store className="w-4 h-4 mr-2" />
                {state.xp} XP
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </nav>

        <main className="container pb-20 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!state.roadmapGenerated ? (
              <PlacementTest onComplete={handlePlacementComplete} />
            ) : isReviewing ? (
              <FlashcardReview 
                cards={isExtraPractice ? state.flashcards : state.flashcards.filter(c => new Date(c.nextReview) <= new Date())} 
                allCards={state.flashcards}
                onReview={handleReviewFlashcard}
                onClose={() => {
                  setIsReviewing(false);
                  setIsExtraPractice(false);
                }}
                onStartExtraPractice={() => setIsExtraPractice(true)}
              />
            ) : isQuizMode ? (
              <VocabQuiz 
                cards={state.flashcards}
                onClose={() => setIsQuizMode(false)}
                onComplete={(score) => {
                  setIsQuizMode(false);
                  setState(prev => ({ ...prev, xp: prev.xp + (score * 2) }));
                }}
                onReview={handleReviewFlashcard}
              />
            ) : activeLesson ? (
              <LessonView 
                lesson={activeLesson} 
                onBack={() => setActiveLesson(null)}
                onComplete={handleLessonComplete}
                onSaveTip={handleSaveTip}
                onSaveFlashcard={handleSaveFlashcard}
                aiSettings={state.aiSettings}
              />
            ) : (
              <Dashboard 
                state={state} 
                onSelectLesson={setActiveLesson}
                onRemoveTip={handleRemoveTip}
                onExport={handleExport}
                onImport={handleImport}
                onStartReview={() => setIsReviewing(true)}
                onStartQuiz={() => setIsQuizMode(true)}
                onRemoveFlashcard={handleRemoveFlashcard}
                onSaveFlashcard={handleSaveFlashcard}
              />
            )}
          </AnimatePresence>
        </main>

        {/* AI Chat Floating Button */}
        <Button 
          className="fixed bottom-6 left-6 z-50 rounded-full h-14 w-14 shadow-2xl bg-indigo-600 hover:bg-indigo-700"
          onClick={() => setIsAIChatOpen(!isAIChatOpen)}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>

        {/* AI Chat Window */}
        <AIChat 
          isOpen={isAIChatOpen} 
          onClose={() => setIsAIChatOpen(false)} 
          aiSettings={state.aiSettings} 
          state={state}
        />

        {isXPShopOpen && (
          <XPShop 
            state={state}
            onBuy={handleBuyItem}
            onClose={() => setIsXPShopOpen(false)}
          />
        )}

        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}
