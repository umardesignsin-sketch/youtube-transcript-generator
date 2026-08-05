import { MetadataRoute } from "next";

import { useCases } from "@/lib/data/use-cases";
import { languages } from "@/lib/data/languages";
import { tools } from "@/lib/data/tools";
import { comparisons } from "@/lib/data/compare";
import { getPostSlugs } from "@/lib/blog";

const baseUrl = "https://www.savefromnet.fun";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${baseUrl}/youtube-to-transcript`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/youtube-transcript-generator`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/youtube-transcript-for`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/youtube-transcript-in`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/downloaders`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pinterest-video-downloader`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/instagram-reel-downloader`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/instagram-story-downloader`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((u) => ({
    url: `${baseUrl}/youtube-transcript-for/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const languageRoutes: MetadataRoute.Sitemap = languages.map((l) => ({
    url: `${baseUrl}/youtube-transcript-in/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const toolRoutes: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const compareRoutes: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...useCaseRoutes,
    ...languageRoutes,
    ...toolRoutes,
    ...compareRoutes,
    ...blogRoutes,
  ];
}
