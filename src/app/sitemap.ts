import { MetadataRoute } from "next";
import { config } from "@/data/config";
import { getBlogPosts } from "../lib/mdx";

// Force static generation for the sitemap
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts();
  return [
    {
      url: config.site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${config.site}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${config.site}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogs.map((blog) => ({
      url: `${config.site}/blogs/${blog.slug}`,
      lastModified: new Date(blog.metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${config.site}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${config.site}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
