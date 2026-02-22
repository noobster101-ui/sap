"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Murthy SAP Training | Best SAP Training Institute</title>
        <meta
          name="description"
          content="Expert SAP Training with 13+ years of experience. Get trained in SAP S/4 HANA, MM, FICO, ABAP, UI5 & FIORI from industry professionals."
        />
        <meta
          name="keywords"
          content="SAP Training, SAP S/4 HANA, SAP MM, SAP FICO, SAP ABAP, SAP UI5, SAP FIORI, SAP Training Institute"
        />
        <meta name="author" content="Murthy SAP Training" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

import { Providers } from "./providers";
import ContactBand from "@/components/ContactBand";
