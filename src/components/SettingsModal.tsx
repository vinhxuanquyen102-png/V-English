import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AISettings } from '@/types';
import { 
  Settings, 
  Cpu, 
  Key, 
  Globe, 
  ShieldCheck,
  Zap,
  GraduationCap,
  Gauge
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AISettings;
  difficultyLevel: 'easy' | 'medium' | 'hard';
  onSave: (settings: AISettings, difficultyLevel: 'easy' | 'medium' | 'hard') => void;
  onRetakePlacementTest?: () => void;
}

export function SettingsModal({ isOpen, onClose, settings, difficultyLevel, onSave, onRetakePlacementTest }: SettingsModalProps) {
  const [localSettings, setLocalSettings] = useState<AISettings>(settings);
  const [localDifficulty, setLocalDifficulty] = useState<'easy' | 'medium' | 'hard'>(difficultyLevel);

  const handleSave = () => {
    onSave(localSettings, localDifficulty);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] border border-border bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold font-heading text-foreground">
            <Settings className="w-6 h-6 text-primary" />
            Cài đặt
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Cấu hình AI và các thiết lập khác của ứng dụng.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 p-1 bg-muted rounded-xl">
            <TabsTrigger value="ai" className="font-bold gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground shadow-none">
              <Zap className="w-4 h-4" /> AI Engine
            </TabsTrigger>
            <TabsTrigger value="general" className="font-bold gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground shadow-none">
              <Settings className="w-4 h-4" /> Chung
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="space-y-4">
            <Tabs defaultValue={localSettings.provider} onValueChange={(v) => setLocalSettings(s => ({ ...s, provider: v as any }))}>
              <TabsList className="grid w-full grid-cols-2 mb-4 p-1 bg-muted rounded-xl">
                <TabsTrigger value="gemini" className="font-bold gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground shadow-none">
                  <Zap className="w-4 h-4" /> Gemini (Mặc định)
                </TabsTrigger>
                <TabsTrigger value="openai-compatible" className="font-bold gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground shadow-none">
                  <Globe className="w-4 h-4" /> Custom API
                </TabsTrigger>
              </TabsList>

              <TabsContent value="gemini" className="space-y-4 py-2">
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    Không cần thiết lập
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    V-English sử dụng Gemini API mặc định của hệ thống. Không cần nhập API Key.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="openai-compatible" className="space-y-4 py-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="baseUrl" className="font-bold flex items-center gap-2 text-foreground">
                      <Globe className="w-4 h-4 text-muted-foreground" /> Base URL
                    </Label>
                    <Input
                      id="baseUrl"
                      placeholder="https://api.openai.com/v1"
                      className="bg-card border-border focus:border-primary"
                      value={localSettings.baseUrl}
                      onChange={(e) => setLocalSettings(s => ({ ...s, baseUrl: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apiKey" className="font-bold flex items-center gap-2 text-foreground">
                      <Key className="w-4 h-4 text-muted-foreground" /> API Key
                    </Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="sk-..."
                      className="bg-card border-border focus:border-primary"
                      value={localSettings.apiKey}
                      onChange={(e) => setLocalSettings(s => ({ ...s, apiKey: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model" className="font-bold flex items-center gap-2 text-foreground">
                      <Cpu className="w-4 h-4 text-muted-foreground" /> Model Name
                    </Label>
                    <Input
                      id="model"
                      placeholder="gpt-4-turbo"
                      className="bg-card border-border focus:border-primary"
                      value={localSettings.model}
                      onChange={(e) => setLocalSettings(s => ({ ...s, model: e.target.value }))}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="general" className="space-y-4 py-2">
            <div className="p-4 border border-border rounded-xl space-y-4">
              <div className="space-y-3">
                <Label className="font-bold flex items-center gap-2 text-foreground">
                  <Gauge className="w-4 h-4 text-primary" /> Độ khó bài học
                </Label>
                <RadioGroup value={localDifficulty} onValueChange={(v: any) => setLocalDifficulty(v)} className="grid grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-2 bg-card">
                    <RadioGroupItem value="easy" id="easy" />
                    <Label htmlFor="easy" className="text-foreground">Dễ</Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-2 bg-card">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="text-foreground">Trung bình</Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded-lg p-2 bg-card">
                    <RadioGroupItem value="hard" id="hard" />
                    <Label htmlFor="hard" className="text-foreground">Khó</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold flex items-center gap-2 text-foreground">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    Đánh giá lại trình độ
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Làm lại bài kiểm tra đầu vào để cập nhật lộ trình học.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-border hover:bg-muted"
                  onClick={() => {
                    onClose();
                    if (onRetakePlacementTest) onRetakePlacementTest();
                  }}
                >
                  Làm lại bài test
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose} className="font-bold border-border hover:bg-muted">Hủy</Button>
          <Button onClick={handleSave} className="font-bold px-8 bg-primary hover:bg-primary/90 text-primary-foreground">Lưu thay đổi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
