"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import data from '../../../components/data';
import Nav from '../../../components/Nav';
import ProductModal from '@/app/components/ProductModal';

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id, 10));
  const [selectedProduct, setSelectedProduct] = useState(null);


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

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Nav />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold">{product.component}</h1>
          <p className="text-lg text-gray-400">{product.home}</p>

          {/* Appliances */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Appliances Powered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {Object.values(product.appliances).map((appliance, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
                  <p className="text-lg">{appliance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Components */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">System Components</h2>
            <p className="text-lg text-gray-400 mt-2">{product.components}</p>
          </div>

          {/* Pricing Information */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">Outright Price</span>
              <h3 className="text-2xl font-bold">
                NGN{product.totalCost.toLocaleString()}
              </h3>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">First Down Payment</span>
              <h3 className="text-2xl font-bold">
                NGN{product.firstDownPayment.toLocaleString()}
              </h3>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <span className="text-sm text-gray-400">12 Monthly Repayments</span>
              <h3 className="text-2xl font-bold">
                NGN{product.monthlyRepayment.toLocaleString()}
              </h3>
            </div>
          </div>

          {/* More Details */}
          <div className="mt-6 text-right">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleProductClick(product)}
            >
I want to get this            </button>
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
