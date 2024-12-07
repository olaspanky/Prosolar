// "use client"; // Ensure that this is treated as a client-side component
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter from next/router
// import Nav from '../../../components/Nav';
// import ProductModal from '@/app/components/ProductModal';
// import wallet from "../../../../../public/assets/wallet.png";
// import transact from "../../../../../public/assets/transact.png";
// import v2 from "../../../../../public/assets/v2.png";
// import verified from "../../../../../public/assets/verified.png";
// import Image from 'next/image';
// import { useParams } from 'next/navigation';

// const ProductDetails = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); // State to track loading
//   const [error, setError] = useState(null); // State to track errors
//   const { id } = useParams();

//   const [isFromData, setIsFromData] = useState(true);
//   const storedPackageType = localStorage.getItem('packageType'); // Get package type from localStorage
// console.log("product saved is", storedPackageType)

// useEffect(() => {
//   if (!id) return; // Ensure id exists before fetching data

//   const fetchProducts = async () => {
//     const fetchHomeProducts = fetch('/api/solarpackages/home').then(res => res.json());
//     const fetchCommercialProducts = fetch('/api/solarpackages/commercial').then(res => res.json());

//     try {
//       setIsLoading(true); // Set loading to true when fetching starts
//       const [homeData, commercialData] = await Promise.all([fetchHomeProducts, fetchCommercialProducts]);

//       // Combine home and commercial products into one array
//       const allProducts = [...homeData, ...commercialData];

//       // Find the product with the specific _id (not id)
//       const foundProduct = allProducts.find((p) => p._id === id); // Compare _id with the URL id
//       setProduct(foundProduct);

//       setIsLoading(false); // Set loading to false when data is fetched
//     } catch (err) {
//       setIsLoading(false); // Set loading to false if an error occurs
//       setError(err.message); // Set error state
//       console.error("Error fetching product:", err);
//     }
//   };

//   fetchProducts();
// }, [id]); // Re-run when the ID changes


//   console.log("product is", product);

//   // Show loading spinner or message
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl">
//           <h1 className="text-2xl font-bold">Loading...</h1>
//         </div>
//       </div>
//     );
//   }

//   // Show error message or product not found message
//   if (error || !product) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl">
//           <h1 className="text-2xl font-bold">{error || "Product not found"}</h1>
//         </div>
//       </div>
//     );
//   }

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };

//   // Conditional breadcrumb text and link based on the source array
  // const breadcrumbText = isFromData ? "Solar Packages for Home" : "Solar Packages for Offices";
  // const breadcrumbLink = isFromData ? "/solar/shs" : "/solar/scs";

//   return (
//     <div className="bg-gray-100 min-h-screen font-jak text-gray-900">
//       <Nav />

//       {/* Breadcrumb */}
      // <div className="xl:pt-20 px-3 py-5 xl:pl-20 mx-auto text-sm text-gray-600">
      //   <nav className="flex items-center space-x-2">
      //     <a href="/" className="hover:underline text-blue-600">
      //       Home
      //     </a>
      //     <span>/</span>
      //     <a href={breadcrumbLink} className="hover:underline text-blue-600">
      //       {breadcrumbText}
      //     </a>
      //     <span>/</span>
      //     <span className="text-gray-800 font-semibold">{product.component}</span>
      //   </nav>
      // </div>

      // <div className='flex justify-center items-center p-2 xl:p-20'>
      //   <div className='max-w-[1440px]'>
      //     <h1 className="text-xl lg:text-[48px] font-bold text-black font-extrabold mb-4">{product.component}</h1>

      //     <div className='grid lg:grid-cols-12 gap-5 pt-3 xl:pt-10'>
      //       <div className=" col-span-9">
      //         <div className="">

      //           {/* Appliances */}
      //           <div className="mb-6">
      //             <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">Appliances It Can Power</h2>
      //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] lg:text-[20px]">
      //               {product.suitableFor}
      //             </div>
      //           </div>

      //           {/* System Components */}
      //           <div className="mb-6">
      //             <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">System Components</h2>
      //             <p className="text-gray-600 text-[14px] lg:text-[20px]">{product.components}</p>
      //           </div>

      //           {/* Payment Options */}
      //           <div className="mb-6">
      //             <h2 className="text-[16px] lg:text-[24px] font-semibold text-black mb-2">Payment Plans</h2>

      //             {/* Outright Payment */}
      //             <div className="flex  items-center font-jak text-[14px] lg:text-[20px] gap-3 rounded-lg  mb-4">
      //               <h3 className="  text-[#222222] text-[16px] lg:text-[24px]">Outright Payment: </h3>
      //               <h4 className=" font-bold text-gray-900 ">
      //                 &#8358; {product.OutrightPayment.toLocaleString()}
      //               </h4>
      //             </div>

      //             {/* Pay Small Small */}
      //             <div className="rounded-lg ">
      //               <h3 className="text-[#222222] text-[16px] lg:text-[24px]">Pay Small Small</h3>
      //               <ul className="text-gray-700 mt-2 flex flex-col gap-3 text-[14px] lg:text-[20px]">
      //                 <li>First Down Payment: <span className="  font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentFirstDown.toLocaleString()}</span></li>
      //                 <li>12 Monthly Repayments: <span className="  font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepayment.toLocaleString()}</span></li>
      //                 <li>Total Cost: <span className=" font-bold text-gray-900 mt-2">&#8358;{product.monthlyRepaymentTotal.toLocaleString()}</span></li>
      //               </ul>
      //             </div>
      //           </div>

      //           {/* Action Button */}
      //           <div className="text-center mt-6">
      //             <button
      //               className="bg-[#292ECF] text-white py-3 px-6 w-full rounded-lg font-semibold hover:bg-[#292ECF] transition duration-300"
      //               onClick={() => handleProductClick(product)}
      //             >
      //               I Want This
      //             </button>
      //           </div>
      //         </div>
      //       </div>

      //       <div className='col-span-3 text-[14px] lg:text-[20px]  text-[#787878]'>
      //         <div className='flex flex-col gap-2 lg:gap-5'>
      //           <div className='flex gap-3'>
      //             <Image src={wallet} className='w-auto h-5 lg:h-9' />
      //             <p>{product.annualFuelSavings} Cost savings per year</p>
      //           </div>
      //           <div className='flex gap-3'>
      //             <Image src={transact} className='w-auto h-5 lg:h-9' />
      //             <p>{product.payBackPeriod} years Return on investment</p>
      //           </div>
      //           <div className='flex gap-3'>
      //             <Image src={v2} className='w-auto h-5 lg:h-9' />
      //             <p>{product.litresSaved} litres of fuel saved per annum</p>
      //           </div>
      //           <div className='flex gap-3'>
      //             <Image src={verified} className='w-auto h-5 lg:h-9' />
      //             <p>{product.postMaintanace}</p>
      //           </div>
      //         </div>
      //       </div>

      //     </div>
      //   </div>
      // </div>

