"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SplineViewer } from "./spline-viewer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return

      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const x = (clientX - centerX) * 0.0008
      const y = (clientY - centerY) * 0.0008
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  return (
    <section id="home" className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black">
      {/* CHANGE: Left column with proper text centering and padding */}
      <div className="flex flex-col justify-center px-6 lg:px-16 py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8">
          <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
            Precision <span className="text-orange-500">Above.</span>
            <br />
            Dominance <span className="text-orange-500">Ahead.</span>
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed">
            Mission-ready UAV systems engineered for defense, surveillance, and autonomous intelligence.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent/50 backdrop-blur-sm"
            >
              <Link href="#capabilities">Explore Capabilities</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right column: bring model visually closer to the text on large screens */}
      <div className="relative w-full min-h-[700px] flex items-center justify-center lg:justify-start overflow-visible">
        {/* Wrapper shifts the model slightly left on large screens without overlapping the text */}
        <div className="relative w-[110%] lg:w-[120%] max-w-none lg:-ml-20 xl:-ml-28 2xl:-ml-36">
          <SplineViewer
            url="https://prod.spline.design/EYp1zD2yZLQCNraL/scene.splinecode"
            title="3D UAV drone visualization"
            className="w-full h-[700px] lg:h-[780px] object-contain !overflow-visible"
            style={{
              // Slight parallax following the mouse, toned down for subtlety
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0)`,
              transformOrigin: "center",
            }}
          />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/50 text-sm uppercase tracking-widest">Scroll to explore</p>
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
