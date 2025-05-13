import React from 'react';
import "./VissionAndMission.css";

const VissionAndMission = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-15 text-white text-center"
        style={{
          backgroundImage:
            "url('http://makebtech.com/assets/images/hero_bg_1.jpg')",
        }}
      >
        <div className="container mx-auto px-4">
            <h2 className="mb-2" style={{ fontSize: "3rem" }}>Vision and Mission</h2>
          <p>
            <a
              href="/"
              className="text-green-600 hover:text-green-500 decoration-none transition duration-300"
              style={{ fontSize: "1rem" }}
            >
              Home
            </a>{" "}
              <span className="mx-2">{">"}</span> <span>About</span>
          </p>
        </div>
      </div>
    </div>

      <div className="bg-white py-8">
        <div className="container mx-auto px-4 my-8">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl text-blue-900" style={{ color: "#213653" }}>
              Vision and Mission
            </h2>
          </div>

          {/* Vision and Mission Cards */}
          <div className="flex flex-wrap -mx-4 mb-8">
            {/* Vision Card */}
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-4">
              <div className="unit-3 bg-white border-1 border-gray-400 p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 relative">
                    {/* Hexagon SVG */}
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="59px" height="68px">
                      <path
                        fillRule="evenodd"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fill="none"
                        stroke="#7cbd1e"
                        d="M29.000,66.000 L1.012,49.750 L1.012,17.250 L29.000,1.000 L56.988,17.250 L56.988,49.750 L29.000,66.000 Z"
                      />
                    </svg>
                    {/* Icon inside Hexagon */}
                    <i className="fas fa-plane absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-2xl hover:text-white"></i>
                  </div>
                  <h3 className="unit-3-text text-xl font-semibold text-gray-800">Vision</h3>
                </div>
                <div>
                  <p className="unit-3-text text-gray-700 text-base leading-relaxed">
                    To emerge as the Most Trusted Recruitments Service Provider in the Industry, anchored on the Values of Growth, Professionalism, and Transparency & Accountability...
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-4">
              <div className="unit-3 bg-white border-1 border-gray-400 p-6 h-full hover:bg-[#13e3a5] transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4 relative">
                    {/* Hexagon SVG */}
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="59px" height="68px">
                      <path
                        fillRule="evenodd"
                        strokeWidth="2px"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fill="none"
                        stroke="#7cbd1e"
                        d="M29.000,66.000 L1.012,49.750 L1.012,17.250 L29.000,1.000 L56.988,17.250 L56.988,49.750 L29.000,66.000 Z"
                      />
                    </svg>
                    {/* Icon inside Hexagon */}
                    <i className="fas fa-fire absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-2xl "></i>
                  </div>
                  <h3 className="unit-3-text text-xl font-semibold text-gray-800">Mission</h3>
                </div>
                <div>
                  <p className="unit-3-text text-gray-700 text-base leading-relaxed">
                    Our mission is to provide our clients and candidates with consistently superior and proficient services which will improve their productivity, profitability and well being, on both a corporate and personal level.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h5 className="text-lg font-semibold text-center text-gray-800 mb-6">Values</h5>
            <div className="flex flex-wrap -mx-4">
              {/* Left Column */}
              <div className="w-full md:w-1/2 px-4">
                <ul className="space-y-4">
                  <li className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                    <p className="text-gray-700">
                      <span className="font-bold">Forwarding thinking, planning and execution to expand our horizons</span>
                    </p>
                  </li>
                  <li className="bg-gray-800 p-4 rounded-md text-white">
                    <h5 className="text-lg font-semibold mb-2">Integrity</h5>
                    <p>Honesty & transparency in what we say, do and think</p>
                  </li>
                  <li className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
                    <p className="text-gray-700">
                      <span className="font-bold">Enthusiasm, desire & commitment to succeed.</span>
                    </p>
                  </li>
                  <li className="bg-gray-800 p-4 rounded-md text-white">
                    <h5 className="text-lg font-semibold mb-2">Fairness</h5>
                    <p>to ensure everyone counts</p>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 px-4">
                <ul className="space-y-4">
                  <li className="bg-gray-800 p-4 rounded-md text-white">
                    <h5 className="text-lg font-semibold mb-2">Trust</h5>
                    <p>Engender trust in our interactions with each other</p>
                  </li>
                  <li className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Teamwork</h3>
                    <p className="text-gray-700">
                      <span className="font-bold">to achieve our potential</span>
                    </p>
                  </li>
                  <li className="bg-gray-800 p-4 rounded-md text-white">
                    <h5 className="text-lg font-semibold mb-2">Excellence</h5>
                    <p>to be recognized as the best</p>
                  </li>
                  <li className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth</h3>
                    <p className="text-gray-700">
                      <span className="font-bold">to continually improve</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VissionAndMission
