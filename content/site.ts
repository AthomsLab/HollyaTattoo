export type SiteAddress = {
  street: string
  city: string
  postalCode: string
  department: string
  region: string
  country: string
}

export type SiteGeo = {
  lat: number
  lng: number
}

export type SiteStyle = {
  name: string
  description: string
}

export type SiteOpeningHours = {
  day: string
  hours: string
}

export type SiteSocials = {
  instagram: string
  tiktok: string
  facebook: string
}

export type SiteConfig = {
  name: string
  url: string
  description: string
  businessName: string
  artistName: string
  address: SiteAddress
  nearbySeoCity: string
  cityLocative: string
  locationPhrase: string
  tattooLocationHeading: string
  mapsQuery: string
  phone: string
  email: string
  socials: SiteSocials
  openingHours: SiteOpeningHours[]
  geo: SiteGeo
  styles: SiteStyle[]
  logo: string
}

export const siteConfig: SiteConfig = {
  name: "Holly Tattoo",
  url: "https://www.hollyatattoo.fr",
  description:
    "Tatouage à Saint-Gilles-Croix-de-Vie (Vendée, 85) : studio Holly Tattoo au Fenouiller, à 10 minutes. Tatoueuse fine line, dark-pop et floral. Flashs et projets sur rendez-vous.",
  businessName: "Holly Tattoo",
  artistName: "Holly",
  address: {
    street: "15 Rue des Carrières",
    city: "Le Fenouiller",
    postalCode: "85800",
    department: "Vendée",
    region: "Pays de la Loire",
    country: "France",
  },
  nearbySeoCity: "Saint-Gilles-Croix-de-Vie",
  cityLocative: "au Fenouiller",
  locationPhrase: "au Fenouiller, à 10 minutes de Saint-Gilles-Croix-de-Vie",
  tattooLocationHeading:
    "Tatouage au Fenouiller, à 10 minutes de Saint-Gilles-Croix-de-Vie",
  mapsQuery: "15 Rue des Carrières, 85800 Le Fenouiller",
  phone: "+33675747902",
  email: "hollyatatoo@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/hollya_tattoo/",
    tiktok: "",
    facebook: "",
  },
  openingHours: [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "10:00-12:30 / 14:30-18:00" },
    { day: "Mercredi", hours: "10:00-12:30 / 14:30-18:00" },
    { day: "Jeudi", hours: "10:00-12:30 / 14:30-18:00" },
    { day: "Vendredi", hours: "10:00-12:30 / 14:30-18:00" },
    { day: "Samedi", hours: "10:00-12:30 / 14:30-18:00" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  geo: {
    lat: 46.7189505,
    lng: -1.8959396,
  },
  styles: [
    {
      name: "Dark-Pop",
      description:
        "Un univers graphique sombre et pop, entre références culturelles et esthétique décalée.",
    },
    {
      name: "Fine Line",
      description:
        "Des lignes fines et précises pour des tatouages délicats et élégants.",
    },
    {
      name: "Floral",
      description:
        "Motifs floraux et botaniques, du réaliste au stylisé, toujours en finesse.",
    },
  ],
  logo: "/images/holly.png",
}
