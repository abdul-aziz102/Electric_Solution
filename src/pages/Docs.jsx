import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Book, ChevronRight, MessageCircle, X, Send, Loader, Menu } from 'lucide-react'
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
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-950">
      {/* Advanced Mobile Menu Button */}
      <motion.button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="lg:hidden fixed top-24 left-4 z-50 p-3.5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-blue-500/60 transition-all backdrop-blur-sm border-2 border-blue-400/40"
      >
        <motion.div
          animate={{ rotate: isSidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 opacity-0"
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      <div className="flex relative">
        <Sidebar
          chapters={docsContent}
          activeChapter={activeChapter}
          setActiveChapter={handleChapterChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <ContentArea chapter={docsContent[activeChapter]} />
        <AIAssistantButton onClick={() => setIsAIOpen(true)} />
        <AIAssistantModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      </div>
    </div>
  )
}

const Sidebar = ({ chapters, activeChapter, setActiveChapter, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
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

      {/* Sidebar - Always visible on desktop */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen || window.innerWidth >= 1024 ? 0 : -320
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed lg:sticky top-20 left-0 z-40 w-80 h-[calc(100vh-5rem)] bg-white dark:bg-gray-900/95 backdrop-blur-md border-r-2 border-gray-300 dark:border-gray-800 overflow-y-auto shadow-2xl lg:shadow-none"
      >
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Documentation</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
            </button>
          </div>

          <div className="space-y-2">
            {chapters.map((chapter, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveChapter(index)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center justify-between group ${
                  activeChapter === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="text-sm font-medium leading-tight pr-2">
                  {index + 1}. {chapter.title}
                </span>
                <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                  activeChapter === index ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                }`} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

const ContentArea = ({ chapter }) => {
  return (
    <motion.div
      key={chapter.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 w-full p-6 sm:p-8 lg:p-12 overflow-y-auto min-h-screen"
    >
      {/* Centered container for mobile */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight text-center lg:text-left">
          {chapter.title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-gray-300 dark:border-gray-700 mb-6 sm:mb-8 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base text-center lg:text-left">{chapter.introduction}</p>
          </div>

          {chapter.sections && chapter.sections.map((section, index) => (
            <div key={index} className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center lg:text-left">{section.heading}</h2>
              <div className="bg-white dark:bg-gray-800/30 p-5 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-700/50 shadow">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">{section.content}</p>
                {section.points && (
                  <ul className="space-y-2 ml-2 sm:ml-4">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start text-sm sm:text-base">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {chapter.keyPoints && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700/50 p-5 sm:p-6 rounded-xl mb-6 sm:mb-8 shadow">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-400 mb-3 sm:mb-4 text-center lg:text-left">Key Points Summary</h3>
              <ul className="space-y-2">
                {chapter.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start text-sm sm:text-base">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {chapter.safetyNotes && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700/50 p-5 sm:p-6 rounded-xl mb-6 sm:mb-8 shadow">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 dark:text-red-400 mb-3 sm:mb-4 text-center lg:text-left">⚠️ Safety Notes</h3>
              <ul className="space-y-2">
                {chapter.safetyNotes.map((note, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start text-sm sm:text-base">
                    <span className="text-red-600 dark:text-red-400 mr-2 flex-shrink-0">!</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {chapter.practicalExample && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700/50 p-5 sm:p-6 rounded-xl mb-20 shadow">
              <h3 className="text-lg sm:text-xl font-bold text-green-700 dark:text-green-400 mb-3 sm:mb-4 text-center lg:text-left">Practical Example</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{chapter.practicalExample}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const AIAssistantButton = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-4 sm:p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all z-50 ring-4 ring-blue-500/20"
      aria-label="Open AI Assistant"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </motion.button>
  )
}

const AIAssistantModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI documentation assistant. Paste any sentence or paragraph from the docs, and I\'ll explain it in simple terms. I can also translate to Urdu, Hindi, or any language you need!' }
  ])
  const [input, setInput] = useState('')
  const [language, setLanguage] = useState('english')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim()) return

    // Groq API Key from environment variable
    const apiKey = import.meta.env.VITE_GROQ_API_KEY

    if (!apiKey) {
      const errorMessage = {
        role: 'assistant',
        content: 'AI Assistant is not configured. Please add your Groq API key to the .env file.\n\nSteps:\n1. Create a .env file in the project root\n2. Add: VITE_GROQ_API_KEY=your_key_here\n3. Restart the development server'
      }
      setMessages(prev => [...prev, errorMessage])
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
              content: `You are a helpful electrical documentation assistant. Explain technical electrical concepts in simple, beginner-friendly terms. If the user requests a specific language (${language}), respond in that language. Provide real-world examples and simplify technical jargon.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: `Explain this in ${language}: ${input}` }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error?.message || `API Error: ${response.status}`)
      }

      const data = await response.json()
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('AI Assistant Error:', error)
      const errorMessage = {
        role: 'assistant',
        content: `Error: ${error.message}\n\nPlease check:\n- Your Groq API key is valid\n- You have sufficient credits\n- Your network connection is stable`
      }
      setMessages(prev => [...prev, errorMessage])
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[450px] sm:h-[700px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[60] border-2 border-gray-300 dark:border-gray-700 flex flex-col overflow-hidden max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-gray-300 dark:border-gray-800 flex-shrink-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">AI Assistant</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 sm:pb-3 border-b border-gray-300 dark:border-gray-800 flex-shrink-0 bg-white dark:bg-gray-900">
              <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Response Language:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-sm sm:text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="english">English</option>
                <option value="urdu">Urdu (اردو)</option>
                <option value="hindi">Hindi (हिंदी)</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 min-h-0 bg-gray-50 dark:bg-gray-950/50 scroll-smooth">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-700 shadow'
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-300 dark:border-gray-700 shadow">
                    <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t-2 border-blue-300 dark:border-blue-500/30 bg-white dark:bg-gray-900 flex-shrink-0">
              <label className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">Type your question:</label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                  placeholder="Paste a sentence or ask a question..."
                  rows="2"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-500/50 rounded-lg text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Docs
