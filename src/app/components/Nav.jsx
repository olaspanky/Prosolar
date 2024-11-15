// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Dropdown from "./Dropdown";
// import Logo from "../../../public/assets/plogo.svg";
// import { usePathname } from "next/navigation";

// const menuItems = [
//   { title: "Home", route: "/" },
//   { title: "Services", route: "/pages/services" },
//   { title: "Shop", route: "/blog" },
//   { title: "Contact Us", route: "/pages/contact" },
//   {
//     title: "Solar Packages",
//     children: [{ title: "Li-ion", route: "/pages/li-ion" },{ title: "Wet cell", route: "/pages/wet-cell" }],
//   },
//   {
//     title: "Projects",
//     children: [
//       { title: "LATC", route: "/pages/project1" },
//       { title: "OTUAN", route: "/pages/project2" },
//       { title: "AGB", route: "/pages/project3" },
//       { title: "KORO", route: "/pages/project4" },
//     ],
//   },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const path = usePathname();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="flex justify-between px-5 xl:px-9 2xl:px-10 gap-10 items-center border-b-2 border-white">
//       <div className="lg:p-5 p-2 rounded-br-[25%] rounded-bl-[25%]">
//         <Link href="/">
//           <Image src={Logo} className="w-12 lg:w-36" alt="logo" />
//         </Link>
//       </div>

//       <div className="hidden md:flex gap-8 items-center text-[#787878]">
//         {menuItems.map((item) => {
//           return item.hasOwnProperty("children") ? (
//             <Dropdown key={item.title} item={item} />
//           ) : (
//             <Link
//               key={item.title}
//               className={`${item.route === path ? "text-[#292ECF] border-b-2 px-3 border-[#FFFFFF] font-semibold pb-1" : ""}`}
//               href={item?.route || ""}
//             >
//               {item.title}
//             </Link>
//           );
//         })}
//         <a href="/pages/contact" className="text-[#787878]">
//           <div className="flex gap-3 px-3 py-2 border rounded-lg bg-[#292ECF] items-center justify-center">
//             <p className="text-xs text-[white]">Get a quote</p>
//           </div>
//         </a>
//       </div>

//       <div className="md:hidden text-black">
//         <button onClick={toggleMenu} className="hover:text-blue-500">
//           &#9776;
//         </button>
//       </div>

//       <div
//         className={`md:hidden fixed top-0 right-0 bottom-0 z-30 bg-white w-full h-screen overflow-y-auto p-8 transition-transform duration-700 ${
//           isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
//         }`}
//       >
//         <button onClick={toggleMenu} className="hover:text-blue-500 w-full flex justify-end items-end right-2  rounded-full p-2 text-[#292ECF] text-right">
//           <div className="text-right w-full">X</div>
//         </button>
//         {menuItems.map((item) => (
//           <div key={item.title} className="mb-4">
//             {item.hasOwnProperty('children') ? (
//               <Dropdown item={item} />
//             ) : (
//               <Link href={item?.route || ''} onClick={toggleMenu}>
//                 <div className="hover:text-blue-500">{item.title}</div>
//               </Link>
//             )}
//           </div>
//         ))}
//         <a href="/pages/contact" className="text-[#787878]">
//           <div className="flex gap-3 px-3 py-2 border rounded-lg bg-[#292ECF] items-center justify-center">
//             <p className="text-xs text-[white]">Get a quote</p>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { title: "Home", route: "/" },
  { title: "Services", route: "/pages/services" },
  { title: "Shop", route: "/blog" },
  { title: "Contact Us", route: "/pages/contact" },
  {
    title: "Solar Packages",
    children: [
      { title: "Li-ion", route: "/pages/li-ion" },
      { title: "Wet cell", route: "/pages/wet-cell" }
    ],
  },
  {
    title: "Projects",
    children: [
      { title: "LATC", route: "/pages/project1" },
      { title: "OTUAN", route: "/pages/project2" },
      { title: "AGB", route: "/pages/project3" },
      { title: "KORO", route: "/pages/project4" },
    ],
  },
];

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
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
        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
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
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get a quote
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
              href="/pages/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}