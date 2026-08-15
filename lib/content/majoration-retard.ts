import type { Locale } from "@/i18n/routing";
import type { MajorationRetardPageContent } from "@/types/simulateur";

const majorationRetardContent: MajorationRetardPageContent = {
  id: "majoration-retard",
  slug: "majoration-retard",
  seo: {
    metaTitle: "Simulation de la majoration de retard | CNSS Bénin",
    metaDescription:
      "Estimez la majoration de retard applicable à une cotisation due, mensuelle ou trimestrielle, en fonction de sa date de paiement.",
  },
  banner: {
    title: "Calcul de la majoration de retard",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Calcul de la majoration de retard" }],
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
  formTitle: "Calcul de la majoration de retard",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/recouvrement/declaration-paiement-cotisations",
  },
  periodeLabel: "Période due",
  periodeOptions: [
    { id: "type_periode_mensuel", label: "Mensuelle", value: "mensuel" },
    { id: "type_periode_trimestriel", label: "Trimestrielle", value: "trimestriel" },
  ],
  moisAnneeField: { label: "Mois/Année", placeholder: "Exemple : MM/YYYY" },
  trimestreField: {
    label: "Trimestre",
    options: [
      { value: "03", label: "1er trimestre" },
      { value: "06", label: "2ème trimestre" },
      { value: "09", label: "3ème trimestre" },
      { value: "12", label: "4ème trimestre" },
    ],
  },
  anneeField: { label: "Année", placeholder: "Exemple : 2000" },
  cotisationDueField: {
    label: "Cotisation due",
    labelSuffixMensuel: "mensuellement",
    labelSuffixTrimestriel: "trimestriellement",
    placeholder: "Exemple : 100000",
  },
  datePaiementField: { label: "Date paiement", placeholder: "Exemple : DD/MM/YYYY" },
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, MajorationRetardPageContent> = {
  fr: majorationRetardContent,
};

export async function getMajorationRetardContent(locale: string): Promise<MajorationRetardPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
