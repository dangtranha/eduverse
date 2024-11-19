import React, { useState, useEffect } from "react";
import { MenuCourseContent } from "../Component/MenuCourseContent";
import courseData from "../model/CourseContentModel";
import { useParams } from "react-router-dom";

export default function CourseContentController() {
  const { courseId } = useParams(); // Get courseId from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulating data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Find the course that matches the courseId from the URL
        const selectedCourse = courseData.find(course => course.link === courseId);

        if (selectedCourse) {
          setCourse(selectedCourse);
        } else {
          console.error("Course not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseId]); // Re-run when courseId changes

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading course data...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Course data not available.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4">
      <MenuCourseContent course={course} />
    </div>
  );
}
