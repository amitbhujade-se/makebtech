import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://www.dreamzone.co.in/assets/images/placement/banner.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/439/703/small_2x/businessman-pulling-white-curtain-with-the-text-we-are-hiring-business-recruiting-design-concept-vector.jpg",
    "https://t4.ftcdn.net/jpg/03/02/96/77/360_F_302967749_eqlKLXCTRrkCCuWj9NdNoNrFYqkZrkCM.jpg",
  ];

  const headings = [
    "Get Ready For the Job",
    "We Are Into Recruitment",
    "Our Process",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-2xl">
      {/* Background image */}
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold animate-blink drop-shadow-xl uppercase tracking-widest">
          {headings[current]}
        </h1>
      </div>


      {/* Action Buttons */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        <a
          href={images[current]}
          download
          className="px-6 py-2 border border-white text-white rounded-md backdrop-blur-sm hover:bg-white hover:text-black transition"
        >
          Download
        </a>
        <a
          href="/register"
          className="px-6 py-2 border border-white text-white rounded-md backdrop-blur-sm hover:bg-white hover:text-black transition cursor-pointer"
        >
          Register
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
      >
        ←
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-blink {
          animation: blink 1.8s infinite;
        }
        @keyframes popupIn {
          0% {
            transform: scale(0.85);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popup {
          animation: popupIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Slider;