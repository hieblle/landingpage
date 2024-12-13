import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FeaturesGrid } from "@/components/features-grid"
import { MoreFeatures } from "@/components/more-features"
import { FeaturedTestimonial } from "@/components/featured-testimonial"
import { TestimonialsSection } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturesGrid />
        <MoreFeatures />
        <FeaturedTestimonial />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}

