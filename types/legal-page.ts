import type { BreadcrumbItem } from "@/types/breadcrumb";

export interface LegalListItem {
  label?: string;
  text: string;
  href?: string;
}

export interface LegalBlock {
  type: "paragraph" | "list" | "paragraphWithLink";
  text?: string;
  items?: LegalListItem[];
  before?: string;
  linkText?: string;
  href?: string;
  after?: string;
}

export interface LegalSectionContent {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalPageContent {
  id: string;
  slug: string;
  updatedAt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  banner: {
    title: string;
    breadcrumbs: BreadcrumbItem[];
  };
  sidebarNav: { id: string; label: string }[];
  sections: LegalSectionContent[];
}
