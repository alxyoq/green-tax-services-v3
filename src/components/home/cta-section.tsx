"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Reduce Your Tax Burden?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our tax experts today. We'll help you navigate
              the complexities of tax law and find every legitimate deduction you deserve.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark min-w-[200px]">
                <a
                  href="https://calendly.com/em--gts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 min-w-[200px]">
                <a href="/contact-us" className="flex items-center justify-center gap-2 group">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tax Season Hours</h3>
              <p className="opacity-90">February 1st - April 15th</p>
              <p className="opacity-90">Monday - Saturday, 9am - 5pm</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Off Season Hours</h3>
              <p className="opacity-90">May - December</p>
              <p className="opacity-90">By appointment only</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="opacity-90">Phone: (352) 633-2042</p>
              <p className="opacity-90">Email: EM@greentaxinc.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
