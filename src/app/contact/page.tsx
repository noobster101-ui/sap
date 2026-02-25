"use client";

import React from "react";
import ScrollUp from "@/components/Common/ScrollUp";
import { sapCourses } from "@/data/courses";

export default function ContactPage() {
  // Get all course titles for the dropdown
  const courseOptions = sapCourses.map((course) => ({
    id: course.id,
    title: course.title,
  }));

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
            {/* Left Column - Contact Info & Map */}
            <div className="mb-6 w-full px-4 lg:w-1/2">
              {/* Contact Info Card */}
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark mb-8 w-full rounded-sm border bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Get In Touch
                </h2>
                <p className="dark:text-black-dark mb-8 text-base text-black">
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
                      <p className="dark:text-black-dark text-black">
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
                      <p className="dark:text-black-dark text-black">
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
                      <p className="dark:text-black-dark text-black">
                        Opp. Smart Point, Phase-1, MCECHS Layout,
                        <br /> Dr.Shivaram Karanth Nagar, RK Hegde Nagar,
                        <br />
                        Bengaluru, Karnataka 560077
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                {/* Social Media Icons */}

                <h3 className="my-5 text-lg font-semibold text-black dark:text-white">
                  Follow Us
                </h3>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/p/SAP-Murthy-Training-100065375263630/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 text-primary hover:bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full duration-300 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919686762136"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 text-primary hover:bg-primary mr-4 flex h-12 w-12 items-center justify-center rounded-full duration-300 hover:text-white"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column - Contact Form */}
            <div className="mb-6 w-full px-4 lg:w-1/2">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark rounded-sm border bg-white p-8">
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
                          className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black outline-none"
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
                          className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black outline-none"
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
                          className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Course Interested In
                        </label>
                        <select className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black outline-none">
                          <option value="">Select a course</option>
                          {courseOptions.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.title}
                            </option>
                          ))}
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
                          rows={3}
                          placeholder="Enter your message"
                          className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-black-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black outline-none"
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
            <div className="w-full px-4">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-white p-6">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Our Location
                </h2>
                <div className="h-80 w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4703181055834!2d77.62198687575659!3d13.069352012726222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a608b9797b%3A0xa6067838c5a4df64!2sMurthy%20Training!5e0!3m2!1sen!2sin!4v1771821558408!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Murthy Training Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
