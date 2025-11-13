"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#ff7b00]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">
            Get in <span className="text-[#ff7b00]">Touch</span>
          </h2>
          <p className="text-white/60">Reach out to learn more about our UAV systems and capabilities.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white/2 border border-white/10 p-8 rounded-xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/80">Name</label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#ff7b00]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/80">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#ff7b00]/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-white/80">Message</label>
            <Textarea
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#ff7b00]/50 min-h-32 resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-[#ff7b00] hover:bg-[#e56f00] text-white font-semibold py-3">
            {submitted ? "Message Sent!" : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
