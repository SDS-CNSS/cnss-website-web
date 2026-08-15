import type { BreadcrumbItem } from "@/types/breadcrumb";

export interface SimulateurSidebarItem {
  label: string;
  href: string;
}

export interface SimulateurBanner {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface SimulateurInfoBoxContent {
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
}

export type SimulateurFieldContent =
  | {
      id: string;
      label: string;
      placeholder: string;
      type: "number" | "text";
    }
  | {
      id: string;
      label: string;
      type: "select";
      options: string[];
    };

export interface SimulateurPageBase {
  id: string;
  slug: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  banner: SimulateurBanner;
  sidebarNav: SimulateurSidebarItem[];
  formTitle: string;
  infoBox: SimulateurInfoBoxContent;
  submitLabel: string;
  disclaimer: string;
}

export interface SimulateurPageContent extends SimulateurPageBase {
  fields: SimulateurFieldContent[];
}

export interface MajorationRetardPageContent extends SimulateurPageBase {
  periodeLabel: string;
  periodeOptions: { id: string; label: string; value: "mensuel" | "trimestriel" }[];
  moisAnneeField: { label: string; placeholder: string };
  trimestreField: { label: string; options: { value: string; label: string }[] };
  anneeField: { label: string; placeholder: string };
  cotisationDueField: { label: string; labelSuffixMensuel: string; labelSuffixTrimestriel: string; placeholder: string };
  datePaiementField: { label: string; placeholder: string };
}

export interface PensionVieillesseAnticipeePageContent extends SimulateurPageBase {
  ageLabel: string;
  ageOptions: { id: string; label: string; value: number }[];
  rmmField: { label: string; placeholder: string };
  moisAssuranceField: { label: string; placeholder: string };
}

export interface PensionSurvivantsEnfantsPageContent extends SimulateurPageBase {
  pensionVieillesseField: { label: string; placeholder: string };
  nombreOrphelinsMineursField: { label: string; placeholder: string };
  orphelinPereMereLabel: string;
  orphelinPereMereOptions: { id: string; label: string; value: "oui" | "non" }[];
  nombreOrphelinsPrisEnCompteField: { label: string; placeholder: string };
}
