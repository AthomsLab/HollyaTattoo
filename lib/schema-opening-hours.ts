import { siteConfig } from "@/content/site"

const FRENCH_DAY_TO_SCHEMA: Record<string, string> = {
  Lundi: "https://schema.org/Monday",
  Mardi: "https://schema.org/Tuesday",
  Mercredi: "https://schema.org/Wednesday",
  Jeudi: "https://schema.org/Thursday",
  Vendredi: "https://schema.org/Friday",
  Samedi: "https://schema.org/Saturday",
  Dimanche: "https://schema.org/Sunday",
}

export type OpeningHoursSpecificationJsonLd = {
  "@type": "OpeningHoursSpecification"
  dayOfWeek: string
  opens: string
  closes: string
}

export function buildOpeningHoursSpecificationJsonLd(): OpeningHoursSpecificationJsonLd[] {
  const out: OpeningHoursSpecificationJsonLd[] = []

  for (const row of siteConfig.openingHours) {
    if (row.hours === "Fermé" || row.hours === "Ferme") continue
    const dayOfWeek = FRENCH_DAY_TO_SCHEMA[row.day]
    if (!dayOfWeek) continue

    const segments = row.hours.split(" / ").map((s) => s.trim())
    for (const segment of segments) {
      const match = /^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/.exec(segment)
      if (match) {
        out.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek,
          opens: match[1],
          closes: match[2],
        })
      }
    }
  }

  return out
}
