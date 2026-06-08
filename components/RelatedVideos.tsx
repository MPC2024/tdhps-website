'use client';

import VideoCard, { VideoCardProps } from './VideoCard';

interface RelatedVideosProps {
  title?: string;
  videos: VideoCardProps[];
}

export default function RelatedVideos({
  title = 'Related Videos',
  videos,
}: RelatedVideosProps) {
  return (
    <section style={{ padding: 'clamp(40px, 10vw, 80px) 20px', backgroundColor: '#f9f7f9' }}>
      <div
        style={{
          maxWidth: '1520px',
          margin: '0 auto',
        }}
      >
        {title && (
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: 'clamp(20px, 2vw, 28px)',
              color: '#1F2124',
              marginBottom: '30px',
              lineHeight: 1.3,
            }}
          >
            {title}
          </h2>
        )}

        {/* Horizontal scrollable container on mobile, grid on desktop */}
        <div
          className="related-videos-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}
        >
          {videos.map((video, index) => (
            <VideoCard key={`${video.title}-${index}`} {...video} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .related-videos-container {
            display: flex;
            overflow-x: auto;
            gap: 16px;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .related-videos-container > div {
            flex: 0 0 calc(100% - 20px);
            min-width: 180px;
            scroll-snap-align: start;
          }

          .related-videos-container::-webkit-scrollbar {
            height: 6px;
          }

          .related-videos-container::-webkit-scrollbar-track {
            background: #f0f0f0;
            border-radius: 3px;
          }

          .related-videos-container::-webkit-scrollbar-thumb {
            background: #965B83;
            border-radius: 3px;
          }
        }
      `}</style>
    </section>
  );
}
