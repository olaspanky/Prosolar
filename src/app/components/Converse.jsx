import React from 'react';
import {
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Converse = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 mt-12 font-syne2">
        {/* Contact Us Icon */}
        <a
          href="/solar/contact"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <div className="lg:p-4 p-1 bg-blue-50 rounded-full animate-shake hover:animate-stagger">
            <PhoneIcon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xs mt-2">Contact Us</span>
        </a>

        {/* View Packages Icon */}
        <a
          href="/solar/shs"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <div className="lg:p-4 p-1 bg-blue-50 rounded-full animate-shake hover:animate-stagger">
            <ShoppingCartIcon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xs mt-2">View Packages</span>
        </a>
      </div>
    </div>
  );
};

export default Converse;

// Add custom animations to your Tailwind CSS configuration
// Add this to your `tailwind.config.js` file:
/*
module.exports = {
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        stagger: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        shake: 'shake 1.5s infinite',
        stagger: 'stagger 0.5s ease-in-out',
      },
    },
  },
};
*/