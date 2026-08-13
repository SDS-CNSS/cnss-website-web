import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types/breadcrumb";

type PageBannerProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative flex w-full flex-col items-start justify-center gap-6 overflow-hidden bg-surface-light-2 px-4 py-8 sm:px-6 md:h-[220px] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-0 lg:px-20">
      <div className="relative flex flex-col items-start gap-4 md:gap-6">
        <h1 className="font-heading text-h4 font-bold text-primary-800 md:text-h1">
          {title}
        </h1>
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-2.5">
                {index > 0 && <ChevronRight className="size-4 text-muted" />}
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="text-base font-semibold text-ink">
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? "text-sm font-semibold text-ink"
                        : "text-base font-semibold text-ink"
                    }
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
      <Image
        src="/images/logo-cnss.png"
        alt=""
        width={175}
        height={175}
        className="relative hidden shrink-0 object-contain md:block"
      />
    </section>
  );
}
