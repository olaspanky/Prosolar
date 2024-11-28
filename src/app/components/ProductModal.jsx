import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef();
  const [paymentPlan, setPaymentPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

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

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePaymentPlanChange = (event) => {
    setPaymentPlan(event.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Quote for Solar System', 10, 10);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, 30);
    doc.text(`Email: ${formData.email}`, 10, 40);
    doc.text(`Phone: ${formData.phone}`, 10, 50);
    doc.text(`Location: ${formData.location}`, 10, 60);

    doc.text(`Component: ${product.component}`, 10, 80);
    doc.text(`Suitable For: ${product.suitableFor}`, 10, 90);
    doc.text(`Components: ${product.components}`, 10, 100);
    doc.text('Appliances:', 10, 110);
    doc.text(`- ${product.appliances.appliance1}`, 20, 120);
    doc.text(`- ${product.appliances.appliance2}`, 20, 130);

    doc.setFont('helvetica', 'bold');
    doc.text('Payment Plan Details:', 10, 150);
    if (paymentPlan === 'Outright Payment') {
      doc.text(`Total: ₦${product.OutrightPayment.toLocaleString()}`, 20, 160);
    } else {
      doc.text(`First Down Payment: ₦${product.monthlyRepaymentFirstDown.toLocaleString()}`, 20, 160);
      doc.text(`Monthly Repayment: ₦${product.monthlyRepayment.toLocaleString()}`, 20, 170);
      doc.text(`Total (Over Tenure): ₦${product.monthlyRepaymentTotal.toLocaleString()}`, 20, 180);
    }

    return doc.output('blob');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const pdfBlob = generatePDF();

    const reader = new FileReader();
    reader.onloadend = async () => {
      const pdfBase64 = reader.result.split(',')[1];
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          paymentPlan,
          product,
          pdfBlob: pdfBase64,
        }),
      });

      setIsSubmitting(false);

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(null);
        }, 3000);
      } else {
        setIsSuccess(false);
      }
    };
    reader.readAsDataURL(pdfBlob);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6">Let’s Get You Started</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location/City
            </label>
            <input
              id="location"
              type="text"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Plan</label>
            <div className="flex space-x-4">
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
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${
              isSubmitting ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {isSuccess === true && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-green-500 text-white text-center p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
              <p>Your quote has been successfully submitted and sent to your email.</p>
            </div>
          </div>
        )}
        {isSuccess === false && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-red-500 text-white text-center p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Submission Failed</h3>
              <p>Please try again later.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
