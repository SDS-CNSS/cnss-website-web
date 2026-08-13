import { File, FileImage, type LucideIcon } from "lucide-react";

export type MegaMenuColumn = {
  icon: string;
  titleKey: string;
  href?: string;
  links?: { labelKey: string; href: string }[];
};

export type MegaMenuTab = {
  key: string;
  labelKey: string;
  columns: MegaMenuColumn[];
};

export const METIERS_TABS: MegaMenuTab[] = [
  {
    key: "recouvrement",
    labelKey: "tabs.recouvrement.label",
    columns: [
      {
        icon: "/images/icon-immatriculation.png",
        titleKey: "tabs.recouvrement.immatriculation",
        href: "/recouvrement/immatriculation",
      },
      {
        icon: "/images/icon-declaration-cotisations.png",
        titleKey: "tabs.recouvrement.declaration",
        href: "/recouvrement/declaration-paiement-cotisations",
      },
      {
        icon: "/images/icon-controle-employeur.png",
        titleKey: "tabs.recouvrement.controle",
        href: "/recouvrement/controle-employeur",
      },
    ],
  },
  {
    key: "prestations",
    labelKey: "tabs.prestations.label",
    columns: [
      {
        icon: "/images/icon-prestations-familiales.png",
        titleKey: "tabs.prestations.familialesTitle",
        links: [
          { labelKey: "tabs.prestations.allocationsFamiliales", href: "/prestations/allocations-familiales" },
          { labelKey: "tabs.prestations.allocationsPrenatales", href: "/prestations/allocations-prenatales" },
          { labelKey: "tabs.prestations.congeMaternite", href: "/prestations/conge-maternite" },
          { labelKey: "tabs.prestations.actionSanitaire", href: "/prestations/action-sanitaire-sociale" },
        ],
      },
      {
        icon: "/images/icon-pensions.png",
        titleKey: "tabs.prestations.vieillesseTitle",
        links: [
          { labelKey: "tabs.prestations.pensions", href: "/prestations/pensions" },
          { labelKey: "tabs.prestations.pensionSurvivants", href: "/prestations/pension-survivants" },
          { labelKey: "tabs.prestations.remboursement", href: "/prestations/remboursement-cotisations" },
          { labelKey: "tabs.prestations.remariage", href: "/prestations/allocation-remariage" },
        ],
      },
      {
        icon: "/images/icon-accidents-travail.png",
        titleKey: "tabs.prestations.risquesTitle",
        links: [
          { labelKey: "tabs.prestations.accidentTravail", href: "/prestations/accident-travail" },
          { labelKey: "tabs.prestations.maladiesPro", href: "/prestations/maladies-professionnelles" },
        ],
      },
    ],
  },
];

export type SimulateurItem = {
  icon: string;
  labelKey: string;
  href: string;
};

export type SimulateurTab = {
  key: string;
  labelKey: string;
  items: SimulateurItem[];
};

export const SIMULATEURS_TABS: SimulateurTab[] = [
  {
    key: "cotisations",
    labelKey: "tabs.cotisations.label",
    items: [
      {
        icon: "/images/icon-charges-sociales-embauche.png",
        labelKey: "tabs.cotisations.chargesSociales",
        href: "/simulateurs/charges-sociales-embauche",
      },
      {
        icon: "/images/icon-majoration-retard.png",
        labelKey: "tabs.cotisations.majorationRetard",
        href: "/simulateurs/majoration-retard",
      },
    ],
  },
  {
    key: "pension",
    labelKey: "tabs.pension.label",
    items: [
      {
        icon: "/images/icon-pension-vieillesse.png",
        labelKey: "tabs.pension.vieillesse",
        href: "/simulateurs/pension",
      },
      {
        icon: "/images/icon-pension-vieillesse-anticipee.png",
        labelKey: "tabs.pension.vieillesseAnticipee",
        href: "/simulateurs/pension-vieillesse-anticipee",
      },
      {
        icon: "/images/icon-pension-survivants-conjoints.png",
        labelKey: "tabs.pension.survivantsConjoints",
        href: "/simulateurs/pension-survivants-conjoints",
      },
      {
        icon: "/images/icon-pension-survivants-enfants.png",
        labelKey: "tabs.pension.survivantsEnfants",
        href: "/simulateurs/pension-survivants-enfants",
      },
      {
        icon: "/images/icon-allocation-survivants.png",
        labelKey: "tabs.pension.allocationSurvivants",
        href: "/simulateurs/allocation-survivants",
      },
    ],
  },
];

export type RessourceItem = {
  icon: LucideIcon;
  labelKey: string;
  href: string;
};

export const RESSOURCES_ITEMS: RessourceItem[] = [
  { icon: File, labelKey: "bibliotheque", href: "/bibliotheque" },
  { icon: FileImage, labelKey: "mediatheque", href: "/mediatheque" },
];

export function isNavPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
