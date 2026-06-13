import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      "@firebase/app",
      "@firebase/auth",
      "@firebase/firestore",
    ],
  },
};

export default nextConfig;
