# CNSS — Architecture Next.js (phase 1)

> Ce document couvre uniquement la partie **Next.js** pour l'instant. La modélisation Strapi (`cnss-cms`) sera traitée dans un second temps, une fois les écrans implémentés — voir section 3.

## Référence Figma

- **Fichier** : Refonte Site Web CNSS
- **URL** : https://www.figma.com/design/SExPnKHUtgjX90HqfRd9KO/Refonte-Site-Web-CNSS
- **File key** : `SExPnKHUtgjX90HqfRd9KO`
- **Page de travail** : High-Fi wireframe (canvas `575:2724`) — contient les maquettes haute-fidélité à implémenter. La page "Low-Fi Wireframe" est hors périmètre.
- **Section des pages finales** : Pages (node `1556:4716`)
- **Page - Accueil** : node `1717:3824` → https://www.figma.com/design/SExPnKHUtgjX90HqfRd9KO/Refonte-Site-Web-CNSS?node-id=1717-3824

### Liste des pages Figma (section Pages)

**Recouvrement**
- Page - Immatriculation
- Page - Déclaration et paiement des cotisations
- Page - Contrôle Employeur

**Prestations**
- Page - allocation familiales
- Page - allocation prénatales
- Page - indemnité de congé de maternité
- Page - Action sanitaire et sociale
- Page - Maladies professionnelles
- Page - prévention des risques professionnels
- Page - Pension de survivants
- Page - remboursement des cotisations
- Page - allocation de remariage
- Page - Coordination
- Page - Pensions
- Page - accident de travail

> ⚠ **Pension d'invalidité** retirée temporairement du périmètre — à revoir plus tard.

**Pages principales**
- Page - Accueil
- Page Actualités
- Page Bibliothèque
- Page Médiatheque
- Page - Page detail d'un article
- Page - A-propos
- Page - contact

**Simulateurs**
- Page - Simulation charge social lié à l'embauche
- Page - Simulation Majoration de retard
- Page - Simulation Pension de vieillesse anticipée
- Page - Simulation Pension de survivants (cas des conjoints)
- Page - Simulation Pension de survivants (cas des enfants)
- Page - Simulation Allocation de survivants
- Page - Simulation Pension

**Pages légales**
- Page - Mentions légales
- Page - Politique de confidentialité
- Page - Conditions Générales d'Utilisation
- Page - Gestion des cookies

---

## Hypothèses de stack (à valider avant de coder)

