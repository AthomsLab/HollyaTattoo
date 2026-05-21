import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          Prêt(e) à sauter le pas ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          Partagez votre projet, vos inspirations et vos questions.
          Chaque echange est l{"'"}occasion de construire un tatouage qui vous ressemble.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Me contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {siteConfig.socials.instagram && (
            <Button asChild size="lg" className="bg-white! text-foreground! hover:bg-white/85!">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Voir sur Instagram
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
