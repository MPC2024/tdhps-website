/**
 * Google Places API Review Fetching
 * Server-side only - API keys never exposed to client
 */

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  authorPhotoUrl?: string;
  reviewTime: number; // Unix timestamp
  source: "google" | "yelp";
  url?: string;
}

export interface ReviewData {
  reviews: Review[];
  averageRating: number;
  totalCount: number;
}

/**
 * Fetch reviews from Google Places API
 * @param placeId Google Place ID
 * @returns Array of reviews
 */
export async function fetchGoogleReviews(placeId: string): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn("GOOGLE_PLACES_API_KEY not configured, skipping Google reviews");
    return [];
  }

  try {
    // Use Google Places API - Details endpoint
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours (ISR)
    });

    if (!response.ok) {
      console.error(`Google Places API error: ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return [];
    }

    // Store overall rating from Google (not calculated from 5 reviews)
    const overallRating = data.result.rating || 0;
    const totalReviews = data.result.user_ratings_total || 0;

    // Transform Google reviews to our format
    const reviews = data.result.reviews.slice(0, 5).map((review: any, index: number) => ({
      id: `google-${placeId}-${index}`,
      rating: review.rating,
      text: review.text,
      author: review.author_name,
      authorPhotoUrl: review.profile_photo_url || "",
      reviewTime: review.time * 1000, // Convert Unix timestamp to ms
      source: "google" as const,
      url: data.result.url,
      _overallRating: overallRating,
      _totalReviews: totalReviews,
    }));

    return reviews;
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return [];
  }
}

/**
 * Fetch reviews from Yelp Business API
 * @param businessId Yelp Business ID
 * @returns Array of reviews
 */
export async function fetchYelpReviews(businessId: string): Promise<Review[]> {
  const apiKey = process.env.YELP_API_KEY;

  if (!apiKey || !businessId) {
    // Graceful skip - Yelp is optional
    return [];
  }

  try {
    const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      console.warn(`Yelp API error: ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (!data.reviews) {
      return [];
    }

    // Transform Yelp reviews to our format
    return data.reviews.slice(0, 3).map((review: any, index: number) => ({
      id: `yelp-${businessId}-${index}`,
      rating: review.rating,
      text: review.text,
      author: review.user.name,
      authorPhotoUrl: review.user.image_url,
      reviewTime: new Date(review.time_created).getTime(),
      source: "yelp" as const,
      url: review.url,
    }));
  } catch (error) {
    console.error("Failed to fetch Yelp reviews:", error);
    return [];
  }
}

/**
 * Get merged reviews for a location from both Google and Yelp
 * @param googlePlaceId Google Place ID
 * @param yelpBusinessId Yelp Business ID (optional)
 * @returns Merged and sorted review data
 */
export async function getLocationReviews(
  googlePlaceId: string,
  yelpBusinessId?: string
): Promise<ReviewData> {
  // Fetch from both sources in parallel
  const [googleReviews, yelpReviews] = await Promise.all([
    fetchGoogleReviews(googlePlaceId),
    yelpBusinessId ? fetchYelpReviews(yelpBusinessId) : Promise.resolve([]),
  ]);

  // Merge and sort by date (newest first)
  const allReviews = [...googleReviews, ...yelpReviews].sort(
    (a, b) => b.reviewTime - a.reviewTime
  );

  // Use Google's overall rating (not calculated from 5 returned reviews)
  const googleOverall = googleReviews.length > 0 ? (googleReviews[0] as any)._overallRating || 0 : 0;
  const googleTotal = googleReviews.length > 0 ? (googleReviews[0] as any)._totalReviews || 0 : 0;

  // Filter: only show 4+ star reviews for display
  const filteredReviews = allReviews.filter((review) => review.rating >= 4);

  return {
    reviews: filteredReviews,
    averageRating: googleOverall,
    totalCount: googleTotal, // Use Google's total count, not just 5 returned
  };
}

/**
 * Get relative time string (e.g., "2 days ago")
 */
export function getRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(diffDays / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}
