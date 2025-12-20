import Navbar from '../components/Navbar';
import { Send } from 'lucide-react';
import { UseTheme } from '../contexts/ThemeProvider';
import { useState } from 'react';
import OpenAI from 'openai'; // openai paketidan

const Home = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const { theme } = UseTheme();

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1", // To'g'ri baseURL – ikki marta emas!
    dangerouslyAllowBrowser: true // Test uchun, productionda backend orqali!
  });

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await openai.chat.completions.create({
        model: 'llama-3.3-70b-versatile', // 2025-yilning eng yaxshi bepul modeli (GPT-4 darajasida)
        // Boshqa variantlar:
        // 'openai/gpt-oss-120b' – eng yangi va kuchli (agar mavjud bo'lsa)
        // 'llama-3.1-70b-versatile' – klassik va tez
        // 'llama-3.1-8b-instant' – juda tez (mobil uchun ideal)
        messages: [
          { role: 'system', content: 'You are Grok, a helpful and witty AI built by xAI.' },
          ...messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          })),
          { role: 'user', content: input }
        ],
        temperature: 0.7,
        max_tokens: 1024 // Groq da max_tokens ishlatiladi
      });

      const botReply = response.choices[0].message.content;

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot'
      }]);

    } catch (error) {
      console.error('API xatosi:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: 'Xatolik: Internet yoki API keyni tekshiring. Yoki rate limitga tushgansiz.',
        sender: 'bot'
      }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className='w-full h-screen flex flex-col px-2'>
      <Navbar />

      <div className={`flex-1 overflow-y-auto p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} rounded-lg my-2`}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl wrap-break-word whitespace-pre-wrap ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : theme === 'light'
                    ? 'bg-gray-300 text-gray-900'
                    : 'bg-gray-700 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex items-center gap-3 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} my-2 p-3 rounded-full shadow-md`}>
        <input
          type="text"
          placeholder='Write a message...'
          className={`flex-1 px-4 py-2 outline-none rounded-full ${
            theme === 'light'
              ? 'bg-gray-200 text-gray-900 placeholder-gray-600'
              : 'bg-gray-800 text-white placeholder-gray-400'
          }`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className='bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition shadow'
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Home;