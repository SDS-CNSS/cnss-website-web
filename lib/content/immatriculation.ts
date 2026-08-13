import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const immatriculationContent: MetierPageContent = {
  id: "immatriculation",
  slug: "immatriculation",
  updatedAt: "2026-08-13",
  seo: {
    metaTitle: "Immatriculation | CNSS Bénin",
    metaDescription:
      "Toutes les démarches d'immatriculation à la CNSS : employeurs du secteur privé, employeurs de gens de maison et assurance volontaire.",
  },
  banner: {
    title: "Immatriculation",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Immatriculation" }],
  },
  heroImage: {
    url: "/images/immatriculation-hero.png",
    alt: "Agent CNSS accueillant un assuré au guichet",
  },
  sidebarNav: [
    { id: "obligations-legales", label: "Obligations légales" },
    { id: "employeur-secteur-prive", label: "Employeur du secteur privé" },
    { id: "employeur-gens-de-maison", label: "Employeur de gens de maison" },
    { id: "assurance-volontaire", label: "Assurance volontaire" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "obligations-legales",
      number: "1",
      title: "Obligations légales",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "L'immatriculation à la CNSS est une obligation légale. Toute entreprise assujettie au régime de sécurité sociale doit être immatriculée avant l'embauche de son premier salarié — la Caisse lui délivre alors un numéro d'immatriculation à rappeler dans toutes ses correspondances.",
            },
            {
              type: "paragraph",
              text: "L'employeur est défini comme toute personne physique ou morale, privée ou publique, qui utilise un ou plusieurs travailleurs contre rémunération. Dès l'ouverture de son entreprise ou à l'embauche du premier salarié, il doit matérialiser son existence par cette immatriculation, dans l'intérêt de ses travailleurs comme dans le sien.",
            },
          ],
        },
      ],
    },
    {
      id: "employeur-secteur-prive",
      number: "2",
      title: "Employeur du secteur privé",
      variant: "white",
      subsections: [
        {
          title: "Formalités à l'APIEx / monentreprise.bj",
          blocks: [
            {
              type: "paragraph",
              text: "Depuis la dématérialisation de la création d'entreprise, tout promoteur peut créer son entreprise en ligne via la plateforme monentreprise.bj, gérée par l'APIEx (Agence de Promotion des Investissements et des Exportations). Cette démarche unique permet d'obtenir le RCCM, l'IFU, la notification du numéro employeur CNSS et la carte professionnelle ou d'importateur, en une seule procédure en ligne.",
            },
          ],
          link: {
            label: "Voir le détail du processus sur monentreprise.bj",
            href: "https://monentreprise.bj/",
          },
        },
        {
          title: "Déclaration d'embauchage (CNSS)",
          blocks: [
            {
              type: "paragraph",
              text: "Pour toute nouvelle embauche, l'employeur dépose un avis d'embauchage dans les 48 heures, accompagné de :",
            },
            {
              type: "list",
              items: [
                "2 photos d'identité récentes du travailleur (nom, prénom et raison sociale de l'employeur au verso)",
                "une copie légalisée de la carte nationale d'identité ou du passeport (carte de résident pour les étrangers)",
                "une copie légalisée de l'acte de naissance ou du jugement supplétif",
                "l'acte de mariage, pour les femmes mariées",
              ],
            },
          ],
          alerts: [
            {
              title: "Travailleur déjà assuré",
              description: "Rattachement simple à son nouvel employeur (prise en charge).",
            },
            {
              title: "Travailleur jamais assuré",
              description: "Un nouveau numéro est attribué, la carte d'assurance éditée après validation.",
            },
          ],
        },
        {
          title: "Débauchage",
          blocks: [
            {
              type: "paragraph",
              text: "En cas de départ d'un salarié, l'employeur adresse un avis de débauchage à l'agence CNSS la plus proche, dûment rempli et signé, dans les 48 heures suivant le départ. L'avis doit préciser :",
            },
            {
              type: "list",
              items: [
                "le nom ou la raison sociale de l'employeur et son numéro",
                "le numéro d'affiliation du travailleur",
                "la date de débauchage",
                "le nom, prénoms, cachet et signature de l'employeur",
              ],
            },
            {
              type: "paragraph",
              text: "Une lettre de licenciement, de démission ou tout courrier de l'employeur peut être joint, le cas échéant.",
            },
          ],
        },
      ],
    },
    {
      id: "employeur-gens-de-maison",
      number: "3",
      title: "Employeur de gens de maison",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Tout employeur de personnel de maison doit également s'immatriculer à la CNSS. La demande peut se faire directement sur le portail national des services publics. Il lui est permis de faire :",
            },
            {
              type: "list",
              items: [
                "l'immatriculation",
                "L'embauchage d'un nouvel employé",
                "La déclaration et le paiement des cotisations",
                "Le débauchage d'un employé",
              ],
            },
          ],
          link: {
            label: "Accéder au service sur service-public.bj",
            href: "https://service-public.bj/public/services",
          },
        },
      ],
    },
    {
      id: "assurance-volontaire",
      number: "4",
      title: "Assurance volontaire",
      variant: "white",
      subsections: [
        {
          title: "Base légale",
          blocks: [
            {
              type: "paragraph",
              text: "« Toute personne qui, ayant été affiliée au régime général de sécurité sociale pendant au moins six (6) mois consécutifs, cesse de remplir les conditions d'assujettissement obligatoire, a la faculté de demeurer volontairement affiliée pour une durée limitée à la branche des pensions dans les conditions et modalités fixées par décret pris en Conseil des Ministres. »",
            },
          ],
        },
        {
          title: "Conditions",
          blocks: [
            {
              type: "list",
              items: [
                "Avoir été affilié au régime général pendant au moins 6 mois consécutifs",
                "Avoir cessé de remplir les conditions d'assujettissement obligatoire (perte d'emploi, cessation d'activité)",
                "La couverture est limitée à la branche des pensions (vieillesse, invalidité, décès)",
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
                "Certificat de cessation d'activité",
                "Les 3 dernières fiches de paie",
                "Le livret ou la carte d'assurance",
              ],
            },
          ],
        },
        {
          title: "Procédure après le débauchage",
          blocks: [
            {
              type: "paragraph",
              text: "Après son débauchage, l'assuré :",
            },
            {
              type: "list",
              items: [
                "Adresse au Président du Conseil d'Administration de la CNSS une demande de souscription à l'assurance volontaire, avec en pièces jointes le certificat de cessation de travail, les trois (3) dernières fiches de paie et le livret d'assurance ou la carte d'assurance ;",
                "Dépose son dossier au secrétariat ou au service compétent.",
              ],
            },
          ],
        },
        {
          title: "Délai de prescription",
          blocks: [
            {
              type: "paragraph",
              text: "L'assuré dispose de 6 semaines à compter de la fin de l'assurance obligatoire pour le dépôt du dossier. Au-delà de ce délai, une procédure de recours gracieux existe : l'assuré adresse une demande au Président du Conseil d'Administration de la CNSS pour une levée de prescription, examinée par la Commission Permanente du Conseil d'Administration.",
            },
          ],
        },
        {
          title: "Taux de cotisation",
          blocks: [
            {
              type: "paragraph",
              text: "Le taux de cotisation à l'assurance volontaire est de 10%, appliqué sur le salaire du dernier mois d'assujettissement à l'assurance obligatoire. Ce salaire ne peut en aucun cas être inférieur au Salaire Minimum Interprofessionnel Garanti (SMIG).",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "https://monentreprise.bj/", href: "https://monentreprise.bj/" },
      {
        label: "https://service-public.bj/public/services",
        href: "https://service-public.bj/public/services",
      },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: immatriculationContent,
};

export async function getImmatriculationContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
