import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Zap, CheckCircle, ArrowRight, Shield } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <ContactHero />
      <ContactInfo />
      <ContactMain formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} />
    </div>
  )
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
const ContactHero = () => (
  <section className="relative pt-36 pb-20 overflow-hidden bg-gray-950">
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.9) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(251,191,36,0.07),transparent)]" />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
          Available Now — Response within 1 hour
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          Let's{' '}
          <span
            className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Connect
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Get a free consultation and quote today. Our certified electricians are ready to power your next project — big or small.
        </p>
      </motion.div>
    </div>
  </section>
)

// ─────────────────────────────────────────
// CONTACT INFO CARDS
// ─────────────────────────────────────────
const ContactInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const cards = [
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      sub: 'Mon–Fri 8AM–6PM',
      accent: 'from-yellow-400 to-orange-400',
      glow: 'rgba(251,191,36,0.15)',
      action: 'tel:+15551234567',
      actionLabel: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@electricpro.com', 'support@electricpro.com'],
      sub: 'Reply within 2 hours',
      accent: 'from-blue-400 to-cyan-400',
      glow: 'rgba(96,165,250,0.15)',
      action: 'mailto:info@electricpro.com',
      actionLabel: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['123 Electric Avenue', 'New York, NY 10001'],
      sub: 'Walk-ins welcome',
      accent: 'from-green-400 to-emerald-400',
      glow: 'rgba(74,222,128,0.15)',
      action: 'https://maps.google.com',
      actionLabel: 'Get Directions',
    },
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: card.glow }}
              />
              <div className="relative bg-[#0e0e14] border border-white/6 group-hover:border-white/12 rounded-2xl p-7 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.accent} mb-5 shadow-lg`}>
                  <card.icon className="w-5 h-5 text-gray-950" />
                </div>
                <h3 className="text-xs font-black tracking-[2px] uppercase text-gray-600 mb-3">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-white font-semibold text-sm">{line}</p>
                ))}
                <p className="text-gray-600 text-xs mt-2 mb-5">{card.sub}</p>
                <a
                  href={card.action}
                  target={card.action.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 group-hover:text-yellow-400 transition-colors duration-300"
                >
                  {card.actionLabel}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// MAIN CONTACT SECTION
// ─────────────────────────────────────────
const ContactMain = ({ formData, handleChange, handleSubmit, submitted }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const inputClass = `w-full px-4 py-3.5 bg-gray-950/60 border border-white/8 rounded-xl text-white text-sm placeholder-gray-700 focus:border-yellow-400/40 focus:outline-none focus:bg-gray-950/80 transition-all duration-200`
  const labelClass = `block text-[11px] font-bold tracking-[2px] uppercase text-gray-600 mb-2`

  const hours = [
    { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM', active: true },
    { day: 'Saturday', time: '9:00 AM – 4:00 PM', active: true },
    { day: 'Sunday', time: 'Emergency Only', active: false },
  ]

  const areas = [
    'New York City & Boroughs',
    'Long Island',
    'Westchester County',
    'Northern New Jersey',
    'Connecticut (Fairfield County)',
  ]

  return (
    <section ref={ref} className="py-16 pb-28 bg-[#060609] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(251,191,36,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0e0e14] border border-white/6 rounded-2xl p-8">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                  <Send className="w-4 h-4 text-gray-950" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white tracking-tight">Send Us a Message</h2>
                  <p className="text-gray-600 text-xs mt-0.5">We'll get back to you within 1 hour</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">Thank you! Our team will contact you within 1 hour during business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} required
                        placeholder="+1 (555) 123-4567"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Service Needed</label>
                      <select
                        name="service" value={formData.service}
                        onChange={handleChange} required
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" className="bg-gray-950">Select a service</option>
                        <option value="residential" className="bg-gray-950">Residential Electrical</option>
                        <option value="commercial" className="bg-gray-950">Commercial Solutions</option>
                        <option value="industrial" className="bg-gray-950">Industrial Systems</option>
                        <option value="solar" className="bg-gray-950">Solar Installation</option>
                        <option value="smart-home" className="bg-gray-950">Smart Home Automation</option>
                        <option value="emergency" className="bg-gray-950">Emergency Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} required rows="5"
                      placeholder="Tell us about your project — size, location, timeline..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Trust line */}
                  <div className="flex items-center gap-2 text-gray-700 text-xs">
                    <Shield className="w-3.5 h-3.5 shrink-0" />
                    Your information is 100% private and never shared with third parties.
                  </div>

                  <button
                    type="submit"
                    className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-gray-950 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%] animate-[shimmer_3s_ease_infinite]" />
                    <Zap className="relative z-10 w-4 h-4 fill-gray-950" strokeWidth={0} />
                    <span className="relative z-10">Send Message — Free Quote</span>
                    <ArrowRight className="relative z-10 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── RIGHT SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Business Hours */}
            <div className="bg-[#0e0e14] border border-white/6 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl">
                  <Clock className="w-4 h-4 text-gray-950" />
                </div>
                <h3 className="text-sm font-black text-white tracking-tight">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/4 last:border-0">
                    <span className="text-gray-500 text-sm">{h.day}</span>
                    <span className={`text-sm font-bold ${h.active ? 'text-white' : 'text-yellow-400'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
                  <p className="text-green-400 text-xs font-bold">24/7 Emergency Services Available</p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 p-[1px]">
              <div className="relative bg-[#0e0e14] rounded-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(251,191,36,0.05),transparent)]" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" strokeWidth={0} />
                    <h3 className="text-sm font-black text-white">Emergency Service?</h3>
                  </div>
                  <p className="text-gray-500 text-xs mb-5 leading-relaxed">
                    Electrical emergency? Don't wait — call our 24/7 hotline for immediate response.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-950 font-black text-sm hover:shadow-[0_6px_24px_rgba(251,191,36,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-[#0e0e14] border border-white/6 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
                  <MapPin className="w-4 h-4 text-gray-950" />
                </div>
                <h3 className="text-sm font-black text-white tracking-tight">Service Areas</h3>
              </div>
              <p className="text-gray-600 text-xs mb-4 font-medium">We proudly serve:</p>
              <ul className="space-y-2.5">
                {[
                  'New York City & Boroughs',
                  'Long Island',
                  'Westchester County',
                  'Northern New Jersey',
                  'Connecticut (Fairfield County)',
                ].map((area, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-gray-400 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-400/60 shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact