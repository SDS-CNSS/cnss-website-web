import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({
  href,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-primary-100 bg-surface p-6 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow] hover:border-primary hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,0.03)]"
    >
      <div className="flex items-center rounded-md bg-surface-light p-4">
        <Image src={icon} alt="" width={46} height={46} />
      </div>
      <div className="flex flex-col items-start gap-2 text-left">
        <h3 className="font-heading text-h5 font-semibold text-primary-hover">
          {title}
        </h3>
        <p className="text-base font-medium text-body">{description}</p>
      </div>
    </Link>
  );
}
