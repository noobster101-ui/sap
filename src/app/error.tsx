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
    console.error("App Error:", error.message, error.stack);
  }, [error]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Something went wrong</h2>
          <p className="mb-2 text-base text-black dark:text-white">An unexpected error occurred while loading this page. Please try again.</p>
          <details className="mb-8 rounded bg-red-50 p-4 text-left text-xs text-red-700 dark:bg-red-900/20 dark:text-red-300">
            <summary className="cursor-pointer font-semibold">Error details (copy for debug)</summary>
            <p className="mt-2 break-words font-mono">{error.message || String(error)}</p>
            {error.digest && <p className="mt-1">Digest: {error.digest}</p>}
            <p className="mt-2 whitespace-pre-wrap break-words">{error.stack?.slice(0, 2000)}</p>
          </details>
          <div className="flex justify-center gap-4">
            <button onClick={() => reset()} className="bg-primary rounded-sm px-8 py-3 text-white">Try again</button>
            <Link href="/" className="border-primary text-primary rounded-sm border px-8 py-3">Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
