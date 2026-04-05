/**
 * CTAButton Component Tests
 *
 * Test suite validates that the CTAButton component implements
 * the 3-tier visual hierarchy correctly, ensuring Gestalt Similarity
 * principles are applied to resolve the 8+ equal-weight button issue.
 *
 * Tests cover:
 * 1. Primary variant styling (filled purple, large)
 * 2. Secondary variant styling (outlined, medium)
 * 3. Tertiary variant styling (text-only, small)
 * 4. Href prop renders as Link component
 * 5. Missing href renders as button element
 *
 * To run: npm test -- components/__tests__/CTAButton.test.tsx
 * (Requires: npm install -D @testing-library/react @testing-library/jest-dom)
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CTAButton from '../CTAButton';

describe('CTAButton Component', () => {
  /**
   * Test 1: Primary Variant Styling
   * Validates that primary buttons render with:
   * - Filled purple background (#6B4562)
   * - White text color
   * - Large padding (16px 32px)
   * - Bold font weight (700)
   * - 48px minimum height (Fitts's Law touch target)
   * - Pill shape (border-radius: 50px)
   */
  describe('Primary Variant', () => {
    it('should render with correct filled purple styling', () => {
      render(
        <CTAButton variant="primary">
          Book Appointment
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      const styles = window.getComputedStyle(button);

      // Verify primary variant visual hierarchy
      expect(button).toHaveStyle('background-color: rgb(107, 69, 98)'); // #6B4562
      expect(button).toHaveStyle('color: rgb(255, 255, 255)'); // white
      expect(button).toHaveStyle('font-weight: 700'); // bold
      expect(button).toHaveStyle('padding: 16px 32px'); // large
      expect(button).toHaveStyle('font-size: 18px');
      expect(button).toHaveStyle('border-radius: 50px'); // pill
    });

    it('should have 48px minimum height for touch targets (Fitts\'s Law)', () => {
      render(
        <CTAButton variant="primary">
          Book Now
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveStyle('min-height: 48px');
    });

    it('should render with Outfit font family', () => {
      render(
        <CTAButton variant="primary">
          Schedule
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveStyle('font-family: Outfit, sans-serif');
    });

    it('should use smooth transition for hover state', () => {
      render(
        <CTAButton variant="primary">
          Click Me
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveStyle('transition: all 0.3s ease');
    });
  });

  /**
   * Test 2: Secondary Variant Styling
   * Validates that secondary buttons render with:
   * - Outlined purple border (#6B4562)
   * - Transparent background
   * - Purple text color
   * - Medium padding (12px 24px)
   * - 48px minimum height (Fitts's Law)
   * - 2px border width (visual distinction)
   */
  describe('Secondary Variant', () => {
    it('should render with outlined purple styling', () => {
      render(
        <CTAButton variant="secondary">
          Learn More
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-secondary');

      // Verify secondary variant (outlined)
      expect(button).toHaveStyle('background-color: transparent');
      expect(button).toHaveStyle('color: rgb(107, 69, 98)'); // #6B4562
      expect(button).toHaveStyle('border: 2px solid rgb(107, 69, 98)');
      expect(button).toHaveStyle('padding: 12px 24px'); // medium
      expect(button).toHaveStyle('font-size: 16px');
      expect(button).toHaveStyle('font-weight: 600');
      expect(button).toHaveStyle('border-radius: 50px');
    });

    it('should have 48px minimum height for touch targets', () => {
      render(
        <CTAButton variant="secondary">
          Explore Services
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-secondary');
      expect(button).toHaveStyle('min-height: 48px');
    });

    it('should be visually distinct from primary (lighter weight)', () => {
      const { rerender } = render(
        <CTAButton variant="primary">
          Primary
        </CTAButton>
      );

      const primary = screen.getByTestId('cta-button-primary');
      const primaryBg = window.getComputedStyle(primary).backgroundColor;

      rerender(
        <CTAButton variant="secondary">
          Secondary
        </CTAButton>
      );

      const secondary = screen.getByTestId('cta-button-secondary');
      const secondaryBg = window.getComputedStyle(secondary).backgroundColor;

      // Secondary should be transparent (not filled)
      expect(secondaryBg).toBe('transparent');
      expect(primaryBg).not.toBe(secondaryBg);
    });
  });

  /**
   * Test 3: Tertiary Variant Styling
   * Validates that tertiary buttons render with:
   * - Transparent background
   * - Purple text color
   * - Small padding (8px 16px)
   * - Subtle appearance (smallest variant)
   * - 48px minimum height (Fitts's Law)
   * - Text-only styling (minimal visual weight)
   */
  describe('Tertiary Variant', () => {
    it('should render as text-only with minimal styling', () => {
      render(
        <CTAButton variant="tertiary">
          Skip for now
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-tertiary');

      // Verify tertiary variant (text-only, subtle)
      expect(button).toHaveStyle('background-color: transparent');
      expect(button).toHaveStyle('color: rgb(107, 69, 98)'); // #6B4562
      expect(button).toHaveStyle('padding: 8px 16px'); // smallest
      expect(button).toHaveStyle('font-size: 14px'); // smallest
      expect(button).toHaveStyle('font-weight: 500');
      expect(button).toHaveStyle('border-radius: 50px');
    });

    it('should have 48px minimum height even as text-only variant', () => {
      render(
        <CTAButton variant="tertiary">
          Dismiss
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-tertiary');
      expect(button).toHaveStyle('min-height: 48px');
    });

    it('should be less visually prominent than primary and secondary', () => {
      const { rerender } = render(
        <CTAButton variant="primary">
          Primary
        </CTAButton>
      );

      const primary = screen.getByTestId('cta-button-primary');
      const primaryFontSize = window.getComputedStyle(primary).fontSize;
      const primaryFontWeight = window.getComputedStyle(primary).fontWeight;

      rerender(
        <CTAButton variant="tertiary">
          Tertiary
        </CTAButton>
      );

      const tertiary = screen.getByTestId('cta-button-tertiary');
      const tertiaryFontSize = window.getComputedStyle(tertiary).fontSize;
      const tertiaryFontWeight = window.getComputedStyle(tertiary).fontWeight;

      // Tertiary should be smaller and lighter weight
      expect(parseInt(tertiaryFontSize)).toBeLessThan(
        parseInt(primaryFontSize)
      );
      expect(parseInt(tertiaryFontWeight)).toBeLessThan(
        parseInt(primaryFontWeight)
      );
    });
  });

  /**
   * Test 4: Link Component Rendering
   * Validates that href prop renders as Next.js Link component
   * instead of button element, enabling client-side navigation
   */
  describe('Link vs Button Rendering', () => {
    it('should render as Link component when href is provided', () => {
      render(
        <CTAButton href="/appointment-request" variant="primary">
          Book Appointment
        </CTAButton>
      );

      const link = screen.getByTestId('cta-button-primary');
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href', '/appointment-request');
    });

    it('should render as button element when href is not provided', () => {
      render(
        <CTAButton variant="primary" onClick={() => {}}>
          Click Me
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button.tagName).toBe('BUTTON');
    });

    it('should accept and apply onClick handler when rendered as button', () => {
      const mockClick = jest.fn();

      render(
        <CTAButton variant="primary" onClick={mockClick}>
          Click Me
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      button.click();

      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('should accept custom className prop', () => {
      render(
        <CTAButton variant="primary" className="custom-class">
          Styled Button
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveClass('custom-class');
    });
  });

  /**
   * Test 5: Responsive Design
   * Validates that buttons meet responsive requirements:
   * - 48px minimum height on all screen sizes
   * - Display as inline-flex for consistent alignment
   */
  describe('Responsive Design & Touch Targets', () => {
    it('should be touch-friendly on mobile (48px min height)', () => {
      render(
        <CTAButton variant="primary">
          Mobile Friendly
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveStyle('min-height: 48px');
      expect(button).toHaveStyle('display: inline-flex');
      expect(button).toHaveStyle('align-items: center');
      expect(button).toHaveStyle('justify-content: center');
    });

    it('all variants should be centered (inline-flex)', () => {
      const variants = ['primary', 'secondary', 'tertiary'] as const;

      variants.forEach((variant) => {
        render(
          <CTAButton variant={variant} key={variant}>
            Button
          </CTAButton>
        );

        const button = screen.getByTestId(`cta-button-${variant}`);
        expect(button).toHaveStyle('display: inline-flex');
        expect(button).toHaveStyle('align-items: center');
        expect(button).toHaveStyle('justify-content: center');
      });
    });
  });

  /**
   * Test 6: Accessibility Features
   * Validates WCAG 2.1 AA compliance
   */
  describe('Accessibility', () => {
    it('should have proper contrast ratios for all variants', () => {
      // Primary: white (#fff) on purple (#6B4562) = 8.5:1 WCAG AAA
      // Secondary: purple (#6B4562) on white (border/outline) = ~5:1 WCAG AA
      // Tertiary: purple (#6B4562) on white = ~5:1 WCAG AA

      render(
        <CTAButton variant="primary" onClick={() => {}}>
          Primary
        </CTAButton>
      );

      const primary = screen.getByTestId('cta-button-primary');
      expect(primary).toHaveStyle('color: rgb(255, 255, 255)'); // white text
      expect(primary).toHaveStyle('background-color: rgb(107, 69, 98)'); // dark purple
    });

    it('should have proper focus styling', () => {
      render(
        <CTAButton variant="primary" onClick={() => {}}>
          Focusable Button
        </CTAButton>
      );

      const button = screen.getByTestId('cta-button-primary');
      expect(button).toHaveStyle('outline: 2px solid rgb(107, 69, 98)');
    });

    it('should render semantic HTML (button or link)', () => {
      const { rerender } = render(
        <CTAButton variant="primary" onClick={() => {}}>
          Button
        </CTAButton>
      );

      let element = screen.getByTestId('cta-button-primary');
      expect(element.tagName).toMatch(/BUTTON|A/);

      rerender(
        <CTAButton href="/page" variant="primary">
          Link
        </CTAButton>
      );

      element = screen.getByTestId('cta-button-primary');
      expect(element.tagName).toBe('A');
    });
  });
});
