import React from "react";
import SolarProductCard from "../Card";
import data from "../data";
import Image from "next/image";
import p1 from "../../../../public/assets/pr1.png";
export const Hero = () => {
  const products = data;
  return (
    <div className="xl:px-12  xl:py-36 p-3 text-black">
      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5">
        <div className="col-span-1">
          <Image src={p1} />
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
              Solar Installation for homes and businesses
            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5">
        <div className="col-span-1 order-last lg:order-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
              Solar Training and Certification
            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={p1} />
        </div>
      </div>



      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5">
      <div className="col-span-1">
          <Image src={p1} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
              Solar Consultancy and Energy Audit
            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
       
      </div>

      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5" >
        <div className="col-span-1 order-last lg:order-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
Commercial and Industrial Solar Development            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={p1} />
        </div>
       
      </div>

      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5">
      <div className="col-span-1">
          <Image src={p1} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
Minigrid Design and Development            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:p-9 p-3 gap-5 " dir="ltr lg:ltr">
     
        <div className="col-span-1 order-last lg:order-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-md lg:text-xl">
Street Lighting Development and EPC contracts            </h1>
            <p className="text-sm lg:text-lg">
              The concern aboutSolar is that it can only generate power during
              the day, and not at night, with PROSOLAR Storage Solution
              residential customers can produce and...
            </p>
            <a href="/pages/contact" className="text-[#787878]">
              <button className="rounded-xl bg-[#292ECF] text-center mb-5 lg:mb-20 text-white p-2 text-md font-bold">
                Read More
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <Image src={p1} />
        </div>
      </div>






    </div>
  );
};
