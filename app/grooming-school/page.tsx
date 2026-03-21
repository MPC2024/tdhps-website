import type { Metadata } from "next";
import GroomingSchoolClient from "./GroomingSchoolClient";

export const metadata: Metadata = {
  title: "Dog Grooming School Houston TX | Dog Grooming Classes",
  description:
    "Join The Dog House Grooming School in Houston! Led by expert Donna Williams, we offer hands-on training and certification in professional dog grooming.",
  openGraph: {
    title: "Grooming School",
    description:
      "Join The Dog House Grooming School in Houston! Led by expert Donna Williams, we offer hands-on training and certification in professional dog grooming.",
    url: "https://www.thedoghouseps.com/grooming-school/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/grooming-school/" },
};

export default function GroomingSchoolPage() {
  return <GroomingSchoolClient />;
}
