import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Zap, Shield, Clock, Award, ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-gray-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900"></div>

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Zap className="w-6 h-6 text-blue-500/20 dark:text-blue-500/20" />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">
                ⚡ Professional Electricians
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Professional Electrical Solutions
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              from Basic to Advanced Systems
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Expert electrical services for residential, commercial, and industrial projects.
              From simple repairs to complex installations, we deliver excellence with every connection.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-400">2000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white font-semibold text-lg hover:border-blue-500 transition-all"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                <img
                  src="https://img.freepik.com/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67091.jpg?semt=ais_rp_progressive&w=740&q=80"
                  alt="Professional Electrician at Work"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                {/* Badge on Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Certified & Licensed</div>
                      <div className="text-gray-400 text-sm">Professional Electricians</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-2xl opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </section>
  )
}

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Zap,
      title: 'Residential Wiring',
      description: 'Complete home electrical installations, rewiring, and upgrades for modern living.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Commercial Solutions',
      description: 'Professional electrical systems for offices, retail spaces, and commercial buildings.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical services to keep your property safe and powered.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Solar Installation',
      description: 'Eco-friendly solar panel systems for sustainable energy solutions.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Smart Home Systems',
      description: 'Advanced automation and smart electrical systems for modern homes.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Industrial Electrical',
      description: 'Heavy-duty electrical solutions for industrial facilities and machinery.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-300 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-all shadow-lg">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyChooseUsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const reasons = [
    { icon: Award, title: 'Certified Professionals', description: 'Licensed and insured electricians with years of experience' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock emergency services when you need us most' },
    { icon: Shield, title: 'Safety First', description: 'Strict adherence to safety codes and regulations' },
    { icon: CheckCircle, title: 'Quality Guaranteed', description: 'Warranty on all work with satisfaction guarantee' },
  ]

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Excellence in every connection</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WorkProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    { number: '01', title: 'Consultation', description: 'Initial assessment and understanding your electrical needs' },
    { number: '02', title: 'Planning', description: 'Detailed project planning and cost estimation' },
    { number: '03', title: 'Execution', description: 'Professional installation by certified electricians' },
    { number: '04', title: 'Testing', description: 'Thorough testing and quality assurance checks' },
    { number: '05', title: 'Handover', description: 'Final inspection and project documentation' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Work Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Simple, transparent, and efficient</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-300 dark:border-gray-700 inline-block shadow-lg">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl">
                {step.number}
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.adsttc.com/media/images/5177/024c/b3fc/4bc6/7600/0006/medium_jpg/7677e_peoplegroup_20130211_2.jpg?1366753865'
    },
    {
      title: 'Luxury Villa Wiring',
      category: 'Residential',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuR1YYKs82gfOUrIOCX4UoRShdhxwR-LeuA&s'
    },
    {
      title: 'Solar Farm Installation',
      category: 'Renewable',
      image: 'https://media.istockphoto.com/id/1340816904/photo/senior-engineer-and-aboriginal-australian-apprentice-working-together-on-solar-farm.jpg?s=612x612&w=0&k=20&c=8R06bbXX7DLtgftL22aJO2qYYRTXewZe5JzD0vSL4GE='
    },
    {
      title: 'Industrial Plant Setup',
      category: 'Industrial',
      image: 'https://www.cad-schroer.com/wp-content/uploads/2000/11/Anlagenbau-Uebersicht.jpg'
    },
    {
      title: 'Smart Home Automation',
      category: 'Technology',
      image: 'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-25055.jpg'
    },
    {
      title: 'Shopping Mall Electrical',
      category: 'Commercial',
      image: 'https://media.istockphoto.com/id/2219297094/photo/technicians-inspect-electrical-systems-and-discuss-maintenance-plans-in-industrial-workspace.jpg?s=612x612&w=0&k=20&c=aWtYHZmwoVf5ApXkD15oGvzQ70w4nOEclcJj4SVnasc='
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Showcasing our expertise and quality work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 group-hover:border-blue-500 transition-all shadow-xl">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    { name: 'John Smith', role: 'Homeowner', text: 'Excellent service! They rewired my entire house professionally and efficiently.', rating: 5 },
    { name: 'Sarah Johnson', role: 'Business Owner', text: 'Reliable and professional. Our office electrical system works flawlessly.', rating: 5 },
    { name: 'Mike Davis', role: 'Property Manager', text: 'Best electricians in town. Always on time and deliver quality work.', rating: 5 },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'Are you licensed and insured?', a: 'Yes, all our electricians are fully licensed, certified, and insured for your protection.' },
    { q: 'Do you offer emergency services?', a: 'Absolutely! We provide 24/7 emergency electrical services for urgent situations.' },
    { q: 'What areas do you serve?', a: 'We serve residential, commercial, and industrial clients across the entire metropolitan area.' },
    { q: 'How do you price your services?', a: 'We provide transparent, upfront pricing with detailed quotes before starting any work.' },
    { q: 'Do you offer warranties?', a: 'Yes, all our work comes with a comprehensive warranty for your peace of mind.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Got questions? We've got answers</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and quote today. Let's bring your electrical vision to life!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all"
            >
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ContactPreviewSection = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Quick contact form for immediate assistance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows="4"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
