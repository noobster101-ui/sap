"use client";

import Image from "next/image";
import Link from "next/link";
import { sapTechnicalCourses } from "@/data/courses";

const SAPTechnicalModules = () => {
  // Show only first 3 courses on home page
  const displayCourses = sapTechnicalCourses.slice(0, 3);

  return (
    <>
      <section
        id="sap-technical"
        className="dark:bg-gray-dark bg-grey py-16 lg:py-24"
      >
        <div className="container">
          <div className="mx-auto mb-16 max-w-[600px] text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px] md:leading-tight dark:text-white">
              SAP Technical Modules
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Learn technical skills to build and customize SAP applications
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {displayCourses.map((course) => (
              <div key={course.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="group border-stroke shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark relative flex h-full flex-col overflow-hidden rounded-sm border bg-white duration-300">
                  <Link
                    href={`/sap-technical/${course.id}`}
                    className="relative block aspect-[37/22] w-full flex-shrink-0"
                  >
                    <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
                      {course.tags[0]}
                    </span>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-grow p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                      <Link
                        href={`/sap-technical/${course.id}`}
                        className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-xl dark:text-white"
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
                      {course.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center">
                      <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
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
                          <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                            By {course.author.name}
                          </h4>
                          <p className="text-body-color dark:text-body-color-dark text-xs">
                            {course.author.designation}
                          </p>
                        </div>
                      </div>
                      <div className="inline-block">
                        <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                          Date
                        </h4>
                        <p className="text-body-color dark:text-body-color-dark text-xs">
                          {course.publishDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/sap-technical"
              className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-3 text-base font-semibold text-white duration-300"
            >
              View All Technical Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SAPTechnicalModules;
