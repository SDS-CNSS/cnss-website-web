import Link from "next/link";
import { File, Eye, Download } from "lucide-react";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

const TAG_VARIANTS: BadgeVariant[] = ["primary", "info", "warning", "neutral"];

type DocumentCardProps = {
  title: string;
  tags: string[];
  fileType: string;
  fileSize: string;
  viewHref: string;
  downloadHref: string;
};

export function DocumentCard({ title, tags, fileType, fileSize, viewHref, downloadHref }: DocumentCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border-2 border-primary bg-surface p-6 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-3">
        <File className="size-8 shrink-0 text-primary" />
        <h3 className="line-clamp-2 font-heading text-h6 font-bold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={tag} variant={TAG_VARIANTS[index % TAG_VARIANTS.length]}>
            {tag.toUpperCase()}
          </Badge>
        ))}
      </div>
      <p className="text-sm text-muted">
        {fileType} - {fileSize}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <Link
          href={viewHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-base font-medium text-ink transition-colors hover:border-primary hover:text-primary"
        >
          Lire
          <Eye className="size-4" />
        </Link>
        <a
          href={downloadHref}
          download
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-base font-bold text-on-primary transition-colors hover:bg-primary-hover"
        >
          TÉLÉCHARGER
          <Download className="size-4" />
        </a>
      </div>
    </div>
  );
}
