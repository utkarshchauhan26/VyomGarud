"use client"

import { motion } from "framer-motion"
import { Clock, Target, Lock } from "lucide-react"

const highlights = [
  {
    icon: Clock,
    title: "8+ Hours Flight Time",
    description: "Extended endurance for comprehensive mission coverage",
  },
  {
    icon: Target,
    title: "AI-Powered Target Detection",
    description: "Autonomous identification and tracking capabilities",
  },
  {
    icon: Lock,
    title: "Secure Communication Layer",
    description: "Military-grade encryption and data protection",
  },
]

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Why <span className="text-[#ff7b00]">VyomGarud</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-white/5 hover:border-[#ff7b00]/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff7b00]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#ff7b00]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="text-white/60 text-sm">{highlight.description}</p>

                {index < highlights.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-px h-8 bg-gradient-to-b from-transparent via-[#ff7b00]/30 to-transparent transform translate-x-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
