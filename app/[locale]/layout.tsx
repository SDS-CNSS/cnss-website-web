import type { Metadata } from "next";
import { Raleway, Alexandria } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { SITE_URL, buildMetadata } from "@/lib/seo";
import { getChatbotFlowContent } from "@/lib/content/chatbot";
import "../globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "CNSS - Caisse Nationale de Sécurité Sociale du Bénin",
    description:
      "Site officiel de la Caisse Nationale de Sécurité Sociale du Bénin (CNSS).",
    path: "/",
  }),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Le chatbot est un plus, pas un critère de rendu de la page : si Strapi
  // est indisponible ou que le contenu n'est pas encore publié, on masque
  // simplement le widget plutôt que de casser tout le layout.
  const chatbotFlow = await getChatbotFlowContent(locale).catch(() => null);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${raleway.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <BackToTopButton />
        {chatbotFlow && <ChatWidget flow={chatbotFlow} />}
      </body>
    </html>
  );
}
