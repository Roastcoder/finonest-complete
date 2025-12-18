"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply Online",
    description: "Fill out our simple online application form in just 5 minutes.",
    color: "#0064D6",
  },
  {
    icon: Search,
    number: "02",
    title: "Quick Verification",
    description: "Our team verifies your documents within hours, not days.",
    color: "#12D6E7",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Approved",
    description: "Receive instant approval with the best interest rates.",
    color: "#008B96",
  },
  {
    icon: Banknote,
    number: "04",
    title: "Receive Funds",
    description: "Money transferred directly to your bank account.",
    color: "#002E9C",
  },
] as const

const StepCard = memo(function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number]
  index: number
  isLast: boolean
}) {
  const Icon = step.icon
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow">
        <div
          className="absolute -top-3 sm:-top-4 left-4 sm:left-6 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-white text-xs sm:text-sm font-bold"
          style={{ backgroundColor: step.color }}
        >
          {step.number}
        </div>

        <div
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mt-1 sm:mt-2"
          style={{ backgroundColor: `${step.color}15` }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" style={{ color: step.color }} />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1.5 sm:mb-2">{step.title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
          <motion.div
            className="w-4 h-4 border-t-2 border-r-2 border-[#0064D6]/30 rotate-45"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
          />
        </div>
      )}
    </motion.div>
  )
})

export function ProcessSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <motion.span
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#111111] mb-3 sm:mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get Your Loan in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              4 Simple Steps
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0064D6] via-[#12D6E7] to-[#002E9C] -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
