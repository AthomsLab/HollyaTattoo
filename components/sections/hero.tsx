"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import { orbitImages } from "@/content/hero-mosaic"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ORBIT_DURATION = 45000
const TOTAL_IMAGES = orbitImages.length

type OrbitFrameProps = {
  image: (typeof orbitImages)[number]
  index: number
  progress: number
  reducedMotion: boolean
}

function OrbitFrame({ image, index, progress, reducedMotion }: OrbitFrameProps) {
  const baseAngle = (index / TOTAL_IMAGES) * 360
  const currentAngle = reducedMotion ? baseAngle : baseAngle + progress * 360

  const angleRad = (currentAngle * Math.PI) / 180
  
  const xRadius = image.orbitRadius * 0.7
  const yRadius = image.orbitRadius * 0.95
  
  const x = Math.sin(angleRad) * xRadius
  const y = -Math.cos(angleRad) * yRadius

  const depthFactor = (1 + Math.sin(angleRad)) / 2
  const zIndex = Math.round(10 + depthFactor * 10)
  const scale = 0.82 + depthFactor * 0.18

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 rounded-2xl border-2 border-background/80 bg-card shadow-xl",
        "transition-shadow duration-300 hover:shadow-2xl",
        image.sizeClasses
      )}
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
        zIndex,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes}
          priority={image.priority}
          className="object-cover"
        />
      </div>
    </div>
  )
}

function useOrbitProgress(duration: number): [number, boolean] {
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const startTime = useRef<number | null>(null)
  const rafId = useRef<number>(0)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)

    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setProgress(0)
      return
    }

    const animate = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp
      const elapsed = timestamp - startTime.current
      setProgress((elapsed % duration) / duration)
      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId.current)
  }, [duration, reducedMotion])

  return [progress, reducedMotion]
}

export function HeroSection() {
  const [progress, reducedMotion] = useOrbitProgress(ORBIT_DURATION)

  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-background">
      {/* Decorative background rings with subtle motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl",
            !reducedMotion && "animate-drift-slow"
          )}
        />
        <div
          className={cn(
            "absolute -top-32 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-accent/8 to-primary/5 blur-3xl",
            !reducedMotion && "animate-drift-reverse"
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 -left-32 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-primary/6 to-transparent blur-2xl",
            !reducedMotion && "animate-drift-slow"
          )}
        />
        {/* Decorative rings */}
        <div
          className={cn(
            "absolute right-[15%] top-[20%] h-32 w-32 rounded-full border-4 border-accent/20 lg:h-40 lg:w-40",
            !reducedMotion && "animate-ring-rotate"
          )}
        />
        <div
          className={cn(
            "absolute bottom-[25%] right-[8%] h-20 w-20 rounded-full border-2 border-primary/15 lg:h-24 lg:w-24",
            !reducedMotion && "animate-ring-rotate-reverse"
          )}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-6 xl:gap-12">
          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
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

          {/* Orbiting images container - taller for clock-like layout */}
          <div className="relative h-[400px] w-[300px] flex-shrink-0 sm:h-[460px] sm:w-[340px] md:h-[520px] md:w-[380px] lg:h-[580px] lg:w-[420px] xl:h-[620px] xl:w-[460px]">
            {orbitImages.map((image, index) => (
              <OrbitFrame
                key={image.src}
                image={image}
                index={index}
                progress={progress}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
