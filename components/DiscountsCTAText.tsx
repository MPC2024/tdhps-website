"use client";

import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsCTAText() {
  const { t } = useLanguage();
  return (
    <section className={styles.finalCTA}>
      <h2>{t("discount_final_cta_title")}</h2>
      <p>{t("discount_final_cta_desc")}</p>
    </section>
  );
}
