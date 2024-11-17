// components/CourseContent.jsx
import React from "react";

const CourseContent = ({ selectedSubItem }) => {
  if (!selectedSubItem) {
    return <div className="p-8">Please select a sub-item from the menu.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{selectedSubItem.title}</h1>
      <p>{selectedSubItem.content}</p>
    </div>
  );
};

export default CourseContent;
