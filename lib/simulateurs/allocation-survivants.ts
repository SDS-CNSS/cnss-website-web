/**
 * Allocation de survivants (art. 96 Code de Sécurité Sociale) — versée
 * quand l'assuré décédé avait moins de 180 mois d'assurance (sinon c'est la
 * pension de survivants, voir pension-survivants-conjoints.ts /
 * pension-survivants-enfants.ts). Détails dans CLAUDE.md (repo
 * cnss-website-cms, section 5quater).
 *
 * Montant total = RMM × taux de validation de base (30%, même taux que la
 * pension, art. 95) × nombre de périodes de 6 mois d'assurance accomplies
 * (périodes incomplètes ignorées) — confirmé contre le site CNSS Bénin en
 * production (RMM 4 346 000, 150 mois → 25 périodes × 30% = 7,5 →
 * 32 595 000 FCFA). Pas de répartition par bénéficiaire dans ce simulateur
 * — seul le montant total est affiché.
 */

export const PERIODE_ALLOCATION_SURVIVANTS_MOIS = 6;
export const TAUX_VALIDATION_BASE = 30; // % — même taux de base que la pension (art. 95)

export interface AllocationSurvivantsResult {
  rmm: number;
  moisAssurance: number;
  periodesAccomplies: number;
  tauxApplique: number;
  montantTotal: number;
}

export function calculerAllocationSurvivants(rmm: number, moisAssurance: number): AllocationSurvivantsResult {
  const periodesAccomplies = Math.floor(moisAssurance / PERIODE_ALLOCATION_SURVIVANTS_MOIS);
  const montantTotal = Math.round(rmm * (TAUX_VALIDATION_BASE / 100) * periodesAccomplies);

  return {
    rmm,
    moisAssurance,
    periodesAccomplies,
    tauxApplique: TAUX_VALIDATION_BASE,
    montantTotal,
  };
}
