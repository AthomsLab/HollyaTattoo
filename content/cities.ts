export type CityFAQ = {
  q: string;
  a: string;
};

export type CityLanding = {
  name: string;
  slug: string;
  tier: "tier1" | "tier2" | "tier3";
  approxTravelMinutes: number | null;
  metaTitle: string;
  metaDescription: string;
  shortIntro: string;
  faqs: CityFAQ[];
};

export const STUDIO_CITY = "Saint-Révérend";
export const STUDIO_DEPARTMENT = "Vendée";

export const cityLandings: CityLanding[] = [
  // --- Tier 1: Very Close (5-15 min) - Priority for local SEO ---
  {
    name: "L'Aiguillon-sur-Vie",
    slug: "laiguillon-sur-vie",
    tier: "tier1",
    approxTravelMinutes: 5,
    metaTitle: "Tatoueuse à L'Aiguillon-sur-Vie, Vendée | Studio 5 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse à L'Aiguillon-sur-Vie en Vendée. Studio privé accessible en 5 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Vous êtes à L'Aiguillon-sur-Vie en Vendée et cherchez une tatoueuse ? Le studio Holly Tattoo est situé à Saint-Révérend, accessible en 5 minutes, et reçoit sur rendez-vous. Envoyez vos idées et inspirations via le formulaire pour préparer un projet sur mesure en Vendée.",
    faqs: [
      {
        q: "Combien de temps pour accéder au studio depuis Aiguillon ?",
        a: "Le studio Holly Tattoo est accessible en environ 5 minutes depuis L'Aiguillon-sur-Vie, en Vendée.",
      },
      {
        q: "Quel type de tatouage à Aiguillon, Vendée ?",
        a: "Fine line, blackwork, floral et géométrique. Designs personnalisés pour chaque client près d'Aiguillon en Vendée.",
      },
      {
        q: "Studio privé en Vendée ?",
        a: "Oui, le studio est privé et situé en Vendée, accessible depuis Aiguillon-sur-Vie.",
      },
    ],
  },
  {
    name: "Vie",
    slug: "vie",
    tier: "tier1",
    approxTravelMinutes: 5,
    metaTitle: "Tatoueuse à Vie, Vendée | Studio 5 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse à Vie en Vendée, accessible 5 min. Studio privé fine line, blackwork, floral. Tatouage Vendée de qualité.",
    shortIntro:
      "Vous habitez Vie en Vendée ? Le studio Holly Tattoo est accessible en 5 minutes. Tatoueuse spécialisée en fine line et designs personnalisés. Rendez-vous sur formulaire pour préparer votre tatouage en Vendée.",
    faqs: [
      {
        q: "Tatoueuse à Vie en Vendée ?",
        a: "Oui, Holly Tattoo est accessible en 5 minutes depuis Vie en Vendée.",
      },
      {
        q: "Styles disponibles en Vendée ?",
        a: "Fine line, blackwork, floral, géométrique - tous styles en Vendée.",
      },
      {
        q: "Rendez-vous rapide en Vendée ?",
        a: "Oui, disponibilités ajustées selon la période. Contactez via formulaire pour Vie, Vendée.",
      },
    ],
  },
  {
    name: "Saint-Maixent-sur-Vie",
    slug: "saint-maixent-sur-vie",
    tier: "tier1",
    approxTravelMinutes: 8,
    metaTitle: "Tatoueuse à Saint-Maixent-sur-Vie, Vendée | Studio 8 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Saint-Maixent-sur-Vie en Vendée, studio 8 min. Fine line, blackwork, floral. Tatouage privé Vendée.",
    shortIntro:
      "Vous êtes à Saint-Maixent-sur-Vie en Vendée ? Le studio Holly Tattoo est accessible en 8 minutes. Tatoueuse expérimentée pour fine line et designs personnalisés en Vendée. Rendez-vous sur formulaire.",
    faqs: [
      {
        q: "Tatoueuse proche Saint-Maixent, Vendée ?",
        a: "Oui, Holly Tattoo est accessible en 8 minutes depuis Saint-Maixent-sur-Vie en Vendée.",
      },
      {
        q: "Fine line en Vendée ?",
        a: "Oui, spécialiste fine line en Vendée pour designs délicats.",
      },
      {
        q: "Prendre rendez-vous en Vendée ?",
        a: "Formulaire de contact pour rendez-vous à Saint-Maixent, Vendée.",
      },
    ],
  },
  {
    name: "Le Fenouiller",
    slug: "le-fenouiller",
    tier: "tier1",
    approxTravelMinutes: 10,
    metaTitle: "Tatoueuse Le Fenouiller, Vendée | Studio 10 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Le Fenouiller en Vendée, accessible 10 min. Studio privé fine line, blackwork. Tatouage Vendée.",
    shortIntro:
      "Vous habitez Le Fenouiller en Vendée ? Le studio Holly Tattoo est accessible en 10 minutes. Tatoueuse pour fine line, blackwork, designs floraux. Prenez rendez-vous en Vendée via formulaire.",
    faqs: [
      {
        q: "Tatoueuse Le Fenouiller, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 10 minutes depuis Le Fenouiller en Vendée.",
      },
      {
        q: "Fine line en Vendée ?",
        a: "Oui, designs fine line délicats en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Contactez pour rendez-vous Le Fenouiller, Vendée.",
      },
    ],
  },
  {
    name: "Saint-Gilles-Croix-de-Vie",
    slug: "saint-gilles-croix-de-vie",
    tier: "tier1",
    approxTravelMinutes: 10,
    metaTitle: "Tatoueuse Saint-Gilles-Croix-de-Vie, Vendée | Studio 10 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Saint-Gilles-Croix-de-Vie en Vendée, studio 10 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Depuis Saint-Gilles-Croix-de-Vie en Vendée, vous pouvez rejoindre facilement le studio privé Holly Tattoo. Accessible en 10 minutes. L'approche : échanges clairs, travail propre, et rendu fin soigné, adapté à votre peau et projet en Vendée.",
    faqs: [
      {
        q: "Tatoueuse Saint-Gilles-Croix-de-Vie, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 10 minutes depuis Saint-Gilles en Vendée.",
      },
      {
        q: "Studio privé Vendée ?",
        a: "Oui, studio privé à Saint-Révérend en Vendée.",
      },
      {
        q: "Styles en Vendée ?",
        a: "Fine line, blackwork, floral, géométrique en Vendée.",
      },
    ],
  },
  {
    name: "Coëx",
    slug: "coex",
    tier: "tier1",
    approxTravelMinutes: 10,
    metaTitle: "Tatoueuse Coëx, Vendée | Studio 10 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse à Coëx en Vendée, studio privé 10 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Vous êtes à Coëx en Vendée ? Le studio Holly Tattoo est accessible en 10 minutes. Tatoueuse pour fine line et designs personnalisés en Vendée. Rendez-vous sur formulaire.",
    faqs: [
      {
        q: "Tatoueuse Coëx, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 10 minutes depuis Coëx en Vendée.",
      },
      {
        q: "Fine line en Vendée ?",
        a: "Oui, fine line en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Formulaire pour rendez-vous Coëx, Vendée.",
      },
    ],
  },
  {
    name: "Givrand",
    slug: "givrand",
    tier: "tier1",
    approxTravelMinutes: 10,
    metaTitle: "Tatoueuse Givrand, Vendée | Studio 10 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Givrand en Vendée, studio 10 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Depuis Givrand en Vendée, vous pouvez venir au studio Holly Tattoo en 10 minutes. Tatoueuse pour fine line et designs personnalisés en Vendée. Rendez-vous sur formulaire.",
    faqs: [
      {
        q: "Tatoueuse Givrand, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 10 minutes depuis Givrand en Vendée.",
      },
      {
        q: "Blackwork en Vendée ?",
        a: "Oui, designs blackwork en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Contactez pour rendez-vous Givrand, Vendée.",
      },
    ],
  },
  {
    name: "Commequiers",
    slug: "commequiers",
    tier: "tier1",
    approxTravelMinutes: 12,
    metaTitle: "Tatoueuse Commequiers, Vendée | Studio 12 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Commequiers en Vendée, studio 12 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Depuis Commequiers en Vendée, vous pouvez venir au studio Holly Tattoo en 12 minutes. L'objectif : rendu propre, lisible et durable, adapté à votre peau et style. Tatouage Vendée de qualité.",
    faqs: [
      {
        q: "Tatoueuse proche Commequiers, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 12 minutes depuis Commequiers en Vendée.",
      },
      {
        q: "Styles Commequiers, Vendée ?",
        a: "Fine line, blackwork, floral pour clients Vendée.",
      },
      {
        q: "Rendez-vous tatouage Vendée ?",
        a: "Contactez pour rendez-vous Commequiers, Vendée.",
      },
    ],
  },

  // --- Tier 2: Medium distance (15-25 min) ---
  {
    name: "Aizenay",
    slug: "aizenay",
    tier: "tier2",
    approxTravelMinutes: 15,
    metaTitle: "Tatoueuse Aizenay, Vendée | Studio 15 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Aizenay en Vendée, studio 15 min. Fine line, blackwork. Tatouage privé Vendée.",
    shortIntro:
      "Vous êtes à Aizenay en Vendée et cherchez une tatoueuse ? Le studio Holly Tattoo est accessible en 15 minutes. Vous pouvez transmettre vos inspirations à l'avance pour affiner le projet en Vendée.",
    faqs: [
      {
        q: "Tatoueuse Aizenay, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 15 minutes depuis Aizenay en Vendée.",
      },
      {
        q: "Petits tatouages en Vendée ?",
        a: "Oui, petits formats et designs fins en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Formulaire pour rendez-vous Aizenay, Vendée.",
      },
    ],
  },
  {
    name: "Saint-Hilaire-de-Riez",
    slug: "saint-hilaire-de-riez",
    tier: "tier2",
    approxTravelMinutes: 15,
    metaTitle: "Tatoueuse Saint-Hilaire-de-Riez, Vendée | Studio 15 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Saint-Hilaire-de-Riez en Vendée, studio 15 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Vous êtes à Saint-Hilaire-de-Riez en Vendée et cherchez un tattoo ? Le studio Holly Tattoo est accessible en 15 minutes. Vous pouvez partager vos inspirations et contraintes pour construire un projet clair en Vendée.",
    faqs: [
      {
        q: "Tatoueuse Saint-Hilaire-de-Riez, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 15 minutes depuis Saint-Hilaire en Vendée.",
      },
      {
        q: "Tatouage floral en Vendée ?",
        a: "Oui, projets floraux en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Contactez pour rendez-vous Saint-Hilaire, Vendée.",
      },
    ],
  },
  {
    name: "Notre-Dame-de-Riez",
    slug: "notre-dame-de-riez",
    tier: "tier2",
    approxTravelMinutes: 15,
    metaTitle: "Tatoueuse Notre-Dame-de-Riez, Vendée | Studio 15 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Notre-Dame-de-Riez en Vendée, studio 15 min. Fine line, blackwork. Tatouage Vendée.",
    shortIntro:
      "Depuis Notre-Dame-de-Riez en Vendée, vous pouvez rejoindre le studio Holly Tattoo en 15 minutes. Le travail se fait sur rendez-vous, avec un cadre calme et une approche attentive aux détails en Vendée.",
    faqs: [
      {
        q: "Tatoueuse Notre-Dame-de-Riez, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 15 minutes depuis Notre-Dame en Vendée.",
      },
      {
        q: "Couleur en Vendée ?",
        a: "Surtout noir, mais discutez vos souhaits en Vendée.",
      },
      {
        q: "Hygiène en Vendée ?",
        a: "Normes strictes d'hygiène au studio Vendée.",
      },
    ],
  },
  {
    name: "Les Sables-d'Olonne",
    slug: "les-sables-dolonne",
    tier: "tier2",
    approxTravelMinutes: 25,
    metaTitle: "Tatoueuse Les Sables-d'Olonne, Vendée | Studio 25 min | Holly Tattoo",
    metaDescription:
      "Tatoueuse Les Sables-d'Olonne en Vendée, studio 25 min. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Depuis Les Sables-d'Olonne en Vendée, vous pouvez venir au studio Holly Tattoo en 25 minutes. L'approche met l'accent sur la précision des lignes, la propreté, et un rendu durable en Vendée.",
    faqs: [
      {
        q: "Tatoueuse Sables-d'Olonne, Vendée ?",
        a: "Oui, Holly Tattoo accessible en 25 minutes depuis Sables en Vendée.",
      },
      {
        q: "Préparation à distance en Vendée ?",
        a: "Oui, envoyez inspirations et détails pour Sables-d'Olonne, Vendée.",
      },
      {
        q: "Motif très fin en Vendée ?",
        a: "Oui, avec taille minimale validée en Vendée.",
      },
    ],
  },

  // --- Tier 3: Farther (25+ min) ---
  {
    name: "La Chapelle-Hermier",
    slug: "la-chapelle-hermier",
    tier: "tier3",
    approxTravelMinutes: null,
    metaTitle: "Tatoueuse La Chapelle-Hermier, Vendée | Studio privé | Holly Tattoo",
    metaDescription:
      "Tatoueuse La Chapelle-Hermier en Vendée. Studio privé à Saint-Révérend. Fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Vous habitez La Chapelle-Hermier et cherchez une tatoueuse en Vendée ? Le studio privé Holly Tattoo est situé à Saint-Révérend et reçoit sur rendez-vous. Vous pouvez envoyer vos inspirations à l'avance pour affiner le motif en Vendée.",
    faqs: [
      {
        q: "Idée vague en Vendée ?",
        a: "Oui, un thème ou ambiance suffit. On construit ensemble en Vendée.",
      },
      {
        q: "Douleur par zone en Vendée ?",
        a: "Zones charnues plus confortables. On en discute pour votre projet Vendée.",
      },
      {
        q: "Rendez-vous rapide Vendée ?",
        a: "Contactez via formulaire pour rendez-vous Vendée.",
      },
    ],
  },
  {
    name: "Brétignolles-sur-Mer",
    slug: "bretignolles-sur-mer",
    tier: "tier3",
    approxTravelMinutes: null,
    metaTitle: "Tatoueuse Brétignolles-sur-Mer, Vendée | Studio | Holly Tattoo",
    metaDescription:
      "Tatoueuse Brétignolles-sur-Mer en Vendée. Studio privé fine line, blackwork. Tatouage Vendée.",
    shortIntro:
      "Depuis Brétignolles-sur-Mer en Vendée, vous pouvez rejoindre le studio privé Holly Tattoo pour un tatouage préparé avec soin. L'accent est mis sur la propreté, la précision, et un rendu harmonieux en Vendée.",
    faqs: [
      {
        q: "Placement en Vendée ?",
        a: "Oui, placement ajusté ensemble pour rendu optimal Vendée.",
      },
      {
        q: "Minimaliste en Vendée ?",
        a: "Oui, motifs minimalistes fins en Vendée.",
      },
      {
        q: "Soleil/plage Vendée ?",
        a: "Oui, mais protection pendant cicatrisation Vendée.",
      },
    ],
  },
  {
    name: "La Roche-sur-Yon",
    slug: "la-roche-sur-yon",
    tier: "tier3",
    approxTravelMinutes: null,
    metaTitle: "Tatoueuse La Roche-sur-Yon, Vendée | Studio privé | Holly Tattoo",
    metaDescription:
      "Tatoueuse La Roche-sur-Yon en Vendée. Studio privé à Saint-Révérend. Fine line, blackwork. Tatouage Vendée.",
    shortIntro:
      "Vous êtes à La Roche-sur-Yon en Vendée et cherchez une tatoueuse ? Le studio privé Holly Tattoo est situé à Saint-Révérend et accessible. Vous pouvez envoyer vos inspirations via le formulaire pour obtenir une première réponse en Vendée.",
    faqs: [
      {
        q: "Projet plus grand en Vendée ?",
        a: "Oui, selon style et détail. Estimation donnée en Vendée.",
      },
      {
        q: "Prix estimation en Vendée ?",
        a: "Envoyez détails pour estimation en Vendée.",
      },
      {
        q: "Accès en Vendée ?",
        a: "Oui, accessible en Vendée à Saint-Révérend.",
      },
    ],
  },
  {
    name: "Saint-Jean-de-Monts",
    slug: "saint-jean-de-monts",
    tier: "tier3",
    approxTravelMinutes: null,
    metaTitle: "Tatoueuse Saint-Jean-de-Monts, Vendée | Studio | Holly Tattoo",
    metaDescription:
      "Tatoueuse Saint-Jean-de-Monts en Vendée. Studio privé fine line, blackwork, floral. Tatouage Vendée.",
    shortIntro:
      "Vous habitez Saint-Jean-de-Monts en Vendée ? Le studio privé Holly Tattoo est situé à Saint-Révérend. Tatoueuse spécialisée fine line et designs personnalisés en Vendée. Rendez-vous sur formulaire.",
    faqs: [
      {
        q: "Tatoueuse Saint-Jean-de-Monts, Vendée ?",
        a: "Oui, Holly Tattoo accessible depuis Saint-Jean en Vendée.",
      },
      {
        q: "Fine line en Vendée ?",
        a: "Oui, fine line délicate en Vendée.",
      },
      {
        q: "Rendez-vous en Vendée ?",
        a: "Formulaire pour rendez-vous Saint-Jean, Vendée.",
      },
    ],
  },
]
