import { defineRouting } from "next-intl/routing";

// Français uniquement pour l'instant (voir CLAUDE.md section 5). L'anglais
// s'ajoutera plus tard via ce même tableau, sans changer la structure des routes.
export const routing = defineRouting({
  locales: ["fr"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
