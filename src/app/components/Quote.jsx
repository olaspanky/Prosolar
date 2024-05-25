import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Quote = () => {
  const quoteRef = useRef();

  const handleDownload = () => {
    const element = quoteRef.current;
    const opt = {
      margin: 1,
      filename: 'quote.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="p-8">
      <div ref={quoteRef} className="bg-white p-6 rounded shadow-md">
        <div className="text-center mb-4">
          <h1 className="text-md lg:text-xl font-bold">Invoice</h1>
          <p># INV-000580</p>
          <p>Balance Due: NGN604,900.00</p>
        </div>
        <div className="mb-4">
          <h2 className="text-sm lg:text-lg font-semibold">Powered By</h2>
          <p>Prosolar Multiservices Limited</p>
          <p>08029068303</p>
          <p>info@prosolarng.com | www.prosolarng.com</p>
          <p>Suite 4, Third Floor, G Wing, Block A, Bassan Plaza, Central Business District, Abuja, Federal Capital Territory 900109, Nigeria</p>
        </div>
        <div className="mb-4">
          <h2 className="text-sm lg:text-lg font-semibold">Bill To</h2>
          <p>Mr. Otunba</p>
          <p>Subject: Installation of a 1KVA Inverter System</p>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">Item & Description</th>
              <th className="text-right p-2">Qty</th>
              <th className="text-right p-2">Rate</th>
              <th className="text-right p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, desc: '12V 220Ah Tubular battery', qty: 1, rate: 290000, amount: 290000 },
              { id: 2, desc: '200W Mono Solar Panel', qty: 1, rate: 80500, amount: 80500 },
              { id: 3, desc: '40A PWM Solar Charge Controller', qty: 1, rate: 25000, amount: 25000 },
              { id: 4, desc: 'Solar DC Cable (30m of 6mm)', qty: 25, rate: 4000, amount: 100000 },
              { id: 5, desc: '1.5mm of 30m, Inverter Load Cable', qty: 30, rate: 380, amount: 11400 },
              { id: 6, desc: 'Solar Panel Mounting Rack System', qty: 1, rate: 16000, amount: 16000 },
              { id: 7, desc: 'Battery Rack', qty: 1, rate: 15000, amount: 15000 },
              { id: 8, desc: 'Installation Accessories', qty: 1, rate: 17000, amount: 17000 },
              { id: 9, desc: 'Labour & Professional Fee', qty: 1, rate: 40000, amount: 40000 },
              { id: 10, desc: 'Transportation', qty: 1, rate: 10000, amount: 10000 },
            ].map(item => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.desc}</td>
                <td className="p-2 text-right">{item.qty}</td>
                <td className="p-2 text-right">{item.rate.toLocaleString()}</td>
                <td className="p-2 text-right">{item.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right mb-4">
          <p>Sub Total: 604,900.00</p>
          <p>Total: NGN604,900.00</p>
          <p>Balance Due: NGN604,900.00</p>
        </div>
        <div className="mb-4">
          <p>Invoice Date: 08 May 2024</p>
          <p>Terms: Custom</p>
          <p>Due Date: 15 May 2024</p>
        </div>
        <div className="mb-4">
          <h2 className="text-sm lg:text-lg font-semibold">Notes</h2>
          <p>Bank details.</p>
          <p>Account Number: 8839247019</p>
          <p>Account Name: Prosolar Multiservices Limited</p>
          <p>Bank Name: FCMB</p>
          <p>We look forward to serving you.</p>
        </div>
        <div>
          <h2 className="text-sm lg:text-lg font-semibold">Terms & Conditions</h2>
          <p>Manufacturer Warranty terms and conditions applies.</p>
          <p>Backup time from the batteries is dependent on the load on the system. Lower loads provides higher backup time.</p>
          <p>Client is to make 90% down payment and 10% balance within 72 hours after completion of project.</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button 
          onClick={handleDownload} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Quote;
