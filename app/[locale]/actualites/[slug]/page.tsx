import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { RichContent } from "@/components/ui/RichContent";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { MetierLinksBox } from "@/components/metier/MetierLinksBox";
import { Link } from "@/i18n/navigation";
import { Calendar, Share2 } from "lucide-react";
import { getArticleDetailContent } from "@/lib/content/article-detail";
import { Container } from "@/components/layout/Container";

type Props = PageProps<"/[locale]/actualites/[slug]">;

const CATEGORY_VARIANTS: Record<"événement" | "communiqué", BadgeVariant> = {
  événement: "neutral",
  communiqué: "warning",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = await getArticleDetailContent(locale, slug);
  if (!content) return {};
  return buildMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: `/actualites/${slug}`,
  });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const content = await getArticleDetailContent(locale, slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <PageBanner
          title={content.title}
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Actualités", href: "/actualites" },
            { label: content.title },
          ]}
        />

        <div className="w-full px-4 py-10 md:px-10 lg:px-20 lg:py-20">
          <Container className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="flex min-w-0 flex-1 flex-col gap-8">
              <div className="relative h-[18.75rem] w-full overflow-hidden rounded-xl md:h-[26.25rem]">
                <Image
                  src={content.heroImage.url}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={CATEGORY_VARIANTS[content.category]}>
                  {content.category.toUpperCase()}
                </Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="size-3 text-ink-soft" />
                  <span className="text-xs text-ink-soft">{content.date}</span>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {content.sections.map((section) => (
                  <div key={section.id} className="flex flex-col gap-4">
                    <h2 className="font-heading text-h4 font-bold text-primary-800 md:text-h3">
                      {section.title}
                    </h2>
                    <RichContent
                      blocks={section.blocks}
                      paragraphClassName="text-base font-medium text-body md:text-lg"
                      listItemClassName="text-base font-medium text-body md:text-lg"
                    />
                  </div>
                ))}
              </div>

              {content.actionsBox && (
                <MetierLinksBox
                  title={content.actionsBox.title}
                  links={content.actionsBox.links}
                />
              )}
            </div>

            <aside className="flex flex-col gap-8 lg:w-[18.75rem] lg:shrink-0">
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-h6 font-bold text-primary-800">
                  Articles récents
                </h2>
                <div className="flex flex-col gap-3 border-t border-line pt-3">
                  {content.recentArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="text-base font-semibold text-link hover:underline"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="flex items-center gap-2 font-heading text-h6 font-bold text-primary-800">
                  Partager
                  <Share2 className="size-4" />
                </h2>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-primary bg-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
                  >
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-primary bg-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
                  >
                    <Image
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </aside>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
