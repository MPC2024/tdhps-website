import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
  description:
    "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
  openGraph: {
    title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
    description:
      "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
    url: "https://www.thedoghouseps.com/faq/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/faq/" },
};

export default function FaqPage() {
  return <FaqContent />;
}
