import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useScrollReveal } from './hooks/useScrollReveal'
import './index.css'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
