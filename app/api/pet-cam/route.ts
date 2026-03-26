import { NextResponse } from "next/server";

/**
 * GET /api/pet-cam
 *
 * Returns camera connection settings for each location.
 * Credentials are read from environment variables so they are
 * never shipped to the browser bundle.
 */
export async function GET() {
  const cameras = [
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

  return NextResponse.json({ cameras });
}
