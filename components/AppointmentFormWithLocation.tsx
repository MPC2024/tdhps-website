"use client";

import { Suspense } from "react";
import AppointmentFormWrapper from "./AppointmentFormWrapper";

export default function AppointmentFormWithLocation() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "48px 20px", textAlign: "center" }}>
          <p style={{ fontFamily: '"Outfit", sans-serif', color: "#54595F" }}>
            Loading form...
          </p>
        </div>
      }
    >
      <AppointmentFormWrapper />
    </Suspense>
  );
}
