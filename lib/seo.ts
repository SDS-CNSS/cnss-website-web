import type { Metadata } from "next";

export const SITE_NAME = "CNSS Bénin";
export const SITE_URL = "https://cnss.bj";
const DEFAULT_OG_IMAGE = "/images/logo-cnss.png";

type BuildMetadataParams = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: BuildMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_BJ",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 500, height: 500 }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
