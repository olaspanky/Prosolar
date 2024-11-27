// components/SolarProductCard.js
import React, { useState, useEffect } from 'react';
import data from './data';
import data2 from './data2'
import Link from 'next/link';
import ProductModal from './ProductModal';

const SolarProductCard = ({ pathname }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;
    
    // Set products based on URL path
    if (currentPath === '/solar/cs') {
      setProducts(data2);
    } else {
      setProducts(data);
    }
  }, []); // Empty dependency array means this runs once on mount

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 font-jak p-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 lg:gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-[#787878] text-[#787878] flex flex-col gap-5 shadow-lg p-5 2xl:p-9 rounded-3xl lg:rounded-[16px] overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col lg:h-[70px] lg:gap-2">
            <h3 className="text-md lg:text-[16px] 2xl:text-[20px] font-bold text-black">{product.component}</h3>
            <p className="text-[#22222] mt-2 font-jak text-sm lg:text-[12px] 2xl:text-[16px]">{product.suitableFor}</p>
          </div>

          <div className="w-full border my-1 border-[#292ECF]"></div>


           {/* System Components Section */}
           <div className="flex flex-col lg:gap-5 gap-2  text-black lg:h-[100px]  2xl:h-[120px]">
            <h1 className="  text-sm lg:text-[14px] 2xl:text-[16px]  font-bold text-black ">Appliances it can Power </h1>
            <h3 className="text-sm lg:text-[12px] 2xl:text-[16px] leading-normal text-[#787878]">{product.components}</h3>
          </div>

          {/* Appliances Section */}
          <div className="flex flex-col lg:gap-3 2xl:gap-7 gap-3 lg:h-[150px] 2xl:h-[250px]">
            <h1 className="text-sm lg:text-[14px] 2xl:text-[16px] font-bold text-black">System Components</h1>
            <div className='flex text-[#787878] flex-col gap-3 lg:gap-3 2xl:gap-7'>
            {product.appliances.appliance1 && <h3 className="text-sm lg:text-[12px] 2xl:text-[16px]">{product.appliances.appliance1}</h3>}
            {product.appliances.appliance2 && <h3 className="text-sm lg:text-[12px] 2xl:text-[16px]">{product.appliances.appliance2}</h3>}
            {product.appliances.appliance3 && <h3 className="text-sm lg:text-[12px] 2xl:text-[16px]">{product.appliances.appliance3}</h3>}
            {product.appliances.appliance4 && <h3 className="text-sm lg:text-[12px] 2xl:text-[16px]">{product.appliances.appliance4}</h3>}
            {product.appliances.appliance5 && <h3 className="text-sm lg:text-[12px] 2xl:text-[16px]">{product.appliances.appliance5}</h3>}
          </div>
          </div>

         
          <div className="w-full border border-[#292ECF]"></div>

          {/* Pricing Section */}
          <div className="flex justify-between lg:mt-5 gap-3">
            <div>
              <span className="text-sm lg:text-[14px]">Outright Price</span>
              <h1 className="text-sm lg:text-[16px] text-center font-bold text-black">&#8358;{product.OutrightPayment.toLocaleString()}</h1>
            </div>
            <div>
              <span className="text-sm lg:text-[14px]">Pay small small</span>
              <h1 className="text-sm lg:text-[16px] text-center font-bold text-black">&#8358;{product.monthlyRepayment.toLocaleString()}</h1>
            </div>
          </div>

          {/* Button to see more details */}
          <div className="flex w-full bg-red-200 lg:mt-5 justify-center items-center">
            <Link className='w-full' href={`/solar/products/${product.id}`}>
              <button className="bg-[#292ECF] lg:px-5 w-full  p-3 lg:py-3 text-white lg:text-[14px] rounded-[4px]">
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
