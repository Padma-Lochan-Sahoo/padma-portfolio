import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Contacts from './components/Contacts'
import Marquee from './components/Marquee'
const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className='antialiased overflow-x-hidden overflow-y-hidden px-4 sm:px-8 md:px-12 relative z-10 pt-20'>
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contacts />
      </main>
    </>
  )
}

export default App