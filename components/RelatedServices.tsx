import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  url: string;
}

interface RelatedServicesProps {
  currentService: "grooming" | "boarding" | "daycare" | "bathing";
}

const serviceMap: Record<string, ServiceCard[]> = {
  grooming: [
    {
      title: "Pet Bathing",
      description: "Professional bathing and spa treatments for your dog",
      url: "/pet-bathing",
    },
    {
      title: "Dog Day Care",
      description: "Supervised daytime care and socialization",
      url: "/dog-day-care",
    },
    {
      title: "Houston Pet Boarding",
      description: "Safe overnight care while you're away",
      url: "/houston-pet-boarding",
    },
  ],
  boarding: [
    {
      title: "Dog Day Care",
      description: "Daytime care combined with boarding services",
      url: "/dog-day-care",
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming during your pet's stay",
      url: "/pet-grooming",
    },
    {
      title: "Pet Bathing",
      description: "Spa treatments and grooming services",
      url: "/pet-bathing",
    },
  ],
  daycare: [
    {
      title: "Houston Pet Boarding",
      description: "Overnight care to pair with daycare",
      url: "/houston-pet-boarding",
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming services",
      url: "/pet-grooming",
    },
    {
      title: "Pet Bathing",
      description: "Bathing and spa treatments",
      url: "/pet-bathing",
    },
  ],
  bathing: [
    {
      title: "Pet Grooming",
      description: "Complete makeover with full grooming service",
      url: "/pet-grooming",
    },
    {
      title: "Dog Day Care",
      description: "Combine care with supervised play",
      url: "/dog-day-care",
    },
    {
      title: "Houston Pet Boarding",
      description: "Boarding with grooming services",
      url: "/houston-pet-boarding",
    },
  ],
};

export default function RelatedServices({
  currentService,
}: RelatedServicesProps) {
  const relatedServices = serviceMap[currentService] || [];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Explore Related Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service, index) => (
          <Link
            key={index}
            href={service.url}
            className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-pink-500 p-6 hover:bg-pink-50"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="inline-flex items-center text-pink-600 font-medium text-sm">
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
    </section>
  );
}
