import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa';

const Cart = ({ setCurrentPage }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some awesome sports gear to get started!</p>
        <button
          onClick={() => setCurrentPage('shop')}
          className="inline-block bg-sport-primary text-white px-6 py-3 rounded-lg hover:bg-sport-secondary transition"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-600">Product</th>
                    <th className="text-left p-4 font-semibold text-gray-600">Price</th>
                    <th className="text-left p-4 font-semibold text-gray-600">Quantity</th>
                    <th className="text-left p-4 font-semibold text-gray-600">Total</th>
                    <th className="text-left p-4 font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50 dark:bg-gray-800">
                      <td className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-sport-primary">₹{item.price}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className={`p-1 rounded ₹{
                              item.quantity <= 1
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-gray-800 dark:text-gray-100">
                        ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition"
                          title="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 font-medium flex items-center space-x-2"
              >
                <FaTrash />
                <span>Clear Cart</span>
              </button>
              <button
                onClick={() => setCurrentPage('shop')}
                className="text-sport-primary hover:text-sport-secondary font-medium"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {getTotalPrice() > 100 ? 'FREE' : '₹5.99'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">₹{(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-sport-primary">
                  ₹{(
                      getTotalPrice() + 
                      (getTotalPrice() > 100 ? 0 : 5.99) + 
                      getTotalPrice() * 0.08
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-sport-primary text-white py-3 rounded-lg font-semibold hover:bg-sport-secondary transition mb-4">
              Proceed to Checkout
            </button>
            
            <div className="text-sm text-gray-500 text-center">
              <p>Free shipping on orders over ₹100</p>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;