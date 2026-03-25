import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Code2, Send, MapPin, Phone } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'ankitagupta2603@gmail.com',
    href: 'mailto:ankitagupta2603@gmail.com',
    color: '#F19C79',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/ankitaa2603',
    href: 'https://github.com/ankitaa2603',
    color: '#D4E09B',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin/Ankita Gupta',
    href: 'https://linkedin.com/in/ankita-gupta',
    color: '#CBDFBD',
  },
  {
    icon: <Code2 size={18} />,
    label: 'LeetCode',
    value: 'Profile Link',
    href: '#',
    color: '#D4E09B',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-56 h-56 bg-tea/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-brown mb-4">
            Get in <span className="italic font-normal gradient-text">Touch.</span>
          </h2>
          <p className="text-brown/60 font-body text-base max-w-md mx-auto leading-relaxed">
            Whether it's an internship, collaboration, or just a friendly hello —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Location */}
            <div className="glass rounded-2xl p-6 border border-softgreen/40 flex items-center gap-4 transition-all duration-300 hover:border-brown/20 hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-tea/60 flex items-center justify-center text-brown">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-brown/40 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-sm font-body text-brown">Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-softgreen/40 flex items-center gap-4 transition-all duration-300 hover:border-brown/20 hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-brown">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-brown/40 uppercase tracking-wider mb-0.5">Phone</p>
                <p className="text-sm font-body text-brown">+91 7783805022</p>
              </div>
            </div>

            {/* Contact links */}
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 border border-softgreen/40 hover:border-brown/20 hover:shadow-lg hover:shadow-brown/8 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-brown"
                  style={{ background: `${link.color}50` }}
                >
                  {link.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-brown/40 mb-0.5">{link.label}</p>
                  <p className="text-sm font-body text-brown">{link.value}</p>
                </div>
                <span className="text-brown/30 group-hover:text-brown group-hover:translate-x-1 transition-all duration-200">→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-softgreen/40 space-y-5">
              <div>
                <label className="block text-xs font-mono text-brown/50 mb-2 tracking-wider uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 bg-beige/50 border border-softgreen/50 rounded-xl text-brown placeholder:text-brown/30 text-sm font-body focus:outline-none focus:border-brown/40 focus:ring-2 focus:ring-brown/10 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brown/50 mb-2 tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 bg-beige/50 border border-softgreen/50 rounded-xl text-brown placeholder:text-brown/30 text-sm font-body focus:outline-none focus:border-brown/40 focus:ring-2 focus:ring-brown/10 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brown/50 mb-2 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Hi Ankita, I'd love to collaborate on..."
                  className="w-full px-4 py-3 bg-beige/50 border border-softgreen/50 rounded-xl text-brown placeholder:text-brown/30 text-sm font-body focus:outline-none focus:border-brown/40 focus:ring-2 focus:ring-brown/10 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-brown text-beige rounded-xl font-body text-sm font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-brown/40 font-mono">
                I usually reply within 24 hours ✦
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
