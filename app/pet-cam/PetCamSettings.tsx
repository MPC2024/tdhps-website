// Training: Authentication & Route Protection — Server Component Pattern
// WHY: The original "use client" + fetch("/api/pet-cam") approach created a public
// HTTP endpoint that returned camera credentials (IP, username, password) to ANY
// internet user who called it. env vars prevent credentials from being bundled
// into client JS, but the API endpoint itself exposed them in the JSON response.
// Solution: Server Component reads env vars directly — no route, no exposure.

interface CameraData {
  label: string;
  location: string;
  alias: string;
  registerMode: string;
  ipAddress: string;
  port: string;
  userName: string;
  password: string;
  cameraNo: string;
}

const tableCellStyle: React.CSSProperties = {
  padding: "12px 16px",
  fontFamily: '"Outfit", sans-serif',
  fontSize: "15px",
  color: "#1F2124",
  textAlign: "center",
};

// Training: Route Protection — reading env vars in a Server Component keeps
// them server-side. These values are NEVER serialized to JSON or sent over the
// network. The rendered HTML contains the values, but /api/pet-cam no longer exists.
// WHY THIS MATTERS: Eliminates an entire attack surface (the API endpoint) rather
// than trying to guard it.
function getServerSideCameras(): CameraData[] {
  return [
    {
      label: "5917 Richmond Ave -- Galleria",
      location: process.env.CAM_GALLERIA_LOCATION ?? "",
      alias: process.env.CAM_GALLERIA_ALIAS ?? "",
      registerMode: process.env.CAM_GALLERIA_REGISTER_MODE ?? "IP/Domain",
      ipAddress: process.env.CAM_GALLERIA_IP ?? "",
      port: process.env.CAM_GALLERIA_PORT ?? "",
      userName: process.env.CAM_GALLERIA_USER ?? "",
      password: process.env.CAM_GALLERIA_PASSWORD ?? "",
      cameraNo: "(will automatically populate)",
    },
    {
      label: "6434 Washington Ave -- Memorial Park",
      location: process.env.CAM_WASHINGTON_LOCATION ?? "",
      alias: process.env.CAM_WASHINGTON_ALIAS ?? "",
      registerMode: process.env.CAM_WASHINGTON_REGISTER_MODE ?? "IP/Domain",
      ipAddress: process.env.CAM_WASHINGTON_IP ?? "",
      port: process.env.CAM_WASHINGTON_PORT ?? "",
      userName: process.env.CAM_WASHINGTON_USER ?? "",
      password: process.env.CAM_WASHINGTON_PASSWORD ?? "",
      cameraNo: "(will automatically populate)",
    },
  ];
}

// Training: Route Protection — no "use client" directive = Server Component by default.
// WHY: Removing "use client" means this component runs at request time on the server,
// reads env vars there, and sends the rendered HTML. The browser receives HTML, not
// a JSON payload with credentials. The network request to /api/pet-cam is eliminated.
export default function PetCamSettings() {
  const cameras = getServerSideCameras();

  // Training: Route Protection — handle unconfigured state server-side
  // WHY: If env vars aren't set, show a helpful message rather than empty tables.
  // This also prevents rendering a table full of empty fields.
  const configured = cameras.some((c) => c.ipAddress !== "");
  if (!configured) {
    return (
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center" }}>
        Camera settings are not yet configured. Please contact us for assistance.
      </p>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "40px" }}>
      {cameras.map((cam) => {
        const rows = [
          ["Location", cam.location],
          ["Alias", cam.alias],
          ["Register Mode", cam.registerMode],
          ["IP Address", cam.ipAddress],
          ["Port", cam.port],
          ["User Name", cam.userName],
          ["Password", cam.password],
          ["Camera No", cam.cameraNo],
        ];

        return (
          <div key={cam.label}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "20px", textAlign: "center" }}>
              {cam.label}
            </h3>
            <div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden" }}>
              {rows.map(([label, value], i) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: i % 2 === 0 ? "#F8F8F8" : "#ffffff", borderBottom: "1px solid #e0e0e0" }}>
                  <div style={{ ...tableCellStyle, fontWeight: 600, color: "#54595F", borderRight: "1px solid #e0e0e0" }}>{label}</div>
                  <div style={tableCellStyle}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
