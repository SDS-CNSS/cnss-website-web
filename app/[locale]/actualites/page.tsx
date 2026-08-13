import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ListFilters } from "@/components/ui/ListFilters";
import { ActualitesGrid } from "@/components/actualites/ActualitesGrid";
import { Pagination } from "@/components/ui/Pagination";
import { getActualitesContent } from "@/lib/content/actualites";

type Props = PageProps<"/[locale]/actualites">;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Actualités | CNSS Bénin",
    description:
      "Toutes les actualités, communiqués et événements de la Caisse Nationale de Sécurité Sociale du Bénin.",
  };
}

export default async function ActualitesPage({ params }: Props) {
  const { locale } = await params;
  const content = await getActualitesContent(locale);

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title="Actualités"
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Actualités" }]}
        />

        <div className="flex w-full flex-col gap-10 px-4 py-10 md:px-10 lg:px-20">
          <ListFilters
            filters={[
              { label: "Catégories", options: ["Événement", "Communiqué"] },
              { label: "Public", options: ["Employeurs", "Travailleurs", "Retraités"] },
            ]}
          />
          <ActualitesGrid
            articles={content.articles}
            totalCount={content.totalCount}
            currentPage={content.currentPage}
            totalPages={content.totalPages}
          />
          <Pagination currentPage={content.currentPage} totalPages={content.totalPages} />
        </div>
      </main>
      <Footer />
    </>
  );
}
