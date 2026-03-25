import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['C++', 'JavaScript', 'Python', 'Java'],
    color: '#D4E09B',
  },
  {
    category: 'Web & Frontend',
    icon: '⬡',
    skills: ['React.js', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion'],
    color: '#CBDFBD',
  },
  {
    category: 'Backend & DB',
    icon: '⊗',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    color: '#F19C79',
  },
  {
    category: 'Data & AI',
    icon: '≈',
    skills: ['NumPy', 'Pandas', 'spaCy', 'scikit-learn', 'NLP', 'OCR'],
    color: '#D4E09B',
  },
  {
    category: 'Tools & DevOps',
    icon: '⊕',
    skills: ['Git', 'GitHub', 'Docker', 'Razorpay', 'OpenAI API'],
    color: '#CBDFBD',
  },
  {
    category: 'CS Fundamentals',
    icon: '∑',
    skills: ['DSA', 'OOPs', 'DBMS', 'OS', 'SQL', 'Computer Networks'],
    color: '#F19C79',
  },
]

const proficiencyItems = [
  { label: 'Full-Stack MERN', level: 85 },
  { label: 'Data Science & ML', level: 75 },
  { label: 'C++ & DSA', level: 80 },
  { label: 'Docker & DevOps', level: 65 },
  { label: 'System Design', level: 60 },
]

function SkillGroup({ group, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-softgreen/40 hover:border-brown/20 transition-all duration-300 hover:shadow-lg hover:shadow-brown/8 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-mono font-bold text-brown"
          style={{ background: `${group.color}60` }}
        >
          {group.icon}
        </span>
        <h3 className="font-display font-semibold text-brown text-sm">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-xs font-mono text-brown/80 rounded-lg skill-tag"
            style={{ background: `${group.color}40`, border: `1px solid ${group.color}80` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProficiencyBar({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-brown/80">{item.label}</span>
        <span className="text-xs font-mono text-brown/50">{item.level}%</span>
      </div>
      <div className="h-1.5 bg-softgreen/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${item.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #CBDFBD, #D4E09B, #F19C79)`
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true })

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-softgreen/25 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label line-accent mb-3">What I work with</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown">
              Skills
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Skill Groups — 2 cols */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} group={group} index={i} />
            ))}
          </div>

          {/* Proficiency + extra info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass rounded-2xl p-7 border border-softgreen/40"
            >
              <h3 className="font-display font-semibold text-brown mb-6">Proficiency</h3>
              <div className="space-y-4">
                {proficiencyItems.map((item, i) => (
                  <ProficiencyBar key={item.label} item={item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-dark rounded-2xl p-6 border border-brown/15"
            >
              <p className="text-xs font-mono text-brown/50 mb-3 tracking-wider uppercase">Currently Learning</p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'PostgreSQL', 'LangChain', 'AWS'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono text-brown/70 bg-beige/80 rounded-full border border-brown/15 skill-tag"
                  >
                    {t} ✦
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
