import { Metadata } from "next"
import { siteConfig } from "@/content/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { StylesSection } from "@/components/sections/styles"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { ReassuranceSection } from "@/components/sections/reassurance"
import { LocationSection } from "@/components/sections/location"
import { CtaSection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Holly Tattoo | Tatoueuse Saint-Gilles-Croix-de-Vie, Vendée",
  description: siteConfig.description,
  keywords: [
    "tatouage",
    "tatoueuse",
    "Vendée",
    "Saint-Gilles-Croix-de-Vie",
    "dark-pop",
    "fine line",
    "floral",
    "flash tattoo",
    "studio",
    "85",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Holly Tattoo | Tatoueuse Saint-Gilles-Croix-de-Vie, Vendée",
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
