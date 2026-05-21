"use client"

import { cn } from "@/lib/utils"

type MobileMenuButtonProps = {
  open: boolean
  onToggle: () => void
}

export function MobileMenuButton({ open, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
      onClick={onToggle}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      aria-controls="mobile-navigation"
    >
      <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
      <span
        className={cn(
          "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
          open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0",
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ease-out",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
          open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0",
        )}
      />
    </button>
  )
}
