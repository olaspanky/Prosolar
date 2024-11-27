import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { title: "Home", route: "/" },
  {
    title: "Solar Packages",
    children: [
      { title: "Solar Home Systems", route: "/solar/shs" },
      { title: "Commercial Solar Systems", route: "/solar/scs" }
    ],
  },
  { title: "Services", route: "/blog" },
  {
    title: "Projects",
    children: [
      { title: "LATC", route: "/solar/project1" },
      { title: "OTUAN", route: "/solar/project2" },
      { title: "AGB", route: "/solar/project3" },
      { title: "KORO", route: "/solar/project4" },
    ],
  },
  { title: "Contact Us", route: "/solar/contact" },
];

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Always call hooks first, before any early returns
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  // Handle click outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); 

  // Reset timeout when dropdown opens
  useEffect(() => {
    if (isOpen) {
      resetTimeout();
    }
  }, [isOpen]);

  // Check for children AFTER hooks are called
  if (!item || !item.children) {
    return null;
  }

  

  return (
    <div ref={dropdownRef} className="relative group">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        {item.title}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {item.children.map((child) => (
            <Link
              key={child.title}
              href={child.route}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky font-jak top-0 z-50 bg-white shadow-md">
      <div className="lg:mx-20">
        <div className="flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/assets/plogo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="w-auto h-8 md:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <Dropdown item={item} />
                ) : (
                  <Link
                    href={item.route}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      path === item.route
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/pages/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#292ECF] hover:bg-blue-700 transition-colors"
            >
              Ask for Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link href="/" className="block">
              <Image
                src="/assets/plogo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="w-auto h-8"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6 space-y-6">
              {menuItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.children ? (
                    <Dropdown item={item} />
                  ) : (
                    <Link
                      href={item.route}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-base font-medium transition-colors hover:text-blue-600 ${
                        path === item.route
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <Link
              href="/solar/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#292ECF] hover:bg-[#292ECF] transition-colors"
            >
              Ask for Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
