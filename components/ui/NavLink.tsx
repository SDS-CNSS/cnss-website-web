"use client";

import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

type NavLinkProps = {
  label: string;
  href?: string;
  dropdown?: boolean;
};

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ label, href, dropdown }: NavLinkProps) {
  const pathname = usePathname();
  const active = !!href && isPathActive(pathname, href);

  const className = active
    ? "flex items-center gap-1.5 border-b border-primary-hover pb-[3px] text-base font-medium text-primary-hover"
    : "flex items-center gap-1.5 border-b border-transparent pb-[3px] text-base font-medium text-body";

  if (dropdown) {
    return (
      <button type="button" className={className}>
        {label}
        <ChevronDown className="size-4" />
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} className={className} aria-current={active ? "page" : undefined}>
      {label}
    </Link>
  );
}
