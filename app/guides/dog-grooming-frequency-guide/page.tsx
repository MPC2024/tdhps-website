import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should You Groom Your Dog? Complete Breed Guide 2026",
  description:
    "Dog grooming frequency guide by breed. Poodles need every 4-6 weeks. Labs every 8-12 weeks. Houston grooming expert recommendations.",
  openGraph: {
    title: "Dog Grooming Frequency Guide 2026 | Breed-Specific Recommendations",
    description:
      "Complete guide to dog grooming frequency by breed type. Includes Poodles, Doodles, Labs, and more. Updated May 2026.",
    url: "https://www.thedoghouseps.com/guides/dog-grooming-frequency-guide/",
  },
  alternates: {
    canonical: "https://www.thedoghouseps.com/guides/dog-grooming-frequency-guide/",
  },
};

const groomingFrequencySchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "datePublished": "2026-01-15",
  "dateModified": "2026-05-06",
  "author": {
    "@type": "Organization",
    "@name": "The Dog House Pet Services",
    "logo": "https://www.thedoghouseps.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Houston, TX",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77027"
    }
  },
  "mainEntity": [
    {
      "@type": "Question",
      "@name": "How often should I groom my dog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dog grooming frequency depends on coat type and breed. Curly-coated breeds like Poodles and Doodles need grooming every 4-6 weeks. Short-haired breeds like Labs need every 8-12 weeks. Double-coated breeds like Goldens need every 6-8 weeks. Houston's humidity may require more frequent grooming."
      }
    },
    {
      "@type": "Question",
      "@name": "Why do Poodles need more grooming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poodles have curly, continuously-growing hair that mats easily without regular grooming. Without brushing and professional grooming every 4-6 weeks, their coat becomes matted and uncomfortable. Matting can lead to skin infections and requires painful de-matting."
      }
    },
    {
      "@type": "Question",
      "@name": "Do Doodles need the same grooming as Poodles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Doodles inherit the Poodle parent's curly coat and require the same grooming frequency: every 4-6 weeks. Goldendoodles, Labradoodles, and Cockapoos all need regular professional grooming to prevent matting."
      }
    },
    {
      "@type": "Question",
      "@name": "How does Houston humidity affect grooming frequency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Houston's subtropical humidity (average 75% year-round) accelerates matting in curly-coated breeds. The combination of heat, humidity, and sweat binds hair fibers together. Most Houston groomers recommend adding 1-2 extra grooming sessions per year for Poodles and Doodles."
      }
    }
  ]
};

const groomingTableSchema = {
  "@context": "https://schema.org",
  "@type": "Table",
  "columns": ["Breed Type", "Grooming Frequency", "Primary Reason"],
  "rows": [
    ["Poodle, Doodle, Cockapoo", "Every 4-6 weeks", "Curly coat, heavy matting risk"],
    ["Goldendoodle, Labradoodle", "Every 4-6 weeks", "Inherited curly coat from Poodle"],
    ["Labrador, Golden Retriever", "Every 8-12 weeks", "Short/long double coat, minimal matting"],
    ["German Shepherd, Husky", "Every 8-12 weeks", "Double coat, regular shedding"],
    ["Schnauzer, Wire-coated", "Every 6-8 weeks", "Wire coat requires hand-stripping"]
  ]
};

