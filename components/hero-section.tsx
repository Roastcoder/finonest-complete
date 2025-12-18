"use client"

import { useRef, useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Shield, Clock, Percent, CheckCircle2 } from "lucide-react"

const heroBanners = [
  {
    id: 1,
    badge: "Festive Season Sale",
    title: "Get up to 50% off",
    highlight: "Processing Fees",
    description: "Limited time offer on all loan products. Apply now and save big!",
    cta: "Grab Offer",
    image: "/festive-celebration-finance-gold-coins.jpg",
    gradient: "from-[#0064D6] to-[#002E9C]",
  },
  {
    id: 2,
    badge: "Home Loan Special",
    title: "Dream Home Awaits",
    highlight: "8.25% p.a.",
    description: "Lowest interest rates starting at just 8.25% p.a. for home loans.",
    cta: "Apply Now",
    image: "/modern-dream-home-sunset.jpg",
    gradient: "from-[#12D6E7] to-[#008B96]",
  },
  {
    id: 3,
    badge: "Instant Approval",
    title: "Personal Loan in",
    highlight: "15 Minutes",
    description: "Get approved in 15 minutes, disbursed in 24 hours. No hassle!",
    cta: "Check Eligibility",
    image: "/happy-person-receiving-money-transfer-phone.jpg",
    gradient: "from-[#008B96] to-[#002E9C]",
  },
  {
    id: 4,
    badge: "Business Growth",
    title: "Expand Your Business",
    highlight: "Up to 50L",
    description: "Flexible business loans to fuel your growth with quick disbursals.",
    cta: "Get Started",
    image: "/business-growth-chart-office-success.jpg",
    gradient: "from-[#002E9C] to-[#0064D6]",
  },
]

const trustBadges = [
  { icon: Shield, text: "RBI Registered" },
  { icon: Clock, text: "24hr Approval" },
  { icon: Percent, text: "Lowest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
] as const

const TrustBadge = memo(function TrustBadge({
  badge,
  index,
}: {
  badge: (typeof trustBadges)[number]
  index: number
}) {
  const Icon = badge.icon
  return (
    <motion.div
      className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      whileHover={{ y: -2, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0064D6]/10 flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0064D6]" />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-[#111111]">{badge.text}</span>
    </motion.div>
  )
})

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeBanner, setActiveBanner] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextBanner = useCallback(() => {
    setActiveBanner((prev) => (prev + 1) % heroBanners.length)
  }, [])

  const prevBanner = useCallback(() => {
    setActiveBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextBanner, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextBanner])

  const currentBanner = heroBanners[activeBanner]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="relative z-10">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBanner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative h-[380px] sm:h-[480px] lg:h-[560px] bg-gradient-to-br ${currentBanner.gradient}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={currentBanner.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                  priority={activeBanner === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Decorative elements - simplified */}
              <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 w-fit border border-white/20"
                >
                  <span className="w-2 h-2 bg-[#12D6E7] rounded-full animate-pulse" />
                  {currentBanner.badge}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 text-balance"
                >
                  {currentBanner.title} <span className="text-[#12D6E7]">{currentBanner.highlight}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-white/85 mb-5 sm:mb-8 max-w-xl leading-relaxed"
                >
                  {currentBanner.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-3 sm:gap-4"
                >
                  <Link href="/eligibility">
                    <motion.button
                      className="group bg-white text-[#0064D6] px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl flex items-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {currentBanner.cta}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="hidden sm:flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label="Watch video about our services"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                    </div>
                    Watch Video
                  </motion.button>
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  className="h-full bg-[#12D6E7]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={activeBanner}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="absolute bottom-6 sm:bottom-8 right-0 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex justify-end z-20">
            <div className="flex items-center gap-2">
              <button
                onClick={prevBanner}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex gap-2" role="tablist" aria-label="Banner slides">
                {heroBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBanner(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === activeBanner ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-selected={index === activeBanner}
                    role="tab"
                  />
                ))}
              </div>
              <button
                onClick={nextBanner}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={badge.text} badge={badge} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
