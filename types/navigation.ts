export interface MegaMenuColumn {
  icon: string;
  titleKey: string;
  href?: string;
  links?: { labelKey: string; href: string }[];
}

export interface MegaMenuTab {
  key: string;
  labelKey: string;
  columns: MegaMenuColumn[];
}

export interface SimulateurItem {
  icon: string;
  labelKey: string;
  href: string;
}

export interface SimulateurTab {
  key: string;
  labelKey: string;
  items: SimulateurItem[];
}

export interface RessourceItem {
  icon: string;
  labelKey: string;
  href: string;
}

export interface NavigationContent {
  metiersTabs: MegaMenuTab[];
  simulateursTabs: SimulateurTab[];
  ressourcesItems: RessourceItem[];
}
