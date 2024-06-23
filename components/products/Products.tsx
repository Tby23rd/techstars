"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  selling_price: number;
  description: string;
  imageUrl: string;
}

const productsData: Product[] = [
  {
    id: '1',
    name: 'Adidas Running Shoes',
    selling_price: 89.99,
    description: 'High-quality running shoes designed for comfort and performance.',
    imageUrl: '/images/f1.jpg'
  },
  {
    id: '2',
    name: 'Diamond Necklace',
    selling_price: 499.99,
    description: 'Exquisite diamond necklace perfect for special occasions.',
    imageUrl: '/images/j.jpg'
  },
  {
    id: '3',
    name: 'Modern Sofa',
    selling_price: 799.99,
    description: 'Comfortable modern sofa to enhance your living room.',
    imageUrl: '/images/s.jpg'
  },
  {
    id: '4',
    name: 'Antique Vase',
    selling_price: 129.99,
    description: 'Beautiful antique vase to add a touch of elegance to your home.',
    imageUrl: '/images/f2.jpg'
  },
  {
    id: '5',
    name: 'Custom Lamp',
    selling_price: 59.99,
    description: 'Handcrafted custom lamp to brighten up any room.',
    imageUrl: '/images/l.jpg'
  },
  {
    id: '6',
    name: 'Scented Candle',
    selling_price: 19.99,
    description: 'Delightful scented candle to create a relaxing atmosphere.',
    imageUrl: '/images/f4.jpg'
  }
];

const FeaturedProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="FeaturedProducts" className="shadow rounded-lg m-4 p-5">
      <h1 className="text-3xl text-blue-900 font-bold text-center mb-5">Featured Products</h1>
      <div className="rounded-lg p-5">
        <Slider {...settings}>
          {productsData.map((product) => (
            <div key={product.id} className="text-center">
              <Image src={product.imageUrl}
               alt={product.name} width={200} 
               height={200} className="mx-auto " />
              <h2 className="text-xl font-bold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-lg text-gray-600 mt-2">
                Price: ${product.selling_price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-4">
                {product.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
