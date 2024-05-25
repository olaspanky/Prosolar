// components/Testimonials.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import t1 from "../../../../public/assets/t1.png"

const testimonials = [
  {
    quote: "Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I m loving the green energy. Highly recommend!.",
    author: "John Doe",
    title: "CEO, Company",
    image: "/path/to/image1.jpg",
  },
  {
    quote: "Excellent customer service and exceptional quality. Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Jane Smith",
    title: "Manager, Business",
    image: "/path/to/image2.jpg",
  },
  {
    quote: "I would highly recommend this to anyone! Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Mike Johnson",
    title: "Developer, Tech Co.",
    image: "/path/to/image3.jpg",
  },
  {
    quote: "Fantastic experience, will buy again. Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Alice Brown",
    title: "Director, Firm",
    image: "/path/to/image4.jpg",
  },
  {
    quote: "High quality and fast delivery. Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Tom Wilson",
    title: "Owner, Store",
    image: "/path/to/image5.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
   
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="  p-9 h-auto flex justify-center items-center ">
            <div className="rounded-2xl flex flex-col gap-3 bg-[#282828] p-3 lg:p-9 mt-[25%] text-[#D9D9D9] ">
            <div className="mt-[-20%]">
                <Image src={t1} className="w-20"/>
            </div>
            <p className="">"{testimonial.quote}"</p>
            <h3 className=" italic ">{testimonial.author}</h3>
          </div>
          </div>
        ))}
      </Slider>
     
      
    </div>
  );
};

export default Testimonials;
