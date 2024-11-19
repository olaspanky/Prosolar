// components/SliderComponent.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderComponent({ title, description, slides, settings }) {
  const customSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    ...settings,
   
  };

  return (
    <div className="flex flex-col lg:flex-row  lg:p-10 bg-gray-100 rounded-lg">
      <div className="container max-w-[1344px] mx-auto flex flex-col lg:flex-row lg:p-10">
        
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col justify-center p-2">
          <div className="flex flex-col xl:ml-32 text-left">
            <h2 className="text-[20px] uppercase text-[#222222] font-syne2">Our Services</h2>
            <h1 className="text-3xl lg:text-6xl font-syne2 leading-normal text-[#222222] lg:w-20">{title}</h1>
          </div>
        </div>

        {/* Right Side Slider */}
        <div className="lg:w-1/2 mt-10  lg:mt-0 lg:ml-10 bg-white p-2 lg:p-12 rounded-lg shadow-md relative">
          <Slider {...customSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col gap-9 justify-between items-center">
                <h3 className="text-3xl font-semibold ">{slide.title}</h3>
                <p className="text-gray-600 my-5">{slide.description}</p>
                <div className="flex gap-4 mb-9 lg:mb-aut0">
                  <Image src={slide.image} alt={slide.title} className="rounded-lg w-[80%]" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Custom Dot Lines Under Description */}
     
    </div>
  );
}
