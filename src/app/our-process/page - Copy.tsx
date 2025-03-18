import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, Upload, FileCheck, CheckCircle, PhoneCall, FileText, MessageSquare, FileDown, CreditCard, CheckSquare, Send, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Process | Green Tax Services",
  description: "Understand Green Tax Services' streamlined tax preparation process",
};

export default function OurProcessPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <SectionHeading
          title="Our Process"
          subtitle="Streamlined, effective, and transparent"
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

        {/* Process Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Provide Your Tax Documents</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We offer multiple ways for you to submit your tax documents to us. Choose the method that works best for you:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Upload className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Client Portal (Preferred)</h3>
                        <p className="text-sm text-muted-foreground">
                          Use our secure online portal at <a href="https://greentaxinc.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">greentaxinc.com</a>. Click on Client Portal to sign up or log in.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Mail</h3>
                        <p className="text-sm text-muted-foreground">
                          Send to: P.O. Box 519, Lady Lake, FL 32158 <br />
                          <span className="text-xs">(We check our PO Box weekly throughout the year)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <PhoneCall className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Fax</h3>
                        <p className="text-sm text-muted-foreground">
                          Office Fax: (352) 633-2076<br />
                          <span className="text-xs">(Many banks still have faxes you can use to send us data)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">New Clients Requirements</h3>
                        <p className="text-sm text-muted-foreground">
                          • We'll provide a log sheet/checklist template<br />
                          • We need a complete copy of your last filed tax return
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 border border-amber-200 bg-amber-50 rounded-md">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> We prefer clients not to use email unless they password-protect their data. We also cannot click on links to access data, so either use our portal to send us soft copies or another approved secure method.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Signal the Green Light</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  Once you've submitted approximately 99% of the required documents, let us know you're ready for us to begin working on your taxes.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg flex items-start flex-1">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Send a message to <a href="mailto:EM@greentaxinc.com" className="text-primary hover:underline">EM@greentaxinc.com</a> indicating all documents have been submitted
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg flex items-start flex-1">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Give us a call at <a href="tel:+13526332042" className="text-primary hover:underline">(352) 633-2042</a> to let us know all documents are submitted
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg flex items-start flex-1">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Client Portal</h3>
                      <p className="text-sm text-muted-foreground">
                        If using our portal, simply check the box indicating you've completed your document uploads
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Confirmation of Receipt</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We'll log your information in our system and email you back a confirmation log number. This confirms you've been entered on our list of returns to be prepared.
                </p>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex">
                    <FileCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Your confirmation log number serves as your receipt that we have your documents and you're in our processing queue.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Tax Preparation</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We work on preparing your tax returns based on the information provided.
                </p>

                <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <h3 className="font-medium text-primary mb-3">Important Note:</h3>
                  <p className="text-muted-foreground text-sm">
                    During this process, we appreciate your prompt responses to any questions or in providing any missing data needed. Clients who go missing or don't make it their priority to respond in a timely manner are not a good fit for our firm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 5 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Review Your Return</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We provide your completed tax return for your review before filing.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg flex-1">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Paper Copy</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll print and mail you a physical copy of your tax return
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg flex-1">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <FileDown className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Digital Copy</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll upload a PDF to the client portal for your review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  <em>The delivery method is based on your personal preference.</em>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Step 6 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                6
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Payment</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  The client pays for the return preparation costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">New Clients</h3>
                        <p className="text-sm text-muted-foreground">
                          For new clients, you can see our rates on our website under
                          <Link href="/services" className="text-primary hover:underline"> Services</Link>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Existing Clients</h3>
                        <p className="text-sm text-muted-foreground">
                          For existing clients, your rate is typically your prior year's rate plus or minus adjustments for new services needed and a small yearly inflation increase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 7 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                7
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Approval to File</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  The client reviews the return and after any questions are resolved gives us permission to e-file the return.
                </p>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      We require your explicit approval before we electronically file your return. This ensures you've reviewed and are comfortable with all the information being submitted.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 8 */}
          <div className="relative mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                8
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">E-Filing</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We electronically file your tax return with all required government agencies.
                </p>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex">
                    <Send className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        We will send you a confirmation message when your return is accepted by all government agencies (federal and state).
                      </p>
                      <p className="text-sm text-muted-foreground">
                        If for any reason the return is rejected, we will inform you immediately and work to resolve the issue.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 9 */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                9
              </div>
              <h2 className="text-2xl font-heading font-semibold ml-4 text-primary">Year-Round Support</h2>
            </div>

            <Card className="ml-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  We are here year-round if you have any questions or receive any government letters regarding the return we prepared for you.
                </p>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex">
                    <Calendar className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Just contact us and we will be glad to assist you with any questions or concerns that arise after your return has been filed. Our relationship doesn't end when tax season does.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Client Portal Highlight */}
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
                  <ExternalLink className="h-4 w-4" />
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
