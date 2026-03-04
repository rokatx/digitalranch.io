import { HeroSection } from '@/components/landing/HeroSection'
import { AboutSection } from '@/components/landing/AboutSection'
import { ServicesSection } from '@/components/landing/ServicesSection'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </>
  )
}
