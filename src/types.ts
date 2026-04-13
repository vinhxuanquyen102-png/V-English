export type SkillType = 'Listening' | 'Speaking' | 'Reading' | 'Writing' | 'Grammar' | 'Vocabulary' | 'Grammar & Reading';

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
  type: 'shadowing' | 'writing' | 'speaking' | 'reading' | 'quiz';
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
  synonyms?: string[];
  antonyms?: string[];
  examples?: string[];
  sourceLesson?: string;
  sourceSentence?: string;
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

export interface AppState {
  userLevel: 'A1' | 'A2' | 'B1' | 'B2' | null;
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
  difficultyMultiplier: number;
  reviewDaysRemaining: number;
  bonusChallengesUnlocked: string[];
  badges: Badge[];
  purchasedItems: string[];
}
