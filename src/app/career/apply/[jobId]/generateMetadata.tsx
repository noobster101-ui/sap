import { Metadata, ResolvingMetadata } from "next";
import { jobOpenings } from "../../../../data/careers";

type Props = {
  params: Promise<{ jobId: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const jobId = await (await params).jobId;
  const job = jobOpenings.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: "Job Not Found | Murthy SAP Training",
    };
  }

  const title = `${job.title} - Apply Now | Murthy SAP Training Bengaluru`;
  const description = `Apply for ${job.title} position. ${job.department} | ${job.experience} | ${job.location}. Upload resume and cover letter.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/career/apply/${jobId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://murthysaptraining.com/career/apply/${jobId}`,
      type: "website",
      images: [
        {
          url: "https://murthysaptraining.com/images/sap/sap-s4-hana.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
