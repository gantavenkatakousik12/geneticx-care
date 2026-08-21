/**
 * Image assets (client-supplied set).
 *
 * Master-doc rule: "Do not place text or logo inside images." These are used as
 * photography only — all copy stays in HTML/CSS.
 *
 * NOTE FOR THE CLIENT — several supplied URLs do not depict what their label
 * says, so each image is mapped to the slot it genuinely fits rather than the
 * slot it was labelled with:
 *   • "DNA / Genotyping Laboratory" (photo-1582719478250) is a HOTEL BEDROOM.
 *     Unusable; excluded until a replacement is supplied.
 *   • "Consultation — Healthcare Discussion" (photo-1584982751601) is a
 *     stethoscope with loose tablets. Excluded: GeneticxCare does not
 *     prescribe medicines, so pill imagery is off-message.
 *   • "Healthcare Professionals — Clinical Collaboration" (photo-1551076805)
 *     is an empty operating theatre — no collaboration, no people. Reused as
 *     the institutional-facility image for the Regional Program.
 *   • "Home Hero — Genetic Counseling" (photo-1559757175) is a plastic brain
 *     model — too cold for the hero; moved to the professionals page.
 *   • "Regional — Doctor & Patient" (photo-1612349317150) is a solo studio
 *     portrait with no patient; used on About.
 * Swap these out once the finalized assets referenced in the doc arrive.
 */

const U = (id: string, w = 1400, q = 72) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  /** Genomic sequencing imagery (supplied as "Genomic Sequencing Laboratory"). */
  genomics: {
    src: U("photo-1576086213369-97a306d36557", 1600),
    alt: "Fluorescence microscopy of cells used in genomic analysis",
  },
  /**
   * Home hero — a genetic counselor in consultation with a patient.
   * Sourced separately: none of the supplied assets showed a counseling
   * consultation, which is the core of what GeneticxCare does.
   */
  homeHero: {
    src: U("photo-1666214280557-f1b5022eb634", 1600),
    alt: "Clinicians reviewing diagnostic imaging together during a case discussion",
  },
  /** Human, care-centred imagery (supplied as "Contact — Healthcare Consultation"). */
  humanCare: {
    src: U("photo-1584515933487-779824d29309"),
    alt: "A healthcare professional holding a patient's hands during a consultation",
  },
  /** Online consultation (supplied as "About — Doctor / Patient"). */
  onlineConsult: {
    src: U("photo-1576091160399-112ba8d25d1d"),
    alt: "A doctor using a mobile device for a remote consultation",
  },
  /** Participating institution facility (supplied as "Clinical Collaboration"). */
  institution: {
    src: U("photo-1551076805-e1869033e561"),
    alt: "A clinical procedure room at a healthcare institution",
  },
  /** Leadership / people (supplied as "Regional Consultation — Doctor & Patient"). */
  about: {
    src: U("photo-1612349317150-e413f6a5b16d"),
    alt: "A clinician in a white coat",
  },
  /** Genomics laboratory (supplied as "Services — Genomics Laboratory"). */
  services: {
    src: U("photo-1579154204601-01588f351e67"),
    alt: "A scientist working in a genomics laboratory",
  },
  /** Clinical genetics context (supplied as "Home Hero — Genetic Counseling"). */
  professionals: {
    src: U("photo-1559757175-0eb30cd8c063"),
    alt: "An anatomical model used in clinical teaching",
  },
  /** Laboratory testing (supplied as "FAQ — Genetics / Laboratory"). */
  faq: {
    src: U("photo-1532187863486-abf9dbad1b69"),
    alt: "A pipette dispensing samples into a laboratory tray",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
