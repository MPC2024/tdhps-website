import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import HomepageContent from "@/components/HomepageContent";

export const metadata: Metadata = {
  title: "Dog House Pet Salon Houston TX | Grooming & Spa Services",
  description:
    "The Dog House Pet Salon in Houston TX provides premium grooming, styling, bathing & care. Learn grooming schedules & how to choose the right salon.",
  openGraph: {
    title: "Dog House Pet Salon Houston TX | Grooming & Spa Services",
    description:
      "The Dog House Pet Salon in Houston TX provides premium grooming, styling, bathing & care. Learn grooming schedules & how to choose the right salon.",
    url: "https://www.thedoghouseps.com/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/" },
};

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1: Hero Slider
      ══════════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <HeroSlider />
        <div aria-hidden="true" style={{position:"absolute",bottom:"-1px",left:0,width:"100%",lineHeight:0,zIndex:10}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{display:"block",width:"100%",height:"60px"}}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2-10: All Content (Translated)
      ══════════════════════════════════════════════ */}
      <HomepageContent />
    </>
  );
}

