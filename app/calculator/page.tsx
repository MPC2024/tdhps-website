'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

// Pricing data extracted from source repo
const BREEDS = [
  { id: 1, name: 'Labrador Retriever', species: 'dog' },
  { id: 2, name: 'French Bulldog', species: 'dog' },
  { id: 3, name: 'German Shepherd', species: 'dog' },
  { id: 4, name: 'Golden Retriever', species: 'dog' },
  { id: 5, name: 'Bulldog', species: 'dog' },
  { id: 6, name: 'Poodle', species: 'dog' },
  { id: 7, name: 'Beagle', species: 'dog' },
  { id: 8, name: 'Rottweiler', species: 'dog' },
  { id: 9, name: 'German Shorthaired Pointer', species: 'dog' },
  { id: 10, name: 'Dachshund', species: 'dog' },
  { id: 11, name: 'Pembroke Welsh Corgi', species: 'dog' },
  { id: 12, name: 'Australian Shepherd', species: 'dog' },
  { id: 13, name: 'Yorkshire Terrier', species: 'dog' },
  { id: 14, name: 'Boxer', species: 'dog' },
  { id: 15, name: 'Cavalier King Charles Spaniel', species: 'dog' },
  { id: 16, name: 'Doberman Pinscher', species: 'dog' },
  { id: 17, name: 'Great Dane', species: 'dog' },
  { id: 18, name: 'Miniature Schnauzer', species: 'dog' },
  { id: 19, name: 'Siberian Husky', species: 'dog' },
  { id: 20, name: 'Bernese Mountain Dog', species: 'dog' },
  { id: 21, name: 'Chihuahua', species: 'dog' },
  { id: 22, name: 'Shih Tzu', species: 'dog' },
  { id: 23, name: 'Pug', species: 'dog' },
  { id: 24, name: 'Pomeranian', species: 'dog' },
  { id: 25, name: 'Border Collie', species: 'dog' },
  { id: 26, name: 'Maine Coon', species: 'cat' },
  { id: 27, name: 'Ragdoll', species: 'cat' },
  { id: 28, name: 'Persian', species: 'cat' },
  { id: 29, name: 'Siamese', species: 'cat' },
  { id: 30, name: 'Bengal', species: 'cat' },
  { id: 31, name: 'Sphynx', species: 'cat' },
  { id: 32, name: 'British Shorthair', species: 'cat' },
  { id: 33, name: 'Abyssinian', species: 'cat' },
  { id: 34, name: 'Scottish Fold', species: 'cat' },
  { id: 35, name: 'Domestic Shorthair', species: 'cat' },
];

const PRICING_TIERS = [
  { name: 'Tiny / Toy / Teacup', sortOrder: 1, minWeight: 1, maxWeight: 10, bathPrice: 50 },
  { name: 'Extra Small', sortOrder: 2, minWeight: 10.1, maxWeight: 20, bathPrice: 55 },
  { name: 'Small', sortOrder: 3, minWeight: 20.1, maxWeight: 35, bathPrice: 60 },
  { name: 'Medium', sortOrder: 4, minWeight: 35.1, maxWeight: 55, bathPrice: 65 },
  { name: 'Large', sortOrder: 5, minWeight: 55.1, maxWeight: 75, bathPrice: 70 },
  { name: 'Extra Large', sortOrder: 6, minWeight: 75.1, maxWeight: 100, bathPrice: 75 },
  { name: 'Giant', sortOrder: 7, minWeight: 100.1, maxWeight: 250, bathPrice: 85 },
];

const PRICING_RULES = {
  bathToBasicGroom: 10,
  basicGroomToFullGroom: 15,
};

interface PricingResult {
  tierName: string;
  prices: Array<{
    serviceName: string;
    price: number;
  }>;
}

function calculatePrice(weight: number): PricingResult | null {
  const tier = PRICING_TIERS.find(
    (t) => weight >= t.minWeight && weight <= t.maxWeight
  );

  if (!tier) return null;

  const bathPrice = tier.bathPrice;
  const basicPrice = bathPrice + PRICING_RULES.bathToBasicGroom;
  const fullPrice = basicPrice + PRICING_RULES.basicGroomToFullGroom;

  return {
    tierName: tier.name,
    prices: [
      { serviceName: 'Bath', price: bathPrice },
      { serviceName: 'Basic Groom', price: basicPrice },
      { serviceName: 'Complete Groom', price: fullPrice },
    ],
  };
}

