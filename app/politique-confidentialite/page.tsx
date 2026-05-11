import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Holly Tattoo.",
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[72px]">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Politique de confidentialité
            </h1>
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Collecte des données</h2>
                <p>
                  Le site {siteConfig.url} collecte des données personnelles uniquement via
                  le formulaire de contact : nom, adresse email, numéro de téléphone (optionnel),
                  description du projet et éventuelles images jointes.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Utilisation des données</h2>
                <p>
                  Les données collectées sont utilisées exclusivement pour répondre à votre demande
                  de rendez-vous ou d{"'"}information. Elles ne sont ni vendues, ni cédées à des tiers.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Conservation des données</h2>
                <p>
                  Les données transmises via le formulaire de contact ne sont pas stockées sur le
                  serveur. Elles sont transmises par email et conservées uniquement le temps nécessaire
                  au traitement de votre demande.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Cookies</h2>
                <p>
                  Le site n{"'"}utilise aucun cookie de suivi publicitaire. Les seuls cookies éventuels
                  sont ceux strictement nécessaires au fonctionnement technique du site.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez d{"'"}un droit d{"'"}accès, de rectification,
                  de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous
                  à l{"'"}adresse : {siteConfig.email}.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Hébergement</h2>
                <p>
                  Le site est hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA).
                  Les données peuvent être traitées en dehors de l{"'"}Union européenne dans le cadre
                  des clauses contractuelles types.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
