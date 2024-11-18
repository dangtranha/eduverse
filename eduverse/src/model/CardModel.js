import { query } from "../config/dbConfig.js"; // Đảm bảo chỉ rõ phần mở rộng .js khi sử dụng ES Modules

export const getAllCourses = async () => {
  try {
    const res = await query("SELECT * FROM Course"); // Sử dụng query trực tiếp
    return res.rows;
  } catch (err) {
    console.error("Error fetching courses:", err);
    throw err;
  }
};