export default function CalculatorPage() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<PricingResult | null>(null);
  const [error, setError] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const formattedBreeds = BREEDS.sort((a, b) => {
    if (a.species === 'dog' && b.species !== 'dog') return -1;
    if (a.species !== 'dog' && b.species === 'dog') return 1;
    return a.name.localeCompare(b.name);
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!selectedBreed) {
      setError('Please select a breed');
      return;
    }

    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) {
      setError('Please enter a valid weight');
      return;
    }

    if (weightNum > 300) {
      setError('Weight seems too high');
      return;
    }

    setShowDisclaimer(true);
  };

  const handleContinueAfterDisclaimer = () => {
    const weightNum = parseFloat(weight);
    const calculatedResult = calculatePrice(weightNum);

    if (!calculatedResult) {
      setError('Unable to calculate price for this weight');
      setShowDisclaimer(false);
      return;
    }

    setResult(calculatedResult);
    setShowDisclaimer(false);
  };

  const handleReset = () => {
    setSelectedBreed('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const filteredBreeds = selectedBreed
    ? formattedBreeds
    : formattedBreeds.slice(0, 10);

  return (
    <div style={{ minHeight: '100vh', padding: '160px 20px 40px', position: 'relative', backgroundImage: 'url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-camera.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(248, 248, 248, 0.92)' }} />
      {/* Back Link */}
      <div style={{ maxWidth: '500px', margin: '0 auto 32px', position: 'relative', zIndex: 2 }}>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: '"Outfit", sans-serif',
            fontSize: '0.95rem',
            color: '#965B83',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#7D4969';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#965B83';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '4px' }}>
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Homepage
        </a>
      </div>

      {/* Main Card Container */}
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          padding: '40px',
          position: 'relative' as const,
          zIndex: 2,
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: '24px',
            fontWeight: 600,
            color: '#965B83',
            textAlign: 'center',
            marginBottom: '32px',
            margin: '0 0 32px 0',
          }}
        >
          Grooming Price Calculator
        </h1>
        <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Breed Selection */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '12px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor" />
              </svg>
              Pet Breed
            </label>
            <input
              type="text"
              list="breed-list"
              placeholder="Select a breed..."
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: '16px',
                fontFamily: '"Outfit", sans-serif',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#965B83';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
            />
            <datalist id="breed-list">
              {formattedBreeds.map((breed) => (
                <option key={breed.id} value={breed.name} />
              ))}
            </datalist>
          </div>

          {/* Weight Input */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '12px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor" />
              </svg>
              Pet Weight
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                placeholder="e.g. 25"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 16px',
                  fontSize: '16px',
                  fontFamily: '"Outfit", sans-serif',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                  paddingRight: '50px',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#965B83';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '14px',
                  color: '#9CA3AF',
                  pointerEvents: 'none',
                }}
              >
                lbs
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: '#FEE2E2',
                border: '1px solid #FECACA',
                borderRadius: '12px',
                color: '#DC2626',
                fontSize: '0.9rem',
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '16px 24px',
              backgroundColor: result ? '#e0e0e0' : '#965B83',
              color: result ? '#999' : '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: '"Outfit", sans-serif',
              cursor: result ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
            disabled={!!result}
            onMouseEnter={(e) => {
              if (!result) {
                e.currentTarget.style.backgroundColor = '#7D4969';
              }
            }}
            onMouseLeave={(e) => {
              if (!result) {
                e.currentTarget.style.backgroundColor = '#965B83';
              }
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="currentColor" />
            </svg>
            Calculate Price
          </button>

          {/* Reset Button */}
          {result && (
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: '12px 24px',
                backgroundColor: '#F3F4F6',
                color: '#6B7280',
                border: '1px solid #E5E7EB',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                fontFamily: '"Outfit", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }}
            >
              Clear Pricing
            </button>
          )}
        </form>

        {/* Results */}
        {result && (
          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #E5E7EB' }}>
            <h2
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Estimated Pricing
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '14px',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              {result.tierName} ({weight} lbs)
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {result.prices.map((service) => (
                <div
                  key={service.serviceName}
                  style={{
                    padding: '18px 20px',
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                    e.currentTarget.style.borderColor = '#965B83';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#1F2124',
                        marginBottom: '2px',
                        margin: '0 0 2px 0',
                      }}
                    >
                      {service.serviceName}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '13px',
                        color: '#999',
                        margin: 0,
                      }}
                    >
                      Professional grooming
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#965B83',
                        marginBottom: '2px',
                        margin: '0 0 2px 0',
                      }}
                    >
                      ${service.price.toFixed(2)}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '12px',
                        color: '#BBB',
                      }}
                    >
                      estimated
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '12px',
                color: '#999',
                textAlign: 'center',
                marginTop: '20px',
                fontStyle: 'italic',
                margin: '20px 0 0 0',
              }}
            >
              * Every pet is unique. All grooming prices are estimates only.
            </p>

            {/* Book Now CTA */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="https://www.thedoghouseps.com/appointment-request/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '16px 24px',
                  backgroundColor: '#965B83',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7D4969';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#965B83';
                }}
              >
                Book Appointment Now
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
          onClick={() => setShowDisclaimer(false)}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F2124',
                marginBottom: '16px',
                margin: '0 0 16px 0',
              }}
            >
              Important Notice
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              Every pet is unique. All grooming prices provided are estimates only and are not guaranteed. Final pricing is determined after your pet is weighed and our groomer completes an in-person visual assessment. Factors such as breed, size, coat condition, and behavior may affect the final cost. We will always review and confirm the final price with you before beginning any grooming services.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowDisclaimer(false)}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#F3F4F6',
                  color: '#666',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E5E7EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3F4F6';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleContinueAfterDisclaimer}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  backgroundColor: '#965B83',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7D4969';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#965B83';
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
