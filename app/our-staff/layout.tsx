import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Staff",
  description: "Meet the team at The Dog House Pet Salon",
  openGraph: {
    title: "Our Staff",
    description: "Meet the team at The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/our-staff/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/our-staff/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
