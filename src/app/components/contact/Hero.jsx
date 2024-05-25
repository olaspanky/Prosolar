import React from "react";
import Form from "../Form"
import data from "../data"
import products from "../data";
export const Hero = () => {
  const  products = data
  return (
    <div className="xl:px-12  xl:py-36 p-1 text-black">
      
      <div className=" rounded-xl">
        <h1 className="text-md lg:text-xl lg:text-5xl text-[#F8D109] text-center my-5">Get In Touch</h1>
        <div className="container mx-auto px-4 py-8">
      <div className="">
        
          <Form />
      </div>
    </div>
</div>




     
    </div>
  );
};
export default Hero;
