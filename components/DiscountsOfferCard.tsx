"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsOfferCard() {
  const { t } = useLanguage();
  return (
    <section className={styles.offerCard}>
      <div className={styles.offerHeader}>
        <h2 className={styles.offerTitle}>{t("discount_new_customer_title")}</h2>
        <div className={styles.badge}>{t("discount_new_customer_badge")}</div>
      </div>
      <p className={styles.offerDescription}>{t("discount_new_customer_desc")}</p>
      <p className={styles.offerNote}>{t("discount_new_customer_note")}</p>
      <Link href="/appointment-request/" className={styles.ctaButton}>
        {t("discount_book_first_appt")}
      </Link>
    </section>
  );
}
