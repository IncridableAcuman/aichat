import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div>
        <aside>
            <Sidebar/>
        </aside>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout