export const getCourses = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/course");
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    return await response.json(); // Trả về danh sách khóa học
  } catch (error) {
    console.error("Error in getCourses:", error);
    return [];
  }
};