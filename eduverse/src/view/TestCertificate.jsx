import React, { useState } from "react";
import Certificate from "../component/Certificate";

function CertificateView() {
  const [name, setName] = useState('John Doe');
  const [course, setCourse] = useState('Full Stack Development');
  const [date, setDate] = useState('2024-11-17');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Form Input */}
      <div className="bg-white shadow p-6 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-5">Certificate Generator</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
      </div>

      {/* Certificate Preview */}
      <Certificate name={name} course={course} date={date} />
    </div>
  );
}

export default CertificateView;