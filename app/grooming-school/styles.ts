// Training: Single Responsibility — Styling Constants Separation
// WHY: Inline styles scattered throughout a component make it harder to:
// 1. Change design consistently (e.g., update primary color everywhere)
// 2. Understand the visual hierarchy
// 3. Test component logic without distractions
//
// Extracting styles into a separate file allows designers and developers
// to modify the look without touching component logic.
// Source: Steve Schoger (Refactoring UI)

export const FORM_STYLES = {
  container: {
    backgroundColor: "#F8F8F8",
    borderRadius: "12px",
    padding: "40px",
  } as const,
  input: {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    color: "#1F2124",
    outline: "none",
    boxSizing: "border-box" as const,
    backgroundColor: "#fff",
  } as React.CSSProperties,
  label: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    fontWeight: 600,
    color: "#1F2124",
    display: "block" as const,
    marginBottom: "6px",
  } as React.CSSProperties,
  field: {
    marginBottom: "20px",
  } as React.CSSProperties,
  requiredStar: {
    color: "#CC3366",
  } as React.CSSProperties,
  errorBox: {
    background: "#FEE2E2",
    border: "1px solid #FCA5A5",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "20px",
    fontFamily: '"Outfit", sans-serif',
    fontSize: "14px",
    color: "#B91C1C",
  } as React.CSSProperties,
  submitButton: {
    width: "100%",
    padding: "15px 30px",
    backgroundColor: "#965B83",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 700,
    fontSize: "18px",
    cursor: "pointer",
  } as React.CSSProperties,
  radioLabel: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    color: "#1F2124",
    display: "flex" as const,
    alignItems: "center" as const,
    gap: "8px",
    cursor: "pointer",
  } as React.CSSProperties,
};

export const SUCCESS_MESSAGE_STYLES = {
  container: {
    textAlign: "center" as const,
    padding: "40px",
    backgroundColor: "#f0faf0",
    borderRadius: "12px",
  } as React.CSSProperties,
  heading: {
    fontFamily: '"Bowlby One SC", sans-serif',
    fontSize: "24px",
    color: "#1F2124",
    marginBottom: "12px",
  } as React.CSSProperties,
  text: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "16px",
    color: "#54595F",
  } as React.CSSProperties,
};

export const SECTION_STYLES = {
  outer: {
    position: "relative" as const,
    backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/washing-pet-dog-home.jpg.webp)",
    backgroundSize: "cover" as const,
    backgroundPosition: "center",
    padding: "80px 20px",
    minHeight: "500px",
    display: "flex" as const,
    alignItems: "center" as const,
  } as React.CSSProperties,
  overlay: {
    position: "absolute" as const,
    inset: 0,
    backgroundColor: "rgba(255,255,255,0.2)",
  } as React.CSSProperties,
  wrapper: {
    maxWidth: "1520px",
    margin: "0 auto",
    width: "100%",
    position: "relative" as const,
    zIndex: 2,
  } as React.CSSProperties,
  card: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "16px",
    padding: "48px",
    width: "850px",
    maxWidth: "100%",
    boxShadow: "6px 6px 20px rgba(0,0,0,0.08)",
  } as React.CSSProperties,
  heading: {
    fontFamily: '"Bowlby One SC", sans-serif',
    fontSize: "clamp(26px,3vw,40px)",
    color: "#1F2124",
    marginBottom: "32px",
  } as React.CSSProperties,
};

export const ACCORDION_ITEM_STYLES = {
  button: {
    width: "100%",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    padding: "18px 0",
    textAlign: "left" as const,
    gap: "16px",
  } as React.CSSProperties,
  title: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    color: "#1F2124",
    fontWeight: 500,
    lineHeight: 1.4,
  } as React.CSSProperties,
  icon: {
    color: "#965B83",
    fontSize: "14px",
    flexShrink: 0,
    transition: "transform 0.2s",
  } as React.CSSProperties,
  content: {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    color: "#54595F",
    lineHeight: 1.7,
    paddingBottom: "18px",
    margin: 0,
  } as React.CSSProperties,
};

export function getFormInputStyle(isDisabled?: boolean): React.CSSProperties {
  // Training: Utility function for computed styles
  // WHY: Some styles depend on state (like opacity when submitting).
  // Instead of computing this in the component, do it here with pure logic.
  return {
    ...FORM_STYLES.submitButton,
    opacity: isDisabled ? 0.7 : 1,
  };
}
