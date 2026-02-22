"use client";

import React from "react";
import ScrollUp from "@/components/Common/ScrollUp";

export default function ContactPage() {
  return (
    <React.Fragment>
      <ScrollUp />
      {/* Hero Section with Art Style */}
      <section className="relative min-h-[250px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              Have questions? We'd love to hear from you. Get in touch with us
              today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="dark:bg-gray-dark bg-grey py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Map Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Get In Touch
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-8 text-base">
                  Feel free to contact us for any queries about our SAP training
                  courses. We're here to help you with your career goals.
                </p>

                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <svg
                        className="text-primary h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Phone
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        +91 9686762136
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <svg
                        className="text-primary h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Email
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        murthysaptraining@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <svg
                        className="text-primary h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Location
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        Pune, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="dark:bg-dark-2 mt-8 h-64 w-full rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-body-color dark:text-body-color-dark">
                      Map view - Pune, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark-2 rounded-sm border bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Send us a Message
                </h2>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark w-full rounded-sm border bg-gray-50 px-4 py-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark w-full rounded-sm border bg-gray-50 px-4 py-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark w-full rounded-sm border bg-gray-50 px-4 py-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Course Interested In
                        </label>
                        <select className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark w-full rounded-sm border bg-gray-50 px-4 py-3 outline-none">
                          <option value="">Select a course</option>
                          <option value="sap-s4-hana-sourcing">
                            SAP S/4 HANA Sourcing & Procurement
                          </option>
                          <option value="sap-mm">
                            SAP MM (Material Management)
                          </option>
                          <option value="sap-s4-hana-sales">
                            SAP S/4 HANA Sales
                          </option>
                          <option value="sap-fico">
                            SAP FICO (Finance & Controlling)
                          </option>
                          <option value="sap-abap">SAP ABAP</option>
                          <option value="sap-ui5-fiori">SAP UI5 & FIORI</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Message
                        </label>
                        <textarea
                          rows={6}
                          placeholder="Enter your message"
                          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark w-full rounded-sm border bg-gray-50 px-4 py-3 outline-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="bg-primary hover:bg-primary/80 w-full rounded-sm px-8 py-3 text-base font-semibold text-white duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
