const fs = require('fs');

const curriculumData = [
  {
    topic: "Present Simple & Daily Routines",
    explanation: "Thì Hiện tại đơn (Present Simple) dùng để diễn tả một thói quen, một hành động lặp đi lặp lại, hoặc một sự thật hiển nhiên.\n\n**Cấu trúc:**\n- Khẳng định: S + V(s/es)\n- Phủ định: S + do/does + not + V\n- Nghi vấn: Do/Does + S + V?",
    commonMistake: "Người Việt thường quên thêm 's' hoặc 'es' vào động từ khi chủ ngữ là ngôi thứ ba số ít (he, she, it). Ví dụ: viết 'He go to school' thay vì 'He goes to school'.",
    memoryHacks: [{ type: 'Story', content: "Hãy tưởng tượng 'He, She, It' là 3 người bạn rất thích ăn kẹo chữ 'S'. Mỗi lần đi chung với động từ, họ luôn đòi động từ phải mang theo kẹo 'S' hoặc 'ES'.", vietnameseNote: "He/She/It + V(s/es)" }],
    shadowingText: "I usually wake up at 6 AM every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. I often eat bread and drink a cup of coffee. After that, I get dressed and go to work by bus. I start work at 8 AM.",
    readingPassage: "My name is John and I live in a bustling city. Every morning, I wake up at 6:00 AM. I like to start my day with a cup of hot coffee and a quick jog around the local park. The park is usually quiet at this time, with only a few other runners and some birds chirping in the trees. After my run, I head back home, take a shower, and prepare a healthy breakfast. I usually have oatmeal with fresh fruits and a glass of orange juice. At 8:00 AM, I catch the bus to work. I work as a software engineer at a tech company downtown. My job is quite demanding, but I enjoy solving complex problems and working with my team. We have a daily meeting at 9:00 AM to discuss our tasks for the day. For lunch, I usually bring a homemade sandwich or salad, but sometimes I go out with my colleagues to a nearby cafe. In the afternoon, I focus on coding and reviewing my peers' work. I finish work around 5:00 PM and take the bus back home. In the evenings, I like to relax by reading a book or watching a documentary. I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day. This routine helps me stay productive and maintain a good work-life balance. I believe that having a structured day is the key to achieving my goals and staying healthy.",
    readingQuestions: [
      {
        text: "What does John usually do right after waking up?",
        options: ["He catches the bus to work.", "He drinks hot coffee and goes for a jog.", "He takes a shower and eats oatmeal.", "He attends a daily meeting at 9:00 AM."],
        correctAnswer: "He drinks hot coffee and goes for a jog.",
        explanation: "Đoạn văn nói: 'I like to start my day with a cup of hot coffee and a quick jog around the local park.' (Tôi thích bắt đầu ngày mới với một tách cà phê nóng và chạy bộ nhanh quanh công viên)."
      },
      {
        text: "Why does John avoid looking at screens before bed?",
        options: ["Because he wants to save electricity.", "Because he prefers reading books or watching documentaries.", "Because he wants to feel ready for the next day.", "Because his job as a software engineer is demanding."],
        correctAnswer: "Because he wants to feel ready for the next day.",
        explanation: "Đoạn văn ghi: 'I try to avoid looking at screens for too long before bed. I usually go to sleep around 10:30 PM, feeling ready for the next day.' (Tránh nhìn màn hình giúp anh ấy sẵn sàng cho ngày hôm sau)."
      }
    ]
  },
  {
    topic: "Present Continuous & Current Actions",
    explanation: "Thì Hiện tại tiếp diễn (Present Continuous) dùng để diễn tả một hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.\n\n**Cấu trúc:**\n- Khẳng định: S + am/is/are + V-ing\n- Phủ định: S + am/is/are + not + V-ing\n- Nghi vấn: Am/Is/Are + S + V-ing?",
    commonMistake: "Người Việt thường quên động từ 'to be' (am/is/are) và chỉ dùng V-ing. Ví dụ: 'I playing football' thay vì 'I am playing football'.",
    memoryHacks: [{ type: 'Visual', content: "Tưởng tượng V-ing là một chiếc xe kéo, nó không thể tự chạy nếu thiếu đầu kéo là động từ 'To be' (am/is/are).", vietnameseNote: "Luôn nhớ: To be + V-ing" }],
    shadowingText: "Right now, I am sitting in a cafe and drinking a cappuccino. The sun is shining brightly outside, and people are walking quickly down the street. My friend is sitting across from me, and she is typing an email on her laptop. We are enjoying a peaceful morning together.",
    readingPassage: "Currently, I am working on a very exciting project at my company. We are developing a new mobile application that helps people track their fitness goals. My team and I are spending long hours in the office these days. Right now, my colleague Sarah is designing the user interface, while Mark is writing the backend code. I am testing the application to find any bugs or errors. We are collaborating closely to ensure everything works smoothly. Outside the office, the city is buzzing with activity. People are rushing to their jobs, and cars are honking in the busy streets. However, inside our workspace, we are focusing entirely on our tasks. The deadline is approaching fast, so everyone is working hard. Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives. We are looking forward to launching it next month.",
    readingQuestions: [
      {
        text: "What is Sarah doing right now?",
        options: ["She is writing the backend code.", "She is testing the application for bugs.", "She is designing the user interface.", "She is tracking her fitness goals."],
        correctAnswer: "She is designing the user interface.",
        explanation: "Bài đọc nêu rõ: 'Right now, my colleague Sarah is designing the user interface...' (Ngay lúc này, đồng nghiệp Sarah của tôi đang thiết kế giao diện người dùng)."
      },
      {
        text: "Why are the team members enjoying the process despite the pressure?",
        options: ["Because they are getting paid a lot of money.", "Because they believe the app will make a big difference.", "Because they are working in a quiet and peaceful office.", "Because the deadline is still very far away."],
        correctAnswer: "Because they believe the app will make a big difference.",
        explanation: "Bài đọc giải thích: 'Despite the pressure, we are enjoying the process because we believe this app will make a big difference in people's lives.'"
      }
    ]
  },
  {
    topic: "Past Simple & Past Events",
    explanation: "Thì Quá khứ đơn (Past Simple) dùng để diễn tả một hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.\n\n**Cấu trúc:**\n- Khẳng định: S + V2/ed\n- Phủ định: S + did + not + V(nguyên thể)\n- Nghi vấn: Did + S + V(nguyên thể)?",
    commonMistake: "Sử dụng sai động từ bất quy tắc hoặc quên đưa động từ về nguyên thể trong câu phủ định/nghi vấn. Ví dụ: 'I didn't went' thay vì 'I didn't go'.",
    memoryHacks: [{ type: 'Rhyme', content: "Đã mượn 'did' thì động từ phải 'trần' (nguyên thể). Không thêm 'ed', không lùi cột hai.", vietnameseNote: "Did/Didn't + V(nguyên thể)" }],
    shadowingText: "Last weekend, I went to the park with my friends. We had a picnic under a big tree. The weather was sunny and warm. We ate sandwiches and drank lemonade. After eating, we played frisbee and took a lot of photos. It was a really fun day.",
    readingPassage: "Last summer, my family and I went on an unforgettable vacation to the mountains. We rented a cozy cabin near a crystal-clear lake. The journey took about four hours by car, and the scenery along the way was absolutely breathtaking. When we arrived, the air was crisp and fresh, a welcome change from the polluted city air. On our first day, we decided to go hiking. We packed some sandwiches, water bottles, and a map, and set off early in the morning. The trail was steep in some parts, but the view from the top was worth the effort. We could see the entire valley and the lake sparkling in the sunlight. We even spotted some wild deer grazing in the distance. The next day, we rented a small boat and went fishing on the lake. It was very peaceful, and my father managed to catch a few fish, which we later grilled for dinner. In the evenings, we would sit around the fireplace, play board games, and share stories. There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.",
    readingQuestions: [
      {
        text: "How long did the journey to the mountains take?",
        options: ["It took two hours by train.", "It took four hours by car.", "It took a whole day by bus.", "It took four hours on foot."],
        correctAnswer: "It took four hours by car.",
        explanation: "Bài đọc có câu: 'The journey took about four hours by car...' (Chuyến đi mất khoảng 4 giờ bằng ô tô)."
      },
      {
        text: "Why was having no internet connection considered a 'blessing in disguise'?",
        options: ["Because they didn't have to pay for Wi-Fi.", "Because it allowed them to disconnect and spend quality time together.", "Because they could play online games without lag.", "Because the internet in the mountains is usually very slow."],
        correctAnswer: "Because it allowed them to disconnect and spend quality time together.",
        explanation: "Tác giả viết: 'There was no internet connection, which turned out to be a blessing in disguise. It allowed us to truly disconnect from our busy lives and spend quality time together.'"
      }
    ]
  },
  {
    topic: "Past Continuous & Interrupted Actions",
    explanation: "Thì Quá khứ tiếp diễn (Past Continuous) dùng để diễn tả một hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra thì có hành động khác xen vào.\n\n**Cấu trúc:**\n- Khẳng định: S + was/were + V-ing\n- Phủ định: S + was/were + not + V-ing\n- Nghi vấn: Was/Were + S + V-ing?",
    commonMistake: "Nhầm lẫn giữa Past Simple và Past Continuous khi kể chuyện. Dùng Past Continuous cho hành động xen vào (sai) thay vì Past Simple.",
    memoryHacks: [{ type: 'Story', content: "Hành động DÀI đang diễn ra (Past Continuous) thì bị hành động NGẮN (Past Simple) cắt ngang. Ví dụ: Đang tắm (dài) thì cúp điện (ngắn).", vietnameseNote: "While + Quá khứ tiếp diễn, Quá khứ đơn" }],
    shadowingText: "I was walking home from work yesterday when it suddenly started to rain. I wasn't carrying an umbrella, so I was getting completely wet. While I was running to find some shelter, I saw an old friend. We were standing under an awning and talking for half an hour.",
    readingPassage: "It was a dark and stormy night. I was sitting in my living room, reading a fascinating mystery novel. The wind was howling outside, and the rain was beating heavily against the windows. My cat, Luna, was sleeping peacefully on the rug near the fireplace. Suddenly, the lights went out. I was sitting in complete darkness. While I was trying to find my phone to use as a flashlight, I heard a strange noise coming from the kitchen. It sounded like someone was opening the back door. My heart was beating fast. I slowly walked towards the kitchen. As I was creeping down the hallway, the lights suddenly came back on. I looked into the kitchen and saw that the back door was wide open. The wind had blown it open! I quickly closed and locked it. Luna was standing there, looking at me with wide eyes. We were both quite scared, but relieved that it was just the wind.",
    readingQuestions: [
      {
        text: "What was the narrator doing when the lights went out?",
        options: ["The narrator was sleeping on the rug.", "The narrator was opening the back door.", "The narrator was reading a mystery novel.", "The narrator was trying to find a phone."],
        correctAnswer: "The narrator was reading a mystery novel.",
        explanation: "Bài đọc ghi: 'I was sitting in my living room, reading a fascinating mystery novel... Suddenly, the lights went out.' (Tôi đang ngồi đọc tiểu thuyết... thì đột nhiên mất điện)."
      },
      {
        text: "What caused the strange noise in the kitchen?",
        options: ["A burglar was trying to break in.", "The cat was playing with the door.", "The wind had blown the back door open.", "Someone was knocking on the window."],
        correctAnswer: "The wind had blown the back door open.",
        explanation: "Sau khi đèn sáng lại, tác giả phát hiện: 'The wind had blown it open!' (Gió đã thổi tung cánh cửa)."
      }
    ]
  },
  {
    topic: "Present Perfect & Experiences",
    explanation: "Thì Hiện tại hoàn thành (Present Perfect) dùng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn ở hiện tại, hoặc một trải nghiệm cho đến thời điểm hiện tại.\n\n**Cấu trúc:**\n- Khẳng định: S + have/has + V3/ed\n- Phủ định: S + have/has + not + V3/ed\n- Nghi vấn: Have/Has + S + V3/ed?",
    commonMistake: "Dùng thì Hiện tại hoàn thành với các từ chỉ thời gian xác định trong quá khứ (như yesterday, last year).",
    memoryHacks: [{ type: 'Hook', content: "Hiện tại hoàn thành là chiếc cầu nối giữa Quá Khứ và Hiện Tại. Nó quan tâm đến 'KẾT QUẢ' hoặc 'TRẢI NGHIỆM', không quan tâm đến thời gian cụ thể.", vietnameseNote: "Không dùng với yesterday, ago, last..." }],
    shadowingText: "I have visited Japan three times, and I have always loved the food there. I have tried sushi, ramen, and takoyaki. However, I haven't climbed Mount Fuji yet. My friend has lived in Tokyo for two years, so she has shown me many beautiful places.",
    readingPassage: "Over the past five years, I have traveled to more than twenty countries. Traveling has broadened my horizons and taught me so much about different cultures. I have seen the magnificent Eiffel Tower in Paris, and I have walked along the Great Wall of China. I have tasted authentic pasta in Italy and spicy street food in Thailand. Each place has left a unique impression on me. I have met incredible people from all walks of life, and some of them have become my lifelong friends. However, my journey hasn't always been easy. I have lost my luggage twice, and I have missed several flights. Despite these challenges, I have never regretted my decision to explore the world. I haven't visited South America yet, but I have already started planning a trip to Peru and Brazil for next year. I have realized that the world is a vast and beautiful place, and there is always something new to discover. Traveling has truly changed my perspective on life.",
    readingQuestions: [
      {
        text: "Which of the following experiences has the narrator NOT had yet?",
        options: ["Walking along the Great Wall of China.", "Tasting authentic pasta in Italy.", "Visiting South America.", "Losing their luggage."],
        correctAnswer: "Visiting South America.",
        explanation: "Đoạn văn có câu: 'I haven't visited South America yet...' (Tôi vẫn chưa đến thăm Nam Mỹ)."
      },
      {
        text: "How has traveling affected the narrator?",
        options: ["It has made them regret their decisions.", "It has broadened their horizons and changed their perspective.", "It has made them afraid of losing luggage.", "It has forced them to live in twenty different countries."],
        correctAnswer: "It has broadened their horizons and changed their perspective.",
        explanation: "Tác giả chia sẻ: 'Traveling has broadened my horizons...' và 'Traveling has truly changed my perspective on life.'"
      }
    ]
  },
  {
    topic: "Future Simple & Predictions",
    explanation: "Thì Tương lai đơn (Future Simple) dùng để diễn tả một quyết định nảy ra ngay tại thời điểm nói, một dự đoán không có căn cứ chắc chắn, hoặc một lời hứa.\n\n**Cấu trúc:**\n- Khẳng định: S + will + V(nguyên thể)\n- Phủ định: S + will not (won't) + V(nguyên thể)\n- Nghi vấn: Will + S + V(nguyên thể)?",
    commonMistake: "Dùng 'will' cho các kế hoạch đã được sắp xếp từ trước (phải dùng 'be going to' hoặc Hiện tại tiếp diễn).",
    memoryHacks: [{ type: 'Visual', content: "'Will' giống như một ý tưởng bóng đèn lóe lên bất chợt. Không có kế hoạch, chỉ là quyết định tức thời hoặc dự đoán cá nhân.", vietnameseNote: "Will = Quyết định tức thời / Dự đoán" }],
    shadowingText: "I think the weather will be nice tomorrow. If it is sunny, I will go to the beach with my family. We will swim in the ocean and build sandcastles. I promise I will bring some snacks and drinks for everyone. It will be a fantastic day.",
    readingPassage: "Technology has completely transformed the way we live, work, and communicate. Just a few decades ago, people relied on landline phones and letters to stay in touch. Today, smartphones and the internet have made instant communication possible across the globe. We can now video call our friends and family, send emails, and share photos with just a few taps on a screen. In the workplace, technology has increased efficiency and productivity. Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work. Remote work has also become increasingly common, thanks to video conferencing tools and cloud storage. This flexibility has improved the work-life balance for many people. However, the rapid advancement of technology also brings some challenges. One major concern is the impact on our health. Staring at screens for long periods can cause eye strain and disrupt our sleep patterns. Additionally, the constant notifications and social media updates can lead to stress and anxiety. Another issue is privacy and security. With so much of our personal information stored online, the risk of data breaches and cyberattacks has grown significantly. It is crucial for individuals and organizations to take steps to protect their digital identities. Despite these challenges, the benefits of technology are undeniable. It has opened up new opportunities for education, healthcare, and entertainment. As we continue to innovate, it is important to find a balance and use technology in a way that enhances our lives without compromising our well-being.",
    readingQuestions: [
      {
        text: "What is one mentioned benefit of technology in the workplace?",
        options: ["It has completely replaced human workers.", "It has automated tedious tasks and increased efficiency.", "It has made employees work longer hours.", "It has eliminated the need for video conferencing."],
        correctAnswer: "It has automated tedious tasks and increased efficiency.",
        explanation: "Đoạn văn nói: 'Computers and software programs have automated many tedious tasks, allowing employees to focus on more creative and strategic work.'"
      },
      {
        text: "What is a negative impact of technology mentioned in the text?",
        options: ["It makes communication too fast.", "It reduces the number of available jobs.", "It can cause eye strain and disrupt sleep patterns.", "It makes people forget how to write letters."],
        correctAnswer: "It can cause eye strain and disrupt sleep patterns.",
        explanation: "Tác giả cảnh báo: 'Staring at screens for long periods can cause eye strain and disrupt our sleep patterns.'"
      }
    ]
  },
  {
    topic: "Comparatives and Superlatives",
    explanation: "So sánh hơn (Comparatives) dùng để so sánh 2 đối tượng. So sánh nhất (Superlatives) dùng để so sánh từ 3 đối tượng trở lên.\n\n**Cấu trúc:**\n- Tính từ ngắn: S + V + adj-er + than... / S + V + the + adj-est\n- Tính từ dài: S + V + more adj + than... / S + V + the most adj",
    commonMistake: "Thêm cả 'more' và đuôi '-er' vào tính từ ngắn (ví dụ: more taller). Hoặc quên mạo từ 'the' trong so sánh nhất.",
    memoryHacks: [{ type: 'Rhyme', content: "Ngắn thì thêm ER, dài thì mượn MORE. So sánh nhất luôn nhớ có THE đứng đầu.", vietnameseNote: "Taller than / The tallest" }],
    shadowingText: "My new apartment is bigger and brighter than my old one. It is the most comfortable place I have ever lived in. The neighborhood is also quieter, but the rent is more expensive. Overall, I think moving here was the best decision I made this year.",
    readingPassage: "Learning a new language is a rewarding but challenging journey. It requires dedication, consistency, and a positive mindset. One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible. You can do this by watching movies, listening to music, and reading books in the target language. Even if you don't understand everything at first, your brain will gradually get used to the sounds and rhythms. Another important aspect is practicing speaking. Many learners feel shy or afraid of making mistakes, but speaking is crucial for improving fluency. You can practice with native speakers through language exchange apps or find a conversation partner. Don't worry about perfect grammar; the goal is to communicate your ideas. Building a strong vocabulary is also essential. Instead of memorizing long lists of words, try to learn them in context. Use flashcards with example sentences and review them regularly using spaced repetition. This technique helps move words from your short-term to your long-term memory. Finally, be patient with yourself. Language learning is not a race; it's a marathon. There will be days when you feel frustrated and feel like you're not making progress. During these times, remind yourself of why you started and celebrate the small victories. Consistency is key. Even studying for just 15 minutes a day can make a significant difference over time. Embrace the process and enjoy the journey of discovering a new culture and way of thinking.",
    readingQuestions: [
      {
        text: "According to the passage, what is one of the most effective ways to learn a language?",
        options: ["Memorizing long lists of words.", "Studying grammar rules perfectly.", "Immersion, by surrounding yourself with the language.", "Only speaking when you are not afraid of mistakes."],
        correctAnswer: "Immersion, by surrounding yourself with the language.",
        explanation: "Bài đọc khẳng định: 'One of the most effective ways to learn is through immersion. This means surrounding yourself with the language as much as possible.'"
      },
      {
        text: "How should learners build a strong vocabulary?",
        options: ["By learning words in context and using spaced repetition.", "By reading a dictionary every day.", "By avoiding flashcards.", "By translating every single word they hear."],
        correctAnswer: "By learning words in context and using spaced repetition.",
        explanation: "Tác giả khuyên: 'Instead of memorizing long lists of words, try to learn them in context. Use flashcards... and review them regularly using spaced repetition.'"
      }
    ]
  },
  {
    topic: "Modal Verbs (Can, Could, Should, Must)",
    explanation: "Động từ khuyết thiếu (Modal Verbs) dùng để diễn tả khả năng, sự cho phép, lời khuyên, hoặc sự bắt buộc.\n\n**Cấu trúc:**\n- S + modal verb + V(nguyên thể)\n- Can/Could: Khả năng\n- Should: Lời khuyên\n- Must: Bắt buộc",
    commonMistake: "Thêm 's' vào modal verb khi chủ ngữ là ngôi thứ ba số ít (ví dụ: He cans go), hoặc dùng 'to' sau modal verb (ví dụ: I must to go).",
    memoryHacks: [{ type: 'Visual', content: "Modal Verbs là những vị vua độc tài: Không bao giờ thay đổi hình thức (không thêm s/es/ed) và bắt các động từ đi theo phải 'trần trụi' (nguyên thể không to).", vietnameseNote: "Luôn là: Can go, Must do (Không to, không s)" }],
    shadowingText: "You should drink more water every day to stay healthy. If you have a headache, you must rest and you shouldn't look at your phone. I can help you with your work if you need it. Could you please open the window? It's very hot in here.",
    readingPassage: "Healthy eating is a fundamental aspect of maintaining overall well-being. A balanced diet provides our bodies with the essential nutrients, vitamins, and minerals needed to function optimally. It is not about strict limitations or depriving yourself of the foods you love, but rather about making mindful choices and creating sustainable habits. A good starting point is to incorporate more whole foods into your meals. These include fresh fruits, vegetables, whole grains, lean proteins, and healthy fats. Whole foods are minimally processed and retain their natural nutritional value. On the other hand, it is advisable to limit the intake of highly processed foods, which are often packed with added sugars, unhealthy fats, and artificial preservatives. Hydration is another crucial component of a healthy diet. Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing. Sometimes, our bodies confuse thirst with hunger, so staying hydrated can also prevent overeating. Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry and short on time. Preparing meals at home allows you to control the ingredients and portion sizes. Remember that healthy eating is a personal journey, and what works for one person may not work for another. It is important to listen to your body and find a balance that makes you feel energized and satisfied. By making small, gradual changes, you can build a healthy relationship with food that lasts a lifetime.",
    readingQuestions: [
      {
        text: "What is a benefit of planning meals ahead of time?",
        options: ["It allows you to eat more processed foods.", "It helps you avoid impulsive, unhealthy choices when hungry.", "It makes you feel more thirsty.", "It completely stops you from eating foods you love."],
        correctAnswer: "It helps you avoid impulsive, unhealthy choices when hungry.",
        explanation: "Bài đọc nêu rõ: 'Planning your meals ahead of time can be a game-changer. It helps you avoid impulsive, unhealthy choices when you are hungry...'"
      },
      {
        text: "Why is hydration important according to the text?",
        options: ["It helps regulate body temperature and aids digestion.", "It adds healthy fats to your diet.", "It replaces the need for whole grains.", "It makes your meals taste better."],
        correctAnswer: "It helps regulate body temperature and aids digestion.",
        explanation: "Đoạn văn giải thích: 'Drinking enough water throughout the day helps regulate body temperature, aids digestion, and keeps our skin glowing.'"
      }
    ]
  },
  {
    topic: "First Conditional & Real Possibilities",
    explanation: "Câu điều kiện loại 1 (First Conditional) dùng để diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai nếu điều kiện được đáp ứng.\n\n**Cấu trúc:**\n- If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
    commonMistake: "Dùng 'will' ở cả hai vế. Ví dụ: 'If it will rain, I will stay home' (Sai).",
    memoryHacks: [{ type: 'Story', content: "Mệnh đề IF là 'hiện tại', mệnh đề chính là 'tương lai'. Nếu (hiện tại) bạn cố gắng, (tương lai) bạn sẽ thành công.", vietnameseNote: "If + Hiện tại, Tương lai" }],
    shadowingText: "If it rains tomorrow, we will stay at home and watch a movie. But if the weather is nice, we will go to the park for a picnic. If you don't hurry up, you will miss the train. I will call you if I need any help with this project.",
    readingPassage: "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities. The burning of fossil fuels, such as coal, oil, and gas, releases large amounts of greenhouse gases into the atmosphere. These gases trap the sun's heat, leading to a gradual increase in the Earth's average temperature, a phenomenon known as global warming. The consequences of climate change are already visible across the globe. We are experiencing more frequent and severe weather events, including hurricanes, droughts, and heatwaves. Melting ice caps and glaciers are causing sea levels to rise, threatening coastal communities and island nations. Furthermore, changing climates disrupt ecosystems, putting many plant and animal species at risk of extinction. Addressing climate change requires urgent and collective action. Transitioning to renewable energy sources, such as solar and wind power, is a critical step in reducing our carbon footprint. Improving energy efficiency in our homes, transportation, and industries can also make a significant impact. On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling, conserving water, and choosing eco-friendly transportation options like walking, cycling, or using public transit. Education and awareness are also vital. By understanding the causes and effects of climate change, we can advocate for stronger environmental policies and support initiatives that promote sustainability. Protecting our planet is a shared responsibility, and every small effort counts towards securing a habitable world for future generations.",
    readingQuestions: [
      {
        text: "What is the primary cause of global warming mentioned in the text?",
        options: ["The use of solar and wind power.", "The burning of fossil fuels releasing greenhouse gases.", "The melting of ice caps and glaciers.", "The increase in recycling and water conservation."],
        correctAnswer: "The burning of fossil fuels releasing greenhouse gases.",
        explanation: "Bài đọc khẳng định: 'The burning of fossil fuels... releases large amounts of greenhouse gases... leading to a gradual increase in the Earth's average temperature...'"
      },
      {
        text: "How can individuals contribute to addressing climate change?",
        options: ["By using more fossil fuels.", "By adopting sustainable lifestyles like reducing waste and recycling.", "By ignoring environmental policies.", "By moving to coastal communities."],
        correctAnswer: "By adopting sustainable lifestyles like reducing waste and recycling.",
        explanation: "Tác giả gợi ý: 'On an individual level, we can contribute by adopting more sustainable lifestyles. This includes reducing waste, recycling...'"
      }
    ]
  },
  {
    topic: "Second Conditional & Unreal Situations",
    explanation: "Câu điều kiện loại 2 (Second Conditional) dùng để diễn tả một tình huống không có thật, trái ngược với thực tế ở hiện tại.\n\n**Cấu trúc:**\n- If + S + V2/ed (To be -> were), S + would/could + V(nguyên thể)",
    commonMistake: "Dùng 'was' thay vì 'were' cho các ngôi số ít (I, he, she, it) trong văn phong trang trọng. Hoặc nhầm lẫn với câu điều kiện loại 1.",
    memoryHacks: [{ type: 'Rhyme', content: "Điều kiện loại hai, hiện tại nói sai. Lùi về quá khứ, 'would' cộng động từ.", vietnameseNote: "If + Quá khứ đơn, S + would + V" }],
    shadowingText: "If I had a million dollars, I would travel around the world. I would buy a big house near the beach and a fast car. If I were you, I would tell her the truth. But I don't have a million dollars, and I am not you.",
    readingPassage: "The history of space exploration is a testament to human curiosity and ingenuity. For centuries, people looked up at the stars and wondered what lay beyond our world. The space age officially began in 1957 when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit. This historic event sparked the Space Race between the United States and the Soviet Union, leading to rapid advancements in technology and science. In 1961, Yuri Gagarin became the first human to journey into outer space, orbiting the Earth in the Vostok 1 spacecraft. Just a few years later, in 1969, the Apollo 11 mission achieved the impossible: landing humans on the Moon. Neil Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed across the globe, inspiring millions. Since then, space exploration has continued to evolve. We have sent robotic probes to explore the farthest reaches of our solar system, capturing stunning images of planets, moons, and asteroids. The Hubble Space Telescope has provided us with breathtaking views of distant galaxies, expanding our understanding of the universe. Today, international collaboration plays a key role in space endeavors. The International Space Station (ISS) serves as a microgravity laboratory where astronauts from different countries conduct scientific research. Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars. Private companies are also entering the field, driving innovation and lowering the cost of space travel. The journey of exploring the cosmos is far from over, and the discoveries yet to come will undoubtedly continue to shape our perspective of our place in the universe.",
    readingQuestions: [
      {
        text: "What event officially began the space age?",
        options: ["The launch of the Hubble Space Telescope.", "Neil Armstrong landing on the Moon.", "The launch of Sputnik 1 by the Soviet Union.", "The creation of the International Space Station."],
        correctAnswer: "The launch of Sputnik 1 by the Soviet Union.",
        explanation: "Đoạn văn nêu rõ: 'The space age officially began in 1957 when the Soviet Union launched Sputnik 1...'"
      },
      {
        text: "What is the current focus of space exploration looking ahead?",
        options: ["Returning to the Moon and sending humans to Mars.", "Stopping all international collaboration.", "Only using robotic probes to explore asteroids.", "Building more landline phones."],
        correctAnswer: "Returning to the Moon and sending humans to Mars.",
        explanation: "Tác giả viết: 'Looking ahead, the focus is shifting towards returning to the Moon and eventually sending humans to Mars.'"
      }
    ]
  },
  {
    topic: "Passive Voice (Present & Past)",
    explanation: "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.\n\n**Cấu trúc:**\n- Hiện tại: S + am/is/are + V3/ed\n- Quá khứ: S + was/were + V3/ed",
    commonMistake: "Quên động từ 'to be' hoặc chia sai dạng V3/ed của động từ chính.",
    memoryHacks: [{ type: 'Visual', content: "Bị động luôn cần 2 yếu tố: 'To be' (để chỉ thời gian) và 'V3/ed' (để chỉ hành động bị tác động). Thiếu 1 trong 2 là sai.", vietnameseNote: "Bị động = To be + V3/ed" }],
    shadowingText: "This beautiful house was built in 1990 by my grandfather. The walls are painted white, and the garden is cleaned every week. Many delicious meals are cooked in this kitchen. Yesterday, a new window was installed because the old one was broken by the strong wind.",
    readingPassage: "Coffee is one of the most popular beverages in the world. Every day, millions of cups of coffee are consumed by people to help them wake up and stay focused. The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia. After the beans are harvested, they are dried and roasted at high temperatures. The roasting process gives the coffee its rich flavor and dark color. Historically, coffee was discovered in Ethiopia. According to a popular legend, it was noticed by a goat herder named Kaldi when his goats became very energetic after eating the red berries from a certain tree. The knowledge of coffee was then spread to the Middle East and later to Europe. Today, coffee is prepared in many different ways. Espresso is made by forcing hot water through finely-ground coffee beans, while a latte is created by mixing espresso with steamed milk. In recent years, sustainable farming methods have been encouraged to protect the environment where coffee is grown. Fair trade policies are also supported to ensure that farmers are paid fairly for their hard work.",
    readingQuestions: [
      {
        text: "Where are coffee beans primarily grown?",
        options: ["In cold, mountainous regions.", "In tropical regions like Brazil and Vietnam.", "In European countries.", "In the Middle East only."],
        correctAnswer: "In tropical regions like Brazil and Vietnam.",
        explanation: "Bài đọc ghi: 'The coffee beans are grown in tropical regions, such as Brazil, Vietnam, and Colombia.'"
      },
      {
        text: "How is espresso made according to the text?",
        options: ["By mixing coffee with steamed milk.", "By drying and roasting beans at low temperatures.", "By forcing hot water through finely-ground coffee beans.", "By feeding red berries to goats."],
        correctAnswer: "By forcing hot water through finely-ground coffee beans.",
        explanation: "Đoạn văn miêu tả: 'Espresso is made by forcing hot water through finely-ground coffee beans...'"
      }
    ]
  },
  {
    topic: "Relative Clauses (Who, Which, That)",
    explanation: "Mệnh đề quan hệ (Relative Clauses) dùng để bổ nghĩa cho danh từ đứng trước nó, giúp câu rõ nghĩa hơn.\n\n**Cách dùng:**\n- Who: Thay thế cho người (làm chủ ngữ/tân ngữ).\n- Which: Thay thế cho vật.\n- That: Thay thế cho cả người và vật (trong mệnh đề xác định).",
    commonMistake: "Dùng 'what' thay cho 'which' hoặc 'that'. Hoặc dùng 'that' trong mệnh đề quan hệ không xác định (có dấu phẩy).",
    memoryHacks: [{ type: 'Hook', content: "Who cho Người, Which cho Vật, That cho cả hai (nhưng kỵ dấu phẩy).", vietnameseNote: "Không dùng 'That' sau dấu phẩy." }],
    shadowingText: "The man who lives next door is a doctor. He drives a car which is very fast and expensive. The book that I borrowed from the library is fascinating. I have a friend whose father is a famous actor. The city where I was born has changed a lot.",
    readingPassage: "Marie Curie, who was born in Poland in 1867, was a pioneering physicist and chemist. She is famous for her research on radioactivity, a term that she coined herself. Marie Curie was the first woman who won a Nobel Prize, and she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry. The element Polonium, which she discovered with her husband Pierre, was named after her home country. The laboratory where they conducted their experiments was poorly equipped, but their dedication led to groundbreaking discoveries. The work that they did completely changed the world's understanding of atomic physics. Unfortunately, the radiation which she studied for so many years eventually damaged her health. She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials. Today, the Marie Curie charity, which provides care and support for people with terminal illnesses, honors her legacy. The contributions that she made to science continue to inspire generations of scientists around the world.",
    readingQuestions: [
      {
        text: "What is unique about Marie Curie's Nobel Prizes?",
        options: ["She is the only person who has won Nobel Prizes in two different scientific fields.", "She was the first person to win a Nobel Prize in Literature.", "She won her Nobel Prizes for discovering the structure of DNA.", "She shared all her Nobel Prizes with her husband Pierre."],
        correctAnswer: "She is the only person who has won Nobel Prizes in two different scientific fields.",
        explanation: "Bài đọc nêu rõ: '...she remains the only person who has won Nobel Prizes in two different scientific fields: Physics and Chemistry.'"
      },
      {
        text: "What caused Marie Curie's death?",
        options: ["An accident in her poorly equipped laboratory.", "Old age and natural causes.", "An illness caused by prolonged exposure to radioactive materials.", "A disease she caught while traveling to Poland."],
        correctAnswer: "An illness caused by prolonged exposure to radioactive materials.",
        explanation: "Tác giả viết: 'She died in 1934 from an illness that was caused by prolonged exposure to radioactive materials.'"
      }
    ]
  },
  {
    topic: "Reported Speech (Statements)",
    explanation: "Câu tường thuật (Reported Speech) dùng để thuật lại lời nói của người khác.\n\n**Quy tắc lùi thì:**\n- Hiện tại đơn -> Quá khứ đơn\n- Hiện tại tiếp diễn -> Quá khứ tiếp diễn\n- Hiện tại hoàn thành / Quá khứ đơn -> Quá khứ hoàn thành\n- Will -> Would",
    commonMistake: "Quên lùi thì của động từ hoặc quên đổi các đại từ nhân xưng (I -> he/she) và trạng từ chỉ thời gian (tomorrow -> the next day).",
    memoryHacks: [{ type: 'Story', content: "Khi kể lại chuyện cũ, mọi thứ đều phải lùi về quá khứ 1 bước. 'Tôi' của ngày hôm qua giờ đã là 'Anh ấy/Cô ấy'.", vietnameseNote: "Lùi thì, Đổi ngôi, Đổi trạng từ" }],
    shadowingText: "Yesterday, John said that he was very tired. He told me that he had worked late the night before. Mary said that she would help him with the project the next day. I replied that I was happy to hear that. They said that they were going to finish it soon.",
    readingPassage: "Last week, I attended a fascinating seminar about the future of artificial intelligence. The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade. He explained that many repetitive tasks were already being automated by smart software. A woman in the audience asked if robots would replace human jobs entirely. Dr. Smith replied that while some jobs would disappear, new types of jobs would be created. He emphasized that humans needed to focus on developing creative and emotional skills. After the presentation, my colleague Sarah told me that she had found the talk very inspiring. She said that she was going to take an online course on machine learning the following month. I told her that I thought it was a great idea. The organizer announced that the slides from the presentation would be emailed to all attendees the next day. Everyone agreed that it had been a very productive afternoon.",
    readingQuestions: [
      {
        text: "What did Dr. Smith say about the future of AI?",
        options: ["He said that AI would destroy all human jobs.", "He said that AI would revolutionize the way we work within the next decade.", "He said that AI was too dangerous to use in the workplace.", "He said that AI would only affect repetitive tasks."],
        correctAnswer: "He said that AI would revolutionize the way we work within the next decade.",
        explanation: "Trong bài có câu: 'The main speaker, Dr. Smith, said that AI would revolutionize the way we work within the next decade.'"
      },
      {
        text: "What did Sarah tell the narrator after the presentation?",
        options: ["She said she was going to take an online course on machine learning.", "She said she had not understood the presentation.", "She said she wanted to buy a robot.", "She said she would email the slides to everyone."],
        correctAnswer: "She said she was going to take an online course on machine learning.",
        explanation: "Bài đọc ghi: 'She said that she was going to take an online course on machine learning the following month.'"
      }
    ]
  },
  {
    topic: "Gerunds and Infinitives",
    explanation: "Danh động từ (Gerund - V-ing) và Động từ nguyên thể có 'to' (Infinitive - to V) được dùng sau các động từ khác nhau.\n\n- V-ing: Dùng sau các từ như enjoy, mind, avoid, finish, suggest, hoặc sau giới từ (in, on, at).\n- To V: Dùng sau các từ như want, decide, hope, plan, promise.",
    commonMistake: "Nhầm lẫn giữa các động từ đi với V-ing và To V. Ví dụ: 'I enjoy to read' (Sai) -> 'I enjoy reading' (Đúng).",
    memoryHacks: [{ type: 'Visual', content: "V-ing thường mang ý nghĩa của một HÀNH ĐỘNG ĐÃ/ĐANG XẢY RA hoặc SỞ THÍCH (enjoy swimming). To V thường mang ý nghĩa HƯỚNG TỚI TƯƠNG LAI hoặc MỤC ĐÍCH (want to go).", vietnameseNote: "Enjoy + V-ing / Want + To V" }],
    shadowingText: "I enjoy reading books in my free time. I avoid watching too much television because it hurts my eyes. Next year, I plan to travel to Europe. I hope to visit Paris and Rome. I have decided to start saving money right now so I can afford the trip.",
    readingPassage: "Many people struggle to maintain a healthy lifestyle because they find it difficult to change their daily habits. Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night. If you want to lose weight, you need to exercise regularly. Some people enjoy running in the park, while others prefer to swim or cycle. It is important to find an activity that you actually like doing, so you don't give up easily. My friend Lisa decided to quit smoking last year. She admitted feeling very stressed during the first few weeks, but she refused to give in to her cravings. She started chewing gum to keep her mouth busy. Now, she hopes to inspire others to do the same. She plans to write a blog about her experience. Learning to take care of your body is a lifelong process. You shouldn't expect to see perfect results overnight. Remember to celebrate small victories and keep moving forward.",
    readingQuestions: [
      {
        text: "What do doctors suggest doing to maintain a healthy lifestyle?",
        options: ["They suggest eating late at night.", "They suggest drinking at least eight glasses of water a day.", "They suggest giving up easily.", "They suggest smoking to reduce stress."],
        correctAnswer: "They suggest drinking at least eight glasses of water a day.",
        explanation: "Bài đọc có câu: 'Doctors suggest drinking at least eight glasses of water a day and avoiding eating late at night.'"
      },
      {
        text: "What did Lisa do to help herself quit smoking?",
        options: ["She started chewing gum to keep her mouth busy.", "She started running in the park.", "She refused to write a blog.", "She decided to eat late at night."],
        correctAnswer: "She started chewing gum to keep her mouth busy.",
        explanation: "Tác giả kể về Lisa: 'She started chewing gum to keep her mouth busy.' (Cô ấy bắt đầu nhai kẹo cao su để giữ cho miệng luôn bận rộn)."
      }
    ]
  }
];

