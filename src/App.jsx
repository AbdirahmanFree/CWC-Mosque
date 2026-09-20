import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Programes from './pages/Programes'
import Partners from './pages/Partners'
import OurStory from './pages/Our-Story'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Contact/>} path='/contact'></Route>
        <Route element={<OurStory/>} path='/our-story'></Route>
        <Route element={<Programes/>} path='/programmes'></Route>
        <Route element={<Partners/>} path='/partners'></Route>
        <Route element={<Home/>} path='*'></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
