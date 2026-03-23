"use client";

import useSWR from "swr";
import { JobOpening } from "@/types/job";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

import Link from "next/link";

interface JobTableProps {}

const JobTable = (): React.ReactElement => {
  const { data: jobsData } = useSWR("/api/jobs", fetcher);
  const jobs: JobOpening[] = jobsData || [];

  return (
    <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px] md:leading-tight dark:text-white">
            Current Job Openings
          </h2>
          <p className="text-base text-black dark:text-white">
            Explore exciting career opportunities at Murthy SAP Training. Apply
            for positions that match your SAP skills.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="shadow-two min-w-full border-collapse rounded-sm border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800">
            <thead>
              <tr className="bg-gray-50 text-left text-sm font-bold tracking-wider text-gray-900 uppercase dark:bg-gray-700 dark:text-white">
                <th className="border-b border-gray-200 px-6 py-4 dark:border-gray-600">
                  Position
                </th>
                <th className="border-b border-gray-200 px-6 py-4 dark:border-gray-600">
                  Department
                </th>
                <th className="border-b border-gray-200 px-6 py-4 dark:border-gray-600">
                  Experience
                </th>
                <th className="border-b border-gray-200 px-6 py-4 dark:border-gray-600">
                  Location
                </th>

                <th className="border-b border-gray-200 px-6 py-4 dark:border-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {jobs.map((job: JobOpening) => (
                <tr
                  key={job.id}
                  className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-6 font-semibold whitespace-nowrap text-black dark:text-white">
                    {job.title}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 dark:text-gray-300">
                    {job.department}
                  </td>
                  <td className="px-6 py-6 text-sm whitespace-nowrap text-gray-900 dark:text-gray-300">
                    {job.experience}
                  </td>
                  <td className="px-6 py-6 text-sm whitespace-nowrap text-gray-900 dark:text-gray-300">
                    {job.location}
                  </td>

                  <td className="px-6 py-6 whitespace-nowrap">
                    <Link
                      href={`/career/apply/${job.id}`}
                      className="bg-primary hover:bg-primary/80 shadow-sign-up hover:shadow-submit inline-block transform cursor-pointer rounded-sm px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Apply Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default JobTable;
