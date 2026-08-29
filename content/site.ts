export type SiteAddress = {
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

export type RelocationNotice = {
  label: string
  currentPeriod: string
  currentPlace: string
  nextPeriod: string
  nextPlace: string
}

export type SiteConfig = {
  name: string
  url: string
  description: string
  businessName: string
  artistName: string
  address: SiteAddress
  nearbySeoCity: string
  locationPhrase: string
  tattooLocationHeading: string
  relocationNotice: RelocationNotice
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
    "Tatouage à Saint-Gilles-Croix-de-Vie (Vendée, 85) : studio Holly Tattoo à Saint-Révérend, à 10 minutes. Tatoueuse fine line, dark-pop et floral. Flashs et projets sur rendez-vous.",
  businessName: "Holly Tattoo",
  artistName: "Holly",
  address: {
    city: "Saint-Révérend",
    postalCode: "85220",
    department: "Vendée",
    region: "Pays de la Loire",
    country: "France",
  },
  nearbySeoCity: "Saint-Gilles-Croix-de-Vie",
  locationPhrase: "Saint-Révérend, à 10 minutes de Saint-Gilles-Croix-de-Vie",
  tattooLocationHeading:
    "Tatouage à Saint-Révérend, à 10 minutes de Saint-Gilles-Croix-de-Vie",
  relocationNotice: {
    label: "Changement d'adresse",
    currentPeriod: "Je vous accueille pendant le mois de Septembre à",
    currentPlace: "Saint-Révérend",
    nextPeriod:
      "Avant de vous accueillir à partir du 1er octobre sur",
    nextPlace: "Le Fenouiller",
  },
  mapsQuery: "Saint-Révérend, Vendée",
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
    lat: 46.7058,
    lng: -1.8315,
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
