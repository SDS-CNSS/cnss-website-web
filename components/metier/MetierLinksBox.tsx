import { Link2 } from "lucide-react";

type MetierLinksBoxProps = {
  title: string;
  links: { label: string; href: string }[];
};

export function MetierLinksBox({ title, links }: MetierLinksBoxProps) {
  return (
    <div className="flex flex-col items-stretch gap-4 rounded-xl bg-surface-muted p-6">
      <h2 className="font-heading text-h5 font-semibold text-primary-800">{title}</h2>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-medium text-ink hover:text-primary"
          >
            <Link2 className="size-6 shrink-0 text-ink" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
