import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
