// src/app/page.tsx

"use client";

import { useState } from 'react';

// Accordion component
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
    <div className="w-full max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <h2>
            <button
              className={`flex justify-between w-full p-4 text-left bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                openIndex === index ? 'font-bold' : ''
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
              </svg>
            </button>
          </h2>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-gray-50 rounded-b-lg">
              <strong>{item.answer}</strong>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// HomePage component
export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Welcome to Our Website</h1>
      <Accordion />
    </div>
  );
}
