import React from 'react';
import { ImageGallery } from '../components/ImageGallery';
import { BookingPanel } from '../components/BookingPanel';
import { ProductContent } from '../components/ProductContent';
import { RelatedProducts } from '../components/RelatedProducts';

interface ProductDetailsProps {
  onNavigate: (page: string) => void;
}

export function ProductDetails({ onNavigate }: ProductDetailsProps) {
  const attractionDetails = {
    name: 'Empire State Building Skip-the-Line Tickets',
    location: 'New York City, USA',
    duration: '2-3 hours',
    price: 45,
  };

  const handleAddToCart = () => {
    onNavigate('cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {attractionDetails.name}
          </h1>
          <div className="flex items-center text-gray-600">
            <span className="mr-2">{attractionDetails.location}</span>
            <span className="mx-2">•</span>
            <span>Duration: {attractionDetails.duration}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery />
            <ProductContent />
            <RelatedProducts />
          </div>
          <div className="lg:col-span-1">
            <BookingPanel 
              onAddToCart={handleAddToCart}
              attractionName={attractionDetails.name}
              price={attractionDetails.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}