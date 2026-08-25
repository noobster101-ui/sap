"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[530px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Something went wrong</h2>
          <p className="mb-8 text-base text-black dark:text-white">An unexpected error occurred while loading this page. Please try again.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => reset()} className="bg-primary rounded-sm px-8 py-3 text-white">Try again</button>
            <Link href="/" className="border-primary text-primary rounded-sm border px-8 py-3">Back to Home</Link>
          </div>
          {error.digest && <p className="mt-6 text-xs text-gray-500">Error ID: {error.digest}</p>}
        </div>
      </div>
    </section>
  );
}
