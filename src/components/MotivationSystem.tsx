import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Heart, 
  Shield, 
  Flame, 
  Trophy, 
  AlertCircle, 
  Zap, 
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { Badge as BadgeType } from '../types';

interface MotivationSystemProps {
  streak: number;
  streakShields: number;
  badges: BadgeType[];
  xp: number;
  onSelectMicroLesson: () => void;
}

const QUOTES = [
  "Học một ngôn ngữ là một cuộc chạy marathon, không phải chạy nước rút. 🏃‍♂️",
  "Mỗi sai lầm là một bước gần hơn đến sự lưu loát. 🪜",
  "Sự kiên trì là chìa khóa của sự thành thạo. 🔑",
  "Bản thân bạn trong tương lai sẽ cảm ơn bạn vì nỗ lực ngày hôm nay. 🌟",
  "Đừng dừng lại khi mệt mỏi, hãy dừng lại khi bạn đã hoàn thành. 🏁"
];

export function MotivationSystem({ streak, streakShields, badges, xp, onSelectMicroLesson }: MotivationSystemProps) {
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [reflectionTime, setReflectionTime] = useState(60);
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  useEffect(() => {
    let timer: any;
    if (showQuitModal && reflectionTime > 0) {
      timer = setInterval(() => {
        setReflectionTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showQuitModal, reflectionTime]);

  return (
    <div className="space-y-6">
      <Card className="border-2 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Huy hiệu của bạn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {badges.length > 0 ? (
              badges.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-1 group relative"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl shadow-inner border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-bold text-center w-16 leading-tight">{badge.name}</span>
                </motion.div>
              ))
            ) : (
              <div className="py-4 text-center w-full text-muted-foreground italic text-sm">
                Hoàn thành bài học để nhận huy hiệu đầu tiên! 🌱
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="border-2 shadow-sm bg-primary/5">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shadow-inner">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-orange-600/70 dark:text-orange-400/70">Streak</p>
              <p className="text-lg font-bold font-heading text-foreground">{streak} Ngày</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 shadow-sm bg-primary/5">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-blue-600/70 dark:text-blue-400/70">Shields</p>
              <p className="text-lg font-bold font-heading text-foreground">{streakShields} Active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-dashed bg-muted/30">
        <CardContent className="p-4 text-center italic text-sm text-muted-foreground">
          "{quote}"
        </CardContent>
      </Card>

      <div className="pt-4">
        <Button 
          variant="ghost" 
          className="w-full text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors gap-2 text-xs"
          onClick={() => {
            setShowQuitModal(true);
            setReflectionTime(60);
          }}
        >
          <AlertCircle className="w-4 h-4" /> Tôi muốn bỏ cuộc...
        </Button>
      </div>

      <Dialog open={showQuitModal} onOpenChange={setShowQuitModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-heading flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              Đợi đã! Đừng đi vội...
            </DialogTitle>
            <DialogDescription className="text-lg font-medium pt-2">
              Chúng tôi biết học tập có thể mệt mỏi. Hãy hít thở sâu một chút.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 space-y-6">
            <div className="p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 text-center space-y-4">
              <p className="text-xl font-bold text-primary italic">
                "{quote}"
              </p>
              <div className="flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground">
                <Clock className="w-4 h-4" />
                Suy ngẫm trong {reflectionTime}s
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Hôm nay quá bận?</h4>
              <Button 
                variant="outline" 
                className="w-full h-16 border-2 border-primary/30 hover:bg-primary/5 gap-4 justify-start px-6"
                onClick={() => {
                  setShowQuitModal(false);
                  onSelectMicroLesson();
                }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-bold">Thử bài học 5 phút</p>
                  <p className="text-xs text-muted-foreground">Duy trì streak với nỗ lực tối thiểu.</p>
                </div>
              </Button>
            </div>
          </div>

          <DialogFooter className="sm:justify-between gap-4">
            <Button 
              variant="ghost" 
              disabled={reflectionTime > 0}
              onClick={() => setShowQuitModal(false)}
              className="text-muted-foreground"
            >
              {reflectionTime > 0 ? `Chờ ${reflectionTime}s` : "Tôi vẫn muốn rời đi"}
            </Button>
            <Button 
              className="px-8 font-bold"
              onClick={() => setShowQuitModal(false)}
            >
              Tôi sẽ ở lại thêm 5 phút!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
