import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientLogos = [
  "http://makebtech.com/assets/images/clients/vodafone.png",
  "http://makebtech.com/assets/images/clients/nectar.png",
  "http://makebtech.com/assets/images/clients/benelec.png",
  "http://makebtech.com/assets/images/clients/atos1.png",
  "http://makebtech.com/assets/images/clients/eclerx1.png",
  "http://makebtech.com/assets/images/clients/centurysoft1.png",
  "http://makebtech.com/assets/images/clients/educe1.png",
  "http://makebtech.com/assets/images/clients/collabera1.png",
  "http://makebtech.com/assets/images/clients/wipro.png",
  "http://makebtech.com/assets/images/clients/notan1.png",
  "http://makebtech.com/assets/images/clients/better.png",
  "http://makebtech.com/assets/images/clients/spm.png",
  "http://makebtech.com/assets/images/clients/pinnacle1.png",
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="http://makebtech.com/assets/images/hero_bg_3.jpg"
          alt="Satisfied Client"
          className="w-full h-full object-cover no-repeat"
          style={{ backgroundPosition: "50% 67.45px;" }}
        />

        <h1
          className="absolute top-1/2 left-10 transform -translate-y-1/2 text-4xl md:text-6xl font-bold
        bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          data-aos="fade-up"
        >
          Satisfied Clients
        </h1>
      </div>

      <div className=" py-10 bg-gray-50">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-bold text-center mb-8">Clients</h2>
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="px-4">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-20 mx-auto object-contain hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clients;
