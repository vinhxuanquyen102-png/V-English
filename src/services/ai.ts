import { AISettings } from '@/types';
import { GoogleGenAI } from "@google/genai";

const DEFAULT_GEMINI_MODEL = "gemini-3-flash-preview";

async function retryWithBackoff<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    if (retries > 0 && (error.status === 429 || (error.error && error.error.code === 429))) {
      console.warn(`Rate limit hit, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryWithBackoff(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

export interface UnifiedAIResult {
  score: number;
  feedback: string;
  corrections: string[];
  cefrLevel: string;
}

export async function gradeWriting(text: string, prompt: string, settings: AISettings): Promise<UnifiedAIResult> {
  if (!settings.apiKey && settings.provider === 'openai-compatible') {
    return getOfflineWritingScore(text, prompt);
  }

  try {
    return await retryWithBackoff(async () => {
      if (settings.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: DEFAULT_GEMINI_MODEL,
          contents: `
            You are an expert English teacher (CEFR examiner). 
            Grade this writing task for a Vietnamese learner (A2/B1 level).
            Prompt: ${prompt}
            User Text: ${text}

            Enforce:
            1. CEFR rubric (A2/B1).
            2. Strict JSON output.
            3. Max 300 tokens.
            4. Feedback in Vietnamese, corrections in Vietnamese.

            Return JSON:
            {
              "score": number (0-100),
              "feedback": "string (Tiếng Việt)",
              "corrections": ["Lỗi 1: ...", "Lỗi 2: ..."],
              "cefrLevel": "A2/B1"
            }
          `,
          config: {
            responseMimeType: "application/json"
          }
        });
        return JSON.parse(response.text || "{}");
      } else {
        // OpenAI-compatible
        const response = await fetch(`${settings.baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`
          },
          body: JSON.stringify({
            model: settings.model,
            messages: [
              {
                role: 'system',
                content: 'You are an expert English teacher. Grade writing tasks using CEFR rubric. Return strict JSON. Feedback and corrections in Vietnamese.'
              },
              {
                role: 'user',
                content: `Grade this writing. Prompt: ${prompt}. Text: ${text}. Return JSON: { "score": 0-100, "feedback": "Tiếng Việt", "corrections": ["Lỗi 1", "Lỗi 2"], "cefrLevel": "A2/B1" }`
              }
            ],
            max_tokens: 300,
            response_format: { type: 'json_object' }
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw { status: response.status, error: errorData.error };
        }
        const data = await response.json();
        return JSON.parse(data.choices[0].message.content);
      }
    });
  } catch (error) {
    console.error("AI Grading failed, falling back to offline mode", error);
    return getOfflineWritingScore(text, prompt);
  }
}

export async function gradeSpeaking(transcript: string, targetText: string, settings: AISettings): Promise<UnifiedAIResult> {
  if (!settings.apiKey && settings.provider === 'openai-compatible') {
    return getOfflineSpeakingScore(transcript, targetText);
  }

  try {
    return await retryWithBackoff(async () => {
      if (settings.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: DEFAULT_GEMINI_MODEL,
          contents: `
            You are an expert English pronunciation coach.
            Target Text: ${targetText}
            User Transcript: ${transcript}

            Analyze the user's pronunciation against the target text.
            Enforce:
            1. Strict JSON output.
            2. Max 300 tokens.
            3. Feedback and corrections in Vietnamese.

            Return JSON:
            {
              "score": number (0-100, based on accuracy and fluency),
              "feedback": "string (Tiếng Việt - Provide specific feedback on accuracy and fluency)",
              "corrections": ["Lỗi 1: ...", "Lỗi 2: ..."], // Common mistakes or mispronounced words
              "cefrLevel": "A2/B1"
            }
          `,
          config: {
            responseMimeType: "application/json"
          }
        });
        return JSON.parse(response.text || "{}");
      } else {
        // OpenAI-compatible
        const response = await fetch(`${settings.baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`
          },
          body: JSON.stringify({
            model: settings.model,
            messages: [
              {
                role: 'system',
                content: 'You are an expert English pronunciation coach. Analyze accuracy and fluency. Return strict JSON. Feedback and corrections in Vietnamese.'
              },
              {
                role: 'user',
                content: `Grade speaking. Target: ${targetText}. Transcript: ${transcript}. Return JSON: { "score": 0-100, "feedback": "Tiếng Việt - assess accuracy and fluency", "corrections": ["Lỗi 1", "Lỗi 2"], "cefrLevel": "A2/B1" }`
              }
            ],
            max_tokens: 300,
            response_format: { type: 'json_object' }
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw { status: response.status, error: errorData.error };
        }
        const data = await response.json();
        return JSON.parse(data.choices[0].message.content);
      }
    });
  } catch (error) {
    console.error("AI Speaking Grading failed, falling back to offline mode", error);
    return getOfflineSpeakingScore(transcript, targetText);
  }
}

function getOfflineWritingScore(text: string, prompt: string): UnifiedAIResult {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  let score = Math.min(60 + (wordCount / 2), 85); // Basic heuristic
  
  return {
    score: Math.round(score),
    feedback: "Chế độ ngoại tuyến: Bài viết của bạn đã được phân tích dựa trên độ dài và cấu trúc cơ bản. Hãy kết nối AI để nhận phản hồi CEFR chi tiết.",
    corrections: ["Chế độ ngoại tuyến không hỗ trợ sửa lỗi chi tiết."],
    cefrLevel: "A2"
  };
}

function getOfflineSpeakingScore(transcript: string, targetText: string): UnifiedAIResult {
  const transcriptWords = transcript.toLowerCase().split(/\s+/);
  const targetWords = targetText.toLowerCase().split(/\s+/);
  
  let matches = 0;
  targetWords.forEach(word => {
    if (transcriptWords.includes(word)) matches++;
  });
  
  const accuracy = (matches / targetWords.length) * 100;
  
    return {
    score: Math.round(accuracy),
    feedback: "Chế độ ngoại tuyến: Hãy cố gắng phát âm rõ ràng từng từ.",
    corrections: ["Chế độ ngoại tuyến không hỗ trợ sửa lỗi chi tiết."],
    cefrLevel: "A2"
  };
}

export interface WordLookupResult {
  vietnamese: string;
  explanation: string;
  contexts: string[];
  ipa?: string;
  partOfSpeech?: string;
  synonyms?: string[];
  antonyms?: string[];
  examples?: string[];
}

const wordCache: Record<string, WordLookupResult> = {};

export async function lookupWord(word: string, settings: AISettings): Promise<WordLookupResult> {
  const cacheKey = word.toLowerCase();
  if (wordCache[cacheKey]) {
    return wordCache[cacheKey];
  }

  try {
    const result = await retryWithBackoff(async () => {
      if (settings.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: DEFAULT_GEMINI_MODEL,
          contents: `
            You are an English-Vietnamese dictionary.
            Word: ${word}
            
            Provide:
            1. Vietnamese meaning.
            2. Short explanation in Vietnamese.
            3. IPA pronunciation.
            4. Part of speech (noun, verb, adjective, etc.).
            5. Up to 3 synonyms.
            6. Up to 3 antonyms.
            7. 3 common contexts or example sentences in English.
            
            Return strict JSON:
            {
              "vietnamese": "string",
              "explanation": "string",
              "ipa": "string",
              "partOfSpeech": "string",
              "synonyms": ["string", "string"],
              "antonyms": ["string", "string"],
              "examples": ["string", "string", "string"]
            }
          `,
          config: {
            responseMimeType: "application/json"
          }
        });
        const parsed = JSON.parse(response.text || "{}");
        return {
          ...parsed,
          contexts: parsed.examples || parsed.contexts || []
        };
      } else {
        const response = await fetch(`${settings.baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.apiKey}`
          },
          body: JSON.stringify({
            model: settings.model,
            messages: [
              {
                role: 'system',
                content: 'You are an English-Vietnamese dictionary. Return strict JSON.'
              },
              {
                role: 'user',
                content: `Lookup word: ${word}. Return JSON: { "vietnamese": "string", "explanation": "string", "ipa": "string", "partOfSpeech": "string", "synonyms": ["string"], "antonyms": ["string"], "examples": ["string", "string", "string"] }`
              }
            ],
            max_tokens: 400,
            response_format: { type: 'json_object' }
          })
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw { status: response.status, error: errorData.error };
        }
        const data = await response.json();
        const parsed = JSON.parse(data.choices[0].message.content);
        return {
          ...parsed,
          contexts: parsed.examples || parsed.contexts || []
        };
      }
    });

    wordCache[cacheKey] = result;
    return result;
  } catch (error: any) {
    console.error("Word lookup failed after retries", error);
    
    return {
      vietnamese: "Không thể tra cứu",
      explanation: "Hệ thống AI đang quá tải hoặc lỗi kết nối. Vui lòng thử lại sau.",
      contexts: []
    };
  }
}
