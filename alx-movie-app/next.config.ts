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

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  // ✅ force Webpack instead of Turbopack
  
};

export default withPWA(nextConfig);
