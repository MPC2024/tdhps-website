"use client";

import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsLocationText() {
  const { t } = useLanguage();
  return (
    <section className={styles.locations}>
      <h2 className={styles.locationsTitle}>{t("discount_locations_title")}</h2>
    </section>
  );
}
