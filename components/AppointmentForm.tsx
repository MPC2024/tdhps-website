"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

type CustomerType = "new" | "existing" | "";
type LocationKey = "galleria" | "memorial" | "pearland" | "";

interface PetInfo {
  name: string;
  species: string;
  breed: string;
  sex: string;
  color: string;
  weight: string;
  dob: string;
  vetClinic: string;
  vetPhone: string;
  boarding: string;
  grooming: string;
  additionalNailFile: boolean;
  additionalTeethBrush: boolean;
  appointmentDate: string;
  checkOutDate: string;
  notes: string;
}

const defaultPet = (): PetInfo => ({
  name: "",
  species: "",
  breed: "",
  sex: "",
  color: "",
  weight: "",
  dob: "",
  vetClinic: "",
  vetPhone: "",
  boarding: "none",
  grooming: "",
  additionalNailFile: false,
  additionalTeethBrush: false,
  appointmentDate: "",
  checkOutDate: "",
  notes: "",
});

const LOCATION_VALUES: Record<string, LocationKey> = {
  "5917 Richmond Ave., Houston, TX 77057": "galleria",
  "6434 Washington Ave, Houston, TX 77007": "memorial",
  "2810 Business Center Dr #126, Pearland, TX 77584": "pearland",
};

const LOCATION_LABELS: Record<LocationKey, string> = {
  galleria: "5917 Richmond Ave., Houston, TX 77057",
  memorial: "6434 Washington Ave, Houston, TX 77007",
  pearland: "2810 Business Center Dr #126, Pearland, TX 77584",
  "": "",
};

interface AppointmentFormProps {
  defaultLocation?: LocationKey;
  lockLocation?: boolean;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "1px solid #D1D5DB",
  borderRadius: "6px",
  fontFamily: '"Outfit", sans-serif',
  fontSize: "15px",
  color: "#1F2124",
  background: "#fff",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: '"Outfit", sans-serif',
  fontSize: "14px",
  fontWeight: 600,
  color: "#1F2124",
  marginBottom: "6px",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: '"Bowlby One SC", sans-serif',
  fontSize: "20px",
  color: "#965B83",
  marginBottom: "20px",
  marginTop: "0",
  paddingBottom: "8px",
  borderBottom: "2px solid #F0E6F0",
};

const fieldRow: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
  marginBottom: "16px",
};

const radioGroupStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
};

function RadioOption({
  name,
  value,
  checked,
  onChange,
  label,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        fontFamily: '"Outfit", sans-serif',
        fontSize: "15px",
        color: "#1F2124",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ accentColor: "#965B83", width: "16px", height: "16px" }}
      />
      {label}
    </label>
  );
}

interface PetSectionProps {
  index: number;
  pet: PetInfo;
  onChange: (updated: PetInfo) => void;
  t: any;
}

