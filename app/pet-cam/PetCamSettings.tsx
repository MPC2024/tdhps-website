"use client";

import { useEffect, useState } from "react";

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

export default function PetCamSettings() {
  const [cameras, setCameras] = useState<CameraData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/pet-cam")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load camera settings");
        return res.json();
      })
      .then((data) => {
        setCameras(data.cameras ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center" }}>
        Loading camera settings...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#B91C1C", textAlign: "center" }}>
        Unable to load camera settings. Please contact us for assistance.
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
