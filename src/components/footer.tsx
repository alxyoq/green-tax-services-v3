"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Green Tax Services
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fighting to reduce your tax. We are a full-service accounting firm offering a broad range
              of services for business owners, executives, and independent professionals.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/Green-Tax-Services-Inc/100063495913443/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/emgreentaxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:EM@greentaxinc.com"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="text-gray-600 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="http://greentaxinc.taxdome.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary flex items-center transition-colors"
                >
                  Client Portal <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  P.O. Box 519<br />
                  Lady Lake, FL 32158
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+13526332042" className="text-gray-600 hover:text-primary transition-colors">
                  (352) 633-2042
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:EM@greentaxinc.com" className="text-gray-600 hover:text-primary transition-colors">
                  EM@greentaxinc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              Schedule
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Tax Season:</strong> February 1st - April 15th<br />
              Monday - Saturday, 9:00 AM - 5:00 PM
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Off Season:</strong> May - December<br />
              By appointment only
            </p>
            <Button asChild className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Schedule Appointment
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex items-center mb-4 md:mb-0">
            {/* TaxDome badge */}
            <Link
              href="https://taxdome.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <div className="text-[#5d87b5] font-bold mr-2">
                <span>TAXDOME</span>
              </div>
              <span className="text-xs text-gray-500">Secure Client Portal</span>
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            &copy; {year} Green Tax Services, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
