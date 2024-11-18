// src/controllers/CourseController.jsx
import React, { useState } from "react";
import CourseView from "../component/CardCourse";
import { courses as initialCourses } from "../model/CardModel";
  
const CourseController = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [sortBy, setSortBy] = useState("price");
  const [filterCategory, setFilterCategory] = useState("All");



  const categories = ["All", "Development", "Data Science", "Marketing", "Design"];

  const handleSort = (type) => {
    setSortBy(type);
    const sortedCourses = [...courses].sort((a, b) => {
      if (type === "price") return a.price - b.price;
      if (type === "student") return b.student - a.student;
      return 0;
    });
    setCourses(sortedCourses);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    const filteredCourses = initialCourses.filter((course) =>
      category === "All" ? true : course.category === category
    );
    setCourses(filteredCourses);
  };

  return (
    <CourseView
      courses={courses}
      categories={categories}
      filterCategory={filterCategory}
      handleFilter={handleFilter}
      sortBy={sortBy}
      handleSort={handleSort}
    />
  );
};

export default CourseController;
