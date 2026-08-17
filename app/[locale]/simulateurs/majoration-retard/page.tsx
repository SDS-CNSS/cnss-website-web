import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { SimulateurSidebarNav } from "@/components/simulateur/SimulateurSidebarNav";
import { MajorationRetardForm } from "@/components/simulateur/MajorationRetardForm";
import { getMajorationRetardContent } from "@/lib/content/majoration-retard";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/simulateurs/majoration-retard">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = await getMajorationRetardContent(locale);
  return buildMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: "/simulateurs/majoration-retard",
  });
}

export default async function MajorationRetardPage({ params }: Props) {
  const { locale } = await params;
  const content = await getMajorationRetardContent(locale);

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title={content.banner.title}
          breadcrumbs={content.banner.breadcrumbs}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20 lg:py-20">
          <Container className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:w-[22.5rem] lg:shrink-0">
              <SimulateurSidebarNav items={content.sidebarNav} />
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">
              <MajorationRetardForm
                title={content.formTitle}
                infoBox={content.infoBox}
                periodeLabel={content.periodeLabel}
                periodeOptions={content.periodeOptions}
                moisAnneeField={content.moisAnneeField}
                trimestreField={content.trimestreField}
                anneeField={content.anneeField}
                cotisationDueField={content.cotisationDueField}
                datePaiementField={content.datePaiementField}
                submitLabel={content.submitLabel}
                disclaimer={content.disclaimer}
              />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
