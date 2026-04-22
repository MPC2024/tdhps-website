"use client";

import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/app/discounts/discounts.module.css";

export default function DiscountsRedeemText() {
  const { t } = useLanguage();
  return (
    <section className={styles.redeemCard}>
      <h2 className={styles.redeemTitle}>{t("discount_redeem_title")}</h2>
      <ol className={styles.steps}>
        <li>
          <span className={styles.stepNumber}>1</span>
          <div>
            <h3>{t("discount_step1_title")}</h3>
            <p>{t("discount_step1_desc")}</p>
          </div>
        </li>
        <li>
          <span className={styles.stepNumber}>2</span>
          <div>
            <h3>{t("discount_step2_title")}</h3>
            <p>{t("discount_step2_desc")}</p>
          </div>
        </li>
        <li>
          <span className={styles.stepNumber}>3</span>
          <div>
            <h3>{t("discount_step3_title")}</h3>
            <p>{t("discount_step3_desc")}</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
