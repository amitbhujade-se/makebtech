import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const facts = [
  {
    title: "8+ Experience",
    image: "https://careerbulls.in/wp-content/uploads/2020/01/Our-Placements.png",
  },
  {
    title: "75+ Team",
    image: "https://www.ibusinessinstitute.org/blog/wp-content/uploads/2022/04/The-Exam-Cram_-How-to-Manage-That-Last-Minute-Prep-Stress_-9-1.png",
  },
  {
    title: "500+ Happy Clients",
    image: "https://media.istockphoto.com/id/2026875024/vector/social-media-customer-feedback-review-employee-satisfaction-positive-feedback-on-online.jpg?s=612x612&w=0&k=20&c=AWyS8i1ksSne-MV9volUUTWPH_ykYnxVABNG9y2N-IY=",
  },
  {
    title: "15000+ Student Placements",
    image: "https://media.istockphoto.com/id/585509908/photo/studying-at-college.jpg?s=612x612&w=0&k=20&c=vJwnN1SLgbnrZkKg6TnwryPPG5CKMbfO1qxFvYTrvgw=",
  },
];

export default function Facts() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="py-12 px-4 md:px-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Facts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {facts.map((fact, idx) => (
          <div
            key={idx}
            className="relative bg-white border shadow-lg rounded-xl p-3 md:p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Title overlay */}
            <div className="absolute top-3 left-0 w-full text-center z-10">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 bg-white bg-opacity-40 inline-block px-3 py-1 rounded-md shadow">
                {fact.title}
              </h3>
            </div>

            {/* Enlarged Image */}
            <img
              src={fact.image}
              alt={fact.title}
              className="w-60 h-60 mx-auto mt-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
