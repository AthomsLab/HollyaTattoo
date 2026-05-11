import Image from "next/image"
import { siteConfig } from "@/content/site"

export function AboutSection() {
  return (
    <section id="a-propos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14030-uPiKPYXmXwtqCZ3wfJG30ygQfeaLUG.jpg"
                alt="Vue d'ensemble du studio Holly Tattoo"
                width={480}
                height={600}
                className="h-auto max-h-[500px] w-full max-w-md object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border-2 border-accent/20" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col">
            <span className="mb-3 text-sm font-medium tracking-wider text-primary uppercase">
              A propos
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Un studio, un accueil sur mesure
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Je vous accueille dans mon studio à{" "}
                {siteConfig.address.city} ({siteConfig.address.department}), un espace calme
                et soigné, pensé pour que chaque séance se déroule dans les meilleures conditions.
              </p>
              <p>
                Passionnée par le tatouage fin et délicat, je travaille principalement en
                dark-pop, fine line et floral. Chaque projet est unique et préparé en amont
                pour un résultat à la hauteur de vos attentes.
              </p>
              <p>
                Le studio propose des flashs sans rendez-vous ainsi que des projets personnalisés
                sur rendez-vous, pour vous garantir un temps dédié, une ambiance sereine et une
                attention particulière aux détails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
