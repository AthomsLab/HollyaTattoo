import Link from "next/link"
import { Instagram } from "lucide-react"
import { siteConfig } from "@/content/site"
import { cityLandings } from "@/content/cities"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="font-serif text-xl font-semibold text-foreground">
              {siteConfig.businessName}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Studio privé de tatouage à {siteConfig.address.city} ({siteConfig.address.department}).
              Sur rendez-vous uniquement.
            </p>
            <div className="flex gap-3 pt-2">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black text-white transition-all hover:bg-white hover:text-black"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Accueil
              </Link>
              <Link href="/galerie" className="text-sm text-muted-foreground hover:text-primary">
                Galerie
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary">
                Politique de confidentialité
              </Link>
            </div>
          </div>

          {/* Zones desservies */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Zones desservies
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {cityLandings.map((city) => (
                <Link
                  key={city.slug}
                  href={`/zones/${city.slug}`}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. Tous droits réservés.
          </p>
          <p>
            Studio privé à {siteConfig.address.city} ({siteConfig.address.postalCode}) - {siteConfig.address.department}
          </p>
        </div>
      </div>
    </footer>
  )
}
