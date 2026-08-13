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
    <section className="relative flex h-[220px] w-full items-center justify-between gap-10 overflow-hidden bg-surface-light-2 px-20">
      <div className="relative flex flex-col items-start gap-6">
        <h1 className="font-heading text-h1 font-bold text-primary-800">
          {title}
        </h1>
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2.5">
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
        className="relative shrink-0 object-contain"
      />
    </section>
  );
}
