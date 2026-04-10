"use client";

import React from "react";
import ScrollUp from "@/components/Common/ScrollUp";

export default function AboutPage() {
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
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <svg
            className="absolute top-40 right-20 h-40 w-40 text-purple-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="60" fill="currentColor" />
          </svg>
          <svg
            className="absolute right-40 bottom-10 h-32 w-32 text-blue-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="40" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative container">
          <div className="mx-auto max-w-[800px] pt-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-md">
              About Us
            </h1>
            <p className="text-lg text-white/90">
              Empowering professionals to achieve their career goals through
              quality SAP education
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="dark:bg-gray-dark bg-white py-16 lg:pt-24 lg:pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-2/3">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                About Murthy SAP Training
              </h2>
              <p className="mb-6 text-base leading-relaxed text-black dark:text-white">
                Murthy SAP Training Institute is dedicated to empowering
                professionals with practical, industry-focused SAP skills. Led
                by an experienced SAP Solution Architect with over 20+ years of
                hands-on expertise, the institute has been actively training and
                mentoring SAP professionals since 2011.
                <br />
                <br />
                We specialize in delivering high-quality training programs
                designed around real-time business scenarios, ensuring learners
                gain both conceptual clarity and practical exposure. Our
                approach bridges the gap between theoretical knowledge and
                real-world application, helping students confidently handle
                project environments.
                <br />
                <br />
                At Murthy SAP Training Institute, our mission is to enable
                individuals to build successful SAP careers through expert
                guidance, personalized mentoring, and job-oriented training. We
                are committed to helping learners stay competitive and achieve
                their professional goals in the evolving SAP landscape
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <div className="my-auto flex h-100 items-center justify-center">
                <div className="from-primary/20 m-auto rounded-lg bg-gradient-to-br to-blue-600/20 p-10">
                  <div className="text-center">
                    <div className="mb-4 text-8xl">🎓</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      20+ Years
                    </h3>
                    <p className="text-black dark:text-white">
                      Industry Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="dark:bg-gray-dark bg-gray-50 pb-16 lg:pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* <div className="px-4 lg:w-1/3">
              <div className="my-auto flex h-100 items-center justify-center">
                <div className="from-primary/20 m-auto rounded-lg bg-gradient-to-br to-blue-600/20 p-14">
                  <span className="text-8xl">👨‍🏫</span>
                </div>
              </div>
            </div> */}
            <div className="w-full px-4">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                About The Trainer
              </h2>
              <p className="mb-4 text-base leading-relaxed text-black dark:text-white">
                Murthy is a results-driven professional trainer with strong
                expertise in delivering practical, real-time business solutions.
                With a focus on simplifying complex concepts, he enables
                learners to quickly understand and apply knowledge in their
                day-to-day work environments.
                <br />
                <br />
                He specializes in conducting interactive training sessions that
                combine theoretical knowledge with real-world scenarios. His
                approach ensures participants not only learn concepts but also
                gain confidence in implementing them effectively.
                <br />
                <br />
                Murthy has experience in:
                <br />
                Delivering end-to-end training programs Designing structured
                learning materials Providing hands-on examples and case studies
                Supporting teams in process improvement and system understanding
                Known for his clear communication and engaging training style,
                Murthy creates a positive learning environment that encourages
                participation and continuous improvement. His goal is to empower
                individuals and teams with the right skills and knowledge to
                achieve business excellence.
              </p>

              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                This training will include:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    A detailed explanation of business processes with real-time
                    examples
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    Detailed Study Material
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    Project hands-on
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    Resume preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    Interview preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-primary mt-1 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-black dark:text-white">
                    Mock interviews
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="dark:bg-gray-dark bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg bg-yellow-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-yellow-800">
              Disclaimer
            </h3>
            <p className="text-base text-yellow-800">
              My trainings are not affiliated, associated, authorized, endorsed
              by, or in any way officially connected with SAP organization. SAP
              is a registered trademark of SAP AG in Germany and many other
              countries. I am NOT associated with SAP. I do not conduct any SAP
              Certification training programs.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
