import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import TrustSignalBar from "@/components/TrustSignalBar";
import HomepageContent from "@/components/HomepageContent";
import FeaturedVideo from "@/components/FeaturedVideo";

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

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Dog House Pet Salon - Houston Pet Grooming, Boarding & Day Care",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".hero-description"],
  },
  url: "https://www.thedoghouseps.com/",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
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

      {/* Trust Signal Bar - below hero */}
      <TrustSignalBar />

      {/* ══════════════════════════════════════════════
          SECTION 2-10: All Content (Translated)
      ══════════════════════════════════════════════ */}
      <HomepageContent />

      {/* ══════════════════════════════════════════════
          FEATURED VIDEO 1: Grooming Tutorial
      ══════════════════════════════════════════════ */}
      <FeaturedVideo
        title="Professional Grooming Tips from the Experts"
        description="Watch our certified groomers share insider tips on how to keep your pet looking beautiful between salon visits. Learn proper brushing techniques, nail care, and coat maintenance for your dog's specific breed."
        youtubeUrl=""
        thumbnailUrl="https://www.thedoghouseps.com/wp-content/uploads/2025/04/grooming-tutorial-placeholder.jpg"
      />

      {/* ══════════════════════════════════════════════
          FEATURED VIDEO 2: Pet Daycare Benefits
      ══════════════════════════════════════════════ */}
      <FeaturedVideo
        title="Why Pet Daycare Is Good for Your Dog"
        description="Discover how dog daycare provides essential socialization, exercise, and mental stimulation. Our pet care specialists explain the behavioral and health benefits of regular daycare, especially for working pet parents."
        youtubeUrl=""
        thumbnailUrl="https://www.thedoghouseps.com/wp-content/uploads/2025/04/daycare-benefits-placeholder.jpg"
      />

      {/* ══════════════════════════════════════════════
          FEATURED VIDEO 3: Facility Tour
      ══════════════════════════════════════════════ */}
      <FeaturedVideo
        title="Take a Virtual Tour of Our Facilities"
        description="Step inside The Dog House Pet Salon and see our state-of-the-art grooming bays, comfortable boarding suites, and spacious daycare play areas. Meet our team and learn what makes us Houston's trusted pet care destination."
        youtubeUrl=""
        thumbnailUrl="https://www.thedoghouseps.com/wp-content/uploads/2025/04/facility-tour-placeholder.jpg"
      />
    </>
  );
}

