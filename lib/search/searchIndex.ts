import type { SearchEntry } from "@/types/search";

import { getImmatriculationContent } from "@/lib/content/immatriculation";
import { getDeclarationPaiementCotisationsContent } from "@/lib/content/declaration-paiement-cotisations";
import { getControleEmployeurContent } from "@/lib/content/controle-employeur";

import { getAllocationsFamilialesContent } from "@/lib/content/allocations-familiales";
import { getAllocationsPrenatalesContent } from "@/lib/content/allocations-prenatales";
import { getCongeMaterniteContent } from "@/lib/content/conge-maternite";
import { getActionSanitaireSocialeContent } from "@/lib/content/action-sanitaire-sociale";
import { getMaladiesProfessionnellesContent } from "@/lib/content/maladies-professionnelles";
import { getAccidentTravailContent } from "@/lib/content/accident-travail";
import { getPensionSurvivantsContent } from "@/lib/content/pension-survivants";
import { getRemboursementCotisationsContent } from "@/lib/content/remboursement-cotisations";
import { getAllocationRemariageContent } from "@/lib/content/allocation-remariage";
import { getPensionsContent } from "@/lib/content/pensions";

import { getChargesSocialesEmbaucheContent } from "@/lib/content/charges-sociales-embauche";
import { getMajorationRetardContent } from "@/lib/content/majoration-retard";
import { getPensionVieillesseAnticipeeContent } from "@/lib/content/pension-vieillesse-anticipee";
import { getPensionSurvivantsConjointsContent } from "@/lib/content/pension-survivants-conjoints";
import { getPensionSurvivantsEnfantsContent } from "@/lib/content/pension-survivants-enfants";
import { getAllocationSurvivantsContent } from "@/lib/content/allocation-survivants";
import { getPensionContent } from "@/lib/content/pension";

import { getAProposContent } from "@/lib/content/a-propos";
import { getContactContent } from "@/lib/content/contact";
import { getOrganesDeGouvernanceContent } from "@/lib/content/organes-de-gouvernance";

import { getMentionsLegalesContent } from "@/lib/content/mentions-legales";
import { getPolitiqueConfidentialiteContent } from "@/lib/content/politique-confidentialite";
import { getCguContent } from "@/lib/content/cgu";
import { getCookiesContent } from "@/lib/content/cookies";

type SeoContent = { seo: { metaTitle: string; metaDescription: string } };

function toEntry(
  content: SeoContent,
  href: string,
  category: string,
): SearchEntry {
  return {
    title: content.seo.metaTitle.replace(/\s*\|\s*CNSS Bénin\s*$/, ""),
    description: content.seo.metaDescription,
    href,
    category,
  };
}

