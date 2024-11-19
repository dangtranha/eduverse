import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Payment = ({ course, addToCart, seeMore }) => {
    return (
        <div className="mx-auto w-full p-4">
            <div
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex overflow-hidden"
            >
                {/* Hình ảnh khóa học */}
                <div className="w-1/3 h-full relative overflow-hidden">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Nội dung khóa học */}
                <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h2>
                        <p className="text-gray-600 text-sm mb-6">{course.description}</p>
                        <div className="text-indigo-600 text-2xl font-semibold mb-4">
                            ${course.price}
                        </div>
                    </div>
                    <div className="flex justify-end items-center space-x-4">
                        <button
                            onClick={() => addToCart(course.id)}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            <FaCartPlus className="mr-2" />
                            Add to Cart
                        </button>
                        <button
                            onClick={() => seeMore(course)}
                            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                        >
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
