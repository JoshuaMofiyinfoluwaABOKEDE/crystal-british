import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/school";
import { newsStories } from "@/content/news";

const pages = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/our-school", priority: 0.8 },
  { path: "/our-school/nursery", priority: 0.7 },
  { path: "/our-school/primary", priority: 0.7 },
  { path: "/our-school/secondary", priority: 0.7 },
  { path: "/academics", priority: 0.8 },
  { path: "/facilities", priority: 0.7 },
  { path: "/student-life", priority: 0.7 },
  { path: "/gallery", priority: 0.5 },
  { path: "/admissions", priority: 0.9 },
  { path: "/news", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((page) => ({ url: `${siteUrl}${page.path}`, priority: page.priority })),
    ...newsStories.map((story) => ({
      url: `${siteUrl}/news/${story.slug}`,
      priority: 0.5,
      ...(story.date ? { lastModified: story.date } : {}),
    })),
  ];
}
