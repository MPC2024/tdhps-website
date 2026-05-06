"use client";

/**
 * Single Responsibility: Review Text Expansion Logic
 * One job: Manage text expansion state and compute derived values
 * Changes only when: truncation algorithm changes
 *
 * Training: Uncle Bob's SRP principle + React custom hooks best practice
 * Extracted from ReviewCard.tsx to isolate state management
 */

import { useState } from "react";

export interface ReviewExpansionState {
  displayText: string;
  isLongText: boolean;
  isExpanded: boolean;
  toggle: () => void;
}

/**
 * Hook to manage review text expansion
 * Responsibility: ONLY state and text slicing logic
 * Does NOT render anything
 */
export function useReviewExpansion(text: string, maxLength: number): ReviewExpansionState {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = text.length > maxLength;
  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return {
    displayText,
    isLongText,
    isExpanded,
    toggle: () => setIsExpanded(!isExpanded),
  };
}
