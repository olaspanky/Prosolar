"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import data from '../../../components/data';
import data2 from '../../../components/data2';
import Nav from '../../../components/Nav';
import ProductModal from '@/app/components/ProductModal';
import wallet from "../../../../../public/assets/wallet.png"
import transact from "../../../../../public/assets/transact.png"
import v2 from "../../../../../public/assets/v2.png"
import verified from "../../../../../public/assets/verified.png"
import Image from 'next/image';

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { id } = useParams();


  // Find the product in both data and data2 arrays
  const productFromData = data.find((p) => p.id === parseInt(id, 10));
  const productFromData2 = data2.find((p) => p.id === parseInt(id, 10));

  // Determine which array the product is from
  let product = productFromData || productFromData2;
  let isFromData = productFromData ? true : false; // True if product is from data, else false for data2


  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Conditional breadcrumb text and link based on the source array
  const breadcrumbText = isFromData ? "Solar Packages for Home" : "Solar Packages for Offices";
  const breadcrumbLink = isFromData ? "/pages/wet-cell" : "/pages/li-ion";

  return (
    <div className="bg-gray-100 min-h-screen font-jak text-gray-900">
      <Nav />

      {/* Breadcrumb */}
      <div className="xl:pt-20 px-3 py-5 xl:pl-20 mx-auto text-sm text-gray-600">
        <nav className="flex items-center space-x-2">
          <a href="/" className="hover:underline text-blue-600">
            Home
          </a>
          <span>/</span>
          <a href={breadcrumbLink} className="hover:underline text-blue-600">
            {breadcrumbText}
          </a>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{product.component}</span>
        </nav>
      </div>

      <div className='flex justify-center items-center p-2 xl:p-20'>
      <div className='max-w-[1440px]'>
      <h1 className="text-xl lg:text-[48px] font-bold text-black font-extrabold mb-4">{product.component}</h1>

<div className='grid lg:grid-cols-12 gap-5 pt-3 xl:pt-10'>
<div className=" col-span-9  ">
        <div className="      ">

          {/* Appliances */}
          <div className="mb-6">
            <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">Appliances It Can Power</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] lg:text-[20px]">
              {product.suitableFor}
            </div>
          </div>

          {/* System Components */}
          <div className="mb-6">
            <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">System Components</h2>
            <p className="text-gray-600 text-[14px] lg:text-[20px]">{product.components}</p>
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">Payment Plans</h2>

            {/* Outright Payment */}
            <div className="flex  items-center font-jak text-[14px] lg:text-[20px] gap-3 rounded-lg  mb-4">
              <h3 className="  text-[#222222] text-[16px] lg:text-[24px]">Outright Payment: </h3>
              <h4 className=" font-bold text-gray-900 ">
                &#8358; {product.OutrightPayment.toLocaleString()}
              </h4>
            </div>

            {/* Pay Small Small */}
            <div className="rounded-lg ">
              <h3 className="text-[#222222] text-[16px] lg:text-[24px]">Pay Small Small</h3>
              <ul className="text-gray-700 mt-2 flex flex-col gap-3 text-[14px] lg:text-[20px]">
                <li>First Down Payment: <span className="  font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentFirstDown.toLocaleString()}</span></li>
                <li>12 Monthly Repayments: <span className="  font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepayment.toLocaleString()}</span></li>
                <li>Total Cost: <span className=" font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentTotal.toLocaleString()}</span></li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-6">
            <button
              className="bg-[#292ECF] text-white py-3 px-6 w-full rounded-lg font-semibold hover:bg-[#292ECF] transition duration-300"
              onClick={() => handleProductClick(product)}
            >
              I Want This
            </button>
          </div>
        </div>
      </div>

      <div className='col-span-3 text-[14px] lg:text-[20px]  text-[#787878]'>
        <div className='flex flex-col gap-2 lg:gap-5'>
          <div className='flex gap-3'>
          <Image src={wallet} className='w-auto h-5 lg:h-9'/>
            <p>₦700k Cost savings per year</p>
            </div>
          <div className='flex gap-3'>
          <Image src={transact} className='w-auto h-5 lg:h-9'/>
            <p>3 years Return on investment</p>
            </div>
          <div className='flex gap-3'>
          <Image src={v2} className='w-auto h-5 lg:h-9'/>
            <p>250 litres of fuel saved per annum</p>
            </div>
          <div className='flex gap-3'>
          <Image src={verified} className='w-auto h-5 lg:h-9'/>
            <p>5 Years warranty on Battery, 1 year on inverter, 25years on Solar panels and 1 year free maintenance service  </p>
            </div>
        </div>
      </div>

</div>
      </div>
      </div>

    
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductDetails;
