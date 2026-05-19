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
            Où nous trouver
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Map */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${siteConfig.geo.lng - 0.01},${siteConfig.geo.lat - 0.006},${siteConfig.geo.lng + 0.01},${siteConfig.geo.lat + 0.006}&layer=mapnik&marker=${siteConfig.geo.lat},${siteConfig.geo.lng}`}
              width="100%"
              height="400"
              className="border-0"
              loading="lazy"
              title="Carte du studio Holly Tattoo à Saint-Gilles-Croix-de-Vie"
              aria-label="Carte interactive montrant la localisation du studio"
            />
            {/* Pink marker overlay centered on the studio */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 36"
                width="32"
                height="48"
                aria-hidden="true"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 8.25 12 24 12 24S24 20.25 24 12C24 5.373 18.627 0 12 0z"
                  fill="#e8427a"
                />
                <circle cx="12" cy="12" r="5" fill="white" />
              </svg>
            </div>
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
