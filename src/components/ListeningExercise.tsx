import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, RotateCcw, CheckCircle2, XCircle, Play, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ListeningExerciseProps {
  text: string;
  onComplete: (isCorrect: boolean) => void;
}

export function ListeningExercise({ text, onComplete }: ListeningExerciseProps) {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  
  const synth = window.speechSynthesis;

  const playAudio = () => {
    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // Slightly slower for dictation
      utterance.onend = () => setIsPlaying(false);
      synth.speak(utterance);
      setIsPlaying(true);
    }
  };

  const checkAnswer = () => {
    const cleanUser = userInput.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    const cleanTarget = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    
    const correct = cleanUser === cleanTarget;
    setIsCorrect(correct);
    if (correct) {
      onComplete(true);
    } else {
      setShowCorrection(true);
    }
  };

  const reset = () => {
    setUserInput('');
    setIsCorrect(null);
    setShowCorrection(false);
  };

  // Compare words to show which ones are wrong
  const getComparison = () => {
    const userWords = userInput.split(/\s+/);
    const targetWords = text.split(/\s+/);
    
    return targetWords.map((word, i) => {
      const cleanWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      const cleanUserWord = userWords[i]?.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      const isMatch = cleanWord === cleanUserWord;
      
      return (
        <span key={i} className={isMatch ? "text-primary" : "text-destructive underline decoration-wavy"}>
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-xl border border-border space-y-6">
        <Button 
          size="lg" 
          className={`w-20 h-20 rounded-full shadow-sm transition-all ${isPlaying ? 'bg-destructive hover:bg-destructive/90 animate-pulse text-destructive-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
          onClick={playAudio}
        >
          {isPlaying ? <RotateCcw className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
        </Button>
        <p className="text-muted-foreground font-medium">Nhấn để nghe và gõ lại câu bạn nghe được</p>
      </div>

      <div className="space-y-4">
        <textarea 
          className="w-full h-32 p-5 rounded-xl border border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-lg bg-background text-foreground"
          placeholder="Gõ lại câu bạn vừa nghe..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isCorrect === true}
        />

        <div className="flex gap-3">
          <Button 
            className="flex-1 h-14 font-semibold text-lg rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
            onClick={checkAnswer}
            disabled={!userInput.trim() || isCorrect === true}
          >
            Kiểm tra đáp án
          </Button>
          {isCorrect === false && (
            <Button 
              variant="outline" 
              className="h-14 px-6 rounded-lg border border-border font-semibold text-foreground hover:bg-muted"
              onClick={reset}
            >
              Thử lại
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-6 rounded-xl border ${isCorrect ? 'bg-primary/5 border-primary/20 text-primary dark:bg-primary/10 dark:border-primary/30 dark:text-primary-foreground' : 'bg-destructive/5 border-destructive/20 text-destructive dark:bg-destructive/10 dark:border-destructive/30 dark:text-destructive-foreground'}`}
          >
            <div className="flex items-center gap-3 mb-3">
              {isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              <h4 className="font-semibold text-lg">{isCorrect ? 'Tuyệt vời! Bạn đã nghe đúng.' : 'Gần đúng rồi! Hãy xem lại nhé:'}</h4>
            </div>
            
            {!isCorrect && (
              <div className="space-y-4">
                <div className="p-4 bg-background border border-border rounded-lg text-lg font-medium leading-relaxed backdrop-blur-sm">
                  {getComparison()}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-destructive dark:text-destructive-foreground opacity-90">
                  <RotateCcw className="w-4 h-4" />
                  Hãy nghe lại và sửa những từ gạch chân nhé!
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
