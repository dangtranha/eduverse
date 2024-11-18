import React from "react";
import {
    FaCartPlus,
    FaClock,
    FaBook,
    FaGraduationCap,
    FaUser,
} from "react-icons/fa";

const CourseCardDiscover = ({ courses = [], addToCart, seeMore }) => {
    return (
        <div className=" mx-auto p-4" >
            {courses.map((course) => (
                <div
                    key={course.id}
                    className="mb-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex overflow-hidden"
                    tabIndex={0}
                    role="article"
                    aria-label="Course card"
                >
                    <div className="w-1/3 relative overflow-hidden">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="w-2/3 p-6 flex flex-col justify-between">
                        <div>
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

                            <p className="text-gray-600 mb-4">{course.description}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold text-indigo-600">${course.price}</div>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => addToCart(course.id)}
                                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:opacity-70"
                                    aria-label="Add to cart"
                                >
                                    <FaCartPlus className="w-6 h-6 mr-2" />
                                </button>
                                <button
                                    onClick={() => seeMore(course)}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2 disabled:opacity-70"
                                    aria-label="Learn more about the course"
                                >
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    );
};

export default CourseCardDiscover;
