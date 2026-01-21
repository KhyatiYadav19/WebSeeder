import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import History from './pages/History';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop />;
      case 'cart':
        return <Cart />;
      case 'history':
        return <History />;
      default:
        return <Home />;
    }
  };

  return (
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {renderPage()}
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">SportPro</h3>
                  <p className="text-gray-300">Your premier destination for sports equipment and gear.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    <button onClick={() => setCurrentPage('home')} className="block text-gray-300 hover:text-white">Home</button>
                    <button onClick={() => setCurrentPage('shop')} className="block text-gray-300 hover:text-white">Shop</button>
                    <button onClick={() => setCurrentPage('cart')} className="block text-gray-300 hover:text-white">Cart</button>
                    <button onClick={() => setCurrentPage('history')} className="block text-gray-300 hover:text-white">Order History</button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                  <p className="text-gray-300">Email: support@sportpro.com</p>
                  <p className="text-gray-300">Phone: (555) 123-4567</p>
                </div>
              </div>
              <div className="border-t border-gray-700 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2026 SportPro. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
  );
}

export default App;