const generateQuizQuestions = (day, topic) => {
  const questions = [];
  
  // A pool of realistic question templates
  const questionPool = [
    { text: "I ____ to the store yesterday.", options: ["go", "went", "gone", "going"], correct: "went", exp: "Thì quá khứ đơn (yesterday) nên dùng 'went'." },
    { text: "She ____ playing tennis right now.", options: ["is", "are", "am", "be"], correct: "is", exp: "Thì hiện tại tiếp diễn với ngôi thứ 3 số ít dùng 'is'." },
    { text: "They ____ lived here for 5 years.", options: ["has", "have", "had", "having"], correct: "have", exp: "Thì hiện tại hoàn thành với chủ ngữ số nhiều dùng 'have'." },
    { text: "He is ____ than his brother.", options: ["tall", "taller", "tallest", "more tall"], correct: "taller", exp: "So sánh hơn của tính từ ngắn 'tall' là 'taller'." },
    { text: "I will ____ you tomorrow.", options: ["call", "called", "calling", "calls"], correct: "call", exp: "Sau 'will' là động từ nguyên thể." },
    { text: "If it rains, we ____ at home.", options: ["stay", "will stay", "stayed", "would stay"], correct: "will stay", exp: "Câu điều kiện loại 1: If + Hiện tại đơn, Tương lai đơn." },
    { text: "I enjoy ____ books in my free time.", options: ["read", "to read", "reading", "reads"], correct: "reading", exp: "Sau động từ 'enjoy' phải dùng V-ing." },
    { text: "The house ____ built in 1990.", options: ["is", "was", "has been", "had been"], correct: "was", exp: "Câu bị động ở quá khứ đơn (in 1990) dùng 'was built'." },
    { text: "She said that she ____ tired.", options: ["is", "was", "has been", "will be"], correct: "was", exp: "Câu tường thuật lùi thì từ hiện tại (is) sang quá khứ (was)." },
    { text: "The man ____ lives next door is a doctor.", options: ["which", "who", "whom", "whose"], correct: "who", exp: "Đại từ quan hệ chỉ người làm chủ ngữ dùng 'who'." },
    { text: "You ____ smoke in the hospital.", options: ["mustn't", "don't have to", "needn't", "shouldn't"], correct: "mustn't", exp: "'Mustn't' chỉ sự cấm đoán." },
    { text: "I was watching TV when the phone ____.", options: ["ring", "rang", "rung", "ringing"], correct: "rang", exp: "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào (quá khứ đơn)." },
    { text: "I have ____ visited London.", options: ["never", "ever", "yet", "already"], correct: "never", exp: "Dùng 'never' trong thì hiện tại hoàn thành mang nghĩa 'chưa từng'." },
    { text: "If I ____ a million dollars, I would travel the world.", options: ["have", "has", "had", "having"], correct: "had", exp: "Câu điều kiện loại 2: If + Quá khứ đơn." },
    { text: "He ____ to school every day.", options: ["go", "goes", "going", "went"], correct: "goes", exp: "Thì hiện tại đơn với ngôi thứ 3 số ít thêm 'es' vào 'go'." },
    { text: "I ____ like apples.", options: ["don't", "doesn't", "not", "no"], correct: "don't", exp: "Phủ định của thì hiện tại đơn với 'I' dùng 'don't'." },
    { text: "____ you ever eaten sushi?", options: ["Do", "Did", "Have", "Has"], correct: "Have", exp: "Thì hiện tại hoàn thành với 'you' dùng trợ động từ 'Have'." },
    { text: "This is the ____ beautiful painting I have ever seen.", options: ["more", "most", "much", "many"], correct: "most", exp: "So sánh nhất của tính từ dài dùng 'the most'." },
    { text: "I decided ____ a new car.", options: ["buy", "buying", "to buy", "bought"], correct: "to buy", exp: "Sau động từ 'decide' dùng 'to V'." },
    { text: "The book ____ I borrowed is fascinating.", options: ["who", "whom", "which", "whose"], correct: "which", exp: "Đại từ quan hệ chỉ vật dùng 'which' hoặc 'that'." }
  ];

  // Shuffle and select 20 questions to make it look realistic and varied
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < 20; i++) {
    // If we run out of unique questions, loop back
    const template = shuffled[i % shuffled.length];
    questions.push({
      id: `w${Math.ceil(day/7)}d${day}_q${i+1}`,
      text: `${i+1}. ${template.text}`,
      options: template.options,
      correctAnswer: template.correct,
      explanation: template.exp
    });
  }
  return questions;
};

