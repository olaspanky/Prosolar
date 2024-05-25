import React from "react";
import SolarProductCard from "../Card"
import data from "../data"
export const Hero = () => {
  const  products = data
  return (
    <div className="xl:px-12  xl:py-36 p-3 text-black">
      
      <div className="bg-[#F9F9F9] p-9 rounded-xl">
        <h1 className="text-md lg:text-xl lg:text-5xl text-[#F8D109] text-center my-5">Li-ion Battery Packages</h1>
        <div className="container mx-auto px-4 py-8">
      <div className="">
        
          <SolarProductCard />
      </div>
    </div>
</div>




     
    </div>
  );
};
