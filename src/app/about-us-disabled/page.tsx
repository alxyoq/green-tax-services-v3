import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock, Trophy, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Green Tax Services",
  description: "Learn about Green Tax Services and our mission to provide exceptional tax and accounting services.",
};

export default function AboutUsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="About Us"
          subtitle="Fighting to reduce your tax"
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Green Tax Services was founded with a simple mission: to provide exceptional tax and accounting services
              that prioritize the financial well-being of our clients. Our team of experienced professionals is dedicated
              to helping individuals and businesses navigate the complex world of taxation with confidence and ease.
            </p>
            <p className="text-muted-foreground">
              With years of experience in the industry, we have developed a reputation for reliability, accuracy, and personalized service.
              We pride ourselves on staying up-to-date with the latest tax laws and regulations to ensure that our clients receive
              the most advantageous tax strategies tailored to their unique situations.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://web-assets.same.dev/2936524525/1458425064.jpeg"
              alt="Green Tax Services Team Meeting"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-neutral-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8 text-primary text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We adhere to the highest ethical standards in all our interactions and work. Our clients trust us with their
                financial information, and we honor that trust by maintaining strict confidentiality and delivering honest advice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                Our clients' needs and financial goals are at the center of everything we do. We take the time to understand
                each client's unique situation and provide personalized solutions that align with their objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CalendarClock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every service we provide. Our team continuously updates their knowledge and skills
                to ensure we deliver accurate, efficient, and effective tax solutions for all our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8 text-primary text-center">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team consists of highly qualified tax professionals with extensive experience in various aspects of
                    taxation and accounting, including IRS Enrolled Agents who can represent clients before the IRS.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground text-sm">
                    We take the time to understand each client's unique financial situation and provide tailored solutions
                    that meet their specific needs, rather than applying one-size-fits-all approaches.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Year-Round Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Our relationship with clients doesn't end with the tax filing deadline. We provide year-round support
                    to address any tax-related questions or concerns that may arise throughout the year.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground text-sm">
                    We believe in complete transparency with our pricing, so there are never any surprise fees.
                    We provide clear information about our rates for all services upfront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 p-10 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Ready to Work with Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to learn how we can help you optimize your tax situation and achieve your financial goals.
            We're committed to providing the highest level of service and expertise to all our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact-us" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-process">
                Learn Our Process
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
