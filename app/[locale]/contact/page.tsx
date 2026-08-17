import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { getContactContent } from "@/lib/content/contact";

type Props = PageProps<"/[locale]/contact">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = await getContactContent(locale);
  return buildMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = await getContactContent(locale);

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title={content.banner.title}
          breadcrumbs={content.banner.breadcrumbs}
        />
        <ContactSection coordonnees={content.coordonnees} form={content.form} />
      </main>
      <Footer />
    </>
  );
}
