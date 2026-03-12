import type { MetadataRoute } from "next"
import { siteConfig } from "@/content/site"
import { cityLandings } from "@/content/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  const cityPages: MetadataRoute.Sitemap = cityLandings.map((city) => {
    // Tier-based priority for better SEO ranking
    let priority = 0.6
    if (city.tier === "tier1") {
      priority = 0.85 // Very close cities - highest priority
    } else if (city.tier === "tier2") {
      priority = 0.7 // Medium distance - high priority
    } else {
      priority = 0.5 // Far cities - standard priority
    }

    return {
      url: `${baseUrl}/zones/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    }
  })

  return [...staticPages, ...cityPages]
}
