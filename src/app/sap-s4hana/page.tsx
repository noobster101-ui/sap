"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getS4HANACourses } from "@/data/courses";
import ScrollUp from "@/components/Common/ScrollUp";

export default function SAPS4HANAPage() {
  const courses = getS4HANACourses();

  return (
    <React.Fragment>
      <ScrollUp />
      {/* Hero Section with Art Style */}
      <section className="relative min-h-[200px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Art decorations */}
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
          <svg
            className="absolute top-10 right-0 h-64 w-64 text-white"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="80" />
          </svg>
          <svg
            className="absolute top-40 right-20 h-40 w-40 text-purple-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="60" />
          </svg>
          <svg
            className="absolute right-40 bottom-10 h-32 w-32 text-blue-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="40" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative container">
          <div className="mx-auto max-w-[800px] pt-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-md">
              SAP S/4 HANA Courses
            </h1>
            <p className="text-lg text-white/90">
              Learn the next-generation S/4 HANA modules with our comprehensive
              training programs
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {courses.map((course) => (
              <div
                key={course.id}
                className="mb-6 w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div className="group border-stroke shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark relative flex h-full flex-col overflow-hidden rounded-sm border bg-white duration-300">
                  <Link
                    href={`/sap-s4hana/${course.id}`}
                    className="relative block aspect-[37/22] w-full"
                  >
                    <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
                      {course.tags[0]}
                    </span>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      style={{ borderBottom: "1px solid #ddd" }}
                    />
                  </Link>
                  <div className="flex-grow p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                      <Link
                        href={`/sap-s4hana/${course.id}`}
                        className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-xl dark:text-white"
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="border-body-color/10 mb-6 border-b pb-6 text-base font-medium text-black dark:border-white/10">
                      {course.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center">
                      <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
                        {/* <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={course.author.image}
                              alt={course.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div> */}
                        <div className="w-full">
                          <h4 className="mb-1 text-sm font-medium text-black dark:text-white">
                            By {course.author.name}
                          </h4>
                          <p className="text-xs text-black dark:text-white">
                            {course.author.designation}
                          </p>
                        </div>
                      </div>
                      <div className="inline-block">
                        <h4 className="mb-1 text-sm font-medium text-black dark:text-white">
                          Date
                        </h4>
                        <p className="text-xs text-black dark:text-white">
                          {course.publishDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
