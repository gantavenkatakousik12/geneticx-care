import Link from "next/link";
import { LEGAL_NAV, SITE } from "@/lib/content";
import type { LegalDoc } from "@/lib/legal";

/**
 * Shared shell for the three legal pages. The doc requires each to be a
 * separate page, all linked from the footer, with a visible Last Updated date
 * and text that stays readable on mobile.
 */
export default function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  return (
    <>
      <section className="border-b border-line bg-forest-900 py-14 md:py-16">
        <div className="wrap-narrow">
          <span className="eyebrow eyebrow-onDark">Legal</span>
          <h1 className="mt-5 text-balance text-[32px] text-white md:text-[42px]">
            {doc.title}
          </h1>
          <p className="mt-4 text-[14.5px] text-forest-200">
            Effective Date: {SITE.legalUpdated} &nbsp;|&nbsp; Last Updated:{" "}
            {SITE.legalUpdated}
          </p>
        </div>
      </section>

      {/* Sibling legal pages */}
      <nav aria-label="Legal pages" className="border-b border-line bg-paper">
        <div className="wrap-narrow flex flex-wrap gap-2 py-4">
          {LEGAL_NAV.map((item) => {
            const active = item.href === path;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13.5px] font-medium ${
                  active
                    ? "bg-forest-800 text-white"
                    : "border border-line text-ink-soft hover:bg-forest-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <article className="bg-canvas py-14">
        <div className="wrap-narrow prose-legal">
          {doc.intro.map((p) => (
            <p key={p} className="text-[16px]">
              {p}
            </p>
          ))}

          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Contact — present in all three legal documents */}
          <section>
            <h2>Contact</h2>
            <ul>
              <li>
                General Enquiries:{" "}
                <a href={`mailto:${SITE.emails.info}`}>{SITE.emails.info}</a>
              </li>
              <li>
                Consultation Enquiries:{" "}
                <a href={`mailto:${SITE.emails.care}`}>{SITE.emails.care}</a>
              </li>
              <li>
                Healthcare Professionals &amp; Institutions:{" "}
                <a href={`mailto:${SITE.emails.professionals}`}>
                  {SITE.emails.professionals}
                </a>
              </li>
              <li>
                Privacy &amp; Data Protection:{" "}
                <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>{" "}
                (subject: “Privacy / Data Protection Request”)
              </li>
              <li>
                Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </li>
              <li>Website: {SITE.url.replace("https://", "")}</li>
            </ul>

            <p>
              <strong>Correspondence Address:</strong> {SITE.address.lines.join(" ")}
            </p>
            <p>
              This is a correspondence and business address and is{" "}
              <strong>not a patient-facing clinical facility</strong>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
