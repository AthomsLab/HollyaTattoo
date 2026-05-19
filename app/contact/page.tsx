import type { Metadata } from "next"
import { MapPin, Instagram, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/content/site"
import { seoContact } from "@/content/seo"

export const metadata: Metadata = {
  title: seoContact.title,
  description: seoContact.description,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    title: `${seoContact.title} | ${siteConfig.name}`,
    description: seoContact.description,
    images: [{ url: siteConfig.logo, width: 1200, height: 630, alt: siteConfig.name }],
  },
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
                Rendez-vous
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                Contact — Tatouage à {siteConfig.address.city}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Partagez votre projet de tatouage à {siteConfig.address.city} ({siteConfig.address.department}).
                Vous recevrez une réponse avec les disponibilités et les prochaines étapes.
              </p>
            </div>

            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Form */}
              <div className="flex-1">
                <ContactForm />
              </div>

              {/* Sidebar info */}
              <aside className="flex flex-col gap-6 lg:w-80">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">Localisation</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Studio privé à {siteConfig.address.city} ({siteConfig.address.postalCode}),{" "}
                    {siteConfig.address.department}.<br />
                    Sur rendez-vous uniquement.
                  </p>
                </div>

                {siteConfig.email && (
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <Mail className="h-5 w-5" />
                      <h3 className="font-serif text-lg font-semibold text-foreground">Email</h3>
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-3 block text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                )}

                {siteConfig.socials.instagram && (
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary">
                      <Instagram className="h-5 w-5" />
                      <h3 className="font-serif text-lg font-semibold text-foreground">Instagram</h3>
                    </div>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                    >
                      @hollya_tattoo
                    </a>
                  </div>
                )}

                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Le studio est un espace privé. L{"'"}adresse exacte est communiquée
                    lors de la confirmation du rendez-vous. N{"'"}hésitez pas à joindre
                    des photos d{"'"}inspiration avec votre demande.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
