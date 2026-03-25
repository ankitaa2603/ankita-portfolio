import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: '01. About', href: '#about' },
  { label: '02. Projects', href: '#projects' },
  { label: '03. Skills', href: '#skills' },
  { label: '04. Experience', href: '#experience' },
  { label: '05. Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleScrollTo('about')}
          className="group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-brown flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <span className="text-beige font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display font-semibold text-brown text-sm tracking-wide">
            Ankita Gupta
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleScrollTo(item.href.replace('#', ''))}
              className="nav-link text-brown/70 hover:text-brown transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* Hire Me */}
          <button
            onClick={() => handleScrollTo('contact')}
            className="px-4 py-2 rounded-full border border-brown/30 text-brown font-body text-sm hover:bg-brown hover:text-beige transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            Hire Me ✦
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="block w-5 h-0.5 bg-brown rounded-full"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-5 h-0.5 bg-brown rounded-full"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="block w-5 h-0.5 bg-brown rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-softgreen/30"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    handleScrollTo(item.href.replace('#', ''))
                    setMenuOpen(false)
                  }}
                  className="nav-link text-brown/80 hover:text-brown py-1 text-left"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Hire Me */}
              <button
                onClick={() => {
                  handleScrollTo('contact')
                  setMenuOpen(false)
                }}
                className="mt-2 px-4 py-2 rounded-full border border-brown/30 text-brown text-sm text-center"
              >
                Hire Me ✦
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}