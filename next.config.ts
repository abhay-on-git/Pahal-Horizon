import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com", // Add this for premium Unsplash images
      "youtube.com",
      "pahalhorizon.com",
      "unsplash.com"
    ],
  },
};

export default nextConfig;
  