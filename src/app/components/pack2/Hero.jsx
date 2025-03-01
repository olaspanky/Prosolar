import React from "react";
import SolarProductCard from "../Card"
import data from "../data"
export const Hero = () => {
  const features = [
    {
      title: 'High Energy Density',
      description: 'Lithium-ion batteries store more energy in a compact size, making them ideal for space-constrained installations.',
    },
    {
      title: 'Long Lifespan',
      description: 'These batteries typically last up to 10 years or more with minimal maintenance, reducing the total cost of ownership.',
    },
    {
      title: 'Fast Charging',
      description: 'Lithium-ion technology allows for rapid charging and discharging, which is essential for applications that require quick energy delivery.',
    },
    {
      title: 'Lightweight',
      description: 'They are significantly lighter than traditional batteries, simplifying installation and reducing structural load.',
    },
  ];
  const suitability = [
    {
      title: 'Residential Use',
      description: 'Ideal for homes with moderate to high energy consumption and limited space for battery storage.',
    },
    {
      title: 'Commercial Applications',
      description: 'Perfect for businesses that require reliable and efficient energy storage to support continuous operations.',
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Best for systems that incorporate renewable energy sources, such as solar panels, to ensure stable and consistent power supply.',
    },
  ];
  const  products = data
  return (
    <div className="flex justify-center items-center">

    
    <div className="max-w-[1920px]  text-black">
     
      <div className="  lg:p-9 rounded-xl">
        <h1 className="text-3xl font-syne2 lg:text-6xl text-[black] text-center  my-5 lg:my-20">With Lithium Batteries</h1>
       
       
        <div className=" mx-auto px-1 ">
      <div className="">
        
          <SolarProductCard />
      </div>
    </div>

    </div>
</div>
{/* 
<div className="p-2 flex flex-col  gap-3">
    <a href="/pages/wet-cell" className="text-[#787878] flex gap-5">

      <p className="text-xl">Check out our Litium-ion Battery packages</p>

<button className='rounded-xl bg-[#292ECF] text-center  text-white p-2 text-xs lg:text-md font-bold'>G0</button> </a>
    <a href="/pages/contact" className="text-[#787878] flex gap-5">

      <p className="text-xl">Get a custom Quote</p>

<button className='rounded-xl bg-[#292ECF] text-center  text-white p-2 text-xs lg:text-md font-bold'>Get a quote</button> </a>

      
      
      </div> */}


     
    </div>
  );
};
