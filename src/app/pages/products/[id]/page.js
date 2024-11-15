"use client"
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
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Nav />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.component}</h1>
          <p className="text-gray-500 mb-6">{product.home}</p>

          {/* Appliances */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Appliances It Can Power</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(product.appliances).map((appliance, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
                  <p className="text-gray-700 font-medium">{appliance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Components */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">System Components</h2>
            <p className="text-gray-600">{product.components}</p>
          </div>

          {/* Payment Options */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Options</h2>

            {/* Outright Payment */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Outright Payment</h3>
              <p className="text-gray-700">Pay the full amount upfront.</p>
              <h4 className="text-2xl font-bold text-gray-900 mt-2">
                NGN{product.OutrightPayment.toLocaleString()}
              </h4>
            </div>

            {/* Pay Small Small */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Pay Small Small</h3>
              <p className="text-gray-700">Flexible monthly payment option:</p>
              <ul className="text-gray-600 mt-2">
                <li>First Down Payment: NGN{product.monthlyRepaymentFirstDown.toLocaleString()}</li>
                <li>12 Monthly Repayments: NGN{product.monthlyRepayment.toLocaleString()}</li>
                <li>Total Cost: NGN{product.monthlyRepaymentTotal.toLocaleString()}</li>
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-6">
            <button
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
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
