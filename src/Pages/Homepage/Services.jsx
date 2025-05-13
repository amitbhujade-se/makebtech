import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Training and Development",
    description:
      "The objective of Training Program is to provide a comprehensive learning platform to students wherein they can enhance their employability skills",
    icon: "✈️",
  },
  {
    title: "Corporate Training",
    description:
      "Our corporate training provides you the flexibility to customized training as per your firm’s need.",
    icon: "🗂️",
  },
  {
    title: "College Campus",
    description:
      "Hiring Process Streamlined in Advance, Candidates walking through Newspaper, College / Institutes, Social Media",
    icon: "🔥",
  },
  {
    title: "Recruitment Process",
    description:
      "We are engaged in offering high-standard Human Resource Services to our clients",
    icon: "⚙️",
  },
];

const rawRatios = [
  { label: "IT", percent: 70, color: "bg-[#1b2a49]" },
  { label: "MANUFACTURING", percent: 60, color: "bg-[#8dc63f]" },
  { label: "BPO", percent: 50, color: "bg-[#00c0f3]" },
  { label: "KPO", percent: 65, color: "bg-[#fcb117]" },
  { label: "FMCG & CD", percent: 40, color: "bg-[#f15a29]" },
];

const OurServices = () => {
  const [ratios, setRatios] = useState(rawRatios.map((r) => ({ ...r, current: 0 })));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRatios(rawRatios.map((r) => ({ ...r, current: r.percent })));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white py-12 px-6 md:px-20 text-gray-900 font-Serif">
      <h2 className="text-4xl font-semibold text-center mb-12 font-Serif">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 font-Serif">
        {services.slice(0, 3).map((service, idx) => (
          <div
            key={idx}
            className="border p-6 rounded-md text-left shadow-xl bg-white transition-all transform hover:scale-[1.05] hover:shadow-2xl hover:bg-green-100 duration-300 ease-in-out font-serif"
          >
            <div className="flex items-center mb-4 font-serif ">
              <div className="hexagon w-20 h-20 flex items-center justify-center text-4xl text-green-600 mr-4 border-4 border-green-600 font-serif">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
            <p className="text-base text-[#1b2a49] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="border p-6 rounded-md text-left shadow-xl bg-white transition-all transform hover:scale-[1.05] hover:shadow-2xl hover:bg-green-100 duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="hexagon w-20 h-20 flex items-center justify-center text-4xl text-green-600 mr-4 border-4 border-green-600">
              {services[3].icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{services[3].title}</h3>
          </div>
          <p className="text-base text-[#1b2a49] leading-relaxed">
            {services[3].description}
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-6 text-[#1b2a49]">
            Our recruitment ratio till time
          </h3>
          <div className="space-y-6">
            {ratios.map((ratio, idx) => (
              <div key={idx}>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden relative">
                  <div
                    className={`h-full ${ratio.color} text-white text-xs font-medium flex items-center justify-center striped-bar animate-barMovement`}
                    style={{
                      width: `${ratio.current}%`,
                      transition: "width 1.2s ease-in-out",
                    }}
                  >
                    {ratio.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .hexagon {
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
        }

        .striped-bar {
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.15) 0,
            rgba(255,255,255,0.15) 10px,
            transparent 10px,
            transparent 20px
          );
          background-size: 40px 40px;
        }

        @keyframes barMovement {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }

        .animate-barMovement {
          animation: barMovement 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurServices;
