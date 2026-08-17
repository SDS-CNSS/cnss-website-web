import type { Locale } from "@/i18n/routing";
import type { StatItem } from "@/types/homepage";

const stats: StatItem[] = [
  {
    value: 70,
    prefix: "+ ",
    suffix: " ans",
    label: "Au service de la société",
  },
  { value: 6, label: "Agences régionales sur le territoire national" },
  { value: 60000, prefix: "+ ", label: "Pensionnés" },
  { value: 100000, prefix: "+ ", label: "Travailleurs" },
];

const contentByLocale: Record<Locale, StatItem[]> = {
  fr: stats,
};

export async function getNosChiffresContent(locale: string): Promise<StatItem[]> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
