import { SiteThemeStyles } from "@/components/Sections";
import { site } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.introduction,
    email: site.contact.email,
    telephone: site.contact.phone,
    ...(site.seo.canonicalUrl ? { url: site.seo.canonicalUrl } : {}),
    sameAs: [site.contact.facebookUrl, site.contact.linkedinUrl].filter(Boolean),
  };
  const safeJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return <>
    <SiteThemeStyles />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson }} />
  </>;
}
