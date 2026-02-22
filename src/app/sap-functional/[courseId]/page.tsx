import { Metadata } from "next";
import CourseDetail from "@/components/Course/CourseDetail";
import { sapFunctionalCourses, sapTechnicalCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Course Details | Murthy SAP Training",
  description: "Learn more about our SAP training courses",
};

// Generate static params for all courses (required for static export)
export function generateStaticParams() {
  const allCourses = [...sapFunctionalCourses, ...sapTechnicalCourses];
  return allCourses.map((course) => ({
    courseId: course.id,
  }));
}

export default function SAPFunctionalCoursePage() {
  return <CourseDetail />;
}
