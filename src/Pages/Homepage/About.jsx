import React from "react";

const AboutUsSection = () => {
  const cards = [
    {
      title: "Corporate Profile",
      icon: "📄", // Better representation than ✈️
      description:
        "Makeb Technologies Services is a professional recruitment firm",
      buttonColor: "bg-[#152D47]",
      url: "/profile",
    },
    {
      title: "Our Team",
      icon: "👥",
      description:
        "Our team of specialists is something, what makes us extremely proud and self-confident",
      buttonColor: "bg-[#152D47]",
      url: "/our-team",
    },
    {
      title: "Vision and Mission",
      icon: "🚀",
      description:
        "To emerge as the Most Trusted Recruitments Service Provider in the Industry",
      buttonColor: "bg-[#152D47]",
      url: "/vission&mission",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 text-center font-nunito">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">About Us</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 shadow-lg w-full h-auto md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 text-green-600 text-5xl p-5 rounded-full shadow-inner transition-transform duration-300 hover:scale-110 hover:animate-bounce">
                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm mb-6">{card.description}</p>
            <a 
            href={card.url}
              className={`text-white py-2 px-6 cursor-pointer transition-all duration-300 hover:bg-[#7cbd1e] ${card.buttonColor}`}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
