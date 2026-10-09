export type HeroMosaicImage = {
  src: string
  alt: string
  width: number
  height: number
  priority: boolean
  zoomScale?: number
}

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
