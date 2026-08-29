/** SEO copy — requête cible : tatouage saint gilles croix de vie */
export const seoHome = {
  title: "Tatouage Saint-Gilles-Croix-de-Vie | Holly Tattoo – Tatoueuse Vendée",
  description:
    "Tatouage à Saint-Gilles-Croix-de-Vie : studio Holly Tattoo à Saint-Révérend, à 10 minutes (Vendée, 85). Tatoueuse fine line, dark-pop et floral. Flashs et projets sur rendez-vous — contactez-nous.",
} as const

export const seoContact = {
  title: "Contact – Tatouage Saint-Gilles-Croix-de-Vie",
  description:
    "Contactez Holly Tattoo pour votre tatouage à Saint-Gilles-Croix-de-Vie. Studio à Saint-Révérend, à 10 minutes (Vendée). Devis, disponibilités et prise de rendez-vous en ligne.",
} as const

export function googleMapsUrl(placeQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery)}`
}
