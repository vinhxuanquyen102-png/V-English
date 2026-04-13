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
  Zap
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AISettings;
  onSave: (settings: AISettings) => void;
}

export function SettingsModal({ isOpen, onClose, settings, onSave }: SettingsModalProps) {
  const [localSettings, setLocalSettings] = useState<AISettings>(settings);

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] border-2">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold font-heading">
            <Settings className="w-6 h-6 text-primary" />
            AI Configuration
          </DialogTitle>
          <DialogDescription>
            Configure your AI grading engine. Use the built-in Gemini or connect your own OpenAI-compatible API.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={localSettings.provider} onValueChange={(v) => setLocalSettings(s => ({ ...s, provider: v as any }))}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="gemini" className="font-bold gap-2">
              <Zap className="w-4 h-4" /> Gemini (Default)
            </TabsTrigger>
            <TabsTrigger value="openai-compatible" className="font-bold gap-2">
              <Globe className="w-4 h-4" /> Custom API
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gemini" className="space-y-4 py-2">
            <div className="p-4 bg-primary/5 border-2 border-primary/10 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ShieldCheck className="w-5 h-5" />
                Zero Setup Required
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                V-English uses the platform's native Gemini API by default. No keys needed for basic grading.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="openai-compatible" className="space-y-6 py-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="baseUrl" className="font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" /> Base URL
                </Label>
                <Input
                  id="baseUrl"
                  placeholder="https://api.openai.com/v1"
                  value={localSettings.baseUrl}
                  onChange={(e) => setLocalSettings(s => ({ ...s, baseUrl: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey" className="font-bold flex items-center gap-2">
                  <Key className="w-4 h-4 text-muted-foreground" /> API Key
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="sk-..."
                  value={localSettings.apiKey}
                  onChange={(e) => setLocalSettings(s => ({ ...s, apiKey: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model" className="font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-muted-foreground" /> Model Name
                </Label>
                <Input
                  id="model"
                  placeholder="gpt-4-turbo"
                  value={localSettings.model}
                  onChange={(e) => setLocalSettings(s => ({ ...s, model: e.target.value }))}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose} className="font-bold">Cancel</Button>
          <Button onClick={handleSave} className="font-bold px-8">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
