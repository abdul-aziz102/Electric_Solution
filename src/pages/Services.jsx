import { motion } from 'framer-motion'
import { Zap, Home, Building2, Sun, Cpu, Factory, Wrench, Shield, Clock, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Electrical Services',
      description: 'Complete home electrical solutions from new installations to repairs and upgrades.',
      features: ['Home Rewiring', 'Panel Upgrades', 'Lighting Installation', 'Outlet & Switch Repair', 'Ceiling Fan Installation', 'Home Safety Inspections'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: 'Commercial Electrical Solutions',
      description: 'Professional electrical services for offices, retail spaces, and commercial properties.',
      features: ['Office Wiring', 'Emergency Lighting', 'Data Cabling', 'Security Systems', 'Energy Management', 'Code Compliance'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Factory,
      title: 'Industrial Electrical Systems',
      description: 'Heavy-duty electrical installations for manufacturing and industrial facilities.',
      features: ['Machinery Wiring', 'Motor Controls', 'Power Distribution', 'Preventive Maintenance', 'Equipment Installation', 'System Upgrades'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Sun,
      title: 'Solar Panel Installation',
      description: 'Sustainable energy solutions with professional solar panel system installation.',
      features: ['Solar Design', 'Panel Installation', 'Inverter Setup', 'Grid Connection', 'Battery Storage', 'Monitoring Systems'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'Smart Home Automation',
      description: 'Modern smart electrical systems for automated and connected homes.',
      features: ['Smart Lighting', 'Voice Control', 'Automated Switches', 'Energy Monitoring', 'Integration Setup', 'App Control'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Emergency Electrical Services',
      description: '24/7 emergency response for urgent electrical issues and repairs.',
      features: ['Power Outages', 'Electrical Fires', 'Circuit Failures', 'Emergency Repairs', 'Safety Hazards', 'Immediate Response'],
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
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive electrical solutions for every need, from residential to industrial applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">{service.title}</h2>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div>
              <Award className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Certified Experts</h3>
              <p className="text-blue-100 text-sm">Licensed professionals</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Safety First</h3>
              <p className="text-blue-100 text-sm">Code compliant work</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">24/7 Available</h3>
              <p className="text-blue-100 text-sm">Emergency services</p>
            </div>
            <div>
              <Wrench className="w-12 h-12 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Quality Work</h3>
              <p className="text-blue-100 text-sm">Guaranteed results</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
