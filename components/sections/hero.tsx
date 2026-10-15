"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import { heroFloatingImages, type HeroFloatingImage } from "@/content/hero-mosaic"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FloatingFrameProps = {
  image: HeroFloatingImage
  index: number
  total: number
}

function FloatingFrame({ image, index, total }: FloatingFrameProps) {
  const animationDelay = `${(index / total) * -30}s`

  return (
    <div
      className={cn(
        "absolute rounded-2xl border-2 border-background/80 bg-card shadow-xl transition-shadow duration-500",
        "hover:shadow-2xl hover:z-30",
        "motion-safe:animate-float-cycle",
        image.positionClasses,
        image.sizeClasses
      )}
      style={{
        animationDelay,
        zIndex: image.zIndex,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes}
          priority={image.priority}
          className="object-cover transition-transform duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:scale-110"
        />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl" />
        <div className="absolute -top-32 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-accent/8 to-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-primary/6 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left lg:pt-8">
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src={siteConfig.logo}
                alt="Holly Tattoo logo"
                width={570}
                height={295}
                className="h-auto w-56 translate-x-3 md:w-64 md:translate-x-4 lg:w-80 lg:translate-x-0"
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                priority
              />
            </div>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              Studio &middot; {siteConfig.address.city}
            </span>
            <h1 className="max-w-xl font-serif text-3xl leading-tight font-bold tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
              <span className="text-primary">Tatouage</span> {siteConfig.locationPhrase}.
              <br className="hidden sm:block" />
              Cadre calme et soigné
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Studio de tatouage {siteConfig.cityLocative} ({siteConfig.address.department}).
              Flashs sans rendez-vous, projets personnalisés sur rendez-vous. Dark-pop, fine line, floral &mdash;
              chaque projet est préparé avec soin.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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

          {/* Floating images container */}
          <div className="relative h-[380px] w-full max-w-md flex-shrink-0 sm:h-[420px] md:h-[480px] lg:h-[520px] lg:w-[480px] lg:max-w-none xl:w-[540px]">
            {heroFloatingImages.map((image, index) => (
              <FloatingFrame
                key={image.src}
                image={image}
                index={index}
                total={heroFloatingImages.length}
              />
            ))}

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-4 border-accent/25 lg:h-24 lg:w-24" />
            <div className="pointer-events-none absolute -top-2 -right-2 h-12 w-12 rounded-full border-2 border-primary/20 lg:h-16 lg:w-16" />
          </div>
        </div>
      </div>
    </section>
  )
}
