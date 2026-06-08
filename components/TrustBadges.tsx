'use client';

import React from 'react';

interface BadgesProps {
  variant?: 'horizontal' | 'grid';
}

export default function TrustBadges({ variant = 'horizontal' }: BadgesProps) {
  const badges = [
    { label: 'Certified Master Groomer', icon: '🛡️' },
    { label: 'Vaccination Required', icon: '✓' },
    { label: 'Safe & Supervised', icon: '👁️' },
    { label: 'Climate-Controlled', icon: '🌡️' },
    { label: 'Live Webcams', icon: '📹' },
    { label: 'Secure Facility', icon: '🔒' },
  ];

  const containerStyle: React.CSSProperties = {
    display: variant === 'horizontal' ? 'flex' : 'grid',
    ...(variant === 'horizontal' && {
      flexWrap: 'wrap',
      gap: '16px',
      justifyContent: 'center',
    }),
    ...(variant === 'grid' && {
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '20px',
    }),
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {badges.map((badge, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            backgroundColor: '#f8f5f6',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '28px', height: '32px', display: 'flex', alignItems: 'center' }}>
            {badge.icon}
          </div>
          <p
            style={{
              fontFamily: '"Roboto", sans-serif',
              fontSize: '13px',
              color: '#1F2124',
              fontWeight: '600',
              margin: 0,
            }}
          >
            {badge.label}
          </p>
        </div>
      ))}
    </div>
  );
}
