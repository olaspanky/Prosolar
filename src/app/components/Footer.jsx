import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/plogo.svg"
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export const Footer = () => {
  return (
    <div className='lg:p-3 p-1'>
        <div className='grid grid-cols-12 gap-3 rounded-xl bg-[#1B1B1B]  text-[#D9D9D9] p-3 lg:p-9'>
            <div className='col-span-4 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='col-span-8 flex lg:flex-row flex-col gap-3 md:gap-5 lg:gap-20 justify-between '>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white my-3'>Location</h1>
                    <p className='text-xs lg:text-sm'>
                    Suite 4, Block A, G-Wing, Bassan Plaza, Off Herbert Macaulay Way, Central Business District, FCT-Abuja.                    </p>
                </div>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white my-3'>Navigate to</h1>
                    <div className="flex flex-row lg:flex-col gap-3">
    <div className="flex gap-3 items-center"><span className='hidden lg:flex'>Home</span></div>
    <div className="flex gap-3 items-center"><span className='hidden lg:flex'>About</span></div>
    <div className="flex gap-3 items-center"><span className='hidden lg:flex'>Solar Packages</span></div>
    <div className="flex gap-3 items-center"><span className='hidden lg:flex'>Contact us</span></div>
    <div className="flex gap-3 items-center"><span className='hidden lg:flex'>Projects</span></div>
   
</div>
                </div>
                <div className='lg:w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white my-3'>Get in touch</h1>
                   <div className='flex flex-col gap-2 '>
                    <div className='flex gap-2  items-center '>
                    <FaPhoneAlt />
<p>08029068303</p>
                    </div>
                    <div className='flex gap-2  items-center '>
                    <IoMdMail />
<p>info@prosolarng.com</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
