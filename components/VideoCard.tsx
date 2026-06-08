'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface VideoCardProps {
  title: string;
  description?: string;
  category?: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
}

export default function VideoCard({
  title,
  description,
  category,
  youtubeUrl,
  thumbnailUrl,
  duration,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    // Extract video ID from various YouTube URL formats
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
              description: description || title,
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

      <div
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
        className="video-card"
      >
        {/* Video Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            backgroundColor: '#2a2a2a',
            cursor: youtubeUrl ? 'pointer' : 'default',
            overflow: 'hidden',
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
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
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
                  className="play-overlay"
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
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
                        borderLeft: '12px solid #965B83',
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        marginLeft: '3px',
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
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: '"Outfit", sans-serif',
                  }}
                >
                  Coming Soon
                </div>
              )}

              {/* Duration Badge */}
              {duration && youtubeUrl && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: '"Outfit", sans-serif',
                  }}
                >
                  {duration}
                </div>
              )}
            </>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            padding: '16px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {category && (
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#965B83',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: '600',
                marginBottom: '8px',
                width: 'fit-content',
              }}
            >
              {category}
            </div>
          )}

          <h3
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              color: '#1F2124',
              margin: 0,
              marginBottom: '8px',
            }}
          >
            {title}
          </h3>

          {description && (
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '14px',
                color: '#54595F',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      <style>{`
        .video-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .play-overlay:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
