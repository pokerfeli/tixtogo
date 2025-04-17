import React from 'react';
import { 
  Palmtree,
  Building2,
  Mountain,
  Sparkles,
  Blocks
} from 'lucide-react';

interface CategoryTabsProps {
  onCategorySelect?: (categoryId: string) => void;
  selectedCategory?: string | null;
}

const categories = [
  { 
    id: 'theme-parks', 
    name: 'Theme Parks', 
    icon: Palmtree,
    color: '#FF8A50'
  },
  { 
    id: 'legoland', 
    name: 'LEGOLAND', 
    icon: Blocks,
    color: '#4B92DB'
  },
  { 
    id: 'observation-decks', 
    name: 'Observation Decks', 
    icon: Mountain,
    color: '#6B7CFF'
  },
  { 
    id: 'museums', 
    name: 'Museums', 
    icon: Building2,
    color: '#26C6DA'
  },
  { 
    id: 'unique-experiences', 
    name: 'Unique Experiences', 
    icon: Sparkles,
    color: '#9575CD'
  }
];

export function CategoryTabs({ onCategorySelect, selectedCategory }: CategoryTabsProps) {
  return (
    <div className="attraction-container flex justify-center gap-[10px] max-w-[1200px] w-full mx-auto">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect?.(category.id)}
            className={`attraction-button relative flex flex-col items-center justify-center w-[170px] h-[170px] p-[25px] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-all duration-300 overflow-hidden ${
              isSelected 
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-white'
            }`}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-lg pointer-events-none group-hover:opacity-5" />
            
            {/* Content wrapper to ensure it stays above overlay */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="icon mb-5">
                <Icon 
                  style={{ color: category.color }} 
                  strokeWidth={2}
                  className="w-[40px] h-[40px]"
                />
              </div>
              <span className="button-text text-[15px] font-semibold leading-[1.4] text-center text-[#333]">
                {category.name}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}