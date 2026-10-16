import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  getGalleryImagesBySrc,
  homeGalleryPreviewSrcs,
} from "@/content/gallery"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { ZoomableImage } from "@/components/zoomable-image/zoomable-image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function GalleryPreview() {
  const previewImages = getGalleryImagesBySrc(homeGalleryPreviewSrcs)

  return (
    <section id="galerie" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <ScrollReveal className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Aperçu du studio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Découvrez l{"'"}ambiance du studio {siteConfig.cityLocative} et quelques réalisations.
            Retrouvez toutes les photos dans la galerie complète.
          </p>
        </ScrollReveal>

        <div className="columns-2 gap-4 md:columns-3">
          {previewImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 75} className="mb-4 break-inside-avoid">
              <ZoomableImage
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 768px) 50vw, 33vw"
                zoomScale={img.zoomScale}
                className="rounded-xl shadow-sm transition-shadow hover:shadow-md"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
            <Link href="/galerie">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
