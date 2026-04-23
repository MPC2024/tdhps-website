import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Margarita Batres - Master Pet Groomer",
  description: "Meet Margarita Batres, master pet groomer at The Dog House Pet Salon Pearland location",
  openGraph: {
    title: "Margarita Batres - Master Pet Groomer",
    description: "Meet Margarita Batres, master pet groomer at The Dog House Pet Salon Pearland location",
    url: "https://www.thedoghouseps.com/margarita-batres/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/margarita-batres/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
