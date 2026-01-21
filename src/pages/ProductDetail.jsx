import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart, FaShare, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Pro Runner X',
    price: 129.99,
    category: 'Running Shoes',
    rating: 4.5,
    reviews: 128,
    description: 'Experience ultimate comfort and performance with our premium running shoes. Designed for serious athletes.',
    features: [
      'Lightweight cushioning technology',
      'Breathable mesh upper',
      'Enhanced traction outsole',
      'Arch support system',
      'Shock absorption heels'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop'
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      size: selectedSize
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/shop" className="text-sport-primary hover:text-sport-secondary">
          ← Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-sport-primary rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Size</h3>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-medium transition ${
                    selectedSize === size
                      ? 'border-sport-primary bg-sport-primary text-white'
                      : 'border-gray-300 dark:border-gray-800 hover:border-sport-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Price */}
          // src/pages/ProductDetail.jsx (continued)
          {/* Quantity and Price */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-sport-primary">₹{product.price}</div>
                <p className="text-gray-500 text-sm">Free shipping on this item</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-sport-primary text-white py-4 rounded-lg font-semibold hover:bg-sport-secondary transition flex items-center justify-center space-x-3"
            >
              <FaShoppingCart />
              <span>Add to Cart - ₹{(product.price * quantity).toFixed(2)}</span>
            </button>
            <button className="px-6 py-4 border-2 border-sport-primary text-sport-primary rounded-lg font-semibold hover:bg-sport-primary hover:text-white transition flex items-center justify-center space-x-3">
              <FaHeart />
              <span>Add to Wishlist</span>
            </button>
            <button className="px-4 py-4 border border-gray-300 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:bg-gray-800 transition">
              <FaShare />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaTruck className="text-sport-primary text-xl" />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over ₹100</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaUndo className="text-sport-primary text-xl" />
              <div>
                <p className="font-semibold">30-Day Returns</p>
                <p className="text-sm text-gray-500">Easy return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <FaShieldAlt className="text-sport-primary text-xl" />
              <div>
                <p className="font-semibold">2-Year Warranty</p>
                <p className="text-sm text-gray-500">Quality guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;