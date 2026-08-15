import type { Locale } from "@/i18n/routing";
import type { SimulateurPageContent } from "@/types/simulateur";

const allocationSurvivantsContent: SimulateurPageContent = {
  id: "allocation-survivants",
  slug: "allocation-survivants",
  seo: {
    metaTitle: "Simulation de l'allocation de survivants | CNSS Bénin",
    metaDescription:
      "Estimez l'allocation de survivants à partir de la rémunération moyenne mensuelle et du nombre de mois d'assurance.",
  },
  banner: {
    title: "Allocation de survivants",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Allocation de survivants" }],
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
  formTitle: "Allocation de survivants",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/bibliotheque",
  },
  fields: [
    {
      id: "rmm",
      label: "Rémunération Moyenne Mensuelle (RMM)",
      placeholder: "Entrez le montant en FCFA",
      type: "number",
    },
    {
      id: "nombre_mois_assurance",
      label: "Nombre de mois d'assurance",
      placeholder: "Entrez le nombre de mois",
      type: "number",
    },
  ],
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, SimulateurPageContent> = {
  fr: allocationSurvivantsContent,
};

export async function getAllocationSurvivantsContent(locale: string): Promise<SimulateurPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
