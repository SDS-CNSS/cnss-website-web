// Source unique des routes internes du site — navigation, sitemap, robots, liens
// croisés en dur dans le code. Une fois Strapi branché, le contenu éditorial
// n'aura plus besoin de ce fichier (les liens viendront du CMS), mais tant que
// la structure de navigation/sitemap est écrite en dur ici, c'est le seul
// endroit où une route doit être tapée en toutes lettres.

export const ROUTES = {
  home: "/",
  aPropos: "/a-propos",
  organesDeGouvernance: "/organes-de-gouvernance",
  actualites: "/actualites",
  bibliotheque: "/bibliotheque",
  mediatheque: "/mediatheque",
  contact: "/contact",
  recherche: "/recherche",

  recouvrement: {
    immatriculation: "/recouvrement/immatriculation",
    declarationPaiementCotisations: "/recouvrement/declaration-paiement-cotisations",
    controleEmployeur: "/recouvrement/controle-employeur",
  },

  prestations: {
    allocationsFamiliales: "/prestations/allocations-familiales",
    allocationsPrenatales: "/prestations/allocations-prenatales",
    congeMaternite: "/prestations/conge-maternite",
    actionSanitaireSociale: "/prestations/action-sanitaire-sociale",
    maladiesProfessionnelles: "/prestations/maladies-professionnelles",
    accidentTravail: "/prestations/accident-travail",
    preventionRisquesProfessionnels: "/prestations/prevention-risques-professionnels",
    pensionSurvivants: "/prestations/pension-survivants",
    remboursementCotisations: "/prestations/remboursement-cotisations",
    allocationRemariage: "/prestations/allocation-remariage",
    coordination: "/prestations/coordination",
    pensions: "/prestations/pensions",
  },

  simulateurs: {
    chargesSocialesEmbauche: "/simulateurs/charges-sociales-embauche",
    majorationRetard: "/simulateurs/majoration-retard",
    pensionVieillesseAnticipee: "/simulateurs/pension-vieillesse-anticipee",
    pensionSurvivantsConjoints: "/simulateurs/pension-survivants-conjoints",
    pensionSurvivantsEnfants: "/simulateurs/pension-survivants-enfants",
    allocationSurvivants: "/simulateurs/allocation-survivants",
    pension: "/simulateurs/pension",
  },

  legal: {
    mentionsLegales: "/mentions-legales",
    politiqueConfidentialite: "/politique-confidentialite",
    cgu: "/cgu",
    cookies: "/cookies",
  },
} as const;

export function actualiteDetailRoute(slug: string) {
  return `/actualites/${slug}`;
}

// Routes destinées à être indexées (sitemap) — délibérément explicite plutôt que
// dérivée automatiquement de ROUTES : toutes les routes ne doivent pas être
// indexées (ex. /recherche, exclue via robots.ts).
export const SITEMAP_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.aPropos,
  ROUTES.organesDeGouvernance,
  ROUTES.actualites,
  ROUTES.bibliotheque,
  ROUTES.mediatheque,
  ROUTES.contact,

  ...Object.values(ROUTES.recouvrement),
  ...Object.values(ROUTES.prestations),
  ...Object.values(ROUTES.simulateurs),
  ...Object.values(ROUTES.legal),
];
