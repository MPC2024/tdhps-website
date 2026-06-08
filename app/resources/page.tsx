import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Pet Care Resources | Dog Grooming, Boarding & Daycare Guides | The Dog House Pet Salon",
  description:
    "Explore dog grooming, boarding, daycare, and pet care resources from The Dog House Pet Salon. Find services, locations, FAQs, and pet care guides across Houston, Galleria, Memorial Park, and Pearland.",
  openGraph: {
    title: "Pet Care Resources | The Dog House Pet Salon",
    description:
      "Comprehensive pet care resources including grooming, boarding, daycare, and pet care guides. Grooming at all locations, boarding and daycare at Galleria and Memorial Park.",
    url: "https://www.thedoghouseps.com/resources/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Pet Care Resources at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/resources/" },
};

export default function ResourcesPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pet Care Resources",
    description:
      "Comprehensive pet care resources including dog grooming, boarding, daycare, and pet care guides.",
    url: "https://www.thedoghouseps.com/resources/",
    publisher: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
      url: "https://www.thedoghouseps.com",
    },
  };

  const resourceSections = [
    {
      title: "Dog Grooming",
      description: "Professional grooming services and breed-specific care",
      links: [
        {
          title: "Pet Grooming",
          url: "/pet-grooming",
          description: "Full grooming services, breed-specific cuts, and bathing",
        },
        {
          title: "Pet Bathing",
          url: "/pet-bathing",
          description: "Professional bathing and spa treatments",
        },
        {
          title: "Galleria Grooming",
          url: "/galleria-dog-grooming",
          description: "Dog grooming at our Galleria location",
        },
        {
          title: "Memorial Park Grooming",
          url: "/memorial-park-dog-grooming",
          description: "Dog grooming at our Memorial Park location",
        },
        {
          title: "Pearland Grooming",
          url: "/pearland-dog-grooming",
          description: "Dog grooming at our Pearland location",
        },
      ],
    },
    {
      title: "Dog Boarding",
      description: "Safe and comfortable overnight pet care",
      links: [
        {
          title: "Houston Pet Boarding",
          url: "/houston-pet-boarding",
          description: "Overnight boarding with professional care",
        },
        {
          title: "Galleria Boarding",
          url: "/galleria-dog-boarding",
          description: "Pet boarding at our Galleria location",
        },
        {
          title: "Memorial Park Boarding",
          url: "/memorial-park-dog-boarding",
          description: "Pet boarding at our Memorial Park location",
        },
      ],
    },
    {
      title: "Dog Daycare",
      description: "Supervised daytime care and socialization",
      links: [
        {
          title: "Dog Day Care",
          url: "/dog-day-care",
          description: "Full-day care with supervised play and activities",
        },
        {
          title: "Galleria Daycare",
          url: "/galleria-dog-daycare",
          description: "Dog daycare at our Galleria location",
        },
        {
          title: "Memorial Park Daycare",
          url: "/memorial-park-dog-daycare",
          description: "Dog daycare at our Memorial Park location",
        },
      ],
    },
    {
      title: "Helpful Information",
      description: "FAQs, contact information, and location details",
      links: [
        {
          title: "Frequently Asked Questions",
          url: "/faq",
          description: "Answers to common pet care questions",
        },
        {
          title: "Contact Us",
          url: "/contact-us",
          description: "Get in touch with our team",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Resources", url: "https://www.thedoghouseps.com/resources" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pet Care Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Dog House Pet Salon provides professional dog grooming, boarding,
              daycare, and pet care services across Houston, Galleria, Memorial Park,
              and Pearland. Explore our services, location pages, FAQs, and pet care
              guides below.
            </p>
          </div>
        </div>

        {/* Resource Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {resourceSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              {/* Section Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.description}</p>
              </div>

              {/* Link Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500 p-6 hover:bg-pink-50"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                    <div className="mt-4 flex items-center text-pink-600 font-medium text-sm">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-pink-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Book?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your pet's appointment today. Our expert team is ready to
              provide exceptional care at Galleria, Memorial Park, and Pearland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment-request"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact-us"
                className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
