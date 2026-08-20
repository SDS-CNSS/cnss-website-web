/**
 * Formatage des montants FCFA affichés aux visiteurs des simulateurs.
 * `toLocaleString("fr-FR")` insère une espace fine insécable (U+202F) comme
 * séparateur de milliers, invisible ou confuse selon police/OS. On force ici
 * une espace normale, lisible partout.
 */
export function formatMontant(montant: number): string {
  return Math.round(montant)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatFCFA(montant: number): string {
  return `${formatMontant(montant)} FCFA`;
}
