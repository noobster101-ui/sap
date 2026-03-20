import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://murthysaptraining.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Murthy SAP Training",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      images: [
        {
          url: "/images/sap/sap-s4-hana.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function createJobMetadata(
  job: {
    title: string;
    department: string;
    experience: string;
    location: string;
  },
  jobId: string,
): Metadata {
  const pageTitle = `${job.title} - Apply Now | Murthy SAP Training`;
  const pageDesc = `Apply for ${job.title} - ${job.department} | ${job.experience} | ${job.location}`;

  return {
    ...baseMetadata,
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `/career/apply/${jobId}`,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageTitle,
      description: pageDesc,
    },
  };
}
