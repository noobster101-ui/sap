"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { sapFunctionalCourses, sapTechnicalCourses } from "@/data/courses";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.courseId as string;

  // Check both functional and technical courses
  const allCourses = [...sapFunctionalCourses, ...sapTechnicalCourses];
  const course = allCourses.find((c) => c.id === courseId);

  // Determine if course is functional or technical by checking the arrays directly
  const isFunctional = sapFunctionalCourses.some((c) => c.id === courseId);
  const courseCategory = isFunctional ? "Functional" : "Technical";
  const backLink = isFunctional ? "/sap-functional" : "/sap-technical";

  // Get related courses (same category)
  const relatedCourses = allCourses
    .filter(
      (c) =>
        c.id !== courseId &&
        (isFunctional
          ? sapFunctionalCourses.some((fc) => fc.id === c.id)
          : sapTechnicalCourses.some((tc) => tc.id === c.id)),
    )
    .slice(0, 3);

  if (!course) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Course not found
        </h1>
        <Link
          href="/"
          className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
        >
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      {/* Breadcrumb Section */}
      <Breadcrumb
        pageName={course.title}
        description={course.shortDescription}
      />

      {/* Course Details */}
      <section className="overflow-hidden py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Main Content */}
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {course.title}
                </h1>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={course.author.image}
                            alt={course.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color dark:text-body-color-dark mb-1 text-base font-medium">
                          By <span> {course.author.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color dark:text-body-color-dark mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697Z" />
                          </svg>
                        </span>
                        {course.publishDate}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    {course.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary mr-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Image Banner */}
                <div className="mb-10 w-full overflow-hidden rounded-sm">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Course Description */}
                <div className="mb-10">
                  <p className="text-body-color dark:text-body-color-dark mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {course.fullDescription}
                  </p>
                </div>

                {/* Course Levels/Curriculum */}
                <h3 className="font-xl mb-6 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                  Course Curriculum
                </h3>
                <ul className="text-body-color dark:text-body-color-dark mb-10 list-inside list-disc">
                  {course.levels.map((level, index) => (
                    <li
                      key={index}
                      className="text-body-color dark:text-body-color-dark mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg"
                    >
                      {level}
                    </li>
                  ))}
                </ul>

                {/* Course Features */}
                <h3 className="font-xl mb-6 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                  What You'll Learn
                </h3>
                <ul className="text-body-color dark:text-body-color-dark mb-10 list-inside list-disc">
                  {course.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-body-color dark:text-body-color-dark mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Download Brochure Button */}
                <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                  <div className="text-center">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Interested in this course?
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark mb-6">
                      Download the course brochure for detailed information
                    </p>
                    <button className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Brochure
                    </button>
                  </div>
                </div>

                {/* Back to Courses */}
                <div className="mt-8">
                  <Link
                    href={backLink}
                    className="text-primary inline-flex items-center hover:underline"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to {courseCategory} Courses
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full px-4 lg:w-4/12">
              {/* Popular Category */}
              <div className="border-stroke shadow-three dark:border-dark-3 dark:bg-dark mb-10 rounded-sm border bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Course Categories
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <Link
                      href="/sap-functional"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      SAP Functional ({sapFunctionalCourses.length})
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sap-technical"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      SAP Technical ({sapTechnicalCourses.length})
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="border-stroke shadow-three dark:border-dark-3 dark:bg-dark mb-10 rounded-sm border bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  {[
                    ...new Set([
                      ...sapFunctionalCourses.flatMap((c) => c.tags),
                      ...sapTechnicalCourses.flatMap((c) => c.tags),
                    ]),
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="text-body-color dark:text-body-color-dark mr-2 mb-2 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="border-stroke shadow-three dark:border-dark-3 dark:bg-dark rounded-sm border bg-white p-8 dark:shadow-none">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Have Questions?
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-4">
                  Contact us for more information about this course.
                </p>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 block w-full rounded-xs px-6 py-3 text-center text-base font-semibold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
