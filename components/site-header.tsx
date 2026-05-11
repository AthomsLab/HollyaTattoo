"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo space - now empty, logo moved to hero */}
        <Link href="/" aria-label="Holly Tattoo - Accueil" className="h-6 w-6" />
        

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          {siteConfig.socials.instagram && (
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Holly Tattoo sur Instagram"
              className="text-foreground/60 transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Prendre RDV</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border/50 bg-background px-4 pb-6 pt-4 md:hidden"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-foreground/60 hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Prendre RDV
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
