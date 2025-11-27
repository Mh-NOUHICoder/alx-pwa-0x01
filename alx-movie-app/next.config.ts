import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ['image.tmdb.org'], // allow TMDB images
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
