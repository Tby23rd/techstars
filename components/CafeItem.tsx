// YourComponent.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CafeItem {
  DrinkThumb: string;
  Drink: string;
  Price: number;
  Ingredients: string;
}

const YourComponent: React.FC = () => {
  const [cafeItems, setCafeItems] = useState<CafeItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getCafeItems');
        if (response.ok) {
          const data: CafeItem[] = await response.json();
          setCafeItems(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your component using cafeItems */}
      {cafeItems.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Image src={item.DrinkThumb} alt={item.Drink} width={200} height={200} />
          <p>Drink: {item.Drink}</p>
          <p>Price: ${item.Price.toFixed(2)}</p>
          <p>Ingredients: {item.Ingredients}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
