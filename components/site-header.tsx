"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { MobileMenuButton } from "@/components/site-header/mobile-menu-button"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 12

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileLinkTabIndex = undefined
  const headerRef = useRef<HTMLElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-out",
        scrolled ? "py-2 md:py-2" : "py-3 md:py-4"
      )}
    >
      {/* Desktop: Centered pill with nav only (hidden on mobile) */}
      <div
        className={cn(
          "mx-auto hidden max-w-fit items-center justify-center px-2 transition-all duration-300 ease-out md:flex",
          scrolled
            ? "rounded-full border border-border/60 bg-background/90 py-1.5 shadow-lg shadow-black/5 backdrop-blur-lg"
            : "rounded-full border border-transparent bg-background/50 py-2 backdrop-blur-sm"
        )}
      >
        <nav className="flex items-center gap-1" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                "text-foreground/70 hover:bg-secondary hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
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
              className={cn(
                "ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200",
                "text-foreground/60 hover:bg-secondary hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          )}
          <Button
            asChild
            size="sm"
            className={cn(
              "ml-2 rounded-full bg-primary px-5 text-primary-foreground transition-all duration-200",
              "hover:bg-primary/90 hover:shadow-md"
            )}
          >
            <Link href="/contact">Prendre RDV</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile: Floating hamburger button only (no bar/pill when closed) */}
      <div className="flex justify-end px-4 md:hidden">
        <MobileMenuButton open={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />
      </div>

      {/* Mobile Nav dropdown */}
      <nav
        id="mobile-navigation"
        className={cn(
          "mx-auto mt-2 max-w-sm overflow-hidden px-4 transition-all duration-300 ease-out md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-label="Navigation mobile"
        inert={!mobileOpen ? true : undefined}
      >
        <div
          className={cn(
            "rounded-2xl border border-border/60 bg-background/95 shadow-xl backdrop-blur-lg transition-all duration-300 ease-out",
            mobileOpen ? "translate-y-0 scale-100" : "-translate-y-2 scale-95"
          )}
        >
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={mobileLinkTabIndex}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  "text-foreground/80 hover:bg-secondary hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-border/50 pt-4">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  tabIndex={mobileLinkTabIndex}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                    "text-foreground/60 hover:bg-secondary hover:text-primary"
                  )}
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
              )}
              <Button
                asChild
                className="flex-1 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact" tabIndex={mobileLinkTabIndex} onClick={() => setMobileOpen(false)}>
                  Prendre RDV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
