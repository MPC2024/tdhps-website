import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keylin Paulina Orellana Delcid - Master Pet Groomer",
  description: "Meet Keylin Orellana, certified pet groomer at The Dog House Pet Salon Galleria location",
  openGraph: {
    title: "Keylin Paulina Orellana Delcid - Master Pet Groomer",
    description: "Meet Keylin Orellana, certified pet groomer at The Dog House Pet Salon Galleria location",
    url: "https://www.thedoghouseps.com/keylin-paulina-orellana-delcid/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/keylin-paulina-orellana-delcid/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