const curriculum = [];

for (let week = 1; week <= 12; week++) {
  for (let day = 1; day <= 7; day++) {
    const overallDay = (week - 1) * 7 + day;
    const dataIndex = (overallDay - 1) % curriculumData.length;
    const dayData = curriculumData[dataIndex];
    
    curriculum.push({
      id: `w${week}d${day}`,
      week: week,
      day: day,
      skill: 'Grammar & Reading',
      title: `Week ${week} - Day ${day}: ${dayData.topic}`,
      topic: dayData.topic,
      explanation: dayData.explanation,
      commonMistake: dayData.commonMistake,
      memoryHacks: dayData.memoryHacks,
      exercises: [
        {
          id: `w${week}d${day}_ex1`,
          type: 'shadowing',
          title: 'Shadowing Practice',
          duration: '10 mins',
          content: dayData.shadowingText,
          audioText: dayData.shadowingText
        },
        {
          id: `w${week}d${day}_ex2`,
          type: 'reading',
          title: 'Reading Comprehension',
          duration: '20 mins',
          content: dayData.readingPassage,
          questions: [
            {
              id: `w${week}d${day}_rq1`,
              text: dayData.readingQuestions[0].text,
              options: dayData.readingQuestions[0].options,
              correctAnswer: dayData.readingQuestions[0].correctAnswer,
              explanation: dayData.readingQuestions[0].explanation
            },
            {
              id: `w${week}d${day}_rq2`,
              text: dayData.readingQuestions[1].text,
              options: dayData.readingQuestions[1].options,
              correctAnswer: dayData.readingQuestions[1].correctAnswer,
              explanation: dayData.readingQuestions[1].explanation
            }
          ]
        },
        {
          id: `w${week}d${day}_ex3`,
          type: 'quiz',
          title: 'Daily Quiz (20 Questions)',
          duration: '20 mins',
          questions: generateQuizQuestions(overallDay, dayData.topic)
        }
      ]
    });
  }
}

