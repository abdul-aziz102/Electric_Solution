import { motion } from 'framer-motion'
import { Building2, Home, Sun, Factory, Cpu, ShoppingBag } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Downtown Office Complex',
      category: 'Commercial',
      icon: Building2,
      description: 'Complete electrical installation for a 10-story office building including power distribution, lighting systems, and emergency backup.',
      details: ['15,000 sq ft', '200+ outlets', 'LED lighting system', 'Emergency generators'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Luxury Residential Villa',
      category: 'Residential',
      icon: Home,
      description: 'High-end home automation and electrical system for a modern luxury villa with smart controls.',
      details: ['5 bedrooms', 'Smart home integration', 'Outdoor lighting', 'Pool electrical'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Solar Farm Installation',
      category: 'Renewable Energy',
      icon: Sun,
      description: '500kW solar panel installation with grid connection and battery storage system.',
      details: ['500kW capacity', '1,200 panels', 'Battery storage', 'Grid integration'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Manufacturing Plant',
      category: 'Industrial',
      icon: Factory,
      description: 'Industrial electrical system for a manufacturing facility including heavy machinery wiring.',
      details: ['50,000 sq ft', 'Heavy machinery', '3-phase power', 'Safety systems'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Smart Home Retrofit',
      category: 'Technology',
      icon: Cpu,
      description: 'Complete smart home conversion with automated lighting, climate control, and security.',
      details: ['Voice control', 'App integration', 'Energy monitoring', 'Security cameras'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Shopping Mall Electrical',
      category: 'Commercial',
      icon: ShoppingBag,
      description: 'Comprehensive electrical system for a multi-level shopping center with retail spaces.',
      details: ['100+ stores', 'Central HVAC', 'Emergency lighting', 'Parking systems'],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our expertise through successful electrical installations across various sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-24 h-24 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-blue-400">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Let's discuss how we can bring your electrical project to life
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl transition-all">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
