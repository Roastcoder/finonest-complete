"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Complete loading after animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f7ff]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#12D6E7]/20 to-[#008B96]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#0064D6]/20 to-[#002E9C]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with pulse animation */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 -m-4 bg-gradient-to-r from-[#12D6E7] via-[#0064D6] to-[#002E9C] rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Logo */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image src="/logo.png" alt="Finonest" width={120} height={120} className="relative z-10" priority />
              </motion.div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0064D6] via-[#008B96] to-[#002E9C] bg-clip-text text-transparent">
                Finonest
              </h1>
              <p className="text-sm text-[#008B96] font-medium tracking-widest mt-1">SMART LOANS & CREDIT</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#12D6E7] via-[#0064D6] to-[#002E9C] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading your financial journey...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
