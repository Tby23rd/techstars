import React, { useState, useEffect } from 'react';
import '@/app/globals.css';

interface CafeItem {
  itemType: string;
  itemName: string;
  type: string;
  sizes?: string[];
  prices: number | { [size: string]: number };
}

const OrderPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<CafeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CafeItem[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/CafeMenu.json');
        const data = await response.json();
        setMenuItems(data.menu || []);
      } catch (error) {
        console.error('Error fetching menu data:', error);
        setError('Error fetching menu data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const addToCart = (item: CafeItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="max-w-full mx-auto  py-10 px-5 bg-blue-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Cafe Menu</h1>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <ul className="list-disc pl-5">
            {cart.map((cartItem, index) => (
              <li key={index} className="mb-2">{cartItem.itemName}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-wrap justify-between">
          {menuItems.map((item, index) => (
            <div key={index} className="flex-0 flex-basis[calc(25%-20px)] mb-5 p-4 bg-blue-100 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-bold mb-2">{item.itemName}</h2>
              <p className="mb-2">Type: {item.type}</p>

              <p className="font-semibold mb-2">Prices:</p>
              {item.prices && (
                <ul className="list-none p-0 m-0">
                  {typeof item.prices === 'number' ? (
                    <li>{`$${item.prices.toFixed(2)}`}</li>
                  ) : (
                    Object.entries(item.prices).map(([size, price]) => (
                      <li key={size} className="mb-1">{`${size}: $${typeof price === 'number' ? price.toFixed(2) : 'N/A'}`}</li>
                    ))
                  )}
                </ul>
              )}

              <div className="mt-5">
                <button 
                  onClick={() => addToCart(item)} 
                  className="bg-blue-100  py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-blue-100 border-2 border-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
