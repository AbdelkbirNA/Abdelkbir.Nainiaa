import { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.title,
    short_name: "Abdelkbir Portfolio",
    description: config.description.short,
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
  };
}
