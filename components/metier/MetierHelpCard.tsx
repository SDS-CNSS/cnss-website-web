import Link from "next/link";
import { CircleHelp } from "lucide-react";

type MetierHelpCardProps = {
  title: string;
  cta: { label: string; href: string };
};

export function MetierHelpCard({ title, cta }: MetierHelpCardProps) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-primary-hover px-6 py-8">
      <CircleHelp className="size-6 text-on-primary" />
      <p className="pt-2 text-lg font-semibold text-on-primary">{title}</p>
      <Link href={cta.href} className="text-base font-normal text-on-primary underline">
        {cta.label}
      </Link>
    </div>
  );
}
