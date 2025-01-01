// ZohoForm.jsx
"use client"
import React, { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Script from 'next/script';




const ZohoForm = () => {


  const modalRef = useRef();
  // const [paymentPlan, setPaymentPlan] = useState('');
  const [formData, setFormData] = useState({
    Last_Name: '',
    Email: '',
    Mobile: '',
    City: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  

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
          name: formData.Last_Name,
          email: formData.Email,
          phone: formData.Mobile,
          location: formData.City,
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
    reader.readAsDataURL(pdfBlob);}
  return (
    <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <form
        id="webform5131685000001937009"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5131685000001937009"
        method="POST"
        onSubmit="javascript:document.charset='UTF-8'; return checkMandatory5131685000001937009()"
        acceptCharset="UTF-8"
      >
        {/* Hidden Inputs */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="806bd8d403c98a55a505965f9d6df98f7543767875865b8fc754479fd8f78585" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="fd4fb529a3bb7e0c44cebd74185e423ee9cafbf787a8f2d56afd298b8d0fcde127a731ce80f3f61dc36d2e61119d3a36" />
        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
        <input type="text" style={{ display: 'none' }} name="returnURL" value="https://prosolarng.com" />

        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            aria-required="true"
            aria-label="Last Name"
            maxLength="80"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            aria-required="false"
            aria-label="Email"
            maxLength="100"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
          <label htmlFor="Mobile" className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            id="Mobile"
            name="Mobile"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            aria-required="false"
            aria-label="Mobile"
            maxLength="30"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="City"
            name="City"
            placeholder="Enter your location"
            value={formData.location}
            aria-required="false"
            aria-label="City"
            maxLength="100"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            id="formsubmit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
          <button
            type="reset"
            className="ml-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Scripts */}
      <Script
        id="form-scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function validateEmail5131685000001937009() {
              var form = document.forms['WebToLeads5131685000001937009'];
              var emailFld = form.querySelectorAll('[ftype=email]');
              for (var i = 0; i < emailFld.length; i++) {
                var emailVal = emailFld[i].value;
                if (emailVal.trim().length !== 0) {
                  var atpos = emailVal.indexOf('@');
                  var dotpos = emailVal.lastIndexOf('.');
                  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                    alert('Please enter a valid email address.');
                    emailFld[i].focus();
                    return false;
                  }
                }
              }
              return true;
            }

            function checkMandatory5131685000001937009() {
              var mndFileds = ['Last Name'];
              var fldLangVal = ['Full Name'];
              for (var i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads5131685000001937009'][mndFileds[i]];
                if (fieldObj && fieldObj.value.trim().length === 0) {
                  alert(fldLangVal[i] + ' cannot be empty.');
                  fieldObj.focus();
                  return false;
                }
              }
              if (!validateEmail5131685000001937009()) return false;

              var urlparams = new URLSearchParams(window.location.search);
              if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
                var webform = document.getElementById('webform5131685000001937009');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type', 'hidden');
                smarturlfield.setAttribute('value', urlparams.get('service'));
                smarturlfield.setAttribute('name', 'service');
                webform.appendChild(smarturlfield);
              }

              document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
              return true;
            }

            function tooltipShow5131685000001937009(el) {
              var tooltip = el.nextElementSibling;
              if (tooltip.style.display === 'none') {
                document.querySelectorAll('.zcwf_tooltip_over').forEach(function (t) {
                  t.style.display = 'none';
                });
                tooltip.style.display = 'block';
              } else {
                tooltip.style.display = 'none';
              }
            }
          `,
        }}
      />

      {/* Analytics Tracking Code */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=78fa4ea56bd5d23d9c58922b280b1a1ad2c6707fe717d41ed3ec9d7e8cf8ae10f375362857b6d24279ef1bcd73252dccgid25ca9289320fd14f1043f21dcc135e9bb8ae6f95a6b54dd41819633eccd3eefcgid848067c21d6c7d6b897110077b28cf90d43b759bd1552776afed09d81e1c85dbgidbe559b889c2255b5f5a383d6180402c8d82dac5dfe73a4e1943b22fe27c9cb2c&tw=d4d1245fb00539dbe0d2920fd5905317629f76b3ccbe4a738278863e38708dea"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default ZohoForm;