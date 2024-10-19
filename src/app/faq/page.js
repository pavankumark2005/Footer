"use client"; // Add this line

import { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "Question #1",
      answer: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    },
    {
      question: "Question #2",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    },
    {
      question: "Question #3",
      answer: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."
    }
  ];

  return (
    <div className="accordion w-full max-w-3xl mx-auto mt-10">
      {items.map((item, index) => (
        <div className="accordion-item border-b border-gray-300" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button flex justify-between items-center w-full p-4 text-left text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none ${openIndex === index ? 'bg-teal-500 text-white' : 'text-gray-800'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}
            >
              <span className="font-medium">{item.question}</span>
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#basicAccordion"
          >
            <div className="accordion-body p-4 bg-white">
              <strong>{item.answer}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
