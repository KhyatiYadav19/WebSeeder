import React, { useState, useContext } from 'react';
import { FaShoppingCart, FaStore, FaHistory, FaUser, FaSearch, FaHome, FaChevronDown, FaBell, FaTag, FaFire } from 'react-icons/fa';
import CartIcon from './CartIcon';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home', icon: <FaHome /> },
    { id: 'shop', name: 'Shop', icon: <FaStore /> },
    { id: 'cart', name: 'Cart', icon: <FaShoppingCart /> },
    { id: 'history', name: 'Orders', icon: <FaHistory /> },
  ];

  const categories = [
    { id: 'footwear', name: 'Footwear', count: 45 },
    { id: 'apparel', name: 'Apparel', count: 32 },
    { id: 'fitness', name: 'Fitness', count: 28 },
    { id: 'tennis', name: 'Tennis', count: 18 },
    { id: 'cycling', name: 'Cycling', count: 22 },
    { id: 'swimming', name: 'Swimming', count: 15 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage('shop');
      // In a real app, you would pass search query to shop page
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar with Offers */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-2 text-sm">
            <FaFire className="mr-2 animate-pulse" />
            <span className="font-semibold">FLASH SALE: </span>
            <span className="ml-2">Up to 50% off on selected items!</span>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="ml-4 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-bold transition-colors"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-sport-primary to-sport-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <span className="text-white font-bold text-2xl">SP</span>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <span className="text-3xl font-black bg-gradient-to-r from-sport-primary to-sport-secondary bg-clip-text text-transparent">
                SportPro
              </span>
              <p className="text-xs text-gray-500 font-medium">Elevate Your Game</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-sport-primary to-sport-secondary text-white shadow-lg'
                    : 'text-gray-700 hover:text-sport-primary hover:bg-gray-50 dark:bg-gray-800'
                }`}
              >
                <span className={`text-lg ${currentPage === item.id ? 'animate-bounce' : ''}`}>
                  {item.icon}
                </span>
                <span className="font-semibold">{item.name}</span>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 rounded-full ${
                  currentPage === item.id ? 'bg-yellow-400' : 'group-hover:bg-sport-primary'
                } transition-all`}></div>
              </button>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setShowCategories(!showCategories)}
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl text-gray-700 hover:text-sport-primary hover:bg-gray-50 dark:bg-gray-800 transition-all group"
              >
                <span>Categories</span>
                <FaChevronDown className={`transform transition-transform ${showCategories ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {showCategories && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-fadeIn"
                  onMouseEnter={() => setShowCategories(true)}
                  onMouseLeave={() => setShowCategories(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">Shop by Category</h3>
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setCurrentPage('shop');
                        setShowCategories(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 dark:bg-gray-800 text-gray-700 hover:text-sport-primary transition-colors"
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                  <div className="px-4 py-3 border-t border-gray-100">
                    <button 
                      onClick={() => setCurrentPage('shop')}
                      className="w-full text-center text-sport-primary font-semibold hover:text-sport-secondary"
                    >
                      View All Categories →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for gear, brands, sports..."
                    className="pl-12 pr-6 py-3 w-64 rounded-xl border-2 border-gray-200 focus:border-sport-primary focus:ring-2 focus:ring-sport-primary/20 focus:outline-none transition-all bg-gray-50 hover:bg-white dark:bg-gray-900"
                  />
                  <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                  
                </div>
              </form>
              {/* <ThemeToggle /> */}
            </div>

            {/* Search Icon - Mobile */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <FaSearch className="text-xl text-gray-600" />
            </button>

            {/* Notifications */}
            <button className="relative p-3 rounded-xl hover:bg-gray-100 dark:bg-gray-800 transition-colors group">
              <FaBell className="text-xl text-gray-600 group-hover:text-sport-primary" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Cart */}
            <CartIcon setCurrentPage={setCurrentPage} />

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-800 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sport-primary to-sport-secondary flex items-center justify-center">
                  <FaUser className="text-white text-lg" />
                </div>
                <span className="hidden lg:inline font-semibold text-gray-700">Account</span>
                <FaChevronDown className="hidden lg:inline text-gray-500" />
              </button>
              
              {/* User Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Welcome Back!</p>
                  <p className="text-sm text-gray-500">Athlete</p>
                </div>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:bg-gray-800 text-gray-700">
                  My Profile
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:bg-gray-800 text-gray-700">
                  Wishlist
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:bg-gray-800 text-gray-700">
                  Settings
                </button>
                <div className="px-4 py-3 border-t border-gray-100">
                  <button className="w-full text-red-500 hover:text-red-700 font-semibold">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden py-3 animate-slideDown">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-10 py-3 rounded-xl border-2 border-sport-primary focus:outline-none focus:ring-2 focus:ring-sport-primary/20"
                autoFocus
              />
              <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
              <button 
                type="button"
                onClick={() => setShowSearch(false)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around items-center py-3 border-t border-gray-100 bg-white dark:bg-gray-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all relative ${
                currentPage === item.id
                  ? 'text-sport-primary'
                  : 'text-gray-600'
              }`}
            >
              <span className={`text-2xl ${currentPage === item.id ? 'animate-bounce' : ''}`}>
                {item.icon}
              </span>
              <span className="text-xs font-semibold mt-1">{item.name}</span>
              {currentPage === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-sport-primary rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;