import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Star, Award, Zap } from 'lucide-react'

const achievements = [
  {
    tier: 'gold',
    icon: '🥇',
    title: '1st Position — DevAlchemy (CSI)',
    desc: 'Built Prompt Lab, winning top honors at the inter-college innovation challenge.',
    tag: 'Competition',
    color: '#D4E09B',
  },
  {
    tier: 'gold',
    icon: '🥇',
    title: '1st Position — Kalamgiri Panel Discussion',
    desc: "Won panel discussion on Women's Day featuring real-world dialogue and leadership.",
    tag: 'Leadership',
    color: '#D4E09B',
  },
  {
    tier: 'silver',
    icon: '🏆',
    title: 'Semi-finalist — Adobe India Hackathon 2025',
    desc: 'Built Knowledge Weaver, a PDF intelligence system using NLP + OCR under pressure.',
    tag: 'Hackathon',
    color: '#CBDFBD',
  },
  {
    tier: 'silver',
    icon: '🏆',
    title: 'Semi-finalist — TechGig Code Gladiators 2024',
    desc: 'Competed nationally among thousands in one of India\'s biggest coding competitions.',
    tag: 'Coding',
    color: '#CBDFBD',
  },
  {
    tier: 'silver',
    icon: '⭐',
    title: 'Top 5 — Geek Tank (GeeksforGeeks)',
    desc: 'Ranked in top 5 at GeeksforGeeks college-level problem solving championship.',
    tag: 'DSA',
    color: '#F19C79',
  },
  {
    tier: 'standard',
    icon: '🥈',
    title: '2nd Position — Express Art 3.0 (ISTE)',
    desc: 'Recognized for creative expression at the Institute of Scientific and Technical society.',
    tag: 'Creative',
    color: '#CBDFBD',
  },
  {
    tier: 'standard',
    icon: '🥈',
    title: '2nd Position — Talent Show (MAGAN)',
    desc: 'Showcased musical talent as a vocalist at MAGAN Music Society annual event.',
    tag: 'Music',
    color: '#CBDFBD',
  },
  {
    tier: 'standard',
    icon: '🥉',
    title: '3rd Position — German Competition (FREGEJA)',
    desc: 'Competed in German language examination, showcasing multilingual ability.',
    tag: 'Language',
    color: '#D4E09B',
  },
  {
    tier: 'standard',
    icon: '✅',
    title: 'Smart India Hackathon — College Qualifier',
    desc: 'Cleared SIH at the college level, advancing to the national problem-solving challenge.',
    tag: 'Hackathon',
    color: '#D4E09B',
  },
]

const tagColors = {
  Hackathon: '#D4E09B',
  Coding: '#CBDFBD',
  DSA: '#F19C79',
  Competition: '#D4E09B',
  Leadership: '#CBDFBD',
  Creative: '#F19C79',
  Music: '#D4E09B',
  Language: '#CBDFBD',
}

function AchievementCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group glass rounded-2xl p-5 border border-softgreen/40 hover:border-brown/20 transition-all duration-300 hover:shadow-lg hover:shadow-brown/8 hover:-translate-y-1 flex gap-4"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: `${item.color}50` }}
      >
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h4 className="font-display font-semibold text-brown text-sm leading-snug">
            {item.title}
          </h4>
          <span
            className="px-2 py-0.5 text-[10px] font-mono rounded-full shrink-0"
            style={{
              background: `${tagColors[item.tag] || '#CBDFBD'}40`,
              color: '#A44A3F',
              border: `1px solid ${tagColors[item.tag] || '#CBDFBD'}60`
            }}
          >
            {item.tag}
          </span>
        </div>
        <p className="text-xs text-brown/60 font-body leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="achievements" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-tea/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label line-accent mb-3">Recognition</p>
          <div className="flex items-end gap-6 flex-wrap">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown">
              Achievements
            </h2>
          </div>

          {/* Stats banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: <Trophy size={18} />, label: '5x Winner', sub: 'Competitions' },
              { icon: <Star size={18} />, label: '2x Semi-finalist', sub: 'National Hackathons' },
              { icon: <Award size={18} />, label: 'Top 5', sub: 'GeeksforGeeks' },
              { icon: <Zap size={18} />, label: '8+ Events', sub: 'Organized & Competed' },
            ].map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 border border-softgreen/40 text-center"
              >
                <div className="flex items-center justify-center text-accent mb-2">{s.icon}</div>
                <p className="font-display font-bold text-brown text-lg">{s.label}</p>
                <p className="text-xs text-brown/50 font-mono mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
