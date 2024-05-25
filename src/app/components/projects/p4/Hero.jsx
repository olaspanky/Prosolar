import React from "react";
import ImageCard from "../ImageCard"
import l1 from "../../../../../public/assets/Koro2.jpeg"
export const Hero = () => {
  return (
    <div className=" text-black">
      
      <div className="">
        <div className="container mx-auto px-4 py-8">
      <div className="my-5 lg:my-20">
        
      <ImageCard
          src= {l1} // Replace with your image path
          alt="Hybrid Solar Minigrid"
          location="Korokorosei, Southern Ijaw, Bayelsa, Nigeria"
          technology="DC Coupled - Hybrid System"
          year="2023"
          solar="100KWp"
          inverter="100KVA"
          battery="230kWh"
        />      </div>

        <div className="flex flex-col gap-5">
          <h1 className='text-sm lg:text-lg lg:text-2xl font-bold'>Project Summary</h1>
          <p className="text-sm lg:text-sm lg:text-lg">The Hybrid Solar Minigrid Project was designed and developed for the rural electrification of Korokorosei Community
of Southern Ijaw Local Government of Bayelsa State, Nigeria. The project delivers clean, affordable and reliable energy to over 900 households, 30 SME and 2700 people.
The project was developed under the Nigerian Electrification Project of the Rural Electrifcation Agency and World Bank.</p>
        </div>
    </div>
</div>




     
    </div>
  );
};
