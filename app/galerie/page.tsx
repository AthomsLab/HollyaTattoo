import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { galleryImages } from "@/content/gallery"
import { siteConfig } from "@/content/site"

const galleryDescription =
  "Réalisations et ambiance du studio Holly Tattoo à Saint-Gilles-Croix-de-Vie (Vendée). Tatouage fine line, blackwork, floral."

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
      <main className="pt-[72px]">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
                Portfolio
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Galerie
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Réalisations et ambiance du studio à Saint-Gilles-Croix-de-Vie. Chaque projet est unique
                et préparé avec soin.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-2 gap-4 md:columns-3">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
