"use client";

import { useLanguage } from "@/lib/LanguageContext";

export interface ThankYouOfferProps {
  isNew: boolean;
}

export default function ThankYouOfferText({ isNew }: ThankYouOfferProps) {
  const { t } = useLanguage();

  return (
    <>
      {isNew ? (
        <>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#965B83",
              textTransform: "uppercase",
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
            {t("thankyou_discount_amount")} <span style={{ color: "#965B83" }}>{t("thankyou_discount_label")}</span>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
