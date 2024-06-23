
import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import SearchBar from '@/components/shops/SearchBar';
import FilterBar from '@/components/shops/FilterBar';


interface Store {
  name: string;
  logo: string;
  description: string;
  location: string;
}

interface FilterCriteria {
  name: string;
  description: string;
  location: string;
}

const ShopPage: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch('/api/shop');
        if (response.ok) {
          const data: Store[] = await response.json();
          setStores(data);
          setFilteredStores(data);
        } else {
          console.error('Failed to fetch stores');
        }
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleSearch = (query: string) => {
    if (query === '') {
      setFilteredStores(stores);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = stores.filter((store) =>
        store.name.toLowerCase().includes(lowercasedQuery) ||
        store.description.toLowerCase().includes(lowercasedQuery) ||
        store.location.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredStores(filtered);
    }
  };

  const handleFilter = (filters: FilterCriteria) => {
    const filtered = stores.filter((store) => {
      const matchesName = filters.name ? store.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
      const matchesDescription = filters.description ? store.description.toLowerCase().includes(filters.description.toLowerCase()) : true;
      const matchesLocation = filters.location ? store.location.toLowerCase().includes(filters.location.toLowerCase()) : true;

      return matchesName && matchesDescription && matchesLocation;
    });

    setFilteredStores(filtered);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl text-blue-900 font-bold mb-5"> Stores</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {filteredStores.map((store, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
            <img
              src={store.logo}
              alt={store.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{store.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{store.description}</p>
            <p className="text-sm text-gray-600 mt-2 font-bold">{store.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

