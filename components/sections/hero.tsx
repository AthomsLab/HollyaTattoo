import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import {
  heroMosaicLeftColumn,
  heroMosaicRightColumn,
} from "@/content/hero-mosaic"
import { Button } from "@/components/ui/button"
import { ZoomableImage } from "@/components/zoomable-image/zoomable-image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-52 -right-32 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute -top-12 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 pb-24 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <Image
              src={siteConfig.logo}
              alt="Holly Tattoo logo"
              width={570}
              height={295}
              className="h-auto w-64 translate-x-4 md:w-72 md:translate-x-6 lg:w-96 lg:translate-x-0"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
              priority
            />
          </div>
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Studio &middot; {siteConfig.address.city}
          </span>
          <h1 className="max-w-xl font-serif text-4xl leading-tight font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            <span className="text-primary">Tatouage</span> {siteConfig.locationPhrase}.
            Cadre calme et soigné
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Studio de tatouage {siteConfig.cityLocative} ({siteConfig.address.department}).
            Flashs sans rendez-vous, projets personnalisés sur rendez-vous. Dark-pop, fine line, floral &mdash;
            chaque projet est préparé avec soin.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <Link href="/galerie">Voir la galerie</Link>
            </Button>
          </div>
        </div>

        {/* Image mosaic */}
        <div className="relative flex-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              {heroMosaicLeftColumn.map((image) => (
                <ZoomableImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={image.priority}
                  zoomScale={image.zoomScale}
                  className="rounded-2xl shadow-lg"
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-8">
              {heroMosaicRightColumn.map((image) => (
                <ZoomableImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={image.priority}
                  zoomScale={image.zoomScale}
                  className="rounded-2xl shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Gold decorative ring */}
        <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-4 border-accent/30" />
      </div>
    </section>
  )
}
