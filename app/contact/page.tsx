"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParallax } from "@/components/parallax-provider"
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "1800-123-456",
    subtitle: "Toll-free, 24/7",
    href: "tel:1800123456",
    color: "#0064D6",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@finonest.com",
    subtitle: "We reply within 24 hours",
    href: "mailto:hello@finonest.com",
    color: "#12D6E7",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Start a conversation",
    subtitle: "Available 24/7",
    href: "#chat",
    color: "#008B96",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, Maharashtra",
    subtitle: "Mon-Sat, 9AM-6PM",
    href: "#location",
    color: "#002E9C",
  },
]

const faqs = [
  {
    question: "How long does loan approval take?",
    answer: "Most loans are approved within 24-48 hours after document verification.",
  },
  {
    question: "What documents are required?",
    answer: "Basic KYC documents, income proof, and bank statements for the last 6 months.",
  },
  {
    question: "Is there any processing fee?",
    answer: "Processing fees vary by product, typically ranging from 0.5% to 2% of the loan amount.",
  },
  {
    question: "Can I prepay my loan?",
    answer: "Yes, you can prepay your loan anytime. Personal loans have zero prepayment charges after 6 months.",
  },
]

export default function ContactPage() {
  const { setIsHoveringCTA, setCurrentSection } = useParallax()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    setCurrentSection("contact")
    return () => setCurrentSection("hero")
  }, [setCurrentSection])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fa] to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We're Here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">Help You</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have questions about our products or need assistance? Our team is ready to help you find the perfect
            financial solution.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{ backgroundColor: `${method.color}15` }}
              >
                <method.icon className="w-6 h-6" style={{ color: method.color }} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-1">{method.title}</h3>
              <p className="text-gray-800 font-medium mb-1">{method.value}</p>
              <p className="text-gray-500 text-sm">{method.subtitle}</p>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-[#111111] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => handleInputChange("loanType", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all"
                    >
                      <option value="">Select a product</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="credit">Credit Card</option>
                      <option value="vehicle">Vehicle Loan</option>
                      <option value="education">Education Loan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#0064D6]/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setIsHoveringCTA(true)}
                    onMouseLeave={() => setIsHoveringCTA(false)}
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#111111] mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: "", email: "", phone: "", loanType: "", message: "" })
                  }}
                  className="text-[#0064D6] font-medium hover:underline"
                >
                  Send another message
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* FAQs */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg shadow-black/5 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-semibold text-[#111111]">{faq.question}</span>
                    <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#0064D6]" />
                <h3 className="text-lg font-bold text-[#111111]">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#0064D6]">Phone support available 24/7 at 1800-123-456</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
