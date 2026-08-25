import type { MetadataRoute } from "next";
import { sapCourses } from "@/data/courses";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.murthysaptraining.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, images: [`${baseUrl}/images/brands/logo.png`] },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/sap-ecc`, lastModified: now },
    { url: `${baseUrl}/sap-s4hana`, lastModified: now },
    { url: `${baseUrl}/career`, lastModified: now },
    { url: `${baseUrl}/testimonials`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
  ];

  const courseRoutes: MetadataRoute.Sitemap = sapCourses.map((course) => ({
    url: `${baseUrl}/${course.division === "ECC" ? "sap-ecc" : "sap-s4hana"}/${course.id}`,
    lastModified: now,
    images: [`${baseUrl}${course.image}`],
  }));

  return [...staticRoutes, ...courseRoutes];
}
