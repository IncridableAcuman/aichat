import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <aside className={`hidden md:block w-72 bg-gray-900 text-white overflow-hidden`}>
            <Sidebar/>
        </aside>
        <main className='flex-1 overflow-y-auto'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout