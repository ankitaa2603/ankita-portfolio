import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Users } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    icon: <Briefcase size={16} />,
    role: 'Apprentice',
    org: 'Tata Steel Pvt. Ltd.',
    location: 'Jamshedpur, Jharkhand',
    period: '2021 – 2023',
    duration: '2 Years',
    highlights: [
      'Selected from 25,000+ candidates for competitive stipend-based apprenticeship',
      'Gained hands-on exposure to industrial workflows, safety standards, and large-scale manufacturing systems',
      'Assisted in process optimization and cross-department maintenance operations',
    ],
    color: '#F19C79',
  },
]

const education = [
  {
    icon: <GraduationCap size={16} />,
    degree: 'B.Tech in Computer Science (Data Science)',
    institution: 'SRM IST, Ghaziabad',
    period: 'June 2023 – May 2027',
    detail: 'CGPA: 9.65',
    highlight: true,
  },
  {
    icon: <GraduationCap size={16} />,
    degree: 'Intermediate (PCM)',
    institution: 'Jusco School South Park, Jamshedpur',
    period: '2022',
    detail: '78%',
    highlight: false,
  },
  {
    icon: <GraduationCap size={16} />,
    degree: 'Matriculation',
    institution: 'Sri Krishna Public School, Jamshedpur',
    period: '2020',
    detail: '94%',
    highlight: false,
  },
]

const responsibilities = [
  { role: 'Technical Member', org: 'ISTE', icon: '⚙️' },
  { role: 'Event Management Co-Lead', org: 'GeeksforGeeks', icon: '🌿' },
  { role: 'General Secretary & Vocalist', org: 'MAGAN Music Society', icon: '🎵' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label line-accent mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Work Experience */}
          <div className="space-y-6">
            <p className="text-xs font-mono text-brown/50 tracking-widest uppercase mb-4">Work Experience</p>
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="glass rounded-3xl p-8 border border-softgreen/40 hover:border-brown/20 transition-all duration-300 hover:shadow-xl hover:shadow-brown/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-brown"
                      style={{ background: `${exp.color}30` }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brown text-lg">{exp.role}</h3>
                      <p className="text-sm text-brown/60 font-body">{exp.org}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-accent/20 text-brown/70 text-xs font-mono rounded-full">
                      {exp.duration}
                    </span>
                    <p className="text-xs text-brown/40 font-mono mt-1">{exp.period}</p>
                  </div>
                </div>

                <p className="text-xs font-mono text-brown/40 mb-4">📍 {exp.location}</p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-brown/70 font-body leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Positions of Responsibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass rounded-3xl p-7 border border-softgreen/40"
            >
              <div className="flex items-center gap-2 mb-5">
                <Users size={16} className="text-brown/60" />
                <p className="text-xs font-mono text-brown/50 tracking-widest uppercase">Leadership Roles</p>
              </div>
              <div className="space-y-3">
                {responsibilities.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-softgreen/30 last:border-0">
                    <span className="text-lg">{r.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-brown">{r.role}</p>
                      <p className="text-xs text-brown/50 font-mono">{r.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Education */}
          <div>
            <p className="text-xs font-mono text-brown/50 tracking-widest uppercase mb-4">Education</p>

            <div className="relative space-y-4">
              {/* Timeline line */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-tea via-softgreen to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 ${
                    edu.highlight
                      ? 'bg-accent border-brown shadow-md shadow-accent/30'
                      : 'bg-softgreen border-softgreen'
                  }`} />

                  <div className={`glass rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                    edu.highlight
                      ? 'border-accent/30 hover:shadow-accent/10'
                      : 'border-softgreen/40 hover:shadow-brown/8'
                  }`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`font-display font-semibold text-brown mb-1 ${edu.highlight ? 'text-base' : 'text-sm'}`}>
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-brown/60 font-body">{edu.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${
                          edu.highlight
                            ? 'bg-tea text-brown'
                            : 'bg-softgreen/30 text-brown/70'
                        }`}>
                          {edu.detail}
                        </span>
                        <p className="text-xs text-brown/40 font-mono mt-1.5">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 glass-dark rounded-2xl p-6 border border-brown/15"
            >
              <p className="text-xs font-mono text-brown/40 mb-3 tracking-wider">FUN FACT</p>
              <p className="text-sm text-brown/70 font-body leading-relaxed">
                Before diving into tech, I was selected from{' '}
                <span className="text-brown font-semibold">25,000+ candidates</span> for Tata Steel's
                competitive apprenticeship — a lesson in discipline and scale I carry into every project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
