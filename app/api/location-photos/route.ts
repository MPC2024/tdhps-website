import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return NextResponse.json({ photos: [] });
  }

  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ photos: [] });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ photos: [] });
    }

    const data = await res.json();
    const photos = data.result?.photos || [];

    const photoUrls = photos.slice(0, 10).map((p: { photo_reference: string }) => ({
      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${p.photo_reference}&key=${API_KEY}`,
      location: "",
    }));

    return NextResponse.json({ photos: photoUrls });
  } catch {
    return NextResponse.json({ photos: [] });
  }
}
