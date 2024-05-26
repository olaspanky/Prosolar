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

export const Hero = () => {
  return (
    <div className="xl:px-12  xl:py-36 p-3 text-black">
         <div className="lg:grid grid-cols-12 text-black gap-9 py-9 ">
        <div className="col-span-5 flex flex-col gap-5 ">
          <h1 className="text-md lg:text-xl lg:text-md lg:text-xl lg:text-5xl font-extrabold">
            WE ARE SOLUTION <br /> PROVIDERS
          </h1>
          <h1 className="text-md lg:text-xl">
            Lets help you solve your power and energy Problems
          </h1>
        </div>
        <div className="col-span-7">
          <p className="text-md">
            Solar is the fastest growing energy source in the world, with its
            remarkable trajectory driven by several factors. The plummeting
            costs of solar panel manufacturing and installation have made solar
            power increasingly affordable and accessible to a wider range of
            individuals and organizations.
          </p>
        </div>
      </div>
      <div className="bg-[#F9F9F9] p-1 lg:p-9 rounded-xl">
        <h1 className="text-md  lg:text-5xl text-yellow-300 text-center my-5">Why Choose Us</h1>
        <div className="lg:grid grid-cols-2 gap-3 ">
          <div className="col-span-1 flex flex-col justify-center items-center p-1 xl:p-20">
            <Image src={frame1} className="" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center gap-9 p-1 xl:p-20 my-20">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-xl">Cut Costs with ProSolar</h1>
              <p className="text-sm lg:text-lg">
                Say goodbye to high energy bills. Invest in our solution and
                watch your expenses shrink next quarter. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis aspernatur iure placeat, nisi iste beatae quas vitae, reprehenderit saepe incidunt est soluta autem. Commodi enim iusto molestiae voluptatem iure.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-xl">
                Top-Quality Products, Extended Warranty
              </h1>
              <p className="text-sm lg:text-lg">
                Our solar equipment guarantees reliability. With efficient
                protection and expert design, our extended warranty ensures
                lasting performance.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-xl">After Sales Services</h1>
              <p className="text-sm lg:text-lg">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="p-1 lg:p-5 rounded-xl">
        <h1 className="text-md lg:text-5xl text-[#292ECF] text-center my-5">How it Works</h1>
        <div className="lg:grid grid-cols-2 gap-3 ">
          <div className="col-span-1 flex flex-col gap-3 lg:gap-20 p-3 lg:p-20">
            <div className="flex gap-5">
                <div>
                <Image src={icon1} className="w-48"/>


                </div>
                <div className="flex flex-col gap-3">
                <h1 className="font-bold text-md lg:text-xl">After Sales Services</h1>
                <p className="text-sm lg:text-lg">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
                </div>
            </div>
            <div className="flex gap-5">
                <div>
                <Image src={icon2} className="w-48"/>


                </div>
                <div className="flex flex-col gap-3">
                <h1 className="font-bold text-md lg:text-xl">Energy Audit</h1>
                <p className="text-sm lg:text-lg">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
                </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3 lg:gap-20 p-3 lg:p-20">
          <div className="flex gap-5">
                <div>
                <Image src={icon1} className="w-48"/>


                </div>
                <div className="flex flex-col gap-3">
                <h1 className="font-bold text-md lg:text-xl">After Sales Services</h1>
                <p className="text-sm lg:text-lg">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
                </div>
            </div>
            <div className="flex gap-5">
                <div>
                <Image src={icon2} className="w-48"/>


                </div>
                <div className="flex flex-col gap-3">
                <h1 className="font-bold text-md lg:text-xl">Energy Audit</h1>
                <p className="text-sm lg:text-lg">
                We guarantee customers full product support services, covering
                all operational stages, from installation to commissioning,
                training and long-term maintenance and repair.
              </p>
                </div>
            </div>
            
          </div>
        </div>
      </div>



      <div className=" lg:p-5 rounded-xl">
        <h1 className="text-md lg:text-5xl text-[#292ECF] text-center my-5">Some of our past projects</h1>
        <div className="lg:grid grid-cols-4 gap-5 ">
          <div className="col-span-1 flex flex-col gap-3 h-[70vh] justify-between p-1 lg:p-5">
          <Image src={latc} className="w-full h-[200px]"/>
          <h1 className="font-bold lg:text-md lg:text-xl">95kWp Solar Power Plant at Dobi, Gwagwalada, Abuja, Nigeria.</h1>
          <p className="text-sm lg:text-lg">
          The Ground mounted 95kWp Solar Plant was designed and developed ...</p>
          <a href="/pages/project1" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold'>Check it out</button> </a>

          </div>
    
          <div className="col-span-1 flex flex-col gap-3 h-[70vh]  justify-between p-1 lg:p-5">
          <Image src={Otuan} className="w-full  h-[200px]"/>
          <h1 className="font-bold lg:text-md lg:text-xl">100kWp Solar Power Plant at Otuan, Southern Ijaw, Bayelsa, Nigeria
</h1>
          <p className="text-sm lg:text-lg  ">
          The Hybrid Solar Minigrid Project was designed and developed ...
</p>
<a href="/pages/project2" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold'>Check it out</button> </a>
          </div>
    
          <div className="col-span-1 flex flex-col h-[70vh] gap-3 p-1  justify-between lg:p-5">
          <Image src={agb} className="w-full  h-[200px]"/>
          <h1 className="font-bold lg:text-md lg:text-xl">33kWp Solar Power Plant at  Aguobiri, Southern Ijaw, Bayelsa, Nigeria
</h1>
          <p className="text-sm lg:text-lg">
          The Hybrid Solar Minigrid Project was designed and developed ...
</p>
<a href="/pages/project3" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20   text-white p-2 text-md font-bold'>Check it out</button> </a>
          </div>
    
          <div className="col-span-1 flex flex-col gap-3 h-[70vh] justify-between p-1 lg:p-5">
          <Image src={koro} className="w-full  h-[200px]"/>
          <h1 className="font-bold lg:text-md lg:text-xl">100kWp Solar Power Plant at Korokorosei, Southern Ijaw, Bayelsa, Nigeria
</h1>
          <p className="text-sm lg:text-lg">
          The Hybrid Solar Minigrid Project was designed and developed ...

</p>
<a href="/pages/project4" className="text-[#787878]">

<button className='rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold'>Check it out</button> </a>
          </div>
    
        </div>
      </div>


<div className="w-full bg-[#1B1B1B] rounded-xl h-auto p-5">
<h2 className="testimonial-title text-center text-md lg:text-xl lg:text-md lg:text-xl lg:text-5xl text-white my-5">Voice of Confidence,<br/>
What Our Clients Say</h2>
  <Testimonials/>
</div>




     
    </div>
  );
};
