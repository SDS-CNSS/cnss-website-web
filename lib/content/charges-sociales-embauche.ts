import type { Locale } from "@/i18n/routing";
import type { SimulateurPageContent } from "@/types/simulateur";

const chargesSocialesEmbaucheContent: SimulateurPageContent = {
  id: "charges-sociales-embauche",
  slug: "charges-sociales-embauche",
  seo: {
    metaTitle: "Simulation des charges sociales liées à l'embauche | CNSS Bénin",
    metaDescription:
      "Estimez les charges sociales liées à l'embauche à partir du taux de risque du secteur d'activité et du salaire brut.",
  },
  banner: {
    title: "Charges sociales liées à l'embauche",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Charges sociales liées à l'embauche" }],
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
  formTitle: "Charges sociales liées à l'embauche",
  infoBox: {
    title: "En savoir plus",
    text: "Pour comprendre la procédure de calcul,",
    linkLabel: "veuillez cliquer ici.",
    linkHref: "/recouvrement/declaration-paiement-cotisations",
  },
  fields: [
    {
      id: "taux_risque_secteur_activite",
      label: "Taux de risque du secteur d'activité",
      type: "select",
      options: ["1%", "2%", "3%", "4%"],
    },
    {
      id: "salaire_brut",
      label: "Salaire brut",
      placeholder: "Entrez le montant en FCFA",
      type: "number",
    },
  ],
  submitLabel: "Calculer",
  disclaimer: "* Ce simulateur fournit une estimation à titre indicatif uniquement, conformément aux dispositions légales en vigueur.",
};

const contentByLocale: Record<Locale, SimulateurPageContent> = {
  fr: chargesSocialesEmbaucheContent,
};

export async function getChargesSocialesEmbaucheContent(locale: string): Promise<SimulateurPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
