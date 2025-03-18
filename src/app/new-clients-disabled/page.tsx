import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "New Clients | Green Tax Services",
  description: "Information for new clients on how to get started with Green Tax Services",
};

export default function NewClientsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="New Clients"
          subtitle="Welcome to Green Tax Services"
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              We're delighted that you're considering Green Tax Services for your tax and accounting needs.
              Our onboarding process is designed to be straightforward and efficient, ensuring that we can
              provide you with the best possible service from day one.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you're an individual taxpayer or a business owner, our experienced team is ready to help
              you navigate the complexities of taxation and accounting with expert guidance and personalized attention.
            </p>
            <Button asChild className="mb-4">
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Schedule Your Initial Consultation
              </a>
            </Button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://web-assets.same.dev/2936524525/5698742159.jpg"
              alt="New Client Welcome"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-neutral-50 p-10 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8 text-primary text-center">Our Onboarding Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Step 1: Schedule a Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Contact us to schedule your initial consultation. We'll discuss your tax situation, goals, and how we can best serve you.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-2">
                <a
                  href="https://calendly.com/em--gts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Step 2: Document Submission</h3>
              <p className="text-muted-foreground mb-4">
                Provide necessary documents through our secure client portal. We'll guide you on what documents are needed.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-2">
                <a
                  href="http://greentaxinc.taxdome.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Portal
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Step 3: Service Delivery</h3>
              <p className="text-muted-foreground mb-4">
                We'll prepare your tax returns or provide the accounting services you need, keeping you informed throughout the process.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-2">
                <Link href="/our-process">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Required Documents</h2>
          <p className="text-muted-foreground mb-6">
            To provide you with the most comprehensive tax service, we'll need various documents depending on your specific
            situation. Here's a general list of what to have ready:
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Individual Tax Returns</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>W-2 forms from all employers</li>
                  <li>1099 forms for self-employment or miscellaneous income</li>
                  <li>SSA-1099 for Social Security benefits</li>
                  <li>1099-DIV, 1099-INT for investment income</li>
                  <li>1098-E for student loan interest</li>
                  <li>1098-T for tuition payments</li>
                  <li>1098 for mortgage interest</li>
                  <li>Property tax statements</li>
                  <li>Record of charitable donations</li>
                  <li>Medical expense receipts</li>
                  <li>Prior year tax returns (if you're a new client)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Business Tax Returns</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Business income records</li>
                  <li>Business expense records</li>
                  <li>Asset purchase information</li>
                  <li>Payroll records</li>
                  <li>Business vehicle information</li>
                  <li>Home office information (if applicable)</li>
                  <li>Business tax ID numbers</li>
                  <li>Partnership/LLC agreements</li>
                  <li>Prior year business tax returns</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Bookkeeping Services</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Bank statements</li>
                  <li>Credit card statements</li>
                  <li>Loan statements</li>
                  <li>Invoices and receipts</li>
                  <li>Payroll information</li>
                  <li>Previous financial statements (if available)</li>
                  <li>Chart of accounts (if you have an existing accounting system)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>How long does the onboarding process take?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The onboarding process typically takes 1-2 weeks, depending on the complexity of your tax situation and how quickly you can provide the necessary documents. We strive to make the process as efficient as possible.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>How do I submit my documents securely?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We use TaxDome, a secure client portal, for all document submissions. This ensures your sensitive financial information is protected. You'll receive instructions on how to access and use the portal after your initial consultation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>What if I'm missing some documents?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Don't worry if you're missing some documents. We can often work with what you have and help you identify what else might be needed. We can also guide you on how to obtain missing documents from various sources.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>How are your fees structured?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our fees are based on the complexity of your tax situation and the services required. We provide transparent pricing and will discuss all fees during your initial consultation, so there are no surprises.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 p-10 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your initial consultation and begin your journey with Green Tax Services.
            We look forward to helping you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
