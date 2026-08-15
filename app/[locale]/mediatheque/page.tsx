import type { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Médiathèque | CNSS Bénin",
    description:
      "Photos et vidéos des événements et actions de la Caisse Nationale de Sécurité Sociale du Bénin.",
  };
}

export default async function MediathequePage({ params }: Props) {
  const { locale } = await params;
  const content = await getMediathequeContent(locale);

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
                label={`${content.totalCount} Médias | Page ${content.currentPage} sur ${content.totalPages}`}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {content.items.map((item) => (
                  <MediaCard key={item.title} {...item} />
                ))}
              </div>
            </div>

            <Pagination
              currentPage={content.currentPage}
              totalPages={content.totalPages}
            />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
