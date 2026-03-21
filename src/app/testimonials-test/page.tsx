"use client";

import React from "react";
import useSWR from "swr";
import { getFallbackReviews } from "@/data/googleReviews";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleTestimonial from "@/components/Testimonials/SingleTestimonial";
import ScrollUp from "@/components/Common/ScrollUp";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TestimonialsTestPage() {
  const { data: liveReviews, error } = useSWR("/api/reviews", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: true,
  });

  const reviews =
    liveReviews && !error && liveReviews.length > 0
      ? liveReviews
      : getFallbackReviews();

  const isLive = liveReviews && !error && liveReviews.length > 0;
  const status = error
    ? "Error loading live reviews"
    : isLive
      ? "Live Google Reviews"
      : "Fallback Reviews";

  return (
    <>
      <ScrollUp />
      {/* Hero - same */}
      <section className="relative min-h-[250px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-md sm:text-5xl md:text-[52px]">
              Test Google Reviews Integration
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-xl text-white/90 sm:text-2xl">
              {status}
            </p>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Testing live fetch with fallback
            </p>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <SectionTitle
            title="Test Reviews"
            paragraph="Live or fallback - same design as production."
            center
            mb="80px"
          />
          {error && (
            <div className="mb-8 rounded bg-red-100 p-4 text-red-700">
              API Error: {error.message}. Using fallback.
            </div>
          )}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
