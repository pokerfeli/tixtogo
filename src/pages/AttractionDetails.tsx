import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ImageGallery } from '../components/ImageGallery';
import { BookingPanel } from '../components/BookingPanel';
import { ProductContent } from '../components/ProductContent';
import { RelatedProducts } from '../components/RelatedProducts';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductSummary } from '../components/ProductSummary';
import { ProductDetails } from '../components/ProductDetails';
import { Loader, MapPin, Clock } from 'lucide-react';
import type { Database } from '../types/database.types';

type Attraction = Database['public']['Tables']['attractions']['Row'];
type ProductDetail = Database['public']['Tables']['product_details']['Row'];

interface AttractionWithDetails extends Attraction {
  product_details?: ProductDetail | null;
}

export function AttractionDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState<AttractionWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttraction = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data: attractionData, error: attractionError } = await supabase
          .from('attractions')
          .select('*')
          .eq('id', id)
          .single();

        if (attractionError) throw attractionError;
        if (!attractionData) throw new Error('Attraction not found');

        // Fetch product details
        const { data: detailsData } = await supabase
          .from('product_details')
          .select('*')
          .eq('attraction_id', id)
          .single();

        setAttraction({ ...attractionData, product_details: detailsData });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch attraction');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchAttraction();
    }
  }, [id]);

  const handleAddToCart = () => {
    navigate('/cart');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Attraction not found'}
          </h1>
          <button
            onClick={() => navigate('/attractions')}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Attractions
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Attractions', path: '/attractions' },
    { name: attraction.name, path: `/attractions/${id}` },
  ];

  const fallbackImage = 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {attraction.name}
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{attraction.city}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Duration: 2-3 hours</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery 
              mainImage={attraction.img_url || fallbackImage}
              attractionName={attraction.name}
            />
            <ProductSummary />
            <ProductDetails 
              name={attraction.name}
              description={attraction.description}
              productDetails={attraction.product_details}
            />
            <ProductContent />
            <RelatedProducts />
          </div>
          <div className="lg:col-span-1">
            <BookingPanel 
              onAddToCart={handleAddToCart}
              attractionName={attraction.name}
              price={Number(attraction.price)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}