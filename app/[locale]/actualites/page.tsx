import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ListFilters } from "@/components/ui/ListFilters";
import { ActualitesGrid } from "@/components/actualites/ActualitesGrid";
import { Pagination } from "@/components/ui/Pagination";
import { getActualitesContent } from "@/lib/content/actualites";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/actualites">;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Actualités | CNSS Bénin",
    description:
      "Toutes les actualités, communiqués et événements de la Caisse Nationale de Sécurité Sociale du Bénin.",
    path: "/actualites",
  });
}

export default async function ActualitesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const rawPage = resolvedSearchParams.page;
  const pageParam = typeof rawPage === "string" ? Number(rawPage) : 1;
  const requestedPage = Math.max(1, Number.isFinite(pageParam) ? pageParam : 1);

  const content = await getActualitesContent(locale, requestedPage);
  const { articles, currentPage, totalPages, totalCount } = content;

  function getHref(page: number) {
    return `/actualites${page > 1 ? `?page=${page}` : ""}`;
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title="Actualités"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Actualités" },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20">
          <Container className="flex flex-col gap-10">
            <ListFilters
              filters={[
                { label: "Catégories", options: ["Événement", "Communiqué"] },
                {
                  label: "Public",
                  options: ["Employeurs", "Travailleurs", "Retraités"],
                },
              ]}
            />
            <ActualitesGrid
              articles={articles}
              totalCount={totalCount}
              currentPage={currentPage}
              totalPages={totalPages}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              getHref={getHref}
            />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
