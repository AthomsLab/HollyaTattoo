import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LocalBusinessJsonLd } from "@/components/json-ld"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { Button } from "@/components/ui/button"
import { cityLandings, STUDIO_CITY, STUDIO_DEPARTMENT } from "@/content/cities"
import { siteConfig } from "@/content/site"
import { galleryImages } from "@/content/gallery"

export function generateStaticParams() {
  return cityLandings.map((city) => ({ slug: city.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = cityLandings.find((c) => c.slug === slug)
  if (!city) return {}

  const fullTitle = `${city.metaTitle} | Tatoueuse Vendée`
  const fullDescription = `${city.metaDescription} Fine line, blackwork et floral. Rendez-vous en ligne disponibles.`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "tatouage",
      city.name,
      "Vendée",
      "tatoueuse",
      "fine line",
      "blackwork",
      "floral",
      STUDIO_CITY,
    ],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: "website",
      locale: "fr_FR",
      url: `${siteConfig.url}/zones/${city.slug}`,
      images: [
        {
          url: siteConfig.logo,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/zones/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const city = cityLandings.find((c) => c.slug === slug)
  if (!city) notFound()

  const previewImages = galleryImages.slice(0, 3)
  
  const breadcrumbItems = [
    { name: "Accueil", url: siteConfig.url },
    { name: city.name, url: `${siteConfig.url}/zones/${city.slug}` },
  ]

  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <SiteHeader />
      <main className="pt-[72px]">
        {/* Breadcrumb */}
        <div className="bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 py-3 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary">Accueil</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-2 text-sm text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">
                    Studio privé à {STUDIO_CITY} ({STUDIO_DEPARTMENT})
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
                  Tatoueuse proche de {city.name}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {city.shortIntro}
                </p>
                {city.approxTravelMinutes && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Environ {city.approxTravelMinutes} minutes en voiture depuis {city.name}.
                  </p>
                )}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/contact">
                      Prendre rendez-vous
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
                    <Link href="/galerie">Voir la galerie</Link>
                  </Button>
                </div>
              </div>

              {/* Small gallery preview */}
              <div className="grid flex-shrink-0 grid-cols-2 gap-3 lg:w-96">
                {previewImages.map((img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-xl shadow-sm ${i === 0 ? "col-span-2" : ""}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={`h-auto w-full object-cover ${i === 0 ? "max-h-48" : "max-h-32"}`}
                      sizes={i === 0 ? "400px" : "200px"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Styles */}
        <section className="bg-secondary/40 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Styles proposés au studio
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.styles.map((style) => (
                <div key={style.name} className="rounded-xl border border-border/50 bg-card p-5">
                  <h3 className="mb-1.5 font-serif text-base font-semibold text-foreground">{style.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {city.faqs.length > 0 && (
          <section className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-3xl px-4 lg:px-8">
              <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                Questions fréquentes
              </h2>
              <div className="flex flex-col gap-4">
                {city.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
                  >
                    <summary className="cursor-pointer font-medium text-foreground list-none">
                      <div className="flex items-center justify-between gap-4">
                        <span>{faq.q}</span>
                        <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                      </div>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>

              {/* FAQ JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: city.faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.q,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a,
                      },
                    })),
                  }),
                }}
              />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
              Un projet de tatouage ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/70">
              Envoyez vos inspirations et vos idées. Le studio est à {STUDIO_CITY},
              accessible depuis {city.name}.
            </p>
            <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Me contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
