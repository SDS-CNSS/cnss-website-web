import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { MediaGrid } from "@/components/mediatheque/MediaGrid";
import { getMediaAlbumDetailContent } from "@/lib/content/media-album-detail";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/mediatheque/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const album = await getMediaAlbumDetailContent(locale, slug);
  if (!album) return {};
  return buildMetadata({
    title: `${album.title} | Médiathèque | CNSS Bénin`,
    description: album.description ?? album.title,
    path: `/mediatheque/${slug}`,
  });
}

export default async function MediaAlbumDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const album = await getMediaAlbumDetailContent(locale, slug);

  if (!album) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title={album.title}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Médiathèque", href: "/mediatheque" },
            { label: album.title },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              {album.date && <p className="text-sm text-ink-soft">{album.date}</p>}
              {album.description && (
                <p className="text-base font-medium text-body md:text-lg">{album.description}</p>
              )}
            </div>

            <MediaGrid items={album.items} />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
