"use client";

import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsPartnerCards() {
  const { t } = useLanguage();
  return (
    <>
      {/* The Farmer's Dog Partnership */}
      <section className={styles.partnerCard}>
        <div className={styles.partnerHeader}>
          <h2 className={styles.partnerTitle}>{t("discount_farmers_dog_title")}</h2>
        </div>
        <p className={styles.partnerDescription}>{t("discount_farmers_dog_desc")}</p>
        <p className={styles.partnerBenefit}>{t("discount_farmers_dog_benefits")}</p>
        <a
          href="https://www.thefarmersdog.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.partnerLink}
        >
          {t("discount_farmers_dog_link")}
        </a>
      </section>

      {/* NuVet Labs Partnership */}
      <section className={styles.partnerCard}>
        <div className={styles.partnerHeader}>
          <h2 className={styles.partnerTitle}>{t("discount_nuvet_title")}</h2>
        </div>
        <p className={styles.partnerDescription}>{t("discount_nuvet_desc")}</p>
        <p className={styles.partnerBenefit}>{t("discount_nuvet_benefits")}</p>
        <a
          href="https://www.nuvetlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.partnerLink}
        >
          {t("discount_nuvet_link")}
        </a>
      </section>
    </>
  );
}
