import { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.title,
    short_name: "Abdelkbir's Portfolio",
    description: config.description.short,
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
