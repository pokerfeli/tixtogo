import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryTabs } from '../components/CategoryTabs';
import { ActivityCard } from '../components/ActivityCard';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database.types';
import { MapPin, Loader } from 'lucide-react';

type Attraction = Database['public']['Tables']['attractions']['Row'];

type LocationType = {
  id: string;
  name: string;
  dbValue: string;
  count?: number;
};

const locations: LocationType[] = [
  { id: 'new-york', name: 'New York City (NYC)', dbValue: 'New York' },
  { id: 'boston', name: 'Boston', dbValue: 'Boston' },
  { id: 'philadelphia', name: 'Philadelphia', dbValue: 'Philadelphia' },
  { id: 'san-diego', name: 'San Diego', dbValue: 'San Diego' },
  { id: 'hershey', name: 'Hershey, PA', dbValue: 'Hershey' },
  { id: 'newport', name: 'Newport, RI', dbValue: 'Newport' }
];

// Updated category mappings to match the database values
const categoryMappings: Record<string, string> = {
  'theme-parks': 'themeParks',
  'legoland': 'legoland',
  'observation-decks': 'observationDecks',
  'museums': 'museums',
  'unique-experiences': 'uniqueExperiences'
};

export function AttractionsPage() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('new-york');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let query = supabase
          .from('attractions')
          .select('*')
          .order('price', { ascending: true });

        // Find the selected location's database value
        const selectedLocationObj = locations.find(loc => loc.id === selectedLocation);
        if (selectedLocationObj) {
          query = query.eq('city', selectedLocationObj.dbValue);
        }

        // Apply category filter if selected
        if (selectedCategory && categoryMappings[selectedCategory]) {
          query = query.eq('category', categoryMappings[selectedCategory]);
        }

        const { data, error: supabaseError } = await query;

        if (supabaseError) throw supabaseError;
        setAttractions(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch attractions');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttractions();
  }, [selectedLocation, selectedCategory]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleAttractionSelect = (attractionId: string) => {
    navigate(`/attractions/${attractionId}`);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  const getLocationName = (locationId: string) => {
    return locations.find(loc => loc.id === locationId)?.name || locationId;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header with Filters */}
      <div className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Explore Attractions
            </h1>

            {/* Location Selector */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Select Location
              </h2>
              <div className="flex flex-wrap gap-3">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedLocation === location.id
                        ? 'bg-blue-600 text-white shadow-md transform -translate-y-[1px]'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location.name}
                    {location.count !== undefined && (
                      <span className="ml-2 text-xs">({location.count})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filters */}
            <CategoryTabs onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Active Filters */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Showing attractions in:</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {getLocationName(selectedLocation)}
            </span>
            {selectedCategory && (
              <>
                <span className="text-sm text-gray-600">in category:</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {selectedCategory}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear category
                </button>
              </>
            )}
          </div>
        </div>

        {/* Attractions Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={() => setSelectedLocation(selectedLocation)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : attractions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No attractions found in {getLocationName(selectedLocation)}
              {selectedCategory && ` for ${selectedCategory}`}.
              {selectedCategory && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700 ml-2"
                >
                  Clear category filter
                </button>
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction) => (
              <button
                key={attraction.id}
                onClick={() => handleAttractionSelect(attraction.id)}
                className="text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              >
                <ActivityCard
                  image={attraction.img_url || 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625'}
                  category={attraction.category || 'Attraction'}
                  title={attraction.name}
                  rating={4.8}
                  reviews={1000}
                  price={Number(attraction.price)}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}