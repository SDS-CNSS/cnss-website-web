import type { BreadcrumbItem } from "./breadcrumb";
import type { RichContentBlock } from "./rich-content";
import type { TimelineEvent } from "./timeline";

export interface AProposContent {
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
  mission: {
    title: string;
    content: RichContentBlock[];
    image: { url: string; alt: string };
  };
  gouvernance: {
    title: string;
    content: RichContentBlock[];
    cta: { label: string; href: string };
  };
  histoire: {
    title: string;
    description: string;
    image: { url: string; alt: string };
    timeline: TimelineEvent[];
  };
  cta: {
    title: string;
    description: string;
    image: { url: string; alt: string };
    button: { label: string; href: string };
  };
}
