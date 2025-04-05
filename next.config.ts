import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  trailingSlash: true, // Helps with Firebase hosting
  images: {
    unoptimized: true, // Disable Next.js image optimization to support static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during production builds
  },
};

export default nextConfig;
