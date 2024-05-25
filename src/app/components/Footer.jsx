import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/plogo.svg"


export const Footer = () => {
  return (
    <div className='lg:p-9 p-3'>
        <div className='grid grid-cols-12 rounded-xl bg-[#1B1B1B] text-[#D9D9D9] p-3 lg:p-9'>
            <div className='col-span-4 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='col-span-8 flex lg:flex-row flex-col gap-5 lg:gap-20 justify-between '>
                <div className='w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white'>Location</h1>
                    <p className='text-xs lg:text-sm'>
                    5,Talabi Street, off 
Adeniyi jones Avenue,
Vulcanizer bus stop,
Ikeja, Lagos Nigeria.
                    </p>
                </div>
                <div className='w-1/3'>
                    <h1 className='text-sm lg:text-lg font-bold text-white'>Contact</h1>
                    <div className="flex lg:w-36 w-20 flex-col gap-3">
    <div className="text-xs lg:text-sm    border-2 rounded-xl w-full shadow-md p-1">Instagram</div>
    <div className="text-xs lg:text-sm   border-2 rounded-xl w-full shadow-md p-1">Twitter</div>
    <div className="text-xs lg:text-sm    border-2 rounded-xl w-full shadow-md p-1">Whatsapp</div>
    <div className="text-xs lg:text-sm   border-2 rounded-xl w-full shadow-md p-1">Facebook</div>
  
</div>
                </div>
                <div className='w-1/3'>
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
