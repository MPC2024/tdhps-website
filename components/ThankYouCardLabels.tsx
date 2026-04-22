"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ThankYouCardLabels() {
  const { t } = useLanguage();

  return {
    reviewTitle: t("thankyou_write_review"),
    reviewSubtitle: t("thankyou_review_on_google"),
    directionsTitle: t("thankyou_get_directions"),
    directionsSubtitle: t("thankyou_directions_maps"),
    connectTitle: t("thankyou_connect_with_us"),
  };
}
