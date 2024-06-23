import React from 'react';
import {
  LocalCafe as CafeIcon,
  Fastfood as CoffeeIcon,
  Cake as PastryIcon,
  Wifi as WifiIcon,
  MusicNote as MusicIcon,
  Class as ClassIcon,
} from '@mui/icons-material';

const Features: React.FC = () => {
  const featureData = [
    {
      title: 'Cozy Ambiance',
      description: 'Enjoy a warm and inviting atmosphere that makes our cafe the perfect place to relax and unwind.',
      icon: <CafeIcon className="text-4xl " />,
    },
    {
      title: 'Artisanal Coffee',
      description: 'Savor the rich flavors of our carefully crafted artisanal coffee, made with the finest beans.',
      icon: <CoffeeIcon className="text-4xl " />,
    },
    {
      title: 'Delectable Pastries',
      description: 'Indulge in a delightful selection of pastries and treats that perfectly complement your coffee.',
      icon: <PastryIcon className="text-4xl " />,
    },
    {
      title: 'Free Wi-Fi',
      description: 'Stay connected with our complimentary high-speed Wi-Fi while you enjoy your time at the cafe.',
      icon: <WifiIcon className="text-4xl " />,
    },
    {
      title: 'Live Music Events',
      description: 'Experience the joy of live music performances, adding a touch of melody to your cafe visits.',
      icon: <MusicIcon className="text-4xl " />,
    },
    {
      title: 'Classes',
      description: 'Join our classes and enhance your coffee knowledge with expert-led sessions on brewing and tasting.',
      icon: <ClassIcon className="text-4xl " />,
    },
  ];

  return (
    <div className="mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featureData.map((feature, index) => (
        <div key={index} className="bg-white text-blue-900  p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
