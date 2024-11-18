import React, { useRef } from 'react';
import certificateTemplate from '../assets/certificate.png';

const ProfileCertificate = ({ name, course, onClick }) => {
  const certificateRef = useRef(null); // Tham chiếu tới phần tử cần chuyển thành PDF

  // Chuyển chuỗi thành chữ in hoa
  const toUpperCase = (text) => text.toUpperCase();

  return (
    <div onClick={() => onClick(course, name)}
    className="flex flex-col items-center justify-center p-10">
      {/* Chứng chỉ Preview */}
      <div
        ref={certificateRef} // Tham chiếu phần tử cần xuất
        className="relative"
        style={{ width: '450px', height: '300px' }}
      >
        <img
          src={certificateTemplate}
          alt="Certificate Template"
          className="w-full h-auto"
        />
        {/* Name */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-l font-bold">{toUpperCase(name)}</p>
        </div>
        {/* Congratulatory Message */}
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-center px-6 max-w-2xl">
            <p className="text-xs font-medium">
                In recognition of their successful completion of{' '}
                <span className="font-semibold italic">{toUpperCase(course)}</span>.
            </p>
            <p className="text-xs mt-3 whitespace-nowrap">
                We are proud to recognize your accomplishments.
            </p>
        </div>

      </div>
    </div>
  );
};

export default ProfileCertificate;
