import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  /**
   * The product hub moved from /catalogue to /products to match the client's
   * site architecture. The remaining entries cover URLs the architecture
   * diagram names that differ from ours — better to answer them than to let a
   * printed or shared link 404.
   */
  async redirects() {
    return [
      { source: "/catalogue", destination: "/products", permanent: true },
      {
        source: "/catalogue/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      // the old ASP.NET page this content came from
      {
        source: "/cleaning-videos.aspx",
        destination: "/cleaning-videos",
        permanent: true,
      },
      // knowledge-hub URLs from the diagram → our stronger top-level ones
      { source: "/resources/faq", destination: "/faq", permanent: true },
      { source: "/resources/blog", destination: "/blog", permanent: true },
      { source: "/resources/guides", destination: "/resources", permanent: true },
      // the diagram shortens our plant-facility sector to "facility"
      {
        source: "/industries/facility",
        destination: "/industries/plant-facility",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
