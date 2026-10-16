import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { galleryImages } from "@/content/gallery"
import { siteConfig } from "@/content/site"
import { ZoomableImage } from "@/components/zoomable-image/zoomable-image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

const galleryDescription = `Réalisations et ambiance du studio Holly Tattoo ${siteConfig.cityLocative} (Vendée). Tatouage fine line, blackwork, floral.`

export const metadata: Metadata = {
  title: "Galerie",
  description: galleryDescription,
  alternates: {
    canonical: `${siteConfig.url}/galerie`,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${siteConfig.url}/galerie`,
    siteName: siteConfig.name,
    title: `Galerie | ${siteConfig.name}`,
    description: galleryDescription,
    images: [{ url: siteConfig.logo, width: 1200, height: 630, alt: siteConfig.name }],
  },
}

export default function GaleriePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1} className="focus:outline-none pt-20">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            {/* Header - above fold, no animation */}
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
                Portfolio
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Galerie
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Réalisations et ambiance du studio {siteConfig.cityLocative}. Chaque projet est unique
                et préparé avec soin.
              </p>
            </div>

            {/* Masonry Grid - same reveal as homepage Aperçu du studio */}
            <div className="columns-2 gap-4 md:columns-3">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={img.src} delay={i * 75} className="mb-4 break-inside-avoid">
                  <ZoomableImage
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    zoomScale={img.zoomScale}
                    className="rounded-xl shadow-sm transition-all hover:shadow-md"
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={300} className="mt-16 text-center">
              <p className="mb-6 text-lg text-muted-foreground">
                Envie d{"'"}un tatouage personnalisé ?
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
