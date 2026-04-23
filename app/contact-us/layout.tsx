import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact The Dog House Pet Salon in Houston TX for pet grooming, boarding, and daycare services",
  openGraph: {
    title: "Contact Us",
    description: "Contact The Dog House Pet Salon in Houston TX for pet grooming, boarding, and daycare services",
    url: "https://www.thedoghouseps.com/contact-us/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/contact-us/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
