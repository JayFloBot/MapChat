import React from 'react';
import { FilterCategory, FilterOption } from '../types';

interface CategoryFiltersProps {
  activeFilters: FilterCategory[];
  onFilterToggle: (filterId: FilterCategory) => void;
}

const filterOptions: FilterOption[] = [
  { id: 'fun', label: 'Fun', color: 'text-green-700', bgColor: 'bg-green-100 border-green-200' },
  { id: 'food', label: 'Food', color: 'text-orange-700', bgColor: 'bg-orange-100 border-orange-200' },
  { id: 'nightlife', label: 'Nightlife', color: 'text-purple-700', bgColor: 'bg-purple-100 border-purple-200' },
  { id: 'shopping', label: 'Shopping', color: 'text-pink-700', bgColor: 'bg-pink-100 border-pink-200' },
  { id: 'outdoor', label: 'Outdoor', color: 'text-teal-700', bgColor: 'bg-teal-100 border-teal-200' },
  { id: 'culture', label: 'Culture', color: 'text-indigo-700', bgColor: 'bg-indigo-100 border-indigo-200' },
  { id: 'adult', label: 'Adult Entertainment', color: 'text-red-700', bgColor: 'bg-red-100 border-red-200' },
];

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ activeFilters, onFilterToggle }) => {
  const handleAllToggle = () => {
    if (activeFilters.length === filterOptions.length) {
      // If all are selected, deselect all
      filterOptions.forEach(option => {
        if (activeFilters.includes(option.id)) {
          onFilterToggle(option.id);
        }
      });
    } else {
      // Select all that aren't already selected
      filterOptions.forEach(option => {
        if (!activeFilters.includes(option.id)) {
          onFilterToggle(option.id);
        }
      });
    }
  };

  const allSelected = activeFilters.length === filterOptions.length;

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {/* All Toggle */}
      <button
        onClick={handleAllToggle}
        className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors ${
          allSelected
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
        }`}
      >
        All
      </button>

      {/* Category Filters */}
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterToggle(option.id)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors ${
            activeFilters.includes(option.id)
              ? `${option.color} ${option.bgColor}`
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
