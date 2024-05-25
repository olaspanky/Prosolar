import React from "react";
import Image from "next/image";
import frame1 from "../../../../public/assets/choose.png";
import icon1 from "../../../../public/assets/picon.svg";
import icon2 from "../../../../public/assets/picon2.svg";
import p1 from "../../../../public/assets/pr1.png";
import Testimonials from "./Testimonial";

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
      <div className="bg-[#F9F9F9] p-3 lg:p-9 rounded-xl">
        <h1 className="text-md  lg:text-5xl text-yellow-300 text-center my-5">Why Choose Us</h1>
        <div className="lg:grid grid-cols-2 gap-3 ">
          <div className="col-span-1 flex flex-col justify-center items-center p-3 xl:p-20">
            <Image src={frame1} className="" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center gap-9 p-3 xl:p-20 my-20">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md lg:text-xl">Cut Costs with ProSolar</h1>
              <p className="text-sm lg:text-lg">
                Say goodbye to high energy bills. Invest in our solution and
                watch your expenses shrink next quarter.
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


      <div className=" p-5 rounded-xl">
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



      <div className=" p-5 rounded-xl">
        <h1 className="text-md lg:text-xl lg:text-5xl text-[#292ECF] text-center my-5">Some of our past projects</h1>
        <div className="lg:grid grid-cols-3 gap-5 ">
          <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5">
          <Image src={p1} className="w-full"/>
          <h1 className="font-bold lg:text-md lg:text-xl">Project one</h1>
          <p className="text-sm lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis odit quibusdam tempore temporibus, expedita vitae a quasi aperiam optio in impedit, voluptatem repudiandae quia dolore laboriosam quo fuga blanditiis.
              </p>
          </div>
    
          <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5">
          <Image src={p1} className="w-full"/>
          <h1 className="font-bold lg:text-md lg:text-xl">Project one</h1>
          <p className="text-sm lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis odit quibusdam tempore temporibus, expedita vitae a quasi aperiam optio in impedit, voluptatem repudiandae quia dolore laboriosam quo fuga blanditiis.
              </p>
          </div>
    
          <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5">
          <Image src={p1} className="w-full"/>
          <h1 className="font-bold lg:text-md lg:text-xl">Project one</h1>
          <p className="text-sm lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis odit quibusdam tempore temporibus, expedita vitae a quasi aperiam optio in impedit, voluptatem repudiandae quia dolore laboriosam quo fuga blanditiis.
              </p>
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
