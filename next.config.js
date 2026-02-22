/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output:"export" for Vercel - they handle Next.js natively
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
