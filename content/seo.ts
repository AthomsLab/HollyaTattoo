/** SEO copy — requête cible : tatouage saint gilles croix de vie */
export const seoHome = {
  title: "Tatouage Saint-Gilles-Croix-de-Vie | Holly Tattoo – Tatoueuse Vendée",
  description:
    "Tatouage à Saint-Gilles-Croix-de-Vie (Vendée, 85) : studio Holly Tattoo, tatoueuse fine line, dark-pop et floral. Flashs et projets sur rendez-vous — contactez-nous.",
} as const

export const seoContact = {
  title: "Contact – Tatouage Saint-Gilles-Croix-de-Vie",
  description:
    "Contactez Holly Tattoo pour votre tatouage à Saint-Gilles-Croix-de-Vie (Vendée). Devis, disponibilités et prise de rendez-vous en ligne.",
} as const

export function googleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}
