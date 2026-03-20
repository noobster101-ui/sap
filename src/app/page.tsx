import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About/AboutSectionOne";
import SAPECCModules from "@/components/SAP/SAPECCModules";
import SAPS4HANAModules from "@/components/SAP/SAPS4HANAModules";
import VisionSection from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Murthy SAP Training | Best SAP Training Institute Bengaluru",
  description:
    "Expert SAP Training with 13+ years experience. S/4 HANA, MM, FICO, ABAP, UI5, FIORI courses. Job assistance. Bengaluru.",
});

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSection />
      <SAPECCModules />
      <SAPS4HANAModules />
      <VisionSection />
      <Testimonials />
    </>
  );
}
