import React, { useRef } from 'react';
import certificateTemplate from '../../assets/certificate.png';
import html2pdf from "html2pdf.js"; // Import thư viện html2pdf


const Certificate = ({ name, course, date }) => {
  const certificateRef = useRef(null); // Tham chiếu tới phần tử cần chuyển thành PDF

  const handleDownload = () => {
    const element = certificateRef.current;

    const options = {
      margin:       [25, 30, 0.5, 0.5],  // Lề của PDF
      filename:     'certificate.pdf',      // Tên file PDF
      image:        { type: 'jpeg', quality: 0.98 }, // Định dạng ảnh (nếu cần)
      html2canvas:  { scale: 2 },  // Tăng chất lượng ảnh trong PDF (có thể điều chỉnh)
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }, // Xoay ngang (landscape)
    };

    // Tạo PDF từ phần tử DOM
    html2pdf()
      .from(element)
      .set(options)
      .save();
  };

  // Chuyển chuỗi thành chữ in hoa
  const toUpperCase = (text) => text.toUpperCase();

  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Chứng chỉ Preview */}
      <div
        ref={certificateRef} // Tham chiếu phần tử cần xuất
        className="relative"
        style={{ width: '900px', height: '600px' }}
      >
        <img
          src={certificateTemplate}
          alt="Certificate Template"
          className="w-full h-auto"
        />
        {/* Name */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-3xl font-bold">{toUpperCase(name)}</p>
        </div>
        {/* Congratulatory Message */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-center px-6 max-w-xl">
          <p className="text-lg font-medium text-xm ">
            In recognition of their successful completion of{' '}
            <span className="font-semibold italic">{toUpperCase(course)}</span>.
          </p>
          <p className="text-lg mt-3 text-xm" >
            We are proud to recognize your accomplishments.
          </p>
        </div>
      </div>
        <div className="relative z-10 mt-5">
            <button
                onClick={handleDownload}
                className="mt-5 bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
                Download Certificate as PDF
        </button>
      </div>
    </div>
  );
};

export default Certificate;
