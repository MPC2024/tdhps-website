/**
 * Time Formatting Utilities
 * Training: Single Responsibility Principle — Extracted time formatting logic into focused module
 * Source: Uncle Bob Martin (Clean Code, Chapter 10)
 *
 * Reason for existence: Time formatting is a distinct concern that should be testable,
 * reusable, and independent of schema generation. This enables use in multiple contexts
 * (schemas, UI components, API responses) without coupling to schema.org requirements.
 */

/**
 * Convert 24-hour time string (HH:MM) to 12-hour format (H:MMAM/PM)
 * Used in JSON-LD schema and human-readable contexts
 *
 * @example
 * formatTime24To12("07:00") → "7:00AM"
 * formatTime24To12("19:00") → "7:00PM"
 * formatTime24To12("12:30") → "12:30PM"
 */
export function formatTime24To12(time: string): string {
  const [hours, mins] = time.split(":");
  const hour = parseInt(hours, 10);

  // Determine AM/PM suffix
  const suffix = hour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

  return `${displayHour}:${mins}${suffix}`;
}

/**
 * Check if a time string is valid 24-hour format
 * @example
 * isValidTime24("07:00") → true
 * isValidTime24("25:00") → false
 */
export function isValidTime24(time: string): boolean {
  const match = time.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/);
  return match !== null;
}

/**
 * Parse opening hours object into display string
 * @example
 * getDisplayHours({ open: "07:00", close: "19:00" }) → "7:00AM - 7:00PM"
 */
export function getDisplayHours(hours: { open: string; close: string }): string {
  return `${formatTime24To12(hours.open)} - ${formatTime24To12(hours.close)}`;
}
