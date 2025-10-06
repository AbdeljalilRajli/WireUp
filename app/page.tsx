import { Header } from "@/components/header"
import { HeroSectionAnimated } from "@/components/hero-section-animated"
import { FeaturesSection } from "@/components/features-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSectionAnimated />
        <FeaturesSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
