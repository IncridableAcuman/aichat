import Navbar from '../components/Navbar'
import { Send } from 'lucide-react'
import { UseTheme } from '../contexts/ThemeProvider';

const Home = () => {
    const { theme } = UseTheme();
  return (
    <div className='w-full h-full flex flex-col px-2'>
      <Navbar />

    <div className={`h-full ${ theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'} rounded-lg my-2`}>a</div>

      <div className={`mt-auto flex items-center gap-3 ${ theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white' } my-2 p-2 mdp-3 rounded-full`}>
        <button className='bg-blue-500 text-white rounded-full shadow cursor-pointer p-2'>
          <Send size={18} />
        </button>
        <input type="text" name="search" id="search" placeholder='Search' 
        className={`w-full p-1.5 md:p-2 outline-none ${ theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white' } rounded-full`} />
      </div>
    </div>
  )
}

export default Home