import type { Metadata } from "next";
import Link from "next/link";
import PetCamSettings from "./PetCamSettings";

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
          backgroundColor: "#965B83",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #7A4A6B 0%, #965B83 50%, #B07AA0 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,72px)", color: "#ffffff", marginBottom: "16px", lineHeight: 1.1 }}>
            Dog Daycare <span style={{ color: "#ffddee" }}>With Cameras</span>
          </h1>
          <div style={{ marginTop: "32px" }}>
            <Link href="/appointment-request" style={{ backgroundColor: "#ffffff", color: "#965B83", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
              Schedule An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* -- Intro -- */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "16px" }}>
            Dog Daycare With Cameras
          </h2>
          <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#965B83", textAlign: "center", fontWeight: 400, marginBottom: "30px" }}>
            These are the settings for our camera mobile app or pet cams
          </h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, textAlign: "center" }}>
            You may download <strong>&quot;LTS-Connect&quot;</strong> to your mobile phone, Select <strong>America</strong>, then select <strong>USA</strong>, click the icon in the top left hand corner, select <strong>Devices</strong>, once selected click the icon in the top right hand corner; select <strong>Manual Adding</strong> and enter the below settings for the appropriate location&hellip;&hellip;&hellip;<br /><br />
            After you&apos;ve entered the settings you will then select save in the top right corner and select <strong>Start Live View</strong> at the bottom of the screen.
          </p>
        </div>
      </section>

      {/* -- Camera Settings Tables (loaded from API, no hardcoded creds) -- */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PetCamSettings />
        </div>
      </section>

      {/* -- How to Set Up -- */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "16px" }}>
            How to Set Up and Access The Dog House Pet Salon Pet Cam App
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, textAlign: "center", marginBottom: "50px" }}>
            With our pet cam, staying connected to your pet has never been easier. By following a few simple steps, you can set up the LTS-Connect app on your mobile device, giving you the ability to check in on your pet from anywhere, any time.
          </p>
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
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "24px" }}>
            Using The Dog House Pet Salon Pet Cam
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, textAlign: "center", marginBottom: "50px" }}>
            The Dog House Pet Salon Pet Cam is a fantastic feature for pet parents who want reassurance that their furry family member is safe, happy, and having fun while at our facility. With the Pet Cam, you can easily check in on your pet during the day, monitor their play sessions, and even share memorable moments with family and friends.
          </p>
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>
            Key Benefits of Our Pet Cam for Pet Parents
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "24px" }}>
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
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "16px" }}>
            Troubleshooting Tips for the LTS-Connect Pet Cam App
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, textAlign: "center", marginBottom: "40px" }}>
            If you encounter any issues with the LTS-Connect app, here are a few quick troubleshooting steps:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {troubleshootingTips.map((tip) => (
              <div key={tip.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start", backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "24px" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: "16px" }}>&#10003;</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{tip.title}</h4>
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
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#ffffff", marginBottom: "16px" }}>
            Ready to Enroll in Our Daycare?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "30px", lineHeight: 1.6 }}>
            Enjoy peace of mind with our live pet cam while your dog plays, socializes, and has the best day ever at The Dog House Pet Salon.
          </p>
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
