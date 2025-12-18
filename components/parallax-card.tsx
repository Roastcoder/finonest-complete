"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  index?: number
}

export function ParallaxCard({ children, className, glowColor = "#0064D6", index = 0 }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-2xl bg-white p-6 transition-shadow duration-300",
        isHovered ? "shadow-2xl" : "shadow-lg shadow-black/5",
        className,
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content with 3D depth */}
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  )
}
