'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { i18n } from '@lingui/core';
import { msg } from '@lingui/macro';

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
    <>
      {/* Banner Section */}
      <div
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '80px',
          marginTop: '60px',
        }}
      >
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 400,
              color: '#1F2124',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}
          >
            Grooming Price Calculator
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#54595F',
              lineHeight: '1.6',
            }}
          >
            Get an instant, personalized grooming price estimate for your dog. Transparent pricing. No obligation.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <section style={{ backgroundColor: '#fff', padding: '80px 20px 50px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Breed Selection */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1F2124',
                    marginBottom: '12px',
                  }}
                >
                  Select Breed
                </label>
                <input
                  type="text"
                  list="breed-list"
                  placeholder="Search or select a breed..."
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    fontFamily: '"Outfit", sans-serif',
                    border: '2px solid #E5E7EB',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#965B83';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
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
                    display: 'block',
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1F2124',
                    marginBottom: '12px',
                  }}
                >
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 25"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    fontFamily: '"Outfit", sans-serif',
                    border: '2px solid #E5E7EB',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#965B83';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: '#FEE2E2',
                    border: '1px solid #FECACA',
                    borderRadius: '8px',
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
                  padding: '14px 24px',
                  backgroundColor: result ? '#E5E7EB' : '#965B83',
                  color: result ? '#6B7280' : '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  fontFamily: '"Outfit", sans-serif',
                  cursor: result ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                }}
                disabled={!!result}
                onMouseEnter={(e) => {
                  if (!result) {
                    e.currentTarget.style.backgroundColor = '#7D4969';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!result) {
                    e.currentTarget.style.backgroundColor = '#965B83';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {result ? 'Pricing Calculated' : 'Calculate Price'}
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
                    border: '2px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '1rem',
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
                  Clear Pricing
                </button>
              )}
            </form>

            {/* Results */}
            {result && (
              <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '2px solid #E5E7EB' }}>
                <h2
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                    color: '#1F2124',
                    marginBottom: '24px',
                    textAlign: 'center',
                  }}
                >
                  Estimated Pricing
                </h2>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '0.95rem',
                    color: '#6B7280',
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  {result.tierName} ({weight} lbs)
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {result.prices.map((service) => (
                    <div
                      key={service.serviceName}
                      style={{
                        padding: '20px 24px',
                        backgroundColor: '#F9FAFB',
                        border: '2px solid #E5E7EB',
                        borderRadius: '8px',
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
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#1F2124',
                            marginBottom: '4px',
                          }}
                        >
                          {service.serviceName}
                        </h3>
                        <p
                          style={{
                            fontFamily: '"Outfit", sans-serif',
                            fontSize: '0.85rem',
                            color: '#6B7280',
                          }}
                        >
                          Professional grooming service
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            fontFamily: '"Bowlby One SC", sans-serif',
                            fontSize: '1.8rem',
                            fontWeight: 400,
                            color: '#965B83',
                            marginBottom: '4px',
                          }}
                        >
                          ${service.price.toFixed(2)}
                        </div>
                        <div
                          style={{
                            fontFamily: '"Outfit", sans-serif',
                            fontSize: '0.75rem',
                            color: '#9CA3AF',
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
                    fontSize: '0.8rem',
                    color: '#6B7280',
                    textAlign: 'center',
                    marginTop: '24px',
                    fontStyle: 'italic',
                  }}
                >
                  * Every pet is unique. All grooming prices provided are estimates only and are not guaranteed.
                </p>

                {/* Book Now CTA */}
                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <a
                    href="https://www.thedoghouseps.com/appointment-request/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '14px 32px',
                      backgroundColor: '#965B83',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      fontFamily: '"Outfit", sans-serif',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#7D4969';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#965B83';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Book Appointment Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

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
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1F2124',
                marginBottom: '16px',
              }}
            >
              Important Notice
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '1rem',
                color: '#54595F',
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
                  color: '#6B7280',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
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
                  borderRadius: '8px',
                  fontSize: '1rem',
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
    </>
  );
}
