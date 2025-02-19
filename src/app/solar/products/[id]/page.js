"use client"; // Ensure that this is treated as a client-side component
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Nav from "../../../components/Nav";
import Image from "next/image";
import ProductModal from "@/app/components/ProductModal";
import wallet from "../../../../../public/assets/i1.svg";
import transact from "../../../../../public/assets/i2.svg";
import v2 from "../../../../../public/assets/i3.svg";
import prsol from "../../../../../public/prsoll.jpg";
import verified from "../../../../../public/assets/i4.svg";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    {/* Skeleton loader content */}
  </div>
);

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null); // New state for selected plan
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    // Fetch product from localStorage
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);

      // Ensure the product matches the ID from the URL
      if (parsedProduct._id === id) {
        setProduct(parsedProduct);
      } else {
        setProduct(null);
      }
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Nav />
        <div className="p-4 xl:pt-20">
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold">{error || "Product not found"}</h1>
        </div>
      </div>
    );
  }

  const handleProductClick = (product, plan) => {
    setSelectedProduct(product);
    setSelectedPlan(plan); // Set the selected plan
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSelectedPlan(null); // Reset the selected plan
  };

  const productKVA = parseFloat(product.component.match(/(\d+(\.\d+)?)kVA/)?.[1] || 0); // Extract kVA from the product component
  const isHomePackage = productKVA < 20;

  const breadcrumbText = isHomePackage
    ? "Solar Packages for Home"
    : "Solar Packages for Business";
  const breadcrumbLink = isHomePackage ? "/solar/shs" : "/solar/scs";

  return (
    <div className="min-h-screen font-jak text-gray-900">
      <Nav />
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
      {/* Content here */}
      <div className="flex justify-center items-center p-2 xl:p-20">
        <div className="flex gap-12">
          <div className="">
            <h1 className="text-xl lg:text-[48px] text-center text-black font-extrabold mb-4">
              {product.component} Solar Package
            </h1>
            <div className="w-full border my-5 border-[#292ECF]"></div>
            <div className="flex flex-col lg:grid xl:grid-cols-12 gap-5 pt-3 xl:pt-10 p-2 lg:p-5">
              <div className="lg:col-span-3">
                <Image src={prsol} alt="Product Image" />
              </div>
              <div className="w-full lg:col-span-6">
                {/* Appliances */}
                <div className="mb-6">
                  <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">
                    Appliances It Can Power
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] lg:text-[20px]">
                    {product.suitableFor}
                  </div>
                </div>

                {/* System Components */}
                <div className="mb-6">
                  <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">
                    System Components
                  </h2>
                  <p className="text-gray-600 text-[14px] lg:text-[20px]">{product.components}</p>
                </div>

                {/* Payment Options */}
                <div className="bg-white shadow-lg rounded-lg p-2 lg:p-6 border border-gray-100">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Payment Plans
                  </h2>
                  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                    {/* Outright Payment */}
                    <div className="md:w-1/2 bg-gray-50 p-1 lg:p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
                          Outright Payment
                        </h3>
                        <div className="text-2xl font-bold text-green-700 mb-4 font-serif">
                          &#8358; {product.OutrightPayment.toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={() => handleProductClick(product, "outright")}
                        className="w-full bg-green-600 text-white text-base py-3 rounded-md hover:bg-green-700 transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2"
                      >
                        <span>Pay Outrightly</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Pay Small Small (Installment) */}
                    <div className="md:w-1/2 bg-blue-50 p-1 lg:p-6 rounded-lg shadow-sm border border-blue-100 flex flex-col">
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
                        Pay Installmentally
                      </h3>
                      <ul className="space-y-3 mb-6 flex-grow">
                        <li className="flex lg:flex-col 2xl:flex-row justify-between 2xl:items-center text-gray-700">
                          <span>First Down Payment:</span>
                          <span className="font-bold text-blue-800 font-serif">
                            &#x20A6;{product.monthlyRepaymentFirstDown.toLocaleString()}
                          </span>
                        </li>
                        <li className="flex lg:flex-col 2xl:flex-row justify-between 2xl:items-center text-gray-700">
                          <span>12 Monthly Repayments:</span>
                          <span className="font-bold text-blue-800 font-serif">
                            &#x20A6; {product.monthlyRepayment.toLocaleString()}
                          </span>
                        </li>
                        <li className="flex lg:flex-col 2xl:flex-row justify-between 2xl:items-center text-gray-700">
                          <span>Total Cost:</span>
                          <span className="font-bold text-blue-900 font-serif">
                            &#x20A6; {product.monthlyRepaymentTotal.toLocaleString()}
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={() => handleProductClick(product, "installment")}
                        className="w-full bg-blue-600 text-white text-base py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2"
                      >
                        <span>Pay in Installments</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:col-span-3 text-[14px] lg:text-[20px] text-[#787878]">
                <div className="flex flex-col gap-2 w-full lg:gap-5">
                  <div className="flex gap-3">
                    <Image src={wallet} alt="Wallet Icon" className="w-auto h-5 lg:h-9" />
                    <p>
                      <span className="font-serif">&#x20A6;</span>
                      {product.annualFuelSavings} Cost savings per year
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Image src={transact} alt="Transaction Icon" className="w-auto h-5 lg:h-9" />
                    <p>{product.payBackPeriod} years Return on investment</p>
                  </div>
                  <div className="flex gap-3">
                    <Image src={v2} alt="V2 Icon" className="w-auto h-5 lg:h-9" />
                    <p>{product.litresSaved} litres of fuel saved per annum</p>
                  </div>
                  <div className="flex gap-3">
                    <Image src={verified} alt="Verified Icon" className="w-auto h-5 lg:h-9" />
                    <p>{product.postMaintanace}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          plan={selectedPlan} // Pass the selected plan to the modal
        />
      )}
    </div>
  );
};

export default ProductDetails;