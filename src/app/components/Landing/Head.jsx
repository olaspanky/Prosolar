

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import frame3 from"../../../../public/assets/biz.png";
import frame1 from"../../../../public/assets/home.png";
import frame2 from"../../../../public/assets/comm.png";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from "../Nav"
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import Link from 'next/link';

const syne = Syne({ weight: '700', subsets: ['latin'] });
const jak = Plus_Jakarta_Sans({ weight: '400', subsets: ['latin'] });

const SlidingHeader = () => {
  const settings = {
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
      title: 'We Power Your Home with Clean, Reliable Solar Energy',
      titleStyle: 'text-center font-bold text-white',
      descriptionStyle: '',
      description: 'Affordable solar solutions designed for homes – cut down your bills, power your life, and enjoy uninterrupted energy with finance options',
      button: "Discover Home Solutions",
      link: "/pages/li-ion"      
    },
    {
      image: frame2,
      title: 'We Empower Communities with Sustainable Energy',
      titleStyle: ' text-center font-bold text-white',
      descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[white]',
      description: 'Providing rural communities with reliable solar power for a brighter, greener future across Nigeria',
      button: "Learn About Rural Solutions",
      link: "/pages/li-ion"


    },
    {
      image: frame3,
      title: 'We Elevate Your Business with Cost-Efficient Solar Power',
      titleStyle: ' text-center font-bold text-white',
      descriptionStyle: 'text-xs xl:text-md lg:text-xl text-center text-[white]',
      description: 'Customized solar solutions to reduce operational costs, enhance productivity, and power business growth with finance options',
      button: "Explore Business Solutions",
      link: "/pages/li-ion"

      
    },
   
  ];

  return (
    <div className="relative h-auto xl:h-auto overflow-hidden p-2 md:p-5 2xl:p-9 ">
      <Slider {...settings} className="h-full ">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full rounded-[64px]">
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain rounded-[1rem] xl:rounded-[5rem]"
            />
            <div className="absolute inset-0  text-white  ">
              <div className="bg-cover bg-center h-auto  flex m-3 lg:m-20 flex-col gap-3 lg:gap-9 justify-center  items-center  xl:p-20 2xl:p-36 rounded-xl">
              <h1 className={`${slide.titleStyle} font-syne xl:max-w-[1000px] md:text-5xl xl:text-[64px] xl:leading-[79px]`}>{slide.title}</h1>               
               <p className={`max-w-[871px] text-[8px] text-center md:text-xl font-inter xl:text-[24px] leading-normal tracking-wider  ${slide.descriptionStyle}`}>{slide.description}</p>
               <Link 
                    href={slide.link}
                    className="inline-block mt-4 sm:mt-6 md:mt-8"
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
    </div>
  );
};

export default SlidingHeader;
