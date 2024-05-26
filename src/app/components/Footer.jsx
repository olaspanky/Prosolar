import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/plogo.svg"
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='lg:p-9 p-1'>
        <div className='grid grid-cols-12 gap-3 rounded-xl bg-[#1B1B1B] text-[#D9D9D9] p-3 lg:p-9'>
            <div className='col-span-4 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='col-span-8 flex lg:flex-row flex-col gap-3 md:gap-5 lg:gap-20 justify-between '>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white'>Location</h1>
                    <p className='text-xs lg:text-sm'>
                    5,Talabi Street, off 
Adeniyi jones Avenue,
Vulcanizer bus stop,
Ikeja, Lagos Nigeria.
                    </p>
                </div>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white'>Contact</h1>
                    <div className="flex flex-row lg:flex-col gap-3">
    <div className=""><RiInstagramFill/></div>
    <div className=""><IoLogoWhatsapp/></div>
    <div className=""><FaTwitter/></div>
    <div className=""><FaFacebookF/></div>
   
</div>
                </div>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white'>Opening hours</h1>
                    <p className='text-xs lg:text-sm'>
                    5,Talabi Street, off 
Adeniyi jones Avenue,
Vulcanizer bus stop,
Ikeja, Lagos Nigeria.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