//       {/* Product Modal */}
//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default ProductDetails;



"use client"; // Ensure that this is treated as a client-side component
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Nav from "../../../components/Nav";
import Image from "next/image";
import ProductModal from "@/app/components/ProductModal";
import wallet from "../../../../../public/assets/wallet.png";
import transact from "../../../../../public/assets/transact.png";
import v2 from "../../../../../public/assets/v2.png";
import verified from "../../../../../public/assets/verified.png";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-6 w-48 mb-4 rounded"></div>
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="col-span-9">
        <div className="bg-gray-200 h-6 w-40 mb-2 rounded"></div>
        <div className="bg-gray-200 h-4 w-full mb-4 rounded"></div>
        <div className="bg-gray-200 h-6 w-40 mb-2 rounded"></div>
        <div className="bg-gray-200 h-4 w-full mb-4 rounded"></div>
        <div className="bg-gray-200 h-6 w-40 mb-2 rounded"></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-200 h-4 w-full rounded"></div>
          <div className="bg-gray-200 h-4 w-full rounded"></div>
        </div>
        <div className="mt-6 bg-gray-300 h-10 w-full rounded"></div>
      </div>
      <div className="col-span-3 space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
          <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
          <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
          <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
          <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFromData, setIsFromData] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      const fetchHomeProducts = fetch("/api/solarpackages/home").then((res) =>
        res.json()
      );
      const fetchCommercialProducts = fetch("/api/solarpackages/commercial").then((res) => res.json());

      try {
        setIsLoading(true);
        const [homeData, commercialData] = await Promise.all([
          fetchHomeProducts,
          fetchCommercialProducts,
        ]);

        const allProducts = [...homeData, ...commercialData];
        const foundProduct = allProducts.find((p) => p._id === id);
        setProduct(foundProduct);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    fetchProducts();
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const breadcrumbText = isFromData ? "Solar Packages for Home" : "Solar Packages for Offices";
  const breadcrumbLink = isFromData ? "/solar/shs" : "/solar/scs";

  return (
    <div className="bg-gray-100 min-h-screen font-jak text-gray-900">
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
      <div className='flex justify-center items-center p-2 xl:p-20'>
        <div className='max-w-[1440px]'>
          <h1 className="text-xl lg:text-[48px] font-bold text-black font-extrabold mb-4">{product.component}</h1>

          <div className='grid lg:grid-cols-12 gap-5 pt-3 xl:pt-10'>
            <div className=" col-span-9">
              <div className="">

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
                  <Image src={wallet} className='w-auto h-5 lg:h-9' />
                  <p>{product.annualFuelSavings} Cost savings per year</p>
                </div>
                <div className='flex gap-3'>
                  <Image src={transact} className='w-auto h-5 lg:h-9' />
                  <p>{product.payBackPeriod} years Return on investment</p>
                </div>
                <div className='flex gap-3'>
                  <Image src={v2} className='w-auto h-5 lg:h-9' />
                  <p>{product.litresSaved} litres of fuel saved per annum</p>
                </div>
                <div className='flex gap-3'>
                  <Image src={verified} className='w-auto h-5 lg:h-9' />
                  <p>{product.postMaintanace}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductDetails;
