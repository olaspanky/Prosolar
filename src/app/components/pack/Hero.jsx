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
    <div className="xl:px-12  xl:py-12 p-3 text-black">
      <div className="my-9">
      <p className="text-lg">When investing in a solar power system, selecting the right battery package is crucial for maximizing efficiency and meeting your energy needs. Among the popular choices are Lithium-ion and Wet Cell (Lead-Acid) battery packages. Each type has unique advantages and is suited for different applications. This guide highlights the differences between these two battery technologies, helping you make an informed decision based on your specific requirements.</p>
        <p>Lithium-ion batteries are the latest innovation in solar energy storage. Known for their high energy density, long lifespan, and superior efficiency, they have become the go-to choice for residential and commercial solar power systems.</p>
     
      </div>
      <div className="bg-[#F9F9F9] p-2 lg:p-9 rounded-xl">
        <h1 className="text-md lg:text-xl lg:text-5xl text-[#F8D109] text-center my-5">Lithium ion Battery Systems</h1>
        {/* <div>
       <h2 className="text-xl md:text-2xl font-bold mb-4">Lithium-ion Battery Features</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </li>
        ))}
      </ul>
       </div>
       <div className="">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Suitable For</h2>
      <ul className="space-y-4">
        {suitability.map((item, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div> */}
       
        <div className="container mx-auto px-1 lg:px-4 py-8">
      <div className="">
        
          <SolarProductCard />
      </div>
    </div>
</div>




     
    </div>
  );
};
