import React, { useState } from "react";
import Form from "../component/Certificate/Form";
import CertificateTemplate from "../component/Certificate/Certificate";

function App() {
  const [certificateData, setCertificateData] = useState({});

  const handleGenerate = (data) => {
    setCertificateData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Certificate Generator
      </h1>
      <Form onGenerate={handleGenerate} />
      <div className="mt-8">
        <CertificateTemplate {...certificateData} />
      </div>
    </div>
  );
}

export default App;
