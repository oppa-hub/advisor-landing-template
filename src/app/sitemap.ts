import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.seo.canonicalUrl) return [];
  return [
    { url: site.seo.canonicalUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${site.seo.canonicalUrl.replace(/\/$/, "")}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
