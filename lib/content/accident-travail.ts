import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const accidentTravailContent: MetierPageContent = {
  id: "accident-travail",
  slug: "accident-travail",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Accident du travail | CNSS Bénin",
    metaDescription:
      "Définition, protection, démarches et prestations en cas d'accident du travail pour les travailleurs affiliés à la CNSS du Bénin.",
  },
  banner: {
    title: "Accident du travail",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Accident du travail" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Un travailleur béninois sur un chantier",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce qu'un accident du travail ?" },
    { id: "qui-est-protege", label: "Qui est protégé ?" },
    { id: "que-faire", label: "Que faire en cas d'accident ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce qu'un accident du travail ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "C'est un accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause, à tout travailleur relevant du régime général de sécurité sociale.",
            },
          ],
        },
        {
          title: "Également couverts",
          blocks: [
            {
              type: "list",
              items: [
                "Un accident survenu pendant un voyage professionnel dont les frais sont à la charge de l'employeur",
                "Un accident de trajet (résidence ↔ lieu de travail, ou trajet vers le lieu de repas habituel), à condition que le parcours n'ait pas été interrompu ou détourné pour un motif personnel",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "qui-est-protege",
      number: "2",
      title: "Qui est protégé ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Les travailleurs salariés",
                "Les fonctionnaires en position de détachement",
                "Les élèves des écoles techniques et professionnelles",
                "Les stagiaires et apprentis, même non rémunérés",
                "Les membres de sociétés coopératives de production et leurs gérants non salariés",
                "Les gérants de SARL ou de sociétés de personnes détenant au maximum 50% des parts sociales",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Cette liste est plus large qu'un simple salarié — elle inclut notamment les stagiaires et apprentis non rémunérés, un point souvent ignoré des employeurs.",
              variant: "info",
            },
          ],
        },
      ],
    },
    {
      id: "que-faire",
      number: "3",
      title: "Que faire en cas d'accident ?",
      variant: "tinted",
      subsections: [
        {
          title: "Ce que doit faire la victime",
          blocks: [
            {
              type: "list",
              items: [
                "Informer son employeur dans les 24h, sauf force majeure ou impossibilité absolue (même obligation pour les ayants droit en cas de décès)",
                "Respecter les prescriptions médicales",
              ],
            },
          ],
        },
        {
          title: "Ce que doit faire l'employeur",
          blocks: [
            {
              type: "list",
              items: [
                "Assurer les soins de première urgence",
                "Aviser le médecin de l'entreprise, s'il en existe un",
                "Évacuer la victime vers la formation sanitaire la plus proche",
                "Remettre à la victime une feuille d'accident du travail (imprimé CNSS), dûment remplie",
                "Déclarer l'accident à la CNSS dans les 48h suivant sa connaissance des faits",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Délai maximal de déclaration : 2 ans. Passé ce délai, la déclaration d'AT/MP est irrecevable.",
              variant: "warning",
            },
          ],
        },
      ],
    },
    {
      id: "droits",
      number: "4",
      title: "À quoi avez-vous droit ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "La réparation d'un accident du travail se traduit par deux types de prestations : des soins pris en charge, et une compensation financière.",
            },
          ],
        },
        {
          title: "Prestations en nature (les soins)",
          blocks: [
            {
              type: "list",
              items: [
                "Assistance médicale, chirurgicale et dentaire",
                "Examens radiologiques et analyses médicales",
                "Produits pharmaceutiques",
                "Prothèses et appareils d'orthopédie",
                "Réadaptation fonctionnelle, rééducation professionnelle et reclassement",
                "Transport de la victime",
                "Frais funéraires (en cas d'accident mortel)",
              ],
            },
          ],
          alerts: [
            {
              description: "Les soins de première urgence sont à la charge de l'employeur.",
              variant: "info",
            },
          ],
        },
        {
          title: "Prestations en espèces (compensation financière)",
        },
        {
          title: "Indemnité journalière",
          blocks: [
            {
              type: "paragraph",
              text: "Égale aux 2/3 du salaire journalier, versée dès le lendemain de l'accident et pendant 12 mois maximum. Au-delà de 360 jours d'incapacité temporaire, elle est remplacée par une rente provisoire jusqu'à la reprise du travail.",
            },
          ],
          alerts: [
            {
              description:
                "Elle est versée à l'employeur, qui continue de payer l'intégralité du salaire de la victime.",
              variant: "primary",
            },
          ],
        },
        {
          title: "Pièces à fournir",
          blocks: [
            {
              type: "list",
              items: [
                "Déclaration d'AT",
                "Certificat médical initial",
                "Volet n°1 de la feuille d'AT",
                "Certificat final descriptif",
              ],
            },
          ],
        },
        {
          title: "Incapacité Permanente Partielle (IPP)",
          blocks: [
            {
              type: "list",
              items: [
                "Si le taux d'incapacité est inférieur à 20% (< 20%) : Allocation à versement unique",
                "Si le taux d'incapacité est supérieur ou égal à 20% (≥ 20%) : Rente viagère",
              ],
            },
          ],
        },
        {
          title: "Pièces à fournir",
          blocks: [
            {
              type: "list",
              items: [
                "Certificat final descriptif",
                "Rapport d'expertise médicale",
                "PV d'enquête (Inspection du Travail)",
                "PV de police (si applicable)",
                "Relevé de salaire des 12 derniers mois",
                "Extrait d'acte de naissance",
                "Photo CNI",
                "2 photos d'identité",
              ],
            },
          ],
        },
        {
          title: "Rentes de survivants (en cas de décès de la victime)",
          blocks: [
            {
              type: "paragraph",
              text: "Réparties en pourcentage du salaire annuel, dans la limite de 85%.",
            },
          ],
        },
        {
          title: "Pièces à fournir (varient selon le bénéficiaire)",
          blocks: [
            {
              type: "list",
              items: [
                "Conjoint : acte de naissance, acte de mariage, acte de décès de la victime, certificat de non-divorce/non-remariage, certificat de cause de décès, photo CNI + photo d'identité",
                "Enfants : actes de naissance, acte de décès de la victime, PV du conseil de famille homologué, certificats de scolarité/apprentissage (jusqu'à 21 ans), certificat de vie et de charge",
                "Ascendants : acte de décès de la victime, acte de naissance, enquête sociale attestant la prise en charge par la victime",
              ],
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "https://cnss.bj/imprimes-cnss/", href: "https://cnss.bj/imprimes-cnss/" },
      { label: "Les maladies professionnelles", href: "/prestations/maladies-professionnelles" },
      { label: "La prévention des risques professionnels", href: "/prestations/prevention-risques-professionnels" },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: accidentTravailContent,
};

export async function getAccidentTravailContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
