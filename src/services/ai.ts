import { AISettings } from '@/types';
import { GoogleGenAI } from "@google/genai";

const DEFAULT_GEMINI_MODEL = "gemini-3-flash-preview";
const lessonCache: Record<string, any> = {};

async function retryWithBackoff<T>(fn: () => Promise<T>, retries = 5, delay = 2000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    const isTransientError = error.status === 429 || 
                            error.status === 500 || 
                            error.status === 503 ||
                            (error.error && (error.error.code === 429 || error.error.code === 500 || error.error.code === 503));

    if (retries > 0 && isTransientError) {
      console.warn(`Transient AI error hit, retrying in ${delay}ms... (retries left: ${retries})`, error);
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
  errorTypes?: {
    tense: number;
    preposition: number;
    article: number;
    wordChoice: number;
  };
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
              "cefrLevel": "A2/B1",
              "errorTypes": {
                "tense": number (count of tense errors),
                "preposition": number (count of preposition errors),
                "article": number (count of article errors),
                "wordChoice": number (count of word choice errors)
              }
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
                content: 'You are an expert English teacher. Grade writing tasks using CEFR rubric. Return strict JSON. Feedback and corrections in Vietnamese. Also count error types: tense, preposition, article, wordChoice.'
              },
              {
                role: 'user',
                content: `Grade this writing. Prompt: ${prompt}. Text: ${text}. Return JSON: { "score": 0-100, "feedback": "Tiếng Việt", "corrections": ["Lỗi 1", "Lỗi 2"], "cefrLevel": "A2/B1", "errorTypes": { "tense": 0, "preposition": 0, "article": 0, "wordChoice": 0 } }`
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
              "cefrLevel": "A2/B1",
              "errorTypes": {
                "tense": 0,
                "preposition": 0,
                "article": 0,
                "wordChoice": 0
              }
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
                content: 'You are an expert English pronunciation coach. Analyze accuracy and fluency. Return strict JSON. Feedback and corrections in Vietnamese. For speaking, errorTypes are usually 0 unless grammar is also analyzed.'
              },
              {
                role: 'user',
                content: `Grade speaking. Target: ${targetText}. Transcript: ${transcript}. Return JSON: { "score": 0-100, "feedback": "Tiếng Việt - assess accuracy and fluency", "corrections": ["Lỗi 1", "Lỗi 2"], "cefrLevel": "A2/B1", "errorTypes": { "tense": 0, "preposition": 0, "article": 0, "wordChoice": 0 } }`
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
  synonyms?: { word: string; vietnamese: string; ipa: string; example: string; }[];
  antonyms?: { word: string; vietnamese: string; ipa: string; example: string; }[];
  examples?: string[];
}

const wordCache: Record<string, WordLookupResult> = {};

export async function generateDailyLesson(state: any, settings: AISettings): Promise<any> {
  const cacheKey = `lesson-${state.currentWeek}-${state.currentDay}-${state.difficultyLevel || 'medium'}`;
  if (lessonCache[cacheKey]) {
    return lessonCache[cacheKey];
  }

  try {
    return await retryWithBackoff(async () => {
      const prompt = `
        Bạn là AI Curriculum Engine + Language Coach.
        Bạn KHÔNG phải chatbot. Bạn là hệ thống thiết kế bài học cá nhân hóa.
        
        🎯 MỤC TIÊU
        Giúp người học từ A2 → B2 trong 90 ngày.
        
        📊 INPUT (dữ liệu hệ thống cung cấp)
        User Profile:
        - Level hiện tại: ${state.userLevel || 'A2'}
        - Độ khó mong muốn: ${state.difficultyLevel || 'medium'}
        - Tuần: ${state.currentWeek}, Ngày: ${state.currentDay}
        
        Hiệu suất gần đây:
        - Điểm trung bình: ${state.xp} XP
        - Lỗi theo danh mục (Error Stats): 
          + Tense: ${state.errorStats?.tense || 0}
          + Preposition: ${state.errorStats?.preposition || 0}
          + Article: ${state.errorStats?.article || 0}
          + Word Choice: ${state.errorStats?.wordChoice || 0}
        - Lỗi cụ thể (Error Log): ${state.errorLog && state.errorLog.length > 0 ? state.errorLog.map((e: any) => `${e.pattern} (${e.count} lần)`).join(', ') : 'Chưa có dữ liệu chi tiết'}
        - Từ vựng đã học: ${state.flashcards.map((f: any) => f.word).join(', ')}
        
        🧠 NHIỆM VỤ CỦA BẠN
        1. PHÂN TÍCH: Đánh giá user đang yếu gì và level thực tế.
        2. QUYẾT ĐỊNH BÀI HỌC HÔM NAY: Chọn 1 grammar focus, 1 communication goal, 1 tình huống thực tế.
        3. TẠO LESSON (GIỮ FORMAT APP): KHÔNG thay đổi cấu trúc.
        4. ĐỘ KHÓ: Điều chỉnh độ phức tạp của từ vựng và ngữ pháp theo độ khó mong muốn (${state.difficultyLevel || 'medium'}).
        
        OUTPUT JSON:
        {
          "title": "string",
          "grammar_focus": "string",
          "communication_goal": "string",
          "explanation": "giải thích ngắn gọn (hỗ trợ markdown)",
          "common_mistake": "lỗi người Việt hay mắc",
          "exercises": [
            {
              "id": "ex1",
              "title": "Reading Comprehension",
              "type": "reading",
              "duration": "10 phút",
              "content": "đoạn văn ngắn (80-120 từ)",
              "questions": [
                {
                  "id": "q1",
                  "text": "Câu hỏi trắc nghiệm?",
                  "options": ["A", "B", "C", "D"],
                  "correctAnswer": "A",
                  "explanation": "Giải thích đáp án"
                }
              ]
            },
            {
              "id": "ex2",
              "title": "Shadowing Practice",
              "type": "shadowing",
              "duration": "10 phút",
              "audioText": "câu hội thoại tự nhiên",
              "focus": "intonation + fluency"
            },
            {
              "id": "ex3",
              "title": "Dictation Practice",
              "type": "listening",
              "duration": "10 phút",
              "audioText": "câu tiếng Anh tự nhiên để user nghe và chép lại"
            },
            {
              "id": "ex4",
              "title": "Writing Practice",
              "type": "writing",
              "duration": "15 phút",
              "prompt": "tình huống thực tế (work/life)"
            }
          ]
        }
      `;

      if (settings.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: DEFAULT_GEMINI_MODEL,
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const result = JSON.parse(response.text || "{}");
        lessonCache[cacheKey] = result;
        return result;
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
              { role: 'system', content: 'You are an AI Curriculum Engine. Return strict JSON.' },
              { role: 'user', content: prompt }
            ],
            response_format: { type: 'json_object' }
          })
        });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        const result = JSON.parse(data.choices[0].message.content);
        lessonCache[cacheKey] = result;
        return result;
      }
    });
  } catch (error) {
    console.error("Failed to generate lesson", error);
    throw error;
  }
}

