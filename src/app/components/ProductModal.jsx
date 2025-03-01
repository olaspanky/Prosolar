import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const ProductModal = ({ product, onClose, plan }) => {
  const modalRef = useRef();
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

  const generatePDF = (formData) => {
    const doc = new jsPDF();

    try {
      // Add Logo
      const logoImg = new Image();
      logoImg.src = '/logo.png'; // Ensure in public/logo.png
      doc.addImage(logoImg, 'PNG', 14, 10, 40, 20);

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
      doc.text('INVOICE', 105, 55, { align: 'center' });

      // Invoice Number and Date
      const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      const currentDate = new Date();
      const dueDate = new Date(currentDate);
      dueDate.setDate(currentDate.getDate() + 7);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      autoTable(doc, {
        startY: 65,
        theme: 'plain',
        body: [
          [
            { content: 'Invoice Number:', styles: { fontStyle: 'bold' } },
            invoiceNumber,
            { content: 'Invoice Date:', styles: { fontStyle: 'bold' } },
            currentDate.toLocaleDateString('en-GB'),
          ],
          [
            { content: 'Due Date:', styles: { fontStyle: 'bold' } },
            dueDate.toLocaleDateString('en-GB'),
            { content: 'Terms:', styles: { fontStyle: 'bold' } },
            'Due on Receipt',
          ],
        ],
        styles: { cellPadding: 2 },
        columnStyles: { 0: { fontStyle: 'bold' } },
      });

      // Bill To Section
      doc.text('Bill To:', 14, 95);
      doc.text(formData?.name || '', 14, 101);
      doc.text(formData?.email || '', 14, 107);
      doc.text(formData?.phone || '', 14, 113);
      doc.text(formData?.location || '', 14, 119);

      // Item Details Section (Dynamic from product)
      doc.setFont('helvetica', 'bold');
      doc.text('Item & Description', 14, 129);
      doc.text('Qty', 120, 129);
      doc.text('Rate', 140, 129);
      doc.text('Amount', 170, 129);

      // Parse product data
      const componentsArray = product.components.split(', ');
      const items = componentsArray.map((component, index) => {
        // Simplified qty and rate assumptions (customize as needed)
        const qty = index === 1 ? 9 : 1; // 9 for solar panels, 1 for others (adjust based on real data)
        const rate = parseFloat(product.OutrightPayment.replace(/[^0-9.]/g, '')) / componentsArray.length; // Even split for demo
        const amount = qty * rate;
        return {
          description: component.trim(),
          qty,
          rate,
          amount,
        };
      });

      let startY = 135;
      items.forEach((item) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(item.description, 14, startY);
        doc.text(item.qty.toString(), 120, startY);
        doc.text(item.rate.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }), 140, startY);
        doc.text(item.amount.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }), 170, startY);
        startY += 6;
      });

      // Sub Total and Total (Dynamic from product and plan)
      const total = plan === 'OutrightPayment'
        ? parseFloat(product.OutrightPayment.replace(/[^0-9.]/g, ''))
        : parseFloat(product.monthlyRepaymentTotal.replace(/[^0-9.]/g, ''));
      
      doc.setFont('helvetica', 'bold');
      doc.text('Sub Total', 140, startY + 10);
      doc.text(total.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }), 170, startY + 10);
      doc.text('Total', 140, startY + 16);
      doc.text(total.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' }), 170, startY + 16);

      // Notes and Bank Details
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Notes:', 14, startY + 30);
      doc.text('Bank details:', 14, startY + 36);
      doc.text('Account Number: 8839247019', 14, startY + 42);
      doc.text('Account Name: Prosolar Multiservices Limited', 14, startY + 48);
      doc.text('Bank Name: FCMB', 14, startY + 54);

      // Terms & Conditions (Dynamic from product)
      doc.text('Terms & Conditions:', 14, startY + 60);
      doc.text(product.postMaintanace || 'Manufacturer\'s Warranty terms and conditions apply.', 14, startY + 66);
      doc.text('Backup time from the batteries depends on the load on the system.', 14, startY + 72);
      doc.text('Prosolar Energy provides 1 Year post-installation maintenance for FREE.', 14, startY + 78);
      doc.text('NOTE: Client to make 90% down payment, 10% balance within 72 hours post-completion.', 14, startY + 84);

      return doc.output('blob');
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const pdfBlob = generatePDF(formData);

      const reader = new FileReader();
      reader.onloadend = async () => {
        const pdfBase64 = reader.result.split(',')[1];
        const response = await fetch('/api/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            product,
            paymentPlan: plan,
            pdfBlob: pdfBase64,
          }),
        });

        setIsSubmitting(false);

        if (response.ok) {
          window.location.href = '/solar/thank-you';
        } else {
          setIsSuccess(false);
        }
      };
      reader.readAsDataURL(pdfBlob);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setIsSuccess(false);
    }
  };

  // Form UI remains unchanged
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full lg:p-8 p-2 m-2 relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 lg:top-4 lg:right-4 text-red-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
          inert
        >
          <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="lg:text-3xl font-semibold text-center my-6">Let's Get You Started</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location/City</label>
            <input
              id="location"
              type="text"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${isSubmitting ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {isSuccess === true && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-r bg-[#292ECF] text-white text-center p-8 rounded-xl shadow-2xl max-w-md w-full">
              <div className="mb-4">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
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
                Your solar system quote has been processed. A detailed PDF has been sent to your email.
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
                  xmlns="https://www.w3.org/2000/svg"
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
                We couldn't process your quote at the moment. Please try again later or contact our support.
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