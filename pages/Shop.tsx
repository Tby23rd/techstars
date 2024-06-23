import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Shop.module.css';

interface CafeItem {
  DrinkThumb: string;
  Drink: string;
  Price?: number;
  Ingredients: string;
}

const Shop: React.FC = () => {
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
    <div className={styles.shopContainer}>
      {cafeItems.map((item, index) => (
        <div key={index} className={styles.cafeItem}>
          <Image
            src={item.DrinkThumb}
            alt={item.Drink}
            width={200}
            height={200}
            className={styles.drinkImage}
          />
          <p className={styles.drinkName}>{item.Drink}
           :
            ${item.Price ? item.Price.toFixed(2) : 'N/A'}
          </p>
          <p className={styles.drinkIngredients}>
            Ingredients: {item.Ingredients}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Shop;
