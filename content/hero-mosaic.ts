export type HeroMosaicImage = {
  src: string
  alt: string
  width: number
  height: number
  priority: boolean
  zoomScale?: number
}

export type HeroFloatingImage = {
  src: string
  alt: string
  priority: boolean
  positionClasses: string
  sizeClasses: string
  zIndex: number
  sizes: string
}

export const heroFloatingImages: HeroFloatingImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holly-dvJwmXk5yN8bl9vKtETtBx71xaTz5r.jpg",
    alt: "Holly concentrée sur un tatouage avec headlamp",
    priority: true,
    positionClasses: "top-[5%] left-[8%] rotate-[-4deg]",
    sizeClasses: "w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 lg:w-44 lg:h-56",
    zIndex: 15,
    sizes: "(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px",
  },
  {
    src: "/images/gallery/tiger_arm.webp",
    alt: "Tatouage tigre blackwork sur l'avant-bras",
    priority: true,
    positionClasses: "top-[2%] right-[12%] rotate-[6deg]",
    sizeClasses: "w-28 h-44 sm:w-32 sm:h-48 md:w-36 md:h-56 lg:w-40 lg:h-64",
    zIndex: 20,
    sizes: "(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px",
  },
  {
    src: "/images/gallery/papillons.webp",
    alt: "Tatouage deux papillons fine line sur le bras",
    priority: false,
    positionClasses: "top-[38%] left-[2%] rotate-[-2deg]",
    sizeClasses: "w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-48 lg:w-40 lg:h-52",
    zIndex: 10,
    sizes: "(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleurs-BUsNUNbbX0PIyYAyLO6iDSVm7syX27.jpg",
    alt: "Tatouage floral avec motifs décoratifs et rubans",
    priority: false,
    positionClasses: "top-[32%] right-[5%] rotate-[3deg]",
    sizeClasses: "w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-52 lg:w-44 lg:h-56",
    zIndex: 18,
    sizes: "(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px",
  },
  {
    src: "/images/gallery/dragon.webp",
    alt: "Tatouage dragon et soleil fine line sur l'avant-bras",
    priority: false,
    positionClasses: "bottom-[8%] left-[18%] rotate-[5deg]",
    sizeClasses: "w-30 h-38 sm:w-34 sm:h-44 md:w-38 md:h-52 lg:w-42 lg:h-56",
    zIndex: 12,
    sizes: "(max-width: 640px) 120px, (max-width: 768px) 136px, (max-width: 1024px) 152px, 168px",
  },
  {
    src: "/images/back_flower.webp",
    alt: "Tatouage floral fine line dans le dos",
    priority: false,
    positionClasses: "bottom-[12%] right-[15%] rotate-[-3deg]",
    sizeClasses: "w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-48 lg:w-40 lg:h-52",
    zIndex: 14,
    sizes: "(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px",
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
