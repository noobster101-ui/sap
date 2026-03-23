"use client";

"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import useSWRMutation from "swr/mutation";


import { Testimonial } from "@/types/testimonial";

interface FormState {
  id?: number;
  name: string;
  designation: string;
  star: number;
  image: string;
  content: string;
  status: boolean;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminReviews() {
  const {
    data: reviews,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/admin/reviews", fetcher);
  const { trigger: deleteReview } = useSWRMutation(
    "/api/reviews",
    deleteFetcher,
  );

  const [editingReview, setEditingReview] = useState<Testimonial | null>(null);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    designation: "",
    star: 5,
    image: "",
    content: "",
    status: true,
  });

  async function deleteFetcher(url: string, { arg }: { arg: number }) {
    const res = await fetch(`${url}?id=${arg}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    return res.json();
  }

  const toggleStatus = async (review: Testimonial) => {
    const newStatus = !review.status;
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...review,
        status: newStatus,
      }),
    });
    mutate();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    setFormState({
      ...formState,
      [target.name]: value,
    });
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.url;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormState((prev) => ({ ...prev, image: "Uploading..." }));
      try {
        const url = await uploadFile(file);
        setFormState((prev) => ({ ...prev, image: url }));
      } catch (error) {
        alert("Upload failed");
        setFormState((prev) => ({ ...prev, image: "" }));
      }
    }
  };

  const deleteReviewHandler = async (id: number) => {
    if (confirm("Delete this review permanently?")) {
      await deleteReview(id);
      mutate();
    }
  };

  useEffect(() => {
    if (editingReview) {
      setFormState({
        name: editingReview.name,
        designation: editingReview.designation,
        star: editingReview.star,
        image: editingReview.image,
        content: editingReview.content,
        status: editingReview.status ?? true,
      });
    } else {
      setFormState({
        name: "",
        designation: "",
        star: 5,
        image: "",
        content: "",
        status: true,
      });
    }
  }, [editingReview]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = { ...formState };

    if (editingReview) {
      submitData.id = editingReview.id;
    }

    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });
    const form = e.target as HTMLFormElement;
    form.reset();
    setEditingReview(null);
    mutate();
  };

  if (error) return <div className="text-red-500">Error loading reviews</div>;
  if (isLoading) return <div className="py-8 text-center">Loading...</div>;

  return (
    <>
      <div className="mb-8">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
          Manage Reviews
        </h2>

        <div className="-mx-4 mb-8 flex flex-wrap rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-6 w-full text-xl font-semibold">Add New Review</h3>
          <form onSubmit={handleReviewSubmit} className="w-full">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Name *
                  </label>

                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    required
                    className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Designation *
                  </label>

                  <input
                    name="designation"
                    value={formState.designation}
                    onChange={handleInputChange}
                    placeholder="Enter designation"
                    required
                    className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Stars (1-5) *
                  </label>

                  <input
                    name="star"
                    type="number"
                    min="1"
                    max="5"
                    value={formState.star}
                    onChange={handleInputChange}
                    placeholder="Stars (1-5)"
                    required
                    className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Image URL *
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                  />
                  {formState.image && (
                    <p className="mt-1 text-sm text-green-600">
                      Current: {formState.image}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full px-4">
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Content *
                  </label>

                  <textarea
                    name="content"
                    rows={4}
                    value={formState.content}
                    onChange={handleInputChange}
                    placeholder="Review content"
                    required
                    className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full resize-none rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="flex w-full gap-3 px-4">
                <button
                  type="button"
                  onClick={() => {
                    (
                      document.querySelector("form") as HTMLFormElement
                    )?.reset();
                    setEditingReview(null);
                  }}
                  className="flex-1 cursor-pointer rounded-sm bg-gray-500 px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`flex-1 cursor-pointer rounded-sm px-8 py-3 text-base font-semibold text-white duration-300 ${
                    editingReview
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-primary hover:bg-primary/80"
                  }`}
                >
                  {editingReview ? "Update Review" : "Add Review"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
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
                    Name
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                    Designation
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                    Stars
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                    Image
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold text-slate-900 dark:text-slate-200">
                    Content (trunc)
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
                {reviews?.map((review: Testimonial, index: number) => (
                  <tr
                    key={review.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <td className="px-4 py-4 text-xs font-medium text-slate-900 dark:text-slate-200">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-200">
                      {review.id}
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-900 dark:text-slate-200">
                      {review.name}
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-900 dark:text-slate-300">
                      {review.designation}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < review.star
                                ? "text-yellow-400"
                                : "text-slate-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <img
                        src={review.image}
                        alt="Review"
                        className="h-12 w-12 rounded object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "/images/testimonials/auth-01.png";
                        }}
                      />
                    </td>
                    <td
                      className="max-w-xs truncate px-4 py-4 text-xs text-slate-900 dark:text-slate-300"
                      title={review.content}
                    >
                      {review.content?.slice(0, 50)}...
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleStatus(review)}
                        className={`cursor-pointer rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                          review.status
                            ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {review.status ? "Enabled" : "Disabled"}
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex space-x-1">
                        <button
                          onClick={() => setEditingReview(review)}
                          className="flex cursor-pointer items-center gap-1 rounded bg-blue-100 px-1 py-1 text-xs font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => deleteReviewHandler(review.id)}
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
      </div>
    </>
  );
}
