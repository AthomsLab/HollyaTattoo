import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { galleryImages } from "@/content/gallery"
import { Button } from "@/components/ui/button"

export function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6)

  return (
    <section id="galerie" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Apercu du studio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Decouvrez l{"'"}ambiance du studio et quelques realisations.
            Retrouvez toutes les photos dans la galerie complete.
          </p>
        </div>

        <div className="columns-2 gap-4 md:columns-3">
          {previewImages.map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md">
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

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
            <Link href="/galerie">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
