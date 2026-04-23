import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donna Williams - Owner & Master Pet Groomer",
  description: "Meet Donna Williams, nationally renowned certified master pet groomer and trainer at The Dog House Pet Salon",
  openGraph: {
    title: "Donna Williams - Owner & Master Pet Groomer",
    description: "Meet Donna Williams, nationally renowned certified master pet groomer and trainer at The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/donna-williams/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/donna-williams/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
