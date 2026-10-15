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
    sizeClasses: "w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-50 lg:w-44 lg:h-56 xl:w-48 xl:h-60",
    sizes: "(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, (max-width: 1280px) 176px, 192px",
    orbitRadius: 220,
  },
  {
    src: "/images/gallery/tiger_arm.webp",
    alt: "Tatouage tigre blackwork sur l'avant-bras",
    priority: true,
    sizeClasses: "w-28 h-42 sm:w-32 sm:h-48 md:w-36 md:h-54 lg:w-40 lg:h-60 xl:w-44 xl:h-66",
    sizes: "(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px",
    orbitRadius: 230,
  },
  {
    src: "/images/gallery/papillons.webp",
    alt: "Tatouage deux papillons fine line sur le bras",
    priority: false,
    sizeClasses: "w-30 h-38 sm:w-34 sm:h-42 md:w-38 md:h-48 lg:w-42 lg:h-52 xl:w-46 xl:h-56",
    sizes: "(max-width: 640px) 120px, (max-width: 768px) 136px, (max-width: 1024px) 152px, (max-width: 1280px) 168px, 184px",
    orbitRadius: 215,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleurs-BUsNUNbbX0PIyYAyLO6iDSVm7syX27.jpg",
    alt: "Tatouage floral avec motifs décoratifs et rubans",
    priority: false,
    sizeClasses: "w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-50 lg:w-44 lg:h-56 xl:w-48 xl:h-60",
    sizes: "(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, (max-width: 1280px) 176px, 192px",
    orbitRadius: 225,
  },
  {
    src: "/images/gallery/dragon.webp",
    alt: "Tatouage dragon et soleil fine line sur l'avant-bras",
    priority: false,
    sizeClasses: "w-30 h-40 sm:w-34 sm:h-44 md:w-38 md:h-50 lg:w-42 lg:h-56 xl:w-46 xl:h-60",
    sizes: "(max-width: 640px) 120px, (max-width: 768px) 136px, (max-width: 1024px) 152px, (max-width: 1280px) 168px, 184px",
    orbitRadius: 218,
  },
  {
    src: "/images/back_flower.webp",
    alt: "Tatouage floral fine line dans le dos",
    priority: false,
    sizeClasses: "w-30 h-38 sm:w-34 sm:h-42 md:w-38 md:h-48 lg:w-42 lg:h-52 xl:w-46 xl:h-56",
    sizes: "(max-width: 640px) 120px, (max-width: 768px) 136px, (max-width: 1024px) 152px, (max-width: 1280px) 168px, 184px",
    orbitRadius: 222,
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
