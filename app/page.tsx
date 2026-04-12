import { Navigation, MobileNavigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { InternshipSection } from "@/components/sections/internship-section"
import { AcademicSection } from "@/components/sections/academic-section"
import { ReflectionsSection } from "@/components/sections/reflections-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <InternshipSection />
      <AcademicSection />
      <ReflectionsSection />
      <Footer />
    </main>
  )
}
