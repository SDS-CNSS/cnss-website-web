import type { Locale } from "@/i18n/routing";
import type { PensionVieillesseAnticipeePageContent } from "@/types/simulateur";

const pensionVieillesseAnticipeeContent: PensionVieillesseAnticipeePageContent = {
  id: "pension-vieillesse-anticipee",
  slug: "pension-vieillesse-anticipee",
  seo: {
    metaTitle: "Simulation pension de vieillesse anticipée | CNSS Bénin",
    metaDescription:
      "Estimez votre pension de vieillesse anticipée à partir de l'âge de départ anticipé, de votre rémunération moyenne mensuelle et de votre nombre de mois d'assurance.",
  },
  banner: {
    title: "Pension de vieillesse anticipée",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pension de vieillesse anticipée" }],
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
  formTitle: "Pension de vieillesse anticipée",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/bibliotheque",
  },
  ageLabel: "Départ anticipé à l'âge de",
  ageOptions: [
    { id: "age_assure_59", label: "59", value: 59 },
    { id: "age_assure_58", label: "58", value: 58 },
    { id: "age_assure_57", label: "57", value: 57 },
    { id: "age_assure_56", label: "56", value: 56 },
    { id: "age_assure_55", label: "55", value: 55 },
  ],
  rmmField: {
    label: "Rémunération Moyenne Mensuelle (RMM)",
    placeholder: "Entrez le montant en FCFA",
  },
  moisAssuranceField: {
    label: "Nombre de mois d'assurance",
    placeholder: "Entrez le nombre de mois",
  },
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, PensionVieillesseAnticipeePageContent> = {
  fr: pensionVieillesseAnticipeeContent,
};

export async function getPensionVieillesseAnticipeeContent(
  locale: string,
): Promise<PensionVieillesseAnticipeePageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
