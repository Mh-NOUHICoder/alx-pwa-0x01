// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    images: {
//     domains: ['image.tmdb.org'], // allow TMDB images
//   },
//   reactCompiler: true,
//   reactStrictMode: true,
// };

import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  webpack: (config: Configuration) => {
    // you can safely modify config here
    return config;
  },
};

export default withPWA(nextConfig);
