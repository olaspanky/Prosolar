

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import Logo from "../../../public/assets/plogo.svg"
import { useState } from "react";
import { usePathname } from "next/navigation";


const menuItems = [

  {
    title: "Home",
    route: "/"

   
  },
  {
    title: "Services",
    route: "/pages/services",
   

  
  },

  {
    title: "Shop",
    route: "/blog",


  },
  {
    title: "Contact Us",
    route: "/pages/contact",
  },
  {
    title: "Solar Packages",
    children: [
      {
        title: "Li-ion",
        route: "/pages/packages",
      },
     
     
    ],

  },
  {
    title: "Projects",
    children: [
      {
        title: "LATC",
        route: "/pages/project1",
      },
      {
        title: "OTUAN",
        route: "/pages/project2",
      },
      {
        title: "AGB",
        route: "/pages/project3",
      },
      {
        title: "KORO",
        route: "/pages/project4",
      },
     
    ],

  }

];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  " hover:text-blue-500"

  return (
    <div className=" flex justify-between px-5 xl:px-9 2xl:px-10 gap-10 items-center border-b-2 border-white ">
      <div className="lg:p-5 p-2 rounded-br-[25%] rounded-bl-[25%] ">
     <Link href="/" >
        <Image src={Logo} className="w-12 lg:w-36" alt="logo" />
      </Link>

      </div>
      
      <div className="hidden md:flex gap-8 items-center text-[#787878]">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className={`${item.route === path ? "text-[#292ECF] border-b-2 px-3 border-[#FFFFFF] font-semibold pb-1" : ""}`} href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
        <a href="/pages/contact" className="text-[#787878]">
            <div className="flex gap-3 px-3 py-2 border rounded-lg bg-[#292ECF] items-center justify-center">
             
              <p className="text-xs text-[white]">Get a quote</p>
            </div>
          </a>
      </div>
      <div className="md:hidden text-black">
        <button onClick={toggleMenu} className="hover:text-blue-500">
          &#9776;
        </button>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden fixed top-0 right-0 bottom-0 z-30 bg-white w-[70%] h-screen overflow-y-auto p-8 transition-all duration-1000`}>
           <button onClick={toggleMenu} className="hover:text-blue-500 flex justify-end ml-48 rounded-full p-2 text-[#292ECF] bg-black text-right">
          X
        </button>
          {menuItems.map((item) => (
            <div key={item.title} className="mb-4">
              {item.hasOwnProperty('children') ? (
                <Dropdown item={item} />
              ) : (
                <Link href={item?.route || ''} onClick={toggleMenu}>
                  <div className="hover:text-blue-500">{item.title}</div>
                </Link>
              )}
            </div>
          ))}
         <a href="/pages/contact" className="text-black">
            <div className="flex gap-3 px-3 py-2 border rounded-lg border-white items-center justify-center">
              <div className="relative">
              <button className="p-3 bg-yellow-600">Get a Quote</button>
              </div>
              <p className="text-xs text-white">Cart</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}