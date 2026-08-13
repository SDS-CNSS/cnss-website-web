import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { MetierSidebarNav } from "@/components/metier/MetierSidebarNav";
import { MetierHelpCard } from "@/components/metier/MetierHelpCard";
import { MetierSection } from "@/components/metier/MetierSection";
import { MetierLinksBox } from "@/components/metier/MetierLinksBox";
import { getAllocationsPrenatalesContent } from "@/lib/content/allocations-prenatales";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAllocationsPrenatalesContent();
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
  };
}

export default async function AllocationsPrenatalesPage() {
  const content = await getAllocationsPrenatalesContent();

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner title={content.banner.title} breadcrumbs={content.banner.breadcrumbs} />

        <div className="flex w-full flex-col gap-10 px-4 py-10 md:px-10 lg:flex-row lg:gap-20 lg:px-20 lg:py-20">
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:w-[360px] lg:shrink-0 lg:gap-12 lg:self-start">
            <MetierSidebarNav items={content.sidebarNav} />
            <MetierHelpCard title={content.helpCard.title} cta={content.helpCard.cta} />
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-12">
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[314px]">
              <Image
                src={content.heroImage.url}
                alt={content.heroImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-10">
              {content.sections.map((section) => (
                <MetierSection key={section.id} {...section} />
              ))}
            </div>

            {content.linksBox && (
              <MetierLinksBox title={content.linksBox.title} links={content.linksBox.links} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
