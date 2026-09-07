import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ComingSoon from './pages/ComingSoon'
import Programes from './pages/Programes'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Contact/>} path='/contact'></Route>
        <Route element={<ComingSoon/>} path='/our-story'></Route>
        <Route element={<Programes/>} path='/programmes'></Route>
        <Route element={<ComingSoon/>} path='/partners'></Route>
        <Route element={<Home/>} path='*'></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
