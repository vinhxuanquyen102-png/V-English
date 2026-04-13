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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-2xl shadow-2xl scale-in-center max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-background z-10 border-b">
          <div>
            <CardTitle className="text-2xl font-bold font-heading flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              Cửa hàng XP
            </CardTitle>
            <p className="text-muted-foreground mt-1">Dùng XP bạn kiếm được để đổi lấy phần thưởng!</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-lg px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
              {state.xp} XP
            </Badge>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-6 h-6" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map(item => (
              <div key={item.id} className="flex flex-col border-2 rounded-2xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                <div className={`${item.color} p-6 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm font-medium">
                    <span>Đang có: {item.owned}</span>
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold flex items-center gap-1">
                      {item.cost} XP
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full font-bold" 
                    variant={state.xp >= item.cost ? 'default' : 'secondary'}
                    disabled={state.xp < item.cost}
                    onClick={() => handleBuy(item)}
                  >
                    {state.xp >= item.cost ? 'Mua ngay' : 'Không đủ XP'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
