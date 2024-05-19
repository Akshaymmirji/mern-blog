import { BrowserRouter,Routes, Route}from 'react-router-dom'
import React from 'react'
import About from './assets/About'

import Signup from './assets/Signup'
import Home from './assets/Home'
import Projects from './assets/Projects'
import Signin from './assets/Signin';
import Dashboard from './assets/Dashboard'
export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/home" element={<Home/>} />
        

      </Routes>
        
      
      
      </BrowserRouter>
    </div>
  )
}
