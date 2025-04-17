import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ShoppingCart, User } from 'lucide-react';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Attraction Tickets', path: '/attractions' },
  { name: 'Tours', path: '/tours' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Wholesale', path: '/wholesale' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo and Navigation Container */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center mr-8"
              aria-label="Go to homepage"
            >
              <img src="/Assets/images/logo.png" alt="Tixtogo Logo" className="h-20" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              aria-label="Favorites"
            >
              <Heart className="w-6 h-6" />
            </button>
            <Link 
              to="/cart"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link 
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors ml-2"
              aria-label="Sign in"
            >
              <User className="w-6 h-6" />
              <span className="text-base font-medium">Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-colors hover:bg-gray-50 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-200 my-2" />
              <div className="flex items-center justify-around py-2">
                <button 
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  aria-label="Favorites"
                >
                  <Heart className="w-6 h-6" />
                </button>
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="w-6 h-6" />
                </Link>
                <Link 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  aria-label="Sign in"
                >
                  <User className="w-6 h-6" />
                  <span className="text-base font-medium">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}