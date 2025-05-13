import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const expertiseData = [
  {
    title: "IT & IT's",
    color: "text-green-700",
    expanded: true,
    subItems: ["Development", "Support", "Analytics", "Operations"],
  },
  {
    title: "Telecom",
    subItems: [],
  },
  {
    title: "Banking & FMCG",
    subItems: [],
  },
  {
    title: "BPO & KPO",
    subItems: [],
  },
];

const trainingData = [
  {
    title: "Corporate Training Program",
    color: "text-blue-900",
    expanded: true,
    subItems: [
      "Inbound",
      "Outbound",
      "Customer Service Associate",
      "Accounting",
      "Process management",
      "Operations",
    ],
  },
  {
    title: "Pharmaceutical/ Pharma plant",
    subItems: [],
  },
  {
    title: "Manufacturing",
    subItems: [],
  },
  {
    title: "e-Government Project",
    subItems: [],
  },
];

const CollapsibleItem = ({ item }) => {
  const [open, setOpen] = useState(item.expanded || false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="mb-4">
      <div
        className={`flex items-center justify-between cursor-pointer py-3 font-semibold border-b-2 border-transparent hover:border-gray-300 transition-all duration-300 ${item.color || "text-blue-900"}`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-xl">{item.title}</span>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        {item.subItems.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-gray-700 pr-2">
            {item.subItems.map((sub, idx) => (
              <li
                key={idx}
                className="border-b border-gray-200 pb-2 last:border-b-0 text-lg hover:text-green-700 transition duration-300"
              >
                {sub}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const DomainExpertise = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12 font-poppins">
        Domain Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto shadow-2xl rounded-xl p-10">
        <div className="space-y-6">
          {expertiseData.map((item, idx) => (
            <CollapsibleItem item={item} key={idx} />
          ))}
        </div>
        <div className="space-y-6">
          {trainingData.map((item, idx) => (
            <CollapsibleItem item={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainExpertise;

