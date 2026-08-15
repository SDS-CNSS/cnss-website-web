import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { SimulateurSidebarNav } from "@/components/simulateur/SimulateurSidebarNav";
import { PensionVieillesseAnticipeeForm } from "@/components/simulateur/PensionVieillesseAnticipeeForm";
import { getPensionVieillesseAnticipeeContent } from "@/lib/content/pension-vieillesse-anticipee";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/simulateurs/pension-vieillesse-anticipee">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = await getPensionVieillesseAnticipeeContent(locale);
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
  };
}

export default async function PensionVieillesseAnticipeePage({
  params,
}: Props) {
  const { locale } = await params;
  const content = await getPensionVieillesseAnticipeeContent(locale);

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
              <PensionVieillesseAnticipeeForm
                title={content.formTitle}
                infoBox={content.infoBox}
                ageLabel={content.ageLabel}
                ageOptions={content.ageOptions}
                rmmField={content.rmmField}
                moisAssuranceField={content.moisAssuranceField}
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
