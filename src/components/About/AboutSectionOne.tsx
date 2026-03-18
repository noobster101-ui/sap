"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="dark:bg-gray-dark bg-white py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0">
                <Image
                  src="/images/about/ab2.jpg"
                  alt="about image"
                  fill
                  className="rounded border-3"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">
                <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                  Why Choose Murthy SAP Training
                </h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
                  <div className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="bg-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white">
                      &#10003;
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        Industry Experienced Trainers
                      </h4>
                      <p className="text-base leading-relaxed text-black dark:text-white">
                        Learn from experienced SAP consultants who have worked
                        on real implementation and support projects.
                      </p>
                    </div>
                  </div>
                  <div className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="bg-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white">
                      &#10003;
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        Real-Time Project Exposure
                      </h4>
                      <p className="text-base leading-relaxed text-black dark:text-white">
                        Training includes practical scenarios and real business
                        cases to help you understand how SAP works in real
                        organizations.
                      </p>
                    </div>
                  </div>
                  <div className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="bg-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white">
                      &#10003;
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        Hands-on Practical Learning
                      </h4>
                      <p className="text-base leading-relaxed text-black dark:text-white">
                        Our sessions focus on system practice and exercises
                        rather than only theoretical explanations.
                      </p>
                    </div>
                  </div>
                  <div className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="bg-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white">
                      &#10003;
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        Flexible Learning Options
                      </h4>
                      <p className="text-base leading-relaxed text-black dark:text-white">
                        We offer flexible schedules suitable for both working
                        professionals and full-time learners.
                      </p>
                    </div>
                  </div>
                  <div className="dark:border-dark-3 flex items-start rounded-sm border border-gray-200 bg-gray-50 p-4 dark:bg-gray-800">
                    <span className="bg-primary mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white">
                      &#10003;
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                        Career Guidance
                      </h4>
                      <p className="text-base leading-relaxed text-black dark:text-white">
                        We guide students in understanding SAP project
                        environments, interview preparation, and career growth.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/career"
                  className="bg-primary hover:bg-primary/80 mt-8 inline-block rounded-xs px-8 py-3 text-base font-semibold text-white duration-300"
                >
                  View Career Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
