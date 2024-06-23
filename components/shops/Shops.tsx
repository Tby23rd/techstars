import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';

interface Store {
  name: string;
  logo: string;
  description: string;
  location: string;
}

const storesData: Store[] = [
  {
    name: 'Fashion Hub',
    logo: '/images/f1.jpg',
    description: 'Your one-stop shop for trendy clothing and accessories.',
    location: 'Downtown Calgary'
  },
  {
    name: 'Gems and Jewels',
    logo: '/images/j.jpg',
    description: 'Exquisite jewelry and gems for every occasion.',
    location: 'Calgary Beltline'
  },
  {
    name: 'Home Comforts',
    logo: '/images/f2.jpg',
    description: 'Beautiful furnishings to make your house a home.',
    location: 'Kensington, Calgary'
  },
  {
    name: 'Antique Treasures',
    logo: '/images/fashion.jpg',
    description: 'A curated collection of antique home decor items.',
    location: 'Inglewood, Calgary'
  },
  {
    name: 'Shine Bright',
    logo: '/images/f4.jpg',
    description: 'Handcrafted lamps and lighting solutions.',
    location: 'Mission, Calgary'
  }
];


const AllStores: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl text-blue-900 font-bold mb-5">            🏪 
      Featured Stores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
        {storesData.map((store, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
            <Image
              src={store.logo}
              alt={store.name}
              width={200} 
               height={200} className="mx-auto " 
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

export default AllStores;
