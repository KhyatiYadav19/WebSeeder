import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const Shop = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Running Shoes Pro', price: 1799, category: 'footwear', image: '/images/sportsshoes.jpg' },
    { id: 2, name: 'Basketball Jersey', price: 899, category: 'apparel', image: '/images/basketballjersey.jpeg' },
    { id: 3, name: 'Yoga Mat', price: 199, category: 'fitness', image: '/images/premiumyogamat.jpg' },
    { id: 4, name: 'Tennis Racket', price: 1289, category: 'tennis', image: '/images/tennisracket.jpg' },
    { id: 5, name: 'Sports Watch', price: 719, category: 'accessories', image: '/images/sportswatch.jpg' },
    { id: 6, name: 'Gym Gloves', price: 399, category: 'fitness', image: '/images/gymgloves.jpeg' },
    { id: 7, name: 'Golf Set', price: 2489, category: 'golf', image: '/images/golfset.jpg' },
    { id: 8, name: 'Cricket Kit', price: 1999, category: 'cricket', image: '/images/cricket.jpg' },
    { id: 9, name: 'Football', price: 1099, category: 'football', image: '/images/football.jpg' },
    { id: 10, name: 'Rugby Ball', price: 899, category: 'rugby', image: '/images/rugby.jpg' },
    { id: 11, name: 'Hockey Kit', price: 1849, category: 'hockey', image: '/images/hockey.jpeg' },
    { id: 12, name: 'Thermosteel Water Bottle', price: 799, category: 'fitness', image: '/images/thermosteelbottle.jpg' },
    { id: 13, name: 'Table Tennis Set', price: 17899, category: 'table tennis', image: '/images/tabletennisset.jpg' },
    { id: 14, name: 'Squash Racket', price: 10399, category: 'squash', image: '/images/squashracket.jpg' },
    { id: 15, name: 'Carrom Board', price: 1539, category: 'carrom', image: '/images/carrom.jpeg' },
    { id: 16, name: 'Microfiber Towel', price: 499, category: 'towel', image: '/images/towel.jpg' },
    { id: 17, name: 'Cycling Helmet', price: 1199, category: 'accessories', image: '/images/helmet.jpg' },
    { id: 18, name: 'Saddle Cover', price: 999, category: 'cycling', image: '/images/saddle.jpg' },
    { id: 19, name: 'Cycle Mudguard', price: 549, category: 'accessories', image: '/images/mudguard.jpeg' },
    { id: 20, name: 'Pool Ring', price: 599, category: 'swimming', image: '/images/poolring.jpg' },
    { id: 21, name: 'Kids Mini Trampoline', price: 2999, category: 'kids', image: '/images/trampoline.jpeg' },
    { id: 22, name: 'Hula Hoop', price: 399, category: 'kids', image: '/images/hula hoop.jpg' },
    { id: 23, name: 'Basketball Ring', price: 749, category: 'basketball', image: '/images/basketballring.jpg' },
    { id: 24, name: 'Track Suit', price: 1799, category: 'apparel', image: '/images/tracksuit.jpeg' }
  ];

  const categories = ['all', 'footwear', 'apparel', 'fitness', 'tennis', 'accessories', 'golf', 'cricket', 'football', 'rugby', 'hockey', 'table tennis', 'squash', 'towel', 'cycling', 'swimming', 'kids', 'basketball'];

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  // Product Detail Modal
  const ProductDetailModal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{product.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 uppercase">{product.category}</span>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                    <span className="ml-2 font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-sport-primary mb-4">₹{product.price}</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-medium w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-sport-primary text-white px-6 py-2 rounded-lg hover:bg-sport-secondary">
                      Add to Cart (₹{(product.price * quantity).toFixed(2)})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Shop Sports Equipment</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-600" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sport-primary"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
            <span>Price {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found for this category.</p>
        </div>
      )}

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Shop;