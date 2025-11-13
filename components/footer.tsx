"use client"

import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff7b00]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-2">
              <span className="text-white">Vyom</span>
              <span className="text-[#ff7b00]">Garud</span>
            </h3>
            <p className="text-white/60 text-sm">
              Mission-ready UAV systems engineered for defense and autonomous intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link href="#about" className="hover:text-[#ff7b00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-[#ff7b00] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="#highlights" className="hover:text-[#ff7b00] transition-colors">
                  Highlights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:contact@vyomgarud.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#ff7b00]/20 flex items-center justify-center text-white/80 hover:text-[#ff7b00] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#ff7b00]/20 flex items-center justify-center text-white/80 hover:text-[#ff7b00] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-center text-white/40 text-sm">&copy; 2025 VyomGarud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
