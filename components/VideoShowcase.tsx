'use client';

interface VideoShowcaseProps {
  videoMp4?: string;
  videoWebm?: string;
  posterUrl?: string;
}

export default function VideoShowcase({
  videoMp4 = "/videos/tdhps-fred-tiktok.mp4",
  videoWebm = "/videos/tdhps-fred-tiktok.webm",
  posterUrl = "/videos/tdhps-fred-tiktok-poster.jpg",
}: VideoShowcaseProps) {
  return (
    <>
      <section
        style={{
          padding: 'clamp(40px, 10vw, 80px) 20px',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1520px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: 'clamp(26px, 2.5vw, 36px)',
              color: '#1F2124',
              marginBottom: '8px',
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            See Our Pet Care in Action
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              color: '#54595F',
              textAlign: 'center',
              marginBottom: '40px',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            Watch our team provide professional grooming, boarding, and daycare services
          </p>

          {/* Video Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px',
            }}
          >
            {/* CARD 1: Grooming Transformation (Fred's TikTok) */}
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
              {/* Video Container (Landscape 16:9 with blurred letterbox) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%', // 16:9
                  backgroundColor: '#2a2a2a',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  margin: '0',
                }}
              >
                {/* Blurred Background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${posterUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px) brightness(0.5)',
                    transform: 'scale(1.1)',
                    zIndex: 1,
                  }}
                />

                {/* Video (centered, landscape container) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <video
                    style={{
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={posterUrl}
                    controls
                  >
                    <source src={videoWebm} type="video/webm" />
                    <source src={videoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Card Text */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#965B83',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: '"Outfit", Sans-serif',
                    fontWeight: '600',
                    marginBottom: '8px',
                    width: 'fit-content',
                  }}
                >
                  Grooming
                </div>
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
                  Grooming Transformation
                </h3>
              </div>
            </div>

            {/* CARD 2: Daycare Playtime (Coming Soon) */}
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
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  backgroundColor: '#2a2a2a',
                  cursor: 'default',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#2a2a2a' }} />
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
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#965B83',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: '"Outfit", Sans-serif',
                    fontWeight: '600',
                    marginBottom: '8px',
                    width: 'fit-content',
                  }}
                >
                  Daycare
                </div>
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
                  Daycare Playtime
                </h3>
              </div>
            </div>

            {/* CARD 3: Boarding Facility Tour (Coming Soon) */}
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
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  backgroundColor: '#2a2a2a',
                  cursor: 'default',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#2a2a2a' }} />
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
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#965B83',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: '"Outfit", Sans-serif',
                    fontWeight: '600',
                    marginBottom: '8px',
                    width: 'fit-content',
                  }}
                >
                  Boarding
                </div>
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
                  Boarding Facility Tour
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .video-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
}
