"use client";

/**
 * Single Responsibility: Review Text + Expansion Button
 * One job: Render review text and manage expansion UI
 * Changes only when: text layout or button styling changes
 */

interface ReviewTextProps {
  displayText: string;
  isLongText: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export default function ReviewText({
  displayText,
  isLongText,
  isExpanded,
  onToggleExpand,
}: ReviewTextProps) {
  return (
    <>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#54595F",
          margin: 0,
        }}
      >
        {displayText}
        {!isExpanded && isLongText && "…"}
      </p>

      {isLongText && (
        <button
          onClick={onToggleExpand}
          style={{
            background: "none",
            border: "none",
            color: "#965B83",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            padding: 0,
            textAlign: "left",
            textDecoration: "underline",
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </>
  );
}
