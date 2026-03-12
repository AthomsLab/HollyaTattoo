import { ShieldCheck, Sparkles, Heart, ClipboardCheck } from "lucide-react"

const reassurances = [
  {
    icon: ShieldCheck,
    title: "Hygiène irréprochable",
    description:
      "Matériel à usage unique, stérilisation, désinfection systématique et protocole strict pour chaque séance.",
  },
  {
    icon: ClipboardCheck,
    title: "Préparation en amont",
    description:
      "Chaque projet est échangé, ajusté et validé avant la séance. Pas de surprises, un résultat maîtrisé.",
  },
  {
    icon: Heart,
    title: "Accompagnement complet",
    description:
      "Conseils de soin détaillés après la séance, suivi de cicatrisation et réponses à vos questions.",
  },
  {
    icon: Sparkles,
    title: "Studio privé & calme",
    description:
      "Un espace dédié, sans passage, pour une séance sereine et une attention totale à votre projet.",
  },
]

export function ReassuranceSection() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Confiance
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Hygiène & processus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            La sécurité et le confort sont au cœur de chaque séance. Voici ce qui vous attend.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reassurances.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
