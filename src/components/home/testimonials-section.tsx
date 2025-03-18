"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Michelle S.",
    role: "Small Business Owner",
    content: "Green Tax Services has been handling my business taxes for over 5 years. Their attention to detail and knowledge of tax law has saved me thousands. Elizia is always available to answer my questions throughout the year.",
    rating: 5,
  },
  {
    name: "Robert T.",
    role: "Real Estate Investor",
    content: "As someone with multiple rental properties, my tax situation is complex. The team at Green Tax Services makes it simple and finds deductions I would never know about. Worth every penny!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Freelance Consultant",
    content: "I switched to Green Tax Services last year after a recommendation from a friend. The difference in service quality is night and day. They're thorough, professional, and I'm paying less in taxes!",
    rating: 5,
  },
  {
    name: "Mark J.",
    role: "Retired Professional",
    content: "My wife and I have been using Green Tax Services for our retirement planning and annual taxes. Their advice has been invaluable in optimizing our withdrawals and minimizing tax burdens.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    role: "Healthcare Professional",
    content: "As a busy healthcare worker, I don't have time to keep up with changing tax laws. Green Tax Services makes it easy and convenient, with their virtual appointments and clear communication.",
    rating: 5,
  }
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [AutoPlay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-green-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Read what our clients have to say about our services."
          center
        />

        <div className="relative mt-12 px-4 md:px-10 lg:px-20">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full p-6 bg-white shadow hover:shadow-md transition-shadow">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="mb-4 text-primary">
                            <QuoteIcon size={32} />
                          </div>
                          <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                        </div>
                        <div>
                          <div className="flex mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <div className="flex items-center">
                            <div>
                              <h4 className="font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-3 h-3 p-0 rounded-full ${selectedIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
