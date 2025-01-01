// import React, { useEffect, useRef, useState } from 'react';
// import { jsPDF } from 'jspdf';

// const ProductModal = ({ product, onClose }) => {
//   const modalRef = useRef();
//   const [paymentPlan, setPaymentPlan] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [onClose]);

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handlePaymentPlanChange = (event) => {
//     setPaymentPlan(event.target.value);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFont('helvetica', 'bold');
//     doc.setFontSize(18);
//     doc.text('Quote for Solar System', 10, 10);

//     doc.setFont('helvetica', 'normal');
//     doc.setFontSize(12);
//     doc.text(`Name: ${formData.name}`, 10, 30);
//     doc.text(`Email: ${formData.email}`, 10, 40);
//     doc.text(`Phone: ${formData.phone}`, 10, 50);
//     doc.text(`Location: ${formData.location}`, 10, 60);

//     doc.text(`Component: ${product.component}`, 10, 80);
//     doc.text(`Suitable For: ${product.suitableFor}`, 10, 90);
//     doc.text(`Components: ${product.components}`, 10, 100);
//     doc.text('Appliances:', 10, 110);
//     doc.text(`- ${product.appliances.appliance1}`, 20, 120);
//     doc.text(`- ${product.appliances.appliance2}`, 20, 130);

//     doc.setFont('helvetica', 'bold');
//     doc.text('Payment Plan Details:', 10, 150);
//     if (paymentPlan === 'Outright Payment') {
//       doc.text(`Total: ₦${product.OutrightPayment.toLocaleString()}`, 20, 160);
//     } else {
//       doc.text(`First Down Payment: ₦${product.monthlyRepaymentFirstDown.toLocaleString()}`, 20, 160);
//       doc.text(`Monthly Repayment: ₦${product.monthlyRepayment.toLocaleString()}`, 20, 170);
//       doc.text(`Total (Over Tenure): ₦${product.monthlyRepaymentTotal.toLocaleString()}`, 20, 180);
//     }

//     return doc.output('blob');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const pdfBlob = generatePDF();

//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const pdfBase64 = reader.result.split(',')[1];
//       const response = await fetch('/api/submitForm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           location: formData.location,
//           paymentPlan,
//           product,
//           pdfBlob: pdfBase64,
//         }),
//       });

//       setIsSubmitting(false);

//       if (response.ok) {
//         setIsSuccess(true);
//         setTimeout(() => {
//           onClose();
//           setIsSuccess(null);
//         }, 3000);
//       } else {
//         setIsSuccess(false);
//       }
//     };
//     reader.readAsDataURL(pdfBlob);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
//           aria-label="Close"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <h2 className="text-3xl font-semibold text-center mb-6">Let’s Get You Started</h2>
        // <form className="space-y-4" onSubmit={handleSubmit}>
        //   <div>
        //     <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        //       Full Name
        //     </label>
        //     <input
        //       id="name"
        //       type="text"
        //       placeholder="Enter your full name"
        //       value={formData.name}
        //       onChange={handleInputChange}
        //       className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        //       Email
        //     </label>
        //     <input
        //       id="email"
        //       type="email"
        //       placeholder="Enter your email"
        //       value={formData.email}
        //       onChange={handleInputChange}
        //       className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        //       Phone Number
        //     </label>
        //     <input
        //       id="phone"
        //       type="tel"
        //       placeholder="Enter your phone number"
        //       value={formData.phone}
        //       onChange={handleInputChange}
        //       className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        //       Location/City
        //     </label>
        //     <input
        //       id="location"
        //       type="text"
        //       placeholder="Enter your location"
        //       value={formData.location}
        //       onChange={handleInputChange}
        //       className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        //     />
        //   </div>
        //   <div>
        //     <label className="block text-sm font-medium text-gray-700">Payment Plan</label>
        //     <div className="flex space-x-4">
        //       <label className="inline-flex items-center">
        //         <input
        //           type="radio"
        //           name="paymentPlan"
        //           value="Outright Payment"
        //           checked={paymentPlan === 'Outright Payment'}
        //           onChange={handlePaymentPlanChange}
        //           className="form-radio"
        //         />
        //         <span className="ml-2">Outright Payment</span>
        //       </label>
        //       <label className="inline-flex items-center">
        //         <input
        //           type="radio"
        //           name="paymentPlan"
        //           value="Pay Small Small"
        //           checked={paymentPlan === 'Pay Small Small'}
        //           onChange={handlePaymentPlanChange}
        //           className="form-radio"
        //         />
        //         <span className="ml-2">Pay Small Small</span>
        //       </label>
        //     </div>
        //   </div>
        //   <button
        //     type="submit"
        //     className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${
        //       isSubmitting ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'
        //     }`}
        //     disabled={isSubmitting}
        //   >
        //     {isSubmitting ? 'Submitting...' : 'Submit'}
        //   </button>
        // </form>

//         {isSuccess === true && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-green-500 text-white text-center p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
//               <p>Your quote has been successfully submitted and sent to your email.</p>
//             </div>
//           </div>
//         )}
//         {isSuccess === false && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-red-500 text-white text-center p-6 rounded shadow-md">
//               <h3 className="text-xl font-bold mb-2">Submission Failed</h3>
//               <p>Please try again later.</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import ZohoForm from './Zohoform';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef();
  // const [paymentPlan, setPaymentPlan] = useState('');
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

  // const handlePaymentPlanChange = (event) => {
  //   setPaymentPlan(event.target.value);
  // };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Logo
    try {
      const logoImg = new Image();
      logoImg.src = '/lgo.png';
      
      // Wait for logo to load (synchronous approach for simplicity)
      doc.addImage(logoImg, 'PNG', 14, 10, 40, 0);
    } catch (error) {
      console.error('Logo could not be added:', error);
    }

    // Company Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Prosolar Multiservices Limited', 105, 25, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Suite 4, Third Floor, G Wing, Block A, Bassan Plaza,', 105, 32, { align: 'center' });
    doc.text('Central Business District, Abuja', 105, 37, { align: 'center' });
    doc.text('08029068303 | info@prosolarng.com | www.prosolarng.com', 105, 42, { align: 'center' });

    // Invoice Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('SOLAR SYSTEM QUOTATION', 105, 55, { align: 'center' });

    // Invoice Number and Date
    const invoiceNumber = `QUO-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.autoTable({
      startY: 65,
      theme: 'plain',
      body: [
        [
          { content: 'Quotation Number:', styles: { fontStyle: 'bold' } },
          invoiceNumber,
          { content: 'Quotation Date:', styles: { fontStyle: 'bold' } },
          currentDate.toLocaleDateString('en-GB')
        ],
        [
          { content: 'Valid Until:', styles: { fontStyle: 'bold' } },
          dueDate.toLocaleDateString('en-GB'),
          { content: 'Terms:', styles: { fontStyle: 'bold' } },
          'Custom'
        ]
      ],
      styles: { cellPadding: 2 },
      columnStyles: { 0: { fontStyle: 'bold' } }
    });

    // Bill To Section
    doc.text('Bill To:', 14, 95);
    doc.text(formData.name, 14, 101);
    doc.text(formData.email, 14, 107);
    doc.text(formData.phone, 14, 113);
    doc.text(formData.location, 14, 119);

    // Product Details Section
    doc.setFont('helvetica', 'bold');
    doc.text('Product Details:', 14, 129);
    
    const productDetailsBody = [
      ['Component', product.component],
      ['Suitable For', product.suitableFor],
      ['Included Components', product.components]
    ];

    doc.autoTable({
      startY: 135,
      body: productDetailsBody,
      theme: 'plain',
      styles: { fontSize: 10 },
      columnStyles: { 
        0: { cellWidth: 50, fontStyle: 'bold' },
        1: { cellWidth: 130 }
      }
    });

    // Appliances Section
    doc.setFont('helvetica', 'bold');
    doc.text('System Components:', 14, doc.previousAutoTable.finalY + 10);
    
    const appliancesBody = [
      ['Solar Panels', product.appliances.appliance1],
      ['Inverter', product.appliances.appliance2],
      ['Battery', product.appliances.appliance3],
      ['Controller', product.appliances.appliance4]
    ];

    doc.autoTable({
      startY: doc.previousAutoTable.finalY + 16,
      body: appliancesBody,
      theme: 'plain',
      styles: { fontSize: 10 },
      columnStyles: { 
        0: { cellWidth: 50, fontStyle: 'bold' },
        1: { cellWidth: 130 }
      }
    });

    // Financial Details
    doc.setFont('helvetica', 'bold');
    doc.text('Financial Details:', 14, doc.previousAutoTable.finalY + 10);
    
    const financialBody = [
      ['Outright Payment', `₦${product.OutrightPayment.toLocaleString()}`],
      ['Monthly Repayment Total', `₦${product.monthlyRepaymentTotal.toLocaleString()}`],
      ['First Down Payment', `₦${product.monthlyRepaymentFirstDown.toLocaleString()}`],
      ['Monthly Repayment', `₦${product.monthlyRepayment.toLocaleString()}`],
      ['Payback Period', `${product.payBackPeriod} Years`]
    ];

    doc.autoTable({
      startY: doc.previousAutoTable.finalY + 16,
      body: financialBody,
      theme: 'plain',
      styles: { fontSize: 10 },
      columnStyles: { 
        0: { cellWidth: 80, fontStyle: 'bold' },
        1: { cellWidth: 100 }
      }
    });

    // Environmental Impact
    doc.setFont('helvetica', 'bold');
    doc.text('Environmental Impact:', 14, doc.previousAutoTable.finalY + 10);
    
    const environmentBody = [
      ['Annual Fuel Savings', `₦${product.annualFuelSavings.toLocaleString()}`],
      ['Litres of Fuel Saved', `${product.litresSaved.toLocaleString()} Litres`]
    ];

    doc.autoTable({
      startY: doc.previousAutoTable.finalY + 16,
      body: environmentBody,
      theme: 'plain',
      styles: { fontSize: 10 },
      columnStyles: { 
        0: { cellWidth: 80, fontStyle: 'bold' },
        1: { cellWidth: 100 }
      }
    });

    // Maintenance and Warranty
    doc.setFont('helvetica', 'bold');
    doc.text('Maintenance & Warranty:', 14, doc.previousAutoTable.finalY + 10);
    
    doc.setFont('helvetica', 'normal');
    doc.text(product.postMaintanace, 14, doc.previousAutoTable.finalY + 16, {
      maxWidth: 180,
      fontSize: 10
    });

    // Payment Terms
    doc.setFontSize(8);
    doc.text('Payment Terms:', 14, doc.previousAutoTable.finalY + 40);
    doc.text('- Client is to make 90% down payment', 14, doc.previousAutoTable.finalY + 44);
    doc.text('- 10% balance within 72 hours after completion of project', 14, doc.previousAutoTable.finalY + 48);

    // Bank Details
    doc.text('Bank Details:', 14, doc.previousAutoTable.finalY + 56);
    doc.text('Account Number: 8839247019', 14, doc.previousAutoTable.finalY + 60);
    doc.text('Account Name: Prosolar Multiservices Limited', 14, doc.previousAutoTable.finalY + 64);
    doc.text('Bank Name: FCMB', 14, doc.previousAutoTable.finalY + 68);

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
          // paymentPlan,
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
        }, 10000);
      } else {
        setIsSuccess(false);
      }
    };
    reader.readAsDataURL(pdfBlob);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full lg:p-8 p-2 m-2 relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-1  lg:top-4 lg:right-4 text-red-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="lg:text-3xl font-semibold text-center my-6">Let's Get You Started</h2>
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

        <ZohoForm/>

        {isSuccess === true && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-r bg-[#292ECF] text-white text-center p-8 rounded-xl shadow-2xl max-w-md w-full">
              <div className="mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quote Submitted Successfully!</h3>
              <p className="text-sm mb-6">
                Your solar system quote has been processed. 
                A detailed PDF has been sent to your email.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={onClose} 
                  className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isSuccess === false && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-r from-red-400 to-red-600 text-white text-center p-8 rounded-xl shadow-2xl max-w-md w-full">
              <div className="mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Submission Failed</h3>
              <p className="text-sm mb-6">
                We couldn't process your quote at the moment. 
                Please try again later or contact our support.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={onClose} 
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;