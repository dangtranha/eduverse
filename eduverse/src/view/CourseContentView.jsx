import React, { useState } from 'react';
import CourseContent from '../component/CourseContent';
import MenuCourseContent from '../component/MenuCourseContent';
import { getAllCourses } from '../controller/CourseContentCotrller';

const CourseContentView = () => {
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const courses = getAllCourses();

  const handleSelectSubItem = (subItem) => {
    setSelectedSubItem(subItem);
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-grow p-8 overflow-auto">
          {/* <CourseContent selectedSubItem={selectedSubItem} /> */}
        </div>
        <div className="w-80 bg-gray-50 border-l border-gray-200 shadow-lg">
          {/* <MenuCourseContent courses={courses} onSelectSubItem={handleSelectSubItem} /> */}

        </div>
      </div>
    </div>
  );
};

export default CourseContentView;