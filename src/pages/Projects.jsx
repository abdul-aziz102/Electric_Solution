import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Building2, Home, Sun, Factory, Cpu, ShoppingBag, ArrowRight, Zap, MapPin, Calendar, CheckCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Downtown Office Complex',
      category: 'Commercial',
      icon: Building2,
      location: 'New York, NY',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      description: 'Complete electrical installation for a 10-story office building including power distribution, lighting systems, and emergency backup.',
      details: ['15,000 sq ft', '200+ outlets', 'LED lighting system', 'Emergency generators'],
      accent: 'from-blue-400 to-cyan-400',
      glow: 'rgba(96,165,250,0.2)',
      badge: 'Commercial',
      badgeColor: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    },
    {
      title: 'Luxury Residential Villa',
      category: 'Residential',
      icon: Home,
      location: 'Miami, FL',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      description: 'High-end home automation and electrical system for a modern luxury villa with full smart controls.',
      details: ['5 bedrooms', 'Smart home integration', 'Outdoor lighting', 'Pool electrical'],
      accent: 'from-yellow-400 to-orange-400',
      glow: 'rgba(251,191,36,0.2)',
      badge: 'Residential',
      badgeColor: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    },
    {
      title: 'Solar Farm Installation',
      category: 'Renewable',
      icon: Sun,
      location: 'Phoenix, AZ',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      description: '500kW solar panel installation with full grid connection and battery storage system.',
      details: ['500kW capacity', '1,200 panels', 'Battery storage', 'Grid integration'],
      accent: 'from-green-400 to-emerald-400',
      glow: 'rgba(74,222,128,0.2)',
      badge: 'Renewable',
      badgeColor: 'bg-green-400/10 text-green-400 border-green-400/20',
    },
    {
      title: 'Manufacturing Plant',
      category: 'Industrial',
      icon: Factory,
      location: 'Detroit, MI',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      description: 'Industrial electrical system for a large manufacturing facility including heavy machinery wiring.',
      details: ['50,000 sq ft', 'Heavy machinery', '3-phase power', 'Safety systems'],
      accent: 'from-orange-400 to-red-400',
      glow: 'rgba(251,146,60,0.2)',
      badge: 'Industrial',
      badgeColor: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    },
    {
      title: 'Smart Home Retrofit',
      category: 'Technology',
      icon: Cpu,
      location: 'Austin, TX',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      description: 'Complete smart home conversion with automated lighting, climate control, and security systems.',
      details: ['Voice control', 'App integration', 'Energy monitoring', 'Security cameras'],
      accent: 'from-purple-400 to-pink-400',
      glow: 'rgba(192,132,252,0.2)',
      badge: 'Technology',
      badgeColor: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    },
    {
      title: 'Shopping Mall Electrical',
      category: 'Commercial',
      icon: ShoppingBag,
      location: 'Chicago, IL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
      description: 'Comprehensive electrical system for a multi-level shopping center with 100+ retail spaces.',
      details: ['100+ stores', 'Central HVAC', 'Emergency lighting', 'Parking systems'],
      accent: 'from-pink-400 to-rose-400',
      glow: 'rgba(244,114,182,0.2)',
      badge: 'Commercial',
      badgeColor: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    },
  ]

  const filters = ['All', 'Commercial', 'Residential', 'Industrial', 'Renewable', 'Technology']

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter || p.badge === activeFilter)

  return (
    <div className="min-h-screen bg-gray-950">
      <ProjectsHero />
      <ProjectsGrid projects={filtered} filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ProjectsCTA />
    </div>
  )
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
const ProjectsHero = () => (
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
          Our Portfolio
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
          Work That{' '}
          <span
            className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Speaks
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From residential homes to large-scale industrial plants — explore our portfolio of completed electrical projects across the country.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8 mt-12"
      >
        {[
          { num: '2000+', label: 'Projects Done' },
          { num: '15+', label: 'Years Active' },
          { num: '6', label: 'Sectors Covered' },
          { num: '98%', label: 'Client Satisfaction' },
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
// GRID + FILTERS
// ─────────────────────────────────────────
const ProjectsGrid = ({ projects, filters, activeFilter, setActiveFilter }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-yellow-400 text-gray-950 border-yellow-400 shadow-[0_4px_20px_rgba(251,191,36,0.35)]'
                  : 'bg-white/4 border-white/8 text-gray-400 hover:text-white hover:border-white/16'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group relative cursor-pointer"
  >
    {/* Glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
      style={{ background: project.glow }}
    />

    <div className="relative bg-[#0e0e14] border border-white/6 group-hover:border-white/14 rounded-2xl overflow-hidden transition-all duration-300">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-[#0e0e14]/30 to-transparent" />

        {/* Category badge on image */}
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-black tracking-[2px] uppercase px-3 py-1.5 rounded-full border backdrop-blur-sm ${project.badgeColor}`}>
            {project.badge}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-bold text-gray-400 bg-gray-950/70 backdrop-blur-sm border border-white/8 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Calendar className="w-2.5 h-2.5" />
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-600 text-xs font-medium mb-3">
          <MapPin className="w-3 h-3" />
          {project.location}
        </div>

        <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-4" />

        {/* Details */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-3">
          {project.details.map((d, i) => (
            <div key={i} className="flex items-center gap-1.5 text-gray-500 text-xs">
              <CheckCircle className="w-3 h-3 shrink-0 text-gray-700 group-hover:text-yellow-400/60 transition-colors duration-300" />
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

// ─────────────────────────────────────────
// CTA
// ─────────────────────────────────────────
const ProjectsCTA = () => (
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
                Have a Project<br />
                <span
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  in Mind?
                </span>
              </h2>
              <p className="text-gray-400 text-base max-w-md leading-relaxed">
                Let's discuss how we can bring your electrical project to life — on time, on budget, and done right.
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
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Projects