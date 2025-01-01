import React, { useState } from 'react';
import Script from 'next/script';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ZohoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Logo
    try {
      const logoImg = new Image();
      logoImg.src = '/lgo.png';
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
      ['Component', 'Solar System'],
      ['Suitable For', 'Residential'],
      ['Included Components', 'Panels, Inverter, Battery']
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

    // Financial Details
    doc.setFont('helvetica', 'bold');
    doc.text('Financial Details:', 14, doc.previousAutoTable.finalY + 10);
    
    const financialBody = [
      ['Outright Payment', '₦1,500,000'],
      ['Monthly Repayment Total', '₦1,800,000'],
      ['First Down Payment', '₦300,000'],
      ['Monthly Repayment', '₦50,000'],
      ['Payback Period', '3 Years']
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

    // Submit to Zoho CRM
    const zohoForm = document.getElementById('webform5131685000001937009');
    if (zohoForm) {
      zohoForm.submit();
    }

    // Generate PDF
    const pdfBlob = generatePDF();

    // Submit to custom API
    const reader = new FileReader();
    reader.onloadend = async () => {
      const pdfBase64 = reader.result.split(',')[1];
      try {
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
            pdfBlob: pdfBase64,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    };
    reader.readAsDataURL(pdfBlob);
  };

  return (
    <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <form
        id="webform5131685000001937009"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5131685000001937009"
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
      >
        {/* Hidden Inputs */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="806bd8d403c98a55a505965f9d6df98f7543767875865b8fc754479fd8f78585" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="fd4fb529a3bb7e0c44cebd74185e423ee9cafbf787a8f2d56afd298b8d0fcde127a731ce80f3f61dc36d2e61119d3a36" />
        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
        <input type="text" style={{ display: 'none' }} name="returnURL" value="https://prosolarng.com/solar/products" />

        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            aria-required="true"
            aria-label="Last Name"
            maxLength="80"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            aria-required="false"
            aria-label="Email"
            maxLength="100"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            aria-required="false"
            aria-label="Mobile"
            maxLength="30"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            aria-required="false"
            aria-label="City"
            maxLength="100"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            id="formsubmit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type="reset"
            className="ml-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {isSuccess !== null && (
        <div className={`mt-4 p-4 rounded-md ${isSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {isSuccess ? 'Form submitted successfully!' : 'Form submission failed. Please try again.'}
        </div>
      )}

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