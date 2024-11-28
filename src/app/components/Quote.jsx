import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import html2pdf from 'html2pdf.js';
import { 
  CheckCircle, 
  Download, 
  Send, 
  Sun, 
  Battery, 
  Clock, 
  CreditCard, 
  DollarSign, 
  Zap 
} from 'lucide-react';

const QuoteDetails = ({ quoteData, onClose }) => {
  const quoteRef = useRef();
  const [emailStatus, setEmailStatus] = useState('');

  const handleDownload = () => {
    const element = quoteRef.current;
    const options = {
      margin: 1,
      filename: 'solar_inverter_quote.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(options).save();
  };

  const handleSendEmail = () => {
    // Email sending logic remains the same as previous implementation
  };

  return (
    <div className="bg-gray-50 p-8">

<div className="flex justify-center space-x-4 mt-8 ">
          <button 
            onClick={handleDownload}
            className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            <Download className="mr-2" /> Download PDF
          </button>
          <button 
            onClick={handleSendEmail}
            className="flex items-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
          >
            <Send className="mr-2" /> Send Quote
          </button>
        </div>

        {emailStatus && (
          <p className="text-center mt-4 text-green-600">{emailStatus}</p>
        )}


      <div ref={quoteRef}  className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              <Sun className="mr-3 text-yellow-500" /> Solar Inverter Quote
            </h1>
            <p className="text-gray-600">Comprehensive Solar Energy Solution</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Quote ID: {quoteData.id}</p>
            <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="mr-2 text-blue-500" /> System Overview
            </h2>
            <div className="space-y-2">
              <p><strong>Component:</strong> {quoteData.component}</p>
              <p><strong>Suitable For:</strong> {quoteData.suitableFor}</p>
              <p><strong>Included Components:</strong> {quoteData.components}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Battery className="mr-2 text-green-500" /> System Components
            </h2>
            <ul className="space-y-2">
              {Object.values(quoteData.appliances).map((appliance, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 text-green-400" /> {appliance}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financial Details */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <DollarSign className="mr-2 text-green-600" /> Financial Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Outright Payment:</strong> ₦{quoteData.OutrightPayment.toLocaleString()}</p>
              <p><strong>Monthly Repayment Total:</strong> ₦{quoteData.monthlyRepaymentTotal.toLocaleString()}</p>
              <p><strong>First Down Payment:</strong> ₦{quoteData.monthlyRepaymentFirstDown.toLocaleString()}</p>
            </div>
            <div>
              <p><strong>Monthly Installment:</strong> ₦{quoteData.monthlyRepayment.toLocaleString()}</p>
              <p><strong>Payback Period:</strong> {quoteData.payBackPeriod} years</p>
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Clock className="mr-2 text-blue-600" /> Environmental Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Annual Fuel Savings:</strong> ₦{quoteData.annualFuelSavings.toLocaleString()}</p>
              <p><strong>Litres of Fuel Saved:</strong> {quoteData.litresSaved} litres</p>
            </div>
          </div>
        </div>

        {/* Warranty */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-purple-500" /> Post-Purchase Maintenance
          </h2>
          <p>{quoteData.postMaintanace}</p>
        </div>

        {/* Action Buttons */}
       
      </div>

     
    </div>
  );
};

export default QuoteDetails;
