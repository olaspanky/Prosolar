import React from "react";
import ImageCard from "../ImageCard"
import l1 from "../../../../../public/assets/Agb2.JPG"
export const Hero = () => {
  return (
    <div className=" text-black">
      
      <div className="">
        <div className="container mx-auto px-4 py-8">
      <div className="my-5 lg:my-20">
        
      <ImageCard
          src= {l1} // Replace with your image path
          alt="Hybrid Solar Minigrid"
          location="Aguobiri, Southern Ijaw, Bayelsa, Nigeria"
          technology="DC Coupled - Hybrid System"
          year="2023"
          solar="33KWp"
          inverter="12KVA"
          battery="60kWh"
        />      </div>

        <div className="flex flex-col gap-5">
          <h1 className='text-sm lg:text-lg lg:text-2xl font-bold'>Project Summary</h1>
          <p className="text-sm lg:text-sm lg:text-lg">The Hybrid Solar Minigrid Project was designed and developed to energize an anchor customer in Aguobiri Community
of Southern Ijaw Local Government of Bayelsa State, Nigeria. 
The project delivers clean, affordable and reliable energy with 99% uptime service.</p>
        </div>
    </div>
</div>




     
    </div>
  );
};
