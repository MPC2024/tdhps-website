import { NextResponse } from "next/server";

const PLACE_IDS = [
  { id: "ChIJNWbI09DDQIYRxZJigeiMf5A", name: "Galleria/Uptown Park" },
  { id: "ChIJe7kMPejHQIYR8ANum7UaLx8", name: "Memorial Park" },
  { id: "ChIJQ-nKpJuTQIYRqVwFi2Apg9U", name: "Pearland" },
];

export async function GET() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ photos: [] });
  }

  const allPhotos: Array<{ url: string; location: string }> = [];

  for (const place of PLACE_IDS) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.id}&fields=photos&key=${API_KEY}`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) continue;
      const data = await res.json();
      const photos = data.result?.photos || [];
      photos.slice(0, 10).forEach((p: { photo_reference: string }) => {
        allPhotos.push({
          url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${p.photo_reference}&key=${API_KEY}`,
          location: place.name,
        });
      });
    } catch {
      continue;
    }
  }

  return NextResponse.json({ photos: allPhotos });
}
