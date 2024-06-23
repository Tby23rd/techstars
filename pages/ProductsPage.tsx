import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import SearchBar from '@/components/products/SearchBar';
import FilterBar from '@/components/products/FilterBar';

interface Product {
  index: number;
  url: string;
  name: string;
  sku: string;
  selling_price: number;
  original_price: number;
  currency: string;
  availability: string;
  color: string;
  category: string;
  source: string;
  source_website: string;
  breadcrumbs: string;
  description: string;
  brand: string;
  images: string[];
  country: string;
  language: string;
  average_rating: number;
  reviews_count: number;
  crawled_at: string;
}

interface FilterCriteria {
  availability: string;
  category: string;
  color: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/adidas-usa');
        if (response.ok) {
          const data: Product[] = await response.json();
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (query === '') {
      setFilteredProducts(products);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleFilter = (filters: FilterCriteria) => {
    const filtered = products.filter((product) => {
      const matchesAvailability = filters.availability
        ? product.availability.toLowerCase() === filters.availability.toLowerCase()
        : true;
      const matchesCategory = filters.category
        ? product.category.toLowerCase() === filters.category.toLowerCase()
        : true;
      const matchesColor = filters.color
        ? product.color.toLowerCase() === filters.color.toLowerCase()
        : true;
      const matchesPrice = product.selling_price >= filters.minPrice && product.selling_price <= filters.maxPrice;
      const matchesRating = product.average_rating >= filters.rating;

      return matchesAvailability && matchesCategory && matchesColor && matchesPrice && matchesRating;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-5">
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2">
                Price: {product.selling_price} {product.currency}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Availability: {product.availability}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Color: {product.color}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Rating: {product.average_rating} ({product.reviews_count} reviews)
              </p>
              <p className="text-sm text-gray-600 mt-4">
                {product.description}
              </p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 rounded-full font-bold hover:underline mt-4 block"
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
