import { siteConfig } from "@/content/site"
import { buildOpeningHoursSpecificationJsonLd } from "@/lib/schema-opening-hours"

const tattooParlorId = `${siteConfig.url}#tattooParlor`

export function JsonLdComprehensive() {
  const openingHoursSpecification = buildOpeningHoursSpecificationJsonLd()

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.artistName,
        logo: siteConfig.logo,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.department,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        sameAs: [siteConfig.socials.instagram],
      },
      {
        "@type": "TattooParlor",
        "@id": tattooParlorId,
        name: siteConfig.businessName,
        image: siteConfig.logo,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.department,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        openingHoursSpecification,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.url,
          availableLanguage: ["fr", "en"],
        },
        sameAs: [siteConfig.socials.instagram],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#professional`,
        name: `${siteConfig.artistName} - Tattoo Artist`,
        provider: {
          "@type": "Person",
          name: siteConfig.artistName,
        },
        areaServed: [
          {
            "@type": "City",
            name: siteConfig.address.city,
          },
          {
            "@type": "AdministrativeArea",
            name: siteConfig.address.department,
          },
        ],
        offers: siteConfig.styles.map((style) => ({
          "@type": "Offer",
          name: style.name,
          description: style.description,
          provider: {
            "@id": tattooParlorId,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
