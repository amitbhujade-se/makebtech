import React from 'react'
import "./CorporateProfile.css"
const CorporateProfile = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Corporate Profile</h2>
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

      {/* Content Section */}
      <div className="container mx-auto px-4 py-10  my-10">
        <div className="flex flex-col items-center">

          <div className="w-full mt-10">
            <h4 style={{ fontSize: "1.5rem", fontWeight:"bold" }}>
              <span style={{ color:"#7cbd1e"}}>About</span> us
            </h4>
          </div>

          <div className="w-full mt-8">
            <h5 className="text-xl ">Mr. Manish Kumar</h5>
            <h5 className="text-lg mt-2">Career Snap :</h5>
            <p className="para mt-1">
              7 years of work experience in Engineering (IT & Embedded) and Business Development
            </p>

            <h5 className="text-lg font-medium mt-4">Education Qualification:</h5>
            <p className="para mt-1">
              BE – Electronics and Telecommunication from VTU – Karnataka
            </p>
          </div>

          <div className="w-full mt-6 text-justify">
            <p className="para mt-4">
              <b>Makeb Technologies</b> Services is a professional recruitment firm which strongly
              believes that quality is a process, not an end result. Therefore, we have selected
              highly professional recruiters with strong technical backgrounds. Most of our
              recruiters are qualified Engineers, Science Graduates & MBAs. They are with <b>Makeb
                Technologies</b> Services not only because of their experience and expertise, but also
              because of their desire to excel in the field of proper deployment of resources. We are
              well aware that a consultant develops a link between a candidate and the client
              organization. Thus, each of our handpicked consultants is a highly experienced
              professional of the sector/technology they serve.
            </p>

            <p className="para mt-4">
              Our current team comprises qualified professionals combining experience in multiple
              disciplines including Human Resources, Technology, Sales, and Marketing. A <b>strong service <i>attitude</i></b> coupled with a desire to excel and innovate is an integral
              part of our team members. Our team consists of highly ambitious and confident recruiters.
            </p>

            <p className="para mt-4">
              It is because of their ability to attract the best talent, <b>Makeb Technologies</b> Services today is one of the leading recruitment firms in Pune and serves
              leading companies in IT, ITES, Insurance, Finance, Power, Steel, Infrastructure,
              Pharmaceuticals, FMCG, MNCs, and other sectors.
            </p>
          </div>

          <div className="w-full mt-6">
            <h5 className="text-xl font-semibold">
              <span className="text-green-600">Recruitment</span> Overview
            </h5>
            <p className="para mt-2">
              <b>“Makeb Technologies”</b> operates its corporate affairs from the city Pune,
              Maharashtra with a nation-wide network of consultants to meet all HR requirements
              including:
            </p>
          </div>

          <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-gray-800 text-white p-4 text-center rounded shadow-md animate-bounce delay-100">
              Campus Interview
            </div>
            <div className="bg-green-600 text-white p-4 text-center rounded shadow-md animate-bounce delay-200">
              Outsourcing Employees
            </div>
            <div className="bg-gray-800 text-white p-4 text-center rounded shadow-md animate-bounce delay-300">
              Trained Manpower
            </div>
            <div className="bg-green-600 text-white p-4 text-center rounded shadow-md animate-bounce delay-400">
              Business Processing
            </div>
            <div className="bg-gray-800 text-white p-4 text-center rounded shadow-md animate-bounce delay-500">
              Human Resources Consulting
            </div>
          </div>

          <div className="w-full mt-6 text-justify">
            <p className="para italic font-medium">
              For manpower selection & placement, we have a very sizable & well-monitored comprehensive updated databank of high-caliber professionals. We provide systematic and time-bound recruitment assurance to cater to the needs of our clientele. As we have grown from the grassroots level and adapted to the volatile business environment, we believe we can provide the best manpower available in the market.
            </p>
            <p className="para mt-4">
              We give importance to long-term relationships, faster turnaround times, while carving
              a niche of ethics & client confidence. We specialize in providing quality services
              to our rich and expanding client base and command the privilege of a well-qualified
              candidate bank consisting of smart, young, energetic specialists, executives, and
              senior executives who rely on us for their bright future career prospects.
            </p>
          </div>

        </div>
      </div>

    </>
  )
}

export default CorporateProfile
