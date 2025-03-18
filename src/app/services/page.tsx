import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import ServicesTabs from "./ServicesTabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | Green Tax Services",
  description:
    "Explore our comprehensive tax and accounting services with transparent pricing information.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="Our Services & Pricing"
          subtitle="Comprehensive tax solutions with transparent pricing"
          className="mb-12 text-center"
        />
        <ServicesTabs />

        {/* CTA Section */}
        <div className="bg-primary/5 p-8 rounded-lg shadow-sm mt-20 text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">
            Ready to Discuss Your Tax Needs?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific tax situation and how we can help.
            We're committed to finding the best tax solutions for you or your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
