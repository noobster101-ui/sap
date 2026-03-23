"use client";

import useSWR from "swr";
import { useState } from "react";

import useSWRMutation from "swr/mutation";
import { JobOpening } from "@/types/job";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminCareers() {
  const {
    data: jobs,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/admin/jobs", fetcher);
  const { trigger: deleteJob } = useSWRMutation("/api/jobs", deleteJobFetcher);

  async function deleteJobFetcher(url: string, { arg }: { arg: string }) {
    const res = await fetch(`${url}?id=${arg}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    return res.json();
  }

  const toggleStatus = async (job: JobOpening) => {
    const newActive = !(job.active ?? true);
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...job, active: newActive }),
    });
    mutate();
  };

  const deleteJobHandler = async (id: string) => {
    if (confirm("Delete this job permanently?")) {
      await deleteJob(id);
      mutate();
    }
  };

  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);

  const addJob = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());

    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });
    form.reset();
    mutate();
  };

  if (error) return <div className="text-red-500">Error loading jobs</div>;
  if (isLoading) return <div className="py-8 text-center">Loading...</div>;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        Manage Careers
      </h2>

      {/* Add New Job Form */}
      <div className="-mx-4 mb-8 flex flex-wrap rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-6 w-full text-xl font-semibold">Add New Job</h3>
        <form onSubmit={addJob} className="w-full">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Unique ID *
                </label>
                <input
                  name="id"
                  value={editingJob?.id || ""}
                  onChange={(e) => {}}
                  placeholder="Enter unique ID"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Job Title *
                </label>

                <input
                  name="title"
                  value={editingJob?.title || ""}
                  onChange={(e) => {}}
                  placeholder="Enter job title"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Department *
                </label>
                <input
                  name="department"
                  placeholder="Enter department"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Location *
                </label>
                <input
                  name="location"
                  placeholder="Enter location"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Type (Full-time/Contract) *
                </label>
                <input
                  name="type"
                  placeholder="Full-time/Contract"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Experience *
                </label>
                <input
                  name="experience"
                  placeholder="Enter experience"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description *
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Enter description"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full resize-none rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/80 w-full cursor-pointer rounded-sm px-8 py-3 text-base font-semibold text-white duration-300"
              >
                Add Job
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Jobs Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <table className="w-full">
          <thead>
            <tr className="sticky top-0 z-10 bg-slate-50 text-left dark:bg-slate-700">
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Sr.No
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                ID
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Title
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Department
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Location
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Type
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Experience
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Description
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Status
              </th>
              <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {jobs?.map((job, index) => (
              <tr
                key={job.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <td className="px-4 py-4 text-xs font-medium text-slate-900 dark:text-slate-200">
                  {index + 1}
                </td>
                <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-200">
                  {job.id}
                </td>
                <td
                  className="max-w-xs truncate px-4 py-4 font-semibold text-slate-900 dark:text-slate-200"
                  title={job.title}
                >
                  {job.title}
                </td>
                <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-300">
                  {job.department}
                </td>
                <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-300">
                  {job.location}
                </td>
                <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-300">
                  {job.type}
                </td>
                <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-300">
                  {job.experience}
                </td>
                <td
                  className="max-w-xs truncate px-4 py-4 text-xs text-slate-900 dark:text-slate-300"
                  title={job.description}
                >
                  {job.description?.slice(0, 50)}...
                </td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => toggleStatus(job)}
                    className={`cursor-pointer rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                      job.active
                        ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {job.active ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-4 py-4">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setEditingJob(job)}
                      className="flex cursor-pointer items-center gap-1 rounded bg-blue-100 px-1 py-1 text-xs font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteJobHandler(job.id)}
                      className="flex cursor-pointer items-center gap-1 rounded bg-red-100 px-1 py-1 text-xs font-medium text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
