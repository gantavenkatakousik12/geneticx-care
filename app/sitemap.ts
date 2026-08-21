import type { MetadataRoute } from "next";
import { LEGAL_NAV, NAV, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [...NAV, ...LEGAL_NAV].map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
