"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Small Business Owner",
    location: "Mumbai",
    image: "/indian-man-headshot.png",
    rating: 5,
    text: "Finonest made my business loan process incredibly smooth. Got approved in just 24 hours with the best rates in the market!",
  },
  {
    name: "Priya Patel",
    role: "IT Professional",
    location: "Bangalore",
    image: "/indian-woman-professional-headshot.png",
    rating: 5,
    text: "The home loan process was transparent from start to finish. Their team guided me through every step. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    role: "Doctor",
    location: "Delhi",
    image: "/indian-man-doctor-headshot.jpg",
    rating: 5,
    text: "Excellent customer service and quick disbursement. The interest rates are competitive and there are no hidden charges.",
  },
  {
    name: "Sneha Reddy",
    role: "Teacher",
    location: "Hyderabad",
    image: "/indian-woman-teacher-headshot.jpg",
    rating: 5,
    text: "Got my personal loan within 48 hours. The entire process was digital and hassle-free. Thank you Finonest!",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    location: "Pune",
    image: "/indian-man-entrepreneur-headshot.jpg",
    rating: 5,
    text: "The business loan helped me expand my startup. Finonest truly understands the needs of growing businesses.",
  },
] as const

const StarRating = memo(function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center justify-center md:justify-start gap-1 mb-4"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC107] text-[#FFC107]" />
      ))}
    </div>
  )
})

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoScrolling) return
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoScrolling, nextTestimonial])

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#f4f7fa]"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0064D6]/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-[#008B96]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111111] mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              Customers Say
            </span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -top-4 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0064D6] to-[#12D6E7] rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-[#0064D6]/10 relative">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <StarRating rating={currentTestimonial.rating} />

                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    "{currentTestimonial.text}"
                  </p>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#111111]">{currentTestimonial.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {currentTestimonial.role} • {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-6 sm:w-8 bg-[#0064D6]" : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === activeIndex}
                  role="tab"
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
