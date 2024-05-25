import Image from 'next/image';

const ImageCard = ({ src, alt, location, technology, battery, inverter, solar, year }) => {
  return (
    <div className="relative w-full h-[50vh] lg:h-[80vh] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="cover" 
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col gap-5 w-[35%] xl:w-[20%]  top-0 right-0 mx-4 transform bg-black text-white p-2 text-sm font-semibold shadow-lg">
        <h1 className='text-sm lg:text-lg lg:text-2xl font-bold'>Project Details</h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Location: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{location}</span></h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Technology: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{technology}</span></h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Battery Capacity: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{battery}</span></h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Solar Capacity: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{solar}</span></h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Inverter Capacity: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{inverter}</span></h1>
        <h1 className="2xl:text-md lg:text-xl text-md font-bold ">Year: <span className='2xl:text-sm lg:text-lg text-sm font-normal'>{year}</span></h1>
       
      </div>
     
    </div>
  );
};

export default ImageCard;
