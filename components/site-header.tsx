"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { MobileMenuButton } from "@/components/site-header/mobile-menu-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileLinkTabIndex = mobileOpen ? undefined : -1

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
        <MobileMenuButton open={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-border/50 bg-background transition-all duration-300 ease-out md:hidden",
          mobileOpen
            ? "grid-rows-[1fr] opacity-100 shadow-lg"
            : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0",
        )}
        aria-label="Navigation mobile"
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "min-h-0 px-4 transition-transform duration-300 ease-out",
            mobileOpen ? "translate-y-0" : "-translate-y-3",
          )}
        >
          <div className="flex flex-col gap-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={mobileLinkTabIndex}
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
                  tabIndex={mobileLinkTabIndex}
                  className="text-foreground/60 transition-colors hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact" tabIndex={mobileLinkTabIndex} onClick={() => setMobileOpen(false)}>
                Prendre RDV
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
