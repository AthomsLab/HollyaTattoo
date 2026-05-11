import { MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/content/site"

export function LocationSection() {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.address.city}, ${siteConfig.address.postalCode} ${siteConfig.address.department}`
  )
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <section id="localisation" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Localisation
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ou nous trouver
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Map */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-1.87,46.67,-1.80,46.72&layer=mapnik&marker=${siteConfig.geo.lat},${siteConfig.geo.lng}`}
              width="100%"
              height="400"
              className="border-0"
              loading="lazy"
              title="Carte du studio Holly Tattoo a Saint-Reverend"
              aria-label="Carte interactive montrant la localisation du studio"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8 lg:w-80">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <h3 className="font-serif text-lg font-semibold text-foreground">Adresse</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                {siteConfig.address.department}, {siteConfig.address.region}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <h3 className="font-serif text-lg font-semibold text-foreground">Horaires</h3>
              </div>
              <div className="flex flex-col gap-1">
                {siteConfig.openingHours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className={h.hours === "Ferme" ? "text-destructive" : "text-foreground"}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
