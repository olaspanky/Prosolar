

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import frame1 from"../../../../public/assets/frame1.jpg";
// import frame2 from"../../../../public/assets/frame2.jpg";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import Navbar from "../Nav"



// const Hero = () => {



//   return (
//   <div className='w-full h- auto px-5 '>
//     <div className='bg-lbg bg-cover bg-center h-[30vh] lg:h-[60vh] flex flex-col gap-5 lg:gap-9 justify-center items-center p-5 xl:p-20 2xl:p-36 rounded-xl'>
//     <h1 className={` font-syne xl:max-w-[1000px] text-center text-white text-3xl xl:text-[64px] xl:leading-[79px]`}>Solar Packages for your Homes</h1>               


//     </div>


    
//   </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import Image from "next/image";
import frame1 from "../../../../public/assets/frame1.jpg";
import frame2 from "../../../../public/assets/frame2.jpg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);



  // Content to display when loaded
  const HeroContent = () => (
    <div className="bg-lbg bg-cover bg-center h-[30vh] lg:h-[60vh] flex flex-col gap-2 lg:gap-9 justify-center w-full items-center p-2 lg:p-5 xl:p-20 2xl:p-36 rounded-xl">
      <h1
        className={`font-syne xl:max-w-[1000px] text-center text-white text-3xl xl:text-[64px] xl:leading-[79px]`}
      >
        Solar Packages for your Homes
      </h1>
    </div>
  );

  return <div className="w-full h-auto p-1 lg:px-5"> <HeroContent /></div>;
};

export default Hero;
