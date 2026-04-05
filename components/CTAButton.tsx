'use client';

import Link from 'next/link';
import React from 'react';

/**
 * CTAButton Component
 *
 * A reusable button component implementing a 3-tier visual hierarchy
 * to address Gestalt Similarity violations on the TDHPS website.
 *
 * Design Principles Applied:
 * 1. Gestalt Similarity: Three distinct visual variants prevent cognitive confusion
 * 2. F/Z-Pattern CTA Placement: Primary variant visually emphasizes key conversion points
 * 3. Fitts's Law: 48px minimum height ensures touch-friendly interaction on mobile
 *
 * Variants:
 * - primary: Filled purple (#6B4562), white text, large, bold
 * - secondary: Outlined purple border, transparent background, medium size
 * - tertiary: Text-only with underline on hover, subtle, smallest
 */

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
}: CTAButtonProps) {
  // Base styles shared across all variants
  const baseStyles: React.CSSProperties = {
    fontFamily: 'Outfit, sans-serif',
    borderRadius: '50px', // Pill shape
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  };

  // Responsive styles for mobile (<768px)
  const responsiveContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '100%',
  };

  let variantStyles: React.CSSProperties;

  switch (variant) {
    case 'primary':
      // Primary: Filled purple with better contrast (#6B4562), white text, large
      variantStyles = {
        backgroundColor: '#6B4562',
        color: '#ffffff',
        padding: '16px 32px',
        fontSize: '18px',
        fontWeight: '700',
        minHeight: '48px',
      };
      break;

    case 'secondary':
      // Secondary: Outlined border, transparent background, medium
      variantStyles = {
        backgroundColor: 'transparent',
        color: '#6B4562',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '600',
        border: '2px solid #6B4562',
        minHeight: '48px',
      };
      break;

    case 'tertiary':
      // Tertiary: Text-only, small, underline on hover
      variantStyles = {
        backgroundColor: 'transparent',
        color: '#6B4562',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: '500',
        minHeight: '48px',
        position: 'relative',
      };
      break;

    default:
      variantStyles = {};
  }

  const combinedStyles = { ...baseStyles, ...variantStyles };

  // Render as Link if href is provided, otherwise render as button
  if (href) {
    return (
      <Link
        href={href}
        className={className}
        style={combinedStyles}
        data-testid={`cta-button-${variant}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      style={combinedStyles}
      data-testid={`cta-button-${variant}`}
    >
      {children}
    </button>
  );
}
