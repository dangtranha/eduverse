import React, { useEffect, useState } from "react";
import { getCourses } from "../model/CardModel"; // Import Model
import CourseView from "../component/CardCourse"; // Import View

const CourseController = () => {
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Development", "Data Science", "Marketing", "Design"];

  // Fetch courses khi component mount
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses(); // Lấy dữ liệu từ model
      setCourses(data); // Gán dữ liệu vào state
    };

    fetchCourses();
  }, []);

  // Sắp xếp khóa học
  const handleSort = (type) => {
    setSortBy(type);
    const sortedCourses = [...courses].sort((a, b) => {
      if (type === "price") return a.price - b.price;
      if (type === "student") return b.student - a.student;
      return 0;
    });
    setCourses(sortedCourses);
  };

  // Lọc theo danh mục
  const handleFilter = (category) => {
    setFilterCategory(category);
    const filteredCourses = category === "All"
      ? courses
      : courses.filter((course) => course.category === category);
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
