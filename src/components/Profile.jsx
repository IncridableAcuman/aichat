import React from 'react'
import { UseTheme } from '../contexts/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const Profile = () => {
    const { theme, toggleTheme } = UseTheme();
    
    return (
    <div>
      <div className="flex justify-end p-4">
        <button className='cursor-pointer text-gray-400 hover:text-gray-200 transition duration-300'
         onClick={() => toggleTheme(!theme)}>
          {theme === 'light' ? <Moon/> : <Sun/>}
        </button>
      </div>
      <div className=" flex flex-col items-center h-full justify-center gap-3 pt-8 border-b border-gray-700 border-dashed pb-3">
        <img src="./image.png" alt="profile" className='w-16 h-16 rounded-full object-cover' />
        <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
        <p className='text-sm text-gray-500'>CEO Founder</p>
      </div>
    </div>
    )
}

export default Profile