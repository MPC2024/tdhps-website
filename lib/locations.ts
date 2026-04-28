/**
 * Location Data for The Dog House Pet Salon
 * Contains complete schema data: Google Place IDs, coordinates, hours, services, booking URLs
 */

export interface OpeningHours {
  monday: { open: string; close: string };
  tuesday: { open: string; close: string };
  wednesday: { open: string; close: string };
  thursday: { open: string; close: string };
  friday: { open: string; close: string };
  saturday: { open: string; close: string };
  sunday?: { open: string; close: string };
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  googlePlaceId: string;
  yelpBusinessId?: string;
  googleReviewUrl: string;
  phone: string;
  email: string;
  website: string;
  bookingUrl: string;
  hours: OpeningHours;
  url: string; // relative path to location page
}

// Standard business hours for all locations
const STANDARD_HOURS: OpeningHours = {
  monday: { open: "07:00", close: "19:00" },
  tuesday: { open: "07:00", close: "19:00" },
  wednesday: { open: "07:00", close: "19:00" },
  thursday: { open: "07:00", close: "19:00" },
  friday: { open: "07:00", close: "19:00" },
  saturday: { open: "08:00", close: "18:00" },
};

export const LOCATIONS: Record<string, Location> = {
  galleria: {
    id: "galleria",
    name: "The Dog House Pet Salon - Galleria",
    address: "5917 Richmond Ave",
    city: "Houston",
    state: "TX",
    zip: "77057",
    lat: 29.7311369,
    lng: -95.4832833,
    googlePlaceId: "ChIJNWbI09DDQIYRxZJigeiMf5A",
    yelpBusinessId: "",
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJNWbI09DDQIYRxZJigeiMf5A",
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    website: "https://www.thedoghouseps.com",
    bookingUrl: "https://www.thedoghouseps.com/appointment-request/",
    hours: STANDARD_HOURS,
    url: "/galleria-uptown-park-location",
  },
  memorialPark: {
    id: "memorial-park",
    name: "The Dog House Pet Salon - Memorial Park",
    address: "6434 Washington Ave",
    city: "Houston",
    state: "TX",
    zip: "77007",
    lat: 29.775574,
    lng: -95.426811,
    googlePlaceId: "ChIJe7kMPejHQIYR8ANum7UaLx8",
    yelpBusinessId: "",
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJe7kMPejHQIYR8ANum7UaLx8",
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    website: "https://www.thedoghouseps.com",
    bookingUrl: "https://www.thedoghouseps.com/appointment-request-memorial/",
    hours: STANDARD_HOURS,
    url: "/memorial-park-location",
  },
  pearland: {
    id: "pearland",
    name: "The Dog House Pet Salon - Pearland",
    address: "2810 Business Center Dr #126",
    city: "Pearland",
    state: "TX",
    zip: "77584",
    lat: 29.5567974,
    lng: -95.3927816,
    googlePlaceId: "ChIJQ-nKpJuTQIYRqVwFi2Apg9U",
    yelpBusinessId: "",
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJQ-nKpJuTQIYRqVwFi2Apg9U",
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    website: "https://www.thedoghouseps.com",
    bookingUrl: "https://www.thedoghouseps.com/appointment-request-pearland/",
    hours: STANDARD_HOURS,
    url: "/pearland-location",
  },
};

export function getLocationById(id: string): Location | undefined {
  return LOCATIONS[id];
}

export function getLocationByName(name: string): Location | undefined {
  return Object.values(LOCATIONS).find((loc) =>
    loc.name.toLowerCase().includes(name.toLowerCase())
  );
}
