import React from "react";

const CertificateTemplate = ({ name, course, date, organization = "Your Organization" }) => {
  if (!name || !course || !date) return null;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border-2 border-gray-300 rounded-lg shadow-md relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700">Certificate of Completion</h1>
        <p className="text-gray-500 mt-2">This certifies that</p>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg text-gray-500">has successfully completed the course:</p>
        <h3 className="text-2xl font-semibold text-blue-600 mt-2">{course}</h3>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500">Date of Completion:</p>
        <p className="text-lg text-gray-700">{date}</p>
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="text-sm text-gray-500">Issued by: {organization}</p>
      </div>
      <div className="absolute inset-0 border-8 border-blue-500 pointer-events-none rounded-lg"></div>
    </div>
  );
};

export default CertificateTemplate;
