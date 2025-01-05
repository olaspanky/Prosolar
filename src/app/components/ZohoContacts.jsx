'use client'; // Required for client-side components in Next.js 14

import React, { useState } from 'react';

const ZohoForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    phone: '',
    email: '',
    city: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.lastName) {
      alert('Last Name cannot be empty.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('Last Name', formData.lastName);
    formDataToSend.append('Phone', formData.phone);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('City', formData.city);
    formDataToSend.append('Description', formData.description);

    try {
      const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          lastName: '',
          phone: '',
          email: '',
          city: '',
          description: '',
        });
      } else {
        alert('An error occurred while submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div id='crmWebToEntityForm' className='bg-white text-black max-w-[600px] p-6 mx-auto'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='content-type' content='text/html;charset=UTF-8' />

      {/* Success Message Box */}
      <div id='wf_splash' className='hidden fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center shadow-md'>
        <div className='bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2'>
          <div className='w-2 h-2 border-b-2 border-r-2 border-white transform rotate-45'></div>
        </div>
        <span id='wf_splash_info'></span>
      </div>

      <form
        id='webform5131685000001972051'
        name='WebToLeads5131685000001972051'
        acceptCharset='UTF-8'
        onSubmit={handleSubmit}
        className='space-y-4'
      >
        {/* Hidden Inputs */}
        <input type='text' name='xnQsjsdp' value='984bd3a669c3fecf9fba54b51eda0383a52a4e9981a18b3d19b91c48f2a390cc' className='hidden' />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input type='text' name='xmIwtLD' value='82567de223e25f4f539dd9731167a711e6397760cdd6e747d546fde5ba0209af1185ce9766460645ba2aaf901c710328' className='hidden' />
        <input type='text' name='actionType' value='TGVhZHM=' className='hidden' />
        <input type='text' name='returnURL' value='null' className='hidden' />

        {/* Form Title */}
        <div className='text-lg font-bold mb-4'>prosolar Contacts</div>

        {/* Last Name Field */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='Last_Name' className='text-sm font-medium'>
            Last Name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='Last_Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Phone Field */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='Phone' className='text-sm font-medium'>
            Phone
          </label>
          <input
            type='text'
            id='Phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Email Field */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='Email' className='text-sm font-medium'>
            Email
          </label>
          <input
            type='email'
            id='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* City Field */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='City' className='text-sm font-medium'>
            City
          </label>
          <input
            type='text'
            id='City'
            name='city'
            value={formData.city}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Description Field */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='Description' className='text-sm font-medium'>
            Description
          </label>
          <textarea
            id='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y'
          />
        </div>

        {/* Submit and Reset Buttons */}
        <div className='flex space-x-4'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
          >
            Submit
          </button>
          <button
            type='reset'
            className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors'
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm;