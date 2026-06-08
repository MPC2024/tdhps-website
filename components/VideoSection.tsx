'use client';

import VideoCard, { VideoCardProps } from './VideoCard';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videos: VideoCardProps[];
  layout?: '2-col' | '3-col' | '4-col';
}

export default function VideoSection({
  title,
  subtitle,
  videos,
  layout = '3-col',
}: VideoSectionProps) {
  const gridColumns = {
    '2-col': 'repeat(auto-fit, minmax(300px, 1fr))',
    '3-col': 'repeat(auto-fit, minmax(260px, 1fr))',
    '4-col': 'repeat(auto-fit, minmax(220px, 1fr))',
  };

  return (
    <section style={{ padding: 'clamp(40px, 10vw, 80px) 20px', backgroundColor: '#ffffff' }}>
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: '"Bowlby One SC", Sans-serif',
            fontSize: 'clamp(26px, 2.5vw, 36px)',
            color: '#1F2124',
            marginBottom: subtitle ? '8px' : '40px',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>

        {subtitle && (
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
            {subtitle}
          </p>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridColumns[layout],
            gap: '30px',
          }}
        >
          {videos.map((video, index) => (
            <VideoCard key={`${video.title}-${index}`} {...video} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
