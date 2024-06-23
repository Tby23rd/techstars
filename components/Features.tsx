import React from 'react';
import {
  Store as StoreIcon,
  ShoppingBasket as ShoppingBasketIcon,
  LocalOffer as LocalOfferIcon,
  VerifiedUser as VerifiedUserIcon,
  LocalShipping as LocalShippingIcon,
  ThumbUp as ThumbUpIcon,
  Place as LocalIcon,
} from '@mui/icons-material';

const Features: React.FC = () => {
  const featureData = [
    {
      title: 'Diverse Stores',
      description: 'Explore a variety of vintage and thrift stores, all in one convenient virtual mall.',
      icon: <StoreIcon className="text-4xl" />,
    },
    {
      title: 'Easy Shopping',
      description: 'Shop easily with our user-friendly interface that brings you closer to unique finds.',
      icon: <ShoppingBasketIcon className="text-4xl" />,
    },
    {
      title: 'Exclusive Offers',
      description: 'Take advantage of special deals and discounts available only in our virtual mall.',
      icon: <LocalOfferIcon className="text-4xl" />,
    },
    {
      title: 'Convenient Shipping',
      description: 'Enjoy hassle-free shipping options tailored to meet your needs.',
      icon: <LocalShippingIcon className="text-4xl" />,
    },
    {
      title: 'Community Support',
      description: 'Support small businesses and join a community that values sustainability and uniqueness.',
      icon: <ThumbUpIcon className="text-4xl" />,
    },
    {
      title: 'Local Shops',
      description: 'Discover and support local vintage and thrift shops in your area.',
      icon: <LocalIcon className="text-4xl" />,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-900 text-center">Features</h1>
      <div className="mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featureData.map((feature, index) => (
        <div key={index} className="bg-white text-blue-900 p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
