import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ChevronRight, MessageCircle, X, Send, Loader, Menu, Zap, BookOpen, Shield, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'
import { docsContent } from '../data/docsContent'

const Docs = () => {
  const [activeChapter, setActiveChapter] = useState(0)
  const [isAIOpen, setIsAIOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleChapterChange = (index) => {
    setActiveChapter(index)
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-950">
      {/* Mobile menu button */}
      <motion.button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        whileTap={{ scale: 0.95 }}
        className="lg:hidden fixed top-24 left-4 z-50 p-3 bg-gray-900 border border-white/10 rounded-xl shadow-xl backdrop-blur-sm"
      >
        <motion.div animate={{ rotate: isSidebarOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
          {isSidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </motion.div>
      </motion.button>

      <div className="flex relative">
        <Sidebar
          chapters={docsContent}
          activeChapter={activeChapter}
          setActiveChapter={handleChapterChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <ContentArea
          chapter={docsContent[activeChapter]}
          chapterIndex={activeChapter}
          totalChapters={docsContent.length}
          onChapterChange={handleChapterChange}
        />
        <AIAssistantButton onClick={() => setIsAIOpen(true)} />
        <AIAssistantModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────
const Sidebar = ({ chapters, activeChapter, setActiveChapter, isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 top-20"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ x: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 0 : -320 }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="fixed lg:sticky top-20 left-0 z-40 w-72 h-[calc(100vh-5rem)] bg-[#0a0a0f] border-r border-white/6 overflow-y-auto flex flex-col"
      >
        {/* Sidebar header */}
        <div className="px-5 py-6 border-b border-white/6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                <BookOpen className="w-4 h-4 text-gray-950" />
              </div>
              <div>
                <h2 className="text-sm font-black text-white tracking-tight">Documentation</h2>
                <p className="text-[10px] text-gray-600 font-medium tracking-wider uppercase mt-0.5">ElectricPro Guides</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 hover:bg-white/6 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Chapter count */}
        <div className="px-5 pt-5 pb-3">
          <p className="text-[10px] font-bold tracking-[2px] uppercase text-gray-600">
            {chapters.length} Chapters
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pb-6 space-y-1">
          {chapters.map((chapter, index) => {
            const isActive = activeChapter === index
            return (
              <motion.button
                key={index}
                onClick={() => setActiveChapter(index)}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 group ${
                  isActive
                    ? 'bg-yellow-400/10 border border-yellow-400/20 text-yellow-400'
                    : 'text-gray-500 hover:text-white hover:bg-white/4 border border-transparent'
                }`}
              >
                <span
                  className={`text-[10px] font-black w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-gray-950'
                      : 'bg-white/6 text-gray-600 group-hover:bg-white/10 group-hover:text-gray-400'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-semibold leading-snug flex-1">{chapter.title}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 transition-all ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </motion.button>
            )
          })}
        </nav>

        {/* Bottom AI hint */}
        <div className="px-4 py-4 border-t border-white/6 mx-3 mb-3">
          <div className="flex items-center gap-2.5 px-3 py-2.5 bg-yellow-400/6 border border-yellow-400/15 rounded-xl">
            <MessageCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <p className="text-[10px] text-yellow-400/70 leading-tight">
              Ask the AI assistant any question about the docs
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

// ─────────────────────────────────────────
// CONTENT AREA
// ─────────────────────────────────────────
const ContentArea = ({ chapter, chapterIndex, totalChapters, onChapterChange }) => {
  return (
    <motion.div
      key={chapter.title}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex-1 min-h-screen overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 pb-32">

        {/* Chapter label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] font-black tracking-[3px] uppercase text-yellow-400/60">
            Chapter {String(chapterIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-gray-700 text-xs">—</span>
          <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">
            {totalChapters} Total
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
          {chapter.title}
        </h1>

        {/* Progress bar */}
        <div className="w-full h-px bg-white/5 mb-8 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
            style={{ width: `${((chapterIndex + 1) / totalChapters) * 100}%` }}
          />
        </div>

        {/* Introduction card */}
        {chapter.introduction && (
          <div className="relative bg-[#0e0e14] border border-white/8 rounded-2xl p-7 mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-400 rounded-l-2xl" />
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-yellow-400/10 rounded-xl shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-gray-300 leading-relaxed text-[15px]">{chapter.introduction}</p>
            </div>
          </div>
        )}

        {/* Sections */}
        {chapter.sections && chapter.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight flex items-center gap-3">
              <span className="text-xs font-black text-yellow-400/50 bg-yellow-400/6 border border-yellow-400/15 rounded-lg w-7 h-7 flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              {section.heading}
            </h2>
            <div className="bg-[#0e0e14] border border-white/6 rounded-2xl p-6">
              <p className="text-gray-400 leading-relaxed text-sm mb-5">{section.content}</p>
              {section.points && (
                <ul className="space-y-2.5">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                      <Zap
                        className="w-3.5 h-3.5 text-yellow-400/60 shrink-0 mt-0.5 fill-yellow-400/30"
                        strokeWidth={0}
                      />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Key Points */}
        {chapter.keyPoints && (
          <div className="mb-8 bg-[#0c130e] border border-green-400/15 rounded-2xl p-6 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-500 rounded-l-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-green-400/10 rounded-xl">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <h3 className="text-base font-black text-green-400 tracking-tight">Key Points Summary</h3>
            </div>
            <ul className="space-y-2.5">
              {chapter.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400/70 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Safety Notes */}
        {chapter.safetyNotes && (
          <div className="mb-8 bg-[#130c0c] border border-red-400/15 rounded-2xl p-6 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-orange-500 rounded-l-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-red-400/10 rounded-xl">
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-base font-black text-red-400 tracking-tight">Safety Notes</h3>
            </div>
            <ul className="space-y-2.5">
              {chapter.safetyNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-red-400/70 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Practical Example */}
        {chapter.practicalExample && (
          <div className="mb-10 bg-[#0c0f13] border border-blue-400/15 rounded-2xl p-6 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-500 rounded-l-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-400/10 rounded-xl">
                <Lightbulb className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-base font-black text-blue-400 tracking-tight">Practical Example</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{chapter.practicalExample}</p>
          </div>
        )}

        {/* Chapter navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/6">
          <button
            onClick={() => chapterIndex > 0 && onChapterChange(chapterIndex - 1)}
            disabled={chapterIndex === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/8 text-gray-500 hover:text-white hover:border-white/16 hover:bg-white/4 transition-all duration-200 text-sm font-semibold disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Previous
          </button>
          <span className="text-xs text-gray-700 font-medium">
            {chapterIndex + 1} / {totalChapters}
          </span>
          <button
            onClick={() => chapterIndex < totalChapters - 1 && onChapterChange(chapterIndex + 1)}
            disabled={chapterIndex === totalChapters - 1}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/15 transition-all duration-200 text-sm font-semibold disabled:opacity-25 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────
// AI BUTTON — WhatsApp ke UPAR fixed
// bottom-28 = WhatsApp (bottom-8) se upar
// ─────────────────────────────────────────
const AIAssistantButton = ({ onClick }) => (
  <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.5, type: 'spring' }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.93 }}
    onClick={onClick}
    className="fixed bottom-28 right-5 sm:bottom-32 sm:right-8 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-950 font-black text-sm shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.5)] transition-shadow"
  >
    <MessageCircle className="w-4 h-4" />
    Ask AI
    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] animate-pulse" />
  </motion.button>
)

// ─────────────────────────────────────────
// AI MODAL
// ─────────────────────────────────────────
const AIAssistantModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your ElectricPro AI assistant. Paste any text from the docs, ask a question about electrical concepts, or request a translation to Urdu, Hindi, or any language!"
    }
  ])
  const [input, setInput] = useState('')
  const [language, setLanguage] = useState('english')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim()) return
    const apiKey = import.meta.env.VITE_GROQ_API_KEY
    if (!apiKey) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'AI Assistant is not configured. Please add your VITE_GROQ_API_KEY to the .env file and restart the server.'
        }
      ])
      return
    }
    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are a helpful electrical documentation assistant for ElectricPro. Explain technical electrical concepts simply and clearly. If the user requests it, respond in ${language}. Keep answers practical and beginner-friendly.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: `Explain in ${language}: ${input}` }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      })
      if (!response.ok) throw new Error(`API Error: ${response.status}`)
      const data = await response.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.choices[0].message.content }
      ])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `Error: ${error.message}. Please check your API key and connection.`
        }
      ])
    }
    setIsLoading(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[440px] sm:h-[680px] bg-[#0a0a0f] rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] z-[60] border border-white/8 flex flex-col overflow-hidden max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/6 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                  <MessageCircle className="w-4 h-4 text-gray-950" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">AI Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e] animate-pulse" />
                    <p className="text-[10px] text-gray-500 font-medium">Online — Powered by Llama 3.3</p>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/6 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
              </button>
            </div>

            {/* Language selector */}
            <div className="px-5 py-3 border-b border-white/6 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-gray-600 shrink-0">
                  Language
                </span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-900/60 border border-white/8 rounded-lg text-white text-xs font-medium focus:border-yellow-400/40 focus:outline-none transition-colors"
                >
                  <option value="english">English</option>
                  <option value="urdu">Urdu (اردو)</option>
                  <option value="hindi">Hindi (हिंदी)</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="arabic">Arabic (العربية)</option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 min-h-0">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                      <Zap className="w-3 h-3 text-gray-950 fill-gray-950" strokeWidth={0} />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === 'user'
                        ? 'bg-yellow-400/10 border border-yellow-400/20 text-yellow-50 rounded-br-sm'
                        : 'bg-[#0e0e14] border border-white/6 text-gray-300 rounded-bl-sm'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                    <Zap className="w-3 h-3 text-gray-950 fill-gray-950" strokeWidth={0} />
                  </div>
                  <div className="bg-[#0e0e14] border border-white/6 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2">
                    <Loader className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-white/6 shrink-0">
              <div className="flex gap-2.5">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                  placeholder="Ask a question or paste text from docs..."
                  rows="2"
                  className="flex-1 px-4 py-3 bg-gray-900/60 border border-white/8 rounded-xl text-white text-sm placeholder-gray-600 focus:border-yellow-400/30 focus:outline-none transition-colors resize-none"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl text-gray-950 font-black transition-all hover:shadow-[0_4px_20px_rgba(251,191,36,0.35)] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-700 mt-2">
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Docs