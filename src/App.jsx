import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Skills from './components/about'

function App() {
  return (
    <main className="bg-f1-dark min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App;