"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export interface ThankYouOfferSectionProps {
  isNew: boolean;
  reviewLink: string;
}

export default function ThankYouOfferSection({ isNew, reviewLink }: ThankYouOfferSectionProps) {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {isNew ? (
          /* New customer: 10% discount offer */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              alignItems: "center",
              background: "#fff",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "6px 6px 9px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Offer.png"
                alt="Special offer"
                width={300}
                height={300}
                style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#965B83",
                  textTransform: "uppercase" as const,
                  marginBottom: "8px",
                }}
              >
                {t("thankyou_special_offer")}
              </p>
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "clamp(28px,4vw,48px)",
                  color: "#1F2124",
                  marginBottom: "12px",
                  lineHeight: 1.1,
                }}
              >
                {t("thankyou_discount_amount")}{" "}
                <span style={{ color: "#965B83" }}>{t("thankyou_discount_label")}</span>
              </h2>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "17px",
                  color: "#54595F",
                  marginBottom: "24px",
                  lineHeight: 1.6,
                }}
              >
                <strong>{t("thankyou_new_customers_only")}</strong>
                <br />
                {t("thankyou_discount_services")}
              </p>
              <a
                href="https://www.nuvetlabs.com/order_new2/products.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Shop
              </a>
            </div>
          </div>
        ) : (
          /* Existing customer: punchcard offer */
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
              boxShadow: "6px 6px 9px rgba(0,0,0,0.08)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(32px,5vw,60px)",
                color: "#965B83",
                marginBottom: "20px",
              }}
            >
              {t("thankyou_free_label")}
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "18px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              {t("thankyou_punchcard_text")}
            </p>
            <a
              href={reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("thankyou_write_review")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
