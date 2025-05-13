import React from 'react'

const OurTeam = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Team</h2>
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

      <div className="bg-white py-8">
        <div className="container mx-auto px-4 my-8">
          {/* Two-Column Section */}
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Heading and Image */}
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <h2 className="text-3xl mb-4 text-blue-900" style={{ color: "#213653" }}>
                Our Team
              </h2>
              <img
                src="https://bcel.deakin.edu.au/wp-content/uploads/2020/05/01104-19-integration-microsoft-teams-project-planning-683x500-1.png"
                alt="Our Team"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Right Column: Paragraph */}
            <div className="w-full md:w-1/2 px-4 flex items-center">
              <p className="text-gray-800 text-base leading-relaxed">
                Our team of specialists is something, what makes us extremely proud and
                self-confident. We have assembled a team of professionals that come from
                a wide range of all related backgrounds,{' '}
                <span className="font-bold">
                  including underwriting, risk management, as well as businesses management,
                </span>{' '}
                to provide expert knowledge in every line of insurance for every line of industry.
              </p>
            </div>
          </div>

          {/* Full-Width Section: Additional Paragraphs */}
          <div className="mt-8">
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              Our professional staff has a broad range of backgrounds, formal education and
              streetwise experience that helps us bring a distinctive approach to the tasks of
              establishing an appropriate positioning strategy then creating and forwarding
              continuous, seamless communications strategies and{' '}
              <span className="font-bold">
                pro-active awareness campaigns
              </span>{' '}
              for our public-company clients.
            </p>

            <p className="text-gray-800 text-base leading-relaxed">
              Our senior-level professionals have been involved in{' '}
              <span className="font-bold">
                Client and Job seeker relations, marketing communications, media relations, public relations,
              </span>{' '}
              and other related disciplines for a major portion of their careers. Taking full advantage of
              this diversity of backgrounds and experience our staff of professionals has
              established a track record of successfully organizing financial conferences;
              conducting opinion surveys of fund managers and analysts; setting up and conducting
              non-deal road trips all over India{' '}
              <span className="font-bold">
                generating meaningful coverage in the business and financial media including print, broadcast, wire service, Internet and a range
                of new media outlets; and consistently delivering significant value
              </span>{' '}
              to our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam;
