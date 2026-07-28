import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Temporary stock hero images (see lib/site-config.ts) — replace with real photography.
    remotePatterns: [
      { protocol: "https", hostname: "loremflickr.com", pathname: "/**" },
      { protocol: "https", hostname: "*.loremflickr.com", pathname: "/**" },
    ],
    maximumRedirects: 5,
  },
};

export default nextConfig;
