import React from "react";
import Image from "next/image";
import frame1 from "../../../../public/assets/choose.png";
import icon1 from "../../../../public/assets/picon.svg";
import icon2 from "../../../../public/assets/picon2.svg";
import p1 from "../../../../public/assets/pr1.png";
import Testimonials from "./Testimonial";
import Otuan from "../../../../public/assets/Otuan2.JPG"
import koro from "../../../../public/assets/Koro2.jpeg"
import latc from "../../../../public/assets/LATC2.jpg"
import agb from "../../../../public/assets/LATC2.jpg"
import w1 from "../../../../public/workers/workers.svg"
import ProjectSlider from "../ProjectSlider";
import ServicesSlider from "../ServicesSlider";
import slide1 from '../../../../public/workers/ps1.png';
import slide2 from '../../../../public/workers/ps2.png';
import slide3 from '../../../../public/workers/ps3.png';
import slide4 from '../../../../public/workers/ps4.png';
import ProcessSteps from "../Process";

export const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Solar Street Lighting",
      description: "After giving the price and payment confirmed installation commences immediately.",
      image: slide1,
    },
    {
      title: "Solar For Business",
      description: "After giving the price and payment confirmed installation commences immediately.",
      image: slide2,
    },
    {
      title: "Solar Rural Electrification",
      description: "After giving the price and payment confirmed installation commences immediately.",
      image: slide3,
    },
    {
      title: "Solar Home Systems",
      description: "After giving the price and payment confirmed installation commences immediately.",
      image: slide4,
    },
  ];

  return (
    <div className="xl:px-12  text-black">
         
      <div className="bg-[#F9F9F9] p-1 lg:p-9 xl:rounded-[64px]">
      <div className="container max-w-[1344px] mx-auto  gap-3 md:flex-row items-center justify-between ">

        <h1 className="text-md  lg:text-6xl leading-normal text-yellow-300 text-center font-syne my-2">Why Choose Us</h1>
        <div className="lg:grid grid-cols-2 flex flex-col-reverse  lg:gap-3 ">
          <div className="col-span-1 flex flex-col justify-center items-center p-1 ">
            <Image src={w1} className="w-full" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center gap-3 lg:gap-9 p-1 xl:p-20 my-">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-3xl font-syne2">Cut Costs with ProSolar</h1>
              <p className="text-sm lg:text-lg text-[#464646]">
              Say goodbye to high energy bills. Invest in our solution and watch your expenses shrink next quarter.   </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md font-syne2 lg:text-3xl">
                Top-Quality Products, Extended Warranty
              </h1>
              <p className="text-sm lg:text-lg text-[#464646]">
                Our solar equipment guarantees reliability. With efficient
                protection and expert design, our extended warranty ensures
                lasting performance.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-3xl font-syne2">After Sales Services</h1>
              <p className="text-sm lg:text-lg text-[#464646]">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div className="p-1 lg:p-5 rounded-6xl">
<ProcessSteps/>
      </div>

      <ServicesSlider
 title="Sustainable Solutions, Personalized for You."
 description="Providing the best solutions for various needs with a focus on sustainability."
 slides={slides}
    />
    <ProjectSlider/>

     


<div className="w-full bg-[#1B1B1B] rounded-xl h-auto p-5">
<div className="container max-w-[1344px] mx-auto p-10">

<h2 className="testimonial-title text-center text-md font-syne lg:text-md  lg:text-6xl text-white my-5">Voice of Confidence,<br/>
What Our Clients Say</h2>
  <Testimonials/>
  </div>
</div>




     
    </div>
  );
};
