import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const organesDeGouvernanceContent: MetierPageContent = {
  id: "organes-de-gouvernance",
  slug: "organes-de-gouvernance",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Organes de gouvernance | CNSS Bénin",
    metaDescription:
      "Découvrez la gouvernance de la CNSS Bénin : le Conseil d'Administration, l'Administration Centrale et les Agences Régionales.",
  },
  banner: {
    title: "Organes de gouvernance",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Organes de gouvernance" }],
  },
  sidebarNav: [
    { id: "conseil-administration", label: "Conseil d'Administration" },
    { id: "administration-centrale", label: "Administration Centrale" },
    { id: "agences-regionales", label: "Agences Régionales" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "conseil-administration",
      number: "1",
      title: "Conseil d'Administration",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le conseil d'administration de la Caisse est investi des pouvoirs les plus étendus dans la limite de l'objet social.",
            },
            {
              type: "paragraph",
              text: "Le conseil d'administration comprend neuf membres répartis comme suit :",
            },
            {
              type: "list",
              items: [
                "trois (3) représentants des travailleurs",
                "trois (3) représentants des employeurs",
                "trois (3) représentants de l'État émanant des Ministres chargés des finances, de la sécurité sociale et de la santé",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "administration-centrale",
      number: "2",
      title: "Administration Centrale",
      variant: "white",
      subsections: [
        {
          title: "La Direction Générale",
          blocks: [
            {
              type: "paragraph",
              text: "Elle est chargée de la coordination de toutes les activités de l'institution. À cet effet, elle s'appuie sur 8 structures et sept (07) directions techniques.",
            },
          ],
        },
        {
          title: "Les structures rattachées à la Direction Générale",
          blocks: [
            {
              type: "definitionList",
              definitions: [
                {
                  term: "2 Assistants du DG",
                  description:
                    "L'un chargé de l'exploitation et coordination des agences ; l'autre chargé de la coordination et du suivi des projets.",
                },
                {
                  term: "Bureau Relations Clients (BRC)",
                  description:
                    "Coordonné par l'Assistant chargé des agences, elle accueille et renseigne les usagers-clients. Elle peut connaître de tous dossiers, réclamations et plaintes, et s'enquiert des suites auprès de toutes les structures.",
                },
                {
                  term: "Cellule de Contrôle des Marchés Publics (CCMP)",
                  description:
                    "Elle étudie et valide les plans de passation des marchés publics, établit les rapports trimestriels/annuels de contrôle.",
                },
                {
                  term: "Personne Responsable des Marchés Publics (PRMP)",
                  description:
                    "Assure les procédures de passation et d'exécution des marchés publics, du choix de la procédure jusqu'à l'approbation du marché définitif.",
                },
                {
                  term: "Cellule des Affaires Juridiques (CAJ)",
                  description:
                    "Elle est chargée de donner ses avis sur toutes les questions d'ordre juridique et de défendre les intérêts de la CNSS dans toutes les affaires contentieuses.",
                },
                {
                  term: "La Cellule du Médecin Conseil (CMC)",
                  description: "Elle est chargée de conseiller le Directeur Général dans le domaine de la santé.",
                },
                {
                  term: "La Cellule des Relations publiques et de la Communication (CRPC)",
                  description:
                    "Elle est chargée entre autres fonctions, d'élaborer les supports d'informations, d'assurer l'information du personnel sur toute question nécessitant sa mobilisation et de préparer les missions à l'intérieur et à l'extérieur du pays.",
                },
                {
                  term: "La Cellule des Etudes et de la Coopération (CEC)",
                  description:
                    "La Cellule des Etudes et de la Coopération est chargée d'assurer les études de toute nature et, entre autres, d'assurer les relations de coopération technique en matière de sécurité sociale.",
                },
              ],
            },
          ],
        },
        {
          title: "Les Directions techniques",
          blocks: [
            {
              type: "definitionList",
              definitions: [
                {
                  term: "Direction des Ressources Humaines (DRH)",
                  description: "Elle est chargée de la gestion des ressources humaines et de la solde du personnel.",
                },
                {
                  term: "Direction du Budget et du Patrimoine (DBP)",
                  description:
                    "Elle est chargée de l'élaboration et de l'exécution du budget de la CNSS, de l'approvisionnement en matériel et de la gestion immobilière.",
                },
                {
                  term: "Direction de l'Audit Interne et de l'Inspection (DAI)",
                  description:
                    "Elle est chargée du contrôle a posteriori de toutes les structures de la CNSS, de l'analyse des réclamations des employeurs et des assurés sociaux. Elle procède aux vérifications et aux enquêtes en cas de malversations ou faits assimilés commis par des tiers ou des Agents de la Caisse.",
                },
                {
                  term: "Direction du Recouvrement (DR)",
                  description:
                    "Elle s'occupe de l'immatriculation des Employeurs, de l'affiliation des travailleurs, du recouvrement des cotisations sociales, de la gestion de la carrière des travailleurs et de la gestion des comptes cotisants.",
                },
                {
                  term: "Direction des Prestations (DP)",
                  description:
                    "Elle s'occupe de la gestion de toutes les branches de prestations, de la gestion de la carrière des travailleurs affiliés et de la prévention des risques professionnels.",
                },
                {
                  term: "Direction Financière et Comptable (DFC)",
                  description:
                    "Elle a pour attribution la tenue de la comptabilité, la gestion de la trésorerie et des placements et le paiement des dépenses techniques et administratives.",
                },
                {
                  term: "Direction des Systèmes d'Information (DSI)",
                  description:
                    "Elle met en œuvre la politique de la CNSS en matière d'organisation, d'informatisation des Services et de gestion des archives.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "agences-regionales",
      number: "3",
      title: "Les Agences Régionales",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Elles sont au nombre de six (06) et se répartissent sur le territoire national comme suit :",
            },
            {
              type: "list",
              items: [
                "Agence de Cotonou",
                "Agence de Porto-Novo",
                "Agence de Lokossa",
                "Agence d'Abomey",
                "Agence de Parakou",
                "Agence de Natitingou",
              ],
            },
            {
              type: "paragraph",
              text: "Elles :",
            },
            {
              type: "orderedList",
              items: [
                "sont compétentes pour le recouvrement des cotisations et la délivrance des attestations d'immatriculation et de paiement des cotisations",
                "reçoivent et liquident tous les dossiers de prestations à court terme",
                "reçoivent, étudient et transmettent les dossiers de prestations à long terme à la Direction des Prestations à Cotonou et",
                "sont chargées du paiement de toutes les prestations",
              ],
            },
          ],
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: organesDeGouvernanceContent,
};

export async function getOrganesDeGouvernanceContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
