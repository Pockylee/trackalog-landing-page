import Hero from "@/components/sections/hero"
import SupportedPlatformsBanner from "@/components/sections/supported-platforms-banner"
import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import SupportedPlatforms from "@/components/sections/supported-platforms"
import FAQ from "@/components/sections/faq"
import CTA from "@/components/sections/cta"

export default function LandingPage() {
  return (
    <main className="flex-1">
      <Hero />
      <SupportedPlatformsBanner />
      <Features />
      <HowItWorks />
      <SupportedPlatforms />
      <FAQ />
      <CTA />
    </main>
  )
}

