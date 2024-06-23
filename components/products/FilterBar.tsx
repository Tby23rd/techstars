import React, { useState } from 'react';

interface FilterBarProps {
  onFilter: (filters: FilterCriteria) => void;
}

interface FilterCriteria {
  availability: string;
  category: string;
  color: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const [availability, setAvailability] = useState('InStock');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({
      availability,
      category,
      color,
      minPrice: parseFloat(minPrice) || 0,
      maxPrice: parseFloat(maxPrice) || Infinity,
      rating: parseFloat(rating) || 0,
    });
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
      
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Color"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      <button
        onClick={handleFilter}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
