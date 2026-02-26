"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getS4HANACourses } from "@/data/courses";
import ScrollUp from "@/components/Common/ScrollUp";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default function SAPS4HANACourseDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const courses = getS4HANACourses();
  const course = courses.find((c) => c.id === resolvedParams.courseId);

  if (!course) {
    notFound();
  }

  return (
    <>
      <ScrollUp />
      {/* Hero Section */}
      <section className="relative min-h-[300px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
          <svg
            className="absolute top-10 right-0 h-64 w-64 text-white"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="80" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative container">
          <div className="mx-auto max-w-[800px] pt-8 text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
              SAP S/4 HANA
            </span>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {course.title}
            </h1>
            <p className="text-lg text-white/90">{course.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Main Content */}
            <div className="w-full px-4 lg:w-2/3">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark rounded-sm border bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Course Overview
                </h2>
                <div className="mb-8 whitespace-pre-line text-black dark:text-white">
                  {course.fullDescription}
                </div>

                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Course Levels
                </h2>
                <div className="mb-8 space-y-4">
                  {course.levels.map((level, index) => (
                    <div
                      key={index}
                      className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800"
                    >
                      <span className="bg-primary mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-black dark:text-white">{level}</p>
                    </div>
                  ))}
                </div>

                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Key Features
                </h2>
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {course.features.map((feature, index) => (
                    <div
                      key={index}
                      className="dark:border-dark-3 flex items-center rounded-sm border border-gray-200 p-4"
                    >
                      <svg
                        className="text-primary mr-3 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-black dark:text-white">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Brochure Download - Only if exists */}
                {course.brochure && (
                  <div className="border-primary bg-primary/5 mt-8 rounded-sm border p-6">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      Download Course Brochure
                    </h3>
                    <p className="mb-4 text-black dark:text-white">
                      Get detailed information about this course by downloading
                      our brochure.
                    </p>
                    <a
                      href={course.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/80 inline-flex items-center rounded-sm px-6 py-3 text-base font-semibold text-white"
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="mt-8 w-full px-4 lg:mt-0 lg:w-1/3">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark sticky top-24 rounded-sm border bg-white p-8">
                <div className="mb-6">
                  <div className="relative aspect-[37/22] w-full overflow-hidden rounded-sm">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      style={{ border: "1px solid #ddd" }}
                    />
                  </div>
                </div>

                <div className="dark:border-dark-3 mb-6 border-b border-gray-200 pb-6">
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Instructor
                  </h3>
                  <div className="flex items-center">
                    {/* <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={course.author.image}
                        alt={course.author.name}
                        fill
                        className="object-cover"
                      />
                    </div> */}
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        {course.author.name}
                      </h4>
                      <p className="text-sm text-black dark:text-white">
                        {course.author.designation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="dark:border-dark-3 mb-6 border-b border-gray-200 pb-6">
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Course Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    Published Date
                  </h3>
                  <p className="text-black dark:text-white">
                    {course.publishDate}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/80 block w-full rounded-sm py-3 text-center text-base font-semibold text-white"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
