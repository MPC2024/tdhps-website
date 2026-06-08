import Link from "next/link";

interface RelatedLocationsProps {
  currentLocation: "galleria" | "memorial-park" | "pearland";
  service: "grooming" | "boarding" | "daycare";
}

const locationMap: Record<string, Record<string, { name: string; url: string }[]>> = {
  grooming: {
    galleria: [
      { name: "Memorial Park", url: "/memorial-park-dog-grooming" },
      { name: "Pearland", url: "/pearland-dog-grooming" },
    ],
    "memorial-park": [
      { name: "Galleria", url: "/galleria-dog-grooming" },
      { name: "Pearland", url: "/pearland-dog-grooming" },
    ],
    pearland: [
      { name: "Galleria", url: "/galleria-dog-grooming" },
      { name: "Memorial Park", url: "/memorial-park-dog-grooming" },
    ],
  },
  boarding: {
    galleria: [
      { name: "Memorial Park", url: "/memorial-park-dog-boarding" },
    ],
    "memorial-park": [
      { name: "Galleria", url: "/galleria-dog-boarding" },
    ],
    pearland: [
      { name: "Galleria", url: "/galleria-dog-boarding" },
      { name: "Memorial Park", url: "/memorial-park-dog-boarding" },
    ],
  },
  daycare: {
    galleria: [
      { name: "Memorial Park", url: "/memorial-park-dog-daycare" },
    ],
    "memorial-park": [
      { name: "Galleria", url: "/galleria-dog-daycare" },
    ],
    pearland: [],
  },
};

export default function RelatedLocations({
  currentLocation,
  service,
}: RelatedLocationsProps) {
  const relatedLocations = locationMap[service]?.[currentLocation] || [];

  if (!relatedLocations || relatedLocations.length === 0) {
    return null;
  }

  return (
    <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Also available at:</span>{" "}
        {relatedLocations.map((location, index) => (
          <span key={index}>
            <Link
              href={location.url}
              className="text-pink-600 font-semibold hover:text-pink-700 underline"
            >
              {location.name}
            </Link>
            {index < relatedLocations.length - 1 && " | "}
          </span>
        ))}
      </p>
    </div>
  );
}
