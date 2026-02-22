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
      <section className="dark:bg-gray-dark bg-white py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  About Murthy SAP Training
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed">
                  Ever since opening our doors, we've helped countless
                  individuals achieve their career and life dreams. We are
                  committed to providing excellent education, training and
                  resources so that our students will thrive in today's
                  competitive world. With flexible program options and great
                  instructors, we're sure you'll be satisfied with your
                  education at Murthy SAP Training.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                  Our mission is to help you reach greater heights in your SAP
                  career with high-quality training focused on real-time
                  business scenarios and the best examples.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center justify-center">
                <div className="from-primary/20 rounded-lg bg-gradient-to-br to-blue-600/20 p-12">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🎓</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      13+ Years
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark">
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
      <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 aspect-[4/3] max-w-[400px]">
                <div className="from-primary flex h-full items-center justify-center rounded-lg bg-gradient-to-br to-blue-600">
                  <span className="text-8xl">👨‍🏫</span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-700px]">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  About The Trainer
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed">
                  I am an SAP functional consultant with overall 13 years of
                  experience in SAP. Teaching has been my passion for a long
                  time, and I have been teaching SAP since 2014. I have worked
                  for major companies in India like CTS, Accenture, IBM &
                  Unilever, etc.
                </p>
                <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed">
                  I will help you to reach greater heights in your SAP carrier
                  with high-quality training. In this training, I will focus on
                  real-time business scenarios with the best examples.
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
                    <span className="text-body-color dark:text-body-color-dark">
                      A detailed explanation of business processes with
                      real-time examples
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
                    <span className="text-body-color dark:text-body-color-dark">
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
                    <span className="text-body-color dark:text-body-color-dark">
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
                    <span className="text-body-color dark:text-body-color-dark">
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
                    <span className="text-body-color dark:text-body-color-dark">
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
                    <span className="text-body-color dark:text-body-color-dark">
                      Mock interviews
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="dark:bg-gray-dark bg-white py-12">
        <div className="container">
          <div className="dark:bg-dark-2 mx-auto max-w-3xl rounded-lg bg-yellow-50 p-6">
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
