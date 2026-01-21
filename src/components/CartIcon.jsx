import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartIcon = ({ setCurrentPage }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <button 
      onClick={() => setCurrentPage('cart')}
      className="relative p-2 hover:bg-gray-100 dark:bg-gray-800 rounded-lg"
    >
      <FaShoppingCart className="text-xl text-gray-600 hover:text-sport-primary transition" />
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {cartItemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;