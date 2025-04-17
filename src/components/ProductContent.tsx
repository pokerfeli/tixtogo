import React from 'react';
import { Star, Check, X, MapPin, ChevronDown } from 'lucide-react';

const highlights = [
  {
    title: 'Skip-the-Line Access',
    description: 'Save time with priority entry to the observation deck',
  },
  {
    title: 'Flexible Entry',
    description: 'Visit any time during operating hours on your selected date',
  },
  {
    title: 'Multimedia Guide',
    description: 'Free audio tour available in 8 languages',
  },
];

const inclusions = {
  included: [
    'Main Deck (86th floor) access',
    'Multimedia audio guide',
    'Free Wi-Fi access',
    'Interactive exhibits',
  ],
  excluded: [
    'Top Deck (102nd floor) access',
    'Food and beverages',
    'Souvenir photos',
    'Hotel pickup/drop-off',
  ],
};

const faqs = [
  {
    question: 'What is the cancellation policy?',
    answer: 'Free cancellation up to 24 hours before the scheduled visit. No refunds for cancellations made less than 24 hours before the visit.',
  },
  {
    question: 'How long is the ticket valid?',
    answer: 'Tickets are valid only for the selected date and time slot. Please arrive 15 minutes before your scheduled time.',
  },
  {
    question: 'Are there any age restrictions?',
    answer: 'Children under 6 years old enter free with a paying adult. Children under 12 must be accompanied by an adult.',
  },
];

export function ProductContent() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="space-y-12">
      {/* Highlights Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inclusions Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          What's Included
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Included</h3>
            <ul className="space-y-3">
              {inclusions.included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Not Included</h3>
            <ul className="space-y-3">
              {inclusions.excluded.map((item, index) => (
                <li key={index} className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Meeting Point Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Meeting Point</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1555109307-f7d9da25c244"
              alt="Empire State Building Location Map"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Empire State Building</h3>
                <p className="text-gray-600">
                  20 W 34th St, New York, NY 10001, United States
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                Enter through the main entrance on 5th Avenue. Look for the
                "Express Pass" signs and show your mobile ticket at the security
                checkpoint.
              </p>
              <p>
                Nearest Subway: 34th St-Herald Square Station (B, D, F, M, N, Q,
                R, W lines)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}