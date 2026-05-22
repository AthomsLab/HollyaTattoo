import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/content/site"

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site Holly Tattoo.",
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
      <main className="pt-[72px]">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h1 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Mentions legales
            </h1>
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Editeur du site</h2>
                <p>
                  {legalPublisher.businessName}<br />
                  {legalPublisher.address.street}<br />
                  {legalPublisher.address.postalCode} {legalPublisher.address.city}<br />
                  {legalPublisher.address.department}, {legalPublisher.address.country}<br />
                  Email : {legalPublisher.email}
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Hebergement</h2>
                <p>
                  Vercel Inc.<br />
                  340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                  https://vercel.com
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Propriete intellectuelle</h2>
                <p>
                  L{"'"}ensemble du contenu du site (textes, images, logo, photographies)
                  est la propriete exclusive de {siteConfig.businessName} ou fait l{"'"}objet
                  d{"'"}une autorisation d{"'"}utilisation. Toute reproduction, meme partielle,
                  est interdite sans autorisation prealable.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Responsabilite</h2>
                <p>
                  {siteConfig.businessName} s{"'"}efforce de fournir des informations aussi precises que
                  possible. Cependant, elle ne pourra etre tenue responsable des omissions, des inexactitudes
                  ou des eventuelles carences dans la mise a jour des informations.
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-serif text-lg font-semibold text-foreground">Credits</h2>
                <p>
                  Favicon :{" "}
                  <a
                    href="https://www.flaticon.com/free-icons/letter-h"
                    title="letter h icons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
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
