import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Temporary stock hero images (see lib/site-config.ts) — replace with real photography.
    remotePatterns: [new URL("https://loremflickr.com/**")],
    maximumRedirects: 5,
  },
};

export default nextConfig;
