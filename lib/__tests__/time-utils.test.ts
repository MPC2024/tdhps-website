/**
 * Tests for Time Formatting Utilities
 * Training: Single Responsibility Principle — Time utilities should be testable independently
 * Validates that time formatting logic works correctly in isolation
 */

import { formatTime24To12, isValidTime24, getDisplayHours } from "../time-utils";

describe("formatTime24To12", () => {
  describe("should convert 24-hour to 12-hour format correctly", () => {
    it("should convert morning times (before noon)", () => {
      expect(formatTime24To12("07:00")).toBe("7:00AM");
      expect(formatTime24To12("09:30")).toBe("9:30AM");
      expect(formatTime24To12("11:45")).toBe("11:45AM");
    });

    it("should convert noon and afternoon times", () => {
      expect(formatTime24To12("12:00")).toBe("12:00PM");
      expect(formatTime24To12("12:30")).toBe("12:30PM");
      expect(formatTime24To12("13:00")).toBe("1:00PM");
      expect(formatTime24To12("15:15")).toBe("3:15PM");
    });

    it("should convert evening and late night times", () => {
      expect(formatTime24To12("18:00")).toBe("6:00PM");
      expect(formatTime24To12("19:00")).toBe("7:00PM");
      expect(formatTime24To12("23:59")).toBe("11:59PM");
    });

    it("should handle midnight (00:00)", () => {
      expect(formatTime24To12("00:00")).toBe("12:00AM");
      expect(formatTime24To12("00:30")).toBe("12:30AM");
    });
  });
});

describe("isValidTime24", () => {
  describe("should validate 24-hour time format", () => {
    it("should accept valid times", () => {
      expect(isValidTime24("07:00")).toBe(true);
      expect(isValidTime24("12:30")).toBe(true);
      expect(isValidTime24("23:59")).toBe(true);
      expect(isValidTime24("00:00")).toBe(true);
    });

    it("should reject invalid times", () => {
      expect(isValidTime24("25:00")).toBe(false);
      expect(isValidTime24("12:60")).toBe(false);
      expect(isValidTime24("12:5")).toBe(false);
      expect(isValidTime24("1200")).toBe(false);
      expect(isValidTime24("invalid")).toBe(false);
    });
  });
});

describe("getDisplayHours", () => {
  describe("should format opening hours for display", () => {
    it("should combine open and close times with proper formatting", () => {
      expect(getDisplayHours({ open: "07:00", close: "19:00" })).toBe(
        "7:00AM - 7:00PM"
      );
      expect(getDisplayHours({ open: "08:00", close: "18:00" })).toBe(
        "8:00AM - 6:00PM"
      );
    });

    it("should handle edge case times", () => {
      expect(getDisplayHours({ open: "00:00", close: "23:59" })).toBe(
        "12:00AM - 11:59PM"
      );
    });
  });
});