export async function getSearchIndex(locale: string): Promise<SearchEntry[]> {
  const [
    immatriculation,
    declarationCotisations,
    controleEmployeur,
    allocationsFamiliales,
    allocationsPrenatales,
    congeMaternite,
    actionSanitaireSociale,
    maladiesProfessionnelles,
    accidentTravail,
    pensionSurvivants,
    remboursementCotisations,
    allocationRemariage,
    pensions,
    chargesSocialesEmbauche,
    majorationRetard,
    pensionVieillesseAnticipee,
    pensionSurvivantsConjoints,
    pensionSurvivantsEnfants,
    allocationSurvivants,
    pension,
    aPropos,
    contact,
    organesDeGouvernance,
    mentionsLegales,
    politiqueConfidentialite,
    cgu,
    cookies,
  ] = await Promise.all([
    getImmatriculationContent(locale),
    getDeclarationPaiementCotisationsContent(locale),
    getControleEmployeurContent(locale),
    getAllocationsFamilialesContent(locale),
    getAllocationsPrenatalesContent(locale),
    getCongeMaterniteContent(locale),
    getActionSanitaireSocialeContent(locale),
    getMaladiesProfessionnellesContent(locale),
    getAccidentTravailContent(locale),
    getPensionSurvivantsContent(locale),
    getRemboursementCotisationsContent(locale),
    getAllocationRemariageContent(locale),
    getPensionsContent(locale),
    getChargesSocialesEmbaucheContent(locale),
    getMajorationRetardContent(locale),
    getPensionVieillesseAnticipeeContent(locale),
    getPensionSurvivantsConjointsContent(locale),
    getPensionSurvivantsEnfantsContent(locale),
    getAllocationSurvivantsContent(locale),
    getPensionContent(locale),
    getAProposContent(locale),
    getContactContent(locale),
    getOrganesDeGouvernanceContent(locale),
    getMentionsLegalesContent(locale),
    getPolitiqueConfidentialiteContent(locale),
    getCguContent(locale),
    getCookiesContent(locale),
  ]);

  return [
    {
      title: "Accueil",
      description:
        "Site officiel de la Caisse Nationale de Sécurité Sociale du Bénin (CNSS) : recouvrement, prestations, simulateurs et actualités.",
      href: "/",
      category: "Pages",
    },
    toEntry(immatriculation, "/recouvrement/immatriculation", "Recouvrement"),
    toEntry(
      declarationCotisations,
      "/recouvrement/declaration-paiement-cotisations",
      "Recouvrement",
    ),
    toEntry(
      controleEmployeur,
      "/recouvrement/controle-employeur",
      "Recouvrement",
    ),

    toEntry(
      allocationsFamiliales,
      "/prestations/allocations-familiales",
      "Prestations",
    ),
    toEntry(
      allocationsPrenatales,
      "/prestations/allocations-prenatales",
      "Prestations",
    ),
    toEntry(congeMaternite, "/prestations/conge-maternite", "Prestations"),
    toEntry(
      actionSanitaireSociale,
      "/prestations/action-sanitaire-sociale",
      "Prestations",
    ),
    toEntry(
      maladiesProfessionnelles,
      "/prestations/maladies-professionnelles",
      "Prestations",
    ),
    toEntry(accidentTravail, "/prestations/accident-travail", "Prestations"),
    toEntry(
      pensionSurvivants,
      "/prestations/pension-survivants",
      "Prestations",
    ),
    toEntry(
      remboursementCotisations,
      "/prestations/remboursement-cotisations",
      "Prestations",
    ),
    toEntry(
      allocationRemariage,
      "/prestations/allocation-remariage",
      "Prestations",
    ),
    toEntry(pensions, "/prestations/pensions", "Prestations"),

    toEntry(
      chargesSocialesEmbauche,
      "/simulateurs/charges-sociales-embauche",
      "Simulateurs",
    ),
    toEntry(majorationRetard, "/simulateurs/majoration-retard", "Simulateurs"),
    toEntry(
      pensionVieillesseAnticipee,
      "/simulateurs/pension-vieillesse-anticipee",
      "Simulateurs",
    ),
    toEntry(
      pensionSurvivantsConjoints,
      "/simulateurs/pension-survivants-conjoints",
      "Simulateurs",
    ),
    toEntry(
      pensionSurvivantsEnfants,
      "/simulateurs/pension-survivants-enfants",
      "Simulateurs",
    ),
    toEntry(
      allocationSurvivants,
      "/simulateurs/allocation-survivants",
      "Simulateurs",
    ),
    toEntry(pension, "/simulateurs/pension", "Simulateurs"),

    toEntry(aPropos, "/a-propos", "Pages"),
    {
      title: "Actualités",
      description:
        "Toutes les actualités, communiqués et événements de la Caisse Nationale de Sécurité Sociale du Bénin.",
      href: "/actualites",
      category: "Pages",
    },
    {
      title: "Bibliothèque",
      description:
        "Formulaires, attestations et documents utiles de la Caisse Nationale de Sécurité Sociale du Bénin.",
      href: "/bibliotheque",
      category: "Pages",
    },
    {
      title: "Médiathèque",
      description:
        "Photos et vidéos des événements et actions de la Caisse Nationale de Sécurité Sociale du Bénin.",
      href: "/mediatheque",
      category: "Pages",
    },
    toEntry(contact, "/contact", "Pages"),
    toEntry(organesDeGouvernance, "/organes-de-gouvernance", "Pages"),

    toEntry(mentionsLegales, "/mentions-legales", "Pages légales"),
    toEntry(
      politiqueConfidentialite,
      "/politique-confidentialite",
      "Pages légales",
    ),
    toEntry(cgu, "/cgu", "Pages légales"),
    toEntry(cookies, "/cookies", "Pages légales"),
  ];
}
