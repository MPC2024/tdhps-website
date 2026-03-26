import type { Metadata } from "next";
import Script from "next/script";
import { Roboto, Roboto_Slab, Outfit, Bowlby_One_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/* ── Google Fonts ── */
const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const bowlbyOneSC = Bowlby_One_SC({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bowlby",
  display: "swap",
});

/* ── Site Metadata ── */
export const metadata: Metadata = {
  title: {
    default: "The Dog House Pet Salon | Houston TX Pet Grooming, Daycare & Boarding",
    template: "%s | The Dog House Pet Salon",
  },
  description:
    "Houston's premier dog grooming, doggie daycare, and pet boarding service with 25+ years of experience. Three convenient locations: Galleria, Memorial Park, and Pearland.",
  keywords: [
    "dog grooming Houston",
    "pet grooming Houston TX",
    "doggie daycare Houston",
    "dog boarding Houston",
    "pet salon Houston",
    "dog grooming Pearland",
    "dog grooming Galleria Houston",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.thedoghouseps.com",
    siteName: "The Dog House Pet Salon",
    title: "The Dog House Pet Salon | Houston Pet Grooming, Boarding & Day Care",
    description:
      "Premium pet grooming, boarding, and day care in Houston. Three locations: Galleria, Memorial Park, and Pearland. 25+ years of experience.",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
        width: 1200,
        height: 630,
        alt: "The Dog House Pet Salon Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheDogHousePS",
    title: "The Dog House Pet Salon | Houston Pet Grooming, Boarding & Day Care",
    description:
      "Premium pet grooming, boarding, and day care in Houston. Three locations: Galleria, Memorial Park, and Pearland.",
    images: [
      "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.thedoghouseps.com",
  },
};

/* ── JSON-LD Structured Data ── */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "@id": "https://www.thedoghouseps.com/#organization",
  name: "The Dog House Pet Salon",
  url: "https://www.thedoghouseps.com",
  logo: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
  telephone: "+1-713-820-6140",
  email: "galleria@thedoghouseps.com",
  description:
    "Houston's premier pet grooming, doggie daycare, and pet boarding service with 25+ years of experience. Three convenient locations.",
  priceRange: "$$",
  foundingDate: "2000",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  areaServed: {
    "@type": "City",
    name: "Houston",
    "@id": "https://www.wikidata.org/wiki/Q16555",
  },
  sameAs: [
    "https://www.facebook.com/thedoghousepetsalon",
    "https://twitter.com/TheDogHousePS",
    "https://www.instagram.com/thedoghouseps/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pet Care Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Pet Grooming",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Grooming" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet Bathing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Filing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Brushing" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Pet Boarding & Daycare",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dog Boarding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doggie Daycare" } },
        ],
      },
    ],
  },
  department: [
    {
      "@type": "PetStore",
      name: "The Dog House Pet Salon - Galleria / Uptown Park",
      telephone: "+1-713-820-6140",
      email: "galleria@thedoghouseps.com",
      url: "https://www.thedoghouseps.com/galleria-uptown-park-location",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5917 Richmond Ave",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77057",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.7294,
        longitude: -95.4819,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "09:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "16:00",
          closes: "17:00",
        },
      ],
      hasMap: "https://maps.google.com/?q=5917+Richmond+Ave,+Houston,+TX+77057",
    },
    {
      "@type": "PetStore",
      name: "The Dog House Pet Salon - Memorial Park",
      telephone: "+1-713-820-6140",
      email: "memorial@thedoghouseps.com",
      url: "https://www.thedoghouseps.com/memorial-park-location",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6434 Washington Avenue",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77007",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.7753,
        longitude: -95.4242,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "09:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "16:00",
          closes: "17:00",
        },
      ],
      hasMap: "https://maps.google.com/?q=6434+Washington+Avenue,+Houston,+TX+77007",
    },
    {
      "@type": "PetStore",
      name: "The Dog House Pet Salon - Pearland",
      telephone: "+1-713-820-6140",
      email: "pearland@thedoghouseps.com",
      url: "https://www.thedoghouseps.com/pearland-location",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2810 Business Center Dr #126",
        addressLocality: "Pearland",
        addressRegion: "TX",
        postalCode: "77584",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.5586,
        longitude: -95.2861,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "18:00",
        },
      ],
      hasMap:
        "https://maps.google.com/?q=2810+Business+Center+Dr+%23126,+Pearland,+TX+77584",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${outfit.variable} ${bowlbyOneSC.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
