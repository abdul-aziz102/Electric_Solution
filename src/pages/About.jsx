import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in electrical excellence since 2010
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-xl border border-gray-700 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Founded in 2010, ElectricPro has grown from a small local electrical service to a leading provider of comprehensive electrical solutions. Our journey began with a simple mission: to deliver safe, reliable, and innovative electrical services to our community.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Today, we serve hundreds of residential, commercial, and industrial clients, maintaining our commitment to excellence, safety, and customer satisfaction. Our team of certified electricians brings decades of combined experience to every project, ensuring quality workmanship and lasting results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-center"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Our Mission</h3>
            <p className="text-blue-100">
              To provide safe, reliable, and innovative electrical solutions that power homes, businesses, and industries while exceeding customer expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-xl text-center"
          >
            <Zap className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Our Vision</h3>
            <p className="text-purple-100">
              To be the most trusted and innovative electrical service provider, leading the industry in quality, safety, and sustainable energy solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-xl text-center"
          >
            <Award className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Our Values</h3>
            <p className="text-orange-100">
              Safety first, quality always, customer satisfaction guaranteed. We build lasting relationships through integrity, professionalism, and excellence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose ElectricPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Certified Professionals', desc: 'Licensed & insured electricians' },
              { icon: Shield, title: 'Safety First', desc: 'Strict safety protocols' },
              { icon: Clock, title: '24/7 Service', desc: 'Emergency support available' },
              { icon: CheckCircle, title: 'Quality Guaranteed', desc: 'Warranty on all work' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">2000+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
