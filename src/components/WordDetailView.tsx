import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Flashcard } from '../types';
import { VocabMindMap } from './VocabMindMap';
import { 
  Volume2, 
  X, 
  MessageSquare, 
  Link as LinkIcon, 
  BookOpen, 
  Plus,
  Trash2,
  Brain,
  Search
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

interface WordDetailViewProps {
  card: Flashcard;
  allCards: Flashcard[];
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Flashcard>) => void;
}

export function WordDetailView({ card: initialCard, allCards, isOpen, onClose, onUpdate }: WordDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'mindmap' | 'notes'>('mindmap');
  const [currentCard, setCurrentCard] = useState<Flashcard>(initialCard);
  const [notes, setNotes] = useState(initialCard.notes || '');
  const [linkSearch, setLinkSearch] = useState('');

  // Update current card if initial card changes from outside
  React.useEffect(() => {
    setCurrentCard(initialCard);
    setNotes(initialCard.notes || '');
  }, [initialCard]);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleSaveNotes = () => {
    onUpdate(currentCard.id, { notes });
  };

  const addLink = (targetId: string) => {
    if (targetId === currentCard.id) return;
    const currentLinks = currentCard.linkedWordIds || [];
    if (currentLinks.includes(targetId)) return;
    
    onUpdate(currentCard.id, { linkedWordIds: [...currentLinks, targetId] });
    
    // Also link back
    const targetCard = allCards.find(c => c.id === targetId);
    if (targetCard) {
      const targetLinks = targetCard.linkedWordIds || [];
      if (!targetLinks.includes(currentCard.id)) {
        onUpdate(targetId, { linkedWordIds: [...targetLinks, currentCard.id] });
      }
    }
  };

  const removeLink = (targetId: string) => {
    const currentLinks = currentCard.linkedWordIds || [];
    onUpdate(currentCard.id, { linkedWordIds: currentLinks.filter(id => id !== targetId) });
    
    // Also remove backlink
    const targetCard = allCards.find(c => c.id === targetId);
    if (targetCard) {
      const targetLinks = targetCard.linkedWordIds || [];
      onUpdate(targetId, { linkedWordIds: targetLinks.filter(id => id !== currentCard.id) });
    }
  };

  const handleNavigate = (nodeWord: string) => {
    const target = allCards.find(c => c.word.toLowerCase() === nodeWord.toLowerCase());
    if (target) {
      setCurrentCard(target);
      setNotes(target.notes || '');
      setActiveTab('mindmap');
    }
  };

  const linkedCards = (currentCard.linkedWordIds || []).map(id => allCards.find(c => c.id === id)).filter(Boolean) as Flashcard[];
  
  const searchResults = allCards.filter(c => 
    c.id !== currentCard.id && 
    !(currentCard.linkedWordIds || []).includes(c.id) &&
    (c.word.toLowerCase().includes(linkSearch.toLowerCase()) || c.vietnamese.toLowerCase().includes(linkSearch.toLowerCase()))
  ).slice(0, 5);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        key={currentCard.id}
        className="bg-card border border-border rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="relative overflow-hidden">
          {/* Background Image Banner */}
          <div className="absolute inset-0 h-full w-full">
            <img 
              src={`https://picsum.photos/seed/${currentCard.word.toLowerCase()}/800/400`} 
              alt={currentCard.word}
              className="w-full h-full object-cover opacity-10 blur-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card to-card" />
          </div>

          <div className="relative p-6 md:p-10 border-b border-border flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
              <div className="relative group">
                <img 
                  src={`https://picsum.photos/seed/${currentCard.word.toLowerCase()}/200/200`} 
                  alt={currentCard.word}
                  className="rounded-3xl w-40 h-40 object-cover shadow-2xl border-4 border-white dark:border-slate-900 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <Button 
                  size="icon" 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl h-12 w-12 bg-primary shadow-xl hover:scale-110 active:scale-95 transition-all"
                  onClick={() => speak(currentCard.word)}
                >
                  <Volume2 className="w-6 h-6 text-white" />
                </Button>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 items-baseline">
                    <h2 className="text-5xl font-black font-heading text-foreground tracking-tighter">{currentCard.word}</h2>
                    <div className="flex items-center gap-2">
                       <span className="text-2xl text-muted-foreground font-light px-2">|</span>
                       <span className="text-3xl font-black text-primary tracking-tight">{currentCard.vietnamese}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                    <Badge variant="outline" className="px-3 py-1 rounded-lg border-primary/20 text-primary font-bold text-xs bg-primary/5 uppercase tracking-widest">
                      Level {currentCard.repetition}
                    </Badge>
                    <div className="flex items-center gap-4 text-lg">
                      {currentCard.ipa && (
                        <button 
                          className="flex items-center gap-1.5 text-primary font-mono font-bold tracking-tight hover:text-primary/70 transition-colors group/ipa"
                          onClick={() => speak(currentCard.word)}
                          title="Nghe phát âm"
                        >
                          /{currentCard.ipa}/
                          <Volume2 className="w-4 h-4 opacity-0 group-hover/ipa:opacity-100 transition-opacity" />
                        </button>
                      )}
                      {currentCard.partOfSpeech && (
                        <span className="text-muted-foreground font-black text-xs uppercase tracking-[0.2em] px-2 py-0.5 bg-muted rounded-md">{currentCard.partOfSpeech}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-12 w-12 bg-muted/50 hover:bg-muted text-muted-foreground transition-all shrink-0">
              <X className="w-8 h-8" />
            </Button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="px-8 flex gap-6 border-b border-border bg-muted/30">
          <button 
            onClick={() => setActiveTab('mindmap')}
            className={`py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === 'mindmap' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Sơ đồ tư duy
          </button>
          <button 
            onClick={() => setActiveTab('notes')}
            className={`py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${activeTab === 'notes' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Ghi chú & Liên kết
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-card/50">
          <AnimatePresence mode="wait">
            {activeTab === 'mindmap' ? (
              <motion.div 
                key="mindmap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="p-1 border border-border rounded-2xl overflow-hidden shadow-inner bg-background">
                      <VocabMindMap 
                        word={currentCard.word} 
                        synonyms={currentCard.synonyms || []} 
                        antonyms={currentCard.antonyms || []} 
                        definition={currentCard.vietnamese}
                        linkedWords={linkedCards}
                        ipa={currentCard.ipa}
                        partOfSpeech={currentCard.partOfSpeech}
                        onNavigate={handleNavigate}
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground text-center font-bold uppercase tracking-widest bg-muted/50 py-2 rounded-xl border border-dotted border-border">
                       💡 Mẹo: Nhấn vào các từ vựng liên quan trong sơ đồ để khám phá chi tiết
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-muted rounded-2xl border border-border shadow-sm">
                      <h3 className="text-sm font-bold text-primary mb-4 flex items-center gap-2 tracking-widest uppercase">
                        <BookOpen className="w-4 h-4" /> Nghĩa & Ví dụ
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-lg font-bold text-foreground">{currentCard.vietnamese}</p>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{currentCard.definition}</p>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Câu ví dụ</p>
                          <div className="p-3 bg-card rounded-xl border border-border italic text-sm text-foreground leading-relaxed">
                            "{currentCard.example}"
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {linkedCards.length > 0 && (
                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 shadow-sm">
                        <h3 className="text-sm font-bold text-primary mb-4 flex items-center gap-2 tracking-widest uppercase">
                          <LinkIcon className="w-4 h-4" /> Từ liên quan
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {linkedCards.map(lc => (
                            <Badge 
                              key={lc.id} 
                              variant="secondary" 
                              className="bg-card text-primary border border-primary/20 px-3 py-1 font-bold cursor-pointer hover:bg-primary/5 transition-colors"
                              onClick={() => handleNavigate(lc.word)}
                            >
                              {lc.word}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="notes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Notes Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" /> Ghi chú cá nhân
                    </h3>
                    <Button size="sm" variant="outline" className="rounded-xl h-8 px-4 font-bold border-primary/20 text-primary" onClick={handleSaveNotes}>
                      Lưu ghi chú
                    </Button>
                  </div>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Thêm cách dùng, lưu ý đặc biệt, hoặc mẹo ghi nhớ của riêng bạn..."
                    className="w-full h-64 p-4 rounded-2xl border border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm leading-relaxed"
                  />
                </div>

                {/* Linking Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <LinkIcon className="w-5 h-5 text-primary" /> Liên kết từ vựng
                  </h3>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Tìm từ trong kho để liên kết..." 
                      className="pl-10 h-12 rounded-xl border-border focus:border-primary focus:ring-4 focus:ring-primary/10 bg-background"
                      value={linkSearch}
                      onChange={(e) => setLinkSearch(e.target.value)}
                    />
                  </div>

                  <div className="space-y-4">
                    {linkSearch && (
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Kết quả tìm kiếm</p>
                        <div className="space-y-2">
                          {searchResults.map(rc => (
                            <div key={rc.id} className="flex items-center justify-between p-3 bg-muted rounded-xl border border-border group hover:border-primary/30 transition-all">
                              <div>
                                <p className="font-bold text-sm text-foreground">{rc.word}</p>
                                <p className="text-[10px] text-muted-foreground">{rc.vietnamese}</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="rounded-lg h-8 w-8 p-0 bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => { addLink(rc.id); setLinkSearch(''); }}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                          {searchResults.length === 0 && <p className="text-xs text-muted-foreground italic p-2 px-1">Không tìm thấy từ nào phù hợp...</p>}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Đã liên kết</p>
                      <div className="space-y-2">
                        {linkedCards.map(lc => (
                          <div key={lc.id} className="flex items-center justify-between p-3 bg-primary/5 rounded-xl border border-primary/10">
                            <div>
                              <p className="font-bold text-sm text-primary">{lc.word}</p>
                              <p className="text-[10px] text-primary/70">{lc.vietnamese}</p>
                            </div>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="rounded-lg h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
                              onClick={() => removeLink(lc.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        {linkedCards.length === 0 && <p className="text-xs text-muted-foreground italic p-2 px-1">Chưa có từ nào được liên kết...</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
