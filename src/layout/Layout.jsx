import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

const Layout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>

        <aside className={`hidden md:block w-72 shrink-0 h-screen bg-gray-900 text-white overflow-y-auto`}>
            <Sidebar/>
        </aside>

        <main className='flex-1 h-screen overflow-y-auto'>
            <Outlet/>
        </main>
        
        <aside className="hidden md:block w-72 shrink-0 h-screen bg-gray-900 text-white">
            <Profile/>
        </aside>
    </div>
  )
}

export default Layout