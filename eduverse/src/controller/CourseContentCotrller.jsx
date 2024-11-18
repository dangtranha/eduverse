import courseData from "../model/CourseContentModel";
export const getAllCourses = () => {
  return courseData;
};

// Tìm khóa học theo ID
export const getCourseById = (courseId) => {
  return courseData.find((course) => course.id === courseId);
};

export const getSubItemById = (courseId, subItemId) => {
  const course = getCourseById(courseId);
  if (course && course.subItems.length > 0) {
    return course.subItems.find((item) => item.id === subItemId);
  }
  return null;
};