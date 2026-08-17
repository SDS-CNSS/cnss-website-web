import Image from "next/image";
import { Link } from "@/i18n/navigation";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/images/logo-cnss.png"
        alt="CNSS - Caisse Nationale de Sécurité Sociale du Bénin"
        width={44}
        height={44}
        className="h-11 w-11 object-contain"
      />
      <p className="text-paragraph-md font-semibold text-ink">
        CAISSE NATIONALE DE
        <br />
        SÉCURITÉ SOCIALE DU BÉNIN
      </p>
    </Link>
  );
}
