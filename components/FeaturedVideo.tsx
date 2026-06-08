'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FeaturedVideoProps {
  title: string;
  description: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
}

export default function FeaturedVideo({
  title,
  description,
  youtubeUrl,
  thumbnailUrl,
}: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=0&rel=0`
      : '';
  };

  const embedUrl = youtubeUrl ? getYoutubeEmbedUrl(youtubeUrl) : '';

  return (
    <>
      {/* VideoObject Schema */}
      {youtubeUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: title,
              description: description,
              thumbnailUrl: thumbnailUrl || '',
              uploadDate: '2026-05-23',
              embedUrl: embedUrl,
              publisher: {
                '@type': 'Organization',
                name: 'The Dog House Pet Salon',
              },
            }),
          }}
        />
      )}

      <section
        style={{
          padding: 'clamp(40px, 10vw, 80px) 20px',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Video Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              cursor: youtubeUrl ? 'pointer' : 'default',
            }}
            onClick={() => youtubeUrl && setIsPlaying(true)}
          >
            {isPlaying && embedUrl ? (
              <iframe
                src={embedUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            ) : (
              <>
                {/* Thumbnail or Placeholder */}
                {thumbnailUrl ? (
                  <Image
                    src={thumbnailUrl}
                    alt={title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#2a2a2a',
                    }}
                  />
                )}

                {/* Play Button Overlay */}
                {youtubeUrl && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      transition: 'background-color 0.3s ease',
                    }}
                    className="featured-play-overlay"
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '16px solid #965B83',
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          marginLeft: '4px',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Coming Soon Badge */}
                {!youtubeUrl && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#ffffff',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontFamily: '"Outfit", sans-serif',
                    }}
                  >
                    Coming Soon
                  </div>
                )}
              </>
            )}
          </div>

          {/* Text Content */}
          <div>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                color: '#1F2124',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: '16px',
                color: '#54595F',
                lineHeight: 1.8,
                marginBottom: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .featured-video-grid {
              grid-template-columns: 1fr !important;
            }
          }

          .featured-play-overlay:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </section>
    </>
  );
}
