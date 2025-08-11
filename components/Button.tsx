import React from "react";
import Link from "next/link";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; href?: string; className?: string; children: React.ReactNode; };
export function Button({ asChild, href, className = "", children, ...rest }: Props) {
  if (asChild && href) return <Link href={href} className={`inline-flex items-center justify-center rounded-2xl px-6 py-2 text-sm font-medium transition-colors ${className}`}>{children}</Link>;
  return <button className={`inline-flex items-center justify-center rounded-2xl px-6 py-2 text-sm font-medium transition-colors ${className}`} {...rest}>{children}</button>;
}
