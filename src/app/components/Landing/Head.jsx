

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import frame1 from"../../../../public/assets/pl.png";
import frame2 from"../../../../public/assets/pl2.jpg";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from "../Nav"
import { motion } from 'framer-motion';

// const spanStyle = {
//   padding: '20px',
//   position: 'absolute', // Added position relative


// };

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   position: 'relative', // Added position relative
//   zIndex: 1, // Added z-
// };

// const buttonStyle = {
//   width: "0px",
//   background: 'none',
//   border: '0px',

// };



// const properties = {
//   prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
//   nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
// };

// const slideImages = [
//   {
//     url: frame1,
//     caption: 'We Provide you with Reliable and Affordable solar solution'
//   },
//   {
//     url: frame1,
//     caption: 'We help our customers save money with Solar Solutions'
//   },

 
// ];

// const Hero = ({ scrollToHero }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (slideRef.current) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
//         slideRef.current.goTo(currentIndex);
//       }
//     }, 15000); // 15 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//   <div className='w-full h- auto lg:px-5 '>
//     <div className='bg-lbg bg-cover bg-center h-auto lg:h-[100vh] flex flex-col gap-5 lg:gap-9 justify-center items-center p-5 xl:p-20 2xl:p-36 rounded-xl'>
// <h1 className='text-md lg:text-xl xl:text-7xl text-center font-bold text-black '>Radiance on your roof <span className='text-[#F8D109]'>power</span>  in your hands!</h1>
// <p className='text-xs xl:text-md lg:text-xl text-center text-[#444444]'>Empower Your Solar Investment with  Expert Care! Discover seamless <br/>
// solutions for sales, repairs, and maintenance of solar inverters. </p>
{/* <a href="/pages/contact" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold'>Get a Quote</button> </a>
    </div>
  </div> */}
//   );
// };

// export default Hero;



// components/SlidingHeader.js
import Slider from 'react-slick';

const SlidingHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, 

  };

  const slides = [
    {
      image: frame1,
      title: 'Power Your Home or Office With Prosolar Today',
      titleStyle: 'text-md lg:text-xl xl:text-7xl text-center font-bold text-black',
      descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[#444444]',
      description: 'Enjoy a stress free life when you install Prosolars reliable and efficient solar system for your home or office either through upfront payment of installment payment. Ask for a quote to get started',
    },
    {
      image: frame2,
      title: 'Power Your Company  With Prosolar Today',
      titleStyle: 'text-md lg:text-xl xl:text-7xl text-center font-bold text-white',
      descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[white]',
      description: 'Enjoy a stress free life when you install Prosolars reliable and efficient solar system for your home or office either through upfront payment of installment payment. Ask for a quote to get started',
    },
  ];

  return (
    <div className="relative h-auto xl:h-screen overflow-hidden p-1 ">
      <Slider {...settings} className="h-full ">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full bg-red-500 rounded-[5rem]">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain rounded-[1rem] xl:rounded-[5rem]"
            />
            <div className="absolute inset-0  text-white  ">
              <div className="bg-cover bg-center h-auto lg:h-[100vh] flex flex-col gap-3 lg:gap-9 justify-center items-center p-5 xl:p-20 2xl:p-36 rounded-xl">
              <h1 className={slide.titleStyle}>{slide.title}</h1>
                <p className={slide.descriptionStyle}>{slide.description}</p>
                <a href="/pages/li-ion" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-xs lg:text-md font-bold'>Get a Quote</button> </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlidingHeader;
