import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { motion, Variants } from 'framer-motion';




const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string(),
    powerNeeds: Yup.array().of(Yup.string()),
    paymentPlan: Yup.string().required('Payment plan is required'),
    contactMethod: Yup.string().required('Preferred contact method is required'),
  });


export const Hero = () => {


    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          powerNeeds: [],
          paymentPlan: '',
          contactMethod: '',
        },
        validationSchema,
        onSubmit: values => {
          console.log(values);
          // Handle form submission
        },
      });
  return (
    <div className="xl:px-12  xl:py-9 p-1 text-black">
      
    
<div className="grid lg:grid-cols-12 ">
    <div className="col-span-4 flex flex-col gap-5 lg:p-9 p-3 shadow-md border  rounded-3xl">
<h1 className="text-3xl font-bold">Contact Us</h1>
<div className="flex flex-col gap-5">
    <motion.div
  initial={{y: 50, opacity: 0}}
  whileInView={{y: 0, opacity:1}}
  transition={{duration: 0.5, delay:0, ease: "easeInOut"}}
  className="text-sm lg:text-lg xl:text-md lg:text-xl  border-2 rounded-xl w-full shadow-md p-2 flex gap-2 justify-center items-center"><RiInstagramFill/>Instagram</motion.div>
    <motion.div
   initial={{y: 100, opacity: 0}}
   whileInView={{y: 0, opacity:1}}
   transition={{duration: 0.5, delay:0.5, ease: "easeInOut"}}
  className="text-sm lg:text-lg xl:text-md lg:text-xl  border-2 rounded-xl w-full shadow-md p-2 flex gap-2 justify-center items-center"><IoLogoWhatsapp/>Whatsapp</motion.div>
    <motion.div
 initial={{y: 150, opacity: 0}}
 whileInView={{y: 0, opacity:1}}
 transition={{duration: 0.5, delay:1, ease: "easeInOut"}}
  className="text-sm lg:text-lg xl:text-md lg:text-xl  border-2 rounded-xl w-full shadow-md p-2 flex gap-2 justify-center items-center"><FaTwitter/>Twitter</motion.div>
    < motion.div
  initial={{y: 200, opacity: 0}}
  whileInView={{y: 0, opacity:1}}
  transition={{duration: 0.5, delay:1.5, ease: "easeInOut"}}
  className="text-sm lg:text-lg xl:text-md lg:text-xl  border-2 rounded-xl w-full shadow-md p-2 flex gap-2 justify-center items-center"><FaFacebookF/>Facebook</motion.div>
   
  
</div>

<h1 className="text-3xl font-bold lg:mt-20">Location</h1>
<p className="text-sm lg:text-lg">Suite 4, Block A, G-Wing, Bassan Plaza, Off Herbert Macaulay Way, Central Business District, FCT-Abuja.</p>

    </div>

    <div className='col-span-8'>
    <div className="mx-auto p-2 lg:px-20 2xl:px-36">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name *</label>
          <div className="flex space-x-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="w-full p-2 border border-black rounded-xl"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="w-full p-2 border border-black rounded-xl"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Phone *</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-2 border border-black rounded-xl"
            />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-600 text-sm">{formik.errors.phone}</div>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border border-black rounded-xl"
            />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Address/Location</label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="w-full p-2 border border-black rounded-xl"
            />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">What do you want to power</label>
          <div className="grid grid-cols-2 gap-2">
            {['Office', 'Home', 'Factory', 'Fans', 'Air Conditioner', 'Fridge', 'Freezer', 'Pumping machine', 'Washing machine'].map(option => (
              <div key={option}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="powerNeeds"
                    value={option}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">What is your Preferred Payment Plan *</label>
          <div className="flex items-center space-x-4">
            {['Outright Payment', 'Installment Payment'].map(option => (
              <div key={option}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentPlan"
                    value={option}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.paymentPlan && formik.errors.paymentPlan && (
            <div className="text-red-600 text-sm">{formik.errors.paymentPlan}</div>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Preferred Contact Method *</label>
          <div className="flex items-center space-x-4">
            {['All', 'E-mail', 'Phone'].map(option => (
              <div key={option}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={option}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.contactMethod && formik.errors.contactMethod && (
            <div className="text-red-600 text-sm">{formik.errors.contactMethod}</div>
          )}
        </div>
        
        <button type="submit" className="w-full bg-[#292ECF] text-white p-2 rounded-xl hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </div>
</div>



     
    </div>
  );
};
export default Hero;
