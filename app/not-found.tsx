import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[80vh] items-center justify-center pt-[72px]">
        <div className="mx-auto max-w-md px-4 text-center">
          <p className="font-serif text-6xl font-bold text-primary">404</p>
          <h1 className="mt-4 font-serif text-2xl font-bold text-foreground">
            Page introuvable
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            La page que vous cherchez n{"'"}existe pas ou a ete deplacee.
          </p>
          <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour a l{"'"}accueil
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
