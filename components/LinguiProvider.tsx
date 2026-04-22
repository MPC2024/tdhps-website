"use client";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { messages as enMessages } from "@/src/locales/en/messages";
import { messages as esMessages } from "@/src/locales/es/messages";

// Initialize with English
i18n.load("en", enMessages);
i18n.load("es", esMessages);
i18n.activate("en");

export function LinguiClientProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.activate(language);
    setReady(true);
  }, [language]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
