const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiFetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

/**
 * Réponse Strapi 5 : structure plate (documentId, pas de wrapper `.attributes`
 * comme en v4). `data` est un objet pour une entrée/Single Type, un tableau
 * pour une Collection Type paginée.
 */
interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function strapiFetch<T>(
  path: string,
  { revalidate = 60, tags }: StrapiFetchOptions = {},
): Promise<StrapiResponse<T>> {
  if (!STRAPI_API_URL) {
    throw new Error("STRAPI_API_URL n'est pas défini (voir .env.local)");
  }

  const res = await fetch(`${STRAPI_API_URL}/api${path}`, {
    headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
    next: { revalidate, tags },
  });

  if (!res.ok) {
    throw new Error(`Strapi ${path} → ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<StrapiResponse<T>>;
}
