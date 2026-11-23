"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { mobileNav, primaryNav } from "@/lib/site";
import { Sheen } from "@/components/Buttons";

export function Header() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const nodes = menuRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
      menuBtnRef.current?.focus();
    };
  }, [open]);

  const current = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header className={solid || open ? "site-header is-solid" : "site-header"}>
      <Link href="/" className="logo" aria-label="Encompass, home">
        <Image src="/brand/logo.jpg" alt="" width={500} height={500} priority />
      </Link>
      <nav className="desk-nav" aria-label="Primary">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href} aria-current={current(item.href) ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" aria-current={current("/contact") ? "page" : undefined}>
          Contact
        </Link>
      </nav>
      <Link href="/estimate" className="btn btn-gold header-cta">
        <Sheen />
        <span className="btn-label">
          <span className="btn-short">Estimate</span>
          <span className="btn-long">Instant estimate</span>
        </span>
      </Link>
      <button
        ref={menuBtnRef}
        className="menu-btn"
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {open ? (
        <div ref={menuRef} id="site-menu" className="menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="menu-top">
            <Link href="/" className="logo" aria-label="Encompass, home">
              <Image src="/brand/logo.jpg" alt="" width={500} height={500} />
            </Link>
            <button ref={closeRef} className="menu-btn" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav aria-label="Mobile">
            {mobileNav.map((item) => (
              <Link key={item.href} href={item.href} className="item" aria-current={current(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/estimate" className="btn btn-gold">
            <Sheen />
            <span className="btn-label">Instant estimate</span>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
