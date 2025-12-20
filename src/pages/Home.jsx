import Navbar from '../components/Navbar'
import { Send } from 'lucide-react'
import { UseTheme } from '../contexts/ThemeProvider';
import { useState } from 'react';

const Home = () => {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const { theme } = UseTheme();

  const sendMessage = () => {
    if(input.trim() === '') return;

    const newMessages = {
      id:Date.now(),
      text:input,
      sender: 'User'
    }
    setMessages([...messages,newMessages])
    setInput('');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className='w-full h-full flex flex-col px-2'>
      <Navbar />

    <div className={`flex-1 overflow-y-auto p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} rounded-lg my-2`}>
      <div className="space-y-4">
        {
          messages.map((message) => (
            <div className={`flex ${message.sender === 'User' ? 'justify-end' : 'justify-start'}`} key={message.id}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl wrap-break-word whitespace-pre-wrap ${message.sender === 'User' ?
               'bg-blue-500 text-white' : theme === 'light' ? 'bg-gray-300 text-gray-900' : 'bg-gray-700 text-white'}`}>{message.text}</div>
            </div>
          ))
        }
      </div>
    </div>

      <div className={`mt-auto flex items-center gap-3 ${ theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white' } my-2 p-2 mdp-3 rounded-full`}>
        <button 
        onClick={sendMessage}
        className='bg-blue-500 text-white rounded-full shadow cursor-pointer p-2'>
          <Send size={18} />
        </button>
        <input type="text" name="search" id="search" placeholder='Write a message...' 
        className={`w-full p-1.5 md:p-2 outline-none ${ theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white' } rounded-full`}
         value={input} onChange={(e)=>setInput(e.target.value)} onKeyPress={handleKeyPress} />
      </div>
    </div>
  )
}

export default Home