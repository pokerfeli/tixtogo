import React from 'react';
import { Info, Check } from 'lucide-react';

interface AddOn {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  selected: boolean;
}

interface AddOnsProps {
  addOns: AddOn[];
  onToggleAddOn: (id: string) => void;
}

export function AddOns({ addOns, onToggleAddOn }: AddOnsProps) {
  const calculateSavings = (original: number, current: number) => {
    return ((original - current) / original * 100).toFixed(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-bold text-[#2D3142]">Save with Add-Ons</h2>
        <div className="text-right">
          <span className="text-sm text-gray-500 line-through">From $129</span>
          <div className="text-[#2ECC71] font-semibold">Save up to 25%</div>
        </div>
      </div>

      <div className="space-y-4">
        {addOns.map((addon) => (
          <div
            key={addon.id}
            className="group relative rounded-lg border border-gray-200 p-4 hover:bg-[#F8F9FA] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div
                  className={`w-6 h-6 rounded border ${
                    addon.selected
                      ? 'bg-[#058ED9] border-[#058ED9]'
                      : 'border-gray-300'
                  } flex items-center justify-center cursor-pointer transition-colors`}
                  onClick={() => onToggleAddOn(addon.id)}
                  role="checkbox"
                  aria-checked={addon.selected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onToggleAddOn(addon.id);
                    }
                  }}
                >
                  {addon.selected && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[16px] text-[#2D3142]">
                    {addon.title}
                  </h3>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    aria-label={`More information about ${addon.title}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[14px] text-gray-600 mt-1">{addon.description}</p>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="text-sm text-gray-500 line-through">
                  +${addon.originalPrice}
                </div>
                <div className="font-semibold text-[#2D3142]">
                  +${addon.price}
                </div>
                <div className="text-[#2ECC71] text-sm">
                  Save {calculateSavings(addon.originalPrice, addon.price)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}