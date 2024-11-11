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
    <div className="grid grid-cols-1 sm:grid-cols-2  md:mx-5 2xl:mx-20 md:grid-cols-2 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-[#787878] text-[#787878] flex flex-col gap-5 shadow-lg p-5 lg:p-9 rounded-xl overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-md lg:text-xl font-bold text-black">{product.component}</h3>
            <p className="text-gray-600 mt-2">{product.home}</p>
            <div className="w-full border border-[#292ECF]"></div>
          </div>

          {/* Appliances Section */}
          <div className="flex flex-col gap-3">
            <h1 className="text-md lg:text-xl font-bold text-black">Appliances Powered</h1>
            {product.appliances.appliance1 && <h3 className="text-sm lg:text-lg">{product.appliances.appliance1}</h3>}
            {product.appliances.appliance2 && <h3 className="text-sm lg:text-lg">{product.appliances.appliance2}</h3>}
            {product.appliances.appliance3 && <h3 className="text-sm lg:text-lg">{product.appliances.appliance3}</h3>}
            {product.appliances.appliance4 && <h3 className="text-sm lg:text-lg">{product.appliances.appliance4}</h3>}
            {product.appliances.appliance5 && <h3 className="text-sm lg:text-lg">{product.appliances.appliance5}</h3>}
          </div>

          {/* System Components Section */}
          <div className="flex flex-col gap-3 h-20 text-black">
            <h1 className="text-md lg:text-xl font-bold text-black">System Components</h1>
            <h3 className="text-sm lg:text-lg text-[#787878]">{product.components}</h3>
          </div>

          {/* Pricing Section */}
          <div className="flex justify-between mt-5 gap-3">
            <div>
              <span className="text-sm lg:text-lg">Outright Price</span>
              <h1 className="text-md lg:text-lg text-center font-bold text-black">NGN{product.totalCost.toLocaleString()}</h1>
            </div>
            <div>
              <span className="text-sm lg:text-lg">Pay small small</span>
              <h1 className="text-md lg:text-lg text-center font-bold text-black">NGN{product.firstDownPayment.toLocaleString()}</h1>
            </div>
          </div>

          {/* Button to see more details */}
          <div className="flex justify-center items-center">
            <Link href={`/pages/products/${product.id}`}>
              <button className="bg-[#292ECF] p-2 px-3 text-white text-sm rounded-md">
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
