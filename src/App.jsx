import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App