import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Murthy SAP Training - Best SAP Institute Bangalore",
    short_name: "Murthy SAP",
    description:
      "Best SAP Training in Bangalore - S/4HANA, ECC, FICO, MM, SD, ABAP with 20+ years experts, live projects & placement support. Hegde Nagar.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4A6CF7",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/images/brands/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
