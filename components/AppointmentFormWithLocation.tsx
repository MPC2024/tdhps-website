"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AppointmentForm from "./AppointmentForm";

type LocationKey = "galleria" | "memorial" | "pearland" | "";

function AppointmentFormInner() {
  const searchParams = useSearchParams();
  const location = (searchParams.get("location") || "") as LocationKey;

  const validLocations: LocationKey[] = ["galleria", "memorial", "pearland"];
  const defaultLocation = validLocations.includes(location) ? location : "";

  return <AppointmentForm defaultLocation={defaultLocation} />;
}

export default function AppointmentFormWithLocation() {
  return (
    <Suspense fallback={<AppointmentForm />}>
      <AppointmentFormInner />
    </Suspense>
  );
}
