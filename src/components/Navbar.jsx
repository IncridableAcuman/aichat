import { EllipsisVertical } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
   <div className="">
     <div className='flex items-center justify-between bg-gray-900 text-white sticky z-50 py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-b-md'>
        <img src="./image.png" alt="profile" className='w-10 h-10 rounded-full object-cover' />
        <EllipsisVertical className='cursor-pointer text-gray-500 hover:text-gray-300 transition duration-300' />
    </div>
   </div>
  )
}

export default Navbar