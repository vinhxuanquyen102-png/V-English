import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  Node, 
  Edge,
  MarkerType,
  Handle,
  Position
} from 'react-flow-renderer';
import { Volume2, Zap, Star, ShieldCheck, Heart, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface VocabMindMapProps {
  word: string;
  synonyms: any[];
  antonyms: any[];
  definition: string;
  linkedWords?: any[];
  ipa?: string;
  partOfSpeech?: string;
  onNavigate?: (word: string) => void;
}

const VocabNode = ({ data }: any) => {
  const speak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const typeStyles = {
    syn: 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 shadow-emerald-500/10',
    ant: 'border-rose-500 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 shadow-rose-500/10',
    link: 'border-blue-500 bg-blue-50/90 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 shadow-blue-500/10'
  };
  
  const isMain = data.isMain;
  const borderClass = isMain 
    ? 'border-primary ring-8 ring-primary/10 shadow-2xl shadow-primary/30 scale-125 z-50' 
    : typeStyles[data.type as keyof typeof typeStyles] || 'border-border';

  // Seed for placeholder image
  const imgSeed = data.label.toLowerCase().replace(/[^a-z]/g, '');

  return (
    <div className={`mindmap-node min-w-[180px] max-w-[240px] p-0 shadow-xl rounded-[2rem] border-2 bg-card overflow-hidden ${borderClass} group transition-all duration-300 hover:scale-105`}>
      <Handle type="target" position={Position.Top} className="!bg-primary !w-3 !h-3" />
      <Handle type="source" position={Position.Bottom} className="!bg-primary !w-3 !h-3" />
      <Handle type="target" position={Position.Left} className="!bg-primary !w-3 !h-3" />
      <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3" />
      
      {/* Visual Header */}
      {!isMain ? (
        <div className="w-full h-24 relative overflow-hidden bg-muted">
           <img 
            src={`https://picsum.photos/seed/${imgSeed}/400/300`} 
            alt={data.label}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${data.type === 'syn' ? 'from-emerald-900/80' : data.type === 'ant' ? 'from-rose-900/80' : 'from-blue-900/80'} via-transparent to-transparent`} />
          <div className="absolute top-2 left-2">
             <Badge className={`${data.type === 'syn' ? 'bg-emerald-500 text-white' : data.type === 'ant' ? 'bg-rose-500 text-white' : 'bg-blue-500 text-white'} border-none px-2 py-0.5 text-[8px] font-black tracking-widest uppercase shadow-lg`}>
                {data.type === 'syn' ? 'Đồng nghĩa' : data.type === 'ant' ? 'Trái nghĩa' : 'Liên quan'}
             </Badge>
          </div>
        </div>
      ) : (
        <div className="w-full h-3 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 animate-pulse-soft" />
      )}

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className={`font-black tracking-tighter truncate flex-1 ${isMain ? 'text-2xl text-primary' : 'text-lg'}`}>
            {data.label}
          </div>
          <Button 
            size="icon"
            variant="ghost"
            onClick={(e) => speak(e, data.label)}
            className="h-10 w-10 rounded-2xl hover:bg-primary/20 text-primary shrink-0 bg-primary/5"
          >
            <Volume2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {data.ipa && (
            <div className="text-xs text-primary/80 font-mono font-bold px-2 py-0.5 bg-primary/10 rounded-lg">
              /{data.ipa}/
            </div>
          )}
          {isMain && data.partOfSpeech && (
            <div className="px-2 py-0.5 rounded-lg bg-muted text-muted-foreground text-[10px] font-black uppercase tracking-widest border border-border">
              {data.partOfSpeech}
            </div>
          )}
        </div>

        {data.vietnamese ? (
          <div className={`text-sm font-black leading-snug p-2 rounded-xl ${isMain ? 'bg-primary/5 text-primary border border-primary/10' : 'bg-background/50 text-foreground border border-border/50'}`}>
            {data.vietnamese}
          </div>
        ) : (
           <div className="text-[10px] text-muted-foreground italic bg-muted/30 p-2 rounded-xl border border-dashed border-border/50">
              Nhấn đúp để tra cứu nghĩa chi tiết...
           </div>
        )}

        {data.example && (
          <div className="text-[11px] text-muted-foreground/80 italic leading-relaxed border-l-3 border-primary/30 pl-3 mt-3 bg-primary/5 py-2 rounded-r-xl">
             <span className="text-primary font-bold mr-1">"</span>
             {data.example}
             <span className="text-primary font-bold ml-1">"</span>
          </div>
        )}
      </div>

      {isMain && (
        <div className="absolute -top-6 -right-6 p-3 bg-amber-400 rounded-[1.5rem] shadow-2xl border-4 border-card z-[60] animate-bounce-slow">
          <Brain className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
};

const nodeTypes = { vocabNode: VocabNode };

export function VocabMindMap({ word, synonyms, antonyms, definition, linkedWords = [], ipa, partOfSpeech, onNavigate }: VocabMindMapProps) {
  const onNodeClick = (_: any, node: Node) => {
    if (node.id !== 'main' && onNavigate) {
      onNavigate(node.data.label);
    }
  };

  const nodes: Node[] = useMemo(() => {
    const mainNode = {
      id: 'main',
      type: 'vocabNode',
      data: { 
        label: word, 
        isMain: true, 
        vietnamese: definition,
        ipa,
        partOfSpeech
      },
      position: { x: 500, y: 350 },
    };

    const synNodes = synonyms.slice(0, 4).map((s, i) => {
      const isObj = typeof s === 'object';
      const nodeWord = isObj ? s.word : s;
      
      // Separate to West/Southwest quadrant
      const angle = (140 + (i * 30)) * (Math.PI / 180);
      const radius = 450;
      
      return {
        id: `syn-${nodeWord}-${i}`,
        type: 'vocabNode',
        data: { 
          label: nodeWord, 
          type: 'syn',
          ipa: isObj ? s.ipa : null,
          vietnamese: isObj ? s.vietnamese : null,
          example: isObj ? s.example : null
        },
        position: { 
          x: 500 + Math.cos(angle) * radius, 
          y: 350 + Math.sin(angle) * (radius * 0.8)
        },
      };
    });

    const antNodes = antonyms.slice(0, 4).map((a, i) => {
      const isObj = typeof a === 'object';
      const nodeWord = isObj ? a.word : a;
      
      // Separate to East/Southeast quadrant
      const angle = (-40 + (i * 30)) * (Math.PI / 180);
      const radius = 450;

      return {
        id: `ant-${nodeWord}-${i}`,
        type: 'vocabNode',
        data: { 
          label: nodeWord, 
          type: 'ant',
          ipa: isObj ? a.ipa : null,
          vietnamese: isObj ? a.vietnamese : null,
          example: isObj ? a.example : null
        },
        position: { 
          x: 500 + Math.cos(angle) * radius, 
          y: 350 + Math.sin(angle) * (radius * 0.8)
        },
      };
    });

    const linkedNodes = linkedWords.slice(0, 3).map((l, i) => {
      // Top hemisphere
      const angle = (270 + (i * 30 - 30)) * (Math.PI / 180);
      const radius = 380;

      return {
        id: `link-${l.id}`,
        type: 'vocabNode',
        data: { 
          label: l.word, 
          type: 'link',
          ipa: l.ipa,
          vietnamese: l.vietnamese,
          example: l.example
        },
        position: { 
          x: 500 + Math.cos(angle) * radius, 
          y: 350 + Math.sin(angle) * radius
        },
      };
    });

    return [mainNode, ...synNodes, ...antNodes, ...linkedNodes];
  }, [word, synonyms, antonyms, definition, linkedWords, ipa, partOfSpeech]);

  const edges: Edge[] = useMemo(() => {
    const synEdges = synonyms.slice(0, 4).map((s, i) => {
      const nodeWord = typeof s === 'object' ? s.word : s;
      return {
        id: `e-syn-${nodeWord}-${i}`,
        source: `syn-${nodeWord}-${i}`,
        target: 'main',
        animated: true,
        style: { stroke: '#10b981', strokeWidth: 5, opacity: 0.6 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981', width: 20, height: 20 },
      };
    });

    const antEdges = antonyms.slice(0, 4).map((a, i) => {
      const nodeWord = typeof a === 'object' ? a.word : a;
      return {
        id: `e-ant-${nodeWord}-${i}`,
        source: 'main',
        target: `ant-${nodeWord}-${i}`,
        animated: true,
        style: { stroke: '#f43f5e', strokeWidth: 5, opacity: 0.6 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#f43f5e', width: 20, height: 20 },
      };
    });

    const linkedEdges = linkedWords.slice(0, 3).map((l, i) => ({
      id: `e-link-${l.id}`,
      source: 'main',
      target: `link-${l.id}`,
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 3, opacity: 0.5, strokeDasharray: '8,8' },
    }));

    return [...synEdges, ...antEdges, ...linkedEdges];
  }, [synonyms, antonyms, linkedWords]);

  return (
    <div style={{ height: '700px', width: '100%' }} className="border border-border rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 overflow-hidden shadow-2xl relative group/mindmap">
      <div className="absolute top-6 left-6 z-10 flex gap-4">
         <div className="px-4 py-2 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/20 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4" /> Đồng nghĩa
         </div>
         <div className="px-4 py-2 bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-500/20 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Zap className="w-4 h-4" /> Trái nghĩa
         </div>
      </div>

      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        nodeTypes={nodeTypes} 
        onNodeClick={onNodeClick}
        fitView 
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.1} 
        maxZoom={2}
      >
        <Background color="var(--primary)" gap={40} size={1} />
        <Controls className="!bg-card !border-border !shadow-2xl !rounded-2xl overflow-hidden !m-6" />
      </ReactFlow>
    </div>
  );
}
