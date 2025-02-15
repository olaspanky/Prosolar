// components/Testimonials.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import t1 from "../../../../public/assets/t1.png"
import owolabi from "../../../../public/testimonial/owolabi.jpeg"

const testimonials = [
  {
    quote: "Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Devreemz",
    title: "CEO, Company",
    image: t1,
  },
  {
    quote: "The company’s exceptional service, commitment to quality, and customer-centered approach have made all the difference. Thank you, ProSolar Energy, for providing not just a product but a solution that has truly transformed our lives. I highly recommend them to anyone looking to embrace a sustainable and reliable energy future with Prosolar energy!.",
    author: "Mrs Owolabi",
    title: "Manager, Business",
    image: owolabi,
  },
  {
    quote: "I would highly recommend this to anyone! Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Mike Johnson",
    title: "Developer, Tech Co.",
    image: t1,
  },
  {
    quote: "Fantastic experience, will buy again. Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Alice Brown",
    title: "Director, Firm",
    image: t1,
  },
  {
    quote: "High quality and fast delivery. Pro Solar made going solar a breeze! From consultation to installation, their team was top-notch. My bills have dropped, and I am loving the green energy. Highly recommend!.",
    author: "Tom Wilson",
    title: "Owner, Store",
    image: t1,
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,

        },
      },
    ],
  };

  return (
    <div className="w-full">
   
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" p-2  xl:p-9 h-auto flex justify-center items-center ">
            <div className="rounded-2xl flex flex-col gap-3 bg-[#282828] p-2 mb-9 lg:mb-aut0 lg:p-9 mt-[25%] text-[#D9D9D9] ">
            <div className="rounded-full w-20 h-20">
            <Image src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} className="w-20 rounded-full h-auto" />
            </div>
            <p className="font-jak">{testimonial.quote}</p>
            <h3 className=" italic ">{testimonial.author}</h3>
          </div>
          </div>
        ))}
      </Slider>
     
      
    </div>
  );
};

export default Testimonials;
