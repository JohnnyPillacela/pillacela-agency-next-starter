import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      // Picsum redirects here — needed for next/image optimization.
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
