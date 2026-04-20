import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, BookOpen, Star, X } from 'lucide-react';
import { AppState } from '../types';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface XPShopProps {
  state: AppState;
  onBuy: (item: 'shield' | 'badge' | 'lesson', cost: number) => void;
  onClose: () => void;
}

export function XPShop({ state, onBuy, onClose }: XPShopProps) {
  const items = [
    {
      id: 'shield',
      name: 'Streak Shield',
      description: 'Bảo vệ chuỗi học tập của bạn nếu bạn quên học 1 ngày.',
      cost: 500,
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-100 dark:bg-blue-900/50',
      owned: state.streakShields || 0,
    },
    {
      id: 'badge',
      name: 'Huy hiệu Đặc biệt',
      description: 'Mở khóa huy hiệu độc quyền để khoe với bạn bè.',
      cost: 1000,
      icon: <Award className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-100 dark:bg-purple-900/50',
      owned: state.purchasedItems?.filter(i => i === 'badge').length || 0,
    },
    {
      id: 'lesson',
      name: 'Bài học Bonus',
      description: 'Mở khóa một bài học nâng cao về chủ đề thú vị.',
      cost: 2000,
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      color: 'bg-emerald-100 dark:bg-emerald-900/50',
      owned: state.purchasedItems?.filter(i => i === 'lesson').length || 0,
    }
  ];

  const handleBuy = (item: any) => {
    if (state.xp >= item.cost) {
      onBuy(item.id as any, item.cost);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toast.success(`Đã mua ${item.name} thành công!`);
    } else {
      toast.error('Bạn không đủ XP để mua vật phẩm này.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-card rounded-3xl shadow-2xl scale-in-center max-h-[90vh] overflow-hidden flex flex-col border border-border">
        <div className="flex flex-row items-center justify-between p-6 md:p-8 bg-muted border-b border-border">
          <div>
            <h2 className="text-3xl font-bold font-heading flex items-center gap-3 text-foreground">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-500">
                <Star className="w-6 h-6 fill-amber-500" />
              </div>
              Cửa hàng XP
            </h2>
            <p className="text-muted-foreground mt-2 font-medium">Dùng XP bạn kiếm được để đổi lấy phần thưởng!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-2xl border border-amber-200 dark:border-amber-800">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-lg font-bold text-amber-700 dark:text-amber-400">{state.xp} XP</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full bg-card shadow-sm hover:bg-accent text-accent-foreground">
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map(item => (
              <div key={item.id} className="flex flex-col bg-card border border-border rounded-3xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                <div className={`bg-primary/5 p-8 flex items-center justify-center relative overflow-hidden border-b border-border`}>
                  <div className="relative z-10 transform transition-transform hover:scale-110 p-4 bg-background rounded-2xl shadow-sm border border-border text-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-2 text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-6 p-3 bg-muted rounded-xl border border-border">
                    <span className="text-sm font-bold text-foreground">Đang có: {item.owned}</span>
                    <span className="text-primary font-bold flex items-center gap-1">
                      {item.cost} XP
                    </span>
                  </div>
                  
                  <Button 
                    className={`w-full h-12 font-bold text-lg rounded-xl shadow-sm transition-all ${
                      state.xp >= item.cost 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-muted text-muted-foreground border border-border'
                    }`}
                    disabled={state.xp < item.cost}
                    onClick={() => handleBuy(item)}
                  >
                    {state.xp >= item.cost ? 'Mua ngay' : 'Không đủ XP'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
