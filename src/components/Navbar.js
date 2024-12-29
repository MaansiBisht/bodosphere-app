import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          BOD<span className="text-orange-500">SPHERE</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <a
            
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Home
          </a>
          <a
            
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Categories
          </a>
          <a
            
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Notification
          </a>
          <a
            
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            AI Music
          </a>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-500 hover:text-orange-500 transition"
            aria-label="Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14c4.418 0 8-1.79 8-4V7c0-2.21-3.582-4-8-4S4 4.79 4 7v3c0 2.21 3.582 4 8 4zm0 0c-4.418 0-8 1.79-8 4v3m8-7c4.418 0 8-1.79 8-4v3c0 2.21-3.582 4-8 4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
