import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import {
  heroMosaicLeftColumn,
  heroMosaicRightColumn,
  heroExtendedImages,
} from "@/content/hero-mosaic"
import { Button } from "@/components/ui/button"
import { ZoomableImage } from "@/components/zoomable-image/zoomable-image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[auto] overflow-hidden bg-background pt-20 md:pt-24 lg:min-h-[85vh] lg:pt-[180px]">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-52 -right-32 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute -top-12 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-12 lg:px-8 lg:pb-0">
        {/* Desktop: text left with extra mosaic column, main mosaic right */}
        <div className="hidden lg:flex lg:gap-3">
          {/* Left side: text + stacked extended images flush-right */}
          <div className="flex flex-1 gap-3">
            {/* Text content */}
            <div className="flex flex-1 flex-col">
              {/* Logo */}
              <div className="mb-8 flex justify-start">
                <Image
                  src={siteConfig.logo}
                  alt="Holly Tattoo logo"
                  width={570}
                  height={295}
                  className="h-auto w-96"
                  sizes="384px"
                  priority
                />
              </div>
              <span className="mb-4 inline-block w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
                Studio &middot; {siteConfig.address.city}
              </span>
              <h1 className="max-w-xl font-serif text-[50px] leading-tight font-bold tracking-tight text-foreground text-balance">
                <span className="text-primary">Tatouage</span> {siteConfig.locationPhrase}.
                Cadre calme et soigné
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
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
            
            {/* Extended images column - flush right, same width as mosaic columns */}
            <div className="flex w-[180px] flex-shrink-0 flex-col gap-3 pt-16">
              {heroExtendedImages.map((image) => (
                <ZoomableImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="180px"
                  zoomScale={image.zoomScale}
                  className="rounded-2xl shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Right side: main mosaic (original images only) */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex w-[180px] flex-col gap-3">
                {heroMosaicLeftColumn.map((image) => (
                  <ZoomableImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="180px"
                    priority={image.priority}
                    zoomScale={image.zoomScale}
                    className="rounded-2xl shadow-lg"
                  />
                ))}
              </div>
              <div className="flex w-[180px] flex-col gap-3 pt-8">
                {heroMosaicRightColumn.map((image) => (
                  <ZoomableImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="180px"
                    priority={image.priority}
                    zoomScale={image.zoomScale}
                    className="rounded-2xl shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: original stacked layout */}
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:hidden">
          {/* Text content */}
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src={siteConfig.logo}
                alt="Holly Tattoo logo"
                width={570}
                height={295}
                className="h-auto w-64 translate-x-4 md:w-72 md:translate-x-6"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
            </div>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              Studio &middot; {siteConfig.address.city}
            </span>
            <h1 className="max-w-xl font-serif text-4xl leading-tight font-bold tracking-tight text-foreground text-balance md:text-5xl">
              <span className="text-primary">Tatouage</span> {siteConfig.locationPhrase}.
              Cadre calme et soigné
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Studio de tatouage {siteConfig.cityLocative} ({siteConfig.address.department}).
              Flashs sans rendez-vous, projets personnalisés sur rendez-vous. Dark-pop, fine line, floral &mdash;
              chaque projet est préparé avec soin.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
          <div className="relative w-full max-w-md">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                {heroMosaicLeftColumn.map((image) => (
                  <ZoomableImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 768px) 50vw, 200px"
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
                    sizes="(max-width: 768px) 50vw, 200px"
                    priority={image.priority}
                    zoomScale={image.zoomScale}
                    className="rounded-2xl shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gold decorative ring - desktop only */}
        <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full border-4 border-accent/30 lg:block" />
      </div>
    </section>
  )
}
