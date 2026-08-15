import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "outline";
};

const variants = {
  primary:
    "bg-primary text-on-primary border border-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)] hover:bg-primary-hover hover:border-primary-hover",
  secondary: "bg-surface text-ink border border-line hover:bg-subtle",
  outline:
    "bg-surface text-primary border border-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)] hover:bg-primary-100",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
