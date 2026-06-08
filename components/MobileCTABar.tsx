'use client';

import Link from 'next/link';
import React from 'react';

export default function MobileCTABar() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          [data-mobile-cta-bar] {
            display: flex !important;
          }
          body {
            padding-bottom: 60px;
          }
        }
      `}</style>
      <div
        data-mobile-cta-bar
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e0e0e0',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px',
        }}
      >
      {/* Call Button */}
      <a
        href="tel:7138206140"
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          color: '#965B83',
          fontFamily: '"Outfit", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          borderRight: '1px solid #e0e0e0',
        }}
      >
        <span style={{ marginRight: '8px' }}>📞</span>
        Call
      </a>

      {/* Book Button */}
      <Link
        href="/appointment-request"
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          color: '#965B83',
          fontFamily: '"Outfit", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        <span style={{ marginRight: '8px' }}>📅</span>
        Book
      </Link>
    </div>
    </>
  );
}
