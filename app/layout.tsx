import type { Metadata } from "next";
import { Roboto, Roboto_Slab, Outfit, Bowlby_One_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    siteName: "The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
        width: 1200,
        height: 630,
        alt: "The Dog House Pet Salon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
