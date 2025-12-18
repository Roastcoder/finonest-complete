"use client"

import { useRef, useEffect, useState, memo } from "react"
import { motion, useInView } from "framer-motion"
import { Users, IndianRupee, Clock, Award } from "lucide-react"

const stats = [
  { icon: Users, value: 500000, suffix: "+", label: "Happy Customers", color: "#0064D6" },
  { icon: IndianRupee, value: 10000, suffix: " Cr+", label: "Loans Disbursed", color: "#12D6E7" },
  { icon: Clock, value: 24, suffix: " hrs", label: "Avg. Approval Time", color: "#008B96" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Trust", color: "#002E9C" },
] as const

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
})

const StatCard = memo(function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) {
  const Icon = stat.icon
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/10 hover:bg-white/15 transition-colors">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center"
          style={{ backgroundColor: `${stat.color}30` }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
        </div>
        <div className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>
        <div className="text-white/70 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
      </div>
    </motion.div>
  )
})

export function StatsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#002E9C] to-[#0064D6]" />

      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#12D6E7]/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by Millions
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our numbers speak for themselves. Join millions of Indians who trust Finonest.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
