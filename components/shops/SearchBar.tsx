import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search shops..."
        className="p-2 border border-gray-300 rounded-md flex-grow"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
