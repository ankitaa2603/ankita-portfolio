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
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tea/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-softgreen/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#A44A3F 1px, transparent 1px), linear-gradient(90deg, #A44A3F 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-brown text-xs font-mono tracking-widest border border-brown/20">
                <span className="w-1.5 h-1.5 bg-tea rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="section-label mb-2">Hello, I'm</p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-brown">
                Ankita
                <br />
                <span className="italic font-normal gradient-text">Gupta.</span>
              </h1>
            </motion.div>

            {/* 🔥 NEW ADDED LINE */}
            <motion.div variants={itemVariants}>
              <p className="text-brown font-body text-lg font-medium mb-2">
  Frontend Developer | Building modern, interactive web experiences
</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-brown/50 font-body text-base leading-relaxed max-w-md">
                B.Tech CSE (Data Science) student with CGPA{' '}
                <span className="font-semibold text-brown font-mono">9.65</span> — building
                full-stack products at the intersection of{' '}
                <em className="not-italic text-accent font-medium">engineering</em> and{' '}
                <em className="not-italic text-accent font-medium">intelligence.</em>
              </p>
            </motion.div>

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

            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2">
              <a href="https://github.com/ankitaa2603" target="_blank" className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200">
                <Github size={14} /> GitHub
              </a>
              <a href="https://linkedin.com/in/ankita-gupta" target="_blank" className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://leetcode.com" target="_blank" className="flex items-center gap-1.5 text-brown/60 hover:text-brown text-xs font-mono transition-colors duration-200">
                <Code2 size={14} /> LeetCode
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE SAME (UNCHANGED) */}
        </div>
      </div>
    </section>
  )
}