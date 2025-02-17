import React from 'react';
import {
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Converse = () => {
  return (
    <div className="flex justify-center gap-4 mt-12">
      {/* Contact Us Button */}
      <a
        href="/solar/contact"
        className="flex items-center px-4 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <PhoneIcon className="w-5 h-5 mr-1" />
        <span className="text-xs font-medium">Contact Us</span>
      </a>

      {/* View Packages Button */}
      <a
        href="/solar/shs"
        className="flex items-center px-4 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <ShoppingCartIcon className="w-5 h-5 mr-1" />
        <span className="text-xs font-medium">View Packages</span>
      </a>
    </div>
  );
};

export default Converse;
