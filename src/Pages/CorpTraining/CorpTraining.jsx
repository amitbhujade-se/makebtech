import React from 'react'

const CorpTraining = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Corporate Training</h2>
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

      {/* Content Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto p-6">
          {/* Introduction Section */}
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4">
              <span style={{ color: "#7cbd1e", fontSize:"1.5rem" }}>Corporate</span> Training
            </h4>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Our corporate training provides you the flexibility to customized training
              as per your firm’s need. We can support your firm with more than 100 hundreds
              of technologies and soft skill training. We can be your key training partner
              in providing training on latest technologies, personal development and developing
              competitive advance to stay ahead of the competition.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Makeb’s corporate training brings to you an unparalleled, highly interactive,
              instructor-led, face-to-face training experience in our classroom training at
              our Sate-of-the-Art training centers.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Our instructors are among the world’s premier IT and management authorities.
              They are highly sought-after industry experts who have worked in a variety of
              organization types and sizes worldwide, from leading-edge start-ups and mid-size
              enterprises to Fortune 500 companies.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="flex flex-wrap -mx-4 mb-6">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 flex flex-col justify-center">
              <p className="text-gray-800 text-lg">Benefits of Corporate Training</p>
              <ul className="flex flex-col justify-center">
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Highly customizable training to meet your requirement
                  </p>
                </li>
                <li className="bg-gray-800 p-4 text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    You can picked your own instructor from our vast trainer pool
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Best instructors in the industry with vast experience
                  </p>
                </li>
                <li className="bg-gray-800 p-4 text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Real life examples based training
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Interact face-to-face or though Live virtual classroom with expert instructors
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
              <ul className="">
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Engage with topical, results-oriented course content and exercises.
                  </p>
                </li>
                <li className="bg-gray-800 p-4 text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Use state-of-the-art training infrastructure
                  </p>
                </li>
                <li className="bg-gray-100 p-4">
                  <p className="text-gray-800 font-medium">
                    <i className="fas fa-chevron-right mr-2"></i>
                    Practice what you learn in guided hands-on labs.
                  </p>
                </li>
                <li className="bg-gray-800 p-4 text-white">
                  <p>
                    <i className="fas fa-chevron-right mr-2"></i>
                    Nominations option to our open house workshops if the numbers of participants is lesser than
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose MAKEB Section */}
          <div className="mb-6">
            <p className="text-gray-500 font-bold mb-4">Why choose MAKEB for your training?</p>
            <p className="text-gray-500 text-base leading-relaxed">
              • MAKEB is the World’s top IT and professional skill development Training Provider, with over 500,000+ professionals trained globally.<br /><br />
              • Trusted by the Fortune 500 companies as their learning provider for career growth and training.<br /><br />
              • 4000+ certified and experienced trainers conduct trainings for various courses across the globe.<br /><br />
              • We had excellent track record of 99% pass rate in first attempt.
            </p>
          </div>

          {/* Soft Skills Section */}
          <div className="flex flex-wrap -mx-4 px-4">
            <div className="w-full mb-4">
              <p className="text-gray-500 font-bold">Soft Skill</p>
            </div>
            {/* Left Column */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-500 font-medium">
                • Assertiveness<br />
                • Communication Skills<br />
                • Conflict resolution<br />
                • Conversation Skills<br />
                • Corporate Etiquettes<br />
                • Creativity and innovation<br />
                • Customer Service<br />
                • Emotional Intelligence<br />
              </p>
            </div>
            {/* Middle Column */}
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <p className="text-gray-500 font-medium">
                • Emotional Intelligence<br />
                • Interview Skills<br />
                • Leadership Skills<br />
                • Negotiation skills<br />
                • Personality Development<br />
                • Stress Management<br />
                • Team building<br />
                • Time Management<br />
              </p>
            </div>
            {/* Right Column: Image */}
            <div className="w-full md:w-1/3 px-4">
              <img
                src="https://img.freepik.com/premium-vector/male-teacher-teaching-classroom_1005511-992.jpg"
                alt="Training"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CorpTraining;
