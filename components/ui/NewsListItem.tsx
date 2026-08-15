import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { NewsCardProps } from "@/components/ui/NewsCard";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

const CATEGORY_VARIANTS: Record<NewsCardProps["category"], BadgeVariant> = {
  événement: "neutral",
  communiqué: "warning",
};

export function NewsListItem({
  image,
  category,
  date,
  title,
  excerpt,
  href,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col items-start gap-4 py-6 sm:flex-row sm:gap-6"
    >
      <div className="relative h-[16rem] w-[21.875rem] max-w-full shrink-0 overflow-hidden rounded-xl border border-line-soft">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <Badge variant={CATEGORY_VARIANTS[category]}>
            {category.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-1">
            <Calendar className="size-3 text-ink-soft" />
            <span className="text-xs text-ink-soft">{date}</span>
          </div>
        </div>
        <h3 className="font-heading text-h5 font-semibold text-primary-800 transition-colors group-hover:text-primary-hover">
          {title}
        </h3>
        <p className="text-base text-body">{excerpt}</p>
        <span className="flex items-center gap-1 border-b border-link pb-px text-sm font-bold text-link">
          Lire la suite
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