- **Next.js 14+**, App Router, **TypeScript**
- **Tailwind CSS** pour le style (s'intègre bien avec le code généré depuis Figma)
- **pnpm** comme gestionnaire de paquets
- Site en **français uniquement** (pas de i18n prévu, à confirmer)
- **Deux repos séparés** — `cnss-web` (Next.js) et `cnss-cms` (Strapi, à traiter plus tard) — décidé, pas de monorepo.

Si l'une des autres hypothèses ne convient pas, on ajuste avant d'aller plus loin.

---

## Clarifications sur le périmètre

- **Remboursement des cotisations** et **Coordination** → confirmés dans **Prestations**, comme dans le périmètre d'origine. Pas de changement.
- **"Page Pension"** → n'est pas un doublon de "Page - Pensions" : c'est en fait "Page - Simulation Pension", classée dans les Simulateurs.

---

## 1. Structure des routes Next.js (App Router)

```
app/
├── page.tsx                                    # Accueil
├── actualites/
│   ├── page.tsx                                 # Liste des actualités
│   └── [slug]/page.tsx                          # Détail d'un article
├── bibliotheque/page.tsx
├── mediatheque/page.tsx
├── a-propos/page.tsx
├── contact/page.tsx
│
├── recouvrement/
│   ├── immatriculation/page.tsx
│   ├── declaration-paiement-cotisations/page.tsx
│   └── controle-employeur/page.tsx
│
├── prestations/
│   ├── allocations-familiales/page.tsx
│   ├── allocations-prenatales/page.tsx
│   ├── conge-maternite/page.tsx
│   ├── action-sanitaire-sociale/page.tsx
│   ├── maladies-professionnelles/page.tsx
│   ├── accident-travail/page.tsx
│   ├── prevention-risques-professionnels/page.tsx
│   ├── pension-survivants/page.tsx
│   ├── remboursement-cotisations/page.tsx
│   ├── allocation-remariage/page.tsx
│   ├── coordination/page.tsx
│   └── pensions/page.tsx
│
├── simulateurs/
│   ├── charges-sociales-embauche/page.tsx
│   ├── majoration-retard/page.tsx
│   ├── pension-vieillesse-anticipee/page.tsx
│   ├── pension-survivants-conjoints/page.tsx
│   ├── pension-survivants-enfants/page.tsx
│   ├── allocation-survivants/page.tsx
│   └── pension/page.tsx
│
├── mentions-legales/page.tsx
├── politique-confidentialite/page.tsx
├── cgu/page.tsx
└── cookies/page.tsx
```

---

## 2. Composants réutilisables

La plupart des pages "métier" (Recouvrement + Prestations) partagent probablement une structure commune. Plutôt que dupliquer le code page par page, prévoir dès le départ :

```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Nav.tsx
├── ui/                       # boutons, cards, badges, etc. (base réutilisable)
├── metier/                   # composants spécifiques aux pages métier (Recouvrement + Prestations)
│   ├── MetierHero.tsx
│   ├── ConditionsEligibilite.tsx
│   ├── DocumentsRequis.tsx
│   ├── EtapesProcess.tsx     # stepper (dépôt → traitement → notification)
│   └── FaqBlock.tsx
├── simulateur/
│   └── SimulateurForm.tsx    # base réutilisable, logique de calcul spécifique par simulateur
└── sections/                 # blocs composés pour Accueil, A-propos, etc.
```

**Workflow suggéré avec le MCP Figma** : génère d'abord 2-3 pages métier (ex: Immatriculation, Allocations familiales, Accident de travail) individuellement, puis factorise ce qui se répète en composants `metier/*` avant de faire les autres — plus efficace que de tout générer isolément.

---

## 3. Approche retenue : écrans Next.js d'abord, Strapi plus tard

**Décision** : on se concentre d'abord entièrement sur l'implémentation Next.js — toutes les pages avec du contenu statique/en dur, fidèle au Figma. La partie Strapi (modélisation des content-types, intégration) est volontairement **mise de côté pour l'instant** et sera traitée dans un second temps, une fois qu'on aura une vue réelle sur la structure des données de chaque écran.

### Prochaines étapes concrètes

1. Valider les hypothèses de stack restantes (SSG vs SSR pour plus tard, sans impact immédiat tant qu'il n'y a pas de Strapi branché)
2. Générer la Homepage depuis Figma → `app/page.tsx` (contenu en dur)
3. Générer les pages métier (Recouvrement + Prestations) → en extraire les composants `metier/*`
4. Générer les pages principales, simulateurs, pages légales
5. **Une fois tous les écrans Next.js implémentés** : revenir sur la modélisation Strapi avec une vue d'ensemble réelle des données

---

## 6. Inventaire des composants partagés (à identifier avant de générer)

Objectif : ne jamais régénérer deux fois le même composant depuis Figma. Avant de lancer la génération d'une nouvelle page, vérifier si elle utilise un composant déjà listé ici — si oui, **réutiliser**, ne pas redemander au MCP de le regénérer.

### Composants identifiés à date (Homepage)

| Composant | Usage | Dossier cible |
|---|---|---|
| `Header` / `Nav` | Toutes les pages | `components/layout/` |
| `Footer` | Toutes les pages | `components/layout/` |
| `ActualiteCard` | Cards actualités (Homepage + page Actualités) | `components/sections/` ou `components/ui/` selon complexité |
| `ServiceCard` | Cards services (Homepage, probablement aussi pages métier en lien croisé) | `components/sections/` |
| `ChiffreCle` | Bloc chiffres clés (Homepage) | `components/sections/` |
| `LienBouton` / `Link` stylé | Boutons/liens récurrents (CTA "En savoir plus", etc.) | `components/ui/` |
| `PageBanner` | Bannière titre + fil d'ariane (breadcrumb) — **présente sur toutes les pages autres que la Homepage**, à confirmer une fois qu'on aura vu 2-3 autres pages | `components/layout/` |
| `Breadcrumb` | Fil d'ariane, probablement intégré dans `PageBanner` mais peut être un sous-composant isolé si réutilisé ailleurs | `components/ui/` |

> Cette table est **vivante** : à mettre à jour à chaque nouvelle page générée. Dès qu'un composant apparaît sur une 2ᵉ page, vérifier s'il correspond à un composant déjà listé avant de le regénérer.

### Règle de travail avec le MCP Figma

Avant de générer une page, demander explicitement à l'agent de **vérifier l'existant** :
```
Avant de générer cette page, regarde les composants déjà présents dans components/ 
(notamment PageBanner, Breadcrumb, ActualiteCard, ServiceCard) et réutilise-les 
s'ils correspondent à des éléments de cette frame Figma, au lieu d'en recréer de nouveaux.
```

### PageBanner / Breadcrumb — à valider dès la 2ᵉ page traitée

Comme la Homepage n'a probablement pas de banner titre + fil d'ariane (c'est typiquement un pattern des pages secondaires), ce composant sera confirmé/affiné à la prochaine page (ex: Immatriculation). Prévoir qu'il prenne au minimum :
```ts
interface PageBannerProps {
  titre: string;
  breadcrumb: { label: string; href?: string }[]; // dernier élément = page courante, sans href
}
```

---

## 7. Design tokens : variables d'espacement, couleurs, typographie

**Objectif** : ne jamais coder une couleur, un espacement ou une taille de police en valeur brute dans un composant. Tout doit passer par des variables nommées et préfixées, alimentées si possible directement depuis les variables Figma (`get_variable_defs`).

### 7.1 Convention de préfixe

Toutes les variables du design system CNSS sont préfixées **`cnss-`**, pour éviter toute collision avec les classes utilitaires Tailwind natives ou d'éventuelles librairies tierces (ex: shadcn/ui).

### 7.2 Implémentation avec Tailwind (config étendue, pas de valeurs brutes)

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'cnss-primary': 'var(--cnss-color-primary)',
        'cnss-primary-dark': 'var(--cnss-color-primary-dark)',
        'cnss-secondary': 'var(--cnss-color-secondary)',
        'cnss-neutral-900': 'var(--cnss-color-neutral-900)',
        'cnss-neutral-100': 'var(--cnss-color-neutral-100)',
        // ... à compléter avec les vraies valeurs extraites via get_variable_defs
      },
      spacing: {
        'cnss-xs': 'var(--cnss-space-xs)',   // ex: 4px
        'cnss-sm': 'var(--cnss-space-sm)',   // ex: 8px
        'cnss-md': 'var(--cnss-space-md)',   // ex: 16px
        'cnss-lg': 'var(--cnss-space-lg)',   // ex: 24px
        'cnss-xl': 'var(--cnss-space-xl)',   // ex: 40px
      },
      fontFamily: {
        'cnss-heading': 'var(--cnss-font-heading)',
        'cnss-body': 'var(--cnss-font-body)',
      },
      fontSize: {
        'cnss-h1': 'var(--cnss-text-h1)',
        'cnss-h2': 'var(--cnss-text-h2)',
        'cnss-body': 'var(--cnss-text-body)',
      },
    },
  },
};
```

```css
/* app/globals.css */
:root {
  /* Couleurs — valeurs réelles à extraire du Figma via get_variable_defs */
  --cnss-color-primary: #0B5394;      /* placeholder, à remplacer */
  --cnss-color-primary-dark: #073763; /* placeholder */
  --cnss-color-secondary: #F6B26B;    /* placeholder */
  --cnss-color-neutral-900: #1A1A1A;
  --cnss-color-neutral-100: #F5F5F5;

  /* Espacements */
  --cnss-space-xs: 4px;
  --cnss-space-sm: 8px;
  --cnss-space-md: 16px;
  --cnss-space-lg: 24px;
  --cnss-space-xl: 40px;

  /* Typographie */
  --cnss-font-heading: 'À définir', sans-serif;
  --cnss-font-body: 'À définir', sans-serif;
  --cnss-text-h1: 2.5rem;
  --cnss-text-h2: 1.75rem;
  --cnss-text-body: 1rem;
}
```

### 7.3 Utilisation dans les composants

```tsx
// ✅ à faire
<div className="bg-cnss-primary text-cnss-neutral-100 p-cnss-md">

