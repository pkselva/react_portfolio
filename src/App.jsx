import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/500.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
