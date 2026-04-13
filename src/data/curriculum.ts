import { Lesson, Question } from '../types';

export const PLACEMENT_QUESTIONS: Question[] = [
  // A1 Level (1-10)
  { id: 'p1', text: 'Hello, what ____ your name?', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'Động từ to be đi với ngôi thứ 3 số ít "your name" là "is".' },
  { id: 'p2', text: 'I ____ from Vietnam.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', explanation: 'Ngôi thứ nhất "I" đi với "am".' },
  { id: 'p3', text: 'She ____ a doctor.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', explanation: 'Ngôi thứ 3 số ít "She" đi với "is".' },
  { id: 'p4', text: 'They ____ playing football now.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', explanation: 'Ngôi thứ 3 số nhiều "They" đi với "are".' },
  { id: 'p5', text: 'I have two ____.', options: ['cat', 'cats', 'cates', 'caties'], correctAnswer: 'cats', explanation: 'Số nhiều của "cat" thêm "s".' },
  { id: 'p6', text: '____ do you live? - I live in Hanoi.', options: ['What', 'Where', 'When', 'Who'], correctAnswer: 'Where', explanation: 'Hỏi về địa điểm dùng "Where".' },
  { id: 'p7', text: 'I ____ like apples.', options: ['don\'t', 'doesn\'t', 'not', 'no'], correctAnswer: 'don\'t', explanation: 'Phủ định của thì hiện tại đơn với "I" dùng "don\'t".' },
  { id: 'p8', text: 'He ____ to school every day.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'goes', explanation: 'Thì hiện tại đơn với ngôi thứ 3 số ít thêm "es" vào "go".' },
  { id: 'p9', text: 'This is ____ book.', options: ['my', 'me', 'I', 'mine'], correctAnswer: 'my', explanation: 'Tính từ sở hữu đi trước danh từ.' },
  { id: 'p10', text: 'Can you ____ English?', options: ['speak', 'speaks', 'speaking', 'spoke'], correctAnswer: 'speak', explanation: 'Sau động từ khuyết thiếu "can" là động từ nguyên thể.' },
  
  // A2 Level (11-20)
  { id: 'p11', text: 'I ____ to the cinema last night.', options: ['go', 'went', 'gone', 'going'], correctAnswer: 'went', explanation: '"Last night" là dấu hiệu của thì quá khứ đơn.' },
  { id: 'p12', text: 'She is ____ than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 'taller', explanation: 'So sánh hơn của tính từ ngắn thêm "er".' },
  { id: 'p13', text: 'I have ____ visited London.', options: ['never', 'ever', 'yet', 'already'], correctAnswer: 'never', explanation: 'Dùng "never" trong thì hiện tại hoàn thành mang nghĩa "chưa từng".' },
  { id: 'p14', text: '____ you ever eaten sushi?', options: ['Do', 'Did', 'Have', 'Has'], correctAnswer: 'Have', explanation: 'Thì hiện tại hoàn thành với "you" dùng trợ động từ "Have".' },
  { id: 'p15', text: 'I was watching TV when the phone ____.', options: ['ring', 'rang', 'rung', 'ringing'], correctAnswer: 'rang', explanation: 'Hành động đang xảy ra (quá khứ tiếp diễn) thì có hành động khác xen vào (quá khứ đơn).' },
  { id: 'p16', text: 'If it rains, we ____ at home.', options: ['stay', 'will stay', 'stayed', 'would stay'], correctAnswer: 'will stay', explanation: 'Câu điều kiện loại 1 (Conditional type 1).' },
  { id: 'p17', text: 'He is interested ____ learning English.', options: ['in', 'on', 'at', 'about'], correctAnswer: 'in', explanation: 'Cấu trúc "be interested in + V-ing".' },
  { id: 'p18', text: 'You ____ smoke in the hospital.', options: ['mustn\'t', 'don\'t have to', 'needn\'t', 'shouldn\'t'], correctAnswer: 'mustn\'t', explanation: '"Mustn\'t" chỉ sự cấm đoán.' },
  { id: 'p19', text: 'There is ____ milk in the fridge.', options: ['some', 'any', 'a', 'many'], correctAnswer: 'some', explanation: 'Dùng "some" trong câu khẳng định với danh từ không đếm được.' },
  { id: 'p20', text: 'I am looking forward to ____ you.', options: ['see', 'seeing', 'saw', 'seen'], correctAnswer: 'seeing', explanation: 'Cấu trúc "look forward to + V-ing".' },

  // B1 Level (21-30)
  { id: 'p21', text: 'The book ____ was written by JK Rowling is very popular.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', explanation: 'Đại từ quan hệ "which" thay thế cho danh từ chỉ vật "The book".' },
  { id: 'p22', text: 'I wish I ____ more money.', options: ['have', 'has', 'had', 'having'], correctAnswer: 'had', explanation: 'Câu điều ước ở hiện tại dùng động từ ở thì quá khứ đơn.' },
  { id: 'p23', text: 'He asked me where I ____.', options: ['live', 'lived', 'living', 'have lived'], correctAnswer: 'lived', explanation: 'Câu tường thuật lùi thì từ hiện tại đơn sang quá khứ đơn.' },
  { id: 'p24', text: 'The house ____ built in 1990.', options: ['is', 'was', 'has been', 'had been'], correctAnswer: 'was', explanation: 'Câu bị động ở thì quá khứ đơn.' },
  { id: 'p25', text: 'Unless you ____ hard, you will fail the exam.', options: ['study', 'don\'t study', 'studied', 'will study'], correctAnswer: 'study', explanation: '"Unless" = "If not", mệnh đề đi sau "unless" ở thể khẳng định.' },
  { id: 'p26', text: 'By the time we arrived, the movie ____.', options: ['started', 'has started', 'had started', 'was starting'], correctAnswer: 'had started', explanation: 'Hành động xảy ra trước một hành động khác trong quá khứ dùng thì quá khứ hoàn thành.' },
  { id: 'p27', text: 'She is used to ____ up early.', options: ['get', 'getting', 'got', 'gotten'], correctAnswer: 'getting', explanation: 'Cấu trúc "be used to + V-ing" (quen với việc gì).' },
  { id: 'p28', text: 'I would rather you ____ here.', options: ['stay', 'stayed', 'staying', 'to stay'], correctAnswer: 'stayed', explanation: 'Cấu trúc "would rather + S + V(quá khứ đơn)" diễn tả mong muốn ở hiện tại.' },
  { id: 'p29', text: 'Hardly ____ arrived when it started to rain.', options: ['had we', 'we had', 'did we', 'we did'], correctAnswer: 'had we', explanation: 'Đảo ngữ với "Hardly... when...".' },
  { id: 'p30', text: 'It is high time you ____ a job.', options: ['get', 'got', 'getting', 'to get'], correctAnswer: 'got', explanation: 'Cấu trúc "It is high time + S + V(quá khứ đơn)".' }
];

export const CURRICULUM: Lesson[] = [
  {
    "id": "w1d1",
    "week": 1,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w1d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w1d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w1d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w1d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w1d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d1_q1",
            "text": "1. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d1_q2",
            "text": "2. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d1_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d1_q4",
            "text": "4. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d1_q5",
            "text": "5. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w1d1_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d1_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d1_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d1_q9",
            "text": "9. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d1_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d1_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d1_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d1_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d1_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d1_q15",
            "text": "15. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d1_q16",
            "text": "16. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d1_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d1_q18",
            "text": "18. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d1_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d1_q20",
            "text": "20. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d2",
    "week": 1,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w1d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w1d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w1d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w1d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w1d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d2_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d2_q2",
            "text": "2. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d2_q3",
            "text": "3. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d2_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d2_q5",
            "text": "5. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d2_q6",
            "text": "6. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d2_q7",
            "text": "7. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d2_q8",
            "text": "8. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d2_q9",
            "text": "9. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d2_q10",
            "text": "10. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d2_q11",
            "text": "11. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d2_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d2_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d2_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d2_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d2_q16",
            "text": "16. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d2_q17",
            "text": "17. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d2_q18",
            "text": "18. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d2_q19",
            "text": "19. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w1d2_q20",
            "text": "20. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d3",
    "week": 1,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w1d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w1d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w1d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w1d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w1d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d3_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w1d3_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d3_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d3_q4",
            "text": "4. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d3_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d3_q6",
            "text": "6. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d3_q7",
            "text": "7. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d3_q8",
            "text": "8. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d3_q9",
            "text": "9. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d3_q10",
            "text": "10. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d3_q11",
            "text": "11. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d3_q12",
            "text": "12. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d3_q13",
            "text": "13. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d3_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d3_q15",
            "text": "15. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d3_q16",
            "text": "16. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d3_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d3_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d3_q19",
            "text": "19. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d3_q20",
            "text": "20. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d4",
    "week": 1,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w1d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w1d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w1d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w1d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w1d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d4_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d4_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d4_q3",
            "text": "3. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d4_q4",
            "text": "4. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d4_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d4_q6",
            "text": "6. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d4_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d4_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d4_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d4_q10",
            "text": "10. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d4_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d4_q12",
            "text": "12. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d4_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d4_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d4_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d4_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w1d4_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d4_q18",
            "text": "18. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d4_q19",
            "text": "19. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d4_q20",
            "text": "20. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d5",
    "week": 1,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w1d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w1d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w1d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w1d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w1d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d5_q1",
            "text": "1. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d5_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d5_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d5_q4",
            "text": "4. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d5_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d5_q6",
            "text": "6. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d5_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d5_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d5_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d5_q10",
            "text": "10. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d5_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d5_q12",
            "text": "12. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d5_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d5_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d5_q15",
            "text": "15. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d5_q16",
            "text": "16. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d5_q17",
            "text": "17. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d5_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d5_q19",
            "text": "19. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d5_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d6",
    "week": 1,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w1d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w1d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w1d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w1d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w1d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d6_q1",
            "text": "1. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d6_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d6_q3",
            "text": "3. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w1d6_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d6_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d6_q6",
            "text": "6. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d6_q7",
            "text": "7. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d6_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d6_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d6_q10",
            "text": "10. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d6_q11",
            "text": "11. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d6_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d6_q13",
            "text": "13. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d6_q14",
            "text": "14. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d6_q15",
            "text": "15. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d6_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d6_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d6_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d6_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d6_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w1d7",
    "week": 1,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 1 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w1d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w1d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w1d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w1d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w1d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w1d7_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w1d7_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w1d7_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w1d7_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w1d7_q5",
            "text": "5. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w1d7_q6",
            "text": "6. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w1d7_q7",
            "text": "7. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w1d7_q8",
            "text": "8. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w1d7_q9",
            "text": "9. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w1d7_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w1d7_q11",
            "text": "11. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w1d7_q12",
            "text": "12. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w1d7_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w1d7_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w1d7_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w1d7_q16",
            "text": "16. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w1d7_q17",
            "text": "17. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w1d7_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w1d7_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w1d7_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d1",
    "week": 2,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w2d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w2d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w2d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w2d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w2d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d8_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d8_q2",
            "text": "2. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d8_q3",
            "text": "3. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d8_q4",
            "text": "4. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d8_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d8_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d8_q7",
            "text": "7. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d8_q8",
            "text": "8. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d8_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d8_q10",
            "text": "10. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d8_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d8_q12",
            "text": "12. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d8_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d8_q14",
            "text": "14. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d8_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d8_q16",
            "text": "16. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d8_q17",
            "text": "17. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d8_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d8_q19",
            "text": "19. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d8_q20",
            "text": "20. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d2",
    "week": 2,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w2d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w2d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w2d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w2d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w2d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d9_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d9_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d9_q3",
            "text": "3. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d9_q4",
            "text": "4. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d9_q5",
            "text": "5. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d9_q6",
            "text": "6. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d9_q7",
            "text": "7. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d9_q8",
            "text": "8. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d9_q9",
            "text": "9. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d9_q10",
            "text": "10. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d9_q11",
            "text": "11. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d9_q12",
            "text": "12. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d9_q13",
            "text": "13. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d9_q14",
            "text": "14. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d9_q15",
            "text": "15. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d9_q16",
            "text": "16. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d9_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d9_q18",
            "text": "18. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d9_q19",
            "text": "19. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d9_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d3",
    "week": 2,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w2d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w2d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w2d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w2d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w2d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d10_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d10_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d10_q3",
            "text": "3. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d10_q4",
            "text": "4. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d10_q5",
            "text": "5. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d10_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d10_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d10_q8",
            "text": "8. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d10_q9",
            "text": "9. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d10_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d10_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d10_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d10_q13",
            "text": "13. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d10_q14",
            "text": "14. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d10_q15",
            "text": "15. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d10_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d10_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d10_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d10_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d10_q20",
            "text": "20. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d4",
    "week": 2,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w2d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w2d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w2d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w2d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w2d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d11_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d11_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d11_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d11_q4",
            "text": "4. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d11_q5",
            "text": "5. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d11_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d11_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d11_q8",
            "text": "8. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d11_q9",
            "text": "9. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d11_q10",
            "text": "10. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d11_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d11_q12",
            "text": "12. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d11_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d11_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d11_q15",
            "text": "15. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d11_q16",
            "text": "16. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d11_q17",
            "text": "17. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d11_q18",
            "text": "18. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d11_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d11_q20",
            "text": "20. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d5",
    "week": 2,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w2d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w2d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w2d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w2d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w2d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d12_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d12_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d12_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d12_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d12_q5",
            "text": "5. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d12_q6",
            "text": "6. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d12_q7",
            "text": "7. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d12_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d12_q9",
            "text": "9. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d12_q10",
            "text": "10. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d12_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d12_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d12_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d12_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d12_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d12_q16",
            "text": "16. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d12_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d12_q18",
            "text": "18. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d12_q19",
            "text": "19. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d12_q20",
            "text": "20. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d6",
    "week": 2,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w2d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w2d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w2d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w2d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w2d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d13_q1",
            "text": "1. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d13_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d13_q3",
            "text": "3. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d13_q4",
            "text": "4. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w2d13_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d13_q6",
            "text": "6. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d13_q7",
            "text": "7. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d13_q8",
            "text": "8. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d13_q9",
            "text": "9. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d13_q10",
            "text": "10. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d13_q11",
            "text": "11. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d13_q12",
            "text": "12. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d13_q13",
            "text": "13. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d13_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d13_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d13_q16",
            "text": "16. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d13_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d13_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d13_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d13_q20",
            "text": "20. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          }
        ]
      }
    ]
  },
  {
    "id": "w2d7",
    "week": 2,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 2 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w2d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w2d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w2d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w2d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w2d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w2d14_q1",
            "text": "1. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w2d14_q2",
            "text": "2. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w2d14_q3",
            "text": "3. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w2d14_q4",
            "text": "4. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w2d14_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w2d14_q6",
            "text": "6. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w2d14_q7",
            "text": "7. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w2d14_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w2d14_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w2d14_q10",
            "text": "10. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w2d14_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w2d14_q12",
            "text": "12. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w2d14_q13",
            "text": "13. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w2d14_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w2d14_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w2d14_q16",
            "text": "16. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w2d14_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w2d14_q18",
            "text": "18. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w2d14_q19",
            "text": "19. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w2d14_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d1",
    "week": 3,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w3d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w3d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w3d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w3d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w3d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d15_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d15_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d15_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d15_q4",
            "text": "4. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d15_q5",
            "text": "5. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d15_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d15_q7",
            "text": "7. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d15_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d15_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w3d15_q10",
            "text": "10. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d15_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d15_q12",
            "text": "12. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d15_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d15_q14",
            "text": "14. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d15_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d15_q16",
            "text": "16. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d15_q17",
            "text": "17. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d15_q18",
            "text": "18. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d15_q19",
            "text": "19. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d15_q20",
            "text": "20. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d2",
    "week": 3,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w3d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w3d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w3d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w3d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w3d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d16_q1",
            "text": "1. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d16_q2",
            "text": "2. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d16_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w3d16_q4",
            "text": "4. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d16_q5",
            "text": "5. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d16_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d16_q7",
            "text": "7. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d16_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d16_q9",
            "text": "9. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d16_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d16_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d16_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d16_q13",
            "text": "13. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d16_q14",
            "text": "14. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d16_q15",
            "text": "15. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d16_q16",
            "text": "16. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d16_q17",
            "text": "17. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d16_q18",
            "text": "18. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d16_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d16_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d3",
    "week": 3,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w3d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w3d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w3d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w3d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w3d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d17_q1",
            "text": "1. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d17_q2",
            "text": "2. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d17_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d17_q4",
            "text": "4. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d17_q5",
            "text": "5. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d17_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d17_q7",
            "text": "7. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d17_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d17_q9",
            "text": "9. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d17_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d17_q11",
            "text": "11. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d17_q12",
            "text": "12. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d17_q13",
            "text": "13. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d17_q14",
            "text": "14. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d17_q15",
            "text": "15. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d17_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d17_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d17_q18",
            "text": "18. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d17_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d17_q20",
            "text": "20. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d4",
    "week": 3,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w3d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w3d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w3d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w3d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w3d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d18_q1",
            "text": "1. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d18_q2",
            "text": "2. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d18_q3",
            "text": "3. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d18_q4",
            "text": "4. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d18_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d18_q6",
            "text": "6. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d18_q7",
            "text": "7. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d18_q8",
            "text": "8. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d18_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d18_q10",
            "text": "10. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d18_q11",
            "text": "11. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d18_q12",
            "text": "12. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d18_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w3d18_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d18_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d18_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d18_q17",
            "text": "17. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d18_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d18_q19",
            "text": "19. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d18_q20",
            "text": "20. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d5",
    "week": 3,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w3d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w3d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w3d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w3d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w3d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d19_q1",
            "text": "1. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w3d19_q2",
            "text": "2. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d19_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d19_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d19_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d19_q6",
            "text": "6. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d19_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d19_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d19_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d19_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d19_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d19_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d19_q13",
            "text": "13. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d19_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d19_q15",
            "text": "15. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d19_q16",
            "text": "16. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d19_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d19_q18",
            "text": "18. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d19_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d19_q20",
            "text": "20. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d6",
    "week": 3,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w3d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w3d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w3d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w3d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w3d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d20_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d20_q2",
            "text": "2. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d20_q3",
            "text": "3. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d20_q4",
            "text": "4. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d20_q5",
            "text": "5. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d20_q6",
            "text": "6. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d20_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d20_q8",
            "text": "8. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d20_q9",
            "text": "9. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d20_q10",
            "text": "10. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w3d20_q11",
            "text": "11. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d20_q12",
            "text": "12. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d20_q13",
            "text": "13. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d20_q14",
            "text": "14. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d20_q15",
            "text": "15. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d20_q16",
            "text": "16. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d20_q17",
            "text": "17. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d20_q18",
            "text": "18. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d20_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d20_q20",
            "text": "20. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w3d7",
    "week": 3,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 3 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w3d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w3d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w3d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w3d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w3d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w3d21_q1",
            "text": "1. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w3d21_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w3d21_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w3d21_q4",
            "text": "4. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w3d21_q5",
            "text": "5. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w3d21_q6",
            "text": "6. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w3d21_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w3d21_q8",
            "text": "8. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w3d21_q9",
            "text": "9. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w3d21_q10",
            "text": "10. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w3d21_q11",
            "text": "11. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w3d21_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w3d21_q13",
            "text": "13. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w3d21_q14",
            "text": "14. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w3d21_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w3d21_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w3d21_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w3d21_q18",
            "text": "18. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w3d21_q19",
            "text": "19. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w3d21_q20",
            "text": "20. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d1",
    "week": 4,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w4d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w4d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w4d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w4d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w4d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d22_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d22_q2",
            "text": "2. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d22_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d22_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d22_q5",
            "text": "5. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d22_q6",
            "text": "6. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d22_q7",
            "text": "7. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d22_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d22_q9",
            "text": "9. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d22_q10",
            "text": "10. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d22_q11",
            "text": "11. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d22_q12",
            "text": "12. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d22_q13",
            "text": "13. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d22_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d22_q15",
            "text": "15. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d22_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d22_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d22_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d22_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d22_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d2",
    "week": 4,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w4d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w4d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w4d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w4d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w4d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d23_q1",
            "text": "1. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d23_q2",
            "text": "2. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d23_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d23_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d23_q5",
            "text": "5. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d23_q6",
            "text": "6. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d23_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d23_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d23_q9",
            "text": "9. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d23_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d23_q11",
            "text": "11. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d23_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d23_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d23_q14",
            "text": "14. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d23_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w4d23_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d23_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d23_q18",
            "text": "18. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d23_q19",
            "text": "19. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d23_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d3",
    "week": 4,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w4d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w4d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w4d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w4d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w4d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d24_q1",
            "text": "1. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d24_q2",
            "text": "2. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d24_q3",
            "text": "3. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d24_q4",
            "text": "4. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d24_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d24_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d24_q7",
            "text": "7. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d24_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d24_q9",
            "text": "9. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d24_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d24_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d24_q12",
            "text": "12. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d24_q13",
            "text": "13. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d24_q14",
            "text": "14. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d24_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w4d24_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d24_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d24_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d24_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d24_q20",
            "text": "20. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d4",
    "week": 4,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w4d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w4d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w4d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w4d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w4d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d25_q1",
            "text": "1. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d25_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d25_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d25_q4",
            "text": "4. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d25_q5",
            "text": "5. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d25_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d25_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d25_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d25_q9",
            "text": "9. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d25_q10",
            "text": "10. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d25_q11",
            "text": "11. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d25_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d25_q13",
            "text": "13. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d25_q14",
            "text": "14. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d25_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d25_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d25_q17",
            "text": "17. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d25_q18",
            "text": "18. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d25_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d25_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d5",
    "week": 4,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w4d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w4d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w4d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w4d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w4d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d26_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d26_q2",
            "text": "2. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d26_q3",
            "text": "3. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d26_q4",
            "text": "4. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d26_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d26_q6",
            "text": "6. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d26_q7",
            "text": "7. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d26_q8",
            "text": "8. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d26_q9",
            "text": "9. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d26_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d26_q11",
            "text": "11. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d26_q12",
            "text": "12. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d26_q13",
            "text": "13. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d26_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d26_q15",
            "text": "15. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d26_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d26_q17",
            "text": "17. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d26_q18",
            "text": "18. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d26_q19",
            "text": "19. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d26_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d6",
    "week": 4,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w4d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w4d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w4d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w4d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w4d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d27_q1",
            "text": "1. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d27_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d27_q3",
            "text": "3. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d27_q4",
            "text": "4. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d27_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d27_q6",
            "text": "6. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d27_q7",
            "text": "7. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d27_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w4d27_q9",
            "text": "9. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d27_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d27_q11",
            "text": "11. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d27_q12",
            "text": "12. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d27_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d27_q14",
            "text": "14. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d27_q15",
            "text": "15. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d27_q16",
            "text": "16. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d27_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d27_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d27_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w4d27_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w4d7",
    "week": 4,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 4 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w4d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w4d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w4d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w4d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w4d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w4d28_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w4d28_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w4d28_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w4d28_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w4d28_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w4d28_q6",
            "text": "6. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w4d28_q7",
            "text": "7. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w4d28_q8",
            "text": "8. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w4d28_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w4d28_q10",
            "text": "10. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w4d28_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w4d28_q12",
            "text": "12. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w4d28_q13",
            "text": "13. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w4d28_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w4d28_q15",
            "text": "15. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w4d28_q16",
            "text": "16. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w4d28_q17",
            "text": "17. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w4d28_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w4d28_q19",
            "text": "19. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w4d28_q20",
            "text": "20. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d1",
    "week": 5,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w5d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w5d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w5d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w5d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w5d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d29_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d29_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d29_q3",
            "text": "3. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d29_q4",
            "text": "4. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d29_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d29_q6",
            "text": "6. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d29_q7",
            "text": "7. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d29_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d29_q9",
            "text": "9. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d29_q10",
            "text": "10. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d29_q11",
            "text": "11. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d29_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d29_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d29_q14",
            "text": "14. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d29_q15",
            "text": "15. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d29_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d29_q17",
            "text": "17. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d29_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d29_q19",
            "text": "19. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d29_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d2",
    "week": 5,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w5d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w5d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w5d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w5d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w5d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d30_q1",
            "text": "1. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d30_q2",
            "text": "2. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d30_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d30_q4",
            "text": "4. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d30_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d30_q6",
            "text": "6. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d30_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d30_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d30_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d30_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d30_q11",
            "text": "11. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d30_q12",
            "text": "12. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d30_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d30_q14",
            "text": "14. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d30_q15",
            "text": "15. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d30_q16",
            "text": "16. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d30_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d30_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d30_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d30_q20",
            "text": "20. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d3",
    "week": 5,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w5d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w5d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w5d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w5d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w5d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d31_q1",
            "text": "1. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d31_q2",
            "text": "2. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d31_q3",
            "text": "3. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d31_q4",
            "text": "4. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d31_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d31_q6",
            "text": "6. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d31_q7",
            "text": "7. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d31_q8",
            "text": "8. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d31_q9",
            "text": "9. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d31_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d31_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d31_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d31_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d31_q14",
            "text": "14. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d31_q15",
            "text": "15. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d31_q16",
            "text": "16. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d31_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d31_q18",
            "text": "18. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d31_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d31_q20",
            "text": "20. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d4",
    "week": 5,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w5d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w5d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w5d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w5d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w5d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d32_q1",
            "text": "1. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d32_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d32_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d32_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d32_q5",
            "text": "5. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d32_q6",
            "text": "6. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d32_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d32_q8",
            "text": "8. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d32_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d32_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d32_q11",
            "text": "11. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d32_q12",
            "text": "12. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d32_q13",
            "text": "13. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d32_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d32_q15",
            "text": "15. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d32_q16",
            "text": "16. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d32_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d32_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d32_q19",
            "text": "19. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d32_q20",
            "text": "20. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d5",
    "week": 5,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w5d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w5d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w5d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w5d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w5d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d33_q1",
            "text": "1. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d33_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d33_q3",
            "text": "3. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d33_q4",
            "text": "4. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d33_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d33_q6",
            "text": "6. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d33_q7",
            "text": "7. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d33_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d33_q9",
            "text": "9. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d33_q10",
            "text": "10. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d33_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d33_q12",
            "text": "12. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d33_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d33_q14",
            "text": "14. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d33_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d33_q16",
            "text": "16. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d33_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d33_q18",
            "text": "18. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d33_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d33_q20",
            "text": "20. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d6",
    "week": 5,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w5d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w5d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w5d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w5d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w5d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d34_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d34_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d34_q3",
            "text": "3. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d34_q4",
            "text": "4. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d34_q5",
            "text": "5. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d34_q6",
            "text": "6. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d34_q7",
            "text": "7. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d34_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d34_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w5d34_q10",
            "text": "10. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d34_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d34_q12",
            "text": "12. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d34_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d34_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d34_q15",
            "text": "15. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d34_q16",
            "text": "16. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d34_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d34_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d34_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d34_q20",
            "text": "20. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          }
        ]
      }
    ]
  },
  {
    "id": "w5d7",
    "week": 5,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 5 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w5d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w5d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w5d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w5d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w5d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w5d35_q1",
            "text": "1. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w5d35_q2",
            "text": "2. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w5d35_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w5d35_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w5d35_q5",
            "text": "5. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w5d35_q6",
            "text": "6. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w5d35_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w5d35_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w5d35_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w5d35_q10",
            "text": "10. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w5d35_q11",
            "text": "11. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w5d35_q12",
            "text": "12. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w5d35_q13",
            "text": "13. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w5d35_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w5d35_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w5d35_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w5d35_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w5d35_q18",
            "text": "18. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w5d35_q19",
            "text": "19. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w5d35_q20",
            "text": "20. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d1",
    "week": 6,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w6d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w6d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w6d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w6d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w6d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d36_q1",
            "text": "1. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d36_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d36_q3",
            "text": "3. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d36_q4",
            "text": "4. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d36_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d36_q6",
            "text": "6. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d36_q7",
            "text": "7. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d36_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d36_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w6d36_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d36_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d36_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d36_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d36_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d36_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d36_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d36_q17",
            "text": "17. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d36_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d36_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d36_q20",
            "text": "20. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d2",
    "week": 6,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w6d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w6d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w6d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w6d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w6d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d37_q1",
            "text": "1. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d37_q2",
            "text": "2. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d37_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d37_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d37_q5",
            "text": "5. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d37_q6",
            "text": "6. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d37_q7",
            "text": "7. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d37_q8",
            "text": "8. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d37_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d37_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d37_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d37_q12",
            "text": "12. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d37_q13",
            "text": "13. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d37_q14",
            "text": "14. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d37_q15",
            "text": "15. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d37_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d37_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d37_q18",
            "text": "18. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d37_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d37_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d3",
    "week": 6,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w6d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w6d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w6d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w6d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w6d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d38_q1",
            "text": "1. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d38_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d38_q3",
            "text": "3. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d38_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d38_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d38_q6",
            "text": "6. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d38_q7",
            "text": "7. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d38_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d38_q9",
            "text": "9. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d38_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d38_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d38_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d38_q13",
            "text": "13. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w6d38_q14",
            "text": "14. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d38_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d38_q16",
            "text": "16. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d38_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d38_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d38_q19",
            "text": "19. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d38_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d4",
    "week": 6,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w6d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w6d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w6d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w6d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w6d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d39_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d39_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d39_q3",
            "text": "3. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d39_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d39_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d39_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d39_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d39_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d39_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d39_q10",
            "text": "10. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d39_q11",
            "text": "11. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d39_q12",
            "text": "12. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d39_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d39_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d39_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d39_q16",
            "text": "16. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d39_q17",
            "text": "17. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d39_q18",
            "text": "18. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d39_q19",
            "text": "19. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d39_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d5",
    "week": 6,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w6d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w6d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w6d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w6d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w6d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d40_q1",
            "text": "1. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d40_q2",
            "text": "2. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d40_q3",
            "text": "3. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d40_q4",
            "text": "4. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d40_q5",
            "text": "5. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d40_q6",
            "text": "6. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d40_q7",
            "text": "7. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w6d40_q8",
            "text": "8. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d40_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d40_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d40_q11",
            "text": "11. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d40_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d40_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d40_q14",
            "text": "14. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d40_q15",
            "text": "15. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d40_q16",
            "text": "16. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d40_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d40_q18",
            "text": "18. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d40_q19",
            "text": "19. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d40_q20",
            "text": "20. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d6",
    "week": 6,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w6d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w6d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w6d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w6d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w6d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d41_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d41_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d41_q3",
            "text": "3. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d41_q4",
            "text": "4. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d41_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d41_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d41_q7",
            "text": "7. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d41_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d41_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d41_q10",
            "text": "10. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d41_q11",
            "text": "11. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w6d41_q12",
            "text": "12. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d41_q13",
            "text": "13. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d41_q14",
            "text": "14. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d41_q15",
            "text": "15. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d41_q16",
            "text": "16. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d41_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w6d41_q18",
            "text": "18. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d41_q19",
            "text": "19. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d41_q20",
            "text": "20. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          }
        ]
      }
    ]
  },
  {
    "id": "w6d7",
    "week": 6,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 6 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w6d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w6d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w6d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w6d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w6d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w6d42_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w6d42_q2",
            "text": "2. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w6d42_q3",
            "text": "3. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w6d42_q4",
            "text": "4. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w6d42_q5",
            "text": "5. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w6d42_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w6d42_q7",
            "text": "7. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w6d42_q8",
            "text": "8. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w6d42_q9",
            "text": "9. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w6d42_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w6d42_q11",
            "text": "11. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w6d42_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w6d42_q13",
            "text": "13. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w6d42_q14",
            "text": "14. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w6d42_q15",
            "text": "15. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w6d42_q16",
            "text": "16. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w6d42_q17",
            "text": "17. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w6d42_q18",
            "text": "18. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w6d42_q19",
            "text": "19. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w6d42_q20",
            "text": "20. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d1",
    "week": 7,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w7d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w7d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w7d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w7d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w7d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d43_q1",
            "text": "1. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d43_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d43_q3",
            "text": "3. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d43_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d43_q5",
            "text": "5. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d43_q6",
            "text": "6. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d43_q7",
            "text": "7. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d43_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d43_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d43_q10",
            "text": "10. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d43_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d43_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d43_q13",
            "text": "13. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d43_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d43_q15",
            "text": "15. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d43_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d43_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d43_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d43_q19",
            "text": "19. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d43_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d2",
    "week": 7,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w7d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w7d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w7d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w7d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w7d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d44_q1",
            "text": "1. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d44_q2",
            "text": "2. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d44_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d44_q4",
            "text": "4. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d44_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d44_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d44_q7",
            "text": "7. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d44_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d44_q9",
            "text": "9. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d44_q10",
            "text": "10. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d44_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d44_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d44_q13",
            "text": "13. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d44_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d44_q15",
            "text": "15. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d44_q16",
            "text": "16. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d44_q17",
            "text": "17. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d44_q18",
            "text": "18. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d44_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d44_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d3",
    "week": 7,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w7d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w7d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w7d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w7d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w7d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d45_q1",
            "text": "1. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d45_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d45_q3",
            "text": "3. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d45_q4",
            "text": "4. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d45_q5",
            "text": "5. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d45_q6",
            "text": "6. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d45_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d45_q8",
            "text": "8. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d45_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d45_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d45_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d45_q12",
            "text": "12. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w7d45_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d45_q14",
            "text": "14. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d45_q15",
            "text": "15. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d45_q16",
            "text": "16. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d45_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d45_q18",
            "text": "18. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d45_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d45_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d4",
    "week": 7,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w7d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w7d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w7d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w7d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w7d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d46_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d46_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d46_q3",
            "text": "3. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w7d46_q4",
            "text": "4. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d46_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d46_q6",
            "text": "6. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d46_q7",
            "text": "7. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d46_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d46_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d46_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d46_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d46_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d46_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d46_q14",
            "text": "14. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d46_q15",
            "text": "15. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d46_q16",
            "text": "16. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d46_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d46_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d46_q19",
            "text": "19. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d46_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d5",
    "week": 7,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w7d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w7d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w7d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w7d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w7d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d47_q1",
            "text": "1. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d47_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d47_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d47_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d47_q5",
            "text": "5. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d47_q6",
            "text": "6. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w7d47_q7",
            "text": "7. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d47_q8",
            "text": "8. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d47_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d47_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d47_q11",
            "text": "11. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d47_q12",
            "text": "12. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d47_q13",
            "text": "13. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d47_q14",
            "text": "14. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d47_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d47_q16",
            "text": "16. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d47_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d47_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d47_q19",
            "text": "19. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d47_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d6",
    "week": 7,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w7d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w7d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w7d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w7d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w7d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d48_q1",
            "text": "1. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w7d48_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d48_q3",
            "text": "3. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d48_q4",
            "text": "4. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d48_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d48_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d48_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d48_q8",
            "text": "8. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d48_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d48_q10",
            "text": "10. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d48_q11",
            "text": "11. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d48_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d48_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d48_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d48_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d48_q16",
            "text": "16. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d48_q17",
            "text": "17. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d48_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d48_q19",
            "text": "19. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d48_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w7d7",
    "week": 7,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 7 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w7d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w7d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w7d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w7d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w7d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w7d49_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w7d49_q2",
            "text": "2. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w7d49_q3",
            "text": "3. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w7d49_q4",
            "text": "4. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w7d49_q5",
            "text": "5. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w7d49_q6",
            "text": "6. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w7d49_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w7d49_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w7d49_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w7d49_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w7d49_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w7d49_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w7d49_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w7d49_q14",
            "text": "14. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w7d49_q15",
            "text": "15. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w7d49_q16",
            "text": "16. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w7d49_q17",
            "text": "17. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w7d49_q18",
            "text": "18. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w7d49_q19",
            "text": "19. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w7d49_q20",
            "text": "20. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d1",
    "week": 8,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w8d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w8d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w8d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w8d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w8d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d50_q1",
            "text": "1. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d50_q2",
            "text": "2. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d50_q3",
            "text": "3. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d50_q4",
            "text": "4. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d50_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d50_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d50_q7",
            "text": "7. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d50_q8",
            "text": "8. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d50_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d50_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d50_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d50_q12",
            "text": "12. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d50_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d50_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d50_q15",
            "text": "15. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d50_q16",
            "text": "16. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d50_q17",
            "text": "17. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d50_q18",
            "text": "18. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d50_q19",
            "text": "19. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d50_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d2",
    "week": 8,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w8d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w8d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w8d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w8d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w8d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d51_q1",
            "text": "1. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d51_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d51_q3",
            "text": "3. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d51_q4",
            "text": "4. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d51_q5",
            "text": "5. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d51_q6",
            "text": "6. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d51_q7",
            "text": "7. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d51_q8",
            "text": "8. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d51_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d51_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d51_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d51_q12",
            "text": "12. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d51_q13",
            "text": "13. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d51_q14",
            "text": "14. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d51_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d51_q16",
            "text": "16. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d51_q17",
            "text": "17. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d51_q18",
            "text": "18. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d51_q19",
            "text": "19. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d51_q20",
            "text": "20. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d3",
    "week": 8,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w8d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w8d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w8d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w8d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w8d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d52_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d52_q2",
            "text": "2. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d52_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d52_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d52_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d52_q6",
            "text": "6. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d52_q7",
            "text": "7. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d52_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d52_q9",
            "text": "9. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d52_q10",
            "text": "10. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d52_q11",
            "text": "11. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d52_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d52_q13",
            "text": "13. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d52_q14",
            "text": "14. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d52_q15",
            "text": "15. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d52_q16",
            "text": "16. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d52_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d52_q18",
            "text": "18. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d52_q19",
            "text": "19. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d52_q20",
            "text": "20. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d4",
    "week": 8,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w8d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w8d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w8d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w8d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w8d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d53_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d53_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d53_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d53_q4",
            "text": "4. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d53_q5",
            "text": "5. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d53_q6",
            "text": "6. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d53_q7",
            "text": "7. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d53_q8",
            "text": "8. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d53_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d53_q10",
            "text": "10. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d53_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d53_q12",
            "text": "12. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d53_q13",
            "text": "13. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d53_q14",
            "text": "14. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d53_q15",
            "text": "15. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d53_q16",
            "text": "16. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d53_q17",
            "text": "17. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d53_q18",
            "text": "18. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d53_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d53_q20",
            "text": "20. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d5",
    "week": 8,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w8d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w8d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w8d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w8d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w8d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d54_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d54_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d54_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d54_q4",
            "text": "4. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d54_q5",
            "text": "5. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d54_q6",
            "text": "6. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d54_q7",
            "text": "7. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d54_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d54_q9",
            "text": "9. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d54_q10",
            "text": "10. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d54_q11",
            "text": "11. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d54_q12",
            "text": "12. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d54_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d54_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d54_q15",
            "text": "15. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d54_q16",
            "text": "16. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d54_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d54_q18",
            "text": "18. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d54_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d54_q20",
            "text": "20. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d6",
    "week": 8,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w8d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w8d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w8d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w8d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w8d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d55_q1",
            "text": "1. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d55_q2",
            "text": "2. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d55_q3",
            "text": "3. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d55_q4",
            "text": "4. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d55_q5",
            "text": "5. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d55_q6",
            "text": "6. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d55_q7",
            "text": "7. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d55_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d55_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d55_q10",
            "text": "10. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d55_q11",
            "text": "11. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d55_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d55_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d55_q14",
            "text": "14. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d55_q15",
            "text": "15. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d55_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w8d55_q17",
            "text": "17. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d55_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d55_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d55_q20",
            "text": "20. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          }
        ]
      }
    ]
  },
  {
    "id": "w8d7",
    "week": 8,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 8 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w8d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w8d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w8d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w8d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w8d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w8d56_q1",
            "text": "1. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w8d56_q2",
            "text": "2. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w8d56_q3",
            "text": "3. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w8d56_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w8d56_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w8d56_q6",
            "text": "6. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w8d56_q7",
            "text": "7. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w8d56_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w8d56_q9",
            "text": "9. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w8d56_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w8d56_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w8d56_q12",
            "text": "12. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w8d56_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w8d56_q14",
            "text": "14. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w8d56_q15",
            "text": "15. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w8d56_q16",
            "text": "16. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w8d56_q17",
            "text": "17. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w8d56_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w8d56_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w8d56_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d1",
    "week": 9,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w9d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w9d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w9d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w9d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w9d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d57_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d57_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w9d57_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d57_q4",
            "text": "4. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d57_q5",
            "text": "5. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d57_q6",
            "text": "6. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d57_q7",
            "text": "7. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d57_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d57_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d57_q10",
            "text": "10. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d57_q11",
            "text": "11. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d57_q12",
            "text": "12. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d57_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d57_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d57_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d57_q16",
            "text": "16. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d57_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d57_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d57_q19",
            "text": "19. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d57_q20",
            "text": "20. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d2",
    "week": 9,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w9d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w9d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w9d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w9d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w9d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d58_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d58_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d58_q3",
            "text": "3. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d58_q4",
            "text": "4. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d58_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d58_q6",
            "text": "6. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d58_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d58_q8",
            "text": "8. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d58_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d58_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d58_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d58_q12",
            "text": "12. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d58_q13",
            "text": "13. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w9d58_q14",
            "text": "14. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d58_q15",
            "text": "15. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d58_q16",
            "text": "16. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d58_q17",
            "text": "17. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d58_q18",
            "text": "18. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d58_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d58_q20",
            "text": "20. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d3",
    "week": 9,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w9d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w9d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w9d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w9d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w9d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d59_q1",
            "text": "1. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d59_q2",
            "text": "2. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d59_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d59_q4",
            "text": "4. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d59_q5",
            "text": "5. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d59_q6",
            "text": "6. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d59_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d59_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d59_q9",
            "text": "9. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d59_q10",
            "text": "10. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d59_q11",
            "text": "11. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d59_q12",
            "text": "12. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d59_q13",
            "text": "13. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d59_q14",
            "text": "14. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d59_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d59_q16",
            "text": "16. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d59_q17",
            "text": "17. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d59_q18",
            "text": "18. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d59_q19",
            "text": "19. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d59_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d4",
    "week": 9,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w9d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w9d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w9d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w9d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w9d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d60_q1",
            "text": "1. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d60_q2",
            "text": "2. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d60_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d60_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d60_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d60_q6",
            "text": "6. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d60_q7",
            "text": "7. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d60_q8",
            "text": "8. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d60_q9",
            "text": "9. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d60_q10",
            "text": "10. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d60_q11",
            "text": "11. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d60_q12",
            "text": "12. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d60_q13",
            "text": "13. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d60_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d60_q15",
            "text": "15. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d60_q16",
            "text": "16. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d60_q17",
            "text": "17. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d60_q18",
            "text": "18. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d60_q19",
            "text": "19. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d60_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d5",
    "week": 9,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w9d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w9d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w9d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w9d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w9d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d61_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d61_q2",
            "text": "2. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d61_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d61_q4",
            "text": "4. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d61_q5",
            "text": "5. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d61_q6",
            "text": "6. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d61_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d61_q8",
            "text": "8. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d61_q9",
            "text": "9. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d61_q10",
            "text": "10. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d61_q11",
            "text": "11. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d61_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d61_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d61_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d61_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d61_q16",
            "text": "16. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d61_q17",
            "text": "17. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w9d61_q18",
            "text": "18. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d61_q19",
            "text": "19. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d61_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d6",
    "week": 9,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w9d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w9d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w9d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w9d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w9d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d62_q1",
            "text": "1. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d62_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d62_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d62_q4",
            "text": "4. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d62_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d62_q6",
            "text": "6. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d62_q7",
            "text": "7. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d62_q8",
            "text": "8. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d62_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d62_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d62_q11",
            "text": "11. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w9d62_q12",
            "text": "12. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d62_q13",
            "text": "13. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d62_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d62_q15",
            "text": "15. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d62_q16",
            "text": "16. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d62_q17",
            "text": "17. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d62_q18",
            "text": "18. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d62_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d62_q20",
            "text": "20. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          }
        ]
      }
    ]
  },
  {
    "id": "w9d7",
    "week": 9,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 9 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w9d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w9d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w9d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w9d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w9d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w9d63_q1",
            "text": "1. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w9d63_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w9d63_q3",
            "text": "3. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w9d63_q4",
            "text": "4. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w9d63_q5",
            "text": "5. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w9d63_q6",
            "text": "6. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w9d63_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w9d63_q8",
            "text": "8. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w9d63_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w9d63_q10",
            "text": "10. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w9d63_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w9d63_q12",
            "text": "12. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w9d63_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w9d63_q14",
            "text": "14. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w9d63_q15",
            "text": "15. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w9d63_q16",
            "text": "16. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w9d63_q17",
            "text": "17. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w9d63_q18",
            "text": "18. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w9d63_q19",
            "text": "19. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w9d63_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d1",
    "week": 10,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w10d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w10d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w10d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w10d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w10d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d64_q1",
            "text": "1. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w10d64_q2",
            "text": "2. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d64_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d64_q4",
            "text": "4. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d64_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d64_q6",
            "text": "6. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d64_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d64_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d64_q9",
            "text": "9. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d64_q10",
            "text": "10. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d64_q11",
            "text": "11. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d64_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d64_q13",
            "text": "13. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d64_q14",
            "text": "14. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d64_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d64_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d64_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d64_q18",
            "text": "18. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d64_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d64_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d2",
    "week": 10,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w10d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w10d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w10d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w10d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w10d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d65_q1",
            "text": "1. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d65_q2",
            "text": "2. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d65_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d65_q4",
            "text": "4. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d65_q5",
            "text": "5. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d65_q6",
            "text": "6. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w10d65_q7",
            "text": "7. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d65_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d65_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d65_q10",
            "text": "10. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d65_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d65_q12",
            "text": "12. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d65_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d65_q14",
            "text": "14. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d65_q15",
            "text": "15. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d65_q16",
            "text": "16. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d65_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d65_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d65_q19",
            "text": "19. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d65_q20",
            "text": "20. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d3",
    "week": 10,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w10d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w10d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w10d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w10d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w10d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d66_q1",
            "text": "1. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d66_q2",
            "text": "2. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d66_q3",
            "text": "3. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d66_q4",
            "text": "4. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d66_q5",
            "text": "5. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d66_q6",
            "text": "6. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d66_q7",
            "text": "7. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d66_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d66_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d66_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d66_q11",
            "text": "11. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d66_q12",
            "text": "12. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d66_q13",
            "text": "13. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d66_q14",
            "text": "14. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d66_q15",
            "text": "15. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d66_q16",
            "text": "16. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d66_q17",
            "text": "17. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w10d66_q18",
            "text": "18. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d66_q19",
            "text": "19. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d66_q20",
            "text": "20. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d4",
    "week": 10,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w10d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w10d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w10d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w10d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w10d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d67_q1",
            "text": "1. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d67_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d67_q3",
            "text": "3. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d67_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d67_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d67_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d67_q7",
            "text": "7. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d67_q8",
            "text": "8. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d67_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d67_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d67_q11",
            "text": "11. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d67_q12",
            "text": "12. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d67_q13",
            "text": "13. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d67_q14",
            "text": "14. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d67_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d67_q16",
            "text": "16. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d67_q17",
            "text": "17. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d67_q18",
            "text": "18. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d67_q19",
            "text": "19. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d67_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d5",
    "week": 10,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w10d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w10d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w10d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w10d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w10d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d68_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d68_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d68_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d68_q4",
            "text": "4. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d68_q5",
            "text": "5. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d68_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d68_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d68_q8",
            "text": "8. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d68_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d68_q10",
            "text": "10. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d68_q11",
            "text": "11. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d68_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d68_q13",
            "text": "13. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d68_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d68_q15",
            "text": "15. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d68_q16",
            "text": "16. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d68_q17",
            "text": "17. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d68_q18",
            "text": "18. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d68_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d68_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d6",
    "week": 10,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w10d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w10d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w10d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w10d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w10d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d69_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d69_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d69_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w10d69_q4",
            "text": "4. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d69_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d69_q6",
            "text": "6. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d69_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d69_q8",
            "text": "8. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d69_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d69_q10",
            "text": "10. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d69_q11",
            "text": "11. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d69_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d69_q13",
            "text": "13. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d69_q14",
            "text": "14. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d69_q15",
            "text": "15. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d69_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d69_q17",
            "text": "17. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d69_q18",
            "text": "18. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d69_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w10d69_q20",
            "text": "20. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          }
        ]
      }
    ]
  },
  {
    "id": "w10d7",
    "week": 10,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 10 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w10d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w10d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w10d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w10d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w10d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w10d70_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w10d70_q2",
            "text": "2. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w10d70_q3",
            "text": "3. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w10d70_q4",
            "text": "4. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w10d70_q5",
            "text": "5. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w10d70_q6",
            "text": "6. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w10d70_q7",
            "text": "7. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w10d70_q8",
            "text": "8. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w10d70_q9",
            "text": "9. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w10d70_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w10d70_q11",
            "text": "11. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w10d70_q12",
            "text": "12. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w10d70_q13",
            "text": "13. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w10d70_q14",
            "text": "14. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w10d70_q15",
            "text": "15. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w10d70_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w10d70_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w10d70_q18",
            "text": "18. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w10d70_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w10d70_q20",
            "text": "20. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d1",
    "week": 11,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 1: Present Simple & Daily Routines",
    "topic": "Present Simple & Daily Routines",
    "explanation": "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    "commonMistake": "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.",
        "vietnameseNote": "He/She/It + V(s/es)"
      }
    ],
    "exercises": [
      {
        "id": "w11d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
        "audioText": "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM."
      },
      {
        "id": "w11d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
        "questions": [
          {
            "id": "w11d1_rq1",
            "text": "What does John usually do right after waking up?",
            "options": [
              "He catches the bus to work.",
              "He drinks hot coffee and goes for a jog.",
              "He takes a shower and eats oatmeal.",
              "He attends a daily meeting at 9:00 AM."
            ],
            "correctAnswer": "He drinks hot coffee and goes for a jog.",
            "explanation": "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
          },
          {
            "id": "w11d1_rq2",
            "text": "Why does John avoid looking at screens before bed?",
            "options": [
              "Because he wants to save electricity.",
              "Because he prefers reading books or watching documentaries.",
              "Because he wants to feel ready for the next day.",
              "Because his job as a software engineer is demanding."
            ],
            "correctAnswer": "Because he wants to feel ready for the next day.",
            "explanation": "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
          }
        ]
      },
      {
        "id": "w11d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d71_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d71_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d71_q3",
            "text": "3. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d71_q4",
            "text": "4. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d71_q5",
            "text": "5. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d71_q6",
            "text": "6. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d71_q7",
            "text": "7. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d71_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w11d71_q9",
            "text": "9. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d71_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d71_q11",
            "text": "11. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d71_q12",
            "text": "12. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d71_q13",
            "text": "13. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d71_q14",
            "text": "14. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d71_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d71_q16",
            "text": "16. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d71_q17",
            "text": "17. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d71_q18",
            "text": "18. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d71_q19",
            "text": "19. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d71_q20",
            "text": "20. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d2",
    "week": 11,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 2: Present Continuous & Current Actions",
    "topic": "Present Continuous & Current Actions",
    "explanation": "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    "commonMistake": "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).",
        "vietnameseNote": "Luôn nhớ: To be + V-ing"
      }
    ],
    "exercises": [
      {
        "id": "w11d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
        "audioText": "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together."
      },
      {
        "id": "w11d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
        "questions": [
          {
            "id": "w11d2_rq1",
            "text": "What is Sarah doing right now?",
            "options": [
              "She is writing the backend code.",
              "She is testing the application for bugs.",
              "She is designing the user interface.",
              "She is tracking her fitness goals."
            ],
            "correctAnswer": "She is designing the user interface.",
            "explanation": "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
          },
          {
            "id": "w11d2_rq2",
            "text": "Why are the team members enjoying the process despite the pressure?",
            "options": [
              "Because they are getting paid a lot of money.",
              "Because they believe the app will make a big difference.",
              "Because they are working in a quiet and peaceful office.",
              "Because the deadline is still very far away."
            ],
            "correctAnswer": "Because they believe the app will make a big difference.",
            "explanation": "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
          }
        ]
      },
      {
        "id": "w11d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d72_q1",
            "text": "1. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d72_q2",
            "text": "2. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d72_q3",
            "text": "3. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d72_q4",
            "text": "4. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d72_q5",
            "text": "5. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d72_q6",
            "text": "6. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d72_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d72_q8",
            "text": "8. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d72_q9",
            "text": "9. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d72_q10",
            "text": "10. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w11d72_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d72_q12",
            "text": "12. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d72_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d72_q14",
            "text": "14. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d72_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d72_q16",
            "text": "16. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d72_q17",
            "text": "17. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d72_q18",
            "text": "18. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d72_q19",
            "text": "19. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d72_q20",
            "text": "20. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d3",
    "week": 11,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 3: Past Simple & Past Events",
    "topic": "Past Simple & Past Events",
    "explanation": "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    "commonMistake": "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.",
        "vietnameseNote": "Did/Didn't + V(nguyên thể)"
      }
    ],
    "exercises": [
      {
        "id": "w11d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
        "audioText": "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day."
      },
      {
        "id": "w11d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
        "questions": [
          {
            "id": "w11d3_rq1",
            "text": "How long did the journey to the mountains take?",
            "options": [
              "It took two hours by train.",
              "It took four hours by car.",
              "It took a whole day by bus.",
              "It took four hours on foot."
            ],
            "correctAnswer": "It took four hours by car.",
            "explanation": "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
          },
          {
            "id": "w11d3_rq2",
            "text": "Why was having no internet connection considered a 'blessing in disguise'?",
            "options": [
              "Because they didn't have to pay for Wi-Fi.",
              "Because it allowed them to disconnect and spend quality time together.",
              "Because they could play online games without lag.",
              "Because the internet in the mountains is usually very slow."
            ],
            "correctAnswer": "Because it allowed them to disconnect and spend quality time together.",
            "explanation": "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
          }
        ]
      },
      {
        "id": "w11d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d73_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d73_q2",
            "text": "2. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d73_q3",
            "text": "3. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d73_q4",
            "text": "4. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d73_q5",
            "text": "5. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d73_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d73_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d73_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d73_q9",
            "text": "9. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d73_q10",
            "text": "10. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d73_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d73_q12",
            "text": "12. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d73_q13",
            "text": "13. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d73_q14",
            "text": "14. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d73_q15",
            "text": "15. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d73_q16",
            "text": "16. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d73_q17",
            "text": "17. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d73_q18",
            "text": "18. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d73_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d73_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d4",
    "week": 11,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 4: Past Continuous & Interrupted Actions",
    "topic": "Past Continuous & Interrupted Actions",
    "explanation": "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    "commonMistake": "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).",
        "vietnameseNote": "While + Quá khứ tiếp diễn, Quá khứ đơn"
      }
    ],
    "exercises": [
      {
        "id": "w11d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
        "audioText": "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour."
      },
      {
        "id": "w11d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
        "questions": [
          {
            "id": "w11d4_rq1",
            "text": "What was the narrator doing when the lights went out?",
            "options": [
              "The narrator was sleeping on the rug.",
              "The narrator was opening the back door.",
              "The narrator was reading a mystery novel.",
              "The narrator was trying to find a phone."
            ],
            "correctAnswer": "The narrator was reading a mystery novel.",
            "explanation": "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
          },
          {
            "id": "w11d4_rq2",
            "text": "What caused the strange noise in the kitchen?",
            "options": [
              "A burglar was trying to break in.",
              "The cat was playing with the door.",
              "The wind had blown the back door open.",
              "Someone was knocking on the window."
            ],
            "correctAnswer": "The wind had blown the back door open.",
            "explanation": "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
          }
        ]
      },
      {
        "id": "w11d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d74_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d74_q2",
            "text": "2. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d74_q3",
            "text": "3. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d74_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d74_q5",
            "text": "5. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d74_q6",
            "text": "6. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d74_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d74_q8",
            "text": "8. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d74_q9",
            "text": "9. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d74_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d74_q11",
            "text": "11. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d74_q12",
            "text": "12. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d74_q13",
            "text": "13. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w11d74_q14",
            "text": "14. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d74_q15",
            "text": "15. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d74_q16",
            "text": "16. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d74_q17",
            "text": "17. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d74_q18",
            "text": "18. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d74_q19",
            "text": "19. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d74_q20",
            "text": "20. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d5",
    "week": 11,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 5: Present Perfect & Experiences",
    "topic": "Present Perfect & Experiences",
    "explanation": "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    "commonMistake": "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.",
        "vietnameseNote": "Không dùng với yesterday, ago, last..."
      }
    ],
    "exercises": [
      {
        "id": "w11d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
        "audioText": "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places."
      },
      {
        "id": "w11d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
        "questions": [
          {
            "id": "w11d5_rq1",
            "text": "Which of the following experiences has the narrator NOT had yet?",
            "options": [
              "Walking along the Great Wall of China.",
              "Tasting authentic pasta in Italy.",
              "Visiting South America.",
              "Losing their luggage."
            ],
            "correctAnswer": "Visiting South America.",
            "explanation": "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
          },
          {
            "id": "w11d5_rq2",
            "text": "How has traveling affected the narrator?",
            "options": [
              "It has made them regret their decisions.",
              "It has broadened their horizons and changed their perspective.",
              "It has made them afraid of losing luggage.",
              "It has forced them to live in twenty different countries."
            ],
            "correctAnswer": "It has broadened their horizons and changed their perspective.",
            "explanation": "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
          }
        ]
      },
      {
        "id": "w11d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d75_q1",
            "text": "1. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d75_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d75_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d75_q4",
            "text": "4. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d75_q5",
            "text": "5. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d75_q6",
            "text": "6. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d75_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d75_q8",
            "text": "8. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d75_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d75_q10",
            "text": "10. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d75_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w11d75_q12",
            "text": "12. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d75_q13",
            "text": "13. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d75_q14",
            "text": "14. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d75_q15",
            "text": "15. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d75_q16",
            "text": "16. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d75_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d75_q18",
            "text": "18. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d75_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d75_q20",
            "text": "20. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d6",
    "week": 11,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 6: Future Simple & Predictions",
    "topic": "Future Simple & Predictions",
    "explanation": "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    "commonMistake": "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.",
        "vietnameseNote": "Will = Quyết định tức thời / Dự đoán"
      }
    ],
    "exercises": [
      {
        "id": "w11d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
        "audioText": "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day."
      },
      {
        "id": "w11d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
        "questions": [
          {
            "id": "w11d6_rq1",
            "text": "What is one mentioned benefit of technology in the workplace?",
            "options": [
              "It has completely replaced human workers.",
              "It has automated tedious tasks and increased efficiency.",
              "It has made employees work longer hours.",
              "It has eliminated the need for video conferencing."
            ],
            "correctAnswer": "It has automated tedious tasks and increased efficiency.",
            "explanation": "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
          },
          {
            "id": "w11d6_rq2",
            "text": "What is a negative impact of technology mentioned in the text?",
            "options": [
              "It makes communication too fast.",
              "It reduces the number of available jobs.",
              "It can cause eye strain and disrupt sleep patterns.",
              "It makes people forget how to write letters."
            ],
            "correctAnswer": "It can cause eye strain and disrupt sleep patterns.",
            "explanation": "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
          }
        ]
      },
      {
        "id": "w11d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d76_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w11d76_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d76_q3",
            "text": "3. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d76_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d76_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d76_q6",
            "text": "6. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d76_q7",
            "text": "7. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d76_q8",
            "text": "8. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d76_q9",
            "text": "9. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d76_q10",
            "text": "10. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d76_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d76_q12",
            "text": "12. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d76_q13",
            "text": "13. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d76_q14",
            "text": "14. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d76_q15",
            "text": "15. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d76_q16",
            "text": "16. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d76_q17",
            "text": "17. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d76_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d76_q19",
            "text": "19. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d76_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w11d7",
    "week": 11,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 11 - Day 7: Comparatives and Superlatives",
    "topic": "Comparatives and Superlatives",
    "explanation": "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    "commonMistake": "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.",
        "vietnameseNote": "Taller than / The tallest"
      }
    ],
    "exercises": [
      {
        "id": "w11d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
        "audioText": "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year."
      },
      {
        "id": "w11d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
        "questions": [
          {
            "id": "w11d7_rq1",
            "text": "According to the passage, what is one of the most effective ways to learn a language?",
            "options": [
              "Memorizing long lists of words.",
              "Studying grammar rules perfectly.",
              "Immersion, by surrounding yourself with the language.",
              "Only speaking when you are not afraid of mistakes."
            ],
            "correctAnswer": "Immersion, by surrounding yourself with the language.",
            "explanation": "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
          },
          {
            "id": "w11d7_rq2",
            "text": "How should learners build a strong vocabulary?",
            "options": [
              "By learning words in context and using spaced repetition.",
              "By reading a dictionary every day.",
              "By avoiding flashcards.",
              "By translating every single word they hear."
            ],
            "correctAnswer": "By learning words in context and using spaced repetition.",
            "explanation": "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
          }
        ]
      },
      {
        "id": "w11d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w11d77_q1",
            "text": "1. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w11d77_q2",
            "text": "2. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w11d77_q3",
            "text": "3. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w11d77_q4",
            "text": "4. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w11d77_q5",
            "text": "5. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w11d77_q6",
            "text": "6. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w11d77_q7",
            "text": "7. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w11d77_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w11d77_q9",
            "text": "9. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w11d77_q10",
            "text": "10. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w11d77_q11",
            "text": "11. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w11d77_q12",
            "text": "12. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w11d77_q13",
            "text": "13. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w11d77_q14",
            "text": "14. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w11d77_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w11d77_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w11d77_q17",
            "text": "17. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w11d77_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w11d77_q19",
            "text": "19. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w11d77_q20",
            "text": "20. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d1",
    "week": 12,
    "day": 1,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 1: Modal Verbs (Can, Could, Should, Must)",
    "topic": "Modal Verbs (Can, Could, Should, Must)",
    "explanation": "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    "commonMistake": "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).",
        "vietnameseNote": "Luôn là: Can go, Must do (Không to, không s)"
      }
    ],
    "exercises": [
      {
        "id": "w12d1_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
        "audioText": "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here."
      },
      {
        "id": "w12d1_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
        "questions": [
          {
            "id": "w12d1_rq1",
            "text": "What is a benefit of planning meals ahead of time?",
            "options": [
              "It allows you to eat more processed foods.",
              "It helps you avoid impulsive, unhealthy choices when hungry.",
              "It makes you feel more thirsty.",
              "It completely stops you from eating foods you love."
            ],
            "correctAnswer": "It helps you avoid impulsive, unhealthy choices when hungry.",
            "explanation": "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
          },
          {
            "id": "w12d1_rq2",
            "text": "Why is hydration important according to the text?",
            "options": [
              "It helps regulate body temperature and aids digestion.",
              "It adds healthy fats to your diet.",
              "It replaces the need for whole grains.",
              "It makes your meals taste better."
            ],
            "correctAnswer": "It helps regulate body temperature and aids digestion.",
            "explanation": "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
          }
        ]
      },
      {
        "id": "w12d1_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d78_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d78_q2",
            "text": "2. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d78_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d78_q4",
            "text": "4. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d78_q5",
            "text": "5. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d78_q6",
            "text": "6. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d78_q7",
            "text": "7. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d78_q8",
            "text": "8. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d78_q9",
            "text": "9. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d78_q10",
            "text": "10. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d78_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w12d78_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d78_q13",
            "text": "13. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d78_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d78_q15",
            "text": "15. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d78_q16",
            "text": "16. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d78_q17",
            "text": "17. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w12d78_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d78_q19",
            "text": "19. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d78_q20",
            "text": "20. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d2",
    "week": 12,
    "day": 2,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 2: First Conditional & Real Possibilities",
    "topic": "First Conditional & Real Possibilities",
    "explanation": "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    "commonMistake": "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.",
        "vietnameseNote": "If + Hiện tại, Tương lai"
      }
    ],
    "exercises": [
      {
        "id": "w12d2_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
        "audioText": "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project."
      },
      {
        "id": "w12d2_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
        "questions": [
          {
            "id": "w12d2_rq1",
            "text": "What is the primary cause of global warming mentioned in the text?",
            "options": [
              "The use of solar and wind power.",
              "The burning of fossil fuels releasing greenhouse gases.",
              "The melting of ice caps and glaciers.",
              "The increase in recycling and water conservation."
            ],
            "correctAnswer": "The burning of fossil fuels releasing greenhouse gases.",
            "explanation": "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
          },
          {
            "id": "w12d2_rq2",
            "text": "How can individuals contribute to addressing climate change?",
            "options": [
              "By using more fossil fuels.",
              "By adopting sustainable lifestyles like reducing waste and recycling.",
              "By ignoring environmental policies.",
              "By moving to coastal communities."
            ],
            "correctAnswer": "By adopting sustainable lifestyles like reducing waste and recycling.",
            "explanation": "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
          }
        ]
      },
      {
        "id": "w12d2_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d79_q1",
            "text": "1. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d79_q2",
            "text": "2. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d79_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d79_q4",
            "text": "4. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d79_q5",
            "text": "5. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d79_q6",
            "text": "6. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d79_q7",
            "text": "7. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d79_q8",
            "text": "8. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d79_q9",
            "text": "9. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d79_q10",
            "text": "10. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d79_q11",
            "text": "11. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d79_q12",
            "text": "12. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d79_q13",
            "text": "13. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d79_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d79_q15",
            "text": "15. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d79_q16",
            "text": "16. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w12d79_q17",
            "text": "17. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d79_q18",
            "text": "18. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d79_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d79_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d3",
    "week": 12,
    "day": 3,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 3: Second Conditional & Unreal Situations",
    "topic": "Second Conditional & Unreal Situations",
    "explanation": "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    "commonMistake": "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    "memoryHacks": [
      {
        "type": "Rhyme",
        "content": "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.",
        "vietnameseNote": "If + Quá khứ đơn, S + would + V"
      }
    ],
    "exercises": [
      {
        "id": "w12d3_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
        "audioText": "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you."
      },
      {
        "id": "w12d3_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
        "questions": [
          {
            "id": "w12d3_rq1",
            "text": "What event officially began the space age?",
            "options": [
              "The launch of the Hubble Space Telescope.",
              "Neil Armstrong landing on the Moon.",
              "The launch of Sputnik 1 by the Soviet Union.",
              "The creation of the International Space Station."
            ],
            "correctAnswer": "The launch of Sputnik 1 by the Soviet Union.",
            "explanation": "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
          },
          {
            "id": "w12d3_rq2",
            "text": "What is the current focus of space exploration looking ahead?",
            "options": [
              "Returning to the Moon and sending humans to Mars.",
              "Stopping all international collaboration.",
              "Only using robotic probes to explore asteroids.",
              "Building more landline phones."
            ],
            "correctAnswer": "Returning to the Moon and sending humans to Mars.",
            "explanation": "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
          }
        ]
      },
      {
        "id": "w12d3_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d80_q1",
            "text": "1. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d80_q2",
            "text": "2. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w12d80_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d80_q4",
            "text": "4. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d80_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d80_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d80_q7",
            "text": "7. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d80_q8",
            "text": "8. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d80_q9",
            "text": "9. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d80_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d80_q11",
            "text": "11. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d80_q12",
            "text": "12. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d80_q13",
            "text": "13. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d80_q14",
            "text": "14. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d80_q15",
            "text": "15. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d80_q16",
            "text": "16. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d80_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d80_q18",
            "text": "18. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d80_q19",
            "text": "19. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d80_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d4",
    "week": 12,
    "day": 4,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 4: Passive Voice (Present & Past)",
    "topic": "Passive Voice (Present & Past)",
    "explanation": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    "commonMistake": "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.",
        "vietnameseNote": "Bị động = To be + V3/ed"
      }
    ],
    "exercises": [
      {
        "id": "w12d4_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
        "audioText": "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind."
      },
      {
        "id": "w12d4_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
        "questions": [
          {
            "id": "w12d4_rq1",
            "text": "Where are coffee beans primarily grown?",
            "options": [
              "In cold, mountainous regions.",
              "In tropical regions like Brazil and Vietnam.",
              "In European countries.",
              "In the Middle East only."
            ],
            "correctAnswer": "In tropical regions like Brazil and Vietnam.",
            "explanation": "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
          },
          {
            "id": "w12d4_rq2",
            "text": "How is espresso made according to the text?",
            "options": [
              "By mixing coffee with steamed milk.",
              "By drying and roasting beans at low temperatures.",
              "By forcing hot water through finely-ground coffee beans.",
              "By feeding red berries to goats."
            ],
            "correctAnswer": "By forcing hot water through finely-ground coffee beans.",
            "explanation": "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
          }
        ]
      },
      {
        "id": "w12d4_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d81_q1",
            "text": "1. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d81_q2",
            "text": "2. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d81_q3",
            "text": "3. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d81_q4",
            "text": "4. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d81_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d81_q6",
            "text": "6. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d81_q7",
            "text": "7. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d81_q8",
            "text": "8. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w12d81_q9",
            "text": "9. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d81_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d81_q11",
            "text": "11. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d81_q12",
            "text": "12. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d81_q13",
            "text": "13. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d81_q14",
            "text": "14. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d81_q15",
            "text": "15. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w12d81_q16",
            "text": "16. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d81_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d81_q18",
            "text": "18. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d81_q19",
            "text": "19. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d81_q20",
            "text": "20. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d5",
    "week": 12,
    "day": 5,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 5: Relative Clauses (Who, Which, That)",
    "topic": "Relative Clauses (Who, Which, That)",
    "explanation": "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    "commonMistake": "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    "memoryHacks": [
      {
        "type": "Hook",
        "content": "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).",
        "vietnameseNote": "Không dùng 'That' sau dấu phẩy."
      }
    ],
    "exercises": [
      {
        "id": "w12d5_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
        "audioText": "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot."
      },
      {
        "id": "w12d5_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
        "questions": [
          {
            "id": "w12d5_rq1",
            "text": "What is unique about Marie Curie's Nobel Prizes?",
            "options": [
              "She is the only person who has won Nobel Prizes in two different scientific fields.",
              "She was the first person to win a Nobel Prize in Literature.",
              "She won her Nobel Prizes for discovering the structure of DNA.",
              "She shared all her Nobel Prizes with her husband Pierre."
            ],
            "correctAnswer": "She is the only person who has won Nobel Prizes in two different scientific fields.",
            "explanation": "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
          },
          {
            "id": "w12d5_rq2",
            "text": "What caused Marie Curie's death?",
            "options": [
              "An accident in her poorly equipped laboratory.",
              "Old age and natural causes.",
              "An illness caused by prolonged exposure to radioactive materials.",
              "A disease she caught while traveling to Poland."
            ],
            "correctAnswer": "An illness caused by prolonged exposure to radioactive materials.",
            "explanation": "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
          }
        ]
      },
      {
        "id": "w12d5_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d82_q1",
            "text": "1. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w12d82_q2",
            "text": "2. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d82_q3",
            "text": "3. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d82_q4",
            "text": "4. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d82_q5",
            "text": "5. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d82_q6",
            "text": "6. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d82_q7",
            "text": "7. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d82_q8",
            "text": "8. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d82_q9",
            "text": "9. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d82_q10",
            "text": "10. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d82_q11",
            "text": "11. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d82_q12",
            "text": "12. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d82_q13",
            "text": "13. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d82_q14",
            "text": "14. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d82_q15",
            "text": "15. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d82_q16",
            "text": "16. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d82_q17",
            "text": "17. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d82_q18",
            "text": "18. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d82_q19",
            "text": "19. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d82_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d6",
    "week": 12,
    "day": 6,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 6: Reported Speech (Statements)",
    "topic": "Reported Speech (Statements)",
    "explanation": "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    "commonMistake": "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    "memoryHacks": [
      {
        "type": "Story",
        "content": "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.",
        "vietnameseNote": "Lùi thì, Đổi ngôi, Đổi trạng từ"
      }
    ],
    "exercises": [
      {
        "id": "w12d6_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
        "audioText": "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon."
      },
      {
        "id": "w12d6_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
        "questions": [
          {
            "id": "w12d6_rq1",
            "text": "What did Dr. Smith say about the future of AI?",
            "options": [
              "He said that AI would destroy all human jobs.",
              "He said that AI would revolutionize the way we work within the next decade.",
              "He said that AI was too dangerous to use in the workplace.",
              "He said that AI would only affect repetitive tasks."
            ],
            "correctAnswer": "He said that AI would revolutionize the way we work within the next decade.",
            "explanation": "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
          },
          {
            "id": "w12d6_rq2",
            "text": "What did Sarah tell the narrator after the presentation?",
            "options": [
              "She said she was going to take an online course on machine learning.",
              "She said she had not understood the presentation.",
              "She said she wanted to buy a robot.",
              "She said she would email the slides to everyone."
            ],
            "correctAnswer": "She said she was going to take an online course on machine learning.",
            "explanation": "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
          }
        ]
      },
      {
        "id": "w12d6_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d83_q1",
            "text": "1. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d83_q2",
            "text": "2. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d83_q3",
            "text": "3. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d83_q4",
            "text": "4. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d83_q5",
            "text": "5. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d83_q6",
            "text": "6. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d83_q7",
            "text": "7. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d83_q8",
            "text": "8. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d83_q9",
            "text": "9. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d83_q10",
            "text": "10. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d83_q11",
            "text": "11. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d83_q12",
            "text": "12. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d83_q13",
            "text": "13. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d83_q14",
            "text": "14. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d83_q15",
            "text": "15. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d83_q16",
            "text": "16. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          },
          {
            "id": "w12d83_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d83_q18",
            "text": "18. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d83_q19",
            "text": "19. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d83_q20",
            "text": "20. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          }
        ]
      }
    ]
  },
  {
    "id": "w12d7",
    "week": 12,
    "day": 7,
    "skill": "Grammar & Reading",
    "title": "Week 12 - Day 7: Gerunds and Infinitives",
    "topic": "Gerunds and Infinitives",
    "explanation": "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    "commonMistake": "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    "memoryHacks": [
      {
        "type": "Visual",
        "content": "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).",
        "vietnameseNote": "Enjoy + V-ing / Want + To V"
      }
    ],
    "exercises": [
      {
        "id": "w12d7_ex1",
        "type": "shadowing",
        "title": "Shadowing Practice",
        "duration": "10 mins",
        "content": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
        "audioText": "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip."
      },
      {
        "id": "w12d7_ex2",
        "type": "reading",
        "title": "Reading Comprehension",
        "duration": "20 mins",
        "content": "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
        "questions": [
          {
            "id": "w12d7_rq1",
            "text": "What do doctors suggest doing to maintain a healthy lifestyle?",
            "options": [
              "They suggest eating late at night.",
              "They suggest drinking at least eight glasses of water a day.",
              "They suggest giving up easily.",
              "They suggest smoking to reduce stress."
            ],
            "correctAnswer": "They suggest drinking at least eight glasses of water a day.",
            "explanation": "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
          },
          {
            "id": "w12d7_rq2",
            "text": "What did Lisa do to help herself quit smoking?",
            "options": [
              "She started chewing gum to keep her mouth busy.",
              "She started running in the park.",
              "She refused to write a blog.",
              "She decided to eat late at night."
            ],
            "correctAnswer": "She started chewing gum to keep her mouth busy.",
            "explanation": "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
          }
        ]
      },
      {
        "id": "w12d7_ex3",
        "type": "quiz",
        "title": "Daily Quiz (20 Questions)",
        "duration": "20 mins",
        "questions": [
          {
            "id": "w12d84_q1",
            "text": "1. ____ you ever eaten sushi?",
            "options": [
              "Do",
              "Did",
              "Have",
              "Has"
            ],
            "correctAnswer": "Have",
            "explanation": "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'."
          },
          {
            "id": "w12d84_q2",
            "text": "2. I will ____ you tomorrow.",
            "options": [
              "call",
              "called",
              "calling",
              "calls"
            ],
            "correctAnswer": "call",
            "explanation": "Sau 'will' là động từ nguyên thể."
          },
          {
            "id": "w12d84_q3",
            "text": "3. He is ____ than his brother.",
            "options": [
              "tall",
              "taller",
              "tallest",
              "more tall"
            ],
            "correctAnswer": "taller",
            "explanation": "So sánh hơn của tính từ ngắn 'tall' là 'taller'."
          },
          {
            "id": "w12d84_q4",
            "text": "4. They ____ lived here for 5 years.",
            "options": [
              "has",
              "have",
              "had",
              "having"
            ],
            "correctAnswer": "have",
            "explanation": "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'."
          },
          {
            "id": "w12d84_q5",
            "text": "5. The man ____ lives next door is a doctor.",
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "correctAnswer": "who",
            "explanation": "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'."
          },
          {
            "id": "w12d84_q6",
            "text": "6. She ____ playing tennis right now.",
            "options": [
              "is",
              "are",
              "am",
              "be"
            ],
            "correctAnswer": "is",
            "explanation": "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'."
          },
          {
            "id": "w12d84_q7",
            "text": "7. The house ____ built in 1990.",
            "options": [
              "is",
              "was",
              "has been",
              "had been"
            ],
            "correctAnswer": "was",
            "explanation": "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'."
          },
          {
            "id": "w12d84_q8",
            "text": "8. She said that she ____ tired.",
            "options": [
              "is",
              "was",
              "has been",
              "will be"
            ],
            "correctAnswer": "was",
            "explanation": "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)."
          },
          {
            "id": "w12d84_q9",
            "text": "9. You ____ smoke in the hospital.",
            "options": [
              "mustn't",
              "don't have to",
              "needn't",
              "shouldn't"
            ],
            "correctAnswer": "mustn't",
            "explanation": "'Mustn't' chỉ sự cấm đoán."
          },
          {
            "id": "w12d84_q10",
            "text": "10. I was watching TV when the phone ____.",
            "options": [
              "ring",
              "rang",
              "rung",
              "ringing"
            ],
            "correctAnswer": "rang",
            "explanation": "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)."
          },
          {
            "id": "w12d84_q11",
            "text": "11. If I ____ a million dollars, I would travel the world.",
            "options": [
              "have",
              "has",
              "had",
              "having"
            ],
            "correctAnswer": "had",
            "explanation": "Câu điều kiện loại 2: If + Quá khứ đơn."
          },
          {
            "id": "w12d84_q12",
            "text": "12. I have ____ visited London.",
            "options": [
              "never",
              "ever",
              "yet",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'."
          },
          {
            "id": "w12d84_q13",
            "text": "13. I ____ to the store yesterday.",
            "options": [
              "go",
              "went",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "Thì quá khứ đơn (yesterday) nên dùng 'went'."
          },
          {
            "id": "w12d84_q14",
            "text": "14. The book ____ I borrowed is fascinating.",
            "options": [
              "who",
              "whom",
              "which",
              "whose"
            ],
            "correctAnswer": "which",
            "explanation": "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'."
          },
          {
            "id": "w12d84_q15",
            "text": "15. I ____ like apples.",
            "options": [
              "don't",
              "doesn't",
              "not",
              "no"
            ],
            "correctAnswer": "don't",
            "explanation": "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'."
          },
          {
            "id": "w12d84_q16",
            "text": "16. I enjoy ____ books in my free time.",
            "options": [
              "read",
              "to read",
              "reading",
              "reads"
            ],
            "correctAnswer": "reading",
            "explanation": "Sau động từ 'enjoy' phải dùng V-ing."
          },
          {
            "id": "w12d84_q17",
            "text": "17. If it rains, we ____ at home.",
            "options": [
              "stay",
              "will stay",
              "stayed",
              "would stay"
            ],
            "correctAnswer": "will stay",
            "explanation": "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn."
          },
          {
            "id": "w12d84_q18",
            "text": "18. This is the ____ beautiful painting I have ever seen.",
            "options": [
              "more",
              "most",
              "much",
              "many"
            ],
            "correctAnswer": "most",
            "explanation": "So sánh nhất của tính từ dài dùng 'the most'."
          },
          {
            "id": "w12d84_q19",
            "text": "19. I decided ____ a new car.",
            "options": [
              "buy",
              "buying",
              "to buy",
              "bought"
            ],
            "correctAnswer": "to buy",
            "explanation": "Sau động từ 'decide' dùng 'to V'."
          },
          {
            "id": "w12d84_q20",
            "text": "20. He ____ to school every day.",
            "options": [
              "go",
              "goes",
              "going",
              "went"
            ],
            "correctAnswer": "goes",
            "explanation": "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'."
          }
        ]
      }
    ]
  }
];
