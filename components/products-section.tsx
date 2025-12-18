"use client"

import { useRef, useState, useEffect, useCallback, memo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ParallaxCard } from "./parallax-card"
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react"

const products = [
  {
    title: "Personal Loans",
    description: "Quick personal loans for all your needs with minimal documentation.",
    rate: "10.5%",
    maxAmount: "Rs.25 Lakhs",
    tenure: "5 Years",
    color: "#0064D6",
    href: "/products#personal",
    features: ["Instant approval", "Flexible tenure", "No collateral"],
    image: "/happy-indian-person-receiving-money-personal-loan-.jpg",
  },
  {
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable home loans.",
    rate: "8.5%",
    maxAmount: "Rs.5 Crores",
    tenure: "30 Years",
    color: "#12D6E7",
    href: "/products#home",
    features: ["Lowest rates", "Long tenure", "Tax benefits"],
    image: "/indian-family-standing-in-front-of-new-home-with-k.jpg",
  },
  {
    title: "Business Loans",
    description: "Fuel your business growth with flexible business financing.",
    rate: "12%",
    maxAmount: "Rs.50 Lakhs",
    tenure: "7 Years",
    color: "#008B96",
    href: "/products#business",
    features: ["Quick disbursal", "Flexible EMI", "No security"],
    image: "/indian-business-owner-entrepreneur-shop-office-suc.jpg",
  },
  {
    title: "Credit Cards",
    description: "Premium credit cards with exclusive rewards and benefits.",
    rate: "0%",
    maxAmount: "Rs.10 Lakhs",
    tenure: "Lifetime",
    color: "#002E9C",
    href: "/products#credit",
    features: ["Cashback offers", "Reward points", "Free for life"],
    image: "/premium-credit-card-gold-platinum-rewards-shopping.jpg",
  },
  {
    title: "Vehicle Loans",
    description: "Drive your dream car home with our easy vehicle loans.",
    rate: "9.5%",
    maxAmount: "Rs.1 Crore",
    tenure: "7 Years",
    color: "#0064D6",
    href: "/products#vehicle",
    features: ["100% financing", "Quick process", "Low EMI"],
    image: "/indian-person-buying-new-car-dealership-keys-happy.jpg",
  },
  {
    title: "Education Loans",
    description: "Invest in your future with our education financing options.",
    rate: "7.5%",
    maxAmount: "Rs.75 Lakhs",
    tenure: "15 Years",
    color: "#12D6E7",
    href: "/products#education",
    features: ["Moratorium period", "Cover all costs", "Easy repayment"],
    image: "/indian-student-graduation-university-college-succe.jpg",
  },
] as const

const ProductCard = memo(function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number]
  index: number
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] snap-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <ParallaxCard index={index} glowColor={product.color}>
        <div className="relative">
          {/* Product Image */}
          <div className="relative w-full h-32 sm:h-36 lg:h-40 -mx-1 -mt-1 mb-3 overflow-hidden rounded-t-2xl">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span
              className="absolute top-3 right-3 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white backdrop-blur-sm"
              style={{ backgroundColor: `${product.color}dd` }}
            >
              From {product.rate} p.a.
            </span>
          </div>

          <div className="px-1">
            <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1 sm:mb-1.5">{product.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{product.description}</p>

            <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: product.color }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-4 p-2 sm:p-3 bg-[#f8fafc] rounded-xl">
              <div>
                <div className="text-sm sm:text-base font-bold text-[#111111]">{product.maxAmount}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Max Amount</div>
              </div>
              <div className="text-right">
                <div className="text-sm sm:text-base font-bold text-[#111111]">{product.tenure}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Max Tenure</div>
              </div>
            </div>

            <Link href={product.href}>
              <motion.button
                className="w-full py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 text-white transition-all"
                style={{ backgroundColor: product.color }}
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </ParallaxCard>
    </motion.div>
  )
})

export function ProductsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  const checkScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10
        const cardWidth = typeof window !== "undefined" && window.innerWidth < 640 ? 280 : 340

        if (isAtEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          carouselRef.current.scrollBy({ left: cardWidth + 20, behavior: "smooth" })
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoScrolling])

  useEffect(() => {
    checkScrollButtons()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons)
      return () => carousel.removeEventListener("scroll", checkScrollButtons)
    }
  }, [checkScrollButtons])

  const scroll = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = typeof window !== "undefined" && window.innerWidth < 640 ? 280 : 340
      carouselRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + 20) : cardWidth + 20,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <section className="relative py-10 sm:py-12 lg:py-16 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8 lg:mb-10">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <motion.span
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#12D6E7]/10 rounded-full text-[#008B96] text-xs sm:text-sm font-bold mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Products
            </motion.span>
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Financial Solutions
            </motion.h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-end">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-[#0064D6] text-[#0064D6] hover:bg-[#0064D6] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              whileHover={canScrollLeft ? { scale: 1.05 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-[#0064D6] text-[#0064D6] hover:bg-[#0064D6] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              whileHover={canScrollRight ? { scale: 1.05 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          onTouchStart={() => setIsAutoScrolling(false)}
          onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 3000)}
        >
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-6 sm:mt-8 lg:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/products">
            <motion.button
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold text-sm shadow-lg shadow-[#0064D6]/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Products
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
