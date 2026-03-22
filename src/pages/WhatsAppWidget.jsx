import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Phone, Send, Zap } from 'lucide-react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const WHATSAPP_NUMBER = '03452489424' // ← apna WhatsApp number yahan daalo

  const quickMessages = [
    '⚡ I need a free quote',
    '🔧 Emergency electrical issue',
    '🏠 Residential wiring inquiry',
    '☀️ Solar installation info',
  ]

  const handleSend = (msg) => {
    const text = msg || message
    if (!text.trim()) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setMessage('')
  }

  return (
    <>
      {/* ── CHAT PANEL ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed bottom-24 right-5 sm:right-8 z-50 w-[320px] sm:w-[360px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] border border-white/8"
          >
            {/* Header */}
            <div className="bg-[#075e54] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 border-2 border-green-400/40 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-400 fill-green-400" strokeWidth={0} />
                </div>
                <div>
                  <p className="text-white font-black text-sm tracking-tight">ElectricPro</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-green-300 text-[10px] font-medium">Online — Typically replies instantly</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-white/70" />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#0a0a0f] px-4 py-5 space-y-4">
              {/* Greeting bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-green-400 fill-green-400" strokeWidth={0} />
                </div>
                <div className="bg-[#1a1a24] border border-white/6 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    👋 Hi! Welcome to <span className="text-yellow-400 font-bold">ElectricPro</span>.
                    <br /><br />
                    How can we help you today? Pick a quick option or type your message below.
                  </p>
                  <p className="text-gray-700 text-[10px] mt-2 text-right">Just now</p>
                </div>
              </div>

              {/* Quick reply buttons */}
              <div className="pl-9 space-y-2">
                {quickMessages.map((msg, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSend(msg)}
                    className="w-full text-left px-3.5 py-2.5 bg-green-500/6 border border-green-500/15 hover:border-green-500/30 hover:bg-green-500/10 rounded-xl text-green-400 text-xs font-medium transition-all duration-200"
                  >
                    {msg}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="bg-[#0a0a0f] border-t border-white/6 px-4 py-3">
              <div className="flex gap-2.5 items-center">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 bg-gray-900/60 border border-white/8 rounded-xl text-white text-sm placeholder-gray-700 focus:border-green-500/30 focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => handleSend()}
                  className="w-9 h-9 rounded-xl bg-[#25d366] flex items-center justify-center shrink-0 hover:bg-[#20c05c] transition-colors shadow-[0_4px_14px_rgba(37,211,102,0.35)]"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
              <p className="text-gray-800 text-[10px] text-center mt-2">
                Opens WhatsApp to continue the conversation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB BUTTON ── */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3">
        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25d366]"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1.5 }}
              className="absolute right-16 bottom-2 bg-gray-900 border border-white/8 rounded-xl px-3.5 py-2 whitespace-nowrap shadow-xl"
            >
              <p className="text-white text-xs font-semibold">Chat on WhatsApp</p>
              <p className="text-gray-600 text-[10px]">Usually replies in minutes</p>
              {/* Arrow */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 border-r border-t border-white/8 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-2xl bg-[#25d366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-shadow"
          aria-label="Chat on WhatsApp"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}

export default WhatsAppWidget