import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ListFilters } from "@/components/ui/ListFilters";
import { ResultsBar } from "@/components/ui/ResultsBar";
import { MediaCard } from "@/components/ui/MediaCard";
import { Pagination } from "@/components/ui/Pagination";
import { getMediathequeContent } from "@/lib/content/mediatheque";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/mediatheque">;

const PER_PAGE = 6;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Médiathèque | CNSS Bénin",
    description:
      "Photos et vidéos des événements et actions de la Caisse Nationale de Sécurité Sociale du Bénin.",
    path: "/mediatheque",
  });
}

export default async function MediathequePage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const content = await getMediathequeContent(locale);

  const totalCount = content.items.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PER_PAGE));
  const rawPage = resolvedSearchParams.page;
  const pageParam = typeof rawPage === "string" ? Number(rawPage) : 1;
  const currentPage = Math.min(
    Math.max(1, Number.isFinite(pageParam) ? pageParam : 1),
    totalPages,
  );
  const items = content.items.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  function getHref(page: number) {
    return `/mediatheque${page > 1 ? `?page=${page}` : ""}`;
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title="Médiathèque"
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Médiathèque" },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20">
          <Container className="flex flex-col gap-10">
            <ListFilters
              filters={[
                { label: "Type", options: ["Photo", "Vidéo"] },
                {
                  label: "Public",
                  options: ["Employeurs", "Travailleurs", "Retraités"],
                },
              ]}
            />

            <div className="flex w-full flex-col gap-8">
              <ResultsBar
                label={`${totalCount} Médias | Page ${currentPage} sur ${totalPages}`}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <MediaCard key={item.title} {...item} />
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
