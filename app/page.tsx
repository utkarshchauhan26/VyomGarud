import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { HighlightsSection } from "@/components/highlights-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <HighlightsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
