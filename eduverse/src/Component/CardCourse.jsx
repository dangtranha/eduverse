import React, { useEffect, useState } from "react";
import CourseView from "../component/CardCourse";

const CourseController = () => {
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Development", "Data Science", "Marketing", "Design"];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
    const filteredCourses = courses.filter((course) =>
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
