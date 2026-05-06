import { Suspense } from "react";
import AppointmentForm from "./AppointmentForm";

interface AppointmentFormWrapperProps {
  defaultLocation?: "galleria" | "memorial" | "pearland" | "";
  lockLocation?: boolean;
}

export default function AppointmentFormWrapper({
  defaultLocation = "",
  lockLocation = false,
}: AppointmentFormWrapperProps) {
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
      <AppointmentForm defaultLocation={defaultLocation} lockLocation={lockLocation} />
    </Suspense>
  );
}
