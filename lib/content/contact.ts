import type { Locale } from "@/i18n/routing";
import type { ContactContent } from "@/types/contact";

const contactContent: ContactContent = {
  seo: {
    metaTitle: "Contactez-nous | CNSS Bénin",
    metaDescription:
      "Contactez la Caisse Nationale de Sécurité Sociale du Bénin : coordonnées du siège et des agences régionales, ou écrivez-nous directement via le formulaire.",
  },
  banner: {
    title: "Contactez-nous",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Contactez-nous" }],
  },
  coordonnees: {
    title: "Coordonnées",
    locations: [
      {
        id: "direction-generale",
        label: "Direction Générale",
        isSiege: true,
        address: "390, Avenue Jean-Paul II",
        email: "info@cnss.bj",
        phone: "(+229) 01 90 19 00 00",
        postalBox: "01 BP 374 Cadjèhoun - Cotonou",
      },
      {
        id: "agence-cotonou",
        label: "Agence de Cotonou",
        isSiege: false,
        address: "Akpakpa, en face du stade René Pleven",
        email: "info@cnss.bj",
        phone: "(+229) 01 21 33 11 33",
        postalBox: "-",
      },
      {
        id: "agence-lokossa",
        label: "Agence de Lokossa",
        isSiege: false,
        address: "Quartier Guinkomey",
        email: "info@cnss.bj",
        phone: "(+229) 01 22 41 11 41",
        postalBox: "BP 52",
      },
      {
        id: "agence-porto-novo",
        label: "Agence de Porto-Novo",
        isSiege: false,
        address: "En face de BIBE",
        email: "info@cnss.bj",
        phone: "(+229) 01 20 21 11 33",
        postalBox: "BP 87",
      },
      {
        id: "agence-abomey",
        label: "Agence d'Abomey",
        isSiege: false,
        address: "Place GOHO",
        email: "info@cnss.bj",
        phone: "(+229) 01 22 50 03 98",
        postalBox: "BP 140",
      },
      {
        id: "agence-parakou",
        label: "Agence de Parakou",
        isSiege: false,
        address: "Quartier Tranza, route de Kandi",
        email: "info@cnss.bj",
        phone: "(+229) 01 23 61 03 74",
        postalBox: "BP 159",
      },
      {
        id: "agence-natitingou",
        label: "Agence de Natitingou",
        isSiege: false,
        address: "Non loin de la poste Natitingou",
        email: "info@cnss.bj",
        phone: "(+229) 01 23 82 13 04",
        postalBox: "BP 29",
      },
    ],
  },
  form: {
    title: "Écrivez-nous",
    subjectPlaceholder: "Recouvrement, Prestation, Délivrance attestation, ...",
    contactPointPlaceholder: "Siège, Agence de Natitingou",
    messagePlaceholder: "Décrivez ce dont vous voulez nous parler avec le plus de détails",
    submitLabel: "Soumettre",
    submittingLabel: "Envoi en cours...",
    successMessage: "Votre message a bien été envoyé. Notre équipe vous répondra dans les meilleurs délais.",
    errorMessage: "Merci de renseigner tous les champs obligatoires avant de soumettre le formulaire.",
  },
};

const contentByLocale: Record<Locale, ContactContent> = {
  fr: contactContent,
};

export async function getContactContent(locale: string): Promise<ContactContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
