// components/SolarProductCard.js
import React from 'react';
import data from "../components/data"
import Link from 'next/link';

const SolarProductCard = () => {
    const  products = data

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((product, index) => (
                <Link href={`/pages/products/${product.id}`}>

    <div className="bg-white text-[#787878] flex flex-col gap-5 shadow-lg p-5 lg:p-9 rounded-lg overflow-hidden">
      <div className=" flex flex-col gap-3">
        <h3 className="text-md lg:text-xl font-bold text-black">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.home}</p>
        <div className='w-full border border-[#F8D109]'></div>
       
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className='text-md lg:text-xl font-bold text-black'>Appliances Powered</h1>
        <h3 className="text-sm lg:text-lg">{product.ampliance1}</h3>
        <h3 className="text-sm lg:text-lg">{product.ampliance2}</h3>
        <h3 className="text-sm lg:text-lg">{product.ampliance3}</h3>
      </div>
      <div className=" flex flex-col gap-3 text-black">
        <h1 className='text-md lg:text-xl font-bold text-black'>System Components</h1>
        <h3 className="text-sm lg:text-lg">{product.components}</h3>

       
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className='text-md lg:text-xl text-center font-bold text-black'>NGN{product.price1}</h1>
        <h1 className='text-sm text-center font-bold text-[#292ECF]'>NGN{product.price1} without solar</h1>
      
      </div>
      </div>
      </Link>
              ))}


    </div>
  );
};

export default SolarProductCard;
