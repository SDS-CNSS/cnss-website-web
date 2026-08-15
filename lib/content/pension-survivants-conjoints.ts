import type { Locale } from "@/i18n/routing";
import type { SimulateurPageContent } from "@/types/simulateur";

const pensionSurvivantsConjointsContent: SimulateurPageContent = {
  id: "pension-survivants-conjoints",
  slug: "pension-survivants-conjoints",
  seo: {
    metaTitle: "Simulation pension de survivants — cas des conjoints | CNSS Bénin",
    metaDescription:
      "Estimez la pension de survivants due aux conjoints à partir de la pension de vieillesse du décédé et du nombre de conjoints.",
  },
  banner: {
    title: "Pension de survivants / Cas des conjoints",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pension de survivants / Cas des conjoints" }],
  },
  // Items "Cotisations" en premier, puis "Prestations" (pension), conformément
  // à l'ordre déjà utilisé dans le méga-menu Simulateurs (voir navData.ts).
  sidebarNav: [
    { label: "Charges sociales liées à l'embauche", href: "/simulateurs/charges-sociales-embauche" },
    { label: "Calcul de la majoration de retard", href: "/simulateurs/majoration-retard" },
    { label: "Pension et allocation de vieillesse", href: "/simulateurs/pension" },
    { label: "Pension de vieillesse anticipée", href: "/simulateurs/pension-vieillesse-anticipee" },
    { label: "Pension de survivants / Cas des conjoints", href: "/simulateurs/pension-survivants-conjoints" },
    { label: "Pension de survivants / Cas des enfants", href: "/simulateurs/pension-survivants-enfants" },
    { label: "Allocation de survivants", href: "/simulateurs/allocation-survivants" },
  ],
  formTitle: "Pension de survivants / Cas des conjoints",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/bibliotheque",
  },
  fields: [
    {
      id: "pension_vieillesse_decede",
      label: "Pension de vieillesse du décédé",
      placeholder: "Entrez le montant en FCFA",
      type: "number",
    },
    {
      id: "nombre_conjoints_decede",
      label: "Nombre de conjoints du décédé",
      placeholder: "Entrez le nombre de conjoints",
      type: "number",
    },
  ],
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, SimulateurPageContent> = {
  fr: pensionSurvivantsConjointsContent,
};

export async function getPensionSurvivantsConjointsContent(locale: string): Promise<SimulateurPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