const fileContent = `import { Lesson, Question } from '../types';

export const PLACEMENT_QUESTIONS: Question[] = [
  // A1 Level (1-10)
  { id: 'p1', text: 'Hello, what ____ your name?', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', explanation: 'Động từ to be đi với ngôi thứ 3 số ít "your name" là "is".' },
  { id: 'p2', text: 'I ____ from Vietnam.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', explanation: 'Ngôi thứ nhất "I" đi với "am".' },
  { id: 'p3', text: 'She ____ a doctor.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', explanation: 'Ngôi thứ 3 số ít "She" đi với "is".' },
  { id: 'p4', text: 'They ____ playing football now.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', explanation: 'Ngôi thứ 3 số nhiều "They" đi với "are".' },
  { id: 'p5', text: 'I have two ____.', options: ['cat', 'cats', 'cates', 'caties'], correctAnswer: 'cats', explanation: 'Số nhiều của "cat" thêm "s".' },
  { id: 'p6', text: '____ do you live? - I live in Hanoi.', options: ['What', 'Where', 'When', 'Who'], correctAnswer: 'Where', explanation: 'Hỏi về địa điểm dùng "Where".' },
  { id: 'p7', text: 'I ____ like apples.', options: ['don\\'t', 'doesn\\'t', 'not', 'no'], correctAnswer: 'don\\'t', explanation: 'Phủ định của thì hiện tại đơn với "I" dùng "don\\'t".' },
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
  { id: 'p18', text: 'You ____ smoke in the hospital.', options: ['mustn\\'t', 'don\\'t have to', 'needn\\'t', 'shouldn\\'t'], correctAnswer: 'mustn\\'t', explanation: '"Mustn\\'t" chỉ sự cấm đoán.' },
  { id: 'p19', text: 'There is ____ milk in the fridge.', options: ['some', 'any', 'a', 'many'], correctAnswer: 'some', explanation: 'Dùng "some" trong câu khẳng định với danh từ không đếm được.' },
  { id: 'p20', text: 'I am looking forward to ____ you.', options: ['see', 'seeing', 'saw', 'seen'], correctAnswer: 'seeing', explanation: 'Cấu trúc "look forward to + V-ing".' },

  // B1 Level (21-30)
  { id: 'p21', text: 'The book ____ was written by JK Rowling is very popular.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', explanation: 'Đại từ quan hệ "which" thay thế cho danh từ chỉ vật "The book".' },
  { id: 'p22', text: 'I wish I ____ more money.', options: ['have', 'has', 'had', 'having'], correctAnswer: 'had', explanation: 'Câu điều ước ở hiện tại dùng động từ ở thì quá khứ đơn.' },
  { id: 'p23', text: 'He asked me where I ____.', options: ['live', 'lived', 'living', 'have lived'], correctAnswer: 'lived', explanation: 'Câu tường thuật lùi thì từ hiện tại đơn sang quá khứ đơn.' },
  { id: 'p24', text: 'The house ____ built in 1990.', options: ['is', 'was', 'has been', 'had been'], correctAnswer: 'was', explanation: 'Câu bị động ở thì quá khứ đơn.' },
  { id: 'p25', text: 'Unless you ____ hard, you will fail the exam.', options: ['study', 'don\\'t study', 'studied', 'will study'], correctAnswer: 'study', explanation: '"Unless" = "If not", mệnh đề đi sau "unless" ở thể khẳng định.' },
  { id: 'p26', text: 'By the time we arrived, the movie ____.', options: ['started', 'has started', 'had started', 'was starting'], correctAnswer: 'had started', explanation: 'Hành động xảy ra trước một hành động khác trong quá khứ dùng thì quá khứ hoàn thành.' },
  { id: 'p27', text: 'She is used to ____ up early.', options: ['get', 'getting', 'got', 'gotten'], correctAnswer: 'getting', explanation: 'Cấu trúc "be used to + V-ing" (quen với việc gì).' },
  { id: 'p28', text: 'I would rather you ____ here.', options: ['stay', 'stayed', 'staying', 'to stay'], correctAnswer: 'stayed', explanation: 'Cấu trúc "would rather + S + V(quá khứ đơn)" diễn tả mong muốn ở hiện tại.' },
  { id: 'p29', text: 'Hardly ____ arrived when it started to rain.', options: ['had we', 'we had', 'did we', 'we did'], correctAnswer: 'had we', explanation: 'Đảo ngữ với "Hardly... when...".' },
  { id: 'p30', text: 'It is high time you ____ a job.', options: ['get', 'got', 'getting', 'to get'], correctAnswer: 'got', explanation: 'Cấu trúc "It is high time + S + V(quá khứ đơn)".' }
];

export const CURRICULUM: Lesson[] = ${JSON.stringify(curriculum, null, 2)};
`;

fs.writeFileSync('./src/data/curriculum.ts', fileContent);
console.log('Successfully generated curriculum.ts');
