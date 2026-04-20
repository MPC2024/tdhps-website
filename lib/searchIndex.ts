export interface SearchResult {
  id: string;
  title: string;
  type: "page" | "blog";
  href: string;
  excerpt?: string;
}

const pages: SearchResult[] = [
  { id: "home", title: "Home", type: "page", href: "/" },
  { id: "pet-grooming", title: "Pet Grooming", type: "page", href: "/pet-grooming" },
  { id: "pet-bathing", title: "Pet Bathing", type: "page", href: "/pet-bathing/" },
  { id: "houston-pet-boarding", title: "Houston Pet Boarding", type: "page", href: "/houston-pet-boarding" },
  { id: "dog-daycare", title: "Houston Pet Dog Daycare", type: "page", href: "/dog-day-care" },
  { id: "grooming-school", title: "Grooming School", type: "page", href: "/grooming-school/" },
  { id: "our-staff", title: "Our Staff", type: "page", href: "/our-staff" },
  { id: "galleria-location", title: "Galleria/Uptown Park Location", type: "page", href: "/galleria-uptown-park-location" },
  { id: "memorial-location", title: "Memorial Park Location", type: "page", href: "/memorial-park-location" },
  { id: "pearland-location", title: "Pearland Location", type: "page", href: "/pearland-location" },
  { id: "blog", title: "Blog", type: "page", href: "/blog" },
  { id: "contact", title: "Contact Us", type: "page", href: "/contact-us" },
  { id: "faq", title: "FAQ", type: "page", href: "/faq" },
];

export function searchResults(query: string, results: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  return results.filter((result) => {
    const titleMatch = result.title.toLowerCase().includes(normalizedQuery);
    const excerptMatch = result.excerpt?.toLowerCase().includes(normalizedQuery) || false;
    return titleMatch || excerptMatch;
  });
}

export function getStaticSearchIndex(): SearchResult[] {
  return pages;
}
