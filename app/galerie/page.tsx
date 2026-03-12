import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { galleryImages } from "@/content/gallery"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Decouvrez les realisations et l'ambiance du studio Holly Tattoo a Saint-Reverend (Vendee). Fine line, blackwork, floral.",
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
                Realisations et ambiance du studio. Chaque projet est unique
                et prepare avec soin.
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
