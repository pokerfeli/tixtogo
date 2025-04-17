import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { CategoryNav } from '../components/CategoryNav';
import { ActivityCard } from '../components/ActivityCard';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database.types';
import { Loader } from 'lucide-react';

type Attraction = Database['public']['Tables']['attractions']['Row'];

export function HomePage() {
  const navigate = useNavigate();
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleSlide = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentSlide(current => current > 0 ? current - 1 : attractions.length - 1);
    } else {
      setCurrentSlide(current => current < attractions.length - 1 ? current + 1 : 0);
    }
  };

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Verificar la conexión con Supabase
        const { error: healthCheckError } = await supabase.from('attractions').select('count', { count: 'exact' });
        if (healthCheckError) {
          throw new Error('Error de conexión con la base de datos: ' + healthCheckError.message);
        }

        const { data, error } = await supabase
          .from('attractions')
          .select('*')
          .order('price', { ascending: true });

        if (error) {
          throw new Error('Error al obtener las atracciones: ' + error.message);
        }

        setAttractions(data || []);
      } catch (err) {
        console.error('Error en fetchAttractions:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar las atracciones');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    navigate(`/attractions?category=${categoryId}`);
  };

  const handleAttractionSelect = (attractionId: string) => {
    navigate(`/attractions/${attractionId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Discover New York's Best Experiences
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Book tours, attractions & activities at the best prices
            </p>
            <SearchBar onCategorySelect={handleCategorySelect} />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Explore New York
        </h2>
        <CategoryNav />
      </div>

      {/* Featured Attractions */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top NYC Attractions</h2>
          <div className="flex items-center gap-4">
            <button onClick={() => handleSlide('prev')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => handleSlide('next')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button onClick={() => navigate('/attractions')} className="text-blue-600 hover:text-blue-700 font-medium">Ver Todo</button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {attractions.map((attraction) => (
                <div key={attraction.id} className="flex-shrink-0">
                  <button onClick={() => handleAttractionSelect(attraction.id)} className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <ActivityCard
                      image={attraction.img_url || 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625'}
                      category={attraction.category || 'Attraction'}
                      title={attraction.name}
                      rating={4.8}
                      reviews={1000}
                      price={Number(attraction.price)}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <p className="text-gray-600">Verified Reviews</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofertas Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <div className="text-xl font-bold mb-2">¡15% de Descuento!</div>
            <p className="mb-4">En todas las reservas anticipadas</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">Reservar Ahora</button>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="text-xl font-bold mb-2">2x1 en Tours</div>
            <p className="mb-4">Válido para grupos de 4 o más</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50">Ver Tours</button>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
            <div className="text-xl font-bold mb-2">Paquete Familiar</div>
            <p className="mb-4">Ahorra hasta 25% en atracciones</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}