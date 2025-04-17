import React from 'react';

const relatedProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb',
    title: 'Empire State + Top of the Rock Combo',
    description: 'Experience NYC from two iconic observation decks',
    price: 89,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244',
    title: 'NYC Explorer Pass: 3 Attractions',
    description: 'Choose any 3 from over 80 attractions',
    price: 129,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a',
    title: 'Empire State + Statue of Liberty Tour',
    description: 'Visit two of NYC\'s most iconic landmarks',
    price: 99,
  },
];

export function RelatedProducts() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Booked Together
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">from</span>
                  <span className="text-xl font-bold text-gray-900 ml-2">
                    ${product.price}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Bundle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}