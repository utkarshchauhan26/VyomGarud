"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar, Zap, Shield, Cpu } from "lucide-react"

const capabilities = [
  {
    icon: Radar,
    title: "Long-Endurance UAV Systems",
    description: "Extended flight times with optimized payload capacity for sustained operations.",
  },
  {
    icon: Zap,
    title: "Thermal & AI Vision Payloads",
    description: "Advanced thermal imaging combined with AI-powered target detection and tracking.",
  },
  {
    icon: Shield,
    title: "Autonomous Fleet Operations",
    description: "Coordinated multi-drone missions with centralized command and control.",
  },
  {
    icon: Cpu,
    title: "Secure Defense-Grade Networking",
    description: "Military-spec encryption and hardened communication protocols for maximum security.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#ff7b00]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Capabilities & <span className="text-[#ff7b00]">Solutions</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Cutting-edge technology for defense and surveillance operations
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="bg-white/2 border-white/10 hover:border-[#ff7b00]/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-[#ff7b00]/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#ff7b00]/10 flex items-center justify-center mb-4 group-hover:bg-[#ff7b00]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#ff7b00]" />
                    </div>
                    <CardTitle className="text-white">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
