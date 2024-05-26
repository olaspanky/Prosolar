import React from "react";
import SolarProductCard from "../Card"
import data from "../data"
export const Hero = () => {
  const  products = data
  return (
    <div className="xl:px-12  xl:py-36 p-3 text-black">
       <div className="my-9">
      <p className="text-lg">When investing in a solar power system, selecting the right battery package is crucial for maximizing efficiency and meeting your energy needs. Among the popular choices are Lithium-ion and Wet Cell (Lead-Acid) battery packages. Each type has unique advantages and is suited for different applications. This guide highlights the differences between these two battery technologies, helping you make an informed decision based on your specific requirements.</p>
        <p>Wet Cell batteries, also known as Lead-Acid batteries, have been the standard in energy storage for decades. They are known for their reliability, affordability, and ease of recycling.</p>
     
      </div>
      
      <div className="bg-[#F9F9F9] p-2 lg:p-9 rounded-xl">
        <h1 className="text-md lg:text-xl lg:text-5xl text-[#F8D109] text-center my-5">Wet cell Battery Systems</h1>
        <div className="container mx-auto px-1 lg:px-4 py-8">
      <div className="">
        
          <SolarProductCard />
      </div>
    </div>
</div>




     
    </div>
  );
}