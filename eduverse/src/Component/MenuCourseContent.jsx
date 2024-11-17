// components/MenuCourseContent.jsx
import React, { useState } from "react";

const MenuCourseContent = ({ courses, onSelectSubItem }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Determine the state color dynamically based on course or sub-item state
  const getStateColor = (state) => {
    switch (state) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "in-progress":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-lg">
      <h1 className="text-xl font-bold mb-4">Course Content</h1>
      <div className="space-y-2">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`p-3 rounded-lg ${getStateColor(course.subItems.length > 0 ? "in-progress" : "not-started")}`}
          >
            <div
              onClick={() => toggleSubMenu(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p className="font-semibold">{course.title}</p>
                <p className="text-sm text-gray-600">
                  {course.progress} • {course.totalTime}
                </p>
              </div>
              <button className="text-gray-500 text-lg">
                {openIndex === index ? "▴" : "▾"}
              </button>
            </div>
            {openIndex === index && course.subItems.length > 0 && (
              <div className="mt-2 space-y-2 pl-4">
                {course.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`flex justify-between items-center p-2 rounded-md hover:bg-gray-100 ${getStateColor(
                      subItem.state
                    )}`}
                    onClick={() => onSelectSubItem(subItem)}
                  >
                    <p className="text-sm font-medium cursor-pointer">{subItem.title}</p>
                    <p className="text-xs">{subItem.duration}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCourseContent;
