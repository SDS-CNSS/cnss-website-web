import Image from "next/image";
import Link from "next/link";
import { User, Mail, MapPin, Inbox, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const QUICK_LINKS = [
  {
    label: "Agence de Promotion des Investissements et des Exportations (APIEx)",
    href: "https://apiex.bj/",
  },
  { label: "Direction Générale des Impôts (DGI)", href: "https://www.impots.bj/" },
  {
    label: "Portail National des Services publics",
    href: "https://service-public.bj/",
  },
  {
    label: "Agence des Systèmes d'Information et du Numérique (ASIN)",
    href: "https://asin.bj/",
  },
  {
    label: "Agence Nationale d'Identification des Personnes (ANIP)",
    href: "https://anip.bj/",
  },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politiques de confidentialité", href: "/politique-confidentialite" },
  { label: "CGU", href: "/cgu" },
  { label: "Gestion des cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center border-t-2 border-line bg-surface-light-2 px-20 pt-20">
      <div className="flex w-full items-start justify-center gap-8">
        <div className="flex flex-1 flex-col items-start gap-4 pb-[76px]">
          <Logo />
          <p className="text-base font-medium text-body">
            La CNSS, c&rsquo;est l&rsquo;assurance d&rsquo;une meilleure
            protection pour la vie. Nous sommes au service de la prévention
            des risques professionnels.
          </p>
          <div className="flex items-start gap-4">
            <a
              href="https://www.facebook.com/cnssbenin.officiel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-primary bg-primary p-2 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={16} height={16} className="h-4.25"/>
            </a>
            <a
              href="https://www.linkedin.com/company/cnss-benin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md border border-primary bg-primary p-2 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
            >
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4">
          <h4 className="font-heading text-h5 font-semibold text-primary-800">
            Newsletter
          </h4>
          <p className="text-base font-medium text-body">
            Recevez périodiquement les actualités de la CNSS directement dans
            votre boîte mail.
          </p>
          <form className="flex w-full flex-col items-start gap-2 rounded-[18px] bg-surface p-3 drop-shadow-[0px_2px_1px_rgba(0,0,0,0.1)]">
            <label className="flex w-full items-center gap-3 rounded-md border border-line px-3 py-2">
              <User className="size-4 text-muted" />
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                className="w-full text-base text-ink placeholder:text-muted focus:outline-none"
              />
            </label>
            <label className="flex w-full items-center gap-3 rounded-md border border-line px-3 py-2">
              <Mail className="size-4 text-muted" />
              <input
                type="email"
                name="email"
                placeholder="Adresse mail"
                className="w-full flex-1 text-base text-ink placeholder:text-muted focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-md border border-primary bg-primary px-8 py-2 text-paragraph-lg font-medium text-on-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
            >
              S&rsquo;abonner
            </button>
          </form>
        </div>

        <div className="flex w-[296px] flex-col items-start gap-4 pb-[52px]">
          <h4 className="font-heading text-h5 font-semibold text-primary-800">
            Liens Utiles
          </h4>
          <ul className="flex w-full flex-col items-start gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-start gap-4 pb-16">
          <h4 className="font-heading text-h5 font-semibold text-primary-800">
            Contacts
          </h4>
          <div className="flex flex-col items-start gap-2.5">
            <div className="flex items-center gap-3">
              <MapPin className="size-6 text-ink" />
              <p className="text-base font-medium text-ink">
                Siège social
                <br />
                390, Avenue Jean-Paul II
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Inbox className="size-6 text-ink" />
              <p className="text-base font-medium text-ink">
                Boîte Postale
                <br />
                01 BP 374 Cadjèhoun - Cotonou
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-6 text-ink" />
              <p className="text-base font-medium text-ink">
                Téléphone
                <br />
                (+229) 01 90 19 00 00
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-6 text-ink" />
              <p className="text-base font-medium text-ink">
                Email
                <br />
                info@cnss.bj
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start border-t border-primary-100">
        <div className="flex w-full items-center justify-between py-4">
          <p className="text-base text-ink">© Copyright 2026 - CNSS Bénin</p>
          <div className="flex items-start gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-primary-800 underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
