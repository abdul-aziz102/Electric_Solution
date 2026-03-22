import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, ChevronRight } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Docs', path: '/docs' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Glass Background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-gray-950/85 backdrop-blur-2xl border-b border-yellow-500/10 shadow-[0_1px_40px_rgba(0,0,0,0.7)]'
              : 'bg-transparent'
          }`}
        />

        {/* Top Glow Line on scroll */}
        {isScrolled && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="w-5 h-5 text-gray-950 fill-gray-950" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-[19px] tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ElectricPro
              </span>
              <span className="text-[9px] font-semibold tracking-[3px] text-yellow-500/40 uppercase">
                Est. 2018
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP NAV LINKS ===== */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3.5 py-2 rounded-lg group transition-colors duration-200"
                >
                  {/* Hover / Active Background */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-yellow-500/5 transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <span
                    className={`relative text-[13.5px] font-medium tracking-wide transition-colors duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-yellow-400'
                        : 'text-white/50 group-hover:text-white/90'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-yellow-400 block" />
                    )}
                    {link.name}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-px bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="hidden md:flex items-center gap-4">
            {/* Available Badge */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-[11px] text-white/35 font-medium tracking-wide">
                Available Now
              </span>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13.5px] text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(234,179,8,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_100%] animate-[shimmer_3s_ease_infinite]" />
              <Zap className="relative z-10 w-3.5 h-3.5 fill-gray-950" strokeWidth={0} />
              <span className="relative z-10 tracking-wide">Get Free Quote</span>
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden bg-gray-950/95 backdrop-blur-2xl border-b border-yellow-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'text-white/50 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 font-medium text-sm">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        )}
                        {link.name}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-30" />
                    </Link>
                  </motion.div>
                )
              })}

              {/* Mobile CTA */}
              <div className="pt-3 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-950 font-bold text-sm tracking-wide"
                >
                  <Zap className="w-4 h-4 fill-gray-950" strokeWidth={0} />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar