"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import data from '../../../components/data';
import data2 from '../../../components/data2';
import Nav from '../../../components/Nav';
import ProductModal from '@/app/components/ProductModal';

const ProductDetails = () => {
  const { id } = useParams();

  // Check if the product exists in 'data' array
  const productFromData = data.find((p) => p.id === parseInt(id, 10));

  // Check if the product exists in 'data2' array
  const productFromData2 = data2.find((p) => p.id === parseInt(id, 10));

  // Combine product search results, prioritizing 'data' over 'data2'
  let product = productFromData || productFromData2;
  let isFromData = false;

  // Determine which array the product is from
  if (productFromData) {
    isFromData = true; // The product is from the 'data' array
  } else if (productFromData2) {
    isFromData = false; // The product is from the 'data2' array
  }


  console.log('Product From Data:', productFromData);
console.log('Product From Data2:', productFromData2);
console.log('Final Product:', product);

  // Handle the case when no product is found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Conditional breadcrumb text and link based on the source array
  const breadcrumbText = isFromData ? "Solar Packages for Home" : "Solar Packages for Offices";
  const breadcrumbLink = isFromData ? "/pages/wet-cell" : "/pages/li-ionj";

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Nav />

      {/* Breadcrumb */}
      <div className="xl:pt-20 py-5 xl:pl-20 mx-auto text-sm text-gray-600">
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

      <div className="mx-auto p-2 lg:py-12 lg:px-8 sm:px-1">
        <div className="bg-white p-2 lg:p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-gray-200">
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">{product.component}</h1>
          <p className="text-gray-500 mb-6">{product.home}</p>

          {/* Appliances */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">Appliances It Can Power</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.suitableFor}
            </div>
          </div>

          {/* System Components */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">System Components</h2>
            <p className="text-gray-600">{product.components}</p>
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">Payment Plans</h2>

            {/* Outright Payment */}
            <div className="rounded-lg shadow-sm mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Outright Payment</h3>
              <p className="text-gray-700">Pay the full amount upfront.</p>
              <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2">
                &#8358; {product.OutrightPayment.toLocaleString()}
              </h4>
            </div>

            {/* Pay Small Small */}
            <div className="rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Pay Small Small</h3>
              <p className="text-gray-700">Flexible monthly payment option:</p>
              <ul className="text-gray-700 mt-2 flex flex-col gap-3">
                <li>First Down Payment: <span className="text-xl lg:text-2xl font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentFirstDown.toLocaleString()}</span></li>
                <li>12 Monthly Repayments: <span className="text-xl lg:text-2xl font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepayment.toLocaleString()}</span></li>
                <li>Total Cost: <span className="text-xl lg:text-2xl font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentTotal.toLocaleString()}</span></li>
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

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductDetails;
