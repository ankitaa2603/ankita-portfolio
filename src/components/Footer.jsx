import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-softgreen/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-brown flex items-center justify-center">
            <span className="text-beige font-display font-bold text-xs">A</span>
          </div>
          <span className="font-display text-brown text-sm font-semibold">Ankita Gupta</span>
        </div>

        <p className="text-xs font-mono text-brown/40 text-center">
          Designed & built with{' '}
          <span className="text-accent">♥</span>{' '}
          by Ankita • 2025
        </p>

        <p className="text-xs font-mono text-brown/40">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  )
}
