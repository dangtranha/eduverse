import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import ProfileCard from "../Component/ProfileCard"
import ProfileCertificate from "../Component/ProfileCertificate"
import Certificate from "./Certificate/Certificate";

const UserProfile = ({ courses,userData }) => {
    const handleCertificateClick = (courseTitle, userName) => {
        alert(`Course: ${courseTitle}\nUser: ${userName}`);
    };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            {/* Personal Information Section */}
            <div className="sm:w-1/5 bg-gray-100 px-6 py-8 sm:px-8 rounded-lg sm:mr-4">
              <div className="flex flex-col items-center">
                {/* Avatar and Username */}
                <div className="relative mt-20">
                  <img
                    src={`https://${userData.avatar}`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
                    }}
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
                  {userData.name}
                </h1>
                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-6"></div>
                {/* Additional Information */}
                <div className="space-y-6 w-full mt-10">
                  <div className="flex items-center text-gray-800 text-lg font-medium">
                    <FiMail className="mr-3 text-xl" />
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center text-gray-800 text-lg font-medium">
                    <FiPhone className="mr-3 text-xl" />
                    <span>{userData.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-800 text-lg font-medium">
                    <FiMapPin className="mr-3 text-xl" />
                    <span>{userData.address}</span>
                  </div>
                  <div className="flex items-center text-gray-800 text-lg font-medium">
                    <FiCalendar className="mr-3 text-xl" />
                    <span>{userData.birthDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses and Certificates Section */}
            <div className="sm:w-2/3 px-6 py-8 sm:px-8">
              {/* Enrolled Courses */}
            <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MdSchool className="mr-3 text-3xl" /> Enrolled Courses
            </h2>
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
                <ProfileCard courses={courses} />
            </div>
            </div>
              {/* Certificates */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <BsAward className="mr-2" /> Certificates
                </h2>
                <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
                {courses.map((course) => (
                <ProfileCertificate
                    key={course.id}
                    course={course.title}
                    name={userData.name}
                    onClick={handleCertificateClick}
                />
                ))}

            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
