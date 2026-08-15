import type { RichContentBlock } from "@/types/rich-content";
import type { BreadcrumbItem } from "@/types/breadcrumb";

export interface SidebarNavItem {
  id: string;
  label: string;
}

export interface InfoAlertItem {
  title?: string;
  description: string;
  variant?: "info" | "warning" | "primary";
}

export interface RateCardItem {
  value: string;
  label: string;
  description: string;
}

export interface SectionSubcontent {
  title?: string;
  blocks?: RichContentBlock[];
  rates?: RateCardItem[];
  link?: { label: string; href: string };
  alerts?: InfoAlertItem[];
}

export interface MetierPageSection {
  id: string;
  number: string;
  title: string;
  variant: "tinted" | "white";
  subsections: SectionSubcontent[];
}

export interface MetierPageContent {
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
  heroImage?: {
    url: string;
    alt: string;
  };
  sidebarNav: SidebarNavItem[];
  helpCard: {
    title: string;
    cta: { label: string; href: string };
  };
  sections: MetierPageSection[];
  linksBox?: {
    title: string;
    links: { label: string; href: string }[];
  };
}
