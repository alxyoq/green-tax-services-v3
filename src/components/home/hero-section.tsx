"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-green-50">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Fighting to <span className="text-primary">Reduce Your Tax</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Professional tax services for business owners, executives, and independent professionals.
              Affordable, experienced, and friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <a href="https://calendly.com/em--gts" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="flex items-center mt-10 space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">25+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">1000+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="kat.png"
                alt="Green Tax Services Team Meeting"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply rounded-lg"></div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">IRS Enrolled Agent</p>
                  <p className="text-xs text-muted-foreground">Certified Professional</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Secure Client Portal</p>
                  <p className="text-xs text-muted-foreground">TaxDome Integrated</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-green-300/30 blur-3xl"></div>
      </div>
    </section>
  );
}
