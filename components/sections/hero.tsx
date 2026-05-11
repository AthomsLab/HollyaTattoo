import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Logo */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <Image
              src={siteConfig.logo}
              alt="Holly Tattoo logo"
              width={380}
              height={190}
              className="h-auto w-64 md:w-72 lg:w-96"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
              priority
            />
          </div>
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Studio &middot; {siteConfig.address.city}
          </span>
          <h1 className="max-w-xl font-serif text-4xl leading-tight font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Votre tatouage, dans un cadre{" "}
            <span className="text-primary">calme et soigné</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Studio de tatouage à {siteConfig.address.city} ({siteConfig.address.department}).
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
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Holly-dvJwmXk5yN8bl9vKtETtBx71xaTz5r.jpg"
                  alt="Holly concentrée sur un tatouage avec headlamp"
                  width={480}
                  height={640}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/catzoom-kdtfGyncq2Bigxg75eIV1JzGV20IV9.jpg"
                  alt="Tatouage félin souriant - chat d'Alice in Wonderland"
                  width={480}
                  height={640}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-8">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleurs-BUsNUNbbX0PIyYAyLO6iDSVm7syX27.jpg"
                  alt="Tatouage floral avec motifs décoratifs et rubans"
                  width={480}
                  height={640}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14045-axrMWN1GV2IJOl517U6fpVF4lgjjuD.jpg"
                  alt="Studio Holly Tattoo - espace de travail avec plantes"
                  width={480}
                  height={640}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
