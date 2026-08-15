import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

export type NewsCardProps = {
  image: string;
  category: "événement" | "communiqué";
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

const CATEGORY_VARIANTS: Record<NewsCardProps["category"], BadgeVariant> = {
  événement: "neutral",
  communiqué: "warning",
};

export function NewsCard({
  image,
  category,
  date,
  title,
  excerpt,
  href,
}: NewsCardProps) {
  return (
    <Link href={href} className="group flex w-full flex-col items-start gap-4">
      <div className="relative h-[15.875rem] w-full overflow-hidden rounded-2xl border border-line-soft">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex items-center gap-2 pt-2">
        <Badge variant={CATEGORY_VARIANTS[category]}>
          {category.toUpperCase()}
        </Badge>
        <div className="flex items-center gap-1">
          <Calendar className="size-3 text-ink-soft" />
          <span className="text-xs text-ink-soft">{date}</span>
        </div>
      </div>
      <h3 className="line-clamp-2 font-heading text-h5 font-semibold text-primary-800 transition-colors group-hover:text-primary-hover">
        {title}
      </h3>
      <p className="line-clamp-3 text-base text-body">{excerpt}</p>
      <span className="flex items-center gap-1 border-b border-link pb-px text-sm font-bold text-link">
        Lire la suite
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
