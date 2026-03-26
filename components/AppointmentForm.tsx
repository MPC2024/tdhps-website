"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

function PetSection({
  index,
  pet,
  onChange,
}: {
  index: number;
  pet: PetInfo;
  onChange: (updated: PetInfo) => void;
}) {
  const label = index === 0 ? "Pet Details" : `Pet #${index + 1} Details`;
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
            Pet Name <span style={{ color: "#CC3366" }}>*</span>
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
            Species <span style={{ color: "#CC3366" }}>*</span>
          </label>
          <select
            id={`${idPrefix}-species`}
            required
            value={pet.species}
            onChange={(e) => onChange({ ...pet, species: e.target.value })}
            style={inputStyle}
          >
            <option value="">Please choose...</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-breed`} style={labelStyle}>
            Breed <span style={{ color: "#CC3366" }}>*</span>
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
            Sex <span style={{ color: "#CC3366" }}>*</span>
          </label>
          <select
            id={`${idPrefix}-sex`}
            required
            value={pet.sex}
            onChange={(e) => onChange({ ...pet, sex: e.target.value })}
            style={inputStyle}
          >
            <option value="">Please choose...</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Neutered Male">Neutered Male</option>
            <option value="Spayed Female">Spayed Female</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-color`} style={labelStyle}>
            Color <span style={{ color: "#CC3366" }}>*</span>
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
            Weight <span style={{ color: "#CC3366" }}>*</span>
          </label>
          <input
            id={`${idPrefix}-weight`}
            required
            type="text"
            placeholder="e.g. 25 lbs"
            value={pet.weight}
            onChange={(e) => onChange({ ...pet, weight: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-dob`} style={labelStyle}>
            Date of Birth <span style={{ color: "#CC3366" }}>*</span>
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
            Veterinary Clinic <span style={{ color: "#CC3366" }}>*</span>
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
            Veterinary Clinic Phone Number <span style={{ color: "#CC3366" }}>*</span>
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
          Services <span style={{ color: "#CC3366" }}>*</span>
        </p>
        <div style={{ marginBottom: "12px" }}>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            Boarding
          </p>
          <div style={radioGroupStyle}>
            <RadioOption name={`${idPrefix}-boarding`} value="none" checked={pet.boarding === "none"} onChange={() => onChange({ ...pet, boarding: "none" })} label="No Service Selected" />
            <RadioOption name={`${idPrefix}-boarding`} value="Daycare" checked={pet.boarding === "Daycare"} onChange={() => onChange({ ...pet, boarding: "Daycare" })} label="Daycare" />
            <RadioOption name={`${idPrefix}-boarding`} value="Boarding" checked={pet.boarding === "Boarding"} onChange={() => onChange({ ...pet, boarding: "Boarding" })} label="Boarding" />
          </div>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            Grooming <span style={{ color: "#CC3366" }}>*</span>
          </p>
          <div style={radioGroupStyle}>
            <RadioOption name={`${idPrefix}-grooming`} value="Bath" checked={pet.grooming === "Bath"} onChange={() => onChange({ ...pet, grooming: "Bath" })} label="Bath" />
            <RadioOption name={`${idPrefix}-grooming`} value="Basic" checked={pet.grooming === "Basic"} onChange={() => onChange({ ...pet, grooming: "Basic" })} label="Basic" />
            <RadioOption name={`${idPrefix}-grooming`} value="Complete Groom" checked={pet.grooming === "Complete Groom"} onChange={() => onChange({ ...pet, grooming: "Complete Groom" })} label="Complete Groom" />
          </div>
        </div>
        <div>
          <p style={{ ...labelStyle, fontWeight: 500, color: "#54595F", marginBottom: "8px" }}>
            Additional Service
          </p>
          <div style={radioGroupStyle}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontFamily: '"Outfit", sans-serif', fontSize: "15px" }}>
              <input type="checkbox" checked={pet.additionalNailFile} onChange={(e) => onChange({ ...pet, additionalNailFile: e.target.checked })} style={{ accentColor: "#965B83", width: "16px", height: "16px" }} />
              Nail File
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontFamily: '"Outfit", sans-serif', fontSize: "15px" }}>
              <input type="checkbox" checked={pet.additionalTeethBrush} onChange={(e) => onChange({ ...pet, additionalTeethBrush: e.target.checked })} style={{ accentColor: "#965B83", width: "16px", height: "16px" }} />
              Teeth Brush
            </label>
          </div>
        </div>
      </div>

      <div style={fieldRow}>
        <div>
          <label htmlFor={`${idPrefix}-apptdate`} style={labelStyle}>
            Appointment Date <span style={{ color: "#CC3366" }}>*</span>
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
              Check Out Date <span style={{ color: "#CC3366" }}>*</span>
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
          Instructions / Notes
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
          <strong>Grooming check-in:</strong> All grooming services are required to check-in before 11:00 AM.
          The latest check-in is 11:15 AM. All check-ins between 11:00 AM and 11:15 AM will be charged a
          late check-in fee of <strong>$15.00 per pet</strong>.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          <strong>Boarding deposit:</strong> All boarding reservations require a <strong>$25.00 per dog deposit</strong> before
          scheduling your appointment.
        </p>
        <p style={{ margin: 0 }}>
          <strong>Vaccinations required for Grooming:</strong> Bordetella.{" "}
          <strong>For Boarding &amp; Daycare:</strong> Bordetella, Distemper, Rabies (Influenza recommended but not required).
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
            Please correct the following:
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
          <h3 style={sectionHeadingStyle}>Appointment Request</h3>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ ...labelStyle, marginBottom: "10px" }}>
              Customer <span style={{ color: "#CC3366" }}>*</span>
            </p>
            <div style={radioGroupStyle}>
              <RadioOption name="customerType" value="new" checked={customerType === "new"} onChange={() => setCustomerType("new")} label="New Customer" />
              <RadioOption name="customerType" value="existing" checked={customerType === "existing"} onChange={() => setCustomerType("existing")} label="Existing Customer" />
            </div>
          </div>

          <div>
            <label htmlFor="location" style={labelStyle}>
              Location <span style={{ color: "#CC3366" }}>*</span>
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
                <option value="">Choose location...</option>
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
            Additional Pet(s)
          </label>
          <select
            id="additionalPets"
            value={additionalPets}
            onChange={(e) => handleAdditionalPetsChange(Number(e.target.value))}
            style={{ ...inputStyle, maxWidth: "240px" }}
          >
            <option value={0}>No Additional Pets</option>
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
          <h3 style={sectionHeadingStyle}>Pet Parent Profile Information</h3>

          <div style={fieldRow}>
            <div>
              <label htmlFor="firstName" style={labelStyle}>
                First Name <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="firstName" required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="lastName" style={labelStyle}>
                Last Name <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="lastName" required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>
              Address <span style={{ color: "#CC3366" }}>*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              style={{ ...inputStyle, marginBottom: "8px" }}
            />
            <input
              type="text"
              placeholder="Address Line 2"
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}
              style={{ ...inputStyle, marginBottom: "8px" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 140px", gap: "8px" }}>
              <input required type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle} />
              <select required value={state} onChange={(e) => setState(e.target.value)} style={inputStyle}>
                <option value="">State</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input required type="text" placeholder="ZIP Code" value={zip} onChange={(e) => setZip(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={fieldRow}>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email Address <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="cellPhone" style={labelStyle}>
                Cell Phone <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="cellPhone" required type="tel" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={fieldRow}>
            <div>
              <label htmlFor="ecName" style={labelStyle}>
                Emergency Contact Name <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="ecName" required type="text" value={ecName} onChange={(e) => setEcName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="ecEmail" style={labelStyle}>
                Emergency Contact Email Address <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="ecEmail" required type="email" value={ecEmail} onChange={(e) => setEcEmail(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label htmlFor="ecPhone" style={labelStyle}>
                Emergency Contact Cell Phone <span style={{ color: "#CC3366" }}>*</span>
              </label>
              <input id="ecPhone" required type="tel" value={ecPhone} onChange={(e) => setEcPhone(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label htmlFor="hearAbout" style={labelStyle}>
              How did you hear about us <span style={{ color: "#CC3366" }}>*</span>
            </label>
            <select id="hearAbout" required value={hearAbout} onChange={(e) => setHearAbout(e.target.value)} style={{ ...inputStyle, maxWidth: "320px" }}>
              <option value="">Please choose...</option>
              <option value="Google">Google</option>
              <option value="Yelp">Yelp</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Friend / Family">Friend / Family</option>
              <option value="Walk By">Walk By</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary"
            style={{ fontSize: "18px", padding: "16px 48px", opacity: submitting ? 0.7 : 1 }}
          >
            {submitting ? "Submitting..." : "Submit Appointment Request"}
          </button>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "12px",
            }}
          >
            Once submitted, our team will review your request and confirm your appointment promptly.
            Need Assistance?{" "}
            <a href="tel:+17138206140" style={{ color: "#965B83", fontWeight: 600 }}>
              Call us at 713-820-6140
            </a>{" "}
            — ¡Hablamos Español!
          </p>
        </div>
      </form>
    </div>
  );
}
