import express from "express";
import cors from "cors";
import { query } from "./eduverse/src/config/dbConfig.js";  // Kết nối database

const app = express();
const PORT = 5000;

// Sử dụng các middleware
app.use(cors());
app.use(express.json());

// Định nghĩa route /api/course
app.get("/api/course", async (req, res) => {
  try {
    // Truy vấn tất cả các khóa học từ cơ sở dữ liệu
    const result = await query("SELECT * FROM Courses");
    
    // Kiểm tra nếu có dữ liệu khóa học
    if (result.rows.length > 0) {
      res.json(result.rows); // Trả về dữ liệu khóa học
    } else {
      res.status(404).json({ message: "No courses found" });
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses" });
  }
});


// Định nghĩa route /api/login để xử lý đăng nhập
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm kiếm người dùng theo email
    const userResult = await query("SELECT * FROM Users WHERE email = $1", [email]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "Email not found" }); // Email không tồn tại
    }

    const user = userResult.rows[0];

    // Kiểm tra mật khẩu
    if (user.currentpassword !== password) {
      return res.status(401).json({ message: "Incorrect password" }); // Mật khẩu không đúng
    }

    // Trả về thông tin cần thiết của người dùng (ẩn thông tin nhạy cảm)
    const { iduser, firstname, lastname, email: userEmail } = user;
    res.json({
      message: "Login successful",
      user: { iduser, firstname, lastname, email: userEmail },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

// Định nghĩa route /api/register để xử lý đăng ký
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Kiểm tra nếu email đã tồn tại
    const userExists = await query("SELECT * FROM Users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Thêm người dùng mới vào bảng Users
    await query(
      "INSERT INTO Users (firstName, lastName, email, currentUsername, currentPassword, remainingAttemps) VALUES ($1, $2, $3, $4, $5, 3)",
      [firstName, lastName, email, email, password]
    );
    
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
