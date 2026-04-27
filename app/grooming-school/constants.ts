// Training: Single Responsibility — Data Constants Separation
// WHY: Extracting static data into a separate file reduces cognitive load in
// the UI component. The component can now focus on rendering and interaction.
// This makes both files easier to test, maintain, and understand independently.
// Source: Uncle Bob (SOLID principles)

import type { BlogPost } from "@/components/BlogCarousel";

export const GROOMERS = [
  {
    name: "Keylin Paulina Orellana Delcid",
    roleKey: "school_master_groomer" as const,
    location: "Galleria / Uptown Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
    href: "/keylin-paulina-orellana-delcid",
  },
  {
    name: "Margarita Batres",
    roleKey: "school_master_groomer" as const,
    location: "Pearland",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg",
    href: "/margarita-batres",
  },
  {
    name: "Francy Quevedo",
    roleKey: "school_master_groomer" as const,
    location: "Memorial Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg",
    href: "/francy-quevedo",
  },
];

export const SCHOOL_LOCATIONS = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
    isLarge: true,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
    isLarge: false,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
    isLarge: false,
  },
];

export const PROGRAM_ICONS = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shampoo.svg", labelKey: "school_bathing_techniques" as const },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-brush.svg", labelKey: "school_brushing_deshed" as const },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/cut.svg", labelKey: "school_breed_cuts" as const },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/scissors.svg", labelKey: "school_scissoring_skills" as const },
];

export const HOW_REFERRAL_OPTIONS = [
  { key: "school_existing_customer" as const },
  { key: "school_google_internet_search" as const },
  { key: "school_social_media" as const },
  { key: "school_referral_friend" as const },
  { key: "school_drive_by" as const },
  { key: "school_website" as const },
  { key: "school_other" as const },
];

export const GROOMING_BLOG_POSTS: BlogPost[] = [
  { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
  { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
  { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
  { title: "Best Dog Grooming Tools Every Houston Pet Owner Should Have", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/cute-jack-russell-terrier-puppy-studio.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Choose the Right Groomer for Your Dog's Breed", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Puppy's First Grooming Appointment: What to Expect", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Cat Grooming 101: Tips from Houston's Top Stylists", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Signs Your Dog Needs a Professional Grooming Session", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Grooming Anxiety in Dogs: How to Make It Stress-Free", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Why Regular Nail Trims Matter for Your Dog's Health", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/small-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "The Difference Between a Bath & Full Groom Explained", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Seasonal Grooming Tips for Houston Pet Owners", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dark-brown-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
];
