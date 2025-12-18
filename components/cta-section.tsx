"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"

const contactOptions = [
  { icon: Phone, label: "Call Us", value: "1800-123-456", href: "tel:1800123456" },
  { icon: Mail, label: "Email Us", value: "hello@finonest.com", href: "mailto:hello@finonest.com" },
  { icon: MessageCircle, label: "Live Chat", value: "Available 24/7", href: "/contact" },
] as const

const ContactCard = memo(function ContactCard({
  contact,
  index,
}: {
  contact: (typeof contactOptions)[number]
  index: number
}) {
  const Icon = contact.icon
  return (
    <motion.a
      href={contact.href}
      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ x: 5 }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-white/60 text-xs sm:text-sm">{contact.label}</div>
        <div className="text-white font-semibold text-sm sm:text-base truncate">{contact.value}</div>
      </div>
    </motion.a>
  )
})

export function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative bg-gradient-to-r from-[#0064D6] to-[#002E9C] rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#12D6E7]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Ready to Start Your Financial Journey?
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Get in touch with our experts and find the perfect financial solution tailored to your needs. Quick
                  approvals, best rates, zero hidden charges.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="group bg-white text-[#0064D6] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link href="/eligibility">
                    <motion.button
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white/50 transition-colors w-full sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Check Eligibility
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                {contactOptions.map((contact, index) => (
                  <ContactCard key={contact.label} contact={contact} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
