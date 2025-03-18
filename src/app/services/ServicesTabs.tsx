"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCard } from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { Check, Info, ArrowRight } from "lucide-react";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("individual");

  // On mount, set the active tab based on the URL hash.
  useEffect(() => {
    let hash = window.location.hash.slice(1); // remove '#' from hash
    if (hash === "bookkeeping" || hash === "planning" || hash === "tax-planning") {
      hash = "additional";
    }
    if (["individual", "business", "specialty", "additional"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Listen for custom events dispatched from the Header drop-down.
  useEffect(() => {
    const handleServicesTabChange = (e: CustomEvent) => {
      const href = e.detail as string; // e.g. "/services#business" or "/services#additional"
      const parts = href.split("#");
      if (parts.length > 1) {
        let hash = parts[1];
        if (hash === "bookkeeping" || hash === "planning" || hash === "tax-planning") {
          hash = "additional";
        }
        setActiveTab(hash);
        window.history.replaceState(null, "", `#${hash}`);
      }
    };
    window.addEventListener("servicesTabChange", handleServicesTabChange as EventListener);
    return () => window.removeEventListener("servicesTabChange", handleServicesTabChange as EventListener);
  }, []);

  // When a user clicks a tab manually, update state and the URL hash.
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, "", `#${value}`);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-muted-foreground text-center">
          At Green Tax Services, we believe in complete transparency with our pricing.
          Below you'll find our current rates for various tax services. Please note that
          all rates are subject to change based on complexity and other factors as detailed.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full max-w-5xl mx-auto"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="specialty">Specialty</TabsTrigger>
          <TabsTrigger value="additional">Additional Services</TabsTrigger>
        </TabsList>

        {/* Individual Tax Services */}
        <TabsContent value="individual" className="space-y-6">
          <div className="grid gap-6">
            <PricingCard
              title="Individual Return"
              price="$300"
              description="Starting price includes 1 federal return and 1 state return."
              features={[
                "Complete federal and state tax preparation",
                "Additional state returns: $75 each",
                "MFJ counted as one return",
                "MFS counted as two returns (if both spouses file with us)",
              ]}
            />

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">
                    Price Adjustment Policy
                  </h4>
                  <p className="text-sm text-amber-700">
                    We reserve the right to increase the rate above depending on the complexity of the tax return up to $100 (Examples: High number of investment accounts and stock sales to enter (over 5 investment accounts), complex employee stock options received (if not reported on W2), meeting with financial adviser to decide retirement options, etc.). Clients will be notified before completion to decide if they want us to continue the work.
                  </p>
                  <p className="text-sm text-amber-700 mt-2">
                    We also reserve the right to increase existing clients +-5% to 10% per year to cover for inflation, staff raises, overhead, tax software increases, etc.
                  </p>
                </div>
              </div>
            </div>

            <PricingCard
              title="Dependent's Return"
              price="$75"
              description="Starting price includes federal return and 1 state return."
              features={[
                "Complete federal return",
                "One state return included",
                "Additional state returns: $25 each",
              ]}
            />

            <PricingCard
              title="FIN 114"
              price="$150"
              description="Per person filing fee."
              features={[
                "Complete FBAR filing",
                "Alternative: You can file yourself for free",
                <span key="fbar-link">
                  <a
                    href="https://www.fincen.gov/report-foreign-bank-and-financial-accounts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit FinCEN website
                  </a>{" "}
                  for self-filing option
                </span>,
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact-us" className="flex items-center gap-2">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </TabsContent>

        {/* Business Tax Services */}
        <TabsContent value="business" className="space-y-6">
          <div className="bg-primary/5 p-4 rounded-lg mb-6">
            <p className="text-sm">
              <strong>Note:</strong> Rates below for business tax returns do NOT include bookkeeping.
              It includes the preparation of the tax forms and associated schedules. If you need us to turn your bank statements and receipts into financials, we charge $125/hour for bookkeeping. Our business tax preparation does include up to 1 hour of books clean up.
            </p>
          </div>

          <div className="grid gap-6">
            <PricingCard
              title="Self-employed"
              price="$400"
              description="Starting price for self-employed individuals."
              features={[
                "Includes owner's simple attached individual tax return",
                "Federal and one state",
                "Schedule C preparation",
                "Business income and expenses",
              ]}
            />

            <PricingCard
              title="Rental Property Owners"
              price="$200"
              description="Per rental property in addition to the individual return preparation fee."
              features={[
                "Schedule E preparation",
                "Rental income and expenses tracking",
                "Depreciation calculations",
                "Sale of Rental Property Reporting: $175 per property",
              ]}
            />

            <PricingCard
              title="Partnership"
              price="$950"
              description="Starting price for partnership returns."
              popular={true}
              features={[
                "Complete partnership return preparation",
                "Includes FREE owner's simple individual return",
                "K-1 preparation",
                "Partnership tax planning",
              ]}
            />

            <PricingCard
              title="S-Corporation"
              price="$950"
              description="Starting price for S-Corporation returns."
              features={[
                "Complete S-Corporation return preparation",
                "Includes FREE owner's simple individual return",
                "K-1 preparation",
                "S-Corporation tax planning",
              ]}
            />

            <PricingCard
              title="C-Corporation"
              price="$1,000"
              description="Starting price for C-Corporation returns."
              features={[
                "Complete C-Corporation return preparation",
                "Includes one FREE owner's simple individual tax return",
                "Corporate tax planning",
                "Dividend planning",
              ]}
            />

            <PricingCard
              title="Estate Returns"
              price="$650"
              description="Starting price for simple 1041 returns only."
              features={[
                "Simple 1041 return preparation",
                "Estate income reporting",
                "Beneficiary reporting",
                "Note: We only prepare simple 1041 returns",
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact-us" className="flex items-center gap-2">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </TabsContent>

        {/* Specialty Services */}
        <TabsContent value="specialty" className="space-y-6">
          <div className="grid gap-6">
            <PricingCard
              title="Audit Representation"
              price="FREE"
              description="For clients for the tax years we prepared their taxes that are being audited."
              popular={true}
              features={[
                "Full representation during IRS audit",
                "Document preparation and submission",
                "Communication with tax authorities",
                "Expert advice throughout the audit process",
              ]}
            />

            <PricingCard
              title="Audit Representation (Non-Client)"
              price="$150/hour"
              description="For tax years we did not prepare the tax return."
              features={[
                "Hourly rate for audit representation",
                "Replies to tax authorities",
                "Tax consulting services",
                "Available for returns we did not prepare",
              ]}
            />

            <PricingCard
              title="Amended Returns"
              price="Varies"
              description="We charge the normal rate for the return type or $250 per hour, whichever is less."
              features={[
                "Complete recreation of original return",
                "Preparation of amended forms",
                "Filing with tax authorities",
                "Follow-up on processing status",
              ]}
            />

            <div className="bg-primary/5 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    We don't charge for initial consultations (half an hour for individuals and up to 1 hour for businesses)
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    We do not offer free advice to people self-preparing their tax returns
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    We don't offer free reviews after tax season of self-prepared returns unless you are looking to hire a tax professional
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    We are happy to review new clients' prior year returns as part of our normal tax return preparation process
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    We no longer do Non-Profits and Foreign Tax Returns
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact-us" className="flex items-center gap-2">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </TabsContent>

        {/* Additional Services */}
        <TabsContent value="additional" className="space-y-6">
          <div className="grid gap-6">
            <PricingCard
              title="Monthly Bookkeeping Services"
              price="$75/hour"
              description="For ongoing financial management needs."
              popular={true}
              features={[
                "Regular financial record keeping",
                "Monthly account reconciliation",
                "Financial report preparation",
                "Scheduled bookkeeping services",
              ]}
            />

            <PricingCard
              title="Projections & Tax Planning"
              price="$250/hour"
              description="For non-clients or complex projection work in the off-season."
              features={[
                "Detailed tax scenario modeling",
                "Future tax liability projections",
                "Strategic tax planning recommendations",
                "Financial decision support",
              ]}
            />

            <div className="bg-primary/5 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Additional Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    <span className="font-medium">On-site Work:</span> Please note we charge for travel time if we must go to do work on site.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    <span className="font-medium">New Clients (2024):</span> Please bring a copy of your 2023 taxes, driver's license & Social Security numbers for ALL taxpayers and Date of Birth.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-sm">
                    <span className="font-medium">Bookkeeping Clients:</span> If you are interested in having us do your bookkeeping monthly, please let us know and we can add you to our schedule.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/contact-us" className="flex items-center gap-2">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
