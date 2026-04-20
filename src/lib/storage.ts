import { AppState } from '../types';

const STORAGE_KEY = 'v_english_state';

const DEFAULT_STATE: AppState = {
  userLevel: null,
  difficultyLevel: 'medium',
  currentWeek: 1,
  currentDay: 1,
  completedLessons: [],
  placementTestScore: null,
  roadmapGenerated: false,
  savedTips: [],
  aiSettings: {
    apiKey: '',
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    provider: 'gemini',
  },
  flashcards: [],
  xp: 0,
  streak: 0,
  streakShields: 1,
  lastCompletedDate: null,
  feedbackLog: [],
  errorLog: [],
  errorStats: {
    tense: 0,
    preposition: 0,
    article: 0,
    wordChoice: 0,
  },
  difficultyMultiplier: 1.0,
  reviewDaysRemaining: 0,
  bonusChallengesUnlocked: [],
  badges: [],
  purchasedItems: [],
};

export const storage = {
  save: (state: AppState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  },
  load: (): AppState => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Error loading from localStorage', e);
    }
    return DEFAULT_STATE;
  },
  export: (state: AppState) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "v_english_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  },
  import: (file: File): Promise<AppState> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const state = JSON.parse(e.target?.result as string);
          resolve(state);
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsText(file);
    });
  }
};
