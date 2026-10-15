export type HeroMosaicImage = {
  src: string
  alt: string
  width: number
  height: number
  priority: boolean
  zoomScale?: number
}

export type OrbitImage = {
  src: string
  alt: string
  priority: boolean
  sizeClasses: string
  sizes: string
  orbitRadius: number
}

export const orbitImages: OrbitImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holly-dvJwmXk5yN8bl9vKtETtBx71xaTz5r.jpg",
    alt: "Holly concentrée sur un tatouage avec headlamp",
    priority: true,
    sizeClasses: "w-24 h-30 sm:w-26 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 xl:w-36 xl:h-44",
    sizes: "(max-width: 640px) 96px, (max-width: 768px) 104px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px",
    orbitRadius: 240,
  },
  {
    src: "/images/gallery/tiger_arm.webp",
    alt: "Tatouage tigre blackwork sur l'avant-bras",
    priority: true,
    sizeClasses: "w-22 h-32 sm:w-24 sm:h-34 md:w-26 md:h-38 lg:w-30 lg:h-44 xl:w-34 xl:h-48",
    sizes: "(max-width: 640px) 88px, (max-width: 768px) 96px, (max-width: 1024px) 104px, (max-width: 1280px) 120px, 136px",
    orbitRadius: 250,
  },
  {
    src: "/images/gallery/papillons.webp",
    alt: "Tatouage deux papillons fine line sur le bras",
    priority: false,
    sizeClasses: "w-22 h-28 sm:w-24 sm:h-30 md:w-26 md:h-34 lg:w-30 lg:h-38 xl:w-34 xl:h-42",
    sizes: "(max-width: 640px) 88px, (max-width: 768px) 96px, (max-width: 1024px) 104px, (max-width: 1280px) 120px, 136px",
    orbitRadius: 235,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleurs-BUsNUNbbX0PIyYAyLO6iDSVm7syX27.jpg",
    alt: "Tatouage floral avec motifs décoratifs et rubans",
    priority: false,
    sizeClasses: "w-24 h-30 sm:w-26 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 xl:w-36 xl:h-44",
    sizes: "(max-width: 640px) 96px, (max-width: 768px) 104px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px",
    orbitRadius: 245,
  },
  {
    src: "/images/gallery/dragon.webp",
    alt: "Tatouage dragon et soleil fine line sur l'avant-bras",
    priority: false,
    sizeClasses: "w-22 h-30 sm:w-24 sm:h-32 md:w-26 md:h-36 lg:w-30 lg:h-40 xl:w-34 xl:h-44",
    sizes: "(max-width: 640px) 88px, (max-width: 768px) 96px, (max-width: 1024px) 104px, (max-width: 1280px) 120px, 136px",
    orbitRadius: 238,
  },
  {
    src: "/images/back_flower.webp",
    alt: "Tatouage floral fine line dans le dos",
    priority: false,
    sizeClasses: "w-22 h-28 sm:w-24 sm:h-30 md:w-26 md:h-34 lg:w-30 lg:h-38 xl:w-34 xl:h-42",
    sizes: "(max-width: 640px) 88px, (max-width: 768px) 96px, (max-width: 1024px) 104px, (max-width: 1280px) 120px, 136px",
    orbitRadius: 242,
  },
]

export const heroMosaicLeftColumn: HeroMosaicImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holly-dvJwmXk5yN8bl9vKtETtBx71xaTz5r.jpg",
    alt: "Holly concentrée sur un tatouage avec headlamp",
    width: 480,
    height: 640,
    priority: true,
  },
  {
    src: "/images/gallery/witcher_epee.webp",
    alt: "Tatouage épée blackwork sur la jambe",
    width: 731,
    height: 1024,
    priority: false,
  },
  {
    src: "/images/gallery/dragon.webp",
    alt: "Tatouage dragon et soleil fine line sur l'avant-bras",
    width: 768,
    height: 1024,
    priority: false,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleurs-BUsNUNbbX0PIyYAyLO6iDSVm7syX27.jpg",
    alt: "Tatouage floral avec motifs décoratifs et rubans",
    width: 480,
    height: 640,
    priority: false,
    zoomScale: 1.35,
  },
]

export const heroMosaicRightColumn: HeroMosaicImage[] = [
  {
    src: "/images/gallery/tiger_arm.webp",
    alt: "Tatouage tigre blackwork sur l'avant-bras",
    width: 576,
    height: 1024,
    priority: false,
  },
  {
    src: "/images/gallery/papillons.webp",
    alt: "Tatouage deux papillons fine line sur le bras",
    width: 768,
    height: 1024,
    priority: false,
  },
  {
    src: "/images/back_flower.webp",
    alt: "Tatouage floral fine line dans le dos - fleur en traits délicats",
    width: 480,
    height: 640,
    priority: false,
  },
]
