import { Metadata } from "next"
import { siteConfig } from "@/content/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LocalBusinessJsonLd } from "@/components/json-ld"
import { JsonLdComprehensive } from "@/components/json-ld-comprehensive"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { StylesSection } from "@/components/sections/styles"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { ReassuranceSection } from "@/components/sections/reassurance"
import { LocationSection } from "@/components/sections/location"
import { CtaSection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Holly Tattoo | Tatoueuse Vendée",
  description: siteConfig.description,
  keywords: [
    "tatouage",
    "tatoueuse",
    "Vendée",
    "Saint-Reverend",
    "fine line",
    "blackwork",
    "floral",
    "studio",
    "85",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Holly Tattoo | Tatoueuse Vendée",
    description: siteConfig.description,
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
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <JsonLdComprehensive />
      <SiteHeader />
      <main className="pt-[72px]">
        <HeroSection />
        <AboutSection />
        <StylesSection />
        <GalleryPreview />
        <ReassuranceSection />
        <LocationSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
