import type { MetadataRoute } from "next";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Power Clean — Industrial Cleaning Chemicals",
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#292F6E",
    lang: "en-IN",
    categories: ["business", "industrial", "manufacturing"],
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
