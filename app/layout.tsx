import type { Metadata } from "next";
import Script from "next/script";
import { Roboto, Roboto_Slab, Outfit, Bowlby_One_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/components/Providers";
import { generateAIOptimizationSchema, SOCIAL_PROFILES } from "@/lib/schema";
import { LOCATIONS } from "@/lib/locations";

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
    "Houston's premier dog grooming, doggie daycare, and pet boarding service with 30+ years of experience. Three convenient locations: Galleria, Memorial Park, and Pearland.",
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
      "Premium pet grooming, boarding, and day care in Houston. Three locations: Galleria, Memorial Park, and Pearland. 30+ years of experience.",
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
  icons: {
    icon: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/favicon-300x300.png",
    apple: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/favicon-300x300.png",
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
  telephone: "(832) 930-4060",
  email: "galleria@thedoghouseps.com",
  description:
    "Houston's premier pet grooming, doggie daycare, and pet boarding service with 30+ years of experience. Three convenient locations.",
  priceRange: "$$",
  foundingDate: "2000",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  areaServed: {
    "@type": "City",
    name: "Houston",
    "@id": "https://www.wikidata.org/wiki/Q16555",
  },
  sameAs: SOCIAL_PROFILES,
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
  department: Object.values(LOCATIONS).map((location) => ({
    "@type": "PetStore",
    name: location.name,
    telephone: location.phone,
    email: location.email,
    url: `https://www.thedoghouseps.com${location.url}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: location.hours.monday.open,
        closes: location.hours.monday.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: location.hours.saturday.open,
        closes: location.hours.saturday.close,
      },
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(
      `${location.address}, ${location.city}, ${location.state} ${location.zip}`
    )}`,
  })),
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
        {/* ── Performance: Preconnect to external CDNs ── */}
        <link rel="preconnect" href="https://www.thedoghouseps.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.thedoghouseps.com" />
        {/* ── Performance: Preload hero image (LCP optimization) ── */}
        <link
          rel="preload"
          as="image"
          href="https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp"
          type="image/webp"
        />
        {/* ── Font Awesome Icons (non-blocking async loading) ── */}
        <link
          rel="stylesheet"
          media="print"
          onLoad={(e) => {
            const link = e.currentTarget as HTMLLinkElement;
            link.media = "all";
          }}
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAIOptimizationSchema()) }}
        />
        <SchemaMarkup type="itemList" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* ── Skip to main content link ── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-purple-600 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
