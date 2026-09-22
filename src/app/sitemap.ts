import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://samaro-dev.vercel.app",
      lastModified: new Date(),
      priority:1
    },
  ];
}