"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <ExitIntentPopup />
    </LanguageProvider>
  );
}
