import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';

type Attraction = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  keywords: string[];
};

const ATTRACTIONS: Attraction[] = [
  {
    id: 'broadway',
    name: 'Broadway Shows',
    category: 'Entertainment',
    price: 99,
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca',
    keywords: ['broadway', 'shows', 'theater', 'musical', 'play', 'performance'],
  },
  {
    id: 'statue-of-liberty',
    name: 'Statue of Liberty',
    category: 'Landmarks',
    price: 49,
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a',
    keywords: ['statue', 'liberty', 'monument', 'island', 'landmark'],
  },
  {
    id: 'empire-state',
    name: 'Empire State Building',
    category: 'Landmarks',
    price: 45,
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620',
    keywords: ['empire', 'state', 'building', 'observation', 'deck', 'view'],
  },
  {
    id: 'times-square',
    name: 'Times Square Walking Tour',
    category: 'Tours',
    price: 35,
    image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc',
    keywords: ['times', 'square', 'walking', 'tour', 'midtown'],
  },
  {
    id: 'central-park',
    name: 'Central Park Guided Tour',
    category: 'Tours',
    price: 29,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
    keywords: ['central', 'park', 'guided', 'tour', 'nature'],
  },
];

type Suggestion = {
  type: 'attraction' | 'recent';
  attraction?: Attraction;
  title: string;
};

interface SearchBarProps {
  onCategorySelect?: (categoryId: string) => void;
}

export function SearchBar({ onCategorySelect }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const saveRecentSearch = (term: string) => {
    const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleSearch = (term: string) => {
    setSearch(term);
    
    if (!term.trim()) {
      setSuggestions(
        recentSearches.map(s => ({ type: 'recent', title: s }))
      );
      return;
    }

    const searchTerms = term.toLowerCase().split(' ');
    const matchingAttractions = ATTRACTIONS.filter(attraction => 
      searchTerms.some(term =>
        attraction.name.toLowerCase().includes(term) ||
        attraction.keywords.some(keyword => keyword.includes(term))
      )
    );

    const suggestions: Suggestion[] = [
      ...matchingAttractions.map(attraction => ({
        type: 'attraction' as const,
        attraction,
        title: attraction.name,
      })),
      ...recentSearches
        .filter(s => s.toLowerCase().includes(term.toLowerCase()))
        .map(s => ({ type: 'recent' as const, title: s }))
    ];

    setSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (suggestion.attraction && onCategorySelect) {
      saveRecentSearch(suggestion.title);
      onCategorySelect(suggestion.attraction.id);
      setIsOpen(false);
      setSearch('');
    }
  };

  const [filters, setFilters] = useState({
    priceRange: 'all',
    category: 'all',
    rating: 'all'
  });

  const filterOptions = {
    priceRange: [
      { value: 'all', label: 'All Prices' },
      { value: 'under50', label: 'Under $50' },
      { value: '50to100', label: '$50 - $100' },
      { value: 'over100', label: 'Over $100' }
    ],
    category: [
      { value: 'all', label: 'All Categories' },
      { value: 'tours', label: 'Tours' },
      { value: 'museums', label: 'Museums' },
      { value: 'shows', label: 'Shows' }
    ],
    rating: [
      { value: 'all', label: 'All Ratings' },
      { value: '4plus', label: '4+ stars' },
      { value: '3plus', label: '3+ stars' }
    ]
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="relative w-full max-w-[720px] mx-auto">
      <div className="flex items-center bg-white rounded-lg shadow-lg">
        <div className="flex-1 flex items-center p-4">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search attractions, tours, or experiences"
            className="w-full outline-none text-gray-700"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <div className="border-l border-gray-200 p-4 flex items-center cursor-pointer hover:bg-gray-50 rounded-r-lg">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-gray-700">New York</span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-100">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors"
              >
                {suggestion.type === 'attraction' && suggestion.attraction && (
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={suggestion.attraction.image}
                        alt={suggestion.attraction.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-medium text-gray-900">
                        {suggestion.attraction.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {suggestion.attraction.category} • from ${suggestion.attraction.price}
                      </p>
                    </div>
                  </div>
                )}
                {suggestion.type === 'recent' && (
                  <div className="flex items-center space-x-3 w-full">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{suggestion.title}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-4 mt-4">
        {Object.entries(filterOptions).map(([filterType, options]) => (
          <select
            key={filterType}
            value={filters[filterType]}
            onChange={(e) => handleFilterChange(filterType, e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
}