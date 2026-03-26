// ─── Shared data constants ───────────────────────────────────────────
// Single source of truth for locations, business info, reviews, and
// social links used across multiple pages.

export interface LocationData {
  name: string;
  slug: string;
  address: string;
  city: string;
  phone: string;
  phoneOption: string;
  email: string;
  bookingUrl: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  directionsLink: string;
  reviewLink: string;
  hours: { day: string; hours: string }[];
}

export const LOCATIONS: Record<string, LocationData> = {
  galleria: {
    name: "Galleria / Uptown Park",
    slug: "galleria",
    address: "5917 Richmond Ave",
    city: "Houston, TX 77057",
    phone: "(713) 820-6140",
    phoneOption: "Option 1",
    email: "galleria@thedoghouseps.com",
    bookingUrl: "/appointment-request-form_location_richmond",
    googleMapsUrl:
      "https://maps.google.com/?q=5917+Richmond+Ave,+Houston,+TX+77057",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%205917%20Richmond%20Ave%2C%20Houston%2C%20TX%2077057&t=m&z=10&output=embed&iwloc=near",
    directionsLink: "https://maps.app.goo.gl/EYeQErWWWpS5QLgC9",
    reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
    hours: [
      { day: "Monday - Friday", hours: "7 AM - 7 PM" },
      { day: "Saturday", hours: "8 AM - 6 PM" },
      { day: "Sunday", hours: "8-9 AM, 4-5 PM" },
    ],
  },
  memorial: {
    name: "Memorial Park",
    slug: "memorial",
    address: "6434 Washington Ave",
    city: "Houston, TX 77007",
    phone: "(713) 820-6140",
    phoneOption: "Option 2",
    email: "memorial@thedoghouseps.com",
    bookingUrl: "/appointment-request-memorial",
    googleMapsUrl:
      "https://maps.google.com/?q=6434+Washington+Avenue,+Houston,+TX+77007",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%206434%20Washington%20Avenue%2C%20Houston%2C%20TX%2077007&t=m&z=10&output=embed&iwloc=near",
    directionsLink: "https://maps.app.goo.gl/iUN5UXoGm82Vv93E8",
    reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
    hours: [
      { day: "Monday - Friday", hours: "7 AM - 7 PM" },
      { day: "Saturday", hours: "8 AM - 6 PM" },
      { day: "Sunday", hours: "8-9 AM, 4-5 PM" },
    ],
  },
  pearland: {
    name: "Pearland",
    slug: "pearland",
    address: "2810 Business Center Dr #126",
    city: "Pearland, TX 77584",
    phone: "(713) 820-6140",
    phoneOption: "Option 3",
    email: "pearland@thedoghouseps.com",
    bookingUrl: "/appointment-request-pearland",
    googleMapsUrl:
      "https://maps.google.com/?q=2810+Business+Center+Dr+%23126,+Pearland,+TX+77584",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%202810%20Business%20Center%20Dr%20%23126%2C%20Pearland%2C%20TX%2077584%2C%20United%20States&t=m&z=10&output=embed&iwloc=near",
    directionsLink:
      "https://www.google.com/maps/place/The+Dog+House+Pet+Salon/@29.556829,-95.392411,16z/data=!4m6!3m5!1s0x8640939ba4cae943:0xd58329608b055ca9!8m2!3d29.5568289!4d-95.3924111!16s%2Fg%2F11rqgkd7x6?hl=en&entry=ttu",
    reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
    hours: [
      { day: "Monday - Friday", hours: "7 AM - 7 PM" },
      { day: "Saturday", hours: "8 AM - 6 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
};

export const BUSINESS = {
  name: "The Dog House Pet Salon",
  phone: "(713) 820-6140",
  phoneRaw: "7138206140",
  website: "https://www.thedoghouseps.com",
  social: {
    facebook: "https://www.facebook.com/thedoghousepetsalon",
    twitter: "https://twitter.com/TheDogHousePS",
    instagram: "https://www.instagram.com/thedoghouseps/",
  },
};

export interface Review {
  author: string;
  text: string;
  stars: number;
}

export const REVIEWS: Review[] = [
  {
    author: "Kevin Garnepudi",
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
    stars: 5,
  },
  {
    author: "William Gillespie",
    text: "Alamo absolutely loves it here , they take awesome care of him while I am traveling for work . They are so good with all the pets , so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them .",
    stars: 5,
  },
  {
    author: "Ross Monsen",
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
    stars: 5,
  },
  {
    author: "Tiffany Tegeler",
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
    stars: 5,
  },
];

/** Star-rating image used on review cards */
export const STAR_IMAGE_URL =
  "https://www.thedoghouseps.com/wp-content/uploads/2025/04/rating_922004.png";
