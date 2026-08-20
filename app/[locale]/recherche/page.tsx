import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { Container } from "@/components/layout/Container";
import { ResultsBar } from "@/components/ui/ResultsBar";
import { Pagination } from "@/components/ui/Pagination";
import { SearchResultItem } from "@/components/ui/SearchResultItem";
import { getSearchIndex } from "@/lib/search/searchIndex";
import { searchEntries } from "@/lib/search/search";

type Props = PageProps<"/[locale]/recherche">;

const RESULTS_PER_PAGE = 8;

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildMetadata({
      title: "Résultats de recherche | CNSS Bénin",
      description:
        "Résultats de recherche sur le site officiel de la CNSS Bénin.",
      path: "/recherche",
    }),
    // Pages de résultats de recherche : pas d'intérêt à indexer les variantes de requête.
    robots: { index: false, follow: true },
  };
}

export default async function RecherchePage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;

  const rawQuery = resolvedSearchParams.q;
  const query = typeof rawQuery === "string" ? rawQuery : "";

  const rawPage = resolvedSearchParams.page;
  const pageParam = typeof rawPage === "string" ? Number(rawPage) : 1;

  const index = await getSearchIndex(locale);
  const allResults = searchEntries(index, query);

  const totalResults = allResults.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / RESULTS_PER_PAGE));
  const currentPage = Math.min(
    Math.max(1, Number.isFinite(pageParam) ? pageParam : 1),
    totalPages,
  );
  const results = allResults.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  function getHref(page: number) {
    const urlParams = new URLSearchParams();
    if (query) urlParams.set("q", query);
    if (page > 1) urlParams.set("page", String(page));
    const qs = urlParams.toString();
    return `/recherche${qs ? `?${qs}` : ""}`;
  }

  const resultLabel = query
    ? `${totalResults} résultat${totalResults > 1 ? "s" : ""} trouvé${totalResults > 1 ? "s" : ""} pour « ${query} »`
    : "Saisissez un terme de recherche pour commencer.";

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title="Résultats de recherche"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Résultats de recherche" },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20 lg:py-20">
          <Container className="flex flex-col gap-8">
            <ResultsBar label={resultLabel} />

            {query && totalResults === 0 && (
              <p className="text-base text-body">
                Aucun résultat ne correspond à votre recherche. Essayez avec
                d&rsquo;autres mots-clés.
              </p>
            )}

            {results.length > 0 && (
              <div className="flex flex-col">
                {results.map((entry) => (
                  <SearchResultItem key={entry.href} entry={entry} query={query} />
                ))}
              </div>
            )}

            {totalResults > RESULTS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                getHref={getHref}
              />
            )}
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
