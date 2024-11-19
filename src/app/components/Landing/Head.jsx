

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import frame3 from"../../../../public/assets/biz.png";
// import frame1 from"../../../../public/assets/home.png";
// import frame2 from"../../../../public/assets/comm.png";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import Navbar from "../Nav"
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import { Plus_Jakarta_Sans, Syne } from "next/font/google";
// import Link from 'next/link';

// const syne = Syne({ weight: '700', subsets: ['latin'] });
// const jak = Plus_Jakarta_Sans({ weight: '400', subsets: ['latin'] });

// const SlidingHeader = () => {
//   const settings = {
//     infinite: true,
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: false, 
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           autoplay: false,
//           dots: true

//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           autoplay: false,
//           dots: true


//         },
//       },
//     ],

//   };

//   const slides = [
//     {
//       image: frame1,
//       title: 'We Power Your Home with Clean, Reliable Solar Energy',
//       titleStyle: 'text-center font-bold text-white',
//       descriptionStyle: '',
//       description: 'Affordable solar solutions designed for homes – cut down your bills, power your life, and enjoy uninterrupted energy with finance options',
//       button: "Discover Home Solutions",
//       link: "/pages/li-ion"      
//     },
//     {
//       image: frame2,
//       title: 'We Empower Communities with Sustainable Energy',
//       titleStyle: ' text-center font-bold text-white',
//       descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[white]',
//       description: 'Providing rural communities with reliable solar power for a brighter, greener future across Nigeria',
//       button: "Learn About Rural Solutions",
//       link: "/pages/li-ion"


//     },
//     {
//       image: frame3,
//       title: 'We Elevate Your Business with Cost-Efficient Solar Power',
//       titleStyle: ' text-center font-bold text-white',
//       descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[white]',
//       description: 'Customized solar solutions to reduce operational costs, enhance productivity, and power business growth with finance options',
//       button: "Explore Business Solutions",
//       link: "/pages/wet-cell"

      
//     },
   
//   ];

//   return (
    // <div className="relative h-[50vh] xl:min-h-[100vh] overflow-hidden ">
    //   <Slider {...settings} className="h-full ">
    //     {slides.map((slide, index) => (
    //       <div key={index} className="relative w-full h-full ">
    //         <Image
    //           src={slide.image}
    //           alt={slide.title}
    //           className="w-full h-[50vh] xl:h-full object-cover "
    //         />
    //         <div className="absolute  flex justify-center items-center inset-0  text-white  ">
    //           <div className="bg-cover bg-center h-auto  flex m-3 lg:m-20 flex-col gap-5 lg:gap-9 justify-center  items-center  xl:p-20 2xl:p-36 ">
    //           <h1 className={`${slide.titleStyle} text-xl font-syne xl:max-w-[1000px] md:text-5xl xl:text-[64px] xl:leading-[79px]`}>{slide.title}</h1>               
    //            <p className={`max-w-[871px] text-sm text-center md:text-xl font-inter xl:text-[24px] leading-normal tracking-wider  ${slide.descriptionStyle}`}>{slide.description}</p>
    //            <Link 
    //                 href={slide.link}
    //                 className=" mt-4 sm:mt-6 md:mt-8 "
    //               >
    //                 <button className="bg-gradient-to-r from-[#292ECF] to-[#151769] text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-3 py-1 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl transition-transform hover:scale-105 active:scale-95">
    //                   {slide.button}
    //                 </button>
    //               </Link>

                  

    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>

     

    // </div>
//   );
// };

// export default SlidingHeader;
import React from 'react';
import Image from 'next/image';
import frame3 from '../../../../public/assets/biz.png';
import frame1 from '../../../../public/assets/home.png';
import frame2 from '../../../../public/assets/comm.png';
import Slider from 'react-slick';
import Link from 'next/link';

const SlidingHeader = () => {
  const settings = {
    infinite: true,
    dots: true, // Enable dots
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      image: frame1,
      title: 'We Power Your Home with Clean, Reliable Solar Energy',
      description:
        'Affordable solar solutions designed for homes – cut down your bills, power your life, and enjoy uninterrupted energy with finance options',
      button: 'Discover Home Solutions',
      link: '/pages/li-ion',
    },
    {
      image: frame2,
      title: 'We Empower Communities with Sustainable Energy',
      description:
        'Providing rural communities with reliable solar power for a brighter, greener future across Nigeria',
      button: 'Learn About Rural Solutions',
      link: '/pages/li-ion',
    },
    {
      image: frame3,
      title: 'We Elevate Your Business with Cost-Efficient Solar Power',
      description:
        'Customized solar solutions to reduce operational costs, enhance productivity, and power business growth with finance options',
      button: 'Explore Business Solutions',
      link: '/pages/wet-cell',
    },
  ];

  return (
    <div className="relative h-[50vh] xl:min-h-[100vh] overflow-hidden ">
      <Slider {...settings} className="h-full ">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full ">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-[50vh] xl:h-full object-cover "
            />
            <div className="absolute  flex justify-center items-center inset-0  text-white  ">
              <div className="bg-cover bg-center h-auto  flex m-3 lg:m-20 flex-col gap-5 lg:gap-9 justify-center  items-center  xl:p-20 2xl:p-36 ">
              <h1 className={`${slide.titleStyle} text-center text-xl font-syne xl:max-w-[1000px] md:text-5xl xl:text-[64px] xl:leading-[79px]`}>{slide.title}</h1>               
               <p className={`max-w-[871px] text-sm text-center md:text-xl font-inter xl:text-[24px] leading-normal tracking-wider  ${slide.descriptionStyle}`}>{slide.description}</p>
               <Link 
                    href={slide.link}
                    className=" mt-4 sm:mt-6 md:mt-8 "
                  >
                    <button className="bg-gradient-to-r from-[#292ECF] to-[#151769] text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-3 py-1 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl transition-transform hover:scale-105 active:scale-95">
                      {slide.button}
                    </button>
                  </Link>

                  

              </div>
            </div>
          </div>
        ))}
      </Slider>

     


      {/* Styling for dots */}
      <style >{`
        .slick-dots {
          bottom: 15px; /* Adjust position */
        }
        .slick-dots li button:before {
          font-size: 12px; /* Adjust dot size */
          color: white; /* Dot color */
        }
        .slick-dots li.slick-active button:before {
          color: #292ecf; /* Active dot color */
        }
      `}</style>
    </div>
  );
};

export default SlidingHeader;
