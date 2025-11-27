// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    images: {
//     domains: ['image.tmdb.org'], // allow TMDB images
//   },
//   reactCompiler: true,
//   reactStrictMode: true,
// };

// export default nextConfig;
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['m.media-amazon.com'],
    domains: ['image.tmdb.org'], // allow TMDB images
  },
};

export default withPWA({
  ...nextConfig
})

