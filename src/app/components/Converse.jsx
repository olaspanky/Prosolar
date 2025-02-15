import React, { useState, useEffect } from 'react';
import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Converse = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headHeight = document.querySelector('header')?.offsetHeight || 0;
      const additionalOffset = 50; // Adjust this value as needed

      // Show the component when the user scrolls past the Head component on larger screens
      if (window.innerWidth > 768 && window.scrollY > headHeight + additionalOffset) {
        setIsVisible(true);
      } else if (window.innerWidth <= 768) {
        // Always show on mobile devices
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Contact Us Icon */}
      <a
        href="/solar/contact"
        className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
      >
        <div className="p-2 bg-blue-50 rounded-full animate-shake hover:animate-stagger">
          <PhoneIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-[10px] md:text-xs mt-1 md:mt-2 hidden md:block">Contact Us</span>
      </a>

      {/* View Packages Icon */}
      <a
        href="/solar/shs"
        className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors group"
      >
        <div className="p-2 bg-blue-50 rounded-full animate-shake hover:animate-stagger">
          <ShoppingCartIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-600 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-[10px] md:text-xs mt-1 md:mt-2 hidden md:block">View Packages</span>
      </a>
    </div>
  );
};

export default Converse;
