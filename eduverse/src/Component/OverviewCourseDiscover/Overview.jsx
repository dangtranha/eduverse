// import React from 'react';
// import {
//     FaCartPlus,
//     FaClock,
//     FaBook,
//     FaGraduationCap,
//     FaUser,
// } from "react-icons/fa";


// const Overview = (course) => {
//     return (
//         <div>
//             <p className="text-gray-600 mb-4">{course.description}</p>

//             <div className="flex items-center justify-between text-gray-600 mb-4">
//                 <div className="flex items-center">
//                     <FaGraduationCap className="mr-2" />
//                     <span>{course.instructor}</span>
//                 </div>
//                 <div className="flex items-center">
//                     <FaClock className="mr-2" />
//                     <span>{course.duration}</span>
//                 </div>
//                 <div className="flex items-center">
//                     <FaBook className="mr-2" />
//                     <span>{course.lectures} lectures</span>
//                 </div>
//                 <div className="flex items-center">
//                     <FaUser className="w-4 h-4" />
//                     <span className="ml-1">{course.students} students</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Overview;



import React from 'react';
import {
    FaCartPlus,
    FaClock,
    FaBook,
    FaGraduationCap,
    FaUser,
} from "react-icons/fa";

const Overview = ({ course }) => { // Destructure `course` từ props
    return (
        <div>
            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="flex items-center justify-between text-gray-600 mb-4">
                <div className="flex items-center">
                    <FaGraduationCap className="mr-2" />
                    <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                    <FaBook className="mr-2" />
                    <span>{course.lectures} lectures</span>
                </div>
                <div className="flex items-center">
                    <FaUser className="w-4 h-4" />
                    <span className="ml-1">{course.students} students</span>
                </div>
            </div>
        </div>
    );
};

export default Overview;
