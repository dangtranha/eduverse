import { query } from "../config/dbConfig.js";  // Sử dụng query từ dbConfig

const AccountModel = {
  login: async (email, password) => {
    try {
      // Kiểm tra người dùng trong cơ sở dữ liệu
      const res = await query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
      if (res.rows.length > 0) {
        return res.rows[0];  // Trả về người dùng nếu tìm thấy
      }
      return null;  // Nếu không tìm thấy người dùng
    } catch (err) {
      console.error("Error fetching user:", err);
      throw err;  // Xử lý lỗi khi truy vấn
    }
  },

  register: async (formData) => {
    try {
      const { email, password } = formData;
      const userExists = await query("SELECT * FROM users WHERE email = $1", [email]);

      if (userExists.rows.length > 0) {
        return false; // Email đã tồn tại
      }

      // Nếu chưa tồn tại, thêm người dùng mới vào cơ sở dữ liệu
      const res = await query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, password]);
      return res.rows[0];  // Trả về thông tin người dùng mới
    } catch (err) {
      console.error("Error registering user:", err);
      throw err;  // Xử lý lỗi khi truy vấn
    }
  },
};

export default AccountModel;
