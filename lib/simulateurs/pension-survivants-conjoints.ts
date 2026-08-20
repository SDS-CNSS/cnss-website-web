/**
 * Pension de survivants — cas des conjoints (art. 96 Code de Sécurité
 * Sociale). Formule et règles de répartition détaillées dans
 * CLAUDE.md (repo cnss-website-cms, section 5bis).
 */

export const TAUX_PENSION_CONJOINT_SURVIVANT = 40; // % de la pension de l'assuré décédé

export interface PensionSurvivantsConjointsResult {
  pensionAssure: number;
  nombreConjoints: number;
  tauxApplique: number;
  montantParConjoint: number;
}

/**
 * Arrondi à la centaine de FCFA supérieure (pas au plus proche) — confirmé
 * contre le site CNSS Bénin en production : 40 000 × 40% / 3 = 5 333,33 →
 * 5 400, pas 5 300. Même règle que `calculerPensionSurvivantsEnfantsMultiples`.
 */
export function calculerPensionSurvivantsConjoints(
  pensionAssure: number,
  nombreConjoints: number,
): PensionSurvivantsConjointsResult {
  const montantParConjoint =
    Math.ceil((pensionAssure * (TAUX_PENSION_CONJOINT_SURVIVANT / 100)) / nombreConjoints / 100) * 100;

  return {
    pensionAssure,
    nombreConjoints,
    tauxApplique: TAUX_PENSION_CONJOINT_SURVIVANT,
    montantParConjoint,
  };
}
