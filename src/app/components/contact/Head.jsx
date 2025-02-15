

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import frame1 from"../../../../public/assets/frame1.jpg";
import frame2 from"../../../../public/assets/frame2.jpg";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from "../Nav"

const spanStyle = {
  padding: '20px',
  position: 'absolute', // Added position relative


};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  position: 'relative', // Added position relative
  zIndex: 1, // Added z-
};

const buttonStyle = {
  width: "0px",
  background: 'none',
  border: '0px',

};



const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
};

const slideImages = [
  {
    url: frame1,
    caption: 'We Provide you with Reliable and Affordable solar solution'
  },
  {
    url: frame1,
    caption: 'We help our customers save money with Solar Solutions'
  },

 
];

const Hero = ({ scrollToHero }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        slideRef.current.goTo(currentIndex);
      }
    }, 15000); // 15 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
  <div className='w-full h- auto px-5 '>
    <div className='bg-lbg bg-cover bg-center h-[30vh] lg:h-[50vh] flex flex-col gap-5 lg:gap-9 justify-center items-center p-5 xl:p-20 2xl:p-36 rounded-xl'>
<h1 className='text-md lg:text-xl xl:text-7xl text-center font-bold text-white '>Contact</h1>

    </div>
  </div>
  );
};

export default Hero;
