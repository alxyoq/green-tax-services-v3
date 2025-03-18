"use client";

import { FileText, Users, Building, Calculator, Clock, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Individual Tax Returns",
    description: "Personalized tax preparation for individuals, ensuring maximum deductions and accurate filing.",
    icon: FileText,
    href: "/services#individual"
  },
  {
    title: "Business Tax Returns",
    description: "Comprehensive tax services for businesses of all sizes, from self-employed to corporations.",
    icon: Building,
    href: "/services#business"
  },
  {
    title: "Tax Planning",
    description: "Strategic planning to minimize your tax liability and maximize your financial future.",
    icon: TrendingUp,
    href: "/services#additional"
  },
  {
    title: "Bookkeeping",
    description: "Professional bookkeeping services to keep your finances organized throughout the year.",
    icon: Calculator,
    href: "/services#additional"
  },
  {
    title: "Audit Representation",
    description: "Expert representation before the IRS in case of an audit, protecting your interests.",
    icon: Users,
    href: "/services#audit"
  },
  {
    title: "Year-Round Support",
    description: "Ongoing tax advice and support to help you make informed financial decisions.",
    icon: Clock,
    href: "/services#support"
  }
];

export function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a wide range of professional tax and accounting services to meet your needs"
          center
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Link href={service.href} className="block h-full">
                <div className="group h-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
                  <div className="p-3 rounded-full bg-green-50 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 text-primary font-medium flex items-center text-sm">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
