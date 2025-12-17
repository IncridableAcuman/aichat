import React from 'react'
import Navbar from '../components/Navbar'
import { Send } from 'lucide-react'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col px-2'>
      <Navbar />

    <div className="h-full bg-gray-900 text-white rounded-lg my-2">a</div>

      <div className="mt-auto flex items-center gap-3 bg-gray-900 text-white my-2 p-4 rounded-full">
        <button className='bg-blue-500 text-white rounded-full shadow cursor-pointer p-2'>
          <Send size={18} />
        </button>
        <input type="text" name="search" id="search" placeholder='Search' 
        className='w-full p-2 outline-none bg-gray-800 text-white rounded-full' />
      </div>
    </div>
  )
}

export default Home