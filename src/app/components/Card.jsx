// components/SolarProductCard.js
import React, { useState } from 'react';
import data from './data';
import Link from 'next/link';
import ProductModal from './ProductModal';

const SolarProductCard = () => {
  const products = data;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 font-jak   md:grid-cols-2 2xl:grid-cols-2 gap-32">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-[#787878] text-[#787878] flex flex-col gap-5 shadow-lg p-5 lg:p-9 lg:rounded-[64px] overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-md lg:text-[48px] font-bold text-black">{product.component}</h3>
            <p className="text-[#22222] mt-2 font-jak text-[32px]">{product.suitableFor}</p>
            <div className="w-full border mb-12 border-[#292ECF]"></div>
          </div>

           {/* System Components Section */}
           <div className="flex flex-col lg:gap-12 gap-3  text-black h-[250px]">
            <h1 className="text-md lg:text-xl text-md lg:text-[40px]  font-bold text-black ">Appliances it can Power </h1>
            <h3 className="text-sm lg:text-[34px] leading-normal text-[#787878]">{product.components}</h3>
          </div>

          {/* Appliances Section */}
          <div className="flex flex-col lg:gap-12 gap-3 lg:h-[400px]">
            <h1 className="text-md lg:text-[40px] font-bold text-black">System Components</h1>
            <div className='flex text-[#787878] flex-col gap-12'>
            {product.appliances.appliance1 && <h3 className="text-sm lg:text-[34px]">{product.appliances.appliance1}</h3>}
            {product.appliances.appliance2 && <h3 className="text-sm lg:text-[34px]">{product.appliances.appliance2}</h3>}
            {product.appliances.appliance3 && <h3 className="text-sm lg:text-[34px]">{product.appliances.appliance3}</h3>}
            {product.appliances.appliance4 && <h3 className="text-sm lg:text-[34px]">{product.appliances.appliance4}</h3>}
            {product.appliances.appliance5 && <h3 className="text-sm lg:text-[34px]">{product.appliances.appliance5}</h3>}
          </div>
          </div>

         
          <div className="w-full border border-[#292ECF]"></div>

          {/* Pricing Section */}
          <div className="flex justify-between mt-5 gap-3">
            <div>
              <span className="text-sm lg:text-[32px]">Outright Price</span>
              <h1 className="text-md lg:text-[36px] text-center font-bold text-black">NGN{product.OutrightPayment.toLocaleString()}</h1>
            </div>
            <div>
              <span className="text-sm lg:text-[32px]">Pay small small</span>
              <h1 className="text-md lg:text-[36px] text-center font-bold text-black">NGN{product.monthlyRepayment.toLocaleString()}</h1>
            </div>
          </div>

          {/* Button to see more details */}
          <div className="flex justify-center items-center">
            <Link href={`/pages/products/${product.id}`}>
              <button className="bg-[#292ECF] lg:px-[32px] lg:m-12 lg:py-[16px] text-white lg:text-[24px] rounded-[16px]">
                See more Details
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SolarProductCard;
