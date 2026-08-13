import type { BreadcrumbItem } from "./breadcrumb";

export interface ContactLocation {
  id: string;
  label: string;
  isSiege: boolean;
  address: string;
  email: string;
  phone: string;
  postalBox: string;
}

export interface ContactContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  banner: {
    title: string;
    breadcrumbs: BreadcrumbItem[];
  };
  coordonnees: {
    title: string;
    locations: ContactLocation[];
  };
  form: {
    title: string;
    subjectPlaceholder: string;
    contactPointPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
}
