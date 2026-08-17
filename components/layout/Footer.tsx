import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Inbox, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/sections/NewsletterForm";

const QUICK_LINK_HREFS = [
  { key: "apiex", href: "https://apiex.bj/" },
  { key: "dgi", href: "https://www.impots.bj/" },
  { key: "servicePublic", href: "https://service-public.bj/" },
  { key: "asin", href: "https://asin.bj/" },
  { key: "anip", href: "https://anip.bj/" },
] as const;

const LEGAL_LINK_HREFS = [
  { key: "mentions", href: "/mentions-legales" },
  { key: "confidentialite", href: "/politique-confidentialite" },
  { key: "cgu", href: "/cgu" },
  { key: "cookies", href: "/cookies" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex w-full flex-col items-center border-t-2 border-line bg-surface-light-2 px-4 pt-10 sm:px-6 md:px-10 lg:px-20 lg:pt-20">
      <Container className="flex flex-col items-center">
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-8">
          <div className="flex w-full flex-col items-start gap-4 lg:flex-1 lg:pb-[4.75rem]">
            <Logo />
            <p className="text-base font-medium text-body">
              {t("description")}
            </p>
            <div className="flex items-start gap-4">
              <a
                href="https://www.facebook.com/cnssbenin.officiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md border border-primary bg-primary p-2 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="h-4.25"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cnss-benin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md border border-primary bg-primary p-2 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
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

          <div className="flex w-full flex-col items-start gap-4 lg:flex-1">
            <h4 className="font-heading text-h5 font-semibold text-primary-800">
              {t("newsletter.title")}
            </h4>
            <p className="text-base font-medium text-body">
              {t("newsletter.description")}
            </p>
            <NewsletterForm
              firstNamePlaceholder={t("newsletter.firstNamePlaceholder")}
              emailPlaceholder={t("newsletter.emailPlaceholder")}
              submitLabel={t("newsletter.submit")}
              submittingLabel={t("newsletter.submitting")}
              successMessage={t("newsletter.successMessage")}
              errorMessage={t("newsletter.errorMessage")}
            />
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:w-[18.5rem] lg:pb-[3.25rem]">
            <h4 className="font-heading text-h5 font-semibold text-primary-800">
              {t("quickLinksTitle")}
            </h4>
            <ul className="flex w-full flex-col items-start gap-2">
              {QUICK_LINK_HREFS.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-ink transition-colors hover:underline"
                  >
                    {t(`quickLinks.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:flex-1 lg:pb-16">
            <h4 className="font-heading text-h5 font-semibold text-primary-800">
              {t("contactsTitle")}
            </h4>
            <div className="flex flex-col items-start gap-2.5">
              <div className="flex items-center gap-3">
                <MapPin className="size-6 text-ink" />
                <p className="text-base font-medium text-ink">
                  {t("siegeSocial")}
                  <br />
                  {t("siegeSocialAddress")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Inbox className="size-6 text-ink" />
                <p className="text-base font-medium text-ink">
                  {t("boitePostale")}
                  <br />
                  {t("boitePostaleValue")}
                </p>
              </div>
              <a
                href={`tel:${t("telephoneValue").replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-base font-medium text-ink transition-colors hover:underline"
              >
                <Phone className="size-6 text-ink" />
                <p>
                  {t("telephone")}
                  <br />
                  {t("telephoneValue")}
                </p>
              </a>
              <a
                href={`mailto:${t("emailValue")}`}
                className="flex items-center gap-3 text-base font-medium text-ink transition-colors hover:underline"
              >
                <Mail className="size-6 text-ink" />
                <p>
                  {t("email")}
                  <br />
                  {t("emailValue")}
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start border-t border-primary-100">
          <div className="flex w-full flex-col items-start gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-0">
            <p className="text-base text-ink">{t("copyright")}</p>
            <div className="flex flex-wrap items-start gap-x-6 gap-y-2">
              {LEGAL_LINK_HREFS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-ink transition-colors hover:underline"
                >
                  {t(`legal.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
