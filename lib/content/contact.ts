import { strapiFetch } from "@/lib/strapi/client";
import { mapContactPage, type StrapiContactPage } from "@/lib/strapi/mappers/contact-page";
import type { ContactContent } from "@/types/contact";

export async function getContactContent(locale: string): Promise<ContactContent> {
  const { data } = await strapiFetch<StrapiContactPage>(
    `/contact-page?locale=${locale}&populate[seo]=true&populate[locations]=true`,
  );

  return mapContactPage(data);
}
