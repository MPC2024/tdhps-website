"use client";

import { useLanguage } from "@/lib/LanguageContext";

export interface BlogHeroTextProps {
  postCount?: number;
}

export default function BlogHeroText({ postCount = 0 }: BlogHeroTextProps) {
  const { t } = useLanguage();
  const subtitle = t("blog_page_subtitle").replace("{count}", postCount.toString());

  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(28px, 5vw, 60px)",
          color: "#000000",
          lineHeight: 1.1,
        }}
      >
        {t("blog_page_title")}
      </h1>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "18px",
          color: "rgba(0,0,0,0.75)",
          marginTop: "16px",
        }}
      >
        {subtitle}
      </p>
    </>
  );
}
