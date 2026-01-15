import { MetadataRoute } from "next";
import { config } from "@/data/config";
import { getBlogPosts } from "../lib/mdx";

// Force static generation for the sitemap
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts();
  const currentDate = new Date();
  
  return [
    {
      url: config.site,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${config.site}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${config.site}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${config.site}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogs.map((blog) => ({
      url: `${config.site}/blogs/${blog.slug}`,
      lastModified: new Date(blog.metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${config.site}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
