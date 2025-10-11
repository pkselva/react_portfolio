import React from 'react'
import NavgationBar from '../Components/NavgationBar'
import HeaderSection from '../Components/HeaderSection'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

function Layout() {
  return (
    <>
      <NavgationBar />
      <HeaderSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Layout