import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export function Sheen() {
  return <span className="btn-sheen" aria-hidden="true" />;
}

export function GoldLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`btn btn-gold ${className}`.trim()}>
      <Sheen />
      <span className="btn-label">{children}</span>
    </Link>
  );
}

export function GoldButton({ children, type = "button", className = "", ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={`btn btn-gold ${className}`.trim()} {...rest}>
      <Sheen />
      <span className="btn-label">{children}</span>
    </button>
  );
}
