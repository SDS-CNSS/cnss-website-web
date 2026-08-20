import type { ContactContent, ContactLocation } from "@/types/contact";

// --- Forme brute renvoyée par l'API Strapi (api::contact-page.contact-page) ---

interface StrapiContactLocation {
  id: number;
  label: string;
  isSiege: boolean;
  address: string;
  email: string;
  phone: string;
  postalBox: string;
}

export interface StrapiContactPage {
  seo: { metaTitle: string; metaDescription: string };
  bannerTitle: string;
  coordonneesTitle: string;
  locations: StrapiContactLocation[];
  formTitle: string;
  subjectPlaceholder: string;
  contactPointPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
}

function mapLocation(location: StrapiContactLocation): ContactLocation {
  return {
    id: String(location.id),
    label: location.label,
    isSiege: location.isSiege,
    address: location.address,
    email: location.email,
    phone: location.phone,
    postalBox: location.postalBox,
  };
}

export function mapContactPage(page: StrapiContactPage): ContactContent {
  return {
    seo: page.seo,
    banner: {
      title: page.bannerTitle,
      breadcrumbs: [{ label: "Accueil", href: "/" }, { label: page.bannerTitle }],
    },
    coordonnees: {
      title: page.coordonneesTitle,
      locations: page.locations.map(mapLocation),
    },
    form: {
      title: page.formTitle,
      subjectPlaceholder: page.subjectPlaceholder,
      contactPointPlaceholder: page.contactPointPlaceholder,
      messagePlaceholder: page.messagePlaceholder,
      submitLabel: page.submitLabel,
      submittingLabel: page.submittingLabel,
      successMessage: page.successMessage,
      errorMessage: page.errorMessage,
    },
  };
}
