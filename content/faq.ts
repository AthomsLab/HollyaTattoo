import { siteConfig } from "@/content/site"

export type FaqItem = {
  question: string
  answer: string
}

export const homeFaqs: FaqItem[] = [
  {
    question: `Où faire un tatouage à ${siteConfig.address.city} ?`,
    answer: `Le studio Holly Tattoo est situé au ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city} (${siteConfig.address.department}). Studio privé sur rendez-vous, accessible depuis toute la Vendée littorale.`,
  },
  {
    question: "Quels styles de tatouage proposez-vous ?",
    answer:
      "Le studio est spécialisé en dark-pop, fine line et floral. Chaque projet est préparé en amont : flashs disponibles sans rendez-vous ou création personnalisée sur mesure.",
  },
  {
    question: "Comment prendre rendez-vous pour un tatouage ?",
    answer:
      "Remplissez le formulaire de contact avec votre idée, l'emplacement souhaité et des visuels d'inspiration. Vous recevrez une réponse avec les disponibilités et les prochaines étapes.",
  },
  {
    question: "Proposez-vous des flashs sans rendez-vous ?",
    answer:
      "Oui, des flashs sont proposés sans rendez-vous selon les disponibilités du moment. Suivez le studio sur Instagram pour découvrir les créations disponibles.",
  },
  {
    question: `Le studio est-il ouvert le week-end à ${siteConfig.address.city} ?`,
    answer:
      "Le studio est ouvert du mardi au samedi (créneaux matin et après-midi). Fermé le lundi et le dimanche. Les horaires détaillés sont indiqués sur cette page.",
  },
  {
    question: "Quelle est l'adresse exacte du studio ?",
    answer: `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}, ${siteConfig.address.department}. L'adresse précise est confirmée lors de la validation du rendez-vous.`,
  },
]
