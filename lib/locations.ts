/**
 * Location Data for The Dog House Pet Salon
 * Contains Google Place IDs and Yelp Business IDs for review integration
 */

export interface Location {
  id: string;
  name: string;
  address: string;
  googlePlaceId: string;
  yelpBusinessId?: string;
  googleReviewUrl: string;
  phone: string;
  website: string;
}

export const LOCATIONS: Record<string, Location> = {
  galleria: {
    id: "galleria",
    name: "The Dog House Pet Salon - Galleria",
    address: "5917 Richmond Ave, Houston, TX 77057",
    googlePlaceId: "ChIJNWbI09DDQIYRxZJigeiMf5A",
    yelpBusinessId: "", // TBD - add when available
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJNWbI09DDQIYRxZJigeiMf5A",
    phone: "(832) 236-6122",
    website: "https://www.thedoghouseps.com",
  },
  memorialPark: {
    id: "memorial-park",
    name: "The Dog House Pet Salon - Memorial Park",
    address: "6434 Washington Ave, Houston, TX 77007",
    googlePlaceId: "ChIJe7kMPejHQIYR8ANum7UaLx8",
    yelpBusinessId: "", // TBD - add when available
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJe7kMPejHQIYR8ANum7UaLx8",
    phone: "(832) 236-6122",
    website: "https://www.thedoghouseps.com",
  },
  pearland: {
    id: "pearland",
    name: "The Dog House Pet Salon - Pearland",
    address: "2810 Business Center Dr #126, Pearland, TX 77584",
    googlePlaceId: "ChIJQ-nKpJuTQIYRqVwFi2Apg9U",
    yelpBusinessId: "", // TBD - add when available
    googleReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJQ-nKpJuTQIYRqVwFi2Apg9U",
    phone: "(832) 236-6122",
    website: "https://www.thedoghouseps.com",
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
