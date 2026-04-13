import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Mic, Square, RotateCcw, Volume2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { UnifiedAIResult } from '../services/ai';
import { Badge } from '@/components/ui/badge';
import { WordTooltip } from './WordTooltip';
import { AISettings } from '../types';

interface ShadowingLabProps {
  text: string;
  onWordClick: (word: string) => void;
  onGrade?: (transcript: string) => void;
  isGrading?: boolean;
  feedback?: UnifiedAIResult;
  aiSettings: AISettings;
}

export function ShadowingLab({ text, onWordClick, onGrade, isGrading, feedback, aiSettings }: ShadowingLabProps) {
  // TTS State
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(-1);
  const synth = window.speechSynthesis;

  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingRecord, setIsPlayingRecord] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<any>(null);

  const textContainerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words = text.split(/\s+/);

  useEffect(() => {
    // Initialize SpeechRecognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };
    }

    return () => {
      synth.cancel();
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [synth]);

  const toggleTTS = () => {
    if (isPlayingTTS) {
      synth.cancel();
      setIsPlayingTTS(false);
      setCurrentWordIndex(-1);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Tốc độ chậm hơn một chút để dễ nghe
      
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          const charIndex = event.charIndex;
          let currentLength = 0;
          for (let i = 0; i < words.length; i++) {
            if (charIndex >= currentLength && charIndex <= currentLength + words[i].length) {
              setCurrentWordIndex(i);
              break;
            }
            currentLength += words[i].length + 1; // +1 for space
          }
        }
      };

      utterance.onend = () => {
        setIsPlayingTTS(false);
        setCurrentWordIndex(-1);
      };
      
      synth.speak(utterance);
      setIsPlayingTTS(true);
    }
  };

  // Logic xử lý MediaRecorder
  const startRecording = async () => {
    try {
      // Yêu cầu quyền truy cập Microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      // Thu thập dữ liệu âm thanh
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      // Xử lý khi dừng ghi âm
      mediaRecorder.onstop = () => {
        // Tạo Blob từ các chunks đã thu thập
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        // Tạo URL để phát lại
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        
        // Dừng tất cả các track để giải phóng Microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Bắt đầu ghi âm
      mediaRecorder.start();
      if (recognitionRef.current) {
        setTranscript('');
        recognitionRef.current.start();
      }
      setIsRecording(true);
      setAudioUrl(null);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error("Không thể truy cập Microphone. Vui lòng kiểm tra quyền truy cập trên trình duyệt.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
    }
  };

  const togglePlayRecord = () => {
    if (!audioPlayerRef.current || !audioUrl) return;

    if (isPlayingRecord) {
      audioPlayerRef.current.pause();
      setIsPlayingRecord(false);
    } else {
      audioPlayerRef.current.play();
      setIsPlayingRecord(true);
    }
  };

  const reRecord = () => {
    setAudioUrl(null);
    setIsPlayingRecord(false);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
  };

  return (
    <div className="space-y-8">
      {/* Văn bản mẫu */}
      <div 
        ref={textContainerRef}
        className="p-8 bg-slate-900 text-white rounded-2xl text-2xl font-bold leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-2"
      >
        {words.map((word, i) => (
          <WordTooltip key={i} word={word} settings={aiSettings}>
            <span 
              ref={el => { wordRefs.current[i] = el; }}
              className={`mx-1 transition-colors cursor-pointer ${
                currentWordIndex === i ? 'text-yellow-400 font-bold scale-110 inline-block' : 'hover:text-primary'
              }`}
              onClick={() => onWordClick(word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""))}
            >
              {word}
            </span>
          </WordTooltip>
        ))}
      </div>

      {/* Bộ điều khiển */}
      <div className="flex flex-col items-center gap-6 bg-muted/30 p-6 rounded-2xl border-2 border-muted relative overflow-hidden">
        
        {/* Audio Visualizer Background when recording */}
        {isRecording && (
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="flex items-center gap-1 h-32">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-red-500 rounded-full"
                  animate={{
                    height: ["20%", "100%", "20%"],
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Nghe giọng mẫu */}
        <div className="flex flex-col items-center gap-2 relative z-10">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">1. Nghe giọng mẫu (Native Speaker)</p>
          <Button 
            size="lg" 
            variant={isPlayingTTS ? "default" : "secondary"}
            className="w-64 h-14 rounded-full shadow-md font-bold text-lg" 
            onClick={toggleTTS}
          >
            {isPlayingTTS ? (
              <><Pause className="w-6 h-6 mr-2" /> Đang phát...</>
            ) : (
              <><Volume2 className="w-6 h-6 mr-2" /> Nghe mẫu</>
            )}
          </Button>
        </div>

        <div className="w-full h-px bg-border my-2 relative z-10"></div>

        {/* Luyện tập của người dùng */}
        <div className="flex flex-col items-center gap-4 w-full">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">2. Luyện tập của bạn</p>
          
          {!audioUrl ? (
            <div className="flex gap-4">
              {!isRecording ? (
                <Button 
                  size="lg" 
                  className="w-64 h-14 rounded-full shadow-lg font-bold text-lg bg-red-500 hover:bg-red-600 text-white transition-all"
                  onClick={startRecording}
                >
                  <Mic className="w-6 h-6 mr-2" /> Ghi âm (Record)
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  variant="destructive"
                  className="w-64 h-14 rounded-full shadow-lg font-bold text-lg animate-pulse"
                  onClick={stopRecording}
                >
                  <Square className="w-6 h-6 mr-2 fill-current" /> Dừng (Stop)
                </Button>
              )}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="default"
                className="w-64 h-14 rounded-full shadow-md font-bold text-lg bg-green-500 hover:bg-green-600 text-white"
                onClick={togglePlayRecord}
              >
                {isPlayingRecord ? (
                  <><Pause className="w-6 h-6 mr-2" /> Dừng phát</>
                ) : (
                  <><Play className="w-6 h-6 mr-2" /> Nghe lại giọng bạn</>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-64 h-14 rounded-full shadow-sm font-bold text-lg"
                onClick={reRecord}
              >
                <RotateCcw className="w-6 h-6 mr-2" /> Ghi âm lại
              </Button>
            </div>
          )}
          
          {audioUrl && onGrade && (
            <div className="mt-4 w-full flex flex-col items-center gap-4">
              <div className="w-full max-w-lg p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground italic">
                <strong>Transcript:</strong> {transcript || "Không nhận diện được giọng nói."}
              </div>
              <Button 
                size="lg" 
                className="w-64 h-14 rounded-full shadow-lg font-bold text-lg"
                onClick={() => onGrade(transcript)}
                disabled={isGrading || !transcript}
              >
                {isGrading ? 'AI đang chấm điểm...' : 'Gửi bài chấm điểm'}
              </Button>
            </div>
          )}

          {feedback && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 w-full max-w-2xl p-6 bg-primary/5 border-2 border-primary/20 rounded-xl space-y-4 text-left"
            >
              <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                <h3 className="text-xl font-bold font-heading text-primary">Đánh giá Phát âm (AI)</h3>
                <Badge className="text-lg px-3 py-1 bg-primary">{feedback.score}/100</Badge>
              </div>
              <p className="font-medium text-slate-800 leading-relaxed">{feedback.feedback}</p>
              {feedback.corrections && feedback.corrections.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-bold uppercase text-muted-foreground">Lỗi phát âm & Cải thiện:</p>
                  <ul className="space-y-2">
                    {feedback.corrections.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm bg-white p-3 rounded-lg border shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Audio Player ẩn để phát lại giọng người dùng */}
      {audioUrl && (
        <audio 
          ref={audioPlayerRef} 
          src={audioUrl} 
          onEnded={() => setIsPlayingRecord(false)} 
          className="hidden" 
        />
      )}
    </div>
  );
}
