import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

/* ---------------- Brand / channel icons ---------------- */

const iconBase = "h-[18px] w-[18px] shrink-0 fill-current";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconBase} ${className}`}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23a8.23 8.23 0 0 1 0 16.44Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconBase} ${className}`}>
      <path d="M23.5 6.9a3 3 0 0 0-2.12-2.12C19.5 4.27 12 4.27 12 4.27s-7.5 0-9.38.51A3 3 0 0 0 .5 6.9 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.1 3 3 0 0 0 2.12 2.12c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.1ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${iconBase} ${className}`}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.72a6.12 6.12 0 1 0 0 12.24 6.12 6.12 0 0 0 0-12.24Zm0 10.09a3.97 3.97 0 1 1 0-7.94 3.97 3.97 0 0 1 0 7.94Zm7.79-10.33a1.43 1.43 0 1 1-2.86 0 1.43 1.43 0 0 1 2.86 0Z" />
    </svg>
  );
}

/* ---------------- Section shell ---------------- */

export function Section({
  children,
  className = "",
  tone = "canvas",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "paper" | "soft";
  id?: string;
}) {
  const bg =
    tone === "paper" ? "bg-paper" : tone === "soft" ? "bg-navy-50" : "bg-canvas";
  return (
    <section id={id} className={`${bg} py-16 md:py-20 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-balance text-[28px] md:text-[36px] text-navy-900 ${eyebrow ? "mt-4" : ""}`}>
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-soft">{lead}</p>
      )}
    </div>
  );
}

/* ---------------- Inner-page hero ---------------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  extra,
  image,
  actions,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  extra?: string;
  image: { src: string; alt: string };
  actions?: ReactNode;
}) {
  return (
    <section className="bg-canvas pt-8 pb-4 md:pt-12">
      <div className="wrap">
        <div className="overflow-hidden rounded-[var(--radius-xl2)] bg-navy-900">
          <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-7 py-12 md:px-12 md:py-16">
              {eyebrow && <span className="eyebrow eyebrow-onDark">{eyebrow}</span>}
              <h1
                className={`text-balance text-[32px] leading-[1.1] text-white md:text-[46px] ${
                  eyebrow ? "mt-5" : ""
                }`}
              >
                {title}
              </h1>
              {lead && (
                <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-navy-200">
                  {lead}
                </p>
              )}
              {extra && (
                <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-navy-200/85">
                  {extra}
                </p>
              )}
              {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            </div>

            <div className="relative min-h-[240px] lg:min-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Cards ---------------- */

export function InfoCard({
  title,
  body,
  href,
  linkLabel = "Explore Service",
  id,
}: {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  id?: string;
}) {
  return (
    <article id={id} className="card flex h-full flex-col scroll-mt-28">
      <h3 className="text-[18px] text-navy-900">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{body}</p>
      {href && (
        <Link href={href} className="link-arrow mt-5">
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}

export function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <article className="card h-full">
      <span className="font-display text-[13px] font-bold tracking-[0.14em] text-teal-700">
        {step}
      </span>
      <h3 className="mt-3 text-[18px] text-navy-900">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{body}</p>
    </article>
  );
}

/* ---------------- Bulleted list ---------------- */

export function CheckList({
  items,
  columns = 2,
}: {
  items: readonly string[];
  columns?: 1 | 2 | 3;
}) {
  const cols =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 2
        ? "sm:grid-cols-2"
        : "";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${cols}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] text-ink-soft">
          <span
            aria-hidden="true"
            className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Callout (important information) ---------------- */

export function Notice({
  title,
  children,
  tone = "neutral",
}: {
  title?: string;
  children: ReactNode;
  tone?: "neutral" | "warn";
}) {
  const border = tone === "warn" ? "border-l-amber-500" : "border-l-teal-500";
  return (
    <div className={`rounded-r-2xl border border-line ${border} border-l-4 bg-paper p-6`}>
      {title && <h3 className="text-[16.5px] text-navy-900">{title}</h3>}
      <div className={`text-[15px] leading-relaxed text-ink-soft ${title ? "mt-2.5" : ""}`}>
        {children}
      </div>
    </div>
  );
}

/* ---------------- Closing CTA band ---------------- */

export function CTABand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-canvas pb-4">
      <div className="wrap">
        <div className="rounded-[var(--radius-xl2)] bg-navy-800 px-7 py-12 text-center md:px-12 md:py-14">
          <h2 className="text-balance mx-auto max-w-2xl text-[26px] text-white md:text-[34px]">
            {title}
          </h2>
          {body && (
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-[16px] leading-relaxed text-navy-200">
              {body}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={primary.href} className="btn btn-accent">
              {primary.label} <span aria-hidden="true">→</span>
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-ghostLight">
                {secondary.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
