import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "akm-img-a-in.tosshub.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
