import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About/AboutSectionOne";
import SAPECCModules from "@/components/SAP/SAPECCModules";
import SAPS4HANAModules from "@/components/SAP/SAPS4HANAModules";
import VisionSection from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Best SAP Training in Bangalore | S/4HANA | FICO MM SD ABAP | Murthy SAP",
  description:
    "Best SAP Training Institute in Bangalore - Hegde Nagar. SAP S/4HANA, ECC, FICO, MM, SD, ABAP on HANA, UI5 & FIORI. 20+ years expert trainers, live projects, 100% placement support & interview prep. Call 9686762136.",
  path: "/",
  image: "/images/sap/sap-s4-hana.jpg",
});

export default function Home() {
  const orgLd = organizationJsonLd();
  const breadcrumbLd = breadcrumbJsonLd([{ name: "Home", url: "/" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
