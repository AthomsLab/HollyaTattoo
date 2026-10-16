import { MapPin, Clock, Phone } from "lucide-react"
import { siteConfig, formatPhoneDisplay, formatPhoneTel } from "@/content/site"
import { googleMapsUrl } from "@/content/seo"
import { ScrollReveal } from "@/components/scroll-reveal"

export function LocationSection() {
  const mapsUrl = googleMapsUrl(siteConfig.mapsQuery)
  const mapBboxPaddingLng = 0.008
  const mapBboxPaddingLat = 0.005

  return (
    <section id="localisation" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <ScrollReveal className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Localisation
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Où nous trouver
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Map */}
          <ScrollReveal className="flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${siteConfig.geo.lng - mapBboxPaddingLng},${siteConfig.geo.lat - mapBboxPaddingLat},${siteConfig.geo.lng + mapBboxPaddingLng},${siteConfig.geo.lat + mapBboxPaddingLat}&layer=mapnik&marker=${siteConfig.geo.lat},${siteConfig.geo.lng}`}
              width="100%"
              height="400"
              className="border-0"
              loading="lazy"
              title={`Carte du studio Holly Tattoo ${siteConfig.cityLocative}`}
              aria-label="Carte interactive montrant la localisation du studio"
            />
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={150} className="flex flex-col gap-8 lg:w-80">
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
              <p className="text-sm text-foreground">
                Shop tatouage & onglerie
                <br />
                En collaboration avec{" "}
                <a
                  href="https://dolinails.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Doli&apos;Nails
                </a>
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

            {siteConfig.phone && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="h-5 w-5" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">Téléphone</h3>
                </div>
                <a
                  href={`tel:${formatPhoneTel(siteConfig.phone)}`}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {formatPhoneDisplay(siteConfig.phone)}
                </a>
              </div>
            )}

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
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
