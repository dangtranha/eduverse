import AccountModel from "../model/AccountModel.js";  // Import AccountModel để xử lý đăng nhập

const AccountController = {
  handleLoginSubmit: async (req, res) => {
    const { email, password } = req.body;  // Lấy dữ liệu từ request body

    try {
      // Gọi hàm login từ model để kiểm tra thông tin người dùng
      const user = await AccountModel.login(email, password);

      if (user) {
        // Nếu người dùng tồn tại, trả về thông tin người dùng
        res.status(200).json({ message: "Login successful", user });
      } else {
        // Nếu không tìm thấy người dùng, trả về lỗi
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      // Nếu có lỗi trong quá trình truy vấn, trả về lỗi server
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  handleRegisterSubmit: async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    try {
      // Gọi hàm register từ model để kiểm tra email có tồn tại chưa và tạo người dùng mới
      const isRegistered = await AccountModel.register(req.body);

      if (isRegistered) {
        res.status(201).json({ message: "Registration successful! Please login." });
      } else {
        res.status(400).json({ message: "Email already exists!" });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default AccountController;
