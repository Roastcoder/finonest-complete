"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift, ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "personal",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleClose = useCallback(() => {
    setIsOpen(false)
    sessionStorage.setItem("exitPopupShown", "true")
  }, [])

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    },
    [hasShown],
  )

  useEffect(() => {
    const popupShown = sessionStorage.getItem("exitPopupShown")
    if (popupShown) {
      setHasShown(true)
      return
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    let idleTimer: NodeJS.Timeout
    const resetIdleTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        if (!hasShown) {
          setIsOpen(true)
          setHasShown(true)
        }
      }, 30000)
    }

    if (window.innerWidth < 1024) {
      resetIdleTimer()
      window.addEventListener("scroll", resetIdleTimer)
      window.addEventListener("touchstart", resetIdleTimer)
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(idleTimer)
      window.removeEventListener("scroll", resetIdleTimer)
      window.removeEventListener("touchstart", resetIdleTimer)
    }
  }, [handleMouseLeave, hasShown])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, handleClose])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = "Invalid phone number"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const leadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: "exit-intent-popup",
    }
    console.log("Lead captured:", leadData)

    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClose()
              }}
              className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative bg-gradient-to-br from-[#0064D6] to-[#002E9C] px-4 py-4 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 flex items-start gap-3">
                <motion.div
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Gift className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Wait! Don't Miss Out</h3>
                  <p className="text-white/80 text-xs leading-snug">Get exclusive offers and lowest interest rates</p>
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-[#12D6E7]/30 rounded-full">
                <Sparkles className="w-3 h-3 text-[#12D6E7]" />
                <span className="text-[10px] font-semibold">Zero Processing Fee!</span>
              </div>
            </div>

            <div className="p-4">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm ${errors.name ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-[#0064D6] focus:ring-[#0064D6]/20"} focus:ring-2 outline-none transition-all`}
                      placeholder="Full Name"
                    />
                    {errors.name && <p className="mt-0.5 text-[10px] text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm ${errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-[#0064D6] focus:ring-[#0064D6]/20"} focus:ring-2 outline-none transition-all`}
                      placeholder="Phone Number"
                    />
                    {errors.phone && <p className="mt-0.5 text-[10px] text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm ${errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-[#0064D6] focus:ring-[#0064D6]/20"} focus:ring-2 outline-none transition-all`}
                      placeholder="Email Address"
                    />
                    {errors.email && <p className="mt-0.5 text-[10px] text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all bg-white text-sm"
                    >
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="vehicle">Vehicle Loan</option>
                      <option value="education">Education Loan</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0064D6]/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get My Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <p className="text-center text-[10px] text-gray-500">
                    By submitting, you agree to our Terms & Privacy Policy
                  </p>
                </form>
              ) : (
                <motion.div
                  className="text-center py-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Thank You!</h4>
                  <p className="text-gray-600 text-sm">Our team will contact you shortly.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
