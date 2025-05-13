import React from 'react'

const RecruitmentP = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Recruitment Process</h2>
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
          <div className="mb-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4" style={{ color: "#213653" }}>
              <span className="text-green-500" style={{ color: "#7cbd1e" }}>Recruitment</span> Process
            </h4>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              We are engaged in offering high-standard Human Resource Services to our clients.
              Our services are widely demanded by various organizations for the ability to
              suitable employees for different positions. These services encompasses Recruitment
              and Selection Services, Contractual Staffing, Payroll Management and Legal
              Consulting. Moreover, these services are provided by the proficient HR
              professionals, who are experts in this domain. We take great pleasure to
              introduce and offer Makeb technologies- Staffing solutions.
            </p>
            <img
              src="http://makebtech.com/assets/images/man.png"
              alt="Recruitment Process"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RecruitmentP
