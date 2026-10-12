import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Holly Tattoo.",
}

const legalPublisher = {
  businessName: "Athoms Lab",
  address: {
    street: "9 rue du Maréchal de Lattre de Tassigny",
    postalCode: "85220",
    city: "Saint-Révérend",
    department: "Vendée",
    country: "France",
  },
  email: "athomslab@gmail.com",
}

export default function MentionsLegales() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1} className="focus:outline-none pt-[72px]">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Mentions légales
            </h1>
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Éditeur du site</h2>
                <p>
                  {legalPublisher.businessName}<br />
                  {legalPublisher.address.street}<br />
                  {legalPublisher.address.postalCode} {legalPublisher.address.city}<br />
                  {legalPublisher.address.department}, {legalPublisher.address.country}<br />
                  Email : {legalPublisher.email}
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Hébergement</h2>
                <p>
                  Vercel Inc.<br />
                  340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                  https://vercel.com
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
                <p>
                  L{"'"}ensemble du contenu du site (textes, images, logo, photographies)
                  est la propriété exclusive de {siteConfig.businessName} ou fait l{"'"}objet
                  d{"'"}une autorisation d{"'"}utilisation. Toute reproduction, même partielle,
                  est interdite sans autorisation préalable.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Responsabilité</h2>
                <p>
                  {siteConfig.businessName} s{"'"}efforce de fournir des informations aussi précises que
                  possible. Cependant, elle ne pourra être tenue responsable des omissions, des inexactitudes
                  ou des éventuelles carences dans la mise à jour des informations.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Crédits</h2>
                <p>
                  Favicon :{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/letter-h"
                    title="letter h icons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    Letter h icons created by NajmunNahar - Flaticon
                  </a>
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
