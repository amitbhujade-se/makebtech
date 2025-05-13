import React from 'react'

const TrainingAndDev = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Training and development</h2>
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
          {/* Objective Section */}
          <div className="flex flex-wrap -mx-4 mb-6">
            {/* Left Column: Objective Text */}
            <div className="w-full md:w-10/12 px-4 mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">
                <span  style={{ color: "#7cbd1e",fontSize:"1.5rem" }}>Objective</span>
              </h4>
              <p className="text-gray-500 text-base leading-relaxed mb-4 text-md">
                The objective of Training Program is to provide a comprehensive learning platform
                to students wherein they can enhance their employability skills and become job ready
                along with real corporate exposure.
              </p>
              <p className="text-gray-500 text-md text-base leading-relaxed">
                • It helps engineering students to enhance their Practical Knowledge about the subject.<br />
                • It nurtures students' Employability Skills, helps in reducing the Skill Gap & makes students Job Ready.<br />
                • It provides real Corporate Exposure & increases the future Job Prospects.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-2/12 px-4 flex items-center justify-center">
              <img
                src="https://unblast.com/wp-content/uploads/2021/10/Teacher-Vector-Illustration.jpg"
                alt="Training"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          {/* ELTP Section */}
          <div className="mb-6">
            <p className="text-gray-500 text-md font-bold mb-2">Training Program (ELTP)</p>
            <p className="text-gray-500 text-md text-base leading-relaxed mb-4">
              The Entry Level Training Program acts as a vital support to
              companies, as it shoulders the responsibility of grooming new
              recruits into project-ready professionals for immediate deployment
              on projects.
            </p>
            <p className="text-gray-500 text-md text-base leading-relaxed">
              Fresher (Entry Level) Training Program (ELTP) is designed by Subject
              Matter Experts (SMEs) from Makeb in collaboration with Technical
              Experts of the client company. The assignments and complexities of
              the training is decided based on project specific requirements and
              inputs from the client.
            </p>
          </div>

          {/* Summary Section */}
          <div className="mb-6">
            <p className="text-green-500 text-md font-medium text-base leading-relaxed" style={{ color: "#7cbd1e" }}>
              This program ensures that the participating candidates become readily billable
              & deployable resources.
            </p>
          </div>

          {/* Tables Section */}
          <div className="mb-6">
            {/* First Table: Program Details */}
            <table className="w-full border-collapse border border-gray-300 shadow-md mb-6">
              <tbody>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-sm sm:text-md text-left text-gray-800 font-semibold">
                    Participant's profile
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-sm sm:text-md text-gray-500">
                    Fresher: Graduate or post-graduate, (CS, IT, ENTC and other branches)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-sm sm:text-md text-gray-800 font-semibold">
                    Typical Duration
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    30 to 45 days
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    Expected outcomes
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    Sound fundamentals of programming/testing/System Administration,<br />
                    Knowledge of basic set of tools and languages,<br />
                    Knowledge of applying technology to solve a problem based on case studies
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    Course Contents
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    Generally designed by the joint team of Subject Matter Expert.
                  </td>
                </tr>
              </tbody>
            </table>

            {/* List of Courses */}
            <p className="text-green-500 font-medium text-md mb-4" style={{ color: "#7cbd1e" }}>
              List of courses
            </p>
            <p className="text-gray-500 text-md text-base leading-relaxed mb-4">
              Following are the modules covered as part of this type of training. All of these modules can be customized to the extent desired in the context of project requirements.
            </p>

            {/* Second Table: Courses */}
            <table className="w-full border-collapse border border-gray-300 shadow-md">
              <tbody>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    Fundamentals
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    C programming, SQL, DBMS concepts, Unix basics.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    Java
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    Java, JDBC, Servlet/JSP, EJB
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    .NET/ PHP
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    C#, ADO.NET, ASP.NET<br />
                    PHP basics, Framework, Codeignitor
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="bg-gray-100 border border-gray-300 p-3 text-left text-gray-800 text-sm sm:text-md font-semibold">
                    Software Testing
                  </th>
                  <td className="bg-gray-50 border border-gray-300 p-3 text-gray-500 text-sm sm:text-md">
                    Software testing concepts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Advantages Section */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-800 text-md mb-4">Advantage</h5>
            <p className="text-gray-500 text-md mb-4">Our training results are</p>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="bg-gray-800 text-white text-center py-4 rounded-md animate-bounce">
                  Enhanced knowledge
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="bg-green-500 text-white text-center py-4 rounded-md animate-bounce">
                  Efficiency
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="bg-gray-800 text-white text-center py-4 rounded-md animate-bounce">
                  Productivity
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <p className="text-gray-500 text-md font-medium mb-4">
              We bring the best training convenience and results with
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              • <span className="font-bold ">Customization options</span> – Modifying existing courses, blending delivery methods, custom-designing courseware, coaching and mentoring on technologies and tools, consulting for new technology assimilation to address client-specific situation and challenges<br />
              • <span className="font-bold">Flexible approach</span> – Client site offerings for all courses<br />
              • <span className="font-bold">Wide range of offerings</span> – Information Technology, Project Management, General Management and Management development programs<br />
              • <span className="font-bold">Quality instructors</span> – Certified technical instructors, with real-world experience working in multi-technology, multi-vendor, multi-network environments<br />
              • <span className="font-bold">Comprehensive Course/ study material</span> – Easy to understand and comprehend study material and practical assignments
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrainingAndDev
