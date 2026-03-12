import { Sparkles, Contrast, Flower2, CircleDot } from "lucide-react"
import { siteConfig } from "@/content/site"

const styleIcons = [Sparkles, Contrast, Flower2, CircleDot]

export function StylesSection() {
  return (
    <section id="styles" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Spécialités
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Styles de tatouage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Chaque projet est adapté à votre style et à votre peau. Voici les univers
            dans lesquels le studio évolue le plus souvent.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.styles.map((style, i) => {
            const Icon = styleIcons[i % styleIcons.length]
            return (
              <div
                key={style.name}
                className="group flex flex-col items-center rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {style.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {style.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
