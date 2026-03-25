import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Smooth cursor follower
function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="cursor-dot hidden md:block"
      animate={{ x: pos.x - 4, y: pos.y - 4 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  )
}

// Page loader
function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-beige flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-tea to-accent flex items-center justify-center shadow-xl mx-auto mb-5">
          <span className="font-display text-3xl font-bold text-brown">A</span>
        </div>
        <p className="font-display text-brown text-xl font-semibold">Ankita Gupta</p>
        <p className="text-xs font-mono text-brown/40 mt-2 tracking-widest">LOADING PORTFOLIO...</p>

        {/* Loading bar */}
        <div className="mt-6 w-40 h-0.5 bg-softgreen/40 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-tea to-accent rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Custom cursor */}
      <CursorFollower />

      {/* Page loader */}
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
