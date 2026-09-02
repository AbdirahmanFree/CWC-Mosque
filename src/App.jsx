import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Contact/>} path='/contact'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