function PetSection({
  index,
  pet,
  onChange,
  t,
}: PetSectionProps) {
  const label = index === 0 ? t("form_pet_details") : `Pet #${index + 1} Details`;
  const idPrefix = `pet${index}`;

  return (
    <div
      style={{
        background: "#FAFAFA",
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "24px",
        border: "1px solid #EDE8ED",
      }}
    >
      <h3 style={sectionHeadingStyle}>{label}</h3>

      <div style={fieldRow}>
        <div>
          <label htmlFor={`${idPrefix}-name`} style={labelStyle}>
            {t("form_pet_name")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-name`}
            required
            type="text"
            value={pet.name}
            onChange={(e) => onChange({ ...pet, name: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-species`} style={labelStyle}>
            {t("form_species")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <select
            id={`${idPrefix}-species`}
            required
            value={pet.species}
            onChange={(e) => onChange({ ...pet, species: e.target.value })}
            style={inputStyle}
          >
            <option value="">{t("form_species_placeholder")}</option>
            <option value="Dog">{t("form_species_dog")}</option>
            <option value="Cat">{t("form_species_cat")}</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-breed`} style={labelStyle}>
            {t("form_breed")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-breed`}
            required
            type="text"
            value={pet.breed}
            onChange={(e) => onChange({ ...pet, breed: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={fieldRow}>
        <div>
          <label htmlFor={`${idPrefix}-sex`} style={labelStyle}>
            {t("form_sex")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <select
            id={`${idPrefix}-sex`}
            required
            value={pet.sex}
            onChange={(e) => onChange({ ...pet, sex: e.target.value })}
            style={inputStyle}
          >
            <option value="">{t("form_sex_placeholder")}</option>
            <option value="Female">{t("form_sex_female")}</option>
            <option value="Male">{t("form_sex_male")}</option>
            <option value="Neutered Male">{t("form_sex_neutered_male")}</option>
            <option value="Spayed Female">{t("form_sex_spayed_female")}</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-color`} style={labelStyle}>
            {t("form_color")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-color`}
            required
            type="text"
            value={pet.color}
            onChange={(e) => onChange({ ...pet, color: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-weight`} style={labelStyle}>
            {t("form_weight")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-weight`}
            required
            type="text"
            placeholder={t("form_weight_placeholder")}
            value={pet.weight}
            onChange={(e) => onChange({ ...pet, weight: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-dob`} style={labelStyle}>
            {t("form_dob")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-dob`}
            required
            type="date"
            value={pet.dob}
            onChange={(e) => onChange({ ...pet, dob: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={fieldRow}>
        <div>
          <label htmlFor={`${idPrefix}-vet`} style={labelStyle}>
            {t("form_vet_clinic")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-vet`}
            required
            type="text"
            value={pet.vetClinic}
            onChange={(e) => onChange({ ...pet, vetClinic: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-vetphone`} style={labelStyle}>
            {t("form_vet_phone")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-vetphone`}
            required
            type="tel"
            value={pet.vetPhone}
            onChange={(e) => onChange({ ...pet, vetPhone: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Services */}
      <div style={{ marginBottom: "16px" }}>
        <p style={{ ...labelStyle, marginBottom: "10px" }}>
          {t("form_services_label")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
        </p>
        <div style={{ marginBottom: "12px" }}>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            {t("form_boarding_label")}
          </p>
          <div style={radioGroupStyle}>
            <RadioOption name={`${idPrefix}-boarding`} value="none" checked={pet.boarding === "none"} onChange={() => onChange({ ...pet, boarding: "none" })} label={t("form_no_service")} />
            <RadioOption name={`${idPrefix}-boarding`} value="Daycare" checked={pet.boarding === "Daycare"} onChange={() => onChange({ ...pet, boarding: "Daycare" })} label={t("form_daycare")} />
            <RadioOption name={`${idPrefix}-boarding`} value="Boarding" checked={pet.boarding === "Boarding"} onChange={() => onChange({ ...pet, boarding: "Boarding" })} label={t("form_boarding")} />
          </div>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            {t("form_grooming_label")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </p>
          <div style={radioGroupStyle}>
            <RadioOption name={`${idPrefix}-grooming`} value="Bath" checked={pet.grooming === "Bath"} onChange={() => onChange({ ...pet, grooming: "Bath" })} label={t("form_bath")} />
            <RadioOption name={`${idPrefix}-grooming`} value="Basic" checked={pet.grooming === "Basic"} onChange={() => onChange({ ...pet, grooming: "Basic" })} label={t("form_basic")} />
            <RadioOption name={`${idPrefix}-grooming`} value="Complete Groom" checked={pet.grooming === "Complete Groom"} onChange={() => onChange({ ...pet, grooming: "Complete Groom" })} label={t("form_complete_groom")} />
          </div>
        </div>
        <div>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            {t("form_additional_service")}
          </p>
          <div style={radioGroupStyle}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontFamily: '"Outfit", sans-serif', fontSize: "15px" }}>
              <input type="checkbox" checked={pet.additionalNailFile} onChange={(e) => onChange({ ...pet, additionalNailFile: e.target.checked })} style={{ accentColor: "#965B83", width: "16px", height: "16px" }} />
              {t("form_nail_file")}
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontFamily: '"Outfit", sans-serif', fontSize: "15px" }}>
              <input type="checkbox" checked={pet.additionalTeethBrush} onChange={(e) => onChange({ ...pet, additionalTeethBrush: e.target.checked })} style={{ accentColor: "#965B83", width: "16px", height: "16px" }} />
              {t("form_teeth_brush")}
            </label>
          </div>
        </div>
      </div>

      <div style={fieldRow}>
        <div>
          <label htmlFor={`${idPrefix}-apptdate`} style={labelStyle}>
            {t("form_appointment_date")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
          </label>
          <input
            id={`${idPrefix}-apptdate`}
            required
            type="date"
            value={pet.appointmentDate}
            onChange={(e) => onChange({ ...pet, appointmentDate: e.target.value })}
            style={inputStyle}
          />
        </div>
        {pet.boarding !== "none" && (
          <div>
            <label htmlFor={`${idPrefix}-checkout`} style={labelStyle}>
              {t("form_checkout_date")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
            </label>
            <input
              id={`${idPrefix}-checkout`}
              type="date"
              value={pet.checkOutDate}
              onChange={(e) => onChange({ ...pet, checkOutDate: e.target.value })}
              style={inputStyle}
            />
          </div>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-notes`} style={labelStyle}>
          {t("form_instructions_notes")}
        </label>
        <textarea
          id={`${idPrefix}-notes`}
          rows={3}
          value={pet.notes}
          onChange={(e) => onChange({ ...pet, notes: e.target.value })}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
    </div>
  );
}

export default function AppointmentForm({
  defaultLocation = "",
  lockLocation = false,
}: AppointmentFormProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const [customerType, setCustomerType] = useState<CustomerType>("");
  const [locationValue, setLocationValue] = useState<string>(
    defaultLocation ? LOCATION_LABELS[defaultLocation] : ""
  );
  const [additionalPets, setAdditionalPets] = useState(0);
  const [pets, setPets] = useState<PetInfo[]>([defaultPet()]);

  // Parent info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [ecName, setEcName] = useState("");
  const [ecEmail, setEcEmail] = useState("");
  const [ecPhone, setEcPhone] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalPets = 1 + additionalPets;

  const handlePetChange = (index: number, updated: PetInfo) => {
    setPets((prev) => {
      const next = [...prev];
      next[index] = updated;
      return next;
    });
  };

  const handleAdditionalPetsChange = (count: number) => {
    setAdditionalPets(count);
    setPets((prev) => {
      const next = [...prev];
      while (next.length < count + 1) next.push(defaultPet());
      return next.slice(0, count + 1);
    });
  };

  const validate = (): string[] => {
    const errs: string[] = [];
    if (!customerType) errs.push("Please select Customer type (New or Existing).");
    if (!locationValue) errs.push("Please select a Location.");
    pets.slice(0, totalPets).forEach((pet, i) => {
      const label = i === 0 ? "Pet" : `Pet #${i + 1}`;
      if (!pet.name) errs.push(`${label}: Pet Name is required.`);
      if (!pet.species) errs.push(`${label}: Species is required.`);
      if (!pet.breed) errs.push(`${label}: Breed is required.`);
      if (!pet.sex) errs.push(`${label}: Sex is required.`);
      if (!pet.color) errs.push(`${label}: Color is required.`);
      if (!pet.weight) errs.push(`${label}: Weight is required.`);
      if (!pet.dob) errs.push(`${label}: Date of Birth is required.`);
      if (!pet.vetClinic) errs.push(`${label}: Veterinary Clinic is required.`);
      if (!pet.vetPhone) errs.push(`${label}: Veterinary Clinic Phone Number is required.`);
      if (!pet.grooming) errs.push(`${label}: Grooming service is required.`);
      if (!pet.appointmentDate) errs.push(`${label}: Appointment Date is required.`);
    });
    if (!firstName) errs.push("First Name is required.");
    if (!lastName) errs.push("Last Name is required.");
    if (!street) errs.push("Street Address is required.");
    if (!city) errs.push("City is required.");
    if (!state) errs.push("State is required.");
    if (!zip) errs.push("ZIP Code is required.");
    if (!email) errs.push("Email Address is required.");
    if (!cellPhone) errs.push("Cell Phone is required.");
    if (!ecName) errs.push("Emergency Contact Name is required.");
    if (!ecEmail) errs.push("Emergency Contact Email is required.");
    if (!ecPhone) errs.push("Emergency Contact Cell Phone is required.");
    if (!hearAbout) errs.push("Please tell us how you heard about us.");
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length > 0) {
      setErrors(errs);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setErrors([]);
    setSubmitting(true);

    const locationKey = LOCATION_VALUES[locationValue] || defaultLocation;
    const custSuffix = customerType === "new" ? "new" : "existing";

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerType,
          location: locationKey,
          firstName,
          lastName,
          street,
          street2,
          city,
          state,
          zip,
          email,
          cellPhone,
          ecName,
          ecEmail,
          ecPhone,
          hearAbout,
          smsOptIn,
          emailOptIn,
          pets: pets.slice(0, totalPets),
        }),
      });

      if (!res.ok) {
        throw new Error("Server returned an error. Please try again.");
      }

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      let thankYouPath = "/";
      if (locationKey === "galleria") thankYouPath = `/thank-you-galleria-${custSuffix}`;
      else if (locationKey === "memorial") thankYouPath = `/thank-you-memorial-${custSuffix}`;
      else if (locationKey === "pearland") thankYouPath = `/thank-you-pearland-${custSuffix}`;

      router.push(thankYouPath);
    } catch (err) {
      setErrors([err instanceof Error ? err.message : "Something went wrong. Please try again or call us at 713-820-6140."]);
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const US_STATES = [
    "Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado",
    "Connecticut","Delaware","District of Columbia","Florida","Georgia","Guam","Hawaii",
    "Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
    "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska",
    "Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
    "North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Pennsylvania",
    "Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
    "U.S. Virgin Islands","Vermont","Virginia","Washington","West Virginia","Wisconsin",
    "Wyoming","Armed Forces Americas","Armed Forces Europe","Armed Forces Pacific",
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "48px 20px",
      }}
    >
      {/* Notices */}
      <div
        style={{
          background: "#FFF3E0",
          border: "1px solid #FFCC80",
          borderRadius: "8px",
          padding: "16px 20px",
          marginBottom: "32px",
          fontFamily: '"Outfit", sans-serif',
          fontSize: "14px",
          color: "#5D4037",
          lineHeight: 1.6,
        }}
      >
        <p style={{ margin: "0 0 8px" }}>
          <strong>{t("form_grooming_checkin_heading")}</strong> {t("form_grooming_checkin_text")}
        </p>
        <p style={{ margin: "0 0 8px" }}>
          <strong>{t("form_boarding_deposit_heading")}</strong> {t("form_boarding_deposit_text")}
        </p>
        <p style={{ margin: 0 }}>
          <strong>{t("form_vaccinations_required_grooming_heading")}</strong> {t("form_vaccinations_required_grooming_text")}{" "}
          <strong>{t("form_vaccinations_boarding_daycare_heading")}</strong> {t("form_vaccinations_boarding_daycare_text")}
        </p>
      </div>

      {/* Error list */}
      {errors.length > 0 && (
        <div
          style={{
            background: "#FEE2E2",
            border: "1px solid #FCA5A5",
            borderRadius: "8px",
            padding: "16px 20px",
            marginBottom: "28px",
          }}
        >
          <p style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, color: "#B91C1C", marginBottom: "8px" }}>
            {t("form_error_heading")}
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {errors.map((err, i) => (
              <li key={i} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#B91C1C", marginBottom: "4px" }}>
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* ── Section: Customer Type ── */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #E8E0E8",
            borderRadius: "10px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h3 style={sectionHeadingStyle}>{t("form_appointment_request")}</h3>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ ...labelStyle, marginBottom: "10px" }}>
              {t("form_customer_label")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
            </p>
            <div style={radioGroupStyle}>
              <RadioOption name="customerType" value="new" checked={customerType === "new"} onChange={() => setCustomerType("new")} label={t("form_new_customer")} />
              <RadioOption name="customerType" value="existing" checked={customerType === "existing"} onChange={() => setCustomerType("existing")} label={t("form_existing_customer")} />
            </div>
          </div>

          <div>
            <label htmlFor="location" style={labelStyle}>
              {t("form_location_label")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
            </label>
            {lockLocation ? (
              <div
                style={{
                  ...inputStyle,
                  background: "#F3F4F6",
                  color: "#6B7280",
                  cursor: "not-allowed",
                }}
              >
                {locationValue}
              </div>
            ) : (
              <select
                id="location"
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                style={inputStyle}
              >
                <option value="">{t("form_location_placeholder")}</option>
                <option value="5917 Richmond Ave., Houston, TX 77057">
                  5917 Richmond Ave., Houston, TX 77057
                </option>
                <option value="6434 Washington Ave, Houston, TX 77007">
                  6434 Washington Ave, Houston, TX 77007
                </option>
                <option value="2810 Business Center Dr #126, Pearland, TX 77584">
                  2810 Business Center Dr #126, Pearland, TX 77584
                </option>
              </select>
            )}
          </div>
        </div>

        {/* ── Pet Sections ── */}
        {pets.slice(0, totalPets).map((pet, i) => (
          <PetSection
            key={i}
            index={i}
            pet={pet}
            onChange={(updated) => handlePetChange(i, updated)}
            t={t}
          />
        ))}

        {/* Additional Pets selector */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #E8E0E8",
            borderRadius: "10px",
            padding: "20px 24px",
            marginBottom: "24px",
          }}
        >
          <label htmlFor="additionalPets" style={labelStyle}>
            {t("form_additional_pets_label")}
          </label>
          <select
            id="additionalPets"
            value={additionalPets}
            onChange={(e) => handleAdditionalPetsChange(Number(e.target.value))}
            style={{ ...inputStyle, maxWidth: "240px" }}
          >
            <option value={0}>{t("form_no_additional_pets")}</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>

        {/* ── Parent Profile ── */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #E8E0E8",
            borderRadius: "10px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          {/* Special Notes */}
          <div style={{ marginBottom: "24px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", lineHeight: 1.7, color: "#54595F" }}>
            <p style={{ color: "#CC3366", fontWeight: 600, marginBottom: "8px" }}>
              {t("form_grooming_checkin_text")}
            </p>
            <p style={{ marginBottom: "4px" }}>The following unexpired vaccinations are required for Grooming Services:</p>
            <ol style={{ paddingLeft: "28px", marginBottom: "12px", listStyleType: "decimal" }}>
              <li>{t("form_vaccinations_required_grooming_text")}</li>
            </ol>
            <p style={{ color: "#CC3366", fontWeight: 600, marginBottom: "8px" }}>
              {t("form_boarding_deposit_text")}
            </p>
            <p style={{ marginBottom: "4px" }}>The following unexpired vaccinations are required for Boarding and Daycare Services:</p>
            <ol style={{ paddingLeft: "28px", marginBottom: "4px", listStyleType: "decimal" }}>
              <li>Bordetella</li>
              <li>Distemper</li>
              <li>Rabies</li>
              <li>Influenza is NOT REQUIRED but RECOMMENDED</li>
            </ol>
          </div>

          <h3 style={sectionHeadingStyle}>{t("form_parent_profile")}</h3>

          <div style={fieldRow}>
            <div>
              <label htmlFor="firstName" style={labelStyle}>
                {t("form_first_name")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="firstName" required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="lastName" style={labelStyle}>
                {t("form_last_name")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="lastName" required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>
              {t("form_address")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
            </label>
            <input
              required
              type="text"
              placeholder={t("form_street_address")}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              style={{ ...inputStyle, marginBottom: "8px" }}
            />
            <input
              type="text"
              placeholder={t("form_address_line_2")}
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}
              style={{ ...inputStyle, marginBottom: "8px" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 140px", gap: "8px" }}>
              <input required type="text" placeholder={t("form_city")} value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle} />
              <select required value={state} onChange={(e) => setState(e.target.value)} style={inputStyle}>
                <option value="">{t("form_state")}</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input required type="text" placeholder={t("form_zip_code")} value={zip} onChange={(e) => setZip(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={fieldRow}>
            <div>
              <label htmlFor="email" style={labelStyle}>
                {t("form_email")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="cellPhone" style={labelStyle}>
                {t("form_cell_phone")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="cellPhone" required type="tel" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={fieldRow}>
            <div>
              <label htmlFor="ecName" style={labelStyle}>
                {t("form_ec_name")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="ecName" required type="text" value={ecName} onChange={(e) => setEcName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="ecEmail" style={labelStyle}>
                {t("form_ec_email")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="ecEmail" required type="email" value={ecEmail} onChange={(e) => setEcEmail(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="ecPhone" style={labelStyle}>
                {t("form_ec_phone")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
              </label>
              <input id="ecPhone" required type="tel" value={ecPhone} onChange={(e) => setEcPhone(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label htmlFor="hearAbout" style={labelStyle}>
              {t("form_hear_about_us")} <span style={{ color: "#CC3366" }}>{t("form_required_asterisk")}</span>
            </label>
            <select id="hearAbout" required value={hearAbout} onChange={(e) => setHearAbout(e.target.value)} style={{ ...inputStyle, maxWidth: "320px" }}>
              <option value="">{t("form_species_placeholder")}</option>
              <option value="Google">{t("form_google")}</option>
              <option value="Yelp">{t("form_yelp")}</option>
              <option value="Facebook">{t("form_facebook")}</option>
              <option value="Instagram">{t("form_instagram")}</option>
              <option value="Friend / Family">{t("form_friend_family")}</option>
              <option value="Walk By">{t("form_walk_by")}</option>
              <option value="Other">{t("form_other")}</option>
            </select>
          </div>
        </div>

        {/* SMS & Email Opt-In */}
        <div style={{ backgroundColor: "#F9FAFB", borderRadius: "8px", padding: "20px 24px", marginBottom: "24px", border: "1px solid #E5E7EB" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", marginBottom: "16px" }}>
            <input
              type="checkbox"
              checked={smsOptIn}
              onChange={(e) => setSmsOptIn(e.target.checked)}
              style={{ accentColor: "#965B83", width: "18px", height: "18px", marginTop: "2px", flexShrink: 0 }}
            />
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.5 }}>
              I agree to receive SMS notifications about my pet's grooming status, appointment reminders, and pickup alerts from The Dog House Pet Salon. Message and data rates may apply. Reply STOP to opt out. <a href="/terms-of-use" target="_blank" style={{ color: "#965B83", textDecoration: "underline" }}>SMS Terms of Service</a>
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={emailOptIn}
              onChange={(e) => setEmailOptIn(e.target.checked)}
              style={{ accentColor: "#965B83", width: "18px", height: "18px", marginTop: "2px", flexShrink: 0 }}
            />
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.5 }}>
              I agree to receive email updates about my appointments and promotions from The Dog House Pet Salon. You can unsubscribe at any time.
            </span>
          </label>
        </div>

        {/* Submit */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary"
            style={{ fontSize: "18px", padding: "16px 48px", opacity: submitting ? 0.7 : 1 }}
          >
            {submitting ? t("form_submitting_button") : t("form_submit_button")}
          </button>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "12px",
            }}
          >
            {t("form_submit_note")}
          </p>
        </div>
      </form>
    </div>
  );
}
