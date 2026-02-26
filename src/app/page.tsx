import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About/AboutSectionOne";
import SAPECCModules from "@/components/SAP/SAPECCModules";
import SAPS4HANAModules from "@/components/SAP/SAPS4HANAModules";
import VisionSection from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Murthy SAP Training | Best SAP Training Institute",
  description:
    "Expert SAP Training with 13+ years of experience. Get trained in SAP S/4 HANA, ECC, SD, MM, FICO, ABAP, UI5 & FIORI from industry professionals.",
};

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
