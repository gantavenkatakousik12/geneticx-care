import Image from "next/image";
import Link from "next/link";
import { LEGAL_NAV, NAV, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest-900 text-forest-100">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                width={38}
                height={38}
                className="h-[38px] w-[38px] rounded-[11px] object-cover ring-1 ring-white/20"
              />
              <span className="font-display text-[19px] font-bold text-white">
                Geneticx<span className="text-gold-500">Care</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-forest-200">
              {SITE.positioning}
              <br />
              Operated by {SITE.legalEntity}
            </p>

            <address className="mt-5 not-italic text-[14.5px] leading-relaxed text-forest-200">
              {SITE.address.city}
              <br />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-white">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.emails.info}`} className="hover:text-white">
                {SITE.emails.info}
              </a>
            </address>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-500">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-forest-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-500">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-forest-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/*
              DEVELOPER NOTE (doc §14): social links are added only once the
              official profile URLs are finalized. Intentionally omitted.
            */}
          </nav>
        </div>

        {/* Non-clinical notice — doc requires this to stay prominent. */}
        <p className="mt-12 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-4 text-[13.5px] leading-relaxed text-forest-200">
          GeneticxCare is not an emergency medical service. For a medical
          emergency, please seek immediate care from an appropriate emergency
          medical facility. The correspondence office is a business address and
          is not a patient-facing clinical facility.
        </p>

        <div className="mt-8 border-t border-white/12 pt-6 text-[13.5px] text-forest-200">
          © {new Date().getFullYear()} {SITE.legalEntity}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
