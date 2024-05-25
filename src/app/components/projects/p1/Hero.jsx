import React from "react";
import ImageCard from "../ImageCard"
import l1 from "../../../../../public/assets/LATC2.jpg"
export const Hero = () => {
  return (
    <div className=" text-black">
      
      <div className="">
        <div className="container mx-auto px-4 py-8">
      <div className="my-5 lg:my-20">
        
      <ImageCard
          src= {l1} // Replace with your image path
          alt="Ground Mounted Solar Power Plant"
          location="Dobi, Gwagwalada, Abuja, Nigeria."
          technology="AC Coupled BESS"
          year="2022"
          solar="96KWp"
          inverter="122KVA"
          battery="65kWh"
        />      </div>

        <div className="flex flex-col gap-5">
          <h1 className='text-sm lg:text-lg lg:text-2xl font-bold'>Project Summary</h1>
          <p className="text-sm lg:text-sm lg:text-lg">The Ground mounted 95kWp Solar Plant was designed and developed for a commercial
agricultural farm in Dobi, Gwagwalada, Abuja. The solar system will help the client generate over 150MWh of clean energy annually,reduce over 20 metric tonnes of CO2 emissions and save over N80m in diesel fuel cost.</p>
        </div>
    </div>
</div>




     
    </div>
  );
};
