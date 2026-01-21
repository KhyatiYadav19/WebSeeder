import React from 'react';
import { FaCheckCircle, FaTruck, FaBoxOpen, FaStar, FaBox } from 'react-icons/fa';

const History = ({ setCurrentPage }) => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2026-01-15',
      status: 'delivered',
      total: 1557,
      items: [
        { name: 'Running Shoes', quantity: 1, price: 1199 },
        { name: 'Sports Socks', quantity: 2, price: 179 },
      ],
    },
    {
      id: 'ORD-002',
      date: '2025-01-10',
      status: 'shipped',
      total: 597,
      items: [
        { name: 'Tennis Balls', quantity: 3, price: 199 },
      ],
    },
    {
      id: 'ORD-003',
      date: '2026-01-05',
      status: 'processing',
      total: 1796,
      items: [
        { name: 'Basketball', quantity: 1, price: 799 },
        { name: 'Gym Bag', quantity: 1, price: 599 },
        { name: 'Water Bottle', quantity: 2, price: 199 },
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FaCheckCircle className="text-green-500" />;
      case 'shipped':
        return <FaTruck className="text-blue-500" />;
      case 'processing':
        return <FaBoxOpen className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Order History</h1>
      <p className="text-gray-600 mb-8">Track and manage your sports gear purchases</p>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            {/* Order Header */}
            <div className="p-6 border-b">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Order #{order.id}</h3>
                  <p className="text-gray-500">Placed on {order.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </div>
                  <div className="text-2xl">{getStatusIcon(order.status)}</div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6 border-b">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">{item.name}</h4>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">₹{item.price}</p>
                    <p className="text-sm text-gray-500">₹{(item.price * item.quantity).toFixed(2)} total</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Footer */}
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-gray-600">Order Total</p>
                  <p className="text-2xl font-bold text-sport-primary">₹{order.total.toFixed(2)}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-sport-primary text-sport-primary rounded-lg hover:bg-sport-primary hover:text-white transition">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                    <FaStar />
                    <span>Rate Order</span>
                  </button>
                  {order.status === 'delivered' && (
                    <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
                      Buy Again
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <FaBox className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">No order history</h2>
          <p className="text-gray-500 mb-6">Your completed orders will appear here</p>
          <button 
            onClick={() => setCurrentPage('shop')}
            className="bg-sport-primary text-white px-6 py-3 rounded-lg hover:bg-sport-secondary transition"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default History;