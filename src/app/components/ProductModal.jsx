import React, { useEffect, useRef, useState } from 'react';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef();
  const [paymentPlan, setPaymentPlan] = useState('');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handlePaymentPlanChange = (event) => {
    setPaymentPlan(event.target.value);
  };

  return (
    <div className="fixed m-1 p-2 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full p-9 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="font-bold font-syne text-4xl text-center mb-4">Let’s Get You Started</h2>
        <h2 className="text-xs font-bold text-center mb-4">
          Please provide a few necessary details to complete your plan selection
        </h2>
        <form className="flex flex-col lg:gap-3">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location/City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter your location or city"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Choose Payment Plan
            </label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentPlan"
                  value="Outright Payment"
                  checked={paymentPlan === 'Outright Payment'}
                  onChange={handlePaymentPlanChange}
                  className="form-radio"
                />
                <span className="ml-2">Outright Payment</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentPlan"
                  value="Pay Small Small"
                  checked={paymentPlan === 'Pay Small Small'}
                  onChange={handlePaymentPlanChange}
                  className="form-radio"
                />
                <span className="ml-2">Pay Small Small</span>
              </label>
            </div>
          </div>
          <div className="flex items-center w-full justify-between">
            <button
              className="bg-[#292ECF] w-full hover:bg-[#292ECF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
