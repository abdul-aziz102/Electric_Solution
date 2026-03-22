import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Target, Zap, Shield, Clock, CheckCircle, ArrowRight, Phone, Users, TrendingUp, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <WhyChooseUs />
      <TeamSection />
      <AchievementsSection />
      <AboutCTA />
    </div>
  )
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
const AboutHero = () => (
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
          <Zap className="w-3 h-3 fill-yellow-400" strokeWidth={0} />
          Est. 2010 — Trusted for 15+ Years
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          The Team{' '}
          <span
            className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Behind the Sparks
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Since 2010, ElectricPro has been delivering safe, reliable, and innovative electrical solutions — powering homes, businesses, and industries across the country.
        </p>
      </motion.div>
    </div>
  </section>
)

// ─────────────────────────────────────────
// OUR STORY
// ─────────────────────────────────────────
const OurStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-[#060609] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                alt="Electrician at work"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 right-6 bg-gray-950/80 backdrop-blur-xl border border-yellow-400/15 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shrink-0">
                  <Award className="w-5 h-5 text-gray-950" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Fully Certified & Licensed</div>
                  <div className="text-gray-400 text-xs">All electricians are background-checked & insured</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-5">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              From a Small Shop to an{' '}
              <span
                className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Industry Leader
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
              Founded in 2010, ElectricPro started as a small local electrical service with just two electricians and a van. Our goal was simple: do great work, treat every customer right, and never cut corners on safety.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              Over 15 years, that commitment turned into 2,000+ completed projects across residential, commercial, and industrial sectors. Today our team of 50+ certified professionals brings decades of combined experience to every single job — big or small.
            </p>

            {/* Timeline highlights */}
            <div className="space-y-4">
              {[
                { year: '2010', event: 'ElectricPro founded in New York' },
                { year: '2015', event: 'Expanded to commercial & industrial sectors' },
                { year: '2020', event: 'Launched smart home & solar division' },
                { year: '2024', event: '2,000+ projects & 500+ happy clients' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xs font-black text-yellow-400 tracking-wider w-10 shrink-0">{item.year}</span>
                  <div className="w-px h-4 bg-yellow-400/30 shrink-0" />
                  <span className="text-gray-400 text-sm">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// MISSION / VISION / VALUES
// ─────────────────────────────────────────
const MissionVisionValues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To provide safe, reliable, and innovative electrical solutions that power homes, businesses, and industries while exceeding every customer expectation.',
      accent: 'from-yellow-400 to-orange-400',
      glow: 'rgba(251,191,36,0.15)',
    },
    {
      icon: Zap,
      title: 'Our Vision',
      text: 'To be the most trusted and innovative electrical service provider — leading the industry in quality, safety, and sustainable energy solutions.',
      accent: 'from-blue-400 to-cyan-400',
      glow: 'rgba(96,165,250,0.15)',
    },
    {
      icon: Award,
      title: 'Our Values',
      text: 'Safety first, quality always, satisfaction guaranteed. We build lasting client relationships through integrity, transparency, and professionalism.',
      accent: 'from-green-400 to-emerald-400',
      glow: 'rgba(74,222,128,0.15)',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Built on{' '}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Strong Principles
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: card.glow }}
              />
              <div className="relative bg-[#0e0e14] border border-white/6 group-hover:border-white/12 rounded-2xl p-8 transition-all duration-300 h-full">
                <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${card.accent} mb-6 shadow-lg`}>
                  <card.icon className="w-6 h-6 text-gray-950" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// WHY CHOOSE US
// ─────────────────────────────────────────
const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const items = [
    { icon: Award, title: 'Certified Professionals', desc: 'Fully licensed, insured, and background-checked electricians on every job.', accent: 'from-yellow-400 to-orange-400' },
    { icon: Shield, title: 'Safety First', desc: 'Strict adherence to all electrical codes and safety regulations — always.', accent: 'from-blue-400 to-cyan-400' },
    { icon: Clock, title: '24/7 Emergency Service', desc: 'Round-the-clock support for urgent electrical issues, day or night.', accent: 'from-green-400 to-emerald-400' },
    { icon: CheckCircle, title: 'Warranty on All Work', desc: 'Every project comes with a comprehensive workmanship warranty.', accent: 'from-purple-400 to-pink-400' },
    { icon: TrendingUp, title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees — you always know what you pay.', accent: 'from-orange-400 to-red-400' },
    { icon: Users, title: 'Experienced Team', desc: '50+ certified electricians with decades of combined industry experience.', accent: 'from-cyan-400 to-blue-400' },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#060609] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Clients{' '}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Trust Us
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900/40 border border-white/6 hover:border-white/12 rounded-2xl p-6 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.accent} mb-4 shadow-lg`}>
                <item.icon className="w-5 h-5 text-gray-950" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// TEAM SECTION
// ─────────────────────────────────────────
const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const team = [
    {
      name: 'Robert Johnson',
      role: 'Founder & Master Electrician',
      exp: '20 yrs experience',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Lead Commercial Electrician',
      exp: '14 yrs experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Solar & Smart Systems Lead',
      exp: '10 yrs experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Industrial Systems Expert',
      exp: '16 yrs experience',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(251,191,36,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            The Experts{' '}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Behind Every Job
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-yellow-400/10" />
              <div className="relative bg-[#0e0e14] border border-white/6 group-hover:border-yellow-400/15 rounded-2xl overflow-hidden transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-white text-base tracking-tight">{member.name}</h3>
                  <p className="text-gray-500 text-xs mt-1 mb-3">{member.role}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-yellow-400/70 font-medium">{member.exp}</span>
                    <div className="flex gap-0.5">
                      {[...Array(member.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────
const AchievementsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const stats = [
    { num: '15+', label: 'Years Experience', color: 'text-yellow-400', icon: Award },
    { num: '2000+', label: 'Projects Completed', color: 'text-orange-400', icon: TrendingUp },
    { num: '500+', label: 'Happy Clients', color: 'text-green-400', icon: Users },
    { num: '50+', label: 'Team Members', color: 'text-blue-400', icon: Shield },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#060609] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            15 Years of{' '}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Proven Results
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-[#0e0e14] border border-white/6 hover:border-white/12 rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-white/4 mb-4">
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className={`text-4xl font-black ${s.color} mb-2 tracking-tight`}>{s.num}</div>
              <div className="text-gray-500 text-sm font-medium tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// CTA
// ─────────────────────────────────────────
const AboutCTA = () => (
  <section className="py-24 bg-gray-950 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 p-[1px]"
      >
        <div className="relative bg-[#0e0e14] rounded-3xl px-10 py-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(251,191,36,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.9) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(251,191,36,0.05),transparent)]" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                Ready to Work with{' '}
                <span
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  the Best?
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-md leading-relaxed">
                Get in touch today for a free consultation. Our team is ready to power your next project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-950 font-black text-sm tracking-wide hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now — Free Quote
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-white/5 hover:border-yellow-400/25 transition-all duration-300"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default About