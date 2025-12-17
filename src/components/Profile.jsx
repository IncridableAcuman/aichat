import React from 'react'

const Profile = () => {
    return (
        <div className='h-full flex flex-col'>
            <div className="flex flex-col items-center justify-center gap-3 pt-8 border-b border-gray-700 border-dashed pb-3">
                <img src="./image.png" alt="profile" className='w-16 h-16 rounded-full object-cover' />
                <h1 className='text-lg font-semibold'>Izzatbek Abdusharipov</h1>
                <p className='text-sm text-gray-500'>CEO Founder</p>
            </div>
            <button className='mt-auto bg-white text-gray-900 px-4 py-2 mx-4 my-2 cursor-pointer
            rounded-md shadow hover:bg-gray-100 transition duration-300'>Logout</button>
        </div>
    )
}

export default Profile