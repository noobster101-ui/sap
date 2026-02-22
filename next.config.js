/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sapmurty",
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
