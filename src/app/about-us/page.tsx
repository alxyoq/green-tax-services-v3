import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

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
              that prioritize the financial well-being of our clients. Our team (family) of experienced professionals is dedicated
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
              src="/my-image.png"
              alt="Green Tax Logo"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-neutral-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-primary text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We adhere to the highest ethical standards in all our interactions and work.
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every service we provide to our clients.
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                Our clients' needs and financial goals are at the center of everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Why Choose Us?</h2>
          <p className="text-muted-foreground mb-8">
            At Green Tax Services, we combine expertise, personalized attention, and innovative solutions to help you
            achieve your financial goals. Whether you're an individual taxpayer, a small business owner, or a corporation,
            we have the knowledge and tools to optimize your tax situation.
          </p>
        </div>
      </div>
    </main>
  );
}
