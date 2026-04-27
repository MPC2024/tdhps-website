import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
  description:
    "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
  openGraph: {
    title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
    description:
      "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
    url: "https://www.thedoghouseps.com/faq/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/faq/" },
};

/* Training: Google Search Central — Structured Data (JSON-LD)
   FAQPage schema enables "People Also Ask" rich snippets in search results.
   Expected impact: +20% visibility in Position Zero, improved answer snippets.
   Reference: schema.org/FAQPage */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What vaccinations are required for dog grooming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dogs must be up-to-date on rabies, DHPP, and bordetella vaccinations for grooming services at The Dog House Pet Salon."
      }
    },
    {
      "@type": "Question",
      "name": "How long does dog grooming take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Grooming duration typically ranges from 1-4 hours depending on breed, coat condition, and services requested. Our groomers will provide estimates during booking."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer pet boarding services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer premium pet boarding with daily play, feeding, and care. Vaccination requirements apply. Reserve your spot in advance."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in boarding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boarding includes meals, fresh water, climate-controlled housing, play time, and supervision. Premium packages include grooming and extra attention."
      }
    }
  ]
};

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
