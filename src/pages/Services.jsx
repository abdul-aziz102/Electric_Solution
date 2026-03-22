import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Home, Building2, Sun, Cpu, Factory, Wrench, Shield, Clock, Award, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Electrical',
      subtitle: 'Home & Apartment Solutions',
      description: 'Complete home electrical solutions — from new installations to repairs, upgrades, and safety inspections.',
      features: ['Home Rewiring', 'Panel Upgrades', 'Lighting Installation', 'Outlet & Switch Repair', 'Ceiling Fan Installation', 'Home Safety Inspections'],
      accent: 'from-yellow-400 to-orange-400',
      glow: 'rgba(251,191,36,0.15)',
      badge: 'Most Popular',
    },
    {
      icon: Building2,
      title: 'Commercial Electrical',
      subtitle: 'Offices & Retail Spaces',
      description: 'Professional electrical services for offices, retail spaces, and commercial properties of any scale.',
      features: ['Office Wiring', 'Emergency Lighting', 'Data Cabling', 'Security Systems', 'Energy Management', 'Code Compliance'],
      accent: 'from-blue-400 to-cyan-400',
      glow: 'rgba(96,165,250,0.15)',
      badge: null,
    },
    {
      icon: Factory,
      title: 'Industrial Electrical',
      subtitle: 'Manufacturing & Facilities',
      description: 'Heavy-duty electrical installations for manufacturing plants and large industrial facilities.',
      features: ['Machinery Wiring', 'Motor Controls', 'Power Distribution', 'Preventive Maintenance', 'Equipment Installation', 'System Upgrades'],
      accent: 'from-orange-400 to-red-400',
      glow: 'rgba(248,113,113,0.15)',
      badge: null,
    },
    {
      icon: Sun,
      title: 'Solar Installation',
      subtitle: 'Renewable Energy Systems',
      description: 'Sustainable energy solutions with professional solar panel design, installation and maintenance.',
      features: ['Solar Design', 'Panel Installation', 'Inverter Setup', 'Grid Connection', 'Battery Storage', 'Monitoring Systems'],
      accent: 'from-green-400 to-emerald-400',
      glow: 'rgba(74,222,128,0.15)',
      badge: 'Eco-Friendly',
    },
    {
      icon: Cpu,
      title: 'Smart Home Automation',
      subtitle: 'Intelligent Living Systems',
      description: 'Modern smart electrical systems for automated, connected, and energy-efficient homes.',
      features: ['Smart Lighting', 'Voice Control', 'Automated Switches', 'Energy Monitoring', 'Integration Setup', 'App Control'],
      accent: 'from-purple-400 to-pink-400',
      glow: 'rgba(192,132,252,0.15)',
      badge: 'New',
    },
    {
      icon: Zap,
      title: 'Emergency Services',
      subtitle: '24/7 Rapid Response',
      description: 'Round-the-clock emergency response for any urgent electrical issues — fast, safe, and reliable.',
      features: ['Power Outages', 'Electrical Fires', 'Circuit Failures', 'Emergency Repairs', 'Safety Hazards', 'Immediate Response'],
      accent: 'from-red-400 to-orange-400',
      glow: 'rgba(248,113,113,0.15)',
      badge: '24/7',
    },
  ]

  const whyUs = [
    { icon: Award, title: 'Certified Experts', desc: 'Fully licensed & insured professionals', accent: 'from-yellow-400 to-orange-400' },
    { icon: Shield, title: 'Safety First', desc: 'Strict code-compliant workmanship', accent: 'from-blue-400 to-cyan-400' },
    { icon: Clock, title: '24/7 Available', desc: 'Emergency response anytime', accent: 'from-green-400 to-emerald-400' },
    { icon: Wrench, title: 'Quality Work', desc: 'Backed by satisfaction guarantee', accent: 'from-purple-400 to-pink-400' },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <ServicesHero />
      <ServicesGrid services={services} />
      <WhyUsBar whyUs={whyUs} />
      <ServicesCTA />
    </div>
  )
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
const ServicesHero = () => (
  <section className="relative pt-36 pb-20 overflow-hidden bg-gray-950">
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.9) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(251,191,36,0.07),transparent)]" />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-6">
          <Zap className="w-3 h-3 fill-yellow-400" strokeWidth={0} />
          Professional Electrical Services
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          What We{' '}
          <span
            className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Deliver
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From residential rewiring to industrial power systems — we provide certified, code-compliant electrical solutions built to last.
        </p>
      </motion.div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8 mt-12"
      >
        {[
          { num: '6', label: 'Service Categories' },
          { num: '15+', label: 'Years Experience' },
          { num: '2000+', label: 'Projects Completed' },
          { num: '100%', label: 'Satisfaction Rate' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-black text-yellow-400">{s.num}</div>
            <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ─────────────────────────────────────────
// SERVICES GRID
// ─────────────────────────────────────────
const ServicesGrid = ({ services }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Card glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: service.glow }}
      />

      <div className="relative bg-[#0e0e14] border border-white/6 group-hover:border-white/12 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col">

        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3.5 rounded-xl bg-gradient-to-br ${service.accent} shadow-lg`}>
            <service.icon className="w-6 h-6 text-gray-950" />
          </div>
          {service.badge && (
            <span className={`text-[10px] font-black tracking-[2px] uppercase px-3 py-1 rounded-full bg-gradient-to-r ${service.accent} text-gray-950`}>
              {service.badge}
            </span>
          )}
        </div>

        {/* Text */}
        <div className="mb-6">
          <p className="text-xs font-bold tracking-[2px] uppercase text-gray-600 mb-1">{service.subtitle}</p>
          <h2 className="text-2xl font-black text-white mb-3 tracking-tight">{service.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Features */}
        <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8 flex-1">
          {service.features.map((f, j) => (
            <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
              <CheckCircle className="w-3.5 h-3.5 shrink-0 text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/8 text-gray-400 hover:text-white hover:border-yellow-400/25 hover:bg-yellow-400/5 text-sm font-semibold transition-all duration-300 group/btn"
        >
          Request This Service
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────
// WHY US BAR
// ─────────────────────────────────────────
const WhyUsBar = ({ whyUs }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 bg-[#060609] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(251,191,36,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Choose{' '}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              ElectricPro
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900/40 border border-white/6 hover:border-white/12 rounded-2xl p-7 text-center transition-all duration-300"
            >
              <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${item.accent} mb-5 shadow-lg`}>
                <item.icon className="w-6 h-6 text-gray-950" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────
const ServicesCTA = () => (
  <section className="py-20 bg-gray-950 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 p-[1px]"
      >
        <div className="relative bg-[#0e0e14] rounded-3xl px-10 py-14 overflow-hidden">
          {/* Grid inside */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(251,191,36,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.9) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(251,191,36,0.06),transparent)]" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                Not sure which service<br />
                <span
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  you need?
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-md">
                Call us for a free consultation. Our experts will assess your needs and recommend the best solution.
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
                Send a Message
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Services