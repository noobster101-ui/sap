"use client";

import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { SAPCourse } from "@/types/course";
import useSWR from "swr";

interface FormState {
  id: string;
  title: string;
  shortDescription: string;
  division: string;
  image: string;
  fullDescription: string;
  brochure: string;
  active: boolean;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminCourses() {
  const {
    data: courses,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/admin/courses", fetcher);

  const { trigger: deleteCourse } = useSWRMutation(
    "/api/courses",
    deleteCourseFetcher,
  );

  const [editingCourse, setEditingCourse] = useState<SAPCourse | null>(null);
  const [formState, setFormState] = useState<FormState>({
    id: "",
    title: "",
    shortDescription: "",
    division: "",
    image: "",
    fullDescription: "",
    brochure: "",
    active: true,
  });

  async function deleteCourseFetcher(url: string, { arg }: { arg: string }) {
    const res = await fetch(`${url}?id=${arg}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    return res.json();
  }

  const toggleStatus = async (course: SAPCourse) => {
    const newActive = !(course.active ?? true);
    await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: course.id, active: newActive }),
    });
    mutate();
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

  const handleBrochureUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormState((prev) => ({ ...prev, brochure: "Uploading..." }));
      try {
        const url = await uploadFile(file);
        setFormState((prev) => ({ ...prev, brochure: url }));
      } catch (error) {
        alert("Upload failed");
        setFormState((prev) => ({ ...prev, brochure: "" }));
      }
    }
  };

  useEffect(() => {
    if (editingCourse) {
      setFormState({
        id: editingCourse.id,
        title: editingCourse.title,
        shortDescription: editingCourse.shortDescription,
        division: editingCourse.division,
        image: editingCourse.image,
        fullDescription: editingCourse.fullDescription,
        brochure: editingCourse.brochure || "",
        active: editingCourse.active ?? true,
      });
    } else {
      setFormState({
        id: "",
        title: "",
        shortDescription: "",
        division: "",
        image: "",
        fullDescription: "",
        brochure: "",
        active: true,
      });
    }
  }, [editingCourse]);

  const deleteCourseHandler = async (id: string) => {
    if (confirm("Delete this course permanently?")) {
      await deleteCourse(id);
      mutate();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let submitData: any = { ...formState };

    if (editingCourse) {
      submitData.id = editingCourse.id;
    }

    await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });
    const form = e.target as HTMLFormElement;
    form.reset();
    setEditingCourse(null);
    setFormState({
      id: "",
      title: "",
      shortDescription: "",
      division: "",
      image: "",
      fullDescription: "",
      brochure: "",
      active: true,
    });
    mutate();
  };

  if (error) return <div className="text-red-500">Error loading courses</div>;
  if (isLoading) return <div className="py-8 text-center">Loading...</div>;

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        Manage Courses
      </h2>

      <div className="-mx-4 mb-8 flex flex-wrap rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-6 w-full text-xl font-semibold">Add New Course</h3>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Unique ID *
                </label>
                <input
                  name="id"
                  value={formState.id}
                  onChange={handleInputChange}
                  placeholder="Enter unique ID"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Course Title *
                </label>
                <input
                  name="title"
                  value={formState.title}
                  onChange={handleInputChange}
                  placeholder="Enter course title"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Short Description *
                </label>
                <input
                  name="shortDescription"
                  value={formState.shortDescription}
                  onChange={handleInputChange}
                  placeholder="Enter short description"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Division *
                </label>
                <select
                  name="division"
                  value={formState.division}
                  onChange={handleInputChange}
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                >
                  <option value="">Select Division</option>
                  <option value="ECC">ECC</option>
                  <option value="S/4HANA">S/4HANA</option>
                </select>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Course Image *
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />

                <p className="mt-1 text-sm text-green-600">
                  Current: {formState.image}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Course Brochure (optional)
                </label>
                <input
                  type="file"
                  id="brochure"
                  accept=".pdf"
                  onChange={handleBrochureUpload}
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
                {formState.brochure && (
                  <p className="mt-1 text-sm text-green-600">
                    Current: {formState.brochure}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Full Description *
                </label>
                <textarea
                  name="fullDescription"
                  value={formState.fullDescription}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter full description"
                  required
                  className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full resize-none rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
                />
              </div>
            </div>

            <div className="flex w-full gap-3 px-4">
              <button
                type="button"
                onClick={() => {
                  (document.querySelector("form") as HTMLFormElement)?.reset();
                  setEditingCourse(null);
                }}
                className="flex-1 cursor-pointer rounded-sm bg-gray-500 px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 cursor-pointer rounded-sm px-8 py-3 text-base font-semibold text-white duration-300 ${
                  editingCourse
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-primary hover:bg-primary/80"
                }`}
              >
                {editingCourse ? "Update Course" : "Add Course"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="sticky top-0 z-10 bg-slate-50 text-left dark:bg-slate-700">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Sr.No
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                ID
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Title
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Division
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Image
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Short Description
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Full Description
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Brochure
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {courses?.map((course: SAPCourse, index: number) => (
              <tr
                key={course.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-200">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-200">
                  {course.id}
                </td>
                <td className="max-w-xs truncate px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                  {course.title}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-300">
                  {course.division}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-12 w-12 rounded object-cover transition-transform hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/sap/sap-s4-hana.jpg";
                    }}
                  />
                </td>
                <td
                  className="max-w-xs truncate px-6 py-4 text-sm text-slate-900 dark:text-slate-300"
                  title={course.shortDescription}
                >
                  {course.shortDescription?.slice(0, 50)}...
                </td>
                <td
                  className="max-w-md truncate px-6 py-4 text-sm text-slate-900 dark:text-slate-300"
                  title={course.fullDescription}
                >
                  {course.fullDescription?.slice(0, 100)}...
                </td>
                <td className="px-6 py-4 text-sm">
                  {course.brochure ? (
                    <a
                      href={course.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      📄 View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(course)}
                    className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      course.active
                        ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {course.active ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setEditingCourse(course)}
                      className="flex cursor-pointer items-center gap-1 rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteCourseHandler(course.id)}
                      className="flex cursor-pointer items-center gap-1 rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
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
    </>
  );
}
