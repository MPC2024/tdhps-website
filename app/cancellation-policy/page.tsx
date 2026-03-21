import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation Policy | The Dog House Pet Salon",
  description:
    "Learn about The Dog House Pet Salon's cancellation policy, designed to give you flexibility with your pet care appointments in Houston.",
  openGraph: {
    title: "Cancellation Policy | The Dog House Pet Salon",
    description:
      "Learn about The Dog House Pet Salon's cancellation policy, designed to give you flexibility with your pet care appointments in Houston.",
    url: "https://www.thedoghouseps.com/cancellation-policy/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/cancellation-policy/" },
};

export default function CancellationPolicyPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "60vh" }}>
      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: '"Bowlby One SC", Sans-serif',
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#ffffff",
            margin: 0,
          }}
        >
          Cancellation Policy
        </h1>
        <p
          style={{
            fontFamily: '"Outfit", Sans-serif',
            fontSize: "18px",
            color: "rgba(255,255,255,0.85)",
            marginTop: "12px",
          }}
        >
          The Dog House Pet Salon
        </p>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: '"Outfit", Sans-serif',
            fontSize: "16px",
            color: "#54595F",
            lineHeight: 1.8,
          }}
        >
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(20px, 2.5vw, 28px)",
              color: "#1F2124",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            Boarding Reservation / Cancellation Policy
          </h2>

          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "18px",
              color: "#965B83",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            Introduction
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Our boarding facility is often full and as a result, we sometimes must turn potential
            guests away. No shows or last-minute cancellations take away spots needed by other guests
            requesting accommodations. To serve our clients better, we have a reservation and deposit
            policy.
          </p>

          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "18px",
              color: "#965B83",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            Deposit Requirement
          </h3>
          <p style={{ marginBottom: "20px" }}>
            A deposit of <strong>$25.00 per pet</strong> is required at the time of booking. If the
            deposit is not received, the booking will not be made.
          </p>

          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "18px",
              color: "#965B83",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            Cancellation &amp; No-Show Policy
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Any cancellation before your boarding check-in date, or a &ldquo;no-show&rdquo;, will result in
            forfeiture of the full deposit. All forfeited deposits will be posted on the guest&rsquo;s
            account for future use towards any service or retail product.
          </p>

          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "18px",
              color: "#965B83",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            Payment
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Payment for the balance of the full boarding stay will be due at pick-up. All pricing and
            policies are subject to change without notice.
          </p>

          <div
            style={{
              backgroundColor: "#F8F8F8",
              borderRadius: "12px",
              padding: "30px",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "20px",
                color: "#1F2124",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              Ready to Schedule an Appointment?
            </p>
            <Link
              href="/appointment-request"
              style={{
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontFamily: '"Outfit", Sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
