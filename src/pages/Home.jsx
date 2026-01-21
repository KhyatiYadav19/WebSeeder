import React, {useState, useEffect } from 'react';
import { FaArrowRight, FaTshirt, FaRunning, FaBasketballBall, FaTruck, FaUndo, FaShieldAlt, FaCity, FaDumbbell, FaBicycle, FaHandshake, FaHiking, FaHome, FaGulp, FaSkating, FaWeight, FaStar, FaFire, FaPercent, FaGlasses } from 'react-icons/fa';

const Home = ({ setCurrentPage }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const bannerImages = [
    '/images/banner3.png',
    '/images/banner3.jpeg',
    '/images/banner5.jpeg',
    '/images/banner4.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);


  const categories = [
    { name: 'Running Shoes', icon: <FaRunning />, count: 45, color: 'bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200' },
    { name: 'Sports Apparel', icon: <FaTshirt />, count: 32, color: 'bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200' },
    { name: 'Team Sports', icon: <FaHandshake />, count: 28, color: 'bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200' },
    { name: 'Home Gym', icon: <FaHome />, count: 50, color: 'bg-gradient-to-br from-purple-200 via-pink-200 to-red-200' },
    { name: 'Cycling Equipment', icon: <FaBicycle />, count: 44, color: 'bg-gradient-to-br from-teal-200 via-cyan-200 to-sky-200' },
    { name: 'Hiking Equipment', icon: <FaHiking />, count: 19, color: 'bg-gradient-to-br from-green-200 via-teal-200 to-cyan-200' },
    { name: 'Sports Nutrition', icon: <FaGulp />, count: 72, color: 'bg-gradient-to-br from-orange-200 via-amber-200 to-red-200' },
    { name: 'Kids Favorites', icon: <FaSkating />, count: 129, color: 'bg-gradient-to-br from-green-200 via-lime-200 to-yellow-200' },
    { name: 'Fitness Monitors', icon: <FaWeight />, count: 83, color: 'bg-gradient-to-br from-purple-200 via-violet-200 to-pink-200' },
    { name: 'Swimming Goggles', icon: <FaGlasses />, count: 35, color: 'bg-gradient-to-br from-lime-200 via-yellow-100 to-green-200' }
  ];

  const featuredProducts = [
    { 
      id: 1, 
      name: 'Pro Runner X', 
      price: 799, 
      originalPrice: 1999,
      category: 'Running', 
      image: '/images/prorunner.jpg',
      rating: 4.8,
      badge: 'BEST SELLER'
    },
    { 
      id: 2, 
      name: 'Baseball Gloves', 
      price: 349, 
      category: 'Fitness', 
      image: '/images/baseballgloves.jpg',
      rating: 4.5,
      badge: 'NEW'
    },
    { 
      id: 3, 
      name: 'Sports Bag', 
      price: 199, 
      originalPrice: 449,
      category: 'Accessories', 
      image: '/images/sportsbag.jpg',
      rating: 4.7,
      badge: 'SALE'
    },
    { 
      id: 4, 
      name: 'Premium Yoga Mat', 
      price: 499, 
      category: 'Fitness', 
      image: '/images/yogamat.jpg',
      rating: 4.6,
      badge: 'POPULAR'
    },
    {
      id: 5,
      name: 'Karate Uniform',
      price: 689,
      category: 'Apparel',
      image: '/images/karate.jpg',
      rating: 4.9,
      badge: 'BESTSELLER'
    },
    {
      id: 6,
      name: 'Spikester Volleyball',
      price: 759,
      originalPrice: 1199,
      category: 'Volleyball',
      image: '/images/volleyball.jpg',
      rating: 4.5,
      badge: 'SALE'
    },
    {
      id: 7,
      name: 'Sports Goggles',
      price: 279,
      originalPrice: 889,
      category: 'Accessories',
      image: '/images/goggles.jpg',
      rating: 4.2,
      badge: 'SALE'
    },
    {
      id: 8,
      name: '7 Gear Bicycle',
      price: 5899,
      originalPrice: 18999,
      category: 'Bicycle',
      image: '/images/bicycle.jpg',
      rating: 4.1,
      badge: 'NEW'
    },
    { 
      id: 9, 
      name: 'Skipping Rope', 
      price: 99, 
      originalPrice: 179,
      category: 'Fitness', 
      image: '/images/skippingrope.jpg',
      rating: 4.9,
      badge: 'BEST SELLER'
    },
    { 
      id: 10, 
      name: 'Dumbbell', 
      price: 189, 
      category: 'Fitness', 
      image: '/images/dumbbell.jpg',
      rating: 4.6,
      badge: 'NEW'
    },
    { 
      id: 11, 
      name: 'Sports Energy Bar', 
      price: 79, 
      originalPrice: 119,
      category: 'Health', 
      image: '/images/energybar.jpg',
      rating: 4.7,
      badge: 'SALE'
    },
    { 
      id: 12, 
      name: 'Shuttlecock (Pack of 10)', 
      price: 299, 
      category: 'Badminton', 
      image: '/images/shuttlecock.jpeg',
      rating: 4.5,
      badge: 'POPULAR'
    },
    {
      id: 13,
      name: 'Tennis Balls (Set of 3)',
      price: 359,
      originalPrice: 879,
      category: 'Tennis',
      image: '/images/tennisballs.jpeg',
      rating: 4.9,
      badge: 'SALE'
    },
    {
      id: 14,
      name: 'Camping Tent',
      price: 899,
      category: 'Camping',
      image: '/images/tent.jpeg',
      rating: 4.9,
      badge: 'POPULAR'
    },
    {
      id: 15,
      name: 'Fishing Rod',
      price: 399,
      originalPrice: 1289,
      category: 'Fishing',
      image: '/images/fishingrod.jpeg',
      rating: 4.2,
      badge: 'SALE'
    },
    {
      id: 16,
      name: 'Kites (15 pieces, multicolor)',
      price: 339,
      originalPrice: 429,
      category: 'Kites',
      image: '/images/kites.jpeg',
      rating: 4.1,
      badge: 'MAKARSANKRANTI SPECIAL'
    }
  ];

  const features = [
    { icon: <FaTruck className="text-3xl" />, title: 'Free Shipping', desc: 'On orders over ₹100', bgColor: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600"' },
    { icon: <FaUndo className="text-3xl" />, title: '30-Day Returns', desc: 'Easy return policy', bgColor: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-green-600 via-blue-600 to-yellow-600"' },
    { icon: <FaShieldAlt className="text-3xl" />, title: '2-Year Warranty', desc: 'Quality guaranteed', bgColor: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-teal-600 via-green-600 to-blue-600"' },
    { icon: <FaPercent className="text-3xl" />, title: 'Best Price', desc: 'Price match guarantee', bgColor: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-purple-600 via-violet-600 to-pink-600"' },
  ];

  const stats = [
    { value: '50K+', label: 'Happy Customers', icon: '😊'},
    { value: '1000+', label: 'Products', icon: '🏆' },
    { value: '24/7', label: 'Support', icon: '🛡️' },
    { value: '5-Star', label: 'Rating', icon: '⭐' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative sport-gradient rounded-3xl p-8 md:p-16 text-white mb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImages[currentBanner]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >   
      {/* Banner Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentBanner 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              } transition-colors`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white dark:bg-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white dark:bg-gray-900 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center px-4 py-2 bg-black/20 rounded-full text-sm font-medium mb-6 text-white">
            <FaFire className="mr-2" /> Limited Time Offers
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Game with <span className="text-yellow-300">Premium</span> Sports Gear
          </h1>
          {/* <span className=" bg-black/40 rounded-full" /> */}
          <p className="inline-flex items-center px-4 py-2 text-xl mb-10 opacity-95 max-w-2xl bg-black/40 rounded-2xl text-white">
            Discover top-quality equipment for every sport enthusiast. Where performance meets style, and passion meets precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setCurrentPage('shop')}
              className="inline-flex items-center justify-center bg-white dark:bg-gray-900 text-sport-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-95 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg"
            >
              Shop Now <FaArrowRight className="ml-3 text-xl" />
            </button>
            <button
              onClick={() => setCurrentPage('shop')}
              className="inline-flex items-center justify-center bg-white dark:bg-gray-900 text-sport-primary px-8 py-4 rounded-xl font-bold hover:bg-opacity-95 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg"
            >
              View Deals
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section - New */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-[linear-gradient(180deg,_orange_29%,_yellow_100%)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Why Choose SportPro?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Experience shopping like never before with our premium services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-sport-primary/20`}
            >
              <div className="text-sport-primary mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-900 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">Shop by Category</h2>
            <p className="text-gray-600">Find exactly what you need from our extensive collection</p>
          </div>
          <button 
            onClick={() => setCurrentPage('shop')}
            className="hidden md:inline-flex items-center text-sport-primary hover:text-sport-secondary font-bold text-lg"
          >
            View All Categories <FaArrowRight className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-transparent hover:border-white/30 group`}
              onClick={() => setCurrentPage('shop')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl text-gray-700 group-hover:text-sport-primary transition-colors">
                  {category.icon}
                </div>
                <span className="px-3 py-1 bg-white/50 rounded-full text-sm font-semibold text-gray-700">
                  {category.count}+
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-sport-primary transition-colors">
                {category.name}
              </h3>
              <div className="flex items-center text-sport-primary group-hover:text-sport-secondary font-medium mt-4">
                <span>Explore</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <button 
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center bg-sport-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-sport-secondary transition-all"
          >
            View All Categories <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Featured Products - Enhanced */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">Featured Products</h2>
            <p className="text-gray-600">Handpicked collection of our best-selling items</p>
          </div>
          <button 
            onClick={() => setCurrentPage('shop')}
            className="hidden md:inline-flex items-center text-sport-primary hover:text-sport-secondary font-bold text-lg"
          >
            View All Products <FaArrowRight className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              {/* Product Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.badge === 'BEST SELLER' ? 'bg-red-500' :
                    product.badge === 'NEW' ? 'bg-green-500' :
                    product.badge === 'SALE' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}>
                    {product.badge}
                  </div>
                )}
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="font-bold text-gray-800 dark:text-gray-100">{product.rating}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-2 group-hover:text-sport-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center mt-4">
                  <span className="text-2xl font-bold text-sport-primary">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-3 text-gray-400 line-through">₹{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="ml-3 px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded">
                      Save ₹{(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
                
                {/* Action Button */}
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="w-full mt-6 bg-sport-primary text-white py-3 rounded-xl font-bold hover:bg-sport-secondary transition-all transform hover:-translate-y-1 group-hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <button 
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center bg-sport-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-sport-secondary transition-all text-lg"
          >
            View All Products <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-sport-primary to-sport-secondary rounded-3xl p-10 text-center text-white mb-8">
        <h3 className="text-3xl font-bold mb-4">Ready to Upgrade Your Gear?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of athletes who trust SportPro for their sports equipment needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-white text-sport-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 dark:bg-gray-800 transition-all transform hover:scale-105"
          >
            Start Shopping
          </button>
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            View Special Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;