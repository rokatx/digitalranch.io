import { ColorSamples } from '@/components/landing/ColorSamples'
import { HeroSection } from '@/components/landing/HeroSection'
import { AboutSection } from '@/components/landing/AboutSection'
import { ServicesSection } from '@/components/landing/ServicesSection'
import { ContactSection } from '@/components/landing/ContactSection'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <>
      <ColorSamples />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CTASection />
    </>
  )
}
