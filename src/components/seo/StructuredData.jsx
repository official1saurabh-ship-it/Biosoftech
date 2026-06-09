import { Helmet } from "react-helmet-async";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Biosoftech Solutions",
  image: "https://www.biosoftech.com/og-image.jpg",
  "@id": "https://www.biosoftech.com",
  url: "https://www.biosoftech.com",
  telephone: "+91-6209688930",
  email: "info@biosoftech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyari, Chinhat",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226028",
    addressCountry: "IN",
  },
  foundingDate: "23/07/2025",
  description:
    "Biosoftech Solutions is a leading software development company delivering web, mobile, desktop, cloud, and AI automation solutions.",
  sameAs: [
    "https://www.facebook.com/biosoftech",
    "https://www.linkedin.com/company/biosoftech",
    "https://twitter.com/biosoftech",
  ],
  areaServed: "IN",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: "Biosoftech Solutions" },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Solutions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desktop Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development" } },
    ],
  },
};

const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

const StructuredData = ({ type, data }) => {
  let schema = null;

  if (type === "LocalBusiness") schema = localBusinessSchema;
  else if (type === "Service") schema = serviceSchema;
  else if (type === "FAQ" && data) schema = faqSchema(data);
  else if (type === "Breadcrumb" && data) schema = breadcrumbSchema(data);
  else if (type === "custom" && data) schema = data;

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export { StructuredData, localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema };
export default StructuredData;
