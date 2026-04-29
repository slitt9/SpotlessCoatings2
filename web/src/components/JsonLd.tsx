import { SITE } from "@/lib/site-content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  description: SITE.tagline,
  telephone: SITE.phoneTel,
  url: "https://spotlesscoatings.ca",
  areaServed: {
    "@type": "AdministrativeArea",
    name: SITE.area,
  },
  sameAs: [SITE.instagram],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
