/**
 * Image assets — client-supplied final set (August 2026 correction doc).
 *
 * All files live in /public/images. Widths/heights are the intrinsic pixel
 * dimensions of the supplied files so next/image can reserve layout space.
 *
 * NOTE FOR THE CLIENT — the master doc says "do not place text or logo inside
 * images". The supplied home-online-consultation and contact visuals do carry
 * the GeneticxCare wordmark inside the artwork. They are used as delivered
 * because they are the approved assets; flagging the conflict here.
 */

type Img = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

const img = (src: string, alt: string, width: number, height: number): Img => ({
  src: `/images/${src}`,
  alt,
  width,
  height,
});

export const IMAGES = {
  /** Home hero — genetic counselor discussing a pedigree with a couple. */
  homeHero: img(
    "home-hero.png",
    "A genetic counselor discussing a family pedigree chart with a couple during a consultation",
    2400,
    1600,
  ),

  /**
   * Home → Access to Genetics Care, "Online Genetic Consultation" card.
   * Doc §10: a clean, subtle digital/remote-care visual — not another
   * doctor-and-patient photograph.
   */
  homeOnline: img(
    "home-online-consultation.png",
    "A laptop on a desk showing the GeneticxCare online consultation screen",
    1672,
    941,
  ),

  /**
   * Home → Access to Genetics Care, "Regional Consultation Program" card.
   * Doc §10: the approved regional-access visual, not a hospital room.
   */
  homeRegional: img(
    "home-regional-consultation.png",
    "An illustrated map of India with Telangana and Andhra Pradesh highlighted, between rural and urban healthcare facilities",
    1536,
    1024,
  ),

  /**
   * About hero — the bridge visual representing genetics connecting with
   * healthcare. Doc §10 reserves this image for About only.
   */
  aboutBridge: img(
    "about-bridge.png",
    "A bridge linking laboratory science with clinical care and families",
    1536,
    1024,
  ),

  /** About — Founder & Director portrait. */
  director: img(
    "about-director.jpg",
    "Ravikanth Dabbeta, Founder and Director of GeneticxCare",
    1200,
    1800,
  ),

  /** Services hero — genetics and genomics service overview visual. */
  services: img(
    "services.png",
    "A DNA helix branching into icons representing the GeneticxCare service areas",
    1536,
    1024,
  ),

  /** Consultation hero — online and in-person consultation settings. */
  consultation: img(
    "consultation.png",
    "A genetic counselor on an online consultation alongside an in-person consultation with a couple",
    1717,
    916,
  ),

  /** Regional Program hero — genetics access across regional locations. */
  regional: img(
    "regional-program.png",
    "A genetics consultation linked by a route to city, town, rural and mobile healthcare settings",
    1535,
    1024,
  ),

  /** Healthcare Professionals hero — clinical team case discussion. */
  professionals: img(
    "professionals.png",
    "A multidisciplinary clinical team discussing a case around a meeting table",
    1536,
    1024,
  ),

  /** Healthcare Professionals → Institutional Collaboration section only. */
  institutional: img(
    "institutional-collaboration.png",
    "Participating hospitals and a diagnostic laboratory connected across a regional map",
    1535,
    1024,
  ),

  /** FAQ hero. */
  faq: img(
    "faq.png",
    "A question mark surrounded by genetics and laboratory icons",
    1536,
    1024,
  ),

  /** Contact hero. */
  contact: img(
    "contact.png",
    "A GeneticxCare desk card beside a laptop and notebook in a quiet office",
    1536,
    1024,
  ),
} as const;

/**
 * Brand marks, cropped from the supplied master logo (logo-source.png).
 * The "light" variants are recoloured for the navy surfaces.
 */
export const LOGO = {
  wordmark: { src: "/images/logo-wordmark.png", width: 1370, height: 232 },
  wordmarkLight: { src: "/images/logo-wordmark-light.png", width: 1370, height: 232 },
  lockupLight: { src: "/images/logo-lockup-light.png", width: 1370, height: 354 },
} as const;

export type ImageKey = keyof typeof IMAGES;
