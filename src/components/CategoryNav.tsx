import React from 'react';
import { 
  Landmark, 
  Map, 
  Building2, 
  Utensils, 
  Users, 
  Compass 
} from 'lucide-react';

const categories = [
  { icon: Landmark, label: 'Top Attractions' },
  { icon: Map, label: 'Day Tours' },
  { icon: Building2, label: 'Museums & Culture' },
  { icon: Utensils, label: 'Food Experiences' },
  { icon: Users, label: 'Family Activities' },
  { icon: Compass, label: 'Local Experiences' },
];

export function CategoryNav() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-8 min-w-max px-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <Icon className="w-8 h-8 text-gray-700" />
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {category.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}