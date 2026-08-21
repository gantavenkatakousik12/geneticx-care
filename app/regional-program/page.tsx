import { IMAGES } from "@/lib/images";
import { CTABand, Notice, PageHero, Section, SectionHead } from "@/components/ui";

export const metadata = {
  title: "Regional Consultation Program",
  description:
    "The GeneticxCare Regional Consultation Program connects patients and healthcare teams with genetics expertise through participating healthcare institutions.",
  alternates: { canonical: "/regional-program" },
};

const AUDIENCES = [
  {
    title: "For Patients",
    body: "Access genetics consultation closer to where you receive healthcare.",
  },
  {
    title: "For Doctors",
    body: "Connect patients with genetics expertise when a genetic or familial concern arises.",
  },
  {
    title: "For Hospitals",
    body: "Integrate genetics support into existing healthcare pathways.",
  },
] as const;

export default function RegionalProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Regional Program"
        title="Regional Consultation Program"
        lead="Bringing genetics closer to regional healthcare."
        extra="The GeneticxCare Regional Consultation Program connects patients and healthcare teams with genetics expertise through participating healthcare institutions."
        image={IMAGES.institution}
      />

      <Section>
        <SectionHead
          title="Improving access where genetics expertise is limited"
          lead="The program is intended to improve access to genetics services in areas where dedicated genetics expertise may not otherwise be readily available."
        />
      </Section>

      <Section tone="paper" className="!pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article key={a.title} className="card h-full">
              <h2 className="text-[19px] text-forest-900">{a.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead eyebrow="How It Works" title="Delivered with participating institutions" />
          <div className="lg:pt-2">
            <p className="text-pretty text-[16px] leading-relaxed text-ink-soft">
              GeneticxCare collaborates with participating healthcare
              institutions to facilitate genetics consultations.
            </p>
            <div className="mt-6">
              <Notice>
                Availability depends on the participating institution, location,
                clinical requirements and professional availability.
              </Notice>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Explore the Regional Consultation Program"
        body="Patients can explore consultation options, and healthcare institutions can discuss collaboration with GeneticxCare."
        primary={{ label: "For Patients: Explore Consultation", href: "/consultation" }}
        secondary={{
          label: "For Institutions: Discuss Collaboration",
          href: "/healthcare-professionals#collaborate",
        }}
      />
    </>
  );
}
