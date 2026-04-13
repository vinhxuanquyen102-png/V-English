import React from 'react';
import { MemoryHack } from '@/types';
import { 
  Lightbulb, 
  AlertTriangle, 
  BookOpen, 
  Save, 
  Image as ImageIcon, 
  Music, 
  History, 
  Flag,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface MemoryHackSectionProps {
  explanation: string;
  commonMistake: string;
  memoryHacks: MemoryHack[];
  lessonTitle: string;
  onSaveTip: (tip: any) => void;
}

export function MemoryHackSection({ explanation, commonMistake, memoryHacks, lessonTitle, onSaveTip }: MemoryHackSectionProps) {
  const handleSave = (hack: any) => {
    onSaveTip({
      ...hack,
      lessonTitle
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'visual': return <ImageIcon className="w-4 h-4" />;
      case 'story': return <History className="w-4 h-4" />;
      case 'rhyme': return <Music className="w-4 h-4" />;
      case 'vn-hook': return <Flag className="w-4 h-4" />;
      default: return <Lightbulb className="w-4 h-4" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'visual': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'story': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'rhyme': return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'vn-hook': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <details className="group border-2 border-yellow-200 rounded-xl overflow-hidden bg-yellow-50/30 transition-all duration-300 open:shadow-md">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-yellow-100/50 transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400 rounded-lg text-white shadow-sm">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold font-heading text-slate-800 tracking-tight">EXPLAIN & MEMORY HACKS</h3>
            <p className="text-xs text-yellow-700 font-bold uppercase tracking-widest">Master this topic faster</p>
          </div>
        </div>
        <div className="transition-transform duration-300 group-open:rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-600"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </summary>

      <div className="p-6 space-y-8 border-t border-yellow-100">
        {/* Simple Explanation */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-blue-700 font-bold">
            <BookOpen className="w-5 h-5" />
            <h4 className="uppercase tracking-wider text-sm">Simple Explanation</h4>
          </div>
          <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg text-slate-700 leading-relaxed">
            {explanation}
          </div>
        </section>

        {/* Common Mistake */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-red-600 font-bold">
            <AlertTriangle className="w-5 h-5" />
            <h4 className="uppercase tracking-wider text-sm">Common Mistake Alert</h4>
          </div>
          <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg text-slate-700 font-medium">
            {commonMistake}
          </div>
        </section>

        {/* Memory Hacks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-yellow-700 font-bold">
            <SparklesIcon className="w-5 h-5" />
            <h4 className="uppercase tracking-wider text-sm">Memory Hacks</h4>
          </div>
          <div className="grid gap-4">
            {memoryHacks.map((hack, index) => (
              <div key={index} className="relative bg-white border-2 border-yellow-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className={`flex items-center gap-1.5 py-1 px-3 ${getBadgeColor(hack.type)}`}>
                    {getIcon(hack.type)}
                    <span className="uppercase tracking-widest text-[10px] font-bold">{hack.type}</span>
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                    onClick={() => handleSave(hack)}
                  >
                    <Save className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                  {hack.content}
                </p>
                {hack.vietnameseNote && (
                  <p className="text-sm text-slate-500 italic">
                    💡 {hack.vietnameseNote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </details>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
