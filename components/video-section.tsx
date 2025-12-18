"use client"

import { useRef, useState, useEffect, useCallback, memo } from "react"
import { motion, useInView } from "framer-motion"
import { Play, ChevronLeft, ChevronRight, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Financial Tips & Tricks",
    duration: "0:30",
    instagramUrl: "https://www.instagram.com/reel/DRokc1YlYe_/",
    embedUrl: "https://www.instagram.com/reel/DRokc1YlYe_/embed",
    category: "Tips",
    thumbnail: "/financial-tips-instagram-reel-thumbnail.jpg",
  },
  {
    id: 2,
    title: "Loan Application Guide",
    duration: "0:45",
    instagramUrl: "https://www.instagram.com/reel/DQ_GljIj8Z7/",
    embedUrl: "https://www.instagram.com/reel/DQ_GljIj8Z7/embed",
    category: "Guide",
    thumbnail: "/loan-application-guide-instagram-reel-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Smart Saving Strategies",
    duration: "0:35",
    instagramUrl: "https://www.instagram.com/reel/DRokc1YlYe_/",
    embedUrl: "https://www.instagram.com/reel/DRokc1YlYe_/embed",
    category: "Education",
    thumbnail: "/saving-money-tips-instagram-reel-thumbnail.jpg",
  },
  {
    id: 4,
    title: "Credit Score Insights",
    duration: "0:40",
    instagramUrl: "https://www.instagram.com/reel/DQ_GljIj8Z7/",
    embedUrl: "https://www.instagram.com/reel/DQ_GljIj8Z7/embed",
    category: "Tips",
    thumbnail: "/credit-score-tips-instagram-reel-thumbnail.jpg",
  },
] as const

const VideoCard = memo(function VideoCard({
  video,
  index,
  isInView,
  activeVideo,
  onPlay,
}: {
  video: (typeof videos)[number]
  index: number
  isInView: boolean
  activeVideo: number | null
  onPlay: (id: number) => void
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[180px] sm:w-[240px] lg:w-[280px] snap-start"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="video-card group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
          {activeVideo === video.id ? (
            <iframe
              src={video.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title={video.title}
              loading="lazy"
            />
          ) : (
            <>
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 280px"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                onClick={() => onPlay(video.id)}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400 rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="currentColor" />
                </motion.div>
              </motion.div>

              <span className="absolute top-2 left-2 px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] sm:text-xs font-medium rounded-full">
                {video.category}
              </span>

              <div className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white/90 rounded-full flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500" />
              </div>
            </>
          )}
        </div>

        <div className="p-2.5 sm:p-3 lg:p-4">
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-[#111111] group-hover:text-pink-500 transition-colors duration-300 line-clamp-2 mb-2">
            {video.title}
          </h3>
          <a
            href={video.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-pink-500 hover:text-pink-600 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Watch on Instagram
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
})

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  useEffect(() => {
    if (!isAutoScrolling || activeVideo !== null) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10
        const cardWidth =
          typeof window !== "undefined" ? (window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 260 : 300) : 300

        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" })
        }
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoScrolling, activeVideo])

  useEffect(() => {
    checkScrollButtons()
    const carousel = scrollRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons)
      return () => carousel.removeEventListener("scroll", checkScrollButtons)
    }
  }, [checkScrollButtons])

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth =
        typeof window !== "undefined" ? (window.innerWidth < 640 ? 200 : window.innerWidth < 1024 ? 260 : 300) : 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + 16) : cardWidth + 16,
        behavior: "smooth",
      })
    }
  }, [])

  const handlePlay = useCallback((id: number) => {
    setActiveVideo(id)
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Follow Us on Instagram
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#111111] mb-2 sm:mb-3 text-balance">
            Watch Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Latest Reels
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Quick tips and insights to help you make smarter financial decisions
          </p>
        </motion.div>

        <div className="relative">
          <motion.button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors duration-300 -ml-1 sm:-ml-2 lg:-ml-4 hidden sm:flex ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.9 } : {}}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors duration-300 -mr-1 sm:-mr-2 lg:-mr-4 hidden sm:flex ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.9 } : {}}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </motion.button>

          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            onTouchStart={() => setIsAutoScrolling(false)}
            onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 3000)}
          >
            {videos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                isInView={isInView}
                activeVideo={activeVideo}
                onPlay={handlePlay}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.instagram.com/finonest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Follow @finonest
          </a>
        </motion.div>
      </div>
    </section>
  )
}
