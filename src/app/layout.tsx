import type { Metadata } from "next";
import { Inter, Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Define the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Green Tax Services, Inc - Professional Tax Services",
  description:
    "Affordable, experienced, and friendly tax services for business owners, executives, and independent professionals.",
  keywords: ["tax services", "accounting", "tax return", "business tax", "enrolled agent", "Lady Lake", "Florida"],
  icons: {
    icon: "/logo.png",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Green Tax Services, Inc - Professional Tax Services",
    description: "Fighting To Reduce Your Tax. We are a full-service Accounting firm licensed in VT.",
    images: ["/kat.png"],
    siteName: "Green Tax Services, Inc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Tax Services, Inc - Professional Tax Services",
    description: "Fighting To Reduce Your Tax. We are a full-service Accounting firm licensed in VT.",
    images: ["/kat.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Green Tax Services, Inc",
    "description": "Professional tax services for business owners, executives, and independent professionals. Fighting to reduce your tax.",
    "url": "https://greentaxinc.com",
    "logo": "https://greentaxinc.com/logo.png",
    "image": "https://greentaxinc.com/kat.png",
    "telephone": "+13526332042",
    "email": "EM@greentaxinc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Box 519",
      "addressLocality": "Lady Lake",
      "addressRegion": "FL",
      "postalCode": "32158",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.9294",
      "longitude": "-81.9229"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "serviceType": [
      "Tax Preparation",
      "Tax Planning",
      "Bookkeeping",
      "Audit Representation",
      "Business Tax Returns",
      "Individual Tax Returns"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "IRS Enrolled Agent"
    },
    "openingHours": [
      "Mo-Sa 09:00-17:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00",
        "validFrom": "2024-02-01",
        "validThrough": "2024-04-15"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/people/Green-Tax-Services-Inc/100063495913443/",
      "https://twitter.com/emgreentaxinc"
    ],
    "foundingDate": "1999",
    "founder": {
      "@type": "Person",
      "name": "Elizabeth Green"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${openSans.variable} font-sans`}>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
