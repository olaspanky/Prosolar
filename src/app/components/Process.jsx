import React from 'react';
import Converse from './Converse';

const steps = [
  {
    id: 1,
    title: 'Book Consultation',
    description: 'Fill the contact form on the contact page. We set up a meeting regarding your energy needs.',
  },
  {
    id: 2,
    title: 'Site Survey',
    description: 'A visit to the proposed site will be carried out to put space and environmental factors into consideration.',
  },
  {
    id: 3,
    title: 'Energy Audit',
    description: 'Estimation of energy needs is measured and this is the basis for our design calculation as regarding system sizing.',
  },
  {
    id: 4,
    title: 'Installation',
    description: 'After giving the price and payment confirmed, installation commences immediately.',
  },
];

const ProcessSteps = () => {
  return (
    <div className="bg-white text-white p-6 max-w[100vw]">
              <div className="container max-w-[1344px] mx-auto  gap-9 md:flex-row items-center justify-between ">
              <h1 className="text-xl  lg:text-6xl text-[#292ECF] text-center font-syne my-2">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-20  mx-auto mt-3 lg:mt-9 2xl:mt-12">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-3 ">
            {/* Number Circle */}
            <div className="flex items-center justify-center h-6 w-12 lg:h-12 lg:w-12 rounded-full bg-[#222222] lg:text-xl font-semibold">
              {step.id}
            </div>
            {/* Text Content */}
            <div>
              <h3 className="text-xl lg:text-2xl text-[#222222] font-semibold mb-2 font-syne2">{step.title}</h3>
              <p className="text-gray-400 text-sm lg:text-lg leading-relaxed lg:w-96 font-jak">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Converse/>
    </div>
  );
};

export default ProcessSteps;
