import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const maladiesProfessionnellesContent: MetierPageContent = {
  id: "maladies-professionnelles",
  slug: "maladies-professionnelles",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Maladies professionnelles | CNSS Bénin",
    metaDescription:
      "Définition, protection, démarches et prestations en cas de maladie professionnelle pour les travailleurs affiliés à la CNSS du Bénin.",
  },
  banner: {
    title: "Maladies professionnelles",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Maladies professionnelles" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce qu'une maladie professionnelle ?" },
    { id: "qui-est-protege", label: "Qui est protégé ?" },
    { id: "que-faire", label: "Que faire en cas de maladie professionnelle ?" },
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
      title: "Qu'est-ce qu'une maladie professionnelle ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "C'est une maladie contractée à l'occasion du travail. Cette maladie doit en principe figurer dans la nomenclature arrêtée par la législation de la sécurité sociale.",
            },
            {
              type: "paragraph",
              text: "Une maladie est dite « professionnelle » si elle est la conséquence directe de l'exposition habituelle d'un travailleur à un risque physique, chimique ou biologique, ou résulte des conditions dans lesquelles il exerce son activité professionnelle, et reconnue comme telle sur la liste légale nationale.",
            },
            {
              type: "paragraph",
              text: "Deux éléments caractérisent la maladie professionnelle :",
            },
            {
              type: "list",
              items: [
                "Le travailleur doit avoir été exposé au risque pendant une certaine période",
                "Le travailleur doit présenter les symptômes de la maladie dans un délai déterminé",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Les déclarations sont recevables même après que le travailleur ait cessé d'être exposé au risque, dans la limite des délais d'incubation prévus par les textes.",
              variant: "primary",
            },
          ],
        },
        {
          title: "La liste des maladies professionnelles",
          blocks: [
            {
              type: "paragraph",
              text: "La victime, ou ses ayants droit, doit établir qu'elle est atteinte de l'une des maladies inscrites sur la liste légale nationale, qu'elle exerce une activité susceptible, selon les tableaux, de causer la maladie en question, et que le délai d'incubation n'est pas dépassé.",
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
        },
      ],
    },
    {
      id: "que-faire",
      number: "3",
      title: "Que faire en cas de maladie professionnelle ?",
      variant: "tinted",
      subsections: [
        {
          title: "Ce que doit faire la victime",
          blocks: [
            {
              type: "list",
              items: [
                "Consulter son médecin qui, par un diagnostic détaillé, établit que la maladie dont elle souffre est bien une maladie professionnelle",
                "Déclarer la maladie professionnelle à la CNSS dans un délai de 15 jours à partir de la date de détection",
              ],
            },
          ],
          alerts: [
            {
              description: "La date de la première constatation de la maladie est assimilée à la date de l'accident.",
              variant: "primary",
            },
          ],
        },
        {
          title: "Ce que doit faire l'employeur",
          blocks: [
            {
              type: "list",
              items: [
                "Déclarer à la CNSS et à l'inspecteur du travail toute maladie qu'il estime avoir un caractère professionnel, même si elle ne figure pas sur la liste des maladies professionnelles",
                "Déclarer à la CNSS et à l'inspection du travail, avant le début des travaux, l'utilisation de tout produit susceptible de provoquer une maladie professionnelle",
              ],
            },
          ],
        },
        {
          title: "Pièces à fournir pour la déclaration",
          blocks: [
            {
              type: "list",
              items: [
                "Déclaration de maladie professionnelle",
                "Liste des maladies professionnelles",
                "Liste des Centres agréés",
                "Certificat médical à l'embauche",
                "Certificat médical de constatation de la maladie",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Traitement de la déclaration : dépôt de la déclaration, étude, avis du Médecin conseil, signature, puis délivrance de la prise en charge.",
              variant: "primary",
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
              text: "Conformément à l'article 88 de la loi n°98-019, les dispositions relatives aux accidents du travail sont applicables aux maladies professionnelles. La victime bénéficie donc des mêmes prestations en nature et prestations en espèces.",
            },
          ],
        },
        {
          title: "Prestations en nature (les soins)",
          blocks: [
            {
              type: "list",
              items: [
                "Frais médicaux, pharmaceutiques, d'hospitalisation et chirurgicaux",
                "Appareils de prothèse et d'orthopédie (fourniture, réparation, renouvellement)",
                "Réadaptation fonctionnelle",
                "Rééducation professionnelle et reclassement",
                "Frais funéraires et frais de transport du corps (en cas de décès)",
              ],
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
              text: "Elle correspond aux 2/3 du salaire journalier du travailleur. Elle est due pendant toute la durée de l'incapacité temporaire, dans la limite de douze (12) mois.",
            },
          ],
          alerts: [
            {
              description:
                "Elle est versée à l'employeur, qui continue de payer l'intégralité du salaire de la victime pendant cette période.",
              variant: "primary",
            },
          ],
        },
        {
          title: "Incapacité Permanente Partielle (IPP)",
          blocks: [
            {
              type: "list",
              items: [
                "Si le taux d'incapacité est inférieur à 20% (< 20%) : allocation d'incapacité versée en une seule fois",
                "Si le taux d'incapacité est supérieur ou égal à 20% (≥ 20%) : rente d'incapacité permanente",
              ],
            },
          ],
        },
        {
          title: "Rentes de survivants (en cas de décès de la victime)",
          blocks: [
            {
              type: "paragraph",
              text: "En cas de décès, une rente est attribuée aux survivants (conjoint, descendants et ascendants) :",
            },
            {
              type: "list",
              items: [
                "Conjoint survivant : 30% du salaire utile de la victime. En cas de remariage, il cesse d'avoir droit à la rente et reçoit à la place une allocation égale à six fois le montant de la rente mensuelle.",
                "Enfants : 15% du salaire annuel utile pour chacun des deux premiers enfants, 10% pour chaque enfant à charge supplémentaire",
                "Ascendants à charge : 10% du salaire annuel utile pour chacun",
              ],
            },
          ],
          alerts: [
            {
              description:
                "L'ensemble des rentes allouées aux ayants droit ne peut dépasser 85% du salaire annuel utile de la victime. Si le total dépasse ce plafond, les rentes de chaque catégorie sont réduites proportionnellement.",
              variant: "warning",
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
      { label: "L'accident du travail", href: "/prestations/accident-travail" },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: maladiesProfessionnellesContent,
};

export async function getMaladiesProfessionnellesContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
