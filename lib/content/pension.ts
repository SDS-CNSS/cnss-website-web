import type { Locale } from "@/i18n/routing";
import type { SimulateurPageContent } from "@/types/simulateur";

const pensionContent: SimulateurPageContent = {
  id: "pension",
  slug: "pension",
  seo: {
    metaTitle: "Simulation pension et allocation de vieillesse | CNSS Bénin",
    metaDescription:
      "Estimez votre pension et allocation de vieillesse à partir de votre rémunération moyenne mensuelle et de votre nombre de mois d'assurance.",
  },
  banner: {
    title: "Pension et allocation de vieillesse",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pension et allocation de vieillesse" }],
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
  formTitle: "Pension et allocation de vieillesse",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre le mécanisme de calcul,",
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
      id: "moisAssurance",
      label: "Nombre de mois d'assurance",
      placeholder: "Entrez le nombre de mois",
      type: "number",
    },
  ],
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, SimulateurPageContent> = {
  fr: pensionContent,
};

export async function getPensionContent(locale: string): Promise<SimulateurPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
