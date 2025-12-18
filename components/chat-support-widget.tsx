"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function ChatSupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showPeek, setShowPeek] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([{ id: 1, text: "Hi there! 👋 How can I help you today?", isBot: true }])

  useEffect(() => {
    if (isOpen) return

    // Initial show after 3 seconds
    const showTimer = setTimeout(() => {
      setShowPeek(true)
    }, 3000)

    return () => clearTimeout(showTimer)
  }, [isOpen])

  useEffect(() => {
    if (!showPeek || isOpen) return

    const hideTimer = setTimeout(() => {
      setShowPeek(false)
      // Reappear after 5 seconds
      const reappearTimer = setTimeout(() => {
        if (!isOpen) setShowPeek(true)
      }, 5000)
      return () => clearTimeout(reappearTimer)
    }, 8000)

    return () => clearTimeout(hideTimer)
  }, [showPeek, isOpen])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages((prev) => [...prev, { id: Date.now(), text: message, isBot: false }])
    setMessage("")
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Thanks for reaching out! Our team will get back to you shortly.",
          isBot: true,
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Peeking Character */}
      <AnimatePresence>
        {showPeek && !isOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed right-0 bottom-36 md:bottom-32 z-50 cursor-pointer"
            onClick={() => {
              setShowPeek(false)
              setIsOpen(true)
            }}
          >
            <div className="relative">
              <div className="relative w-16 h-28 sm:w-20 sm:h-36 md:w-24 md:h-40 translate-x-8 sm:translate-x-10 md:translate-x-12">
                <Image
                  src="/images/check-score-icon1.webp"
                  alt="Friendly support character peeking"
                  width={96}
                  height={160}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Speech bubble - responsive positioning */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -left-20 sm:-left-28 md:-left-32 top-4 sm:top-6 md:top-8 bg-white rounded-xl sm:rounded-2xl px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-lg"
              >
                <p className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">Need help?</p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-0 h-0 border-t-6 border-b-6 border-l-6 sm:border-t-8 sm:border-b-8 sm:border-l-8 border-transparent border-l-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "400px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed right-2 sm:right-4 bottom-36 md:bottom-4 z-50 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header with character */}
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/check-score-icon1.webp"
                    alt="Support avatar"
                    width={40}
                    height={40}
                    className="object-cover scale-150 translate-x-1"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <Image
                    src="/logo.png"
                    alt="Finonest"
                    width={100}
                    height={28}
                    className="h-6 sm:h-7 w-auto brightness-0 invert"
                  />
                  <p className="text-teal-300 text-xs sm:text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <div className="absolute right-2 top-2 flex gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Chat content */}
            {!isMinimized && (
              <>
                <div className="h-[250px] sm:h-[300px] overflow-y-auto p-3 sm:p-4 space-y-3 bg-slate-50">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] px-3 sm:px-4 py-2 rounded-2xl ${
                          msg.isBot
                            ? "bg-white text-slate-700 shadow-sm border border-slate-100"
                            : "bg-teal-500 text-white"
                        }`}
                      >
                        <p className="text-xs sm:text-sm">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input area */}
                <div className="p-2.5 sm:p-3 bg-white border-t border-slate-100">
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-50 border-slate-200 focus:border-teal-500 rounded-xl text-sm"
                    />
                    <Button onClick={handleSend} size="icon" className="bg-teal-500 hover:bg-teal-600 rounded-xl">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setShowPeek(false)
          setIsOpen(!isOpen)
        }}
        className={`fixed right-4 bottom-24 md:bottom-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-slate-700" : "bg-teal-500 hover:bg-teal-600"
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </motion.button>
    </>
  )
}
