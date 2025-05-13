import React, { useEffect, useState } from "react";

export default function WhyUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // trigger animation on mount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 md:px-16 gap-8 bg-white text-gray-800">
      
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
          Why Us
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Industries and Corporate houses spend hard earned financial resources and
          time in recruiting manpower and thus disturb the main stream of business.
          In spite of hard-core efforts, the result has not been satisfactory.
          Suitable manpower is either not available, or even if found has been
          difficult to retain. Such an elusive situation hampers growth of the
          company, both structurally and financially.
        </p>

        {/* Read More Button with green hover */}
        <a
        href="/why" 
        className="bg-gray-900 text-white px-6 py-4 transition duration-300 hover:bg-green-700 hover:shadow-lg">
          Read More
        </a>
      </div>

      {/* Blue Circle + Image */}
      <div className="md:w-1/2 flex flex-col items-center">
        
        {/* Blue Circle - zoom in on load */}
        <div
          className={`bg-blue-500 text-white rounded-full w-60 h-60 flex items-center justify-center shadow-lg 
          transition-transform duration-700 ease-out ${
            animate ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <ul className="list-none text-sm space-y-3 px-4 text-center">
            <li className="flex items-start justify-center">
              <span className="mr-2">▢</span> Live candidate Database
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-2">▢</span> Proven Sourcing capabilities
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-2">▢</span> End to End process solution
            </li>
            <li className="flex items-start justify-center">
              <span className="mr-2">▢</span> Candidate Relationship Management
            </li>
          </ul>
        </div>

        {/* Image - fade and slide up on load */}
        <img
          src="https://png.pngtree.com/png-clipart/20250105/original/pngtree-cartoon-character-of-male-student-giving-thumbs-up-png-image_19853544.png"
          alt="Thumbs Up Character"
          className={`w-48 h-auto -mt-4 transition-all duration-700 ease-out ${
            animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
