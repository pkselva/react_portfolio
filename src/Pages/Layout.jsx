import React from 'react'
import NavgationBar from '../Components/NavgationBar'
import HeaderSection from '../Components/HeaderSection'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Certifications from '../Components/Certifications'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

function Layout() {
  return (
    <>
      <NavgationBar />
      <HeaderSection />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout