import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { MetierSidebarNav } from "@/components/metier/MetierSidebarNav";
import { LegalSection } from "@/components/legal/LegalSection";
import { getCookiesContent } from "@/lib/content/cookies";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/cookies">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = await getCookiesContent(locale);
  return buildMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: "/cookies",
  });
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  const content = await getCookiesContent(locale);

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
            <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:w-[22.5rem] lg:shrink-0 lg:self-start">
              <MetierSidebarNav items={content.sidebarNav} />
            </aside>

            <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-12">
              {content.sections.map((section) => (
                <LegalSection key={section.id} {...section} />
              ))}
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
