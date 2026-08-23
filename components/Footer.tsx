import Image from "next/image";
import Link from "next/link";
import { LEGAL_NAV, NAV, SITE, SOCIAL } from "@/lib/content";
import { LOGO } from "@/lib/images";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui";

const SOCIAL_ICON: Record<string, typeof YouTubeIcon> = {
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-navy-100">
      <div className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Image
              src={LOGO.lockupLight.src}
              alt={`${SITE.brand} — ${SITE.positioning}`}
              width={LOGO.lockupLight.width}
              height={LOGO.lockupLight.height}
              className="h-[62px] w-auto"
            />

            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-navy-200">
              Operated by {SITE.legalEntity}
            </p>

            {/*
              Correction doc, Contact §17/§19: the phone number stays as an
              official contact detail and is not a direct-call CTA.
            */}
            <address className="mt-4 not-italic text-[14.5px] leading-relaxed text-navy-200">
              {SITE.address.city}
              <br />
              {SITE.phone}
              <br />
              <a href={`mailto:${SITE.emails.info}`} className="hover:text-white">
                {SITE.emails.info}
              </a>
            </address>

            {/* Official channels (correction doc, final page). */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message GeneticxCare on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-navy-200 transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              {SOCIAL.map((s) => {
                const Icon = SOCIAL_ICON[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GeneticxCare on ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-navy-200 transition-colors hover:border-teal-400 hover:text-teal-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-teal-500">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-navy-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-teal-500">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-navy-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/*
              DEVELOPER NOTE: LinkedIn was listed in the correction doc without
              a URL, so it is omitted until the profile address is supplied.
            */}
          </nav>
        </div>

        {/* Non-clinical notice — doc requires this to stay prominent. */}
        <p className="mt-12 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-4 text-[13.5px] leading-relaxed text-navy-200">
          GeneticxCare is not an emergency medical service. For a medical
          emergency, please seek immediate care from an appropriate emergency
          medical facility. The correspondence office is not a patient-facing
          clinical facility.
        </p>

        <div className="mt-8 border-t border-white/12 pt-6 text-[13.5px] text-navy-200">
          © {new Date().getFullYear()} {SITE.legalEntity}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