export interface IPAExercise {
  id: string;
  type: 'match_ipa' | 'identify_word' | 'phoneme_focus' | 'minimal_pairs';
  title: string;
  question: string;
  targetWord?: string;
  targetIpa?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export async function generateIPAExercises(level: string, settings: AISettings): Promise<IPAExercise[]> {
  try {
    return await retryWithBackoff(async () => {
      const prompt = `
        Bạn là chuyên gia ngữ âm tiếng Anh. Hãy tạo 5 bài tập luyện IPA (Bảng ký hiệu ngữ âm quốc tế) phù hợp với trình độ ${level}.
        
        Các dạng bài tập:
        1. match_ipa: Chọn phiên âm IPA đúng cho một từ.
        2. identify_word: Chọn từ đúng cho một phiên âm IPA.
        3. phoneme_focus: Tập trung vào một âm cụ thể (ví dụ: "Âm 'a' trong 'cat' là âm nào?").
        4. minimal_pairs: Phân biệt các cặp từ có phát âm gần giống nhau (ví dụ: 'ship' vs 'sheep').
        
        Yêu cầu:
        - Trả về mảng JSON gồm 5 bài tập.
        - Giải thích đáp án bằng tiếng Việt.
        - Sử dụng các ký hiệu IPA chuẩn.
        
        JSON Format:
        [
          {
            "id": "ipa_1",
            "type": "match_ipa",
            "title": "Tìm phiên âm đúng",
            "question": "Phiên âm IPA của từ 'education' là gì?",
            "targetWord": "education",
            "options": ["/ˌedʒ.ʊˈkeɪ.ʃən/", "/ˌed.uːˈkeɪ.ʃən/", "/ˌedʒ.ʊˈke.ʃən/", "/ˌed.ʊˈkeɪ.ʃn̩/"],
            "correctAnswer": "/ˌedʒ.ʊˈkeɪ.ʃən/",
            "explanation": "Từ 'education' có trọng âm chính rơi vào âm tiết thứ 3, và âm 'du' được phát âm là /dʒ.ʊ/."
          }
        ]
      `;

      if (settings.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: DEFAULT_GEMINI_MODEL,
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        return JSON.parse(response.text || "[]");
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
              { role: 'system', content: 'You are an IPA Phonetics Expert. Return strict JSON array of exercises.' },
              { role: 'user', content: prompt }
            ],
            response_format: { type: 'json_object' }
          })
        });
        const data = await response.json();
        const result = JSON.parse(data.choices[0].message.content);
        return Array.isArray(result) ? result : result.exercises || [];
      }
    });
  } catch (error) {
    console.error("Failed to generate IPA exercises", error);
    throw error;
  }
}

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
            5. Up to 3 synonyms (Include word, vietnamese meaning, ipa, and 1 short english example).
            6. Up to 3 antonyms (Include word, vietnamese meaning, ipa, and 1 short english example).
            7. 3 common contexts or example sentences in English.
            
            Return strict JSON:
            {
              "vietnamese": "string",
              "explanation": "string",
              "ipa": "string",
              "partOfSpeech": "string",
              "synonyms": [{"word": "string", "vietnamese": "string", "ipa": "string", "example": "string"}],
              "antonyms": [{"word": "string", "vietnamese": "string", "ipa": "string", "example": "string"}],
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
                content: `Lookup word: ${word}. Return JSON: { "vietnamese": "string", "explanation": "string", "ipa": "string", "partOfSpeech": "string", "synonyms": [{"word": "string", "vietnamese": "string", "ipa": "string", "example": "string"}], "antonyms": [{"word": "string", "vietnamese": "string", "ipa": "string", "example": "string"}], "examples": ["string", "string", "string"] }`
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
