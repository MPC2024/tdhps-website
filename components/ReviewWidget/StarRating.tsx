/**
 * StarRating Component
 * Displays filled/half/empty stars for review ratings
 */

interface StarRatingProps {
  rating: number; // 0-5
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

export default function StarRating({
  rating,
  size = "md",
  showNumber = false,
}: StarRatingProps) {
  const pixelSize = sizeMap[size];
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push("full");
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push("half");
    } else {
      // Empty star
      stars.push("empty");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
      aria-label={`${rating} out of 5 stars`}
    >
      <div style={{ display: "flex", gap: "2px" }}>
        {stars.map((star, i) => (
          <svg
            key={i}
            width={pixelSize}
            height={pixelSize}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {star === "full" && (
              <>
                <defs>
                  <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="100%" stopColor="#FFC107" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L15.09 8.26H22L17.27 12.88L19.24 19.12L12 15.77L4.76 19.12L6.73 12.88L2 8.26H8.91L12 2Z"
                  fill="#FFC107"
                />
              </>
            )}

            {star === "half" && (
              <>
                <defs>
                  <linearGradient id={`grad-half-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="#FFC107" />
                    <stop offset="50%" stopColor="#E0E0E0" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L15.09 8.26H22L17.27 12.88L19.24 19.12L12 15.77L4.76 19.12L6.73 12.88L2 8.26H8.91L12 2Z"
                  fill={`url(#grad-half-${i})`}
                />
              </>
            )}

            {star === "empty" && (
              <path
                d="M12 2L15.09 8.26H22L17.27 12.88L19.24 19.12L12 15.77L4.76 19.12L6.73 12.88L2 8.26H8.91L12 2Z"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="1.5"
              />
            )}
          </svg>
        ))}
      </div>

      {showNumber && (
        <span
          style={{
            fontSize: size === "sm" ? "12px" : size === "md" ? "14px" : "16px",
            fontWeight: 600,
            color: "#1F2124",
            marginLeft: "4px",
          }}
        >
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
