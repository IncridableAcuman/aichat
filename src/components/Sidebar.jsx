import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-full justify-center gap-3 pt-8 border-b border-gray-700 border-dashed pb-3">
        <img src="./image.png" alt="profile" className='w-16 h-16 rounded-full object-cover' />
        <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
        <p className='text-sm text-gray-500'>CEO Founder</p>
      </div>
    </div>
  )
}

export default Sidebar