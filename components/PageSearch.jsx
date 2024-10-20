import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const searchItems = [
    { title: "Home", path: "/" },
    { title: "Health Management", path: "/health-overview/health-management" },
    { title: "Lab Results", path: "/health-overview/labresultsandtesting" },
    { title: "Care Coordination", path: "/health-overview/care-coordination" },
    { title: "Family and Insurance", path: "/health-overview/familyandinsurance" },
    { title: "Events Calendar", path: "/events" },
    { title: "Analytics Dashboard", path: "/analytics" },
    { title: "All Documents", path: "/document-management" },
    { title: "Translate Text", path: "/document-management/translate-text" },
    { title: "Settings", path: "/settings" },
  ];

const PageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = () => {
    const results = searchItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    if (value) {
      const results = searchItems.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectResult = (path) => {
    router.push(path);
    setSearchResults([]);  // Clear results after navigation
    setSearchTerm('');  // Clear search input after navigation
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search ..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full px-2 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <FaSearch 
        onClick={handleSearch}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 md:right-3 cursor-pointer" 
      />

      {searchResults.length > 0 && (
        <div className="absolute bg-white shadow-lg rounded-lg p-4 w-full max-w-lg mx-auto mt-2 z-10">
          <ul>
            {searchResults.map((result, index) => (
              <li 
                key={index} 
                onClick={() => handleSelectResult(result.path)} 
                className="py-2 px-4 cursor-pointer hover:bg-blue-100 rounded-lg"
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageSearch;