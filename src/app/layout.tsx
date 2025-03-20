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
  openGraph: {
    type: "website",
    locale: "en_US",
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
  return (
    <html lang="en" suppressHydrationWarning>
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
