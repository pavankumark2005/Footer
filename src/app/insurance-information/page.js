
import React from 'react';

const InsuranceInformation = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Insurance Information</h2>
      <p className="mb-4">
        We accept a variety of insurance plans to ensure that you receive the care you need. Please see below for more details on accepted insurances.
      </p>

      <h3 className="text-xl font-semibold mb-2">Accepted Insurance Plans</h3>
      <ul className="list-disc list-inside mb-4">
        <li>United Healthcare</li>
        <li>Medicare</li>
        <li>Medicaid</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Verifying Coverage</h3>
      <p className="mb-4">
        Before your visit, please verify your insurance coverage. You can do this by contacting your insurance provider or by checking your member portal.
      </p>

      <h3 className="text-xl font-semibold mb-2">Financial Assistance</h3>
      <p className="mb-4">
        If you need help with medical expenses, we offer financial assistance programs. Please contact our billing department for more information.
      </p>

      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      <p>If you have any questions regarding insurance or billing, please reach out to us:</p>
      <ul className="list-disc list-inside">
        <li>Phone: <span className="font-semibold">(123) 456-7890</span></li>
        <li>Email: <span className="font-semibold">Healthonecenter@gmail.com</span></li>
      </ul>
    </div>
  );
};

export default InsuranceInformation;
