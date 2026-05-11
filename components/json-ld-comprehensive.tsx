'use client'

import { siteConfig } from '@/content/site'

export function JsonLdComprehensive() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organisation
      {
        '@type': 'Organization',
        '@id': siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.artistName,
        logo: siteConfig.logo,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        description: siteConfig.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.department,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        sameAs: [siteConfig.socials.instagram],
      },
      // Local Business (Tattoo Parlor)
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}#localbusiness`,
        name: siteConfig.businessName,
        image: siteConfig.logo,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.url,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.department,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        // Opening hours in ISO 8601 format
        openingHoursSpecification: [
          { dayOfWeek: 'Monday', opens: '10:00', closes: '19:00' },
          { dayOfWeek: 'Tuesday', opens: '10:00', closes: '19:00' },
          { dayOfWeek: 'Wednesday', opens: '10:00', closes: '19:00' },
          { dayOfWeek: 'Thursday', opens: '10:00', closes: '19:00' },
          { dayOfWeek: 'Friday', opens: '10:00', closes: '19:00' },
          { dayOfWeek: 'Saturday', opens: '10:00', closes: '19:00' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: siteConfig.url,
          availableLanguage: ['fr', 'en'],
        },
        sameAs: [siteConfig.socials.instagram],
      },
      // Professional Service (Artist)
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}#professional`,
        name: `${siteConfig.artistName} - Tattoo Artist`,
        provider: {
          '@type': 'Person',
          name: siteConfig.artistName,
        },
        areaServed: [
          {
            '@type': 'City',
            name: siteConfig.address.city,
          },
          {
            '@type': 'AdministrativeArea',
            name: siteConfig.address.department,
          },
        ],
        offers: siteConfig.styles.map((style) => ({
          '@type': 'Offer',
          name: style.name,
          description: style.description,
          provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.businessName,
          },
        })),
      },
      // WebSite for search action
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}#website`,
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
