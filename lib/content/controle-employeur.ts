import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const controleEmployeurContent: MetierPageContent = {
  id: "controle-employeur",
  slug: "controle-employeur",
  updatedAt: "2026-08-13",
  seo: {
    metaTitle: "Contrôle employeur | CNSS Bénin",
    metaDescription:
      "Rôle des contrôleurs et inspecteurs de la CNSS, contrôle de l'assiette des cotisations, des déclarations et des paiements, et mesures en cas d'irrégularités.",
  },
  banner: {
    title: "Contrôle employeur",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Contrôle employeur" }],
  },
  heroImage: {
    url: "/images/agence-siege.png",
    alt: "Un contrôleur CNSS échange avec un employeur autour de ses documents",
  },
  sidebarNav: [
    { id: "definition-controle", label: "Qu'est-ce que le contrôle des employeurs ?" },
    { id: "role-controleurs", label: "Rôle des contrôleurs et inspecteurs de la Caisse" },
    { id: "controle-assiette", label: "Contrôle de l'assiette des cotisations" },
    { id: "controle-declarations", label: "Contrôle des déclarations et paiement des cotisations" },
    { id: "mesures-irregularites", label: "Mesures en cas d'irrégularités" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition-controle",
      number: "1",
      title: "Qu'est-ce que le contrôle des employeurs ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le contrôle employeurs regroupe l'ensemble des mécanismes mis en place pour vérifier l'assiette des cotisations, l'immatriculation des employeurs, l'affiliation de tous les travailleurs, et le paiement des cotisations dans les délais prescrits.",
            },
            {
              type: "paragraph",
              text: "Le système de détermination des cotisations étant déclaratif, l'employeur affilie ses travailleurs et calcule lui-même les cotisations dues à la CNSS. Le contrôle est la contrepartie de ce système — il vise à garantir la sincérité et l'exactitude des déclarations, et l'équité entre tous les cotisants.",
            },
          ],
        },
      ],
    },
    {
      id: "role-controleurs",
      number: "2",
      title: "Rôle des contrôleurs et inspecteurs de la Caisse",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le rôle des contrôleurs et inspecteurs de la Caisse est de veiller à l'immatriculation de chaque employeur dès le début de ses activités et à l'affiliation de chaque travailleur à sa date effective d'embauchage.",
            },
            {
              type: "paragraph",
              text: "Tout employeur est tenu de recevoir et de communiquer aux contrôleurs et inspecteurs de la CNSS les documents nécessaires à l'exercice de leur mission.",
            },
          ],
        },
      ],
    },
    {
      id: "controle-assiette",
      number: "3",
      title: "Contrôle de l'assiette des cotisations",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le contrôle de l'assiette s'effectue en rapprochant le montant des rémunérations réellement versées aux travailleurs — relevé dans les documents comptables de l'employeur — du montant des salaires déclarés à la CNSS.",
            },
            {
              type: "paragraph",
              text: "Pour déterminer le montant réel des rémunérations, les contrôleurs exploitent :",
            },
            {
              type: "list",
              items: [
                "le registre des salaires",
                "les états financiers",
                "les autres documents comptables et administratifs de l'entreprise",
              ],
            },
            {
              type: "paragraph",
              text: "Le contrôle porte sur la déclaration de salaires et de cotisations, ainsi que sur la déclaration nominative du personnel, à fournir trimestriellement par les employeurs utilisant au moins vingt (20) salariés.",
            },
          ],
        },
      ],
    },
    {
      id: "controle-declarations",
      number: "4",
      title: "Contrôle des déclarations et paiement des cotisations",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Les contrôleurs et inspecteurs de la Caisse s'assurent que l'employeur a versé les cotisations dues à bonne date.",
            },
            {
              type: "paragraph",
              text: "En cas de non-respect des obligations légales, les contrôleurs appliquent les majorations de retard et le recouvrement forcé des cotisations.",
            },
          ],
        },
      ],
    },
    {
      id: "mesures-irregularites",
      number: "5",
      title: "Mesures en cas d'irrégularités",
      variant: "tinted",
      subsections: [
        {
          title: "Majoration de retard",
          blocks: [
            {
              type: "paragraph",
              text: "Lorsque les cotisations dues par un employeur n'ont pas été acquittées dans le délai prescrit, il est appliqué une majoration de retard dont le taux et le mode de calcul sont fixés par décret pris en Conseil des Ministres.",
            },
          ],
        },
        {
          title: "Privilège de la Caisse",
          blocks: [
            {
              type: "paragraph",
              text: "En cas de faillite ou de redressement judiciaire et liquidation des biens, le privilège s'exerce à compter de la date du jugement de faillite ou de celle admettant le débiteur au bénéfice de la liquidation judiciaire.",
            },
          ],
        },
        {
          title: "Mise en demeure",
          blocks: [
            {
              type: "paragraph",
              text: "Avant d'engager une action en recouvrement de cotisations ou de majorations de retard, le Directeur Général de la Caisse doit adresser, par lettre recommandée avec accusé de réception, une mise en demeure invitant l'employeur à régulariser sa situation dans un délai de quinze (15) jours.",
            },
          ],
        },
        {
          title: "Contrainte exécutoire",
          blocks: [
            {
              type: "paragraph",
              text: "Si la mise en demeure reste sans effet, le Directeur Général de la Caisse peut délivrer une contrainte qui est visée et rendue exécutoire par le président du tribunal compétent, laquelle contrainte comportant tous les effets d'un jugement est signifiée par lettre recommandée avec accusé de réception, par les agents assermentés de la Caisse ou par exploit d'huissier dont les frais sont à la charge du débiteur.",
            },
            {
              type: "paragraph",
              text: "Toutefois, l'exécution de la contrainte peut être interrompue par le recours introduit par le débiteur devant le tribunal compétent pour contester la réalité ou le montant de la dette dans un délai de huit (8) jours.",
            },
          ],
        },
        {
          title: "Astreinte",
          blocks: [
            {
              type: "paragraph",
              text: "Tout employeur qui ne se serait pas conformé à cette obligation [la déclaration nominative trimestrielle] doit payer à la Caisse, sous réserve des dispositions relatif à la mise en demeure, une astreinte prononcée par le juge des référés.",
            },
            {
              type: "paragraph",
              text: "L'astreinte […] est liquidée par le Directeur Général de la Caisse qui la recouvre dans les mêmes conditions que les cotisations.",
            },
          ],
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: controleEmployeurContent,
};

export async function getControleEmployeurContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
