import { NextResponse } from "next/server";

const INDEXNOW_KEY = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
const HOST = "www.thedoghouseps.com";

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "urls array is required" }, { status: 400 });
    }

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/indexnow-key.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: true,
      status: res.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}
