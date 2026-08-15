import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { MissionGouvernance } from "@/components/sections/MissionGouvernance";
import { HistoireTimeline } from "@/components/sections/HistoireTimeline";
import { ImpactCta } from "@/components/sections/ImpactCta";
import { getAProposContent } from "@/lib/content/a-propos";

type Props = PageProps<"/[locale]/a-propos">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = await getAProposContent(locale);
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
  };
}

export default async function AProposPage({ params }: Props) {
  const { locale } = await params;
  const content = await getAProposContent(locale);

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title={content.banner.title}
          breadcrumbs={content.banner.breadcrumbs}
        />
        <MissionGouvernance
          mission={content.mission}
          gouvernance={content.gouvernance}
        />
        <HistoireTimeline
          title={content.histoire.title}
          description={content.histoire.description}
          image={content.histoire.image}
          timeline={content.histoire.timeline}
        />
        <ImpactCta
          title={content.cta.title}
          description={content.cta.description}
          image={content.cta.image}
          button={content.cta.button}
        />
      </main>
      <Footer />
    </>
  );
}
