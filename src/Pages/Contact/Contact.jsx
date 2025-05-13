import React from 'react'

const Contact = () => {
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
          <h2 className="mb-2" style={{ fontSize: "3rem" }}>Contact</h2>
          <p>
            <a
              href="/"
              className="text-green-600 hover:text-green-500 decoration-none transition duration-300"
              style={{ fontSize: "1rem" }}
            >
              Home
            </a>{" "}
            <span className="mx-2">{">"}</span> <span>Contact</span>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 px-4 mb-5">
              <form className="p-6 bg-white  shadow-md">
                {/* Full Name */}
                <div className="mb-4">
                  <label htmlFor="fullname" className="block font-bold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:border-green-500"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:border-green-500"
                    placeholder="Email Address"
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="block font-bold text-gray-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:border-green-500"
                    placeholder="Enter Subject"
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:border-green-500"
                    placeholder="Type in your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className="text-white py-2 px-4 rounded-none hover:bg-blue-700 cursor-pointer"
                    style={{ background: "#213653" }}
                  />
                </div>
              </form>
            </div>

            {/* Contact Info and More Info */}
            <div className="w-full lg:w-1/3 px-4">
              {/* Contact Info */}
              <div className="p-4 mb-3 bg-white  shadow-md">
                <h3 className="text-lg font-semibold text-blue-900 mb-3" style={{ color: "#213653" }}>
                  Contact Info
                </h3>
                <p className="font-bold text-gray-800 mb-0">Address</p>
                <p className="mb-4">
                  <b>
                    <span className="text-green-500" style={{ color: "#7cbd1e" }}>Makeb technologies,</span>
                  </b>
                  <br />
                  Office No:519, Aurora Tower East Wing, Pune - 411001 (M.H)
                </p>

                <p className="font-bold text-gray-800 mb-0">Phone</p>
                <p className="mb-4">
                  <i className="fas fa-tty mr-2" style={{ color: "#1d2124" }}></i>
                  <a href="tel:020-40078926">020-40078926</a>,
                  <br />
                  <i className="fab fa-whatsapp mr-2" style={{ color: "#1d2124" }}></i>
                  <a href="tel:9987121730">9987121730</a>
                </p>

                <p className="font-bold text-gray-800 mb-0">Email Address</p>
                <p className="mb-0">
                  <a href="mailto:hr@makebtech.com">hr@makebtech.com</a>
                </p>
              </div>

              {/* More Info */}
              <div className="p-4 bg-white  shadow-md" style={{ lineHeight: "1.5" }}>
                <h3 className="text-lg font-semibold text-blue-900 mb-3" style={{ color: "#213653" }}>
                  More Info
                </h3>
                <p className="text-gray-800 mb-4">
                  We are a successfully operating Multi Placement Organization, with enough staff strength of Recruitment executives, having unlimited database of candidates from various background in “PUNE”.
                </p>
                <p>
                  <a
                    href="http://makebtech.com/index.php/custom_controller/profile"
                    className="text-white py-2 px-4 rounded-none hover:bg-blue-700 inline-block"
                    style={{ background: "#213653" }}
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full px-4 mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2529708496218!2d73.87662931527538!3d18.51746707410124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04fa2955555%3A0x86270651ebb3891a!2sMakeb+technologies!5e0!3m2!1sen!2sin!4v1547531898636"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Makeb Technologies Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
