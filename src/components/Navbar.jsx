import { EllipsisVertical, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Profile from './Profile';
import Sidebar from './Sidebar';
import MobileDriver from './MobileDriver';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="">
      <div className='flex items-center justify-between bg-gray-900 text-white sticky z-50 py-2 px-4 mt-2 md:mt-0 rounded-md md:rounded-t-none sm:px-6 md:px-8 lg:px-10 md:rounded-b-md'>
        <Menu className='cursor-pointer block md:hidden text-gray-400 hover:text-gray-200 transition duration-300' onClick={() => setSidebarOpen(true)} />
        <img src="./image.png" alt="profile" className='hidden md:block w-10 h-10 rounded-full object-cover' />
        <EllipsisVertical className='hidden md:block cursor-pointer text-gray-500 hover:text-gray-300 transition duration-300' />
        <Menu className='cursor-pointer block md:hidden text-gray-400 hover:text-gray-200 transition duration-300' onClick={() => setProfileOpen(true)} />
      </div>
      <MobileDriver open={sidebarOpen} onCLose={() => setSidebarOpen(false)} aside='left'>
        <Sidebar/>
      </MobileDriver>
      <MobileDriver open={profileOpen} onCLose={() => setProfileOpen(false)} aside='right' >
        <Profile/>
      </MobileDriver>
    </div>
  )
}

export default Navbar