// ❌ à éviter
<div className="bg-[#0B5394] text-white p-4">
```

### 7.4 Workflow d'extraction avec le MCP Figma

À la première génération de la Homepage, demander explicitement :
```
Utilise get_variable_defs sur cette sélection pour extraire les variables 
Figma (couleurs, espacements, typographie), et mappe-les sur les tokens 
CSS --cnss-* déjà définis dans app/globals.css plutôt que d'utiliser des 
valeurs codées en dur.
```
Si de nouvelles valeurs apparaissent qui n'ont pas encore de token `--cnss-*` correspondant, les ajouter à `globals.css` avec un nom cohérent (`--cnss-color-*`, `--cnss-space-*`, `--cnss-text-*`) plutôt que de les coder en brut dans le composant.

### 7.5 Checklist tokens à appliquer à chaque nouvel écran

- [ ] Aucune couleur hex/rgb brute dans le JSX ou les classes Tailwind
- [ ] Aucun espacement en pixel brut (`p-[13px]`, `gap-[22px]`) — utiliser l'échelle `cnss-*` ou l'étendre si une nouvelle valeur légitime apparaît
- [ ] Toute nouvelle variable Figma rencontrée est ajoutée dans `globals.css` avec le préfixe `cnss-` avant d'être utilisée
- [ ] Les tailles de police passent par `text-cnss-*`, pas des valeurs arbitraires

---

## 8. Responsive design

**Objectif** : chaque page générée depuis Figma doit être fonctionnelle et propre sur mobile, tablette et desktop dès sa première génération — pas ajouté après-coup une fois toutes les pages faites.

### 8.1 Breakpoints retenus (convention Tailwind par défaut)

| Nom | Largeur | Usage |
|---|---|---|
| `sm` | ≥ 640px | Petits mobiles en paysage / grands mobiles |
| `md` | ≥ 768px | Tablettes |
| `lg` | ≥ 1024px | Desktop / laptop |
| `xl` | ≥ 1280px | Grand desktop |

**Approche mobile-first obligatoire** : les classes Tailwind sans préfixe s'appliquent au mobile par défaut, puis on surcharge vers le haut (`md:`, `lg:`...) — jamais l'inverse.
```tsx
// ✅ mobile-first
<div className="flex flex-col gap-cnss-md md:flex-row md:gap-cnss-lg">

