import type { BreadcrumbItem } from "@/types/breadcrumb";
import type { RichContentBlock } from "@/types/rich-content";

export interface LegalSectionContent {
  id: string;
  title: string;
  blocks: RichContentBlock[];
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
