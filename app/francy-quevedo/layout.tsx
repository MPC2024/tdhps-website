import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Francy Quevedo - Master Pet Groomer",
  description: "Meet Francy Quevedo, master pet groomer at The Dog House Pet Salon Memorial Park location",
  openGraph: {
    title: "Francy Quevedo - Master Pet Groomer",
    description: "Meet Francy Quevedo, master pet groomer at The Dog House Pet Salon Memorial Park location",
    url: "https://www.thedoghouseps.com/francy-quevedo/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/francy-quevedo/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
