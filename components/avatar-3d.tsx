"use client"

import { useEffect, useState, useRef } from "react"
import { useParallax } from "./parallax-provider"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

type AvatarState = "wave" | "idle" | "thumbsUp" | "excited"

export function Avatar3D() {
  const { scrollY, isHoveringCTA, currentSection } = useParallax()
  const pathname = usePathname()
  const [avatarState, setAvatarState] = useState<AvatarState>("wave")
  const [speechBubble, setSpeechBubble] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const initialAnimationDone = useRef(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initial wave animation on page load
  useEffect(() => {
    if (!initialAnimationDone.current) {
      setAvatarState("wave")
      setSpeechBubble("Welcome to Finonest!")
      const timer = setTimeout(() => {
        setSpeechBubble(null)
        setAvatarState("idle")
        initialAnimationDone.current = true
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  // React to CTA hover
  useEffect(() => {
    if (isHoveringCTA) {
      setAvatarState("thumbsUp")
      setSpeechBubble("Apply Now!")
    } else if (initialAnimationDone.current) {
      setAvatarState("idle")
      setSpeechBubble(null)
    }
  }, [isHoveringCTA])

  // React to contact page
  useEffect(() => {
    if (pathname === "/contact") {
      setAvatarState("excited")
      setSpeechBubble("Let's get approved!")
    } else if (initialAnimationDone.current) {
      setAvatarState("idle")
      setSpeechBubble(null)
    }
  }, [pathname])

  // Calculate vertical position based on scroll
  const avatarY = Math.min(scrollY * 0.15, 100)

  const getAvatarAnimation = () => {
    switch (avatarState) {
      case "wave":
        return {
          rotate: [0, 14, -8, 14, -4, 10, 0],
          y: [0, -10, 0],
        }
      case "thumbsUp":
        return {
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }
      case "excited":
        return {
          y: [0, -20, 0, -15, 0, -10, 0],
          scale: [1, 1.05, 1, 1.05, 1],
        }
      case "idle":
      default:
        return {
          y: [0, -5, 0],
          scale: [1, 1.02, 1],
        }
    }
  }

  if (isMobile) {
    // Mobile: Small floating icon
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-4 right-4 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <motion.div
              className="relative w-14 h-14 bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              animate={getAvatarAnimation()}
              transition={{
                duration: avatarState === "idle" ? 3 : 0.8,
                repeat: avatarState === "idle" ? Number.POSITIVE_INFINITY : 0,
                ease: "easeInOut",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Simplified mobile avatar face */}
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <circle cx="20" cy="20" r="18" fill="white" opacity="0.9" />
                {/* Eyes */}
                <motion.ellipse
                  cx="14"
                  cy="16"
                  rx="2.5"
                  ry="3"
                  fill="#002E9C"
                  animate={{ scaleY: avatarState === "wave" ? [1, 0.2, 1] : 1 }}
                  transition={{ duration: 0.3, repeat: avatarState === "wave" ? 2 : 0, repeatDelay: 1 }}
                />
                <motion.ellipse
                  cx="26"
                  cy="16"
                  rx="2.5"
                  ry="3"
                  fill="#002E9C"
                  animate={{ scaleY: avatarState === "wave" ? [1, 0.2, 1] : 1 }}
                  transition={{ duration: 0.3, repeat: avatarState === "wave" ? 2 : 0, repeatDelay: 1 }}
                />
                {/* Smile */}
                <path
                  d={avatarState === "excited" ? "M12 25 Q20 34 28 25" : "M12 24 Q20 30 28 24"}
                  stroke="#002E9C"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Thumbs up indicator */}
              {avatarState === "thumbsUp" && (
                <motion.div
                  className="absolute -top-2 -right-2 text-lg"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                >
                  👍
                </motion.div>
              )}
            </motion.div>

            {/* Speech bubble for mobile */}
            <AnimatePresence>
              {speechBubble && (
                <motion.div
                  className="absolute bottom-full right-0 mb-2 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                >
                  <span className="text-sm font-medium text-[#002E9C]">{speechBubble}</span>
                  <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-100" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // Desktop: Full 3D-style avatar
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-8 z-50 pointer-events-none"
          style={{ top: `calc(35% + ${avatarY}px)` }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative pointer-events-auto"
            animate={getAvatarAnimation()}
            transition={{
              duration: avatarState === "idle" ? 4 : 0.6,
              repeat: avatarState === "idle" ? Number.POSITIVE_INFINITY : avatarState === "wave" ? 2 : 0,
              ease: "easeInOut",
            }}
          >
            {/* Main avatar body - 3D card style */}
            <div className="relative">
              {/* Shadow/depth layer */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#002E9C]/20 rounded-3xl blur-lg" />

              {/* Main body */}
              

              {/* Waving hand */}
              <AnimatePresence>
                {avatarState === "wave" && (
                  <motion.div
                    className="absolute -right-6 top-8"
                    initial={{ rotate: 0, x: -10 }}
                    animate={{
                      rotate: [0, 20, -10, 20, -10, 15, 0],
                      x: [0, 5, 0, 5, 0],
                    }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.2, repeat: 2 }}
                  >
                    
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Thumbs up hand */}
              <AnimatePresence>
                {avatarState === "thumbsUp" && (
                  <motion.div
                    className="absolute -left-8 top-6"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -30 }}
                  >
                    <div className="relative">
                      <div className="w-6 h-8 bg-gradient-to-b from-[#ffdbac] to-[#e8c39e] rounded-lg shadow-md" />
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-7 bg-gradient-to-b from-[#ffdbac] to-[#e8c39e] rounded-full" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Speech bubble */}
            <AnimatePresence>
              {speechBubble && (
                <motion.div
                  className="absolute -left-36 top-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100 max-w-[140px]"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-sm font-semibold text-[#002E9C] leading-tight block">{speechBubble}</span>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-t border-gray-100" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
