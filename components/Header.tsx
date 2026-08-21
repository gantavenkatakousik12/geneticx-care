"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HEADER_NAV, NAV, SITE } from "@/lib/content";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE.brand} home`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={38}
        height={38}
        priority
        className="h-[38px] w-[38px] rounded-[11px] object-cover ring-1 ring-line"
      />
      <span className="font-display text-[19px] font-bold tracking-tight text-forest-900">
        Geneticx<span className="text-forest-600">Care</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const groupActive = (item: (typeof HEADER_NAV)[number]) =>
    isActive(item.href) || !!item.children?.some((c) => isActive(c.href));

  // Small delay on close so the pointer can travel into the panel.
  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-canvas/85 backdrop-blur-md">
      <div className="wrap">
        <div className="flex h-[74px] items-center justify-between gap-6">
          <Logo />

          {/* ---------------- Desktop nav ---------------- */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {HEADER_NAV.map((item) => {
                const active = groupActive(item);

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                          active
                            ? "bg-forest-100 text-forest-900"
                            : "text-ink-soft hover:bg-forest-50 hover:text-forest-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const expanded = menu === item.label;
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      onClick={() => setMenu(expanded ? null : item.label)}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                        active
                          ? "bg-forest-100 text-forest-900"
                          : "text-ink-soft hover:bg-forest-50 hover:text-forest-800"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`text-[10px] transition-transform ${expanded ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>

                    {expanded && (
                      <div
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={scheduleClose}
                        className="absolute left-0 top-[calc(100%+10px)] w-[320px] rounded-2xl border border-line bg-paper p-2 shadow-[0_18px_40px_-18px_rgba(14,58,34,0.35)]"
                      >
                        {item.children.map((c) => (
                          <Link
                            key={c.href + c.label}
                            href={c.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-forest-50"
                          >
                            <span className="block font-display text-[15px] font-semibold text-forest-900">
                              {c.label}
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-snug text-ink-soft">
                              {c.blurb}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link href="/consultation#book" className="btn btn-gold hidden sm:inline-flex">
              Book now
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 font-display text-[14px] font-semibold text-forest-900 lg:hidden"
            >
              <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
              <span aria-hidden="true" className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-4 rounded bg-forest-900" />
                <span className="block h-[2px] w-4 rounded bg-forest-900" />
                <span className="block h-[2px] w-4 rounded bg-forest-900" />
              </span>
              <span aria-hidden="true">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile drawer ---------------- */}
      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Main (mobile)" className="wrap py-4">
            <ul className="flex flex-col">
              {/* Mobile shows the full page list — no nesting to get lost in. */}
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block border-b border-line-soft py-3 text-[15px] font-medium ${
                      isActive(item.href) ? "text-forest-800" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/consultation#book" className="btn btn-gold mt-5 w-full">
              Book now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
