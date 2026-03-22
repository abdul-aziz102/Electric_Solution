import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight, Shield, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Residential Wiring', path: '/services' },
    { name: 'Commercial Electrical', path: '/services' },
    { name: 'Industrial Systems', path: '/services' },
    { name: 'Solar Installation', path: '/services' },
    { name: 'Smart Home Automation', path: '/services' },
    { name: 'Emergency Services', path: '/services' },
  ]

  const socials = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/electricpro',
      color: 'hover:bg-blue-600/20 hover:border-blue-500/30 hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/electricpro',
      color: 'hover:bg-pink-600/20 hover:border-pink-500/30 hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/15551234567',
      color: 'hover:bg-green-600/20 hover:border-green-500/30 hover:text-green-400',
    },
  ]

  return (
    <footer className="bg-[#060609] border-t border-white/6 relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(251,191,36,0.03),transparent)]" />

      {/* ── NEWSLETTER STRIP ── */}
      <div className="relative border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-black text-lg tracking-tight">
                Get Electrical Tips & Offers
              </h3>
              <p className="text-gray-600 text-sm mt-0.5">
                Subscribe for free safety tips, maintenance reminders, and exclusive deals.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-900/60 border border-white/8 rounded-xl text-white text-sm placeholder-gray-700 focus:border-yellow-400/30 focus:outline-none transition-colors"
              />
              <button className="relative overflow-hidden px-5 py-2.5 rounded-xl font-bold text-gray-950 text-sm shrink-0 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(251,191,36,0.35)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400" />
                <span className="relative z-10 flex items-center gap-1.5">
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COL 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group mb-5 w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Zap className="w-5 h-5 text-gray-950 fill-gray-950" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-[18px] tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ElectricPro
                </span>
                <span className="text-[9px] font-semibold tracking-[3px] text-yellow-500/40 uppercase">Est. 2010</span>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional electrical services for residential, commercial, and industrial clients. Certified, insured, and trusted since 2010.
            </p>

            {/* Trust badges */}
            <div className="space-y-2.5">
              {[
                { icon: Shield, text: 'Fully Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency Available' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <badge.icon className="w-3.5 h-3.5 text-yellow-400/60 shrink-0" />
                  <span className="text-gray-600 text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COL 2 — Quick Links */}
          <div>
            <h4 className="text-[10px] font-black tracking-[3px] uppercase text-gray-600 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Services */}
          <div>
            <h4 className="text-[10px] font-black tracking-[3px] uppercase text-gray-600 mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — Contact + Social */}
          <div>
            <h4 className="text-[10px] font-black tracking-[3px] uppercase text-gray-600 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="tel:+15551234567" className="flex items-start gap-3 group">
                  <div className="p-1.5 bg-yellow-400/8 rounded-lg mt-0.5 shrink-0 group-hover:bg-yellow-400/15 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 font-bold tracking-wider uppercase mb-0.5">Phone</p>
                    <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">+1 (555) 123-4567</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@electricpro.com" className="flex items-start gap-3 group">
                  <div className="p-1.5 bg-yellow-400/8 rounded-lg mt-0.5 shrink-0 group-hover:bg-yellow-400/15 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 font-bold tracking-wider uppercase mb-0.5">Email</p>
                    <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">info@electricpro.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-yellow-400/8 rounded-lg mt-0.5 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 font-bold tracking-wider uppercase mb-0.5">Address</p>
                    <p className="text-gray-400 text-sm font-medium">123 Electric Ave,<br />New York, NY 10001</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div>
              <p className="text-[10px] font-black tracking-[3px] uppercase text-gray-700 mb-3">Follow Us</p>
              <div className="flex gap-2.5">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.93 }}
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-gray-900/60 border border-white/8 flex items-center justify-center text-gray-500 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-700 text-xs font-medium">
              © {currentYear} ElectricPro. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-gray-700 hover:text-gray-400 text-xs font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
              <span className="text-gray-700 text-xs font-medium">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer