import React from "react";

const BuyingCard = ({ courses, onAddCourse, onDeleteCourse }) => {
  return (
    <div>
      {/* Course List */}
      <div className="w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 flex flex-row w-full hover:text-orange-500 mt-8"
            style={{ height: "250px" }} // Fixed height for consistent layout
          >
            {/* Image Section */}
            <div className="w-2/5 h-full">
              <img
                src={`https://${course.image}`}
                alt={course.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1516116216624-53e697fedbea";
                }}
              />
            </div>

            {/* Content Section */}
            <div className="w-3/5 flex flex-col">
              <div className="p-4 flex-grow">
                <p className="text-gray-600 mb-2 text-sm">by {course.author}</p>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <span>{course.timeforlearn}</span>
                  <span>{course.student}</span>
                </div>
              </div>

              {/* Price and Buttons */}
              <div className="border-t border-gray-200 p-4 flex items-center justify-between mt-auto">
                <p className="text-gray-400 line-through">${course.price.toFixed(2)}</p>
                <p className="text-gray-500 font-semibold ml-2">Free</p>
              </div>
              <div className="p-4 flex space-x-2">
                {/* Delete Button */}
                <button
                  className="bg-red-500 text-white rounded-md px-4 py-2 w-1/2 font-semibold hover:bg-red-600 focus:outline-none hover:scale-25"
                  onClick={() => onDeleteCourse(course.id)} // Gọi onDeleteCourse với id của course
                >
                  Delete from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyingCard;
