import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      {/* Hero Section with Art Style - matching About page */}
      <section className="relative min-h-[200px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Art decorations */}
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
          <svg
            className="absolute top-10 right-0 h-64 w-64 text-white"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <svg
            className="absolute top-40 right-20 h-40 w-40 text-purple-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="60" fill="currentColor" />
          </svg>
          <svg
            className="absolute right-40 bottom-10 h-32 w-32 text-blue-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="40" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative container">
          <div className="mx-auto max-w-[800px] pt-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-md">
              {pageName}
            </h1>
            <p className="text-lg text-white/90">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
