import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Otuan from "../../../public/assets/Otuan2.JPG";
import koro from "../../../public/assets/Koro2.jpeg";
import latc from "../../../public/assets/LATC2.jpg";
import agb from "../../../public/assets/LATC2.jpg";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white rounded-full cursor-pointer flex justify-center items-center w-9 h-9 text-[black] text-xl"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-gray-100 rounded-full  w-9 flex justify-center items-center h-9 cursor-pointer text-[black] text-xl"
      onClick={onClick}
    >
      ❮
    </div>
  );
}

export default function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: false,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20%',
          autoplay: false,

        },
      },
    ],
  };

  const projects = [
    {
      imgSrc: latc,
      title: '95kWp Solar Power Plant at Dobi, Gwagwalada, Abuja, Nigeria.',
      description: 'The Ground mounted 95kWp Solar Plant was designed and developed ...',
      link: '/pages/project1',
    },
    {
      imgSrc: Otuan,
      title: '100kWp Solar Power Plant at Otuan, Southern Ijaw, Bayelsa, Nigeria',
      description: 'The Hybrid Solar Minigrid Project was designed and developed ...',
      link: '/pages/project2',
    },
    {
      imgSrc: agb,
      title: '33kWp Solar Power Plant at Aguobiri, Southern Ijaw, Bayelsa, Nigeria',
      description: 'The Hybrid Solar Minigrid Project was designed and developed ...',
      link: '/pages/project3',
    },
    {
      imgSrc: koro,
      title: '100kWp Solar Power Plant at Korokorosei, Southern Ijaw, Bayelsa, Nigeria',
      description: 'The Hybrid Solar Minigrid Project was designed and developed ...',
      link: '/pages/project4',
    },  ];

  return (
    <div className="lg:p-5 rounded-xl">
      <div className="container max-w-[1344px] mx-auto">
        <h1 className="text-md lg:text-6xl text-[#292ECF] text-center font-syne my-5">Some of our past projects</h1>
        <Slider {...settings} className="relative lg:grid grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="col-span-1 flex flex-col gap-3 h-auto justify-between p-1 lg:p-5">
              <div className="w-full h-[200px] lg:h-[300px] relative">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h1 className="font-bold text-sm lg:text-md font-syne2  text-[#22222] lg:text-xl">{project.title}</h1>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}