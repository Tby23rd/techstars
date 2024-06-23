import React, { useState } from 'react';

interface FilterBarProps {
  onFilter: (filters: FilterCriteria) => void;
}

interface FilterCriteria {
  name: string;
  description: string;
  location: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleFilter = () => {
    onFilter({
      name,
      description,
      location,
    });
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Shop Name"
        className="p-2 border border-gray-300 rounded-md mb-2 sm:mb-0"
      />
      
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
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
