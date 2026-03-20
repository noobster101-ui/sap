"use client";

import React, { useState } from "react";
import { sapCourses } from "@/data/courses";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const courseOptions = sapCourses.map((course) => ({
    id: course.id,
    title: course.title,
  }));

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      if (formData.course)
        formDataToSend.append("courseInterested", formData.course);

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Course Interested In
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
              disabled={isSubmitting}
            >
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
              Message *
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark w-full resize-none rounded-sm border bg-gray-50 px-4 py-3 text-black transition-colors outline-none dark:text-white"
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/80 w-full cursor-pointer rounded-sm px-8 py-3 text-base font-semibold text-white duration-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {submitStatus === "success" && (
          <div className="mt-4 w-full px-4">
            <div className="rounded-lg border border-green-400 bg-green-100 p-4 text-green-700">
              <strong>✓ Message sent successfully!</strong> We'll get back to
              you within 24 hours.
            </div>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 w-full px-4">
            <div className="rounded-lg border border-red-400 bg-red-100 p-4 text-red-700">
              Failed to send message. Please try again or contact us directly.
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
