import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ContactBand from "@/components/ContactBand";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { organizationJsonLd } from "@/lib/seo";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.murthysaptraining.com"),
  title: {
    default: "Murthy SAP Training | Best SAP Training Institute Bangalore",
    template: "%s | Murthy SAP Training",
  },
  description:
    "Best SAP Training in Bangalore with 20+ years expert mentors. SAP S/4HANA, ECC, FICO, MM, SD, ABAP, UI5 & FIORI. Hands-on projects, resume & interview prep. Hegde Nagar, Bengaluru.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.murthysaptraining.com",
    siteName: "Murthy SAP Training",
    title: "Murthy SAP Training | Best SAP Training Institute Bangalore",
    description:
      "Expert SAP Training with 20+ years experience. SAP S/4HANA, ECC, FICO, MM, SD, ABAP. Job assistance & real-time projects in Bengaluru.",
    images: [
      {
        url: "/images/brands/logo.png",
        width: 1200,
        height: 630,
        alt: "Murthy SAP Training - Best SAP Institute Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murthy SAP Training | Best SAP Training Institute Bangalore",
    description:
      "Expert SAP Training with 20+ years experience. S/4HANA, FICO, MM, SD, ABAP courses with job assistance in Bengaluru.",
    images: ["/images/brands/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Murthy SAP Training" }],
  category: "education",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const orgLd = organizationJsonLd();
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <ContactBand />
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
