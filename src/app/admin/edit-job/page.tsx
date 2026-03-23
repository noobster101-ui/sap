"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { JobOpening } from "@/types/job";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function EditJob() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const {
    data: job,
    mutate,
    error,
  } = useSWR(id ? `/api/admin/jobs?id=${id}` : null, fetcher);
  const [formData, setFormData] = useState<Partial<JobOpening>>({});

  useEffect(() => {
    if (job) {
      setFormData(job);
    }
  }, [job]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, id }),
    });

    if (res.ok) {
      router.back();
    } else {
      alert("Update failed");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (error) return <div className="text-red-500">Error loading job</div>;

  return (
    <div className="max-w-2xl p-6">
      <div className="mb-6 flex items-center">
        <button
          onClick={() => router.back()}
          className="mr-4 text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">Edit Job</h1>
      </div>

      {!job ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              name="id"
              value={formData.id || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              name="department"
              value={formData.department || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              name="type"
              value={formData.type || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              name="experience"
              value={formData.experience || ""}
              onChange={handleChange}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows={4}
              required
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={formData.active || false}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.target.checked })
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Active
              </span>
            </label>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary flex-1">
              Update Job
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 rounded-lg bg-gray-500 px-6 py-2 font-semibold text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
