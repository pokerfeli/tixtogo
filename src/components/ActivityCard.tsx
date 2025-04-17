import React from 'react';
import { Star } from 'lucide-react';

type ActivityCardProps = {
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
};

export function ActivityCard({ 
  image, 
  category, 
  title, 
  rating, 
  reviews, 
  price 
}: ActivityCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-[5px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="relative aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium z-10">
          {category}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">from</span>
            <span className="text-xl font-bold text-gray-900 ml-2">
              ${price}
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}