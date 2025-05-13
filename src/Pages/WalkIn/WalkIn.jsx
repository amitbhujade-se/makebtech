import React from 'react'

const WalkIn = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-15 text-white text-center"
        style={{
          backgroundImage:
            "url('http://makebtech.com/assets/images/hero_bg_1.jpg')",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Walking Interviews </h2>
          <p>
            <a
              href="/"
              className="text-green-600 hover:text-green-500 decoration-none transition duration-300"
              style={{ fontSize: "1rem" }}
            >
              Home
            </a>{" "}
            <span className="mx-2">{">"}</span> <span>Services</span>
          </p>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto p-6">
          {/* Heading Section */}
          <div className="mb-4">
            <h4 className="text-xl text-md font-bold text-blue-900" style={{ color: "#213653", fontSize:"1.5rem" }}>
              <span style={{ color: "#7cbd1e" }}>Walking</span> Interviews
            </h4>
          </div>
          <div className="mb-6">
            <p className="text-gray-800 font-semibold">Walking interviews: Why?</p>
          </div>

          {/* Soft Skills Section */}
          <div className="flex flex-wrap -mx-4 mb-6">
            {/* Column 1 */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-800 text-base leading-relaxed">
                • Assertiveness<br />
                • Communication Skills<br />
                • Conflict resolution<br />
                • Conversation Skills<br />
                • Emotional Intelligence<br />
              </p>
            </div>
            {/* Column 2 */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-800 text-base leading-relaxed">
                • Emotional Intelligence<br />
                • Interview Skills<br />
                • Leadership Skills<br />
                • Negotiation skills<br />
                • Customer Service<br />
                • Creativity and innovation<br />
              </p>
            </div>
            {/* Column 3 */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-800 text-base leading-relaxed">
                • Personality Development<br />
                • Stress Management<br />
                • Team building<br />
                • Time Management<br />
                • Corporate Etiquettes<br />
              </p>
            </div>
          </div>

          {/* Systematic Hiring Process and Details Section */}
          <div className="flex flex-wrap -mx-4">
            {/* Systematic Hiring Process */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-800 font-bold mb-4">Systematic Hiring Process</p>
              <div className="flex flex-col items-center">
                {/* Step 1: Analysis */}
                <div className="w-3/4 p-3 text-white text-center " style={{ backgroundColor: "#7cbd1e" }}>
                  <p className="mt-2 mb-3">Analysis</p>
                </div>
                <div className="w-3/4 mt-2 mb-3">
                  <p className="text-center">
                    <i className="fas fa-caret-down text-2xl text-gray-800"></i>
                  </p>
                </div>

                {/* Step 2: Customize */}
                <div className="w-3/4 p-3 bg-gray-800 text-white text-center">
                  <p className="mt-2 mb-3">Customize</p>
                </div>
                <div className="w-3/4 mt-2 mb-3">
                  <p className="text-center">
                    <i className="fas fa-caret-down text-2xl text-gray-800"></i>
                  </p>
                </div>

                {/* Step 3: Develop */}
                <div className="w-3/4 p-3 text-white text-center" style={{ backgroundColor: "#7cbd1e" }}>
                  <p className="mt-2 mb-3">Develop</p>
                </div>
                <div className="w-3/4 mt-2 mb-3">
                  <p className="text-center">
                    <i className="fas fa-caret-down text-2xl text-gray-800"></i>
                  </p>
                </div>

                {/* Step 4: Implement */}
                <div className="w-3/4 p-3 bg-gray-800 text-white text-center">
                  <p className="mt-2 mb-3">Implement</p>
                </div>
                <div className="w-3/4 mt-2 mb-3">
                  <p className="text-center">
                    <i className="fas fa-caret-down text-2xl text-gray-800"></i>
                  </p>
                </div>

                {/* Step 5: Deliver */}
                <div className="w-3/4 p-3 text-white text-center" style={{ backgroundColor: "#7cbd1e" }}>
                  <p className="mt-2 mb-3">Deliver</p>
                </div>
              </div>
            </div>

            {/* Hiring Process Details */}
            <div className="w-full md:w-2/3 px-4 flex flex-col justify-center">
              <ul className="">
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Hiring Process Streamlined in Advance
                  </p>
                </li>
                <li className="bg-gray-800 p-4  text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Candidates walking through Newspaper, College / Institues, Social Media
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Promotion, Makeb technologies database & references
                  </p>
                </li>
                <li className="bg-gray-800 p-4  text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Makeb technologies team is presented venue to manage the walking
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Flow of candidates
                  </p>
                </li>
                <li className="bg-gray-800 p-4  text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    On site filtration & screening of candidates
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    First interview by Makeb technologies team
                  </p>
                </li>
                <li className="bg-gray-800 p-4  text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Post Selection / Offer, remaining shortlisted candidates database is weekly updated by us
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WalkIn
