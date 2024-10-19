// components/PatientSupport.js

import React from 'react';

const PatientSupport = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Patient Support</h2>
      <p className="mb-4">
        Welcome to our Patient Support Center. We are here to assist you with any questions or concerns you may have regarding your healthcare.
      </p>
      
      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      <p className="mb-4">If you need immediate assistance, please contact our support team:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Phone: <span className="font-semibold">(123) 456-7890</span></li>
        <li>Email: <span className="font-semibold">support@healthcarecenter.com</span></li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>How do I make an appointment?</strong> You can schedule an appointment through our online portal or by calling us.</li>
        <li><strong>What should I bring to my first appointment?</strong> Please bring your ID, insurance card, and any relevant medical records.</li>
      </ul>
     
    </div>
  );
};

export default PatientSupport;
