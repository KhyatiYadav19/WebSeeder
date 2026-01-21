import React, { useContext } from 'react';
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      onClick={() => onClick && onClick(product)}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={handleAddToCart}
          className="absolute top-3 right-3 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-sport-primary hover:text-white transition-colors"
          title="Add to cart"
        >
          <FaShoppingCart />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-1">{product.name}</h3>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-2xl font-bold text-sport-primary mb-4">₹{product.price}</p>
        
        <div className="flex justify-between">
          <span className="flex items-center space-x-2 text-gray-600">
            <FaEye />
            <span>View Details</span>
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-sport-primary text-white px-4 py-2 rounded-lg hover:bg-sport-secondary transition-colors flex items-center space-x-2"
          >
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;