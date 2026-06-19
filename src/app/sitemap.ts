import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://hypergalaxy.cloud",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://hypergalaxy.cloud/privacidade",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://hypergalaxy.cloud/termos",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
