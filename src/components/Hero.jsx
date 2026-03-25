import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Code2, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tea/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-softgreen/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#A44A3F 1px, transparent 1px), linear-gradient(90deg, #A44A3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-brown text-xs font-mono tracking-widest border border-brown/20">
                <span className="w-1.5 h-1.5 bg-tea rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="section-label mb-2">Hello, I'm</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-brown">
                Ankita
                <br />
                <span className="italic font-normal gradient-text">Gupta.</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-brown/70 font-body text-lg leading-relaxed max-w-md">
                B.Tech CSE (Data Science) student with CGPA{' '}
                <span className="font-semibold text-brown font-mono">9.65</span> — building
                full-stack products at the intersection of{' '}
                <em className="not-italic text-accent font-medium">engineering</em> and{' '}
                <em className="not-italic text-accent font-medium">intelligence.</em>
              </p>
            </motion.div>

            {/* Tech stack chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['MERN Stack', 'Python', 'Docker', 'DSA', 'NLP', 'C++'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-softgreen/50 text-brown/80 text-xs font-mono rounded-full border border-softgreen skill-tag"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group px-6 py-3 bg-brown text-beige rounded-full font-body text-sm font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-brown/30 text-brown font-body text-sm font-medium hover:border-brown hover:bg-brown/5 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/ankitaa2603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ankita-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                <Code2 size={14} />
                LeetCode
              </a>
            </motion.div>
          </motion.div>

          {/* Right Card / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Floating card */}
            <div className="relative w-full max-w-sm animate-float">
              {/* Avatar card */}
              <div className="glass rounded-3xl p-8 shadow-xl shadow-brown/10 border border-softgreen/50">
                {/* Avatar circle */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-tea via-softgreen to-accent flex items-center justify-center shadow-lg">
                    <span className="font-display text-5xl font-bold text-brown/80">AG</span>
                  </div>
                  {/* Sparkle */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md">
                    <Sparkles size={14} className="text-beige" />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-display font-semibold text-brown text-xl">Ankita Gupta</h3>
                  <p className="text-brown/60 text-sm font-body">CSE (Data Science) • SRM Ghaziabad</p>
                  
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-tea rounded-full" />
                    <span className="text-xs font-mono text-brown/70">CGPA 9.65</span>
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-softgreen/40">
                  {[
                    { label: 'Projects', value: '3+' },
                    { label: 'Hackathons', value: '5+' },
                    { label: 'Awards', value: '7+' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display font-bold text-brown text-xl">{stat.value}</div>
                      <div className="text-xs text-brown/50 font-mono mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -left-10 top-12 glass rounded-2xl px-4 py-2.5 shadow-lg border border-softgreen/40"
              >
                <p className="text-xs font-mono text-brown/70">🏆 Adobe Semi-finalist</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 bottom-16 glass rounded-2xl px-4 py-2.5 shadow-lg border border-accent/30"
              >
                <p className="text-xs font-mono text-brown/70">⚡ DevAlchemy Winner</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-xs font-mono text-brown/40 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-brown/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
