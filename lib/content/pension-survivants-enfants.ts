import type { Locale } from "@/i18n/routing";
import type { PensionSurvivantsEnfantsPageContent } from "@/types/simulateur";

const pensionSurvivantsEnfantsContent: PensionSurvivantsEnfantsPageContent = {
  id: "pension-survivants-enfants",
  slug: "pension-survivants-enfants",
  seo: {
    metaTitle: "Simulation pension de survivants — cas des enfants | CNSS Bénin",
    metaDescription:
      "Estimez la pension de survivants due aux enfants orphelins à partir de la pension de vieillesse du décédé et du nombre d'orphelins mineurs.",
  },
  banner: {
    title: "Pension de survivants / Cas des enfants",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pension de survivants / Cas des enfants" }],
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
  formTitle: "Pension de survivants / Cas des enfants",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/bibliotheque",
  },
  pensionVieillesseField: {
    label: "Pension de vieillesse du décédé",
    placeholder: "Entrez le montant en FCFA",
  },
  nombreOrphelinsMineursField: {
    label: "Nombre d'orphelins mineurs (âge < 21 ans)",
    placeholder: "Entrez le nombre d'orphelins",
  },
  orphelinPereMereLabel: "Orphelin de père et de mère",
  orphelinPereMereOptions: [
    { id: "orphelin_pere_et_mere", label: "Oui", value: "oui" },
    { id: "orphelin_pere_ou_mere", label: "Non", value: "non" },
  ],
  nombreOrphelinsPrisEnCompteField: {
    label: "Nombre d'orphelins pris en compte dans la pension de survivants",
    placeholder: "Entrez le nombre d'orphelins",
  },
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, PensionSurvivantsEnfantsPageContent> = {
  fr: pensionSurvivantsEnfantsContent,
};

export async function getPensionSurvivantsEnfantsContent(
  locale: string,
): Promise<PensionSurvivantsEnfantsPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
