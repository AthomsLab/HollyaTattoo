"use client"

import { useEffect, useRef, useState } from "react"
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
  const mobileLinkTabIndex = undefined
  const headerRef = useRef<HTMLElement>(null)
  const wasOpen = useRef(false)

  // Accessibilité : Échap ferme, focus piégé dans l'en-tête, reste de la page inerte, retour du focus au bouton
  useEffect(() => {
    const outside = document.querySelectorAll<HTMLElement>("main, footer, [data-skip-link]")
    outside.forEach((el) => (mobileOpen ? el.setAttribute("inert", "") : el.removeAttribute("inert")))
    const toggle = headerRef.current?.querySelector<HTMLButtonElement>("[aria-controls='mobile-navigation']")
    if (!mobileOpen) {
      if (wasOpen.current) toggle?.focus()
      wasOpen.current = false
      return
    }
    wasOpen.current = true
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
        return
      }
      if (e.key !== "Tab" || !headerRef.current) return
      const items = Array.from(headerRef.current.querySelectorAll<HTMLElement>("a[href], button")).filter(
        (el) => el.offsetParent !== null,
      )
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      outside.forEach((el) => el.removeAttribute("inert"))
    }
  }, [mobileOpen])

  return (
    <header ref={headerRef} className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
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
              <Instagram className="h-5 w-5" aria-hidden="true" />
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
        inert={!mobileOpen ? true : undefined}
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
                  <Instagram className="h-5 w-5" aria-hidden="true" />
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