export default function GroomingFrequencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groomingFrequencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groomingTableSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-12 max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">
              <strong>Updated May 2026</strong> — Latest dog grooming standards
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Often Should You Groom Your Dog? Complete Guide
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Dog grooming frequency depends entirely on breed and coat type. This guide covers every common breed.
            </p>
          </div>
        </section>

        {/* Quick Answer Table */}
        <section className="px-4 py-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Grooming Frequency by Breed Type</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Breed Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Grooming Frequency</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Why?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Poodle, Doodle, Cockapoo</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>Every 4-6 weeks</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Curly coat mats easily; high grooming need</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Goldendoodle, Labradoodle</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>Every 4-6 weeks</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Inherits Poodle's curly coat</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Labrador, Golden Retriever</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>Every 8-12 weeks</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Short/long double coat, low matting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">German Shepherd, Husky</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>Every 8-12 weeks</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Double coat, regular shedding cycle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Schnauzer, Wire-coated</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>Every 6-8 weeks</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Wire coat, hand-stripping required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="px-4 py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Grooming Frequency Matters</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curly-Coated Breeds: Every 4-6 Weeks</h3>
              <p className="text-gray-700 mb-3">
                Poodles, Doodles, and Cockapoos have continuously-growing hair with a natural curl. Without regular grooming:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Hair tangles and mats within 3-4 weeks</li>
                <li>Matting traps moisture and sweat, causing skin infections</li>
                <li>Severe matting requires painful de-matting (often 3-4 hour appointments)</li>
                <li>Regular grooming = comfortable, healthy coat + shorter appointments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Double-Coated Breeds: Every 8-12 Weeks</h3>
              <p className="text-gray-700 mb-3">
                Labs, Golden Retrievers, and German Shepherds have double coats (undercoat + outer coat) that shed seasonally. Professional grooming:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Removes loose undercoat (reduces home shedding 50%+)</li>
                <li>Maintains coat health and shine</li>
                <li>Allows groomer to check for skin issues</li>
                <li>Can extend to 12 weeks without matting risk</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Houston's Climate Impact</h3>
              <p className="text-gray-700 mb-3">
                Houston's subtropical humidity (average 75% year-round) accelerates matting:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Humidity + sweat:</strong> Binds hair fibers together faster</li>
                <li><strong>Heat + moisture:</strong> Creates ideal environment for skin bacteria</li>
                <li><strong>Recommendation for Houston:</strong> Add 1-2 extra grooming sessions per year for curly-coated breeds</li>
                <li><strong>Summer grooming:</strong> Consider 3-4 week intervals (vs. normal 4-6) during June-August</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 max-w-3xl mx-auto bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I extend grooming frequency?</h3>
              <p className="text-gray-700">
                Not safely. Extending grooming cycles (e.g., waiting 8 weeks for a Poodle) leads to matting. Matted coats require painful de-matting or shaving, and can hide skin infections. Regular 4-6 week grooming prevents these problems.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my dog gets matted?</h3>
              <p className="text-gray-700">
                If matting occurs, professional de-matting (3-4 hours) may be possible. However, severe matting requires shaving to the skin to prevent infection. Prevention (regular grooming) is always better than treatment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does grooming cost?</h3>
              <p className="text-gray-700">
                Professional grooming in Houston ranges from $50-150 per appointment depending on breed size and services. Regular grooming (4-6 week intervals) costs $200-600/year — far less than emergency de-matting or medical treatment for skin infections.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I groom my dog at home?</h3>
              <p className="text-gray-700">
                Home grooming (bathing + brushing) between professional appointments is recommended. Full professional grooming requires tools and skill that most owners don't have. Partner home grooming with professional grooming every 4-6 weeks for best results.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12 max-w-3xl mx-auto">
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Dog's Grooming Routine?</h2>
            <p className="text-lg mb-6">
              Schedule an appointment with The Dog House Pet Services today. Our Houston groomers specialize in all breeds.
            </p>
            <a
              href="https://www.thedoghouseps.com/appointment-request/"
              className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Book Your Grooming Appointment
            </a>
          </div>
        </section>

        {/* Footer with Publication Date */}
        <section className="px-4 py-8 max-w-3xl mx-auto border-t border-gray-300">
          <p className="text-sm text-gray-500">
            <strong>Published:</strong> January 15, 2026 | <strong>Updated:</strong> May 6, 2026
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Written by The Dog House Pet Services grooming experts. All recommendations based on breed standards and Houston climate conditions.
          </p>
        </section>
      </main>
    </>
  );
}
