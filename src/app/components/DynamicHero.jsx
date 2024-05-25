import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from "react-use-cart";
import dh from "../../../public/assets/dh.jpg"
import Quote from './Quote';




const BoxGrid = ({ card }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);


  const [activeTitle, setActiveTitle] = useState('Medication Overview');
  const [displayText, setDisplayText] = useState('lorem ipsum');
  const { addItem, inCart } = useCart();


  const handleTitleClick = (title) => {
    setActiveTitle(title);

    // Set the corresponding text based on the clicked title
    switch (title) {
      case 'Medication Overview':
        setDisplayText('the medicaion information will be displayed here');
        break;
      case 'Adverse effects':
        setDisplayText('This is the adverse text space.');
        break;
      case 'Brief':
        setDisplayText('summary of medication will be displayed here');
        break;
      default:
        setDisplayText('');
    }
  };

  const handleAddToCart = () => {
    if (inCart(card._id)) {
      setShowModal(true);
    } else {
      addItem({ ...card, id: card.id });
    }
  };


  if(!card){
    return(
      <>
      <h1>nothing to show</h1>
      </>
    )
  }



  return (
    <div>
    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 my-20 px-10 h-[70vh]">
        <div className='col-span-3 px-20'>
            <div className="w-full">
          <div className="flex rounded-md shadow-md flex-col gap-3 w-full">
            <div className="">
              <Image alt="alt"  src={dh} className='w-full' />
            </div>
            <div className='px-5 text-xs'>
              <p>{card.name}</p>
            </div>
          
          </div>
          <div>
           
          </div>
        </div>
        </div>


        <div className='col-span-6 flex flex-col gap-3'>
            <p className='text-2xl text-[#1567E0] font-bold'>{card.name}</p>
            <div className='flex justify-between text-xs lg:w-[55%] '>
                
            </div>


           <Quote/>
        </div>


        <div className="lg:col-span-3 flex flex-col gap-5 items-center w-full mt-3">
              <div className="flex w-full gap-5">
                <a href='/pages/generate'>
              <button
                    className="rounded-full w-full border border-[#1567E0]  p-3 bg-[white] text-[#1567E0]  "
                    onClick={handleAddToCart}
                  >
Generate Quote                 
 </button>
 </a>
               
               
              </div>
              <div className="w-full">
              <a
      href="/prosolarsample.pdf" // Ensure the path matches the location of your PDF in the public directory
      download="quote.pdf" // This will suggest the filename to the user
      className="rounded-full w-full border border-[#1567E0] p-3 bg-[white] text-[#1567E0] text-center"
    >
      Download Quote
    </a>
              </div>
            </div>
    </div>


    </div>
  );
};

export default BoxGrid;
