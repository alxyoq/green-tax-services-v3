import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Mail,
  Upload,
  FileCheck,
  CheckCircle,
  PhoneCall,
  FileText,
  MessageSquare,
  FileDown,
  CreditCard,
  CheckSquare,
  Send
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | Green Tax Services",
  description: "Learn about Green Tax Services' streamlined tax preparation process",
};

export default function OurProcessPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="Our Tax Preparation Process"
          subtitle="Simple, streamlined, and transparent"
          className="mb-12 text-center"
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground">
            Our tax preparation process is designed to be simple, effective, and transparent. We've developed a
            step-by-step approach to ensure your tax filing experience is smooth and efficient.
          </p>
          <p className="text-muted-foreground mt-4">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">Starting in 2024</span>, we will be utilizing our client portal to keep clients updated of each step in the process, so you can always log in to your portal account and see what step we are on.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <ProcessStep
            number={1}
            title="Provide Your Tax Documents"
            icon={Upload}
          >
            <p className="mb-6 text-muted-foreground">
              We offer multiple ways for you to submit your tax documents to us. Choose the method that works best for you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard
                icon={Upload}
                title="Client Portal (Preferred)"
                description={
                  <>
                    Use our secure online portal at <a href="https://greentaxinc.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">greentaxinc.com</a>. Click on Client Portal to sign up or log in.
                  </>
                }
              />

              <InfoCard
                icon={Mail}
                title="Mail"
                description={
                  <>
                    Send to: P.O. Box 519, Lady Lake, FL 32158<br />
                    <span className="text-xs">(We check our PO Box weekly throughout the year)</span>
                  </>
                }
              />

              <InfoCard
                icon={PhoneCall}
                title="Fax"
                description={
                  <>
                    Office Fax: (352) 633-2076<br />
                    <span className="text-xs">(Many banks still have faxes you can use to send us data)</span>
                  </>
                }
              />

              <InfoCard
                icon={FileText}
                title="New Clients Requirements"
                description={
                  <>
                    • We'll provide a log sheet/checklist template<br />
                    • We need a complete copy of your last filed tax return
                  </>
                }
              />
            </div>

            <div className="mt-6 p-3 border border-amber-200 bg-amber-50 rounded-md">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> We prefer clients not to use email unless they password-protect their data. We also cannot click on links to access data, so either use our portal to send us soft copies or another approved secure method.
              </p>
            </div>
          </ProcessStep>

          {/* Step 2 */}
          <ProcessStep
            number={2}
            title="Signal the Green Light"
            icon={CheckSquare}
          >
            <p className="mb-6 text-muted-foreground">
              Once you've submitted approximately 99% of the required documents, let us know you're ready for us to begin working on your taxes.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <InfoCard
                icon={MessageSquare}
                title="Email Us"
                description={
                  <>
                    Send a message to <a href="mailto:EM@greentaxinc.com" className="text-primary hover:underline">EM@greentaxinc.com</a> indicating all documents have been submitted
                  </>
                }
                className="flex-1"
              />

              <InfoCard
                icon={PhoneCall}
                title="Call Us"
                description={
                  <>
                    Give us a call at <a href="tel:+13526332042" className="text-primary hover:underline">(352) 633-2042</a> to let us know all documents are submitted
                  </>
                }
                className="flex-1"
              />

              <InfoCard
                icon={CheckSquare}
                title="Client Portal"
                description={
                  <>
                    If using our portal, simply check the box indicating you've completed your document uploads
                  </>
                }
                className="flex-1"
              />
            </div>
          </ProcessStep>

          {/* Step 3 */}
          <ProcessStep
            number={3}
            title="Confirmation of Receipt"
            icon={FileCheck}
          >
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex">
                <FileCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  We'll log your information in our system and email you back a confirmation log number. This confirms you've been entered on our list of returns to be prepared. Your confirmation log number serves as your receipt that we have your documents and you're in our processing queue.
                </p>
              </div>
            </div>
          </ProcessStep>

          {/* Step 4 */}
          <ProcessStep
            number={4}
            title="Tax Preparation"
            icon={FileText}
          >
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-medium text-primary mb-3">Important Note:</h3>
              <p className="text-muted-foreground">
                During this process, we appreciate your prompt responses to any questions or in providing any missing data needed. Clients who go missing or don't make it their priority to respond in a timely manner are not a good fit for our firm.
              </p>
            </div>
          </ProcessStep>

          {/* Step 5 */}
          <ProcessStep
            number={5}
            title="Review Your Return"
            icon={FileDown}
          >
            <p className="mb-6 text-muted-foreground">
              We provide your completed tax return for your review before filing.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <InfoCard
                icon={Mail}
                title="Paper Copy"
                description="We'll print and mail you a physical copy of your tax return"
                className="flex-1"
              />

              <InfoCard
                icon={FileDown}
                title="Digital Copy"
                description="We'll upload a PDF to the client portal for your review"
                className="flex-1"
              />
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              <em>The delivery method is based on your personal preference.</em>
            </p>
          </ProcessStep>

          {/* Step 6 */}
          <ProcessStep
            number={6}
            title="Payment"
            icon={CreditCard}
          >
            <p className="mb-6 text-muted-foreground">
              The client pays for the return preparation costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard
                icon={CreditCard}
                title="New Clients"
                description={
                  <>
                    For new clients, you can see our rates on our website under
                    <Link href="/services" className="text-primary hover:underline"> Services</Link>.
                  </>
                }
              />

              <InfoCard
                icon={CreditCard}
                title="Existing Clients"
                description="For existing clients, your rate is typically your prior year's rate plus or minus adjustments for new services needed and a small yearly inflation increase."
              />
            </div>
          </ProcessStep>

          {/* Step 7 */}
          <ProcessStep
            number={7}
            title="Approval to File"
            icon={CheckCircle}
          >
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  The client reviews the return and after any questions are resolved gives us permission to e-file the return. We require your explicit approval before we electronically file your return. This ensures you've reviewed and are comfortable with all the information being submitted.
                </p>
              </div>
            </div>
          </ProcessStep>

          {/* Step 8 */}
          <ProcessStep
            number={8}
            title="E-Filing"
            icon={Send}
          >
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex">
                <Send className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-2">
                    We electronically file your tax return with all required government agencies. We will send you a confirmation message when your return is accepted by all government agencies (federal and state).
                  </p>
                  <p className="text-muted-foreground">
                    If for any reason the return is rejected, we will inform you immediately and work to resolve the issue.
                  </p>
                </div>
              </div>
            </div>
          </ProcessStep>

          {/* Step 9 */}
          <ProcessStep
            number={9}
            title="Year-Round Support"
            icon={Calendar}
            last={true}
          >
            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex">
                <Calendar className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  We are here year-round if you have any questions or receive any government letters regarding the return we prepared for you. Just contact us and we will be glad to assist you with any questions or concerns that arise after your return has been filed. Our relationship doesn't end when tax season does.
                </p>
              </div>
            </div>
          </ProcessStep>
        </div>

        {/* 2024 Process Enhancement Section */}
        <div className="mt-20 mb-16 bg-primary/5 p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:flex-1 mb-6 md:mb-0 md:mr-10">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">2024 Process Enhancement</h2>
              <p className="text-muted-foreground mb-4">
                Starting in 2024, we will be utilizing our client portal to keep clients updated of each step in the process.
                You'll be able to log in to your portal account anytime to see exactly what stage your tax return is in.
              </p>
              <p className="text-muted-foreground">
                This enhancement provides greater transparency and keeps you informed throughout the entire process.
              </p>
            </div>
            <div className="md:w-1/3">
              <Button asChild className="w-full" size="lg">
                <a
                  href="http://greentaxinc.taxdome.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Access Client Portal
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm text-center text-muted-foreground mt-4">
                First-time users: Click "Sign Up" to create your account
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 p-10 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to begin your tax preparation process or to ask any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact-us" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://calendly.com/em--gts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

interface ProcessStepProps {
  number: number;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  last?: boolean;
}

function ProcessStep({ number, title, icon: Icon, children, last = false }: ProcessStepProps) {
  return (
    <div className={`relative mb-16 ${last ? '' : ''}`}>
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        <h2 className="text-2xl font-heading font-semibold ml-4 text-primary flex items-center gap-3">
          {title}
          <Icon className="h-5 w-5 text-primary hidden sm:block" />
        </h2>
      </div>

      <Card className="ml-6 border-l-4 border-l-primary">
        <CardContent className="pt-6">
          {children}
        </CardContent>
      </Card>

      {!last && (
        <div className="absolute left-[23px] top-[48px] bottom-[-48px] w-0.5 bg-gray-200"></div>
      )}
    </div>
  );
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
  className?: string;
}

function InfoCard({ icon: Icon, title, description, className }: InfoCardProps) {
  return (
    <div className={`bg-neutral-50 p-4 rounded-lg ${className}`}>
      <div className="flex items-start">
        <div className="bg-primary/10 p-2 rounded-full mr-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
