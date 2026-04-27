import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grooming Price Calculator | The Dog House Pet Salon",
  description:
    "Get an instant, personalized grooming price estimate for your dog at The Dog House Pet Salon. Transparent pricing. No obligation. Takes 30 seconds.",
  openGraph: {
    title: "Grooming Price Calculator | The Dog House Pet Salon",
    description:
      "Instant grooming price estimates. Transparent pricing. No surprises.",
    url: "https://www.thedoghouseps.com/calculator",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/calculator/" },
};

export default function CalculatorPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", paddingTop: "120px" }}>
      <iframe
        src="https://calculator.thedoghouseps.com/"
        title="Grooming Price Calculator"
        style={{
          width: "100%",
          height: "calc(100vh - 120px)",
          border: "none",
          display: "block",
        }}
        allowFullScreen
      />
    </div>
  );
}
