import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SignIn />} />
        <Route path="/project" element={<SignUp />} />
        <Route path="/contact" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
