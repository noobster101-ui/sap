import { Metadata } from "next";

export const SITE_URL = "https://www.murthysaptraining.com";
export const SITE_NAME = "Murthy SAP Training";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: SITE_NAME,
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
  path = "/",
  image,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const canonical = path.startsWith("http") ? path : path;
  const ogImage = image || "/images/brands/logo.png";
  return {
    ...baseMetadata,
    title: { absolute: title },
    description,
    keywords: keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url: path,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
  const pageDesc = `Apply for ${job.title} - ${job.department} | ${job.experience} | ${job.location}. SAP training institute in Bengaluru.`;

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

// JSON-LD helpers
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Murthy SAP Training",
    url: SITE_URL,
    logo: `${SITE_URL}/images/brands/logo.png`,
    description:
      "Best SAP Training Institute in Bangalore with 20+ years expert mentors. SAP S/4HANA, ECC, FICO, MM, SD, ABAP, UI5 & FIORI.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Cross, Winn Field Garden Dr. SRK Nagar, Hegde Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560077",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9686762136",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "kn", "hi"],
    },
    sameAs: [
      "https://www.facebook.com/murthy.kb.94",
      "https://www.instagram.com/murthysaptraining",
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function courseJsonLd(course: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    image: `${SITE_URL}${course.image}`,
    url: `${SITE_URL}${course.url}`,
    educationalCredentialAwarded: "Certificate",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      location: "Bengaluru, Karnataka",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
