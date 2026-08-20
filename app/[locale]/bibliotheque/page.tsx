import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ListFilters } from "@/components/ui/ListFilters";
import { ResultsBar } from "@/components/ui/ResultsBar";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { Pagination } from "@/components/ui/Pagination";
import { getBibliothequeContent } from "@/lib/content/bibliotheque";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/bibliotheque">;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Bibliothèque | CNSS Bénin",
    description:
      "Formulaires, attestations et documents utiles de la Caisse Nationale de Sécurité Sociale du Bénin.",
    path: "/bibliotheque",
  });
}

export default async function BibliothequePage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const rawPage = resolvedSearchParams.page;
  const pageParam = typeof rawPage === "string" ? Number(rawPage) : 1;
  const requestedPage = Math.max(1, Number.isFinite(pageParam) ? pageParam : 1);

  const content = await getBibliothequeContent(locale, requestedPage);
  const { documents, currentPage, totalPages, totalCount } = content;

  function getHref(page: number) {
    return `/bibliotheque${page > 1 ? `?page=${page}` : ""}`;
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title="Bibliothèque"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Bibliothèque" },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20">
          <Container className="flex flex-col gap-10">
            <ListFilters
              filters={[
                {
                  label: "Catégories",
                  options: [
                    "Formulaire de demande",
                    "Attestation",
                    "Allocations familiales",
                    "Accident du travail",
                    "Pensions",
                  ],
                },
                {
                  label: "Public",
                  options: ["Employeurs", "Travailleurs", "Retraités"],
                },
              ]}
            />

            <div className="flex w-full flex-col gap-8">
              <ResultsBar
                label={`${totalCount} Documents | Page ${currentPage} sur ${totalPages}`}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {documents.map((document) => (
                  <DocumentCard key={document.title} {...document} />
                ))}
              </div>
            </div>

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
