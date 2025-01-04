"use client"; // Required for client-side interactivity in Next.js 14

import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import ZohoForm from './Zohoform';
const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef();
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

  // Load Zoho Analytics Script
  useEffect(() => {
    const analyticsScript = document.createElement('script');
    analyticsScript.id = 'wf_anal';
    analyticsScript.src =
      'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e123ec475c025efe26633f403d3a03f429a93f0adef35b04b42df57eac7c6a038572997ecadfede3cce83744c580b740gidf3800c541156da327b59bcf0f5a2077248081d4cb6e2d7847a2ba9c92c5649fegid5ec9a3e8cbe46561c24156be0ecd9c6b91a24f1ad464551d42f1043da7fe49b4gid777d2abeadff6655f3170630ae23af0d3a451ce31b44a287d5a92a2519f5686f&tw=460d8b5f12ec01fabab5d603d0fafdba80db14e9283877cb10fcda2e88743be4';
    analyticsScript.async = true;
    document.body.appendChild(analyticsScript);

    return () => {
      document.body.removeChild(analyticsScript);
    };
  }, []);

  // Attach custom logic to Zoho form submission
  useEffect(() => {
    const zohoForm = document.getElementById('webform5131685000001937009');
    if (zohoForm) {
      const handleZohoSubmit = async (e) => {
        e.preventDefault();

        // Extract form data
        const formData = {
          name: zohoForm.querySelector('#Last_Name').value,
          email: zohoForm.querySelector('#Email').value,
          phone: zohoForm.querySelector('#Mobile').value,
          location: zohoForm.querySelector('#City').value,
        };

        console.log('Form Data:', formData); // Debugging

        // Run custom logic (PDF generation and backend submission)
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
        } catch (error) {
          console.error('Error generating PDF:', error);
          setIsSubmitting(false);
          setIsSuccess(false);
        }

        // Allow Zoho's default submission logic to proceed
        zohoForm.submit();
      };

      zohoForm.addEventListener('submit', handleZohoSubmit);

      return () => {
        zohoForm.removeEventListener('submit', handleZohoSubmit);
      };
    }
  }, [product, onClose]);

  // Generate PDF for the quote
  const generatePDF = (formData) => {
    const doc = new jsPDF();

    // Add Logo
    try {
        const logoImg = new Image();
        logoImg.src = '/logo.png'; // Ensure the logo path is correct
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
    doc.text('INVOICE', 105, 55, { align: 'center' });

    // Invoice Number and Date
    const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
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
                { content: 'Invoice Number:', styles: { fontStyle: 'bold' } },
                invoiceNumber,
                { content: 'Invoice Date:', styles: { fontStyle: 'bold' } },
                currentDate.toLocaleDateString('en-GB')
            ],
            [
                { content: 'Due Date:', styles: { fontStyle: 'bold' } },
                dueDate.toLocaleDateString('en-GB'),
                { content: 'Terms:', styles: { fontStyle: 'bold' } },
                'Due on Receipt'
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

    // Item Details Section
    doc.setFont('helvetica', 'bold');
    doc.text('Item & Description', 14, 129);
    doc.text('Qty', 120, 129);
    doc.text('Rate', 140, 129);
    doc.text('Amount', 170, 129);

    const items = [
        { description: '6.2kW / 48v Hybrid Inverter', qty: 1, rate: 466000.0, amount: 466000.00 },
        { description: '5kWh Lithium Ion Battery', qty: 1, rate: 1300000.0, amount: 1300000.00 },
        { description: '400W Monocrystalline Solar Panel', qty: 9, rate: 102000.0, amount: 918000.00 },
        { description: 'Solar DC cable (60 of 10mm)', qty: 60, rate: 3000.0, amount: 180000.00 },
        { description: 'Inverter Load Cable (40m of 6mm.sq)', qty: 40, rate: 1000.0, amount: 40000.00 },
        { description: 'Solar Panel Mounting Rack System', qty: 1, rate: 50000.0, amount: 50000.00 },
        { description: 'Battery Rack', qty: 1, rate: 25000.0, amount: 25000.00 },
        { description: 'Installation accessories', qty: 1, rate: 210000.0, amount: 210000.00 },
        { description: 'Labour & Professional Fee', qty: 1, rate: 90000.0, amount: 90000.00 },
        { description: 'Transport and Logistics', qty: 1, rate: 40000.0, amount: 40000.00 }
    ];

    let startY = 135;
    items.forEach(item => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(item.description, 14, startY);
        doc.text(item.qty.toString(), 120, startY);
        doc.text(item.rate.toLocaleString(), 140, startY);
        doc.text(item.amount.toLocaleString(), 170, startY);
        startY += 6;
    });

    // Sub Total and Total
    doc.setFont('helvetica', 'bold');
    doc.text('Sub Total', 140, startY + 10);
    doc.text('NGN3,319,000.00', 170, startY + 10);
    doc.text('Total', 140, startY + 16);
    doc.text('NGN3,319,000.00', 170, startY + 16);

    // Notes and Bank Details
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Notes:', 14, startY + 30);
    doc.text('Bank details:', 14, startY + 36);
    doc.text('Account Number: 8839247019', 14, startY + 42);
    doc.text('Account Name: Prosolar Multiservices Limited', 14, startY + 48);
    doc.text('Bank Name: FCMB', 14, startY + 54);

    // Terms & Conditions
    doc.text('Terms & Conditions:', 14, startY + 60);
    doc.text('Manufacturer\'s Warranty terms and conditions applies.', 14, startY + 66);
    doc.text('Backup time from the batteries is dependent on the load on the system. Lower loads provides higher backup time.', 14, startY + 72);
    doc.text('Prosolar Energy will provide 1 Year post installation maintenance for FREE.', 14, startY + 78);
    doc.text('NOTE: Client is to make 90% down payment and 10% balance within 72 hours after completion of project.', 14, startY + 84);

    return doc.output('blob');
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full lg:p-8 p-2 m-2 relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 lg:top-4 lg:right-4 text-red-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="lg:text-3xl font-semibold text-center my-6">Let's Get You Started</h2>
<ZohoForm />
        {/* Zoho Webform */}
        <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6 hidden">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

          <div id="wf_splash" className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-300 rounded-lg p-3 hidden">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <div className="w-1.5 h-2 border-b-2 border-r-2 border-white transform rotate-45"></div>
            </div>
            <span id="wf_splash_info"></span>
          </div>

          <form
            id="webform5131685000001937009"
            name="WebToLeads5131685000001937009"
            acceptCharset="UTF-8"
          >
            <input type="hidden" name="xnQsjsdp" value="1a0b7e50c5972d6838d569fd4b6f31d6c950ef7f537673c9daaae68a3837c11a" />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input type="hidden" name="xmIwtLD" value="596dba562e6ff5fdd33cc7d879cca8066f3160183ee624464bb444967ea812bf24dadc2db81d9bcea9fdc3ce6c9519d5" />
            <input type="hidden" name="actionType" value="TGVhZHM=" />
            <input type="hidden" name="returnURL" value="null" />

            <div className="text-black font-bold mb-4">Test</div>

            <div className="mb-4">
              <label htmlFor="Last_Name" className="block text-sm font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
              <input type="text" id="Last_Name" name="Last Name" required className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="Email" name="Email" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="Mobile" className="block text-sm font-medium mb-1">Mobile</label>
              <input type="tel" id="Mobile" name="Mobile" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="City" className="block text-sm font-medium mb-1">City</label>
              <input type="text" id="City" name="City" className="w-full p-2 border border-gray-300 rounded" />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${
                  isSubmitting ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
            </div>
          </form>
        </div>

        {/* Success and Error Modals */}
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