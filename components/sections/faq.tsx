import Link from "next/link"
import { homeFaqs } from "@/content/faq"
import { buildFaqPageJsonLd } from "@/lib/faq-json-ld"
import { siteConfig } from "@/content/site"

export function FaqSection() {
  const faqSchema = buildFaqPageJsonLd(homeFaqs)

  return (
    <section id="faq" className="bg-secondary/40 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Questions fréquentes
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Tatouage à {siteConfig.address.city}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tout ce qu&apos;il faut savoir avant de réserver votre séance au studio Holly Tattoo en{" "}
            {siteConfig.address.department}.
          </p>
        </div>

        <dl className="flex flex-col gap-4">
          {homeFaqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
            >
              <dt className="font-serif text-lg font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Une autre question ?{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Contactez le studio pour un tatouage à {siteConfig.address.city}
          </Link>
        </p>
      </div>
    </section>
  )
}
