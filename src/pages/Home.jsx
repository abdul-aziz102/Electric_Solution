import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Zap, Shield, Clock, Award, ArrowRight, CheckCircle, Star, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactPreviewSection />
    </div>
  )
}

// ============================================================
// HERO SECTION
// ============================================================
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(251,191,36,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(251,191,36,0.08),transparent)]" />

      {/* Animated floating bolts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.06, 0.18, 0.06] }}
            transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
          >
            <Zap className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-yellow-400/8 border border-yellow-400/25 rounded-full text-yellow-400 text-sm font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
                Professional Electricians — Available 24/7
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Power</span>
              <br />
              <span
                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Your World
              </span>
              <br />
              <span className="text-white/70 text-4xl sm:text-5xl lg:text-5xl font-bold">With Confidence</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Expert electrical services for residential, commercial & industrial projects.
              From simple repairs to complex installations — delivered with precision and safety.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
            >
              {[
                { num: '15+', label: 'Years Experience', color: 'text-yellow-400' },
                { num: '2000+', label: 'Projects Done', color: 'text-orange-400' },
                { num: '500+', label: 'Happy Clients', color: 'text-green-400' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className={`text-4xl font-black ${s.color} tracking-tight`}>{s.num}</div>
                  <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-950 text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(251,191,36,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%] animate-[shimmer_3s_ease_infinite]" />
                <Zap className="relative z-10 w-4 h-4 fill-gray-950" strokeWidth={0} />
                <span className="relative z-10">Get Free Quote</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
              <img
                src="https://img.freepik.com/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67091.jpg?semt=ais_rp_progressive&w=740&q=80"
                alt="Professional Electrician"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-5 left-5 right-5"
              >
                <div className="bg-gray-950/80 backdrop-blur-xl border border-yellow-400/15 rounded-xl p-4 flex items-center gap-4">
                  <div className="p-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shrink-0">
                    <Shield className="w-5 h-5 text-gray-950" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Certified & Licensed</div>
                    <div className="text-gray-400 text-xs">All work backed by warranty</div>
                  </div>
                  <div className="ml-auto flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-gray-950 flex items-center justify-center text-[9px] font-bold text-gray-950">
                        {['JD', 'MK', 'AR'][i]}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 bg-gray-900 border border-white/8 rounded-xl px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <div className="text-2xl font-black text-yellow-400">4.9★</div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Avg Rating</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -right-5 bg-gray-900 border border-white/8 rounded-xl px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <div className="text-2xl font-black text-green-400">24/7</div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-semibold tracking-[3px] text-gray-600 uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-yellow-400/50" />
        </div>
      </motion.div>
    </section>
  )
}

// ============================================================
// SERVICES SECTION
// ============================================================
const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const services = [
    { icon: Zap, title: 'Residential Wiring', description: 'Complete home electrical installations, rewiring, and upgrades for modern living.', accent: 'from-yellow-400 to-orange-400', glow: 'rgba(251,191,36,0.2)' },
    { icon: Shield, title: 'Commercial Solutions', description: 'Professional electrical systems for offices, retail spaces, and commercial buildings.', accent: 'from-blue-400 to-cyan-400', glow: 'rgba(96,165,250,0.2)' },
    { icon: Clock, title: 'Emergency Repairs', description: '24/7 emergency electrical services to keep your property safe and powered.', accent: 'from-red-400 to-orange-400', glow: 'rgba(248,113,113,0.2)' },
    { icon: Award, title: 'Solar Installation', description: 'Eco-friendly solar panel systems for sustainable energy solutions.', accent: 'from-green-400 to-emerald-400', glow: 'rgba(74,222,128,0.2)' },
    { icon: Zap, title: 'Smart Home Systems', description: 'Advanced automation and smart electrical systems for modern homes.', accent: 'from-purple-400 to-pink-400', glow: 'rgba(192,132,252,0.2)' },
    { icon: Shield, title: 'Industrial Electrical', description: 'Heavy-duty electrical solutions for industrial facilities and machinery.', accent: 'from-orange-400 to-yellow-400', glow: 'rgba(251,146,60,0.2)' },
  ]

  return (
    <section ref={ref} className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Comprehensive electrical solutions tailored to your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: service.glow }}
              />
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-white/6 group-hover:border-white/12 rounded-2xl p-7 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-5 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-gray-950" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold text-gray-600 group-hover:text-yellow-400 transition-colors">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// WHY CHOOSE US
// ============================================================
const WhyChooseUsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const reasons = [
    { icon: Award, title: 'Certified Professionals', description: 'Licensed and insured electricians with years of proven experience.', accent: 'from-yellow-400 to-orange-400' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock emergency services when you need us most.', accent: 'from-blue-400 to-cyan-400' },
    { icon: Shield, title: 'Safety First', description: 'Strict adherence to safety codes and regulations — always.', accent: 'from-green-400 to-emerald-400' },
    { icon: CheckCircle, title: 'Quality Guaranteed', description: 'Warranty on all work with 100% satisfaction guarantee.', accent: 'from-purple-400 to-pink-400' },
  ]

  return (
    <section ref={ref} className="py-28 bg-[#060609] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
              Why Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Excellence in<br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Every Connection
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don't just fix wires — we build lasting relationships. Our team of expert electricians brings professionalism, safety, and quality to every single job.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group bg-gray-900/50 border border-white/6 hover:border-white/12 rounded-2xl p-6 transition-all duration-300"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${r.accent} mb-4`}>
                  <r.icon className="w-5 h-5 text-gray-950" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// WORK PROCESS
// ============================================================
const WorkProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const steps = [
    { number: '01', title: 'Consultation', description: 'Initial assessment and understanding your electrical needs in detail.' },
    { number: '02', title: 'Planning', description: 'Detailed project planning and transparent cost estimation.' },
    { number: '03', title: 'Execution', description: 'Professional installation by our certified electricians.' },
    { number: '04', title: 'Testing', description: 'Thorough testing and rigorous quality assurance checks.' },
    { number: '05', title: 'Handover', description: 'Final inspection, documentation, and full project handover.' },
  ]

  return (
    <section ref={ref} className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Process</span>
          </h2>
          <p className="text-gray-400 text-lg">Simple, transparent, and efficient every time</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-8 items-start group"
              >
                {/* Number circle */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-gray-950 text-sm shadow-[0_0_20px_rgba(251,191,36,0.3)] z-10 relative">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900/50 border border-white/6 group-hover:border-yellow-400/15 rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-900/80">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// PROJECTS SECTION
// ============================================================
const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const projects = [
    { title: 'Modern Office Complex', category: 'Commercial', image: 'https://images.adsttc.com/media/images/5177/024c/b3fc/4bc6/7600/0006/medium_jpg/7677e_peoplegroup_20130211_2.jpg?1366753865' },
    { title: 'Luxury Villa Wiring', category: 'Residential', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuR1YYKs82gfOUrIOCX4UoRShdhxwR-LeuA&s' },
    { title: 'Solar Farm Installation', category: 'Renewable', image: 'https://media.istockphoto.com/id/1340816904/photo/senior-engineer-and-aboriginal-australian-apprentice-working-together-on-solar-farm.jpg?s=612x612&w=0&k=20&c=8R06bbXX7DLtgftL22aJO2qYYRTXewZe5JzD0vSL4GE=' },
    { title: 'Industrial Plant Setup', category: 'Industrial', image: 'https://www.cad-schroer.com/wp-content/uploads/2000/11/Anlagenbau-Uebersicht.jpg' },
    { title: 'Smart Home Automation', category: 'Technology', image: 'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-25055.jpg' },
    { title: 'Shopping Mall Electrical', category: 'Commercial', image: 'https://media.istockphoto.com/id/2219297094/photo/technicians-inspect-electrical-systems-and-discuss-maintenance-plans-in-industrial-workspace.jpg?s=612x612&w=0&k=20&c=aWtYHZmwoVf5ApXkD15oGvzQ70w4nOEclcJj4SVnasc=' },
  ]

  const categoryColors = {
    Commercial: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    Residential: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    Renewable: 'bg-green-400/10 text-green-400 border-green-400/20',
    Industrial: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    Technology: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
  }

  return (
    <section ref={ref} className="py-28 bg-[#060609] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing our expertise and quality work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/6 hover:border-yellow-400/20 transition-all duration-400"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className={`inline-block text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full border ${categoryColors[project.category] || 'bg-gray-700 text-gray-300'} mb-2`}>
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-yellow-400/30 text-white hover:text-yellow-400 rounded-xl font-semibold text-sm transition-all duration-300 bg-white/5 hover:bg-white/8"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================
// TESTIMONIALS
// ============================================================
const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const testimonials = [
    { name: 'John Smith', role: 'Homeowner', text: 'Excellent service! They rewired my entire house professionally and efficiently. Best in the business!', rating: 5, avatar: 'JS' },
    { name: 'Sarah Johnson', role: 'Business Owner', text: 'Reliable and professional. Our office electrical system works flawlessly. Highly recommend.', rating: 5, avatar: 'SJ' },
    { name: 'Mike Davis', role: 'Property Manager', text: 'Best electricians in town. Always on time and consistently deliver quality work.', rating: 5, avatar: 'MD' },
  ]

  return (
    <section ref={ref} className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(251,191,36,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Client <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-gray-900/50 border border-white/6 hover:border-yellow-400/15 rounded-2xl p-7 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl font-black text-yellow-400/5 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-7 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-gray-950 font-black text-xs">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FAQ SECTION
// ============================================================
const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'Are you licensed and insured?', a: 'Yes, all our electricians are fully licensed, certified, and insured for your complete protection and peace of mind.' },
    { q: 'Do you offer emergency services?', a: 'Absolutely! We provide 24/7 emergency electrical services for any urgent situations, day or night.' },
    { q: 'What areas do you serve?', a: 'We serve residential, commercial, and industrial clients across the entire metropolitan area and surrounding regions.' },
    { q: 'How do you price your services?', a: 'We provide transparent, upfront pricing with detailed quotes before starting any work — no hidden fees, ever.' },
    { q: 'Do you offer warranties?', a: 'Yes, all our work comes with a comprehensive warranty for your complete peace of mind.' },
  ]

  return (
    <section ref={ref} className="py-28 bg-[#060609] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Got <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions?</span>
          </h2>
          <p className="text-gray-400 text-lg">We've got answers</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'border-yellow-400/25 bg-gray-900/80' : 'border-white/6 bg-gray-900/40'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-white text-sm">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <ChevronDown className={`w-4 h-4 transition-colors ${openIndex === i ? 'text-yellow-400' : 'text-gray-500'}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CTA SECTION
// ============================================================
const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400" />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.8) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating bolts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${i * 18}%`, top: `${20 + (i % 3) * 30}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          <Zap className="w-6 h-6 text-gray-950" />
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 tracking-tight leading-tight">
            Ready to Power Up<br />Your Project?
          </h2>
          <p className="text-xl text-gray-950/70 mb-10 max-w-xl mx-auto">
            Get a free consultation and quote today. Let's bring your electrical vision to life!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-yellow-400 rounded-xl font-bold text-base hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================
// CONTACT PREVIEW
// ============================================================
const ContactPreviewSection = () => {
  return (
    <section className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(251,191,36,0.04),transparent)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/8 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Quick response for immediate assistance</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', color: 'from-yellow-400 to-orange-400' },
              { icon: Mail, label: 'Email Us', value: 'info@electricpro.com', color: 'from-blue-400 to-cyan-400' },
              { icon: MapPin, label: 'Visit Us', value: '123 Electric Ave, City', color: 'from-green-400 to-emerald-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-900/50 border border-white/6 rounded-2xl p-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} shrink-0`}>
                  <item.icon className="w-5 h-5 text-gray-950" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">{item.label}</p>
                  <p className="text-white font-semibold text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-900/50 backdrop-blur-sm border border-white/6 rounded-2xl p-8"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-950/60 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:border-yellow-400/40 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-950/60 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:border-yellow-400/40 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-950/60 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:border-yellow-400/40 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full px-4 py-3 bg-gray-950/60 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:border-yellow-400/40 focus:outline-none transition-colors resize-none"
              />
              <button
                type="button"
                className="relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-gray-950 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%] animate-[shimmer_3s_ease_infinite]" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 fill-gray-950" strokeWidth={0} />
                  Send Message
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home