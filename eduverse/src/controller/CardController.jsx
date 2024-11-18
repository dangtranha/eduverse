import React, { useState, useEffect } from "react";
import CourseView from "../Component/CardCourse";
import { fetchCourses } from "../model/CardModel";
const express = require('express');


const CardController = () => {
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Development", "Data Science", "Marketing", "Design"];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    loadCourses();
  }, []);

  const handleSort = (type) => {
    setSortBy(type);
    const sortedCourses = [...courses].sort((a, b) => {
      if (type === "price") return a.Price - b.Price;
      if (type === "student") return b.StudentNum - a.StudentNum;
      return 0;
    });
    setCourses(sortedCourses);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    const filteredCourses = courses.filter((course) =>
      category === "All" ? true : course.Category === category
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

export default CardController;
