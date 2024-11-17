import React from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const HorizontalCC = ({ courses, categories, filterCategory, handleFilter, sortBy, handleSort }) => {
  return (
    <div>
      {/* Filter and Sort Section */}
      <div className="flex items-center justify-between mb-6">
        {/* Filter */}
        <div className="flex items-center space-x-2">
          <FaFilter />
          <select
            value={filterCategory}
            onChange={handleFilter}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <FaSort />
          <select
            value={sortBy}
            onChange={handleSort}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="price">Sort by Price</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-row w-full hover:text-orange-500"
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

              {/* Price and Button */}
              <div className="border-t border-gray-200 p-4 flex items-center justify-between mt-auto">
                <p className="text-gray-400 line-through">${course.price.toFixed(2)}</p>
                <p className="text-gray-500 font-semibold ml-2">Free</p>
              </div>
              <div className="p-4">
                <button className="bg-orange-500 text-white rounded-md px-4 py-2 w-full font-semibold hover:bg-orange-600 focus:outline-none">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCC;
