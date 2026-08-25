import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-[530px] text-center">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">404 - Page Not Found</h1>
          <p className="mb-8 text-base text-black dark:text-white">The page you were looking for does not exist or has been moved.</p>
          <Link href="/" className="bg-primary inline-block rounded-sm px-8 py-3 text-white">Back to Homepage</Link>
        </div>
      </div>
    </section>
  );
}
