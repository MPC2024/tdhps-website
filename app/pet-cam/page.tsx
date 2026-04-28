import type { Metadata } from "next";
import Link from "next/link";
import PetCamSettings from "./PetCamSettings";
import PetCamHeroText from "@/components/PetCamHeroText";
import PetCamIntroText from "@/components/PetCamIntroText";
import PetCamSetupText from "@/components/PetCamSetupText";
import PetCamBenefitsText from "@/components/PetCamBenefitsText";
import PetCamTroubleshootText from "@/components/PetCamTroubleshootText";
import PetCamCTAText from "@/components/PetCamCTAText";

export const metadata: Metadata = {
  title: "Dog Daycare with Cameras for Peace of Mind | The Dog House",
  description:
    "Stay worry-free by opting for dog daycare with cameras. Enjoy live views of your dog playing and interacting while you are away.",
  openGraph: {
    title: "Dog Daycare With Cameras",
    description:
      "Stay worry-free by opting for dog daycare with cameras. Enjoy live views of your dog playing and interacting while you are away.",
    url: "https://www.thedoghouseps.com/pet-cam/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pet-cam/" },
};

const setupSteps = [
  {
    step: 1,
    title: "Download the App",
    text: 'Begin by downloading the "LTS-Connect" app on your mobile device. This app is available on both iOS and Android platforms, making it convenient for all pet parents.',
  },
  {
    step: 2,
    title: "Select Your Region",
    text: 'Once downloaded, open the app and select "America" as the region. From there, choose "USA" to ensure compatibility with our pet cam systems.',
  },
  {
    step: 3,
    title: "Access Device Settings",
    text: "Tap the icon in the top left-hand corner of the screen to access the main menu. Select Devices from the menu options to begin setting up the connection to our pet cams.",
  },
  {
    step: 4,
    title: "Add Device Manually",
    text: "In the top right corner, select the icon that allows you to add a new device. Choose Manual Adding from the options to input the settings specific to The Dog House Pet Salon.",
  },
  {
    step: 5,
    title: "Enter the Location-Specific Settings",
    text: "Enter the unique settings provided by The Dog House Pet Salon for the location you wish to view. Ensure each detail is entered accurately to enable a smooth connection.",
  },
  {
    step: 6,
    title: "Save and Start Live View",
    text: "After entering the settings, tap Save in the top right corner. At the bottom of the screen, select Start Live View to connect and begin streaming live footage of your pet.",
  },
];

const keyBenefits = [
  {
    title: "Real-Time Peace of Mind",
    text: "Pet cams allow you to monitor your pet's activities, giving you real-time reassurance about their safety and comfort.",
  },
  {
    title: "Daily Connection with Your Pet",
    text: "Stay connected with your pet from anywhere, whether you're at work or traveling.",
  },
  {
    title: "Ease of Use",
    text: "The LTS-Connect app is designed with simplicity in mind, making it easy to connect and view your pet with just a few taps.",
  },
  {
    title: "Secure Viewing",
    text: "Our Pet Cam system is set up with your privacy in mind, ensuring a secure and private experience every time you log in.",
  },
];

const troubleshootingTips = [
  {
    title: "Ensure Internet Connectivity",
    text: "A stable internet connection on your mobile device is required for streaming.",
  },
  {
    title: "Check App Permissions",
    text: "Make sure the app has permission to access the network and any required settings on your device.",
  },
  {
    title: "Update App Settings",
    text: "If prompted, update the app to its latest version for optimal functionality.",
  },
];

export default function PetCamPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-camera.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <PetCamHeroText />
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">
              Schedule An Appointment
            </Link>
            <a
              href="#pet-cam-setup"
              style={{
                backgroundColor: "transparent",
                color: "#965B83",
                border: "2px solid #965B83",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-block",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              How to Set Up Pet Cam
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* -- Intro -- */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <PetCamIntroText />
        </div>
      </section>

      {/* -- Camera Connection Settings -- */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 4vw, 40px)", color: "#1F2124", textAlign: "center", marginBottom: "16px" }}>
            Camera Connection <span style={{ color: "#965B83" }}>Settings</span>
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Use the settings below to connect to our live pet cameras at each location.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
            {/* Galleria Location */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#965B83", padding: "16px 24px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", margin: 0 }}>Galleria / Uptown Park</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["Location", "5917 Richmond Ave"],
                    ["Alias", "Dog Owners"],
                    ["Register Mode", "IP/Domain"],
                    ["IP Address", "96.73.83.249"],
                    ["Port", "7000"],
                    ["User Name", "client"],
                    ["Password", "5917dhps"],
                    ["Camera No", "(will automatically populate)"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "14px 24px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", width: "40%" }}>{label}</td>
                      <td style={{ padding: "14px 24px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Memorial Park Location */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#965B83", padding: "16px 24px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", margin: 0 }}>Memorial Park</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["Location", "6434 Washington Ave"],
                    ["Alias", "DHPS Washington"],
                    ["Register Mode", "IP/Domain"],
                    ["IP Address", "96.73.114.233"],
                    ["Port", "8000"],
                    ["User Name", "dogowners"],
                    ["Password", "6434dhps@"],
                    ["Camera No", "(will automatically populate)"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "14px 24px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", width: "40%" }}>{label}</td>
                      <td style={{ padding: "14px 24px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* -- Camera Settings Tables (loaded from API, no hardcoded creds) -- */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PetCamSettings />
        </div>
      </section>

      {/* -- How to Set Up -- */}
      <section id="pet-cam-setup" style={{ backgroundColor: "#ffffff", padding: "80px 20px", scrollMarginTop: "100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <PetCamSetupText />
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>
            Step-by-Step Guide for Downloading and Setting Up LTS-Connect
          </h3>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {setupSteps.map((s) => (
              <li key={s.step} style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "24px" }}>
                <div style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#ffffff" }}>{s.step}</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{s.title}</h4>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -- About Pet Cam -- */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <PetCamBenefitsText />
          <style dangerouslySetInnerHTML={{ __html: `
            .petcam-benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
            @media (max-width: 600px) { .petcam-benefits-grid { grid-template-columns: 1fr; } }
          `}} />
          <div className="petcam-benefits-grid">
            {keyBenefits.map((b) => (
              <div key={b.title} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{b.title}</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Troubleshooting -- */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <PetCamTroubleshootText />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {troubleshootingTips.map((tip) => (
              <div key={tip.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start", backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "24px" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: "16px" }}>&#10003;</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{tip.title}</h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginTop: "30px", textAlign: "center" }}>
            By following these steps, you&apos;ll be able to check in on your pet throughout the day, enjoying the added connection and peace of mind that our pet cam provides.
          </p>
        </div>
      </section>

      {/* -- CTA -- */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <PetCamCTAText />
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/appointment-request" style={{ backgroundColor: "#ffffff", color: "#965B83", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
              Schedule An Appointment
            </Link>
            <Link href="/dog-day-care" style={{ backgroundColor: "transparent", border: "2px solid #fff", color: "#fff", padding: "13px 28px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
              Learn About Daycare
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