// ❌ à éviter — ne jamais partir du desktop pour "redescendre"
```

### 8.2 Ce qu'il faut vérifier sur CHAQUE frame Figma avant génération

Les fichiers Figma ne contiennent souvent qu'une seule taille d'écran par frame (desktop la plupart du temps). Le MCP ne devine pas automatiquement le comportement mobile — il faut le demander explicitement à chaque génération :

```
Génère cette page en responsive complet (mobile, tablette, desktop) même si 
la frame Figma ne montre que la version desktop. Applique les patterns 
standards : navigation → menu burger sous md, grilles multi-colonnes → 
empilées en colonne unique sous md, tailles de texte réduites sur mobile 
(voir section 8.3), images en pleine largeur sur mobile.
```

Si le fichier Figma contient **plusieurs frames pour la même page** (ex: "Accueil — Desktop" et "Accueil — Mobile"), le préciser dans le prompt et donner les deux liens — le MCP doit alors respecter fidèlement les deux versions plutôt que d'improviser la version manquante.

### 8.3 Patterns responsive à appliquer par défaut (sauf indication contraire du Figma)

- **Navigation** : menu horizontal desktop → menu burger (`Sheet`/drawer) sous `md`
- **Grilles de cards** (services, actualités) : 3-4 colonnes desktop → 2 colonnes tablette (`md:grid-cols-2`) → 1 colonne mobile
- **Hero/bannières** : texte + image côte à côte desktop → empilés verticalement mobile (image généralement au-dessus du texte, à vérifier au cas par cas selon le Figma)
- **Typographie** : réduire les tailles `h1`/`h2` sur mobile plutôt que de garder les mêmes tailles desktop qui débordent (`text-cnss-h1` doit avoir une variante mobile, voir 8.4)
- **Tableaux de données** (si présents, ex: barèmes dans un simulateur) : passage en cards empilées ou scroll horizontal sur mobile, jamais un tableau compressé illisible
- **Espacements** : réduire les `padding`/`gap` verticaux entre sections sur mobile (les grands espacements desktop créent un scroll excessif sur petit écran)

### 8.4 Typographie responsive avec les tokens existants

Étendre les tokens de la section 7 pour qu'ils varient selon la taille d'écran plutôt que d'avoir une seule taille fixe :
```css
:root {
  --cnss-text-h1: 1.75rem;   /* mobile par défaut */
  --cnss-text-h2: 1.375rem;
}

@media (min-width: 768px) {
  :root {
    --cnss-text-h1: 2.5rem;  /* desktop */
    --cnss-text-h2: 1.75rem;
  }
}
```
Ainsi `text-cnss-h1` reste le seul nom utilisé dans les composants — la responsivité est gérée dans le token, pas répétée à chaque usage dans le JSX.

### 8.5 Checklist responsive à appliquer à chaque nouvel écran

- [ ] Testé visuellement à 375px (mobile), 768px (tablette), 1440px (desktop) minimum
- [ ] Navigation : menu burger fonctionnel sous `md`
- [ ] Aucun texte ne déborde ni n'est tronqué de façon inattendue sur mobile
- [ ] Aucun scroll horizontal involontaire sur mobile
- [ ] Images/médias adaptés (pas d'image desktop écrasée illisible sur petit écran)
- [ ] Zones cliquables (boutons, liens) suffisamment grandes au tactile (min. ~44px de hauteur)

### 8.6 Espace pour consignes spécifiques (à compléter au fil du projet)

> Section libre — ajouter ici toute instruction responsive particulière au fur et à mesure des pages traitées (comportement spécifique d'un composant, exception à une règle ci-dessus, retour visuel constaté sur un vrai appareil, etc.)

- *(à compléter)*