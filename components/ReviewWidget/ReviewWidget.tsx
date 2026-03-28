import { getLocationReviews } from "@/lib/reviews";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";
import styles from "./ReviewWidget.module.css";

interface ReviewWidgetProps {
  locationName: string;
  googlePlaceId: string;
  yelpBusinessId?: string;
  maxReviews?: number;
}

export default async function ReviewWidget({
  locationName,
  googlePlaceId,
  yelpBusinessId,
  maxReviews = 6,
}: ReviewWidgetProps) {
  // Fetch reviews server-side
  const { reviews, averageRating, totalCount } = await getLocationReviews(
    googlePlaceId,
    yelpBusinessId
  );

  const displayedReviews = reviews.slice(0, maxReviews);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customers Are Saying</h2>

          {/* Summary Stats */}
          {displayedReviews.length > 0 ? (
            <div className={styles.summary}>
              <div className={styles.stats}>
                <StarRating rating={averageRating} size="lg" showNumber={true} />
                <span className={styles.count}>
                  {totalCount} {totalCount === 1 ? "review" : "reviews"}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Reviews Grid */}
        {displayedReviews.length > 0 ? (
          <div className={styles.grid}>
            {displayedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Be the first to review us!</p>
            <a href={`https://search.google.com/local/writereview?placeid=${googlePlaceId}`}
               target="_blank" rel="noopener noreferrer"
               className={styles.ctaButton}>
              Leave a Review on Google
            </a>
          </div>
        )}

        {/* CTA Buttons */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Share your experience with us</p>
          <div className={styles.ctaButtons}>
            <a
              href={`https://search.google.com/local/writereview?placeid=${googlePlaceId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              ⭐ Leave a Review on Google
            </a>
            {yelpBusinessId && (
              <a
                href={`https://www.yelp.com/biz/${yelpBusinessId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
              >
                ✓ Leave a Review on Yelp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
