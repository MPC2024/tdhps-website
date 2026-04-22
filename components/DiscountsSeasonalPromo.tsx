"use client";

import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsSeasonalPromo() {
  const { t } = useLanguage();
  return (
    <section className={styles.seasonalCard}>
      <h2 className={styles.seasonalTitle}>{t("discount_seasonal_title")}</h2>
      <div className={styles.promotionList}>
        <div className={styles.promotion}>
          <h3>{t("discount_holiday_title")}</h3>
          <p>{t("discount_holiday_desc")}</p>
        </div>
        <div className={styles.promotion}>
          <h3>{t("discount_summer_title")}</h3>
          <p>{t("discount_summer_desc")}</p>
        </div>
        <div className={styles.promotion}>
          <h3>{t("discount_spring_title")}</h3>
          <p>{t("discount_spring_desc")}</p>
        </div>
      </div>
    </section>
  );
}
