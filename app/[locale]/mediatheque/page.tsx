import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ListFilters } from "@/components/ui/ListFilters";
import { ResultsBar } from "@/components/ui/ResultsBar";
import { MediaGrid } from "@/components/mediatheque/MediaGrid";
import { AlbumCard } from "@/components/ui/AlbumCard";
import { Pagination } from "@/components/ui/Pagination";
import { getMediathequeContent } from "@/lib/content/mediatheque";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/mediatheque">;

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
  const rawPage = resolvedSearchParams.page;
  const pageParam = typeof rawPage === "string" ? Number(rawPage) : 1;
  const requestedPage = Math.max(1, Number.isFinite(pageParam) ? pageParam : 1);
  const rawAlbumsPage = resolvedSearchParams.albumsPage;
  const albumsPageParam = typeof rawAlbumsPage === "string" ? Number(rawAlbumsPage) : 1;
  const requestedAlbumsPage = Math.max(1, Number.isFinite(albumsPageParam) ? albumsPageParam : 1);

  const content = await getMediathequeContent(locale, requestedPage, requestedAlbumsPage);
  const { albums, albumsPage, albumsTotalPages, items, currentPage, totalPages, totalCount } = content;

  function getHref(page: number) {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", String(page));
    if (albumsPage > 1) params.set("albumsPage", String(albumsPage));
    const qs = params.toString();
    return `/mediatheque${qs ? `?${qs}` : ""}`;
  }

  function getAlbumsHref(page: number) {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", String(currentPage));
    if (page > 1) params.set("albumsPage", String(page));
    const qs = params.toString();
    return `/mediatheque${qs ? `?${qs}` : ""}`;
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

            {albums.length > 0 && (
              <div className="flex w-full flex-col gap-8">
                <ResultsBar
                  label={`Albums | Page ${albumsPage} sur ${albumsTotalPages}`}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {albums.map((album) => (
                    <AlbumCard key={album.slug} album={album} />
                  ))}
                </div>

                {albumsTotalPages > 1 && (
                  <Pagination
                    currentPage={albumsPage}
                    totalPages={albumsTotalPages}
                    getHref={getAlbumsHref}
                  />
                )}
              </div>
            )}

            <div className="flex w-full flex-col gap-8">
              <ResultsBar
                label={`${totalCount} Médias | Page ${currentPage} sur ${totalPages}`}
              />

              <MediaGrid items={items} />
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
