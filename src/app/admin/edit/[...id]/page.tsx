"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import useSWR from "swr";
import { JobOpening } from "@/types/job";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function EditJob() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: job, mutate } = useSWR(`/api/admin/jobs?id=${id}`, fetcher);
  const [formData, setFormData] = useState<Partial<JobOpening>>({});

  useEffect(() => {
    if (job) {
      setFormData(job);
    }
  }, [job]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    router.back();
  };

  const handleChange = (field: keyof JobOpening, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold">Edit Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={formData.id || ""}
          onChange={(e) => handleChange("id", e.target.value)}
          placeholder="ID"
          className="input-field"
        />
        <input
          value={formData.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Title"
          className="input-field"
        />
        <input
          value={formData.department || ""}
          onChange={(e) => handleChange("department", e.target.value)}
          placeholder="Department"
          className="input-field"
        />
        <input
          value={formData.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="Location"
          className="input-field"
        />
        <input
          value={formData.type || ""}
          onChange={(e) => handleChange("type", e.target.value)}
          placeholder="Type"
          className="input-field"
        />
        <input
          value={formData.experience || ""}
          onChange={(e) => handleChange("experience", e.target.value)}
          placeholder="Experience"
          className="input-field"
        />
        <textarea
          value={formData.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Description"
          rows={4}
          className="input-field"
        />
        <label>
          Active:
          <input
            type="checkbox"
            checked={formData.active || false}
            onChange={(e) => handleChange("active", e.target.checked)}
            className="ml-2 h-4 w-4"
          />
        </label>
        <div className="flex gap-2">
          <button type="submit" className="btn-primary flex-1">
            Save
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
    </div>
  );
}
