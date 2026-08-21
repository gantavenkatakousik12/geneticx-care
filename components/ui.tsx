import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

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
    tone === "paper" ? "bg-paper" : tone === "soft" ? "bg-forest-50" : "bg-canvas";
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
      <h2 className={`text-balance text-[28px] md:text-[36px] text-forest-900 ${eyebrow ? "mt-4" : ""}`}>
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
        <div className="overflow-hidden rounded-[var(--radius-xl2)] bg-forest-900">
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
                <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-forest-200">
                  {lead}
                </p>
              )}
              {extra && (
                <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-forest-200/85">
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
      <h3 className="text-[18px] text-forest-900">{title}</h3>
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
      <span className="font-display text-[13px] font-bold tracking-[0.14em] text-gold-600">
        {step}
      </span>
      <h3 className="mt-3 text-[18px] text-forest-900">{title}</h3>
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
            className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-gold-500"
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
  const border = tone === "warn" ? "border-l-gold-500" : "border-l-forest-500";
  return (
    <div className={`rounded-r-2xl border border-line ${border} border-l-4 bg-paper p-6`}>
      {title && <h3 className="text-[16.5px] text-forest-900">{title}</h3>}
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
        <div className="rounded-[var(--radius-xl2)] bg-forest-800 px-7 py-12 text-center md:px-12 md:py-14">
          <h2 className="text-balance mx-auto max-w-2xl text-[26px] text-white md:text-[34px]">
            {title}
          </h2>
          {body && (
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-[16px] leading-relaxed text-forest-200">
              {body}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={primary.href} className="btn btn-gold">
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
