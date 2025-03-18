import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapPin, Phone, Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Green Tax Services",
  description: "Get in touch with Green Tax Services for all your tax and accounting needs",
};

export default function ContactUsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="Contact Us"
          subtitle="We're here to help with all your tax needs"
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm h-full">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      P.O. Box 519<br />
                      Lady Lake, FL 32158
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+13526332042" className="hover:text-primary transition-colors">
                        (352) 633-2042
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:EM@greentaxinc.com" className="hover:text-primary transition-colors">
                        EM@greentaxinc.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      <strong>Tax Season:</strong> February 1st - April 15th<br />
                      Monday - Saturday, 9:00 AM - 5:00 PM<br /><br />
                      <strong>Off Season:</strong> May - December<br />
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/em--gts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary/10 text-primary py-3 px-4 rounded-md font-medium hover:bg-primary/20 transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-sm h-[400px] bg-gray-100 flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Lady Lake, Florida</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Located in Lady Lake, FL. Our experience in tax law spans throughout the country.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-heading font-medium mb-3 text-primary">Our Services</h3>
              <p className="text-muted-foreground mb-4">
                Explore our comprehensive range of tax and accounting services designed to meet your specific needs.
              </p>
              <a
                href="/services"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View Services
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-heading font-medium mb-3 text-primary">Client Portal</h3>
              <p className="text-muted-foreground mb-4">
                Access your secure client portal to upload documents, review your returns, and communicate with our team.
              </p>
              <a
                href="http://greentaxinc.taxdome.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Access Portal
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-heading font-medium mb-3 text-primary">New Clients</h3>
              <p className="text-muted-foreground mb-4">
                Welcome to Green Tax Services! Learn about our onboarding process and what to expect as a new client.
              </p>
              <a
                href="/new-clients"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                New Client Info
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
