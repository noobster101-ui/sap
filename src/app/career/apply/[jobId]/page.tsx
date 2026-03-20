"use client";

import { jobOpenings, JobOpening } from "../../../../data/careers";
import Link from "next/link";
import ScrollUp from "../../../../components/Common/ScrollUp";
import { notFound } from "next/navigation";
import { use } from "react";
import { useState } from "react";

interface PageProps {
  params: Promise<{ jobId: string }>;
}

const ApplyPage = ({ params }: PageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const resolvedParams = use(params);
  const job: JobOpening | undefined = jobOpenings.find(
    (j: JobOpening) => j.id === resolvedParams.jobId,
  );

  if (!job) notFound();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement);

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ScrollUp />
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
              Job Application
            </span>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Apply for {job.title}
            </h1>
            <p className="text-lg text-white/90">
              {job.department} - {job.location}
            </p>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/3">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark sticky top-24 rounded-sm border bg-white p-8">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  {job.title}
                </h2>
                <div className="mb-8 space-y-4">
                  <div>
                    <span className="font-semibold text-black dark:text-white">
                      Department:
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      {job.department}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-black dark:text-white">
                      Experience:
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      {job.experience}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-black dark:text-white">
                      Location:
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      {job.location}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-black dark:text-white">
                      Type:
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                    Required Skills:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-2/3 lg:pl-8">
              <div className="border-stroke shadow-two dark:border-dark-3 dark:bg-dark rounded-sm border bg-white p-8">
                <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                  Submit Your Application
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="-mx-4 flex flex-wrap"
                  encType="multipart/form-data"
                >
                  <div className="mb-4 w-full px-4 md:w-1/2">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full px-4 md:w-1/2">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full px-4 md:w-1/2">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full px-4 md:w-1/2">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Current Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                    />
                  </div>

                  <div className="w-full px-4">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Cover Letter
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="border-stroke focus:border-primary dark:border-dark-3 w-full resize-none rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      placeholder="Why are you interested in this position? Any relevant experience..."
                    />
                  </div>

                  <div className="my-4 w-full px-4">
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      Resume * (PDF, DOC, DOCX - Max 5MB)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="border-stroke focus:border-primary dark:border-dark-3 file:bg-primary/10 file:text-primary hover:file:bg-primary/20 w-full border bg-transparent px-6 py-3 text-base text-black outline-none file:mr-4 file:rounded-sm file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold focus:shadow-none dark:text-white"
                      required
                    />
                  </div>

                  <div className="my-3 w-full px-4 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/80 shadow-sign-up hover:shadow-submit w-1/2 rounded-sm px-8 py-3 text-base font-semibold text-white duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                  <input type="hidden" name="jobId" value={job.id} />
                  <input type="hidden" name="jobTitle" value={job.title} />
                </form>
                {submitStatus === "success" && (
                  <div className="mt-4 rounded-sm border border-green-400 bg-green-100 p-4 text-green-700">
                    Application submitted successfully! Check your email for
                    confirmation.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-4 rounded-sm border border-red-400 bg-red-100 p-4 text-red-700">
                    Failed to submit application. Please try again or contact HR
                    directly.
                  </div>
                )}
                <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                  Applications are sent to murthysaptraining@gmail.com and HR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
