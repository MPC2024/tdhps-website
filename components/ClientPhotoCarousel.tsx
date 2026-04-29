import Image from "next/image";

interface PhotoCarouselProps {
  language?: string;
}

export default async function ClientPhotoCarousel({
  language = "en",
}: PhotoCarouselProps) {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    console.error("GOOGLE_PLACES_API_KEY not configured");
    return null;
  }

  // Place IDs for all 3 locations
  const placeIds = [
    "ChIJNWbI09DDQIYRxZJigeiMf5A", // Galleria
    "ChIJe7kMPejHQIYR8ANum7UaLx8", // Memorial Park
    "ChIJQ-nKpJuTQIYRqVwFi2Apg9U", // Pearland
  ];

  const locationNames = [
    "Galleria/Uptown Park",
    "Memorial Park",
    "Pearland",
  ];

  // Fetch photos from Google Places API for each location
  let allPhotos: Array<{ url: string; location: string }> = [];

  for (let i = 0; i < placeIds.length; i++) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeIds[i]}&fields=photos&key=${API_KEY}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour
      );

      if (!response.ok) {
        console.error(
          `Failed to fetch photos for ${locationNames[i]}: ${response.status}`
        );
        continue;
      }

      const data = await response.json();

      if (data.result?.photos && Array.isArray(data.result.photos)) {
        // Get up to 10 photos from this location
        const photoRefs = data.result.photos.slice(0, 10);

        photoRefs.forEach(
          (photo: { photo_reference: string; width: number; height: number }) => {
            const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=${API_KEY}`;
            allPhotos.push({
              url: photoUrl,
              location: locationNames[i],
            });
          }
        );
      }
    } catch (error) {
      console.error(`Error fetching photos for ${locationNames[i]}:`, error);
    }
  }

  // If no photos found, return null (graceful degradation)
  if (allPhotos.length === 0) {
    console.warn("No photos found from Google Places API");
    return null;
  }

  // Create a duplicated array for seamless infinite scroll
  const duplicatedPhotos = [...allPhotos, ...allPhotos];

  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#f9f7f9",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto", paddingBottom: "40px" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: '"Bowlby One SC", Sans-serif',
            fontSize: "clamp(26px, 2.5vw, 36px)",
            color: "#1F2124",
            marginBottom: "40px",
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Our Happy Clients
        </h2>

        {/* Carousel Container */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .carousel-track {
              display: flex;
              gap: 16px;
              animation: scroll 30s linear infinite;
            }

            .carousel-track:hover {
              animation-play-state: paused;
            }

            .carousel-item {
              flex: 0 0 200px;
              height: 200px;
              position: relative;
            }

            .carousel-item img {
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              object-fit: cover;
              transition: transform 0.3s ease;
            }

            .carousel-item:hover img {
              transform: scale(1.15);
              box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
            }
          `}</style>

          <div className="carousel-track">
            {duplicatedPhotos.map((photo, index) => (
              <div key={index} className="carousel-item">
                <Image
                  src={photo.url}
                  alt={`Client photo from ${photo.location}`}
                  fill
                  sizes="200px"
                  quality={75}
                  style={{
                    borderRadius: "12px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
