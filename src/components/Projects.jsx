import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Layers, Brain, Heart } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Imagify',
    subtitle: 'AI Image Generation Platform',
    description:
      'A full-stack MERN platform that converts text prompts into stunning AI-generated images using OpenAI and ClipDrop APIs — complete with auth and Razorpay payments.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Razorpay', 'Tailwind'],
    icon: <Brain size={22} />,
    color: 'from-tea to-softgreen',
    accent: '#D4E09B',
    live: '#',
    source: '#',
    featured: true,
  },
  {
    id: '02',
    title: 'Knowledge Weaver',
    subtitle: 'PDF Intelligence System',
    description:
      'Dockerized PDF intelligence engine for structured data extraction and persona-based summaries using NLP + OCR techniques. Built for Adobe India Hackathon 2025.',
    tags: ['Python', 'Docker', 'spaCy', 'OCR', 'scikit-learn', 'pandas'],
    icon: <Layers size={22} />,
    color: 'from-softgreen to-tea',
    accent: '#CBDFBD',
    live: null,
    source: '#',
    featured: false,
  },
  {
    id: '03',
    title: 'Prescripto',
    subtitle: 'Healthcare Appointment Platform',
    description:
      'End-to-end MERN healthcare app for doctor appointments, patient management, and admin dashboards with JWT auth and Razorpay payment integration.',
    tags: ['React.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Tailwind'],
    icon: <Heart size={22} />,
    color: 'from-accent/30 to-tea',
    accent: '#F19C79',
    live: '#',
    source: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`project-card group relative rounded-3xl overflow-hidden border border-softgreen/40 hover:border-brown/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),0_0_25px_rgba(212,224,155,0.35)] ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
      
      {/* Glass overlay */}
      <div className="relative glass p-8 h-full">
        <div className={`flex flex-col ${project.featured ? 'md:flex-row md:gap-10' : ''} h-full gap-6`}>
          
          {/* Left / Header */}
          <div className={`${project.featured ? 'md:w-1/2' : ''} space-y-4`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brown/10 flex items-center justify-center text-brown">
                  {project.icon}
                </div>
                <span className="font-mono text-xs text-brown/40">{project.id}</span>
              </div>

              <div className="flex gap-2">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-brown/20 flex items-center justify-center text-brown/60 hover:text-brown hover:border-brown hover:bg-brown/5 transition-all duration-200"
                  >
                    <Github size={14} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-brown text-beige flex items-center justify-center hover:bg-accent transition-all duration-200"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-brown mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-brown/50 tracking-wider">{project.subtitle}</p>
            </div>

            <p className="text-brown/70 font-body text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Right */}
          <div className={`${project.featured ? 'md:w-1/2 flex flex-col justify-between' : ''} space-y-4`}>
            {project.featured && (
              <div className="relative rounded-2xl overflow-hidden bg-brown/5 border border-brown/10 h-40 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-tea to-softgreen opacity-40 blur-xl" />
                </div>
                <div className="relative text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-xs font-mono text-brown/50">Text → Image</p>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-brown/8 text-brown/70 text-xs font-mono rounded-full border border-brown/10"
                  style={{ background: `${project.accent}22` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-tea/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label line-accent mb-3">Featured Work</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown">
              Projects
            </h2>
            <p className="text-brown/50 font-body text-sm mb-1 max-w-xs">
              Things I've built from scratch — shipped, polished, and proud of.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}