export type SkillType = 'Listening' | 'Speaking' | 'Reading' | 'Writing' | 'Grammar' | 'Vocabulary' | 'Grammar & Reading' | 'General';

export type RecallMode = 'recognition' | 'production';

export interface MemoryHack {
  type: 'Visual' | 'Story' | 'Rhyme' | 'Hook';
  content: string;
  vietnameseNote?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  type: 'shadowing' | 'writing' | 'speaking' | 'reading' | 'quiz' | 'listening';
  title: string;
  content?: string;
  audioText?: string;
  prompt?: string;
  minWords?: number;
  questions?: Question[];
  duration: string;
}

export interface Lesson {
  id: string;
  week: number;
  day: number;
  skill: SkillType;
  title: string;
  topic: string;
  explanation: string;
  commonMistake: string;
  memoryHacks: MemoryHack[];
  exercises: Exercise[];
}

export interface Flashcard {
  id: string;
  word: string;
  definition: string;
  vietnamese: string;
  example: string;
  cefr: 'A2' | 'B1';
  ipa?: string;
  partOfSpeech?: string;
  synonyms?: any[];
  antonyms?: any[];
  examples?: string[];
  sourceLesson?: string;
  sourceSentence?: string;
  notes?: string;
  linkedWordIds?: string[];
  nextReview: string; // ISO date
  interval: number; // days
  easeFactor: number;
  repetition: number;
  createdAt: string;
}

export interface AISettings {
  apiKey: string;
  baseUrl: string;
  model: string;
  provider: 'gemini' | 'openai-compatible';
}

export interface FeedbackLog {
  id: string;
  lessonId: string;
  lessonTitle: string;
  skill: SkillType;
  score: number;
  feedback: string;
  date: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface ErrorRecord {
  id: string;
  pattern: string;
  count: number;
  examples: string[];
  lastSeen: string;
}

export interface ErrorStats {
  tense: number;
  preposition: number;
  article: number;
  wordChoice: number;
}

export interface AppState {
  userLevel: 'A1' | 'A2' | 'A2+' | 'B1' | 'B2' | null;
  difficultyLevel: 'easy' | 'medium' | 'hard';
  currentWeek: number;
  currentDay: number;
  completedLessons: string[]; // lesson ids
  placementTestScore: number | null;
  roadmapGenerated: boolean;
  savedTips: any[];
  aiSettings: AISettings;
  flashcards: Flashcard[];
  xp: number;
  streak: number;
  streakShields: number;
  lastCompletedDate: string | null;
  feedbackLog: FeedbackLog[];
  errorLog: ErrorRecord[];
  errorStats: ErrorStats;
  difficultyMultiplier: number;
  reviewDaysRemaining: number;
  bonusChallengesUnlocked: string[];
  badges: Badge[];
  purchasedItems: string[];
}
