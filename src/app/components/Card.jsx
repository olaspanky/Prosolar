'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductModal from './ProductModal';



const SkeletonCard = () => (
  <div className="bg-white border border-[#787878] text-[#787878] flex flex-col gap-5 shadow-lg p-5 2xl:p-9 rounded-3xl lg:rounded-[16px] overflow-hidden animate-pulse h-full">
    <div className="flex flex-col lg:h-[70px] lg:gap-2">
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>

    <div className="w-full border my-1 border-[#292ECF]"></div>

    <div className="flex flex-col lg:gap-5 gap-2 text-black lg:h-[100px] 2xl:h-[120px]">
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-full"></div>
    </div>

    <div className="flex flex-col lg:gap-3 2xl:gap-7 gap-3 lg:h-[150px] 2xl:h-[250px]">
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-3 bg-gray-300 rounded w-3/4"></div>
        ))}
      </div>
    </div>

    <div className="w-full border border-[#292ECF]"></div>

    <div className="flex justify-between lg:mt-5 gap-3">
      <div className="w-1/2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-5 bg-gray-300 rounded w-full"></div>
      </div>
      <div className="w-1/2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-5 bg-gray-300 rounded w-full"></div>
      </div>
    </div>

    <div className="flex w-full justify-center items-center">
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

const SolarProductCard = ({ pathname }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const currentPath = window.location.pathname;
  
    const storedProducts = localStorage.getItem(
      currentPath === '/solar/scs' ? 'commercialProducts' : 'homeProducts'
    );
  
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      setIsLoading(false);
    } else {
      fetchProducts(currentPath);
    }
  }, []);
  
  const fetchProducts = async (currentPath) => {
    setIsLoading(true); // Set loading state before fetching
    try {
      const apiUrl = currentPath === '/solar/scs'
        ? '/api/solarpackages/commercial'
        : '/api/solarpackages/home';
  
      // Add a cache-busting query parameter to the URL
      const timestamp = Date.now(); // Unique value for each request
      const urlWithCacheBusting = `${apiUrl}?cache=${timestamp}`;
  
      // Fetch data with cache disabled
      const res = await fetch(urlWithCacheBusting, {
        cache: 'no-store', // Force the browser to bypass its cache
      });
  
      if (!res.ok) throw new Error("Failed to fetch products");
  
      const data = await res.json();
      setProducts(data); // Update state with fresh data
  
      // Optionally, you can remove localStorage caching to avoid stale data
      // localStorage.removeItem(currentPath === '/solar/scs' ? 'commercialProducts' : 'homeProducts');
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setIsLoading(false); // Always reset loading state
    }
  };

  console.log("products are", products)
  


  

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 font-jak p-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 lg:gap-5">
        {[...Array(4)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 font-jak lg:p-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 lg:gap-5">
      {products.map((product) => (
        <div
          key={product._id} // Use _id for key to ensure consistency
          className="bg-white border border-[#787878] text-[#787878] flex flex-col gap-5 shadow-lg p-5 2xl:p-9 rounded-3xl lg:rounded-[16px] overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col lg:h-[70px] lg:gap-2">
            <h3 className="text-md lg:text-[16px] 2xl:text-[20px] font-bold text-black">{product.component} Solar Package</h3>
            <p className="text-[#22222] mt-2 font-jak text-sm lg:text-[12px] 2xl:text-[16px]">Suitable for {product.suitableFor}</p>
          </div>

          <div className="w-full border my-1 border-[#292ECF]"></div>
          <div className="flex flex-col lg:gap-5 gap-2  text-black lg:h-[100px]  2xl:h-[120px]">
            <h1 className="  text-sm lg:text-[14px] 2xl:text-[16px]  font-bold text-black ">System Components</h1>
            <h3 className="text-sm lg:text-[12px] 2xl:text-[16px] leading-normal text-[#787878]">
  {product.components.split(', ').map((component, index) => (
    <div key={index} className="mb-2 text-sm lg:text-[12px] 2xl:text-[16px]">{component}</div>
  ))}
</h3>
          </div>

            {/* Appliances Section */}
            <div className="flex flex-col lg:gap-3 2xl:gap-7 gap-3 lg:h-[150px] 2xl:h-[250px]">
            <h1 className="text-sm lg:text-[14px] 2xl:text-[16px] font-bold text-black">Appliances it can Power </h1>
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
              <h1 className="text-sm lg:text-[16px] text-center font-bold text-black"><span className='font-serif'> &#x20A6;</span>{product.OutrightPayment.toLocaleString()}</h1>
            </div>
            <div>
              <span className="text-sm lg:text-[14px]">Pay small small</span>
              <h1 className="text-sm lg:text-[16px] text-center font-bold text-black">  <span className='font-serif'> &#x20A6;</span>
{product.monthlyRepayment.toLocaleString()}</h1>
            </div>
          </div>

          {/* Button to see more details */}
          <div className="flex w-full bg-red-200 lg:mt-5 justify-center  items-center">
            <Link className='w-full' href={`/solar/products/${product._id}`}>
            <button
  onClick={() => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  }}
  className="bg-[#292ECF] lg:px-5 w-full p-3 lg:py-3 text-white lg:text-[14px] rounded-[4px]"
>
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
