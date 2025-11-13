"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const badges = ["Military-Grade Engineering", "Autonomous Navigation", "AI-Powered Systems"]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#ff7b00]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title and Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-balance">
              About <span className="text-[#ff7b00]">VyomGarud</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              VyomGarud develops cutting-edge UAV platforms built for extreme reliability, precision navigation, and
              defense-grade autonomous intelligence. We engineer solutions that combine military-spec durability with
              advanced AI capabilities.
            </p>
          </motion.div>

          {/* Right: Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="grid gap-4"
          >
            {badges.map((badge, index) => (
              <motion.div key={badge} variants={fadeInUp} transition={{ delay: index * 0.15 }}>
                <Card className="bg-[#0f0f0f] border-white/10 hover:border-[#ff7b00]/50 transition-colors">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff7b00]" />
                    <p className="text-white font-semibold">{badge}